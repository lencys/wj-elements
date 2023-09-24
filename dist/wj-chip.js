var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import "./wj-store.js";
const styles = '/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Chip ]\n*/\n:host(.wj-color-primary) {\n  --wj-color-base: #eae0fb !important;\n  --wj-color-contrast: #845ae0 !important;\n}\n:host(.wj-color-complete) {\n  --wj-color-base: #d3eeff !important;\n  --wj-color-contrast: #0f8ff9 !important;\n}\n:host(.wj-color-success) {\n  --wj-color-base: #d6f7f0 !important;\n  --wj-color-contrast: #26bf93 !important;\n}\n:host(.wj-color-warning) {\n  --wj-color-base: #fffde1 !important;\n  --wj-color-contrast: #ffe858 !important;\n}\n:host(.wj-color-danger) {\n  --wj-color-base: #fde2da !important;\n  --wj-color-contrast: #e6533c !important;\n}\n:host(.wj-color-info) {\n  --wj-color-base: #dbe6e8 !important;\n  --wj-color-contrast: #475b6b !important;\n}\n:host(.wj-color-menu) {\n  --wj-color-base: #f4f4f4 !important;\n  --wj-color-contrast: #21252d !important;\n}\n:host {\n  --wj-chip-border-radius: 100px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  font-family: -apple-system, BlinkMacSystemFont, "Inter UI", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n  font-weight: 500;\n  font-size: 14px;\n  letter-spacing: -0.006em;\n  margin: 4px;\n  padding: 7px 12px;\n  text-align: center;\n  cursor: pointer;\n  white-space: nowrap;\n  color: #4b4b4b;\n  background: #e0e0e0;\n  text-shadow: none;\n  box-shadow: none;\n  border: 0 none;\n  line-height: 14px;\n  min-height: 28px;\n  height: 32px;\n  width: 100%;\n  max-width: fit-content;\n  min-width: 28px;\n  position: relative;\n  transition: width 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: var(--wj-chip-border-radius);\n  overflow: hidden;\n  vertical-align: middle;\n  box-sizing: border-box;\n}\n:host(.focus) {\n  box-shadow: none;\n}\n:host(:hover:not(.wj-active)) {\n  background: #f4f4f4;\n  color: #4b4b4b;\n}\n:host(.wj-active) {\n  background: red;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  border-bottom: 1px solid rgba(33, 33, 33, 0.29);\n  color: #4b4b4b;\n}\n:host(:focus, :active:focus, .wj-active:focus) {\n  outline: none !important;\n  box-shadow: 0 0 0 0px #78c8fe;\n}\n:host(.wj-active) {\n  background: #e0e0e0;\n  border-color: transparent;\n}\n:host(.wj-active) i {\n  width: 20px;\n}\n:host(.wj-disabled) {\n  background: #f4f4f4;\n  color: #757575;\n  border: 0;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n::slotted(wj-avatar) {\n  width: 24px;\n  height: 24px;\n}\n::slotted(wj-avatar:first-child) {\n  margin-inline: -8px 8px;\n  margin-top: -4px;\n  margin-bottom: -4px;\n}\n:host(.wj-color) {\n  background-color: var(--wj-color-base, red);\n  color: var(--wj-color-contrast);\n}\n::slotted(wj-icon:first-child) {\n  margin: -4px 8px -4px -4px;\n}\n::slotted(wj-icon:last-child) {\n  margin: -4px -4px -4px 8px;\n}';
class Chip extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Chip");
  }
  static get cssStyleSheet() {
    return styles;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("slot");
    if (this.color)
      this.classList.add("wj-color-" + this.color, "wj-color");
    if (this.disabled)
      this.classList.add("wj-disabled");
    if (this.outline)
      this.classList.add("wj-outline");
    fragment.appendChild(element);
    return fragment;
  }
  afterDraw() {
    if (this.hasAttribute("active")) {
      this.classList.add("wj-active");
      document.createElement("wj-icon");
    }
  }
}
customElements.get("wj-chip") || window.customElements.define("wj-chip", Chip);
export {
  Chip
};
