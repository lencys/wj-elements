/**
 * Returns a list of file type categories and their corresponding icon names.
 * @returns {Array<object>} An array of objects representing file type categories.
 * Each object contains the following properties:
 * - `type` {Array&lt;string>} A list of file extensions and MIME subtypes associated with the category.
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
            type: [
                'doc',
                'docx',
                'msword',
                'vnd.openxmlformats-officedocument.wordprocessingml.document',
                'vnd.ms-word.document.macroenabled.12',
                'vnd.openxmlformats-officedocument.wordprocessingml.template',
                'vnd.ms-word.template.macroenabled.12',
                'vnd.oasis.opendocument.text',
            ],
            name: 'file-type-doc',
        },
        {
            type: [
                'xls',
                'xlsx',
                'vnd.ms-excel',
                'vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'vnd.ms-excel.sheet.macroenabled.12',
                'vnd.openxmlformats-officedocument.spreadsheetml.template',
                'vnd.ms-excel.template.macroenabled.12',
                'vnd.ms-excel.addin.macroenabled.12',
                'vnd.ms-excel.sheet.binary.macroenabled.12',
                'vnd.oasis.opendocument.spreadsheet',
            ],
            name: 'file-type-xls',
        },
        {
            type: ['pdf'],
            name: 'file-type-pdf',
        },
        {
            type: [
                'ppt',
                'pptx',
                'odp',
                'vnd.ms-powerpoint',
                'vnd.openxmlformats-officedocument.presentationml.presentation',
                'vnd.ms-powerpoint.presentation.macroenabled.12',
                'vnd.openxmlformats-officedocument.presentationml.slideshow',
                'vnd.ms-powerpoint.slideshow.macroenabled.12',
                'vnd.openxmlformats-officedocument.presentationml.template',
                'vnd.ms-powerpoint.template.macroenabled.12',
                'vnd.oasis.opendocument.presentation',
            ],
            name: 'file-type-ppt',
        },
    ];
}

/**
 * Retrieves the icon name for a given file type.
 * @param {string} type The file extension, MIME subtype or category (e.g., "pdf", "vnd.ms-excel", "folder").
 * @returns {string} The name of the icon associated with the file type.
 * @example
 * getFileTypeIcon('pdf'); // Returns the icon name for PDF files.
 * getFileTypeIcon('folder'); // Returns 'folder'.
 */
export function getFileTypeIcon(type) {
    let searchType;
    if (!type) {
        return searchType;
    }

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
