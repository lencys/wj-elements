var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _internalValue;
import WJElement from "./wje-element.js";
import { F as FormAssociatedElement } from "./form-associated-element-DEQ4y-jn.js";
import { event } from "./event.js";
const styles = "/*\n[ Checkbox ]\n*/\n\n:host {\n    display: block;\n    margin-top: var(--wje-checkbox-margin-top);\n    margin-bottom: var(--wje-checkbox-margin-bottom);\n    margin-inline: var(--wje-checkbox-margin-inline);\n    line-height: 100%;\n    padding-left: 0;\n\n    label {\n        display: flex;\n        align-items: center;\n        cursor: pointer;\n        position: relative;\n        padding-left: calc(var(--wje-checkbox-size) + 0.5rem);\n        min-height: var(--wje-checkbox-size);\n        margin-bottom: 0;\n        &:before {\n            content: '';\n            position: absolute;\n            width: var(--wje-checkbox-size);\n            height: var(--wje-checkbox-size);\n            left: 0;\n            -webkit-box-sizing: inherit;\n            box-sizing: border-box;\n            background-color: var(--wje-color-contrast-0);\n            border-width: 1px;\n            border-style: solid;\n            border-color: var(--wje-color-contrast-3);\n        }\n    }\n}\n\n.native-checkbox {\n    label {\n        &:hover {\n            color: var(--wje-color-contrast-11);\n        }\n\n        &:before {\n            border-radius: var(--wje-checkbox-border-radius);\n        }\n    }\n\n    input[type='checkbox'] {\n        position: absolute;\n        margin: 0;\n        z-index: -1;\n        width: 16px;\n        height: 16px;\n        opacity: 0;\n        pointer-events: none;\n        & + label {\n            &::after {\n                content: '';\n                position: absolute;\n                left: 0;\n                border-right: 0 solid transparent;\n                border-bottom: 0 solid transparent;\n                width: var(--wje-checkbox-size);\n                height: var(--wje-checkbox-size);\n                overflow: hidden;\n            }\n        }\n    }\n\n    input[type='checkbox']:checked + label::after {\n        content: '';\n        mask-image: var(--wje-checkbox-checkmark);\n        mask-size: var(--wje-checkbox-size);\n        background-color: var(--wje-color-primary-9);\n    }\n\n    /* Disabled */\n    input[type='checkbox'][disabled] {\n        & + label {\n            cursor: not-allowed !important;\n            color: var(--wje-color-contrast-8);\n            opacity: 0.58;\n\n            &:before {\n                background: var(--wje-color-contrast-2);\n            }\n            &:after {\n                background: transparent;\n            }\n        }\n    }\n\n    input[type='checkbox']:checked[disabled] {\n        & + label {\n            cursor: not-allowed !important;\n            color: var(--wje-color-contrast-8);\n            opacity: 0.58;\n\n            &:before {\n                background: var(--wje-color-contrast-2);\n            }\n            &:after {\n                background: var(--wje-color-contrast-5);\n            }\n        }\n    }\n\n    /* Indeterminate */\n    input[type='checkbox']:not(:checked):indeterminate {\n        & + label {\n            &:after {\n                content: '';\n                mask-image: var(--wje-checkbox-interminate);\n                mask-size: var(--wje-checkbox-size);\n                background-color: var(--wje-color-primary-9);\n            }\n        }\n    }\n}\n\n:host([invalid]) {\n    label{\n        color: var(--wje-input-color-invalid);\n    }\n}\n\nslot[name='error'] {\n    display: none;\n}\n\n:host([invalid]) slot[name='error'] {\n    display: block;\n}\n\n:host([variant='circle']) {\n    label {\n        &:after {\n            border-radius: 99px;\n        }\n\n        &:before {\n            border-radius: 99px;\n        }\n    }\n}\n\n:host([placement='end']) {\n    label {\n        padding-left: 0;\n        padding-right: 26px;\n\n        &:before {\n            right: 0;\n            left: auto;\n        }\n    }\n\n    input[type='checkbox']:checked {\n        & + label {\n            position: relative;\n\n            &::after {\n                position: absolute;\n                right: 0;\n                left: auto;\n            }\n        }\n    }\n}\n\nslot[name='error'] {\n    display: none;\n    max-width: 100%;\n    min-width: auto;\n    border-radius: 50px;\n    top: 0;\n    width: max-content;\n    line-height: normal;\n    position: static;\n    background: transparent;\n    padding: 0.25rem 0;\n    left: auto;\n    transform: none;\n    color: var(--wje-input-color-invalid);\n    font-size: 12px;\n}\n\n/*Colors*/\n\n:host([color='primary']) {\n    input[type='checkbox']:checked + label::after,\n    input[type='checkbox']:indeterminate + label:after {\n        background-color: var(--wje-color-contrast-0);\n    }\n    :is(input[type='checkbox']:checked + label)::before,\n    :is(input[type='checkbox']:indeterminate + label)::before {\n        border-color: var(--wje-color-primary-9);\n        background-color: var(--wje-color-primary-9);\n    }\n}\n\n:host([color='complete']) {\n    input[type='checkbox']:checked + label::after,\n    input[type='checkbox']:indeterminate + label:after {\n        background-color: var(--wje-color-contrast-0);\n    }\n    :is(input[type='checkbox']:checked + label)::before,\n    :is(input[type='checkbox']:indeterminate + label)::before {\n        border-color: var(--wje-color-complete-9);\n        background-color: var(--wje-color-complete-9);\n    }\n}\n\n:host([color='success']) {\n    input[type='checkbox']:checked + label::after,\n    input[type='checkbox']:indeterminate + label:after {\n        background-color: var(--wje-color-contrast-0);\n    }\n    :is(input[type='checkbox']:checked + label)::before,\n    :is(input[type='checkbox']:indeterminate + label)::before {\n        border-color: var(--wje-color-success-9);\n        background-color: var(--wje-color-success-9);\n    }\n}\n\n:host([color='warning']) {\n    input[type='checkbox']:checked + label::after,\n    input[type='checkbox']:indeterminate + label:after {\n        background-color: var(--wje-color-contrast-0);\n    }\n    :is(input[type='checkbox']:checked + label)::before,\n    :is(input[type='checkbox']:indeterminate + label)::before {\n        border-color: var(--wje-color-warning-9);\n        background-color: var(--wje-color-warning-9);\n    }\n}\n\n:host([color='danger']) {\n    input[type='checkbox']:checked + label::after,\n    input[type='checkbox']:indeterminate + label:after {\n        background-color: var(--wje-color-contrast-0);\n    }\n    :is(input[type='checkbox']:checked + label)::before,\n    :is(input[type='checkbox']:indeterminate + label)::before {\n        border-color: var(--wje-color-danger-9);\n        background-color: var(--wje-color-danger-9);\n    }\n}\n\n:host([color='info']) {\n    input[type='checkbox']:checked + label::after,\n    input[type='checkbox']:indeterminate + label:after {\n        background-color: var(--wje-color-contrast-0);\n    }\n    :is(input[type='checkbox']:checked + label)::before,\n    :is(input[type='checkbox']:indeterminate + label)::before {\n        border-color: var(--wje-color-info-9);\n        background-color: var(--wje-color-info-9);\n    }\n}\n";
class Checkbox extends FormAssociatedElement {
  /**
   * Checkbox constructor method.
   */
  constructor() {
    super();
    __privateAdd(this, _internalValue);
    /**
     * The class name for the Checkbox.
     */
    __publicField(this, "className", "Checkbox");
    this.invalid = false;
    this.pristine = true;
    this._valueOff = "off";
  }
  /**
   * Setter for the value attribute.
   * @param {string} value The value to set.
   */
  set value(value) {
    __privateSet(this, _internalValue, value);
    if (this.input) {
      this.input.value = value;
    }
  }
  /**
   * Getter for the value attribute.
   * @returns {string} The value of the attribute.
   */
  get value() {
    return __privateGet(this, _internalValue) ?? this.getAttribute("value") ?? "on";
  }
  /**
   * Getter for the customErrorDisplay attribute.
   * @returns {boolean} Whether the attribute is present.
   */
  get customErrorDisplay() {
    return this.hasAttribute("custom-error-display");
  }
  /**
   * Getter for the validateOnChange attribute.
   * @returns {boolean} Whether the attribute is present.
   */
  get validateOnChange() {
    return this.hasAttribute("validate-on-change");
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
   * Setter for the defaultValue attribute.
   * This method sets the 'value' attribute of the custom input element to the provided value.
   * The 'value' attribute represents the default value of the input element.
   * @param {string} value The value to set as the default value.
   */
  set defaultValue(value) {
    this.setAttribute("value", value);
  }
  /**
   * Getter for the defaultValue attribute.
   * This method retrieves the 'value' attribute of the custom input element.
   * The 'value' attribute represents the default value of the input element.
   * If the 'value' attribute is not set, it returns an empty string.
   * @returns {string} The default value of the input element.
   */
  get defaultValue() {
    return this.getAttribute("value") ?? "";
  }
  /**
   * Sets or removes the 'indeterminate' attribute for the object.
   * This property typically reflects the visual or functional state where
   * the component is neither fully active nor inactive.
   * @param {boolean} value A boolean where `true` indicates the 'indeterminate'
   * state should be set, and `false` removes it.
   */
  set indeterminate(value) {
    if (value) {
      this.setAttribute("indeterminate", "");
    } else {
      this.removeAttribute("indeterminate");
    }
  }
  /**
   * Retrieves the current state of the 'indeterminate' attribute.
   *
   * The 'indeterminate' attribute is typically used to signify a state
   * where a checkbox is neither checked nor unchecked, such as a partially
   * selected state.
   * @returns {boolean} Returns true if the 'indeterminate' attribute is present; otherwise, false.
   */
  get indeterminate() {
    return this.hasAttribute("indeterminate");
  }
  /**
   * Set checked attribute.
   * @param {boolean} value true if the toggle is checked, false otherwise
   */
  set checked(value) {
    if (value) {
      this.setAttribute("checked", "");
      this.internals.setFormValue(this.value);
    } else {
      this.removeAttribute("checked");
      this.internals.setFormValue(this._valueOff);
    }
    if (this.input) {
      this.input.checked = value;
    }
  }
  /**
   * Get checked attribute.
   * @returns {boolean} true if the toggle is checked, false otherwise
   */
  get checked() {
    return this.hasAttribute("checked");
  }
  /**
   * Getter for the CSS stylesheet.
   * @returns {string} The CSS stylesheet.
   */
  static get cssStyleSheet() {
    return styles;
  }
  static get observedAttributes() {
    return ["checked", "disabled", "value", "indeterminate", "required", "invalid", "label"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    var _a;
    (_a = super.attributeChangedCallback) == null ? void 0 : _a.call(this, name, oldValue, newValue);
    if (!this.input) {
      this.syncAria();
      return;
    }
    if (name === "checked") {
      const isChecked = this.hasAttribute("checked");
      this.input.checked = isChecked;
      if (isChecked) {
        this.internals.setFormValue(this.value);
      } else {
        this.internals.setFormValue(this._valueOff);
      }
    } else if (name === "disabled") {
      this.input.disabled = this.hasAttribute("disabled");
    } else if (name === "indeterminate") {
      this.input.indeterminate = this.hasAttribute("indeterminate");
    } else if (name === "value") {
      __privateSet(this, _internalValue, newValue ?? void 0);
      this.input.value = this.value;
      if (this.input.checked) {
        this.internals.setFormValue(this.value);
      }
    }
    this.syncAria();
  }
  /**
   * Sets up the attributes for the checkbox.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
    if (this.pristine) {
      this.value = __privateGet(this, _internalValue);
      this.pristine = false;
    }
    this.syncAria();
  }
  /**
   * Draws the checkbox element.
   * @returns {DocumentFragment} The created fragment.
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.setAttribute("part", "native");
    native.classList.add("native-checkbox");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.id = "checkbox";
    input.name = this.name || "checkbox";
    input.checked = this.checked;
    input.disabled = this.disabled;
    input.indeterminate = this.indeterminate;
    input.required = this.required;
    input.value = this.value;
    let label = document.createElement("label");
    label.htmlFor = "checkbox";
    label.innerHTML = "<slot></slot>";
    let errorSlot = document.createElement("slot");
    errorSlot.setAttribute("name", "error");
    let error = document.createElement("div");
    error.setAttribute("slot", "error");
    native.append(input);
    native.append(label);
    native.append(errorSlot);
    this.append(error);
    this.input = input;
    fragment.appendChild(native);
    return fragment;
  }
  /**
   * Adds an event listener after drawing the checkbox.
   */
  afterDraw() {
    this.internals.setFormValue(this.checked ? this.value : this._valueOff);
    this.syncAria();
    if (!this.disabled) {
      this.input.addEventListener("input", (e) => {
        this.validate();
        this.pristine = false;
        this.propagateValidation();
        this.indeterminate = false;
        this.checked = e.target.checked;
        this.syncAria();
        event.dispatchCustomEvent(this, "wje-toggle:input");
      });
      this.input.addEventListener("change", (e) => {
        event.dispatchCustomEvent(this, "wje-toggle:change");
      });
      this.addEventListener("invalid", (e) => {
        this.invalid = true;
        this.pristine = false;
        this.showInvalidMessage();
      });
      this.validate();
      if (this.invalid) {
        this.showInvalidMessage();
      }
    }
  }
  /**
   * Syncs ARIA attributes on the host element.
   */
  syncAria() {
    var _a;
    const checked = this.indeterminate ? "mixed" : this.checked ? "true" : "false";
    const requiredInvalid = this.required && !this.checked;
    const invalid = this.invalid || requiredInvalid;
    const label = (_a = this.label) == null ? void 0 : _a.trim();
    this.setAriaState({
      role: "checkbox",
      checked,
      disabled: this.disabled,
      required: this.required,
      invalid,
      ...label ? { label } : {}
    });
  }
  /**
   * Removes the event listener when the checkbox is disconnected.
   */
  beforeDisconnect() {
    event.removeElement(this.input);
  }
}
_internalValue = new WeakMap();
WJElement.define("wje-checkbox", Checkbox);
export {
  Checkbox as default
};
//# sourceMappingURL=wje-checkbox.js.map
