export const bool = (v) => {
    return v === 'false' || v === 'null' || v === 'NaN' || v === 'undefined' || v === '0' ? false : !!v;
};

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
    const mime = file.type.toLowerCase();
    const base = mime.split('/')[0];
    const ext = file.name.split('.').pop().toLowerCase();

    let accepted = Array.isArray(acceptedFileTypes)
      ? acceptedFileTypes
      : acceptedFileTypes.split(',').map(t => t.trim().toLowerCase());

    if (accepted.length === 0) {
        throw new Error('acceptedFileTypes is empty');
    }

    for (let type of accepted) {
        type = type.toLowerCase();

        // image/* alebo application/*
        if (type === base + '/*') return true;

        // presný MIME typ
        if (type === mime) return true;

        // extension (xlsx, png, pdf…)
        if (type === ext) return true;
    }

    return false;
}
