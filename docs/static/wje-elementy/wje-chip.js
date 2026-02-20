var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
import { WjElementUtils } from "./element-utils.js";
import { event } from "./event.js";
const styles = "/*\n[ WJ Chip ]\n*/\n\n:host {\n    display: inline-flex;\n    --wje-button-border-radius: var(--wje-chip-round-border-radius);\n}\n\n.native-chip {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: var(--wje-font-size);\n    line-height: 1;\n    letter-spacing: -0.006em;\n    padding-block: var(--wje-chip-padding-block);\n    padding-inline: var(--wje-chip-padding-inline);\n    margin-block: var(--wje-chip-margin-block);\n    margin-inline: var(--wje-chip-margin-inline);\n    text-align: center;\n    cursor: pointer;\n    white-space: nowrap;\n    text-shadow: none;\n    box-shadow: none;\n    border: 0 none;\n    width: 100%;\n    height: 28px;\n    max-width: fit-content;\n    position: relative;\n    transition: width 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n    border-radius: var(--wje-border-radius-pill);\n    overflow: hidden;\n    vertical-align: middle;\n    box-sizing: border-box;\n    background-color: var(--wje-chip-background);\n    color: var(--wje-chip-color);\n    &:hover {\n        background-color: var(--wje-chip-background-hover);\n        color: var(--wje-chip-color-hover);\n    }\n}\n\n:host(.focus) {\n    box-shadow: none;\n}\n\n:host(.wje-active) .native-chip {\n    border: 1px solid var(--wje-color-primary-11);\n    background-color: var(--wje-color-contrast-3);\n    color: var(--wje-color);\n}\n\n:host(:focus, :active:focus, .wje-active:focus) {\n    outline: none !important;\n}\n\n:host([size='small']) .native-chip {\n    font-size: var(--wje-font-size-small);\n    height: 24px;\n    padding: var(--wje-spacing-3x-small)  var(--wje-spacing-x-small);\n    wje-button {\n        --wje-button-margin-inline: var(--wje-spacing-3x-small) calc(-1 * var(--wje-spacing-3x-small));\n    }\n}\n\n:host([size='large']) .native-chip {\n    font-size: var(--wje-font-size-medium);\n    height: 34px;\n    padding: var(--wje-spacing-x-small) var(--wje-spacing-small);\n\n}\n\n:host([round]) .native-chip {\n    border-radius: var(--wje-chip-round-border-radius);\n}\n\n.check {\n    display: none;\n}\n\n:host([active]) {\n    .check {\n        display: block;\n        margin-inline: 4px 0;\n    }\n}\n\n:host([disabled]) {\n    opacity: 0.5;\n    border: 0;\n    pointer-events: none;\n    cursor: not-allowed;\n}\n\n::slotted(wje-avatar) {\n    width: 22px;\n    height: 22px;\n}\n\n::slotted(wje-avatar:first-child) {\n    margin-inline: -8px 8px;\n    margin-top: -4px;\n    margin-bottom: -4px;\n}\n\n::slotted(wje-icon:first-child) {\n    margin: -4px 8px -4px -4px;\n}\n\n::slotted(wje-icon:last-child) {\n    margin: -4px -4px -4px 8px;\n}\n\nslot[name='end'].has-content {\n    display: block;\n    margin-inline-start: 8px;\n}\n\nwje-button {\n    /*--wje-button-border-radius: 50%;*/\n    --wje-button-margin-inline: 0.25rem -0.5rem;\n    --wje-padding-top: 0.15rem;\n    --wje-padding-start: 0.15rem;\n    --wje-padding-end: 0.15rem;\n    --wje-padding-bottom: 0.15rem;\n}\n\n/*BG - TEXT*/\n.native-chip.wje-color-primary {\n    background-color: var(--wje-color-primary-1);\n    color: var(--wje-color-primary-9);\n}\n\n.native-chip.wje-color-complete {\n    background-color: var(--wje-color-complete-1);\n    color: var(--wje-color-complete-9);\n}\n\n.native-chip.wje-color-success {\n    background-color: var(--wje-color-success-1);\n    color: var(--wje-color-success-9);\n}\n\n.native-chip.wje-color-warning {\n    background-color: var(--wje-color-warning-2);\n    color: var(--wje-color-warning-11);\n}\n\n.native-chip.wje-color-danger {\n    background-color: var(--wje-color-danger-1);\n    color: var(--wje-color-danger-9);\n}\n\n.native-chip.wje-color-info {\n    background-color: var(--wje-color-info-1);\n    color: var(--wje-color-info-9);\n}\n\n/*HOVER*/\n@media (any-hover: hover) {\n    .native-chip.wje-color-primary:hover {\n        background-color: var(--wje-color-primary-4);\n        color: var(--wje-color-primary-10);\n    }\n\n    .native-chip.wje-color-complete:hover {\n        background-color: var(--wje-color-complete-4);\n        color: var(--wje-color-complete-10);\n    }\n\n    .native-chip.wje-color-success:hover {\n        background-color: var(--wje-color-success-4);\n        color: var(--wje-color-success-10);\n    }\n\n    .native-chip.wje-color-warning:hover {\n        background-color: var(--wje-color-warning-4);\n        color: var(--wje-color-warning-11);\n    }\n\n    .native-chip.wje-color-danger:hover {\n        background-color: var(--wje-color-danger-4);\n        color: var(--wje-color-danger-10);\n    }\n\n    .native-chip.wje-color-info:hover {\n        background-color: var(--wje-color-info-4);\n        color: var(--wje-color-info-10);\n    }\n}\n";
class Chip extends WJElement {
  /**
   * Chip constructor method.
   */
  constructor() {
    super();
    /**
     * Class name for the Chip element.
     * @type {string}
     */
    __publicField(this, "className", "Chip");
  }
  /**
   * Sets or removes the "round" attribute on the element based on the provided value.
   * @param {boolean} value Determines whether the "round" attribute should be set or removed.
   * If true, the "round" attribute is added. If false, the "round"
   * attribute is removed.
   */
  set round(value) {
    if (value) {
      this.setAttribute("round", "");
    } else {
      this.removeAttribute("round");
    }
  }
  /**
   * Checks if the 'round' attribute is present on the element.
   * @returns {boolean} Returns true if the 'round' attribute exists, otherwise false.
   */
  get round() {
    return this.hasAttribute("round");
  }
  /**
   * Sets the size attribute of the element.
   * @param {string} value The value to set for the size attribute.
   */
  set size(value) {
    this.setAttribute("size", value);
  }
  /**
   * Retrieves the 'size' attribute of the current element.
   * @returns {string | null} The value of the 'size' attribute, or null if the attribute is not set.
   */
  get size() {
    return this.getAttribute("size");
  }
  /**
   * Sets or removes the "removable" attribute on the element.
   * @param {boolean} value A boolean indicating whether the element should have the "removable" attribute.
   * If true, the "removable" attribute is added;
   * if false, the "removable" attribute is removed.
   */
  set removable(value) {
    if (value) {
      this.setAttribute("removable", "");
    } else {
      this.removeAttribute("removable");
    }
  }
  /**
   * Determines if the element has the 'removable' attribute.
   * @returns {boolean} True if the element has the 'removable' attribute, otherwise false.
   */
  get removable() {
    return this.hasAttribute("removable");
  }
  /**
   * Sets the disabled state of the element.
   * If true, the 'disabled' attribute is added to the element.
   * If false, the 'disabled' attribute is removed from the element.
   * @param {boolean} value Specifies whether the element should be disabled.
   */
  set disabled(value) {
    if (value) {
      this.setAttribute("disabled", "");
    } else {
      this.removeAttribute("disabled");
    }
  }
  /**
   * Determines if the element has the 'disabled' attribute.
   * @returns {boolean} True if the element has the 'disabled' attribute, otherwise false.
   */
  get disabled() {
    return this.hasAttribute("disabled");
  }
  /**
   * Getter for the CSS stylesheet.
   * @returns {*}
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Getter for the observed attributes.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
    this.syncAria();
  }
  static get observedAttributes() {
    return ["removable", "disabled", "label"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    var _a;
    (_a = super.attributeChangedCallback) == null ? void 0 : _a.call(this, name, oldValue, newValue);
    if (name === "removable" || name === "disabled" || name === "label") {
      this.syncAria();
    }
  }
  /**
   * Draws the Chip element.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.setAttribute("part", "native");
    native.classList.add("native-chip");
    let slot = document.createElement("slot");
    let slotEnd = document.createElement("slot");
    slotEnd.setAttribute("name", "end");
    let remove = document.createElement("wje-button");
    remove.setAttribute("part", "remove");
    remove.setAttribute("fill", "link");
    remove.setAttribute("color", this.color || "default");
    remove.setAttribute("aria-label", "Remove");
    remove.round = !this.round;
    if (this.hasAttribute("size")) {
      if (this.size === "small") {
        remove.innerHTML = `<wje-icon name="x" size="small"></wje-icon>`;
      } else if (this.size === "large") {
        remove.innerHTML = `<wje-icon name="x"></wje-icon>`;
      }
    } else {
      remove.innerHTML = `<wje-icon name="x"></wje-icon>`;
    }
    let active = document.createElement("wje-icon");
    active.setAttribute("name", "check");
    active.classList.add("check");
    if (this.hasAttribute("color")) native.classList.add("wje-color-" + this.color, "wje-color");
    else native.classList.add("wje-color-default", "wje-color");
    if (this.disabled) this.classList.add("wje-disabled");
    if (this.outline) this.classList.add("wje-outline");
    native.appendChild(slot);
    native.appendChild(slotEnd);
    native.appendChild(active);
    if (this.removable) native.appendChild(remove);
    fragment.appendChild(native);
    this.removeElement = remove;
    this.slotEnd = slotEnd;
    return fragment;
  }
  /**
   * Syncs ARIA attributes on the host element.
   */
  syncAria() {
    var _a;
    const label = (_a = this.getAttribute("label")) == null ? void 0 : _a.trim();
    if (label) this.setAriaState({ label });
    if (this.removable) this.setAriaState({ role: "button", disabled: this.disabled });
    else this.setAriaState({ role: "status" });
  }
  /**
   * Getter for the observed attributes.
   */
  afterDraw() {
    if (WjElementUtils.hasSlotContent(this.context, "end")) this.slotEnd.classList.add("has-content");
    event.addListener(this.removeElement, "click", "wje:chip-remove", null, { stopPropagation: true });
  }
  /**
   * Before disconnect event for the Chip element.
   */
  beforeDisconnect() {
    event.removeListener(this.removeElement, "click", "wje:chip-remove");
  }
}
WJElement.define("wje-chip", Chip);
export {
  Chip as default
};
//# sourceMappingURL=wje-chip.js.map
