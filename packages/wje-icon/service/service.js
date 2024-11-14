export const iconContent = new Map();
const requests = new Map();

let parser;

/**
 * Gets the source URL for the icon
 * @param src
 * @returns {null|string}
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
 * Checks if the string is a valid source
 * @param str
 * @returns {boolean}
 */
export const isSrc = (str) => str.length > 0 && /(\/|\.)/.test(str);

/**
 * Checks if the URL is an SVG data URL
 * @param url
 * @returns {*}
 */
export const isSvgDataUrl = (url) => url.startsWith('data:image/svg+xml');

/**
 * Checks if the URL is an encoded data URL
 * @param url
 * @returns {boolean}
 */
export const isEncodedDataUrl = (url) => url.indexOf(';utf8,') !== -1;

/**
 * Checks if the value is a string type
 * @param val
 * @returns {boolean}
 */
export const isStr = (val) => typeof val === 'string';

/**
 * Validates the SVG content
 * @param svgContent
 * @returns {string}
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
 * Validates the SVG content
 * @param elm
 * @returns {boolean}
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
 * Gets the SVG content from the URL
 * @param url
 * @param sanitize
 * @returns {Promise<void>|any}
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
 * Gets the URL for the icon element
 * @param i
 * @returns {null|string}
 */
export const getUrl = (i) => {
  let url = getSrc(i.src);
  if (url) {
    return url;
  }

  url = getName(i.name);

  if (url) {
    return getNamedUrl(url, i.hasAttribute("filled"));
  }

  return null;
};

/**
 * Gets the icon name
 * @param iconName
 * @returns {*|null}
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
 * Gets the named URL for the icon
 * @param iconName
 * @param filled
 * @returns {string}
 */
const getNamedUrl = (iconName, filled = false) => {
  const path = `${filled ? "filled" : "outline"}/${iconName}.svg`;

  let url = new URL(process.env.VITE_ICON_ASSETS_URL + path);

  return url.href;
};