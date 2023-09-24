var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import "./wj-store.js";
function getHsl(text, s = 30, l = 80) {
  let str = text, hash = 0;
  for (let i = 0; i < (str == null ? void 0 : str.length); i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let h = hash % 360;
  let hexColor = "hsl(" + h + ", " + s + "%, " + l + "%)";
  return hexColor;
}
function getInitials(string, length = 2) {
  let names = string.split(" ");
  let initials = names[0].substring(0, 1).toUpperCase();
  if (names.length > 1 && length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
}
const styles = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n:host {\n  --wj-avatar-width: 32px;\n  --wj-avatar-height: 32px;\n  --wj-avatar-font-size: .75rem;\n  --wj-avatar-font-weight: 400;\n  --wj-avatar-color: inherit;\n  --wj-avatar-background-color: rgba(33, 33, 33, 0.17);\n  --wj-avatar-border-radius: 50%;\n  --wj-avatar-border-color: transparent;\n  --wj-avatar-border-width: 1px;\n  --wj-avatar-border-style: solid;\n  display: inline-block;\n  width: var(--wj-avatar-width);\n  height: var(--wj-avatar-height);\n  font-size: var(--wj-avatar-font-size);\n  font-weight: var(--wj-avatar-font-weight);\n  color: var(--wj-avatar-color);\n}\n:host .native-avatar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  border-radius: var(--wj-avatar-border-radius);\n  background-color: var(--wj-avatar-background-color);\n}\n::slotted(wj-img),\n::slotted(img) {\n  border-radius: var(--wj-avatar-border-radius);\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  overflow: hidden;\n}\n:host(.wj-avatar-border) {\n  border-color: var(--wj-avatar-border-color);\n  border-width: var(--wj-avatar-border-width);\n  border-style: var(--wj-avatar-border-style);\n}\n:host(.wj-avatar-small) {\n  --wj-avatar-width: 24px;\n  --wj-avatar-height: 24px;\n}\n:host(.wj-avatar-large) {\n  --wj-avatar-width: 48px;\n  --wj-avatar-height: 48px;\n}";
class Avatar extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Avatar");
  }
  static get cssStyleSheet() {
    return styles;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("div");
    element.setAttribute("part", "native");
    element.classList.add("native-avatar");
    if (this.size)
      this.classList.add("wj-avatar-" + this.size);
    if (this.isImage()) {
      let slot = document.createElement("slot");
      element.appendChild(slot);
    } else {
      if (this.hasAttribute("initials")) {
        let initials = getInitials(this.label);
        this.setAttribute("style", `--wj-avatar-background-color: ${getHsl(initials)}`);
        element.innerText = initials;
      } else {
        let slotIcon = document.createElement("slot");
        slotIcon.setAttribute("name", "icon");
        element.appendChild(slotIcon);
      }
    }
    fragment.appendChild(element);
    return fragment;
  }
  isImage() {
    return this.getElementsByTagName("wj-img").length > 0;
  }
}
customElements.get("wj-avatar") || window.customElements.define("wj-avatar", Avatar);
export {
  Avatar
};
