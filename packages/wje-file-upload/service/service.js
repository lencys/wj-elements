/**
 * Returns a list of file type categories and their corresponding icon names.
 * @returns {Array<object>} An array of objects representing file type categories.
 * Each object contains the following properties:
 * - `type` {Array&lt;string>} A list of file extensions associated with the category.
 * - `name` {string} The name of the icon representing the category.
 * @example
 * const types = fileType();
 * console.log(types);
 * // [
 * //   { type: ["jpg", "jpeg", "png", "gif", "bpm", "tiff", "svg"], name: "photo" },
 * //   { type: ["zip", "rar", "cab", "jar", "tar", "gzip", "uue", "bz2", "scorm", "war"], name: "file-type-zip" },
 * //   ...
 * // ]
 */
function fileType() {
    return [
        {
            type: ['jpg', 'jpeg', 'png', 'gif', 'bpm', 'tiff', 'svg'],
            name: 'photo',
        },
        {
            type: ['zip', 'rar', 'cab', 'jar', 'tar', 'gzip', 'uue', 'bz2', 'scorm', 'war'],
            name: 'file-type-zip',
        },
        {
            type: ['mov', 'mp4', 'avi', 'flv'],
            name: 'video',
        },
        {
            type: ['m4a', 'mp3', 'wav'],
            name: 'audio',
        },
        {
            type: ['html', 'html'],
            name: 'file-type-html',
        },
        {
            type: ['css'],
            name: 'code',
        },
        {
            type: ['txt'],
            name: 'file-type-txt',
        },
        {
            type: ['doc', 'docx'],
            name: 'file-type-doc',
        },
        {
            type: ['xls', 'xlsx'],
            name: 'file-type-xls',
        },
        {
            type: ['pdf'],
            name: 'file-type-pdf',
        },
        {
            type: ['ppt', 'pptx', 'odp'],
            name: 'file-type-ppt',
        },
    ];
}

/**
 * Retrieves the icon name for a given file type.
 * @param {string} type The file type or category (e.g., "pdf", "image", "folder").
 * @returns {string} The name of the icon associated with the file type.
 * @example
 * getFileTypeIcon('pdf'); // Returns the icon name for PDF files.
 * getFileTypeIcon('folder'); // Returns 'folder'.
 */
export function getFileTypeIcon(type) {
    let searchType;
    if (type.toLowerCase() !== 'folder') {
        fileType().forEach((i) => {
            if (i.type.includes(type.toLowerCase())) {
                searchType = i.name;
            }
        });
    } else {
        searchType = 'folder';
    }

    return searchType;
}

/**
 * Checks if a given file matches any of the accepted file types.
 * @param {File} file The file to validate.
 * @param {string|string[]} acceptedFileTypes A comma-separated string or an array of accepted MIME types or file extensions.
 * @returns {boolean} Returns `true` if the file type is valid, otherwise `false`.
 * @throws {Error} Throws an error if `acceptedFileTypes` is empty.
 * @example
 * const file = new File([""], "example.png", { type: "image/png" });
 * const isValid = isValidFileType(file, "image/*,application/pdf");
 * console.log(isValid); // true
 * @example
 * const file = new File([""], "example.txt", { type: "text/plain" });
 * const isValid = isValidFileType(file, ["text/plain", "application/json"]);
 * console.log(isValid); // true
 */
export function isValidFileType(file, acceptedFileTypes) {
    // Get the base MIME type
    const baseMimeType = file.type.split('/')[0];
    // If acceptedFileTypes is a string, convert it to an array
    let acceptedTypes = Array.isArray(acceptedFileTypes) ? acceptedFileTypes : acceptedFileTypes.split(',');
    // If acceptedFileTypes is empty, throw an error
    if (acceptedTypes.length === 0) {
        throw new Error('acceptedFileTypes is empty');
    }

    // Iterate over acceptedFileTypes
    for (let type of acceptedTypes) {
        // ak type na image/* a file je napriklad image/png tak vratime true
        if (type.includes(baseMimeType + '/*')) {
            return true;
        }

        // Ak type suboru obsahuje konkretny typ a to bud ak je to zapisany napriklad image/png alebo len png tak vratime true
        if (type.includes(file.type) || type.includes(file.type.split('/')[1])) {
            return true;
        }
    }

    // Ak sme nic nenasli tak vratime false
    return false;
}

/**
 * Uploads a file in chunks using `XMLHttpRequest`, allowing for progress tracking.
 * @param {File} file The file to be uploaded.
 * @param {number} chunkSize The size of each chunk in bytes.
 * @param {HTMLElement} preview The element used to display upload progress.
 */
export function uploadFile(file, chunkSize, preview) {
    let offset = 0;
    const progressArray = new Array(Math.ceil(file.size / chunkSize)).fill(0);

    const readAndUploadChunk = (start, end) => {
        const reader = new FileReader();
        const chunkIndex = start / chunkSize;
        const chunk = file.slice(start, end);

        reader.onload = (e) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', '/upload', true);
            xhr.setRequestHeader('Content-Range', `${start}-${end}/${file.size}`);

            xhr.upload.onprogress = (event) => {
                if (event.lengthComputable) {
                    const progress = (event.loaded / event.total) * 100;
                    progressArray[chunkIndex] = progress;
                    const totalProgress = progressArray.reduce((a, b) => a + b, 0) / progressArray.length;
                    // this.updateOverallProgress(progressArray, file.lastModified);
                    // preview.setAttribute("progress", totalProgress);
                }
            };

            xhr.onload = () => {
                if (xhr.status === 200 || xhr.status === 201) {
                    progressArray[chunkIndex] = 100; // Táto časť je kompletná

                    // Odoslanie ďalšej časti
                    start += chunkSize;
                    if (start < file.size) {
                        preview.setAttribute('uploaded', start);
                        readAndUploadChunk(start, Math.min(start + chunkSize, file.size));
                    } else {
                        preview.setAttribute('uploaded', start);
                    }
                } else {
                    console.error('Error during upload: ', xhr.statusText);
                }
            };
            xhr.send(e.target.result);
        };
        reader.readAsArrayBuffer(chunk);
    };

    readAndUploadChunk(offset, Math.min(offset + chunkSize, file.size));
}

/**
 * Returns a function for uploading files either in chunks or as a whole file, based on the provided options.
 * @param {string} url The URL to which the file will be uploaded.
 * @param {number} [chunkSize] The size of each chunk in bytes when uploading in chunks (default is 1MB).
 * @param {boolean} [wholeFile] Whether to upload the file as a whole. If `true`, the entire file is uploaded at once.
 * @returns {Function} A function that takes a file and a preview element as arguments and uploads the file.
 * @example
 * // Upload a file in chunks
 * const uploadInChunks = upload('/upload', 1024 * 512); // 512KB chunks
 * uploadInChunks(file, previewElement);
 * @example
 * // Upload a whole file
 * const uploadWhole = upload('/upload', undefined, true);
 * uploadWhole(file, previewElement);
 */
export function upload(url, chunkSize = 1024 * 1024, wholeFile = false) {
    if (wholeFile) {
        return (file, preview) => uploadWholeFile(url, file, preview);
    }
    return (file, preview) => uploadFileInChunks(url, file, preview, chunkSize);
}

/**
 * Uploads a file in chunks to a specified URL, allowing for progress tracking and resuming in case of errors.
 * @param {string} url The URL to which the file chunks will be uploaded.
 * @param {File} file The file to be uploaded in chunks.
 * @param {HTMLElement} preview The element used to display upload progress.
 * @param {number} [chunkSize] The size of each chunk in bytes (default is 1MB).
 * @returns {Promise<object>} Resolves with the response of the last chunk uploaded, parsed as JSON.
 * @throws {Error} - Throws an error if a chunk fails to upload.
 */
export async function uploadFileInChunks(url, file, preview, chunkSize = 1024 * 1024) {
    let offset = 0;
    const totalChunks = Math.ceil(file.size / chunkSize);
    const partResponses = [];

    while (offset < file.size) {
        const chunk = file.slice(offset, offset + chunkSize);

        // Creating a custom ReadableStream to track progress of the current chunk
        const stream = new ReadableStream({
            start(controller) {
                const reader = chunk.stream().getReader();
                let uploadedBytes = 0;

                reader.read().then(function process({ done, value }) {
                    if (done) {
                        controller.close();
                        return Promise.resolve();
                    }

                    // Track progress
                    uploadedBytes += value.byteLength;
                    const percentComplete = ((offset + uploadedBytes) / file.size) * 100;
                    preview.setAttribute('uploaded', offset + uploadedBytes);

                    // Enqueue chunk data into the stream
                    controller.enqueue(value);

                    // Read the next chunk
                    return reader.read().then(process);
                });
            },
        });

        const formData = new FormData();
        formData.append('file', new Blob([stream])); // Send the current stream (chunk)
        formData.append('chunkIndex', Math.floor(offset / chunkSize)); // Send chunk index
        formData.append('totalChunks', totalChunks); // Send total chunks
        formData.append('fileName', file.name); // Send file name

        try {
            // Send the current chunk via Fetch
            const response = await fetch(url, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`Failed to upload chunk ${Math.floor(offset / chunkSize) + 1}: ${response.statusText}`);
            }

            partResponses.push(response);
        } catch (error) {
            console.error('Error uploading chunk:', error);
            break;
        }

        // Move to the next chunk
        offset += chunkSize;
    }

    const response = await partResponses.at(-1).json();

    return {
        data: response,
        file,
    };
}

/**
 * Uploads a file to a specified URL using a `POST` request and updates the preview element with the uploaded file size.
 * @param {string} url The URL to which the file will be uploaded.
 * @param {File} file The file to be uploaded.
 * @param {HTMLElement} preview The element that displays the upload preview. It will be updated with the file size.
 * @returns {Promise<{data: object, file: File}>} - A promise that resolves with the server response and the uploaded file.
 * @throws {Error} - Logs an error to the console if the request fails.
 */
export function uploadWholeFile(url, file, preview) {
    const formData = new FormData();
    formData.append('file', file);

    //use fetch
    return fetch(url, {
        method: 'POST',
        body: formData,
    })
        .then((response) => response.json())
        .then((data) => {
            preview.setAttribute('uploaded', file.size);
            return {
                data,
                file,
            };
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
