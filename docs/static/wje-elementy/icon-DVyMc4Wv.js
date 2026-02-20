var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
import { getBasePath } from "./base-path.js";
let registry = [];
registerIconLibrary("default", {
  resolver: (name, style) => getBasePath(`assets/img/icons/${style}/${name}.svg`)
});
function getIconLibrary(name) {
  return registry.find((lib) => lib.name === name);
}
function registerIconLibrary(name, options) {
  unregisterIconLibrary(name);
  registry.push({
    name,
    resolver: options.resolver
  });
}
function unregisterIconLibrary(name) {
  registry = registry.filter((lib) => lib.name !== name);
}
const iconContent = /* @__PURE__ */ new Map();
const requests = /* @__PURE__ */ new Map();
let parser;
const getSrc = (src) => {
  if (isStr(src)) {
    src = src.trim();
    if (isSrc(src)) {
      return src;
    }
  }
  return null;
};
const isSrc = (str) => str.length > 0 && /(\/|\.)/.test(str);
const isSvgDataUrl = (url) => url.startsWith("data:image/svg+xml");
const isEncodedDataUrl = (url) => url.indexOf(";utf8,") !== -1;
const isStr = (val) => typeof val === "string";
const validateContent = (svgContent) => {
  const div = document.createElement("div");
  div.innerHTML = svgContent;
  const svgElm = div.firstElementChild;
  if (svgElm && svgElm.nodeName.toLowerCase() === "svg") {
    svgElm.getAttribute("class") || "";
    if (isValid(svgElm)) {
      return div.innerHTML;
    }
  }
  return "";
};
const isValid = (elm) => {
  if (elm.nodeType === 1) {
    if (elm.nodeName.toLowerCase() === "script") {
      return false;
    }
    for (let i = 0; i < elm.attributes.length; i++) {
      const name = elm.attributes[i].name;
      if (isStr(name) && name.toLowerCase().indexOf("on") === 0) {
        return false;
      }
    }
    for (let i = 0; i < elm.childNodes.length; i++) {
      if (!isValid(elm.childNodes[i])) {
        return false;
      }
    }
  }
  return true;
};
const getSvgContent = (url, sanitize) => {
  let req = requests.get(url);
  if (!req) {
    if (typeof fetch !== "undefined" && typeof document !== "undefined") {
      if (isSvgDataUrl(url) && isEncodedDataUrl(url)) {
        if (!parser) {
          parser = new DOMParser();
        }
        const doc = parser.parseFromString(url, "text/html");
        const svg = doc.querySelector("svg");
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
              iconContent.set(url, svgContent || "");
            });
          }
          return iconContent.set(url, "");
        });
        requests.set(url, req);
      }
    } else {
      iconContent.set(url, "");
      return Promise.resolve();
    }
  }
  return req;
};
const getUrl = (i) => {
  let url = getSrc(i.src);
  if (url) {
    return url;
  }
  url = getName(i.name);
  if (url) {
    return getNamedUrl(url, i.library, i.hasAttribute("filled"));
  }
  return null;
};
const getName = (iconName) => {
  if (!isStr(iconName) || iconName.trim() === "") {
    return null;
  }
  const invalidChars = iconName.replace(/[a-z]|-|\d/gi, "");
  if (invalidChars !== "") {
    return null;
  }
  return iconName;
};
const getNamedUrl = (iconName, libraryName = "default", filled = false) => {
  let library = getIconLibrary(libraryName);
  let url = library.resolver(iconName, filled ? "filled" : "outline");
  return url;
};
const styles = "/*\n[ WJ Icon ]\n*/\n\n:host {\n    width: var(--wje-icon-size);\n    height: var(--wje-icon-size);\n    display: block;\n}\n\n.native-icon {\n    display: flex;\n    align-items: center;\n}\n\nsvg {\n    width: 100%;\n    height: 100%;\n    stroke-width: var(--wje-icon-stroke);\n    color: var(--wje-icon-color);\n}\n\n/*STROKE*/\n:host([stroke='1']) {\n    --wje-icon-stroke: 1;\n}\n\n:host([stroke='1.25']) {\n    --wje-icon-stroke: 1.25;\n}\n\n:host([stroke='1.5']) {\n    --wje-icon-stroke: 1.5;\n}\n\n:host([stroke='1.75']) {\n    --wje-icon-stroke: 1.75;\n}\n\n:host([stroke='2']) {\n    --wje-icon-stroke: 2;\n}\n\n/*SIZE*/\n:host([size='2x-small']) {\n    --wje-icon-size: var(--wje-size-2x-small);\n}\n\n:host([size='x-small']) {\n    --wje-icon-size: var(--wje-size-x-small);\n}\n\n:host([size='small']) {\n    --wje-icon-size: var(--wje-size-small);\n}\n\n:host([size='medium']) {\n    --wje-icon-size: var(--wje-size-medium);\n}\n\n:host([size='large']) {\n    --wje-icon-size: var(--wje-size-large);\n}\n\n:host([size='x-large']) {\n    --wje-icon-size: var(--wje-size-x-large);\n}\n\n:host([size='2x-large']) {\n    --wje-icon-size: var(--wje-size-2x-large);\n}\n\n:host([size='3x-large']) {\n    --wje-icon-size: var(--wje-size-3x-large);\n}\n\n:host([size='4x-large']) {\n    --wje-icon-size: var(--wje-size-4x-large);\n}\n\n/*COLOR*/\n:host([color='primary']) .native-icon {\n    color: var(--wje-color-primary-9);\n}\n\n:host([color='complete']) .native-icon {\n    color: var(--wje-color-complete-9);\n}\n\n:host([color='success']) .native-icon {\n    color: var(--wje-color-success-9);\n}\n\n:host([color='warning']) .native-icon {\n    color: var(--wje-color-warning-9);\n}\n\n:host([color='danger']) .native-icon {\n    color: var(--wje-color-danger-9);\n}\n\n:host([color='info']) .native-icon {\n    color: var(--wje-color-info-9);\n}\n\n:host([color='menu']) .native-icon {\n    color: var(--wje-color-contrast-9);\n}\n";
class Icon extends WJElement {
  /**
   * Creates an instance of IconElement.
   * @class
   */
  constructor() {
    super();
    /**
     * Sets the name of the icon.
     * @type {string}
     */
    __publicField(this, "className", "Icon");
  }
  /**
   * Returns the CSS styles for the component.
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Returns the list of attributes to observe for changes.
   * @static
   * @returns {Array<string>}
   */
  static get observedAttributes() {
    return ["name", "filled", "label"];
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
    this.syncAria();
  }
  /**
   * Draws the component.
   * @param {object} context The context for drawing.
   * @param {object} store The store for drawing.
   * @param {object} params The parameters for drawing.
   * @returns {DocumentFragment}
   */
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    this.classList.add("lazy-loaded-image", "lazy");
    let native = document.createElement("div");
    native.setAttribute("part", "native");
    native.classList.add("native-icon");
    this.url = getUrl(this);
    fragment.appendChild(native);
    this.native = native;
    return fragment;
  }
  /**
   * Called after the component has been drawn.
   */
  afterDraw() {
    this.syncAria();
    let lazyImageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          getSvgContent(this.url).then((svgContent) => {
            var _a;
            this.native.innerHTML = iconContent == null ? void 0 : iconContent.get(this.url);
            (_a = this.native.querySelector("svg")) == null ? void 0 : _a.setAttribute("part", "svg");
          });
          this.classList.remove("lazy");
          lazyImageObserver.unobserve(entry.target);
        }
      });
    });
    lazyImageObserver.observe(this.native);
  }
  /**
   * Sync ARIA attributes on host.
   */
  syncAria() {
    const ariaLabel = this.getAttribute("aria-label");
    const label = this.getAttribute("label");
    if (ariaLabel || label) {
      if (!this.hasAttribute("role")) {
        this.setAttribute("role", "img");
      }
      if (!ariaLabel && label) {
        this.setAriaState({ label });
      }
      this.removeAttribute("aria-hidden");
    } else {
      this.setAttribute("aria-hidden", "true");
    }
  }
  /**
   * Handles attribute changes for ARIA sync.
   * @param {string} name
   * @param {string|null} oldValue
   * @param {string|null} newValue
   */
  attributeChangedCallback(name, oldValue, newValue) {
    if (super.attributeChangedCallback) {
      super.attributeChangedCallback(name, oldValue, newValue);
    }
    if (name === "label" && oldValue !== newValue) {
      this.syncAria();
    }
  }
}
Icon.define("wje-icon", Icon);
export {
  Icon as I,
  registerIconLibrary as r,
  unregisterIconLibrary as u
};
//# sourceMappingURL=icon-DVyMc4Wv.js.map
