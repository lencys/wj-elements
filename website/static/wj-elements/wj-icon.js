var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import "./wj-store.js";
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
  return `/demo/assets/img/icons/svgs/solid/${iconName}.svg`;
};
const styles = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Chip ]\n*/\n:host(.wj-color-primary) {\n  --wj-color-base: #eae0fb !important;\n  --wj-color-contrast: #845ae0 !important;\n}\n:host(.wj-color-complete) {\n  --wj-color-base: #d3eeff !important;\n  --wj-color-contrast: #0f8ff9 !important;\n}\n:host(.wj-color-success) {\n  --wj-color-base: #d6f7f0 !important;\n  --wj-color-contrast: #26bf93 !important;\n}\n:host(.wj-color-warning) {\n  --wj-color-base: #fffde1 !important;\n  --wj-color-contrast: #ffe858 !important;\n}\n:host(.wj-color-danger) {\n  --wj-color-base: #fde2da !important;\n  --wj-color-contrast: #e6533c !important;\n}\n:host(.wj-color-info) {\n  --wj-color-base: #dbe6e8 !important;\n  --wj-color-contrast: #475b6b !important;\n}\n:host(.wj-color-menu) {\n  --wj-color-base: #f4f4f4 !important;\n  --wj-color-contrast: #21252d !important;\n}\n:host {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  contain: strict;\n  fill: currentColor;\n  box-sizing: content-box !important;\n}\n.icon-inner, svg {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n:host(.wj-size-small) {\n  --wj-icon-size: 18px;\n}\n:host(.wj-size-large) {\n  --wj-icon-size: 32px;\n}\n:host(.wj-size) {\n  font-size: var(--wj-icon-size) !important;\n}\n:host(.wj-color) {\n  color: var(--wj-color-contrast);\n}";
const template = document.createElement("template");
template.innerHTML = `<style>
	${styles}
</style>`;
class Icon extends WJElement {
  constructor() {
    super(template);
    __publicField(this, "className", "Icon");
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("div");
    element.classList.add("icon-inner");
    let url = getUrl(this);
    getSvgContent(url).then((svgContent) => {
      element.innerHTML = iconContent.get(url);
    });
    if (this.color)
      this.classList.add("wj-color-" + this.color, "wj-color");
    if (this.size)
      this.classList.add("wj-size", "wj-size-" + this.size);
    fragment.appendChild(element);
    return fragment;
  }
}
customElements.get("wj-icon") || window.customElements.define("wj-icon", Icon);
export {
  Icon
};
