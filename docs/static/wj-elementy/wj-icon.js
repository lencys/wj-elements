var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
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
          iconContent.set(url, "");
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
    return getNamedUrl(url);
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
const getNamedUrl = (iconName) => {
  const path = `/assets/img/icons/svg/${iconName}.svg`;
  let parsedUrl = new URL(import.meta.url);
  let pathName = parsedUrl.pathname;
  let folderPath = pathName.substring(0, pathName.lastIndexOf("/"));
  return new URL(parsedUrl.origin + folderPath + path).href;
};
const styles = "/*\n[ WJ Icon ]\n*/\n:host(.wj-color-primary) {\n  --wj-icon-color: var(--wj-color-primary);\n}\n\n:host(.wj-color-complete) {\n  --wj-icon-color: var(--wj-color-complete);\n}\n\n:host(.wj-color-success) {\n  --wj-icon-color: var(--wj-color-success);\n}\n\n:host(.wj-color-warning) {\n  --wj-icon-color: var(--wj-color-warning);\n}\n\n:host(.wj-color-danger) {\n  --wj-icon-color: var(--wj-color-danger);\n}\n\n:host(.wj-color-info) {\n  --wj-icon-color: var(--wj-color-info);\n}\n\n:host {\n  --wj-icon-size: 1rem;\n  --wj-icon-width: var(--wj-icon-size, 100%);\n  --wj-icon-height: var(--wj-icon-size, 100%);\n  display: inline-block;\n  width: var(--wj-icon-width);\n  height: var(--wj-icon-height);\n  contain: strict;\n  fill: currentColor;\n  box-sizing: content-box !important;\n}\n\n.icon-inner, svg {\n  display: block;\n  width: var(--wj-icon-width);\n  height: var(--wj-icon-height);\n}\n\n:host(.wj-size-small) {\n  --wj-icon-size: 18px;\n}\n\n:host(.wj-size-large) {\n  --wj-icon-size: 32px;\n}\n\n:host(.wj-size) {\n  font-size: var(--wj-icon-size);\n}\n\n:host(.wj-color) {\n  color: var(--wj-icon-color) !important;\n}";
class Icon extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Icon");
  }
  static get cssStyleSheet() {
    return styles;
  }
  static get observedAttributes() {
    return ["name"];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    this.classList.add("lazy-loaded-image", "lazy");
    this.element = document.createElement("div");
    this.element.classList.add("icon-inner");
    this.url = getUrl(this);
    this.classList.add("wj-size");
    if (this.color)
      this.classList.add("wj-color-" + this.color, "wj-color");
    if (this.size)
      this.classList.add("wj-size-" + this.size);
    fragment.appendChild(this.element);
    return fragment;
  }
  afterDraw() {
    let lazyImageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          getSvgContent(this.url).then((svgContent) => {
            this.element.innerHTML = iconContent.get(this.url);
            this.element.querySelector("svg").setAttribute("part", "svg");
          });
          this.classList.remove("lazy");
          lazyImageObserver.unobserve(entry.target);
        }
      });
    });
    lazyImageObserver.observe(this.element);
  }
}
customElements.get("wj-icon") || window.customElements.define("wj-icon", Icon);
export {
  Icon
};
