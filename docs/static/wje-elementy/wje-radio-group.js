var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _internalValue;
import { F as FormAssociatedElement } from "./form-associated-element-DEQ4y-jn.js";
import { event } from "./event.js";
import Radio from "./wje-radio.js";
const styles = "/*\n[ WJ Radio Group ]\n*/\n:host {\n    position: relative;\n    .input-hidden {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 0;\n        height: 0;\n        padding: 0;\n        margin: 0;\n        opacity: 0;\n        z-index: -1;\n    }\n}\n\n:host([invalid]) {\n    color: var(--wje-input-color-invalid);\n}\n\nslot[name='error'] {\n    display: none;\n}\n\n:host([invalid]) slot[name='error'] {\n    display: block;\n}\n\nslot[name='error'] {\n    display: none;\n    max-width: 100%;\n    min-width: auto;\n    border-radius: 50px;\n    top: 0;\n    width: max-content;\n    line-height: normal;\n    position: static;\n    background: transparent;\n    padding: 0.25rem 0;\n    left: auto;\n    transform: none;\n    color: var(--wje-input-color-invalid);\n    font-size: 12px;\n}\n\n.wje-inline {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 0.5rem;\n}\n\n";
class RadioGroup extends FormAssociatedElement {
  /**
   * Creates an instance of RadioGroup.
   * @class
   */
  constructor() {
    super();
    __privateAdd(this, _internalValue, "");
    __publicField(this, "className", "RadioGroup");
    this.invalid = false;
    this.pristine = true;
  }
  /**
   * Setter for the value attribute.
   * @param {string} value The value to set.
   */
  set value(value) {
    __privateSet(this, _internalValue, value);
    this.pristine = false;
    this.internals.setFormValue(value);
    this.setAttribute("value", value);
  }
  /**
   * Getter for the value attribute.
   * @returns {string} The value of the attribute.
   */
  get value() {
    return this.getAttribute("value");
  }
  /**
   * Setter for the name attribute.
   * @param {string} value The name to set.
   */
  set required(value) {
    if (value === null || value === void 0) {
      this.removeAttribute("required");
    } else {
      this.setAttribute("required", "");
    }
  }
  /**
   * Getter for the name attribute.
   * @returns {boolean}
   */
  get required() {
    return this.hasAttribute("required");
  }
  /**
   * Setter for the label attribute.
   * @param {string} value The label to set.
   */
  set label(value) {
    if (value === null || value === void 0) {
      this.removeAttribute("label");
    } else {
      this.setAttribute("label", value);
    }
  }
  /**
   * Getter for the label attribute.
   * @returns {string|null}
   */
  get label() {
    return this.getAttribute("label");
  }
  /**
   * Returns the CSS styles for the component.
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return styles;
  }
  static get observedAttributes() {
    return ["required", "value", "disabled", "invalid", "label"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    var _a;
    (_a = super.attributeChangedCallback) == null ? void 0 : _a.call(this, name, oldValue, newValue);
    if (oldValue === newValue) return;
    if (["required", "disabled", "invalid", "label"].includes(name)) this.syncAria();
    if (name === "value" && this.pristine) {
      const radio = this.getRadioByValue(this.value);
      if (radio) this.checkRadio(radio);
    }
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
    if (this.pristine) {
      this.pristine = false;
    }
    this.syncAria();
  }
  /**
   * Draws the component for the radio group.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.classList.add("native-radio-group", this.hasAttribute("inline") ? "wje-inline" : "ddd");
    let input = document.createElement("input");
    input.type = "text";
    input.name = this.name;
    input.disabled = this.disabled;
    input.required = this.required;
    input.value = this.value || "";
    input.classList.add("input-hidden");
    let slot = document.createElement("slot");
    let label = document.createElement("label");
    label.innerText = this.label;
    if (this.value && !this.hasAttribute("error")) label.classList.add("fade");
    if (this.label) {
      native.append(label);
    }
    let errorSlot = document.createElement("slot");
    errorSlot.setAttribute("name", "error");
    let error = document.createElement("div");
    error.setAttribute("slot", "error");
    native.append(input);
    native.append(slot);
    native.append(errorSlot);
    this.append(error);
    fragment.append(native);
    this.input = input;
    return fragment;
  }
  /**
   * Adds event listeners after the component is drawn. Handles the selection of radio buttons.
   */
  afterDraw() {
    if (this.value)
      this.checkRadio(this.getRadioByValue(this.value));
    this.validate();
    if (this.invalid) {
      this.showInvalidMessage();
    }
    this.addEventListener("wje-radio:change", (e) => {
      this.checkRadio(e.target);
      this.validate();
      this.pristine = false;
      this.propagateValidation();
      if (this.invalid) {
        this.invalid = false;
        this.internals.setValidity({}, "");
      }
      this.syncAria();
    });
    this.input.addEventListener("input", (e) => {
      this.validate();
      this.pristine = false;
      this.propagateValidation();
      event.dispatchCustomEvent(this, "wje-radio-group:change");
    });
    this.addEventListener("invalid", (e) => {
      this.invalid = true;
      this.pristine = false;
      this.showInvalidMessage();
    });
  }
  /**
   * Syncs ARIA attributes on the host element.
   */
  syncAria() {
    var _a;
    const label = (_a = this.label) == null ? void 0 : _a.trim();
    const requiredInvalid = this.required && !this.value;
    const invalid = this.invalid || requiredInvalid;
    this.setAriaState({
      role: "radiogroup",
      required: this.required,
      invalid,
      disabled: this.disabled,
      ...label ? { label } : {}
    });
  }
  /**
   * Returns the radio button with the given value.
   * @param {string} value The value of the radio button.
   * @returns {Radio} The radio button.
   */
  getRadioByValue(value) {
    return this.getAllElements().find((el) => el instanceof Radio && el.value === value);
  }
  /**
   * Removes the check from all radio buttons.
   */
  removeCheck() {
    this.getAllElements().forEach((el) => {
      if (el instanceof Radio) el.checked = false;
    });
  }
  /**
   * Sets the given radio button to checked.
   */
  checkRadio(radio) {
    this.removeCheck();
    if (radio) {
      radio.checked = true;
      this.value = radio.value;
      this.input.value = radio.value;
      this.input.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
      this.syncAria();
      return true;
    }
    console.error(`Radio with value ${radio.value} not found`);
    return false;
  }
  /**
   * Retrieves all direct child elements of the current element.
   * @returns {HTMLElement[]} An array of child elements.
   */
  getAllElements() {
    return Array.from(this.children);
  }
}
_internalValue = new WeakMap();
RadioGroup.define("wje-radio-group", RadioGroup);
export {
  RadioGroup as default
};
//# sourceMappingURL=wje-radio-group.js.map
