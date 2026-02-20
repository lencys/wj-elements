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
export function isValidFileType(file: File, acceptedFileTypes: string | string[]): boolean;
export function bool(v: any): boolean;
