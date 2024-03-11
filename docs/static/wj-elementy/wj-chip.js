var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement, { event } from "./wj-element.js";
const styles = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ WJ Chip ]\n*/\n:host {\n  --wj-chip-border-radius: 100px;\n  --wj-chip-background: var();\n  --wj-chip-color: #4b4b4b;\n  --wj-chip-margin: 0;\n  --wj-card-background: var(--wj-color-contrast-2);\n  --wj-card-color: var(--wj-color);\n  margin: var(--wj-chip-margin);\n}\n:host(.wj-color-primary) {\n  --wj-card-background: var(--wj-color-primary);\n}\n:host(.wj-color-complete) {\n  --wj-card-background: var(--wj-color-complete);\n}\n:host(.wj-color-success) {\n  --wj-card-background: var(--wj-color-success);\n}\n:host(.wj-color-warning) {\n  --wj-card-background: var(--wj-color-warning);\n}\n:host(.wj-color-danger) {\n  --wj-card-background: var(--wj-color-danger);\n}\n:host(.wj-color-info) {\n  --wj-card-background: var(--wj-color-info);\n}\n:host(.wj-color-menu) {\n  --wj-card-background: var(--wj-color-menu);\n}\n:host(.wj-color-primary) {\n  --wj-card-color: var(--wj-color-white);\n}\n:host(.wj-color-complete) {\n  --wj-card-color: var(--wj-color-white);\n}\n:host(.wj-color-success) {\n  --wj-card-color: var(--wj-color-white);\n}\n:host(.wj-color-warning) {\n  --wj-card-color: var(--wj-color);\n}\n:host(.wj-color-danger) {\n  --wj-card-color: var(--wj-color-white);\n}\n:host(.wj-color-info) {\n  --wj-card-color: var(--wj-color-white);\n}\n:host(.wj-color-menu) {\n  --wj-card-color: var(--wj-color-white) !important;\n}\n.native-chip {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n  letter-spacing: -0.006em;\n  margin: 0;\n  padding: 0.5rem 0.75rem;\n  text-align: center;\n  cursor: pointer;\n  white-space: nowrap;\n  background: var(--wj-chip-background);\n  color: var(--wj-chip-color);\n  text-shadow: none;\n  box-shadow: none;\n  border: 0 none;\n  line-height: 14px;\n  min-height: 28px;\n  height: 28px;\n  width: 100%;\n  max-width: fit-content;\n  min-width: 28px;\n  position: relative;\n  transition: width 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: var(--wj-chip-border-radius);\n  overflow: hidden;\n  vertical-align: middle;\n  box-sizing: border-box;\n}\n:host(.focus) {\n  box-shadow: none;\n}\n:host(:hover:not(.wj-active)) .native-chip {\n  background: var(--wj-color-contrast-3);\n  color: var(--wj-color);\n}\n:host(.wj-active) .native-chip {\n  border: 1px solid rgba(33, 33, 33, 0.2);\n}\n:host(:focus, :active:focus, .wj-active:focus) {\n  outline: none !important;\n  box-shadow: 0 0 0 0px #78c8fe;\n}\n.check {\n  display: none;\n}\n:host([active]) .check {\n  display: block;\n  margin-inline: 4px 0;\n}\n:host(.wj-disabled) {\n  background: #f4f4f4;\n  color: #757575;\n  border: 0;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n::slotted(wj-avatar) {\n  width: 22px;\n  height: 22px;\n}\n::slotted(wj-avatar:first-child) {\n  margin-inline: -8px 8px;\n  margin-top: -4px;\n  margin-bottom: -4px;\n}\n:host .native-chip {\n  background-color: var(--wj-card-background, #fff);\n  color: var(--wj-card-color);\n}\n::slotted(wj-icon:first-child) {\n  margin: -4px 8px -4px -4px;\n}\n::slotted(wj-icon:last-child) {\n  margin: -4px -4px -4px 8px;\n}\nwj-button {\n  --wj-button-border-radius: 50%;\n  --wj-button-margin-inline: .25rem -.5rem;\n  --wj-padding-top: .15rem;\n  --wj-padding-start: .15rem;\n  --wj-padding-end: .15rem;\n  --wj-padding-bottom: .15rem;\n}";
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
    let native = document.createElement("div");
    native.classList.add("native-chip");
    let slot = document.createElement("slot");
    let remove = document.createElement("wj-button");
    remove.setAttribute("part", "remove");
    remove.setAttribute("fill", "link");
    remove.innerHTML = `<wj-icon name="x"></wj-icon>`;
    let active = document.createElement("wj-icon");
    active.setAttribute("name", "check");
    active.classList.add("check");
    if (this.color)
      this.classList.add("wj-color-" + this.color, "wj-color");
    if (this.disabled)
      this.classList.add("wj-disabled");
    if (this.outline)
      this.classList.add("wj-outline");
    native.appendChild(slot);
    native.appendChild(active);
    if (this.hasAttribute("removable"))
      native.appendChild(remove);
    fragment.appendChild(native);
    this.remove = remove;
    return fragment;
  }
  afterDraw() {
    event.addListener(this.remove, "click", "wj:chip-remove", null, { stopPropagation: true });
  }
}
WJElement.define("wj-chip", Chip);
export {
  Chip as default
};
