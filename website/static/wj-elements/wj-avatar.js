var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import "./default-store-actions-65bc7799.js";
const styles = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n:host {\n  --wj-avatar-width: 48px;\n  --wj-avatar-height: 48px;\n  --wj-avatar-border-radius: 50%;\n  width: var(--wj-avatar-width);\n  height: var(--wj-avatar-height);\n  border-radius: var(--wj-avatar-border-radius);\n  display: block;\n}\n::slotted(wj-img),\n::slotted(img) {\n  border-radius: var(--wj-avatar-border-radius);\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  overflow: hidden;\n}";
const template = document.createElement("template");
template.innerHTML = `<style>
	${styles}
</style>`;
class Avatar extends WJElement {
  constructor() {
    super(template);
    __publicField(this, "className", "Thumbnail");
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("slot");
    fragment.appendChild(element);
    return fragment;
  }
}
customElements.get("wj-avatar") || window.customElements.define("wj-avatar", Avatar);
export {
  Avatar
};
