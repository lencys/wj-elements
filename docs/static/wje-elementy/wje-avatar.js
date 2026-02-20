var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
function getAvatarColors(text) {
  let hash = 0;
  for (let i = 0; i < (text == null ? void 0 : text.length); i++) {
    hash = text.charCodeAt(i) + hash * 31;
  }
  const h = Math.abs(hash) % 360;
  const bgS = 30;
  const bgL = 88;
  const textS = 50;
  const textL = 48;
  return {
    background: `hsl(${h}, ${bgS}%, ${bgL}%)`,
    color: `hsl(${h}, ${textS}%, ${textL}%)`
  };
}
function getInitials(string, length = 2) {
  let names = string.split(" ");
  let initials = names[0].substring(0, 1).toUpperCase();
  if (names.length > 1 && length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
}
const styles = "/*\n[ WJ Avatar ]\n*/\n\n:host {\n    display: inline-block;\n    font-size: var(--wje-avatar-font-size);\n    font-weight: var(--wje-avatar-font-weight);\n    color: var(--wje-avatar-color);\n    .native-avatar {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: var(--wje-avatar-size);\n        height: var(--wje-avatar-size);\n        border-radius: var(--wje-avatar-border-radius);\n        background-color: var(--wje-avatar-background-color);\n    }\n}\n\n::slotted(wje-img),\n::slotted(img) {\n    border-radius: var(--wje-avatar-border-radius);\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    overflow: hidden;\n}\n\n:host(.wje-avatar-border) {\n    border-color: var(--wje-avatar-border-color);\n    border-width: var(--wje-avatar-border-width);\n    border-style: var(--wje-avatar-border-style);\n}\n\n:host([size='small']) {\n    --wje-avatar-size: var(--wje-size-small); /* 12px */\n    --wje-avatar-font-size: var(--wje-font-size-2x-small);\n}\n\n:host([size='medium']) {\n    --wje-avatar-size: var(--wje-size-medium); /* 14px */\n    --wje-avatar-font-size: var(--wje-font-size-2x-small);\n}\n\n:host([size='normal']) {\n    --wje-avatar-size: var(--wje-size); /* 14px */\n}\n\n:host([size='large']) {\n    --wje-avatar-size: var(--wje-size-large); /* 20px */\n}\n\n:host([size='x-large']) {\n    --wje-avatar-size: var(--wje-size-x-large); /* 24px */\n}\n\n:host([size='2x-large']) {\n    --wje-avatar-size: var(--wje-size-2x-large); /* 36px */\n    --wje-avatar-font-size: var(--wje-font-size-small);\n}\n\n:host([size='3x-large']) {\n    --wje-avatar-size: var(--wje-size-3x-large); /* 48px */\n    --wje-avatar-font-size: var(--wje-font-size-medium);\n}\n\n:host([size='4x-large']) {\n    --wje-avatar-size: var(--wje-size-4x-large); /* 72px */\n    --wje-avatar-font-size: var(--wje-font-size-x-large);\n}\n\n:host([size='5x-large']) {\n    --wje-avatar-size: var(--wje-size-5x-large); /* 144px */\n    --wje-avatar-font-size: var(--wje-font-size-3x-large);\n}\n\n/* Status Placement */\n:host slot[name='status'] {\n    display: block;\n    position: absolute;\n}\n\n:host([status-placement='top-start']) slot[name='status'] {\n    top: -4px;\n    left: -4px;\n}\n\n:host([status-placement='top-end']) slot[name='status'] {\n    top: -4px;\n    right: -4px;\n}\n\n:host([status-placement='bottom-start']) slot[name='status'] {\n    bottom: -4px;\n    left: -4px;\n}\n\n:host([status-placement='bottom-end']) slot[name='status'] {\n    bottom: -4px;\n    right: -4px;\n}\n";
class Avatar extends WJElement {
  /**
   * Avatar class constructor.
   */
  constructor() {
    super();
    /**
     * Class name for the Avatar element.
     */
    __publicField(this, "className", "Avatar");
  }
  /**
   * Sets the value of the 'label' attribute for the element.
   * @param {string} value The new value to be set for the 'label' attribute.
   */
  set label(value) {
    this.setAttribute("label", value);
  }
  /**
   * Retrieves the value of the 'label' attribute for the element.
   * If the attribute is not set, it defaults to an empty string.
   * @returns {string} The value of the 'label' attribute or an empty string if not defined.
   */
  get label() {
    return this.getAttribute("label") || "";
  }
  /**
   * Sets the value of initials for the element by updating
   * the 'initials' attribute with the provided value.
   * @param {string} value The value to be set as the initials.
   */
  set initials(value) {
    this.setAttribute("initials", "");
  }
  /**
   * Retrieves the value of the 'initials' attribute if it exists.
   * @returns {boolean} Returns true if the 'initials' attribute is present, otherwise false.
   */
  get initials() {
    return this.hasAttribute("initials") || false;
  }
  /**
   * Sets the size attribute for the element.
   * @param {string | number} value The value to set for the size attribute.
   */
  set size(value) {
    this.setAttribute("size", value);
  }
  /**
   * Retrieves the size attribute of the element. If the size attribute
   * is not defined, it returns the default value 'medium'.
   * @returns {string} The size value of the element or 'medium' if not specified.
   */
  get size() {
    return this.getAttribute("size") || "medium";
  }
  /**
   * Getter for cssStyleSheet.
   * @returns {string} styles
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
    return ["initials", "label"];
  }
  /**
   * Method to setup attributes.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
    this.syncAria();
  }
  attributeChangedCallback(name, oldValue, newValue) {
    var _a;
    (_a = super.attributeChangedCallback) == null ? void 0 : _a.call(this, name, oldValue, newValue);
    if (name === "label" || name === "initials") {
      this.syncAria();
    }
  }
  /**
   * Method to draw the avatar element and return a document fragment.
   * @returns {object} fragment - The document fragment
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("div");
    element.setAttribute("part", "native");
    element.classList.add("native-avatar");
    let slot = document.createElement("slot");
    element.appendChild(slot);
    if (this.initials) {
      let initials = getInitials(this.label);
      const { background, color } = getAvatarColors(initials);
      this.style.setProperty("--wje-avatar-background-color", background);
      this.style.setProperty("--wje-avatar-color", color);
      element.innerText = initials;
    } else {
      let slotIcon = document.createElement("slot");
      slotIcon.setAttribute("name", "icon");
      element.appendChild(slotIcon);
    }
    let status = document.createElement("slot");
    status.setAttribute("name", "status");
    status.setAttribute("part", "status");
    let secondary = document.createElement("slot");
    secondary.setAttribute("name", "secondary");
    secondary.setAttribute("part", "secondary");
    element.appendChild(status);
    element.appendChild(secondary);
    fragment.appendChild(element);
    return fragment;
  }
  /**
   * Syncs ARIA attributes on the host element.
   */
  syncAria() {
    var _a;
    const label = (_a = this.label) == null ? void 0 : _a.trim();
    if (label) {
      this.setAriaState({ label });
    }
  }
  /**
   * Method to check if the avatar is an image.
   * @returns {boolean} - True if the avatar is an image, false otherwise
   */
  isImage() {
    return this.getElementsByTagName("wje-img").length > 0;
  }
}
Avatar.define("wje-avatar", Avatar);
export {
  Avatar as default
};
//# sourceMappingURL=wje-avatar.js.map
