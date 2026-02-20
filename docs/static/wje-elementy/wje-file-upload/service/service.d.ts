/**
 * Retrieves the icon name for a given file type.
 * @param {string} type The file type or category (e.g., "pdf", "image", "folder").
 * @returns {string} The name of the icon associated with the file type.
 * @example
 * getFileTypeIcon('pdf'); // Returns the icon name for PDF files.
 * getFileTypeIcon('folder'); // Returns 'folder'.
 */
export function getFileTypeIcon(type: string): string;
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
export function upload(url: string, chunkSize?: number, wholeFile?: boolean): Function;
/**
 * Uploads a file in chunks to a specified URL, allowing for progress tracking and resuming in case of errors.
 * @param {string} url The URL to which the file chunks will be uploaded.
 * @param {File} file The file to be uploaded in chunks.
 * @param {HTMLElement} preview The element used to display upload progress.
 * @param {number} [chunkSize] The size of each chunk in bytes (default is 1MB).
 * @returns {Promise<object>} Resolves with the response of the last chunk uploaded, parsed as JSON.
 * @throws {Error} - Throws an error if a chunk fails to upload.
 */
export function uploadFileInChunks(url: string, file: File, preview: HTMLElement, chunkSize?: number): Promise<object>;
/**
 * Uploads a file to a specified URL using a `POST` request and updates the preview element with the uploaded file size.
 * @param {string} url The URL to which the file will be uploaded.
 * @param {File} file The file to be uploaded.
 * @param {HTMLElement} preview The element that displays the upload preview. It will be updated with the file size.
 * @returns {Promise<{data: object, file: File}>} - A promise that resolves with the server response and the uploaded file.
 * @throws {Error} - Logs an error to the console if the request fails.
 */
export function uploadWholeFile(url: string, file: File, preview: HTMLElement): Promise<{
    data: object;
    file: File;
}>;
