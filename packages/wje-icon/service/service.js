export const iconContent = new Map();
const requests = new Map();

let parser;

/**
 * Validates and returns a trimmed source string if it meets the required criteria.
 * @param {string} src The source string to validate and trim.
 * @returns {string|null} The validated and trimmed source string, or `null` if invalid.
 * @example
 * getSrc('  https://example.com/image.jpg  '); // Returns 'https://example.com/image.jpg'
 * getSrc('invalid-src'); // Returns null
 */
export const getSrc = (src) => {
    if (isStr(src)) {
        src = src.trim();
        if (isSrc(src)) {
            return src;
        }
    }
    return null;
};

/**
 * Checks if a given string is a valid source based on specific criteria.
 * @param {string} str The string to validate as a source.
 * @returns {boolean} `true` if the string is considered a valid source, `false` otherwise.
 * @example
 * isSrc('https://example.com/image.jpg'); // Returns true
 * isSrc('image.jpg'); // Returns true
 * isSrc('invalid-src'); // Returns false
 */
export const isSrc = (str) => str.length > 0 && /(\/|\.)/.test(str);

/**
 * Checks if the provided URL is an SVG data URL.
 * @param {string} url The URL to check.
 * @returns {boolean} - Returns `true` if the URL starts with 'data:image/svg+xml', otherwise `false`.
 * @example
 * isSvgDataUrl('data:image/svg+xml;base64,...'); // Returns true
 * isSvgDataUrl('https://example.com/image.svg'); // Returns false
 */
export const isSvgDataUrl = (url) => url.startsWith('data:image/svg+xml');

/**
 * Checks if the provided URL is an encoded data URL.
 * @param {string} url The URL to check.
 * @returns {boolean} - Returns `true` if the URL contains ';utf8,', otherwise `false`.
 * @example
 * isEncodedDataUrl('data:text/plain;charset=utf8,...'); // Returns true
 * isEncodedDataUrl('https://example.com/file.txt');     // Returns false
 */
export const isEncodedDataUrl = (url) => url.indexOf(';utf8,') !== -1;

/**
 * Checks if the provided value is of string type.
 * @param {*} val The value to check.
 * @returns {boolean} - Returns `true` if the value is a string, otherwise `false`.
 * @example
 * isStr('Hello, World!'); // Returns true
 * isStr(12345);           // Returns false
 */
export const isStr = (val) => typeof val === 'string';

/**
 * Validates the provided SVG content and ensures it contains a valid SVG element.
 * @param {string} svgContent The SVG content to validate.
 * @returns {string} Returns the validated SVG content as a string if valid, otherwise an empty string.
 * @example
 * const validSvg = '&lt;svg class="icon" xmlns="http://www.w3.org/2000/svg">&lt;/svg>';
 * validateContent(validSvg); // Returns '&lt;svg class="icon" xmlns="http://www.w3.org/2000/svg">&lt;/svg>'
 * const invalidSvg = '&lt;div>&lt;/div>';
 * validateContent(invalidSvg); // Returns ''
 */
export const validateContent = (svgContent) => {
    const div = document.createElement('div');
    div.innerHTML = svgContent;

    const svgElm = div.firstElementChild;
    if (svgElm && svgElm.nodeName.toLowerCase() === 'svg') {
        const svgClass = svgElm.getAttribute('class') || '';

        if (isValid(svgElm)) {
            return div.innerHTML;
        }
    }
    return '';
};

/**
 * Validates an element to ensure it does not contain potentially unsafe content.
 * @param {Element|Node} elm The element or node to validate.
 * @returns {boolean} - Returns `true` if the element is valid, otherwise `false`.
 * @description
 * This function checks the following:
 * 1. The element is an element node (nodeType 1).
 * 2. The element is not a `&lt;script>` tag.
 * 3. The element does not contain any `on*` event handler attributes (e.g., `onclick`).
 * 4. All child nodes recursively pass the same validation.
 * @example
 * const validElement = document.createElement('div');
 * isValid(validElement); // Returns true
 *
 * const scriptElement = document.createElement('script');
 * isValid(scriptElement); // Returns false
 *
 *  const divWithOnClick = document.createElement('div');
 * divWithOnClick.setAttribute('onclick', 'alert("hi")');
 * isValid(divWithOnClick); // Returns false
 */
export const isValid = (elm) => {
    // Only element nodes
    if (elm.nodeType === 1) {
        // Check for script elements
        if (elm.nodeName.toLowerCase() === 'script') {
            return false;
        }

        // Check for on* attributes
        for (let i = 0; i < elm.attributes.length; i++) {
            const name = elm.attributes[i].name;
            if (isStr(name) && name.toLowerCase().indexOf('on') === 0) {
                return false;
            }
        }

        // Check for child nodes
        for (let i = 0; i < elm.childNodes.length; i++) {
            if (!isValid(elm.childNodes[i])) {
                return false;
            }
        }
    }
    return true;
};

/**
 * Fetches and optionally sanitizes SVG content from a given URL.
 * @param {string} url The URL of the SVG resource or data URL.
 * @param {boolean} [sanitize] Whether to sanitize the SVG content. Defaults to `true`.
 * @returns {Promise<void>} A promise that resolves when the SVG content is fetched and stored.
 * @description
 * This function performs the following:
 * - If the URL is an SVG data URL and encoded, it parses the content to extract the SVG.
 * - If the URL is a standard HTTP/HTTPS URL, it fetches the content.
 * - Optionally sanitizes the fetched SVG content.
 * - Caches the content for future use.
 * @example
 * getSvgContent('https://example.com/icon.svg').then(() => {
 *   console.log('SVG content fetched and stored.');
 * });
 * @example
 * getSvgContent('data:image/svg+xml;base64,...', false).then(() => {
 *   console.log('SVG data URL processed without sanitization.');
 * });
 */
export const getSvgContent = (url, sanitize) => {
    let req = requests.get(url);
    if (!req) {
        if (typeof fetch !== 'undefined' && typeof document !== 'undefined') {
            if (isSvgDataUrl(url) && isEncodedDataUrl(url)) {
                if (!parser) {
                    parser = new DOMParser();
                }
                const doc = parser.parseFromString(url, 'text/html');
                const svg = doc.querySelector('svg');
                if (svg) {
                    iconContent.set(url, svg.outerHTML);
                }
                return Promise.resolve();
            } else {
                req = fetch(url).then((rsp) => {
                    if (rsp.ok) {
                        return rsp.text().then((svgContent) => {
                            if (svgContent && sanitize !== false) {
                                svgContent = validateContent(svgContent);
                            }
                            iconContent.set(url, svgContent || '');
                        });
                    }
                    return iconContent.set(url, '');
                });
                requests.set(url, req);
            }
        } else {
            iconContent.set(url, '');
            return Promise.resolve();
        }
    }
    return req;
};

/**
 * Retrieves the URL for an icon based on its `src` or `name` attributes.
 * @param {HTMLElement} i The icon element from which to extract the URL.
 * @returns {string|null} The URL of the icon if found, or `null` if no valid URL can be determined.
 * @description
 * This function performs the following:
 * 1. Attempts to retrieve the URL from the `src` attribute using `getSrc`.
 * 2. If no `src` is provided, it falls back to the `name` attribute using `getName`.
 * 3. If a name is found, it uses `getNamedUrl` to construct the URL, considering the `filled` attribute.
 * @example
 * const iconElement = document.querySelector('wje-icon');
 * const url = getUrl(iconElement);
 * console.log(url); // Outputs the resolved URL or `null`.
 */
export const getUrl = (i) => {
    let url = getSrc(i.src);
    if (url) {
        return url;
    }

    url = getName(i.name);

    if (url) {
        return getNamedUrl(url, i.hasAttribute('filled'));
    }

    return null;
};

/**
 * Validates and returns a sanitized icon name.
 * @param {string} iconName The icon name to validate.
 * @returns {string|null} The sanitized icon name, or `null` if the input is invalid.
 * @description
 * This function checks if the provided `iconName` is a valid string:
 * - It must not be empty or contain invalid characters.
 * - Only alphanumeric characters, hyphens, and digits are allowed.
 * @example
 * const validName = getName('user-icon');
 * console.log(validName); // 'user-icon'
 * const invalidName = getName('user@icon!');
 * console.log(invalidName); // null
 */
export const getName = (iconName) => {
    if (!isStr(iconName) || iconName.trim() === '') {
        return null;
    }

    const invalidChars = iconName.replace(/[a-z]|-|\d/gi, '');
    if (invalidChars !== '') {
        return null;
    }

    return iconName;
};

/**
 * Constructs the URL for a named SVG icon.
 * @param {string} iconName The name of the icon to retrieve.
 * @param {boolean} [filled] Whether to use the "filled" variant of the icon. Defaults to "outline" if `false`.
 * @returns {string} - The complete URL to the SVG icon.
 * @description
 * This function generates a URL for an icon based on its name and style (filled or outline).
 * It uses the base URL from the environment variable `VITE_ICON_ASSETS_URL`.
 * @example
 * const url = getNamedUrl('user-icon', true);
 * console.log(url); // 'https://example.com/filled/user-icon.svg'
 *
 * const outlineUrl = getNamedUrl('settings');
 * console.log(outlineUrl); // 'https://example.com/outline/settings.svg'
 */
const getNamedUrl = (iconName, filled = false) => {
    const path = `${filled ? 'filled' : 'outline'}/${iconName}.svg`;

    let url = new URL(process.env.VITE_ICON_ASSETS_URL + path);

    return url.href;
};
