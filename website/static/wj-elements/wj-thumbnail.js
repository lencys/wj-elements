var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import "./default-store-actions-65bc7799.js";
const styles = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n:host {\n  --wj-thumbnail-width: 48px;\n  --wj-thumbnail-height: 48px;\n  --wj-border-radius: 0;\n}\n:host {\n  width: var(--wj-thumbnail-width);\n  height: var(--wj-thumbnail-height);\n  display: block;\n  border-radius: var(--wj-border-radius);\n}\n::slotted(wj-img),\n::slotted(img) {\n  border-radius: var(--wj-border-radius);\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  overflow: hidden;\n}";
const template = document.createElement("template");
template.innerHTML = `<style>
	${styles}
</style>`;
class Thumbnail extends WJElement {
  constructor() {
    super(template);
    __publicField(this, "className", "Thumbnail");
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  beforeDraw(context, store, params) {
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("slot");
    fragment.appendChild(element);
    return fragment;
  }
}
customElements.get("wj-thumbnail") || window.customElements.define("wj-thumbnail", Thumbnail);
export {
  Thumbnail
};
