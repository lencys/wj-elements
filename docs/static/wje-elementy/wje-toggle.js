var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _internalValue;
import { F as FormAssociatedElement } from "./form-associated-element-DEQ4y-jn.js";
import { event } from "./event.js";
const styles = "/*\n[ WJ Toggle ]\n*/\n\n:host {\n    --wje-toggle-color-base: var(--wje-color-contrast-3);\n    --wje-toggle-width: 30px;\n    --wje-toggle-height: 18px;\n    --wje-toggle-border-radius: 50px;\n    --wje-toggle-handle-width: 13px;\n    --wje-toggle-handle-height: 13px;\n    --wje-toggle-handle-border-radius: 9px;\n    --wje-toggle-handle-color: #fff;\n    --wje-toggle-handle-shadow: 1px 0 1px 0.5px rgba(0, 0, 0, 0.12), 2px 4px 6px rgba(0, 0, 0, 0.2);\n    --wje-toggle-handle-shadow-checked: 1px 1px 0 rgba(0, 0, 0, 0.08), -3px 3px 6px rgba(0, 0, 0, 0.3);\n    --wje-toggle-duration: 250ms;\n    --wje-toggle-curve: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n:host([color='primary']) input:checked + label > .label-wrapper {\n    --wje-toggle-color-base: var(--wje-color-primary-9) !important;\n}\n\n:host([color='complete']) input:checked + label > .label-wrapper {\n    --wje-toggle-color-base: var(--wje-color-complete-9);\n}\n\n:host([color='success']) input:checked + label > .label-wrapper {\n    --wje-toggle-color-base: var(--wje-color-success-9) !important;\n}\n\n:host([color='warning']) input:checked + label > .label-wrapper {\n    --wje-toggle-color-base: var(--wje-color-warning-9);\n}\n\n:host([color='danger']) input:checked + label > .label-wrapper {\n    --wje-toggle-color-base: var(--wje-color-danger-9);\n}\n\n:host([color='info']) input:checked + label > .label-wrapper {\n    --wje-toggle-color-base: var(--wje-color-info-9);\n}\n\n.native-toggle {\n\n    label {\n        display: flex;\n        cursor: pointer;\n        align-items: center;\n        user-select: none;\n\n        .label-wrapper {\n            width: var(--wje-toggle-width) !important;\n            min-width: var(--wje-toggle-width);\n            height: var(--wje-toggle-height);\n            position: relative;\n            display: flex;\n            align-items: center;\n\n            &:before {\n                content: '';\n                position: absolute;\n                cursor: pointer;\n                width: 100%;\n                height: 100%;\n                top: auto;\n                left: 0;\n                background: var(--wje-toggle-color-base);\n                background-size: 300%;\n                background-position: right;\n                border-radius: var(--wje-toggle-border-radius);\n                border: none;\n                box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);\n                transition: background calc(var(--wje-toggle-duration) + (var(--wje-toggle-duration) * 0.24)),\n                box-shadow var(--wje-toggle-duration);\n                transition-timing-function: var(--wje-toggle-curve);\n            }\n\n            &:after {\n                content: '';\n                position: absolute;\n                transform: translateX(0%);\n                background: var(--wje-toggle-handle-color);\n                width: var(--wje-toggle-handle-width);\n                height: var(--wje-toggle-handle-height);\n                border-radius: var(--wje-toggle-handle-border-radius);\n                top: auto;\n                left: 2px;\n                box-shadow: var(--wje-toggle-handle-shadow);\n                transition: transform, box-shadow;\n                transition-duration: var(--wje-toggle-duration);\n                transition-timing-function: var(--wje-toggle-curve);\n            }\n        }\n    }\n\n    input[type='checkbox'][disabled] {\n        & + label {\n            cursor: not-allowed !important;\n            color: var(--wje-color-contrast-9);\n            opacity: 0.58;\n\n            &:before {\n                cursor: not-allowed !important;\n            }\n        }\n    }\n\n    input[type='checkbox'] {\n        position: absolute;\n        z-index: -1;\n        opacity: 0;\n\n        &:checked {\n            & + label {\n                .label-wrapper:before {\n                    background-position: left;\n                    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);\n                }\n\n                .label-wrapper:after {\n                    transform: translateX(calc(var(--wje-toggle-width) - var(--wje-toggle-handle-width) - 4px));\n                    box-shadow: var(--wje-toggle-handle-shadow-checked);\n                }\n            }\n        }\n\n        &:focus {\n            & + label {\n                .label-wrapper:before {\n                    outline: none !important;\n                    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12),\n                    0 0 0 0 #78c8fe;\n                }\n            }\n        }\n\n        &[disabled]:active {\n            & + label {\n                .label-wrapper:after {\n                    transform: scaleX(1.1);\n                    transform-origin: center left;\n                    transition: transform step-start;\n                }\n            }\n        }\n\n        &:checked {\n            &[disabled]:active {\n                & + label {\n                    .label-wrapper:after {\n                        transform: translateX(calc(100% - 6px)) scaleX(1.1);\n                        transform-origin: center right;\n                    }\n                }\n            }\n        }\n\n        &:hover {\n            &:active {\n                & + label {\n                    .label-wrapper:before {\n                        background-color: transparent;\n                    }\n                }\n            }\n        }\n    }\n}\n\n:host .text {\n    margin-inline: 0.5rem 0;\n}\n\n/*Placememt*/\n:host([placement='end']) {\n    label {\n        width: 100%;\n    }\n    .text {\n        margin-inline: 0 0.5rem;\n        width: 100%;\n    }\n}\n\n:host([invalid]) {\n    label{\n        color: var(--wje-input-color-invalid);\n    }\n}\n\nslot[name='error'] {\n    display: none;\n}\n\n:host([invalid]) slot[name='error'] {\n    display: block;\n}\n\nslot[name='error'] {\n    display: none;\n    max-width: 100%;\n    min-width: auto;\n    border-radius: 50px;\n    top: 0;\n    width: max-content;\n    line-height: normal;\n    position: static;\n    background: transparent;\n    padding: 0.25rem 0;\n    left: auto;\n    transform: none;\n    color: var(--wje-input-color-invalid);\n    font-size: 12px;\n}\n";
class Toggle extends FormAssociatedElement {
  constructor() {
    super();
    __privateAdd(this, _internalValue);
    this.invalid = false;
    this.pristine = true;
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
   * Set checked attribute.
   * @param {boolean} value true if the toggle is checked, false otherwise
   */
  set checked(value) {
    if (value) {
      this.setAttribute("checked", "");
      this.internals.setFormValue(this.value);
    } else {
      this.removeAttribute("checked");
      this.internals.setFormValue(null);
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
  static get cssStyleSheet() {
    return styles;
  }
  static get observedAttributes() {
    return ["checked", "disabled", "required"];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
    if (this.pristine) {
      this.value = __privateGet(this, _internalValue);
      this.pristine = false;
    }
    this.syncAria();
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.input) return;
    if (name === "checked") {
      const isChecked = this.hasAttribute("checked");
      this.input.checked = isChecked;
      if (isChecked) {
        this.internals.setFormValue(this.value);
      } else {
        this.internals.setFormValue(null);
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
  draw() {
    const fragment = document.createDocumentFragment();
    const native = document.createElement("div");
    native.setAttribute("part", "native");
    native.classList.add("native-toggle");
    const input = document.createElement("input");
    input.setAttribute("part", "input");
    input.type = "checkbox";
    input.name = this.name;
    input.id = "input";
    input.checked = this.hasAttribute("checked");
    input.disabled = this.hasAttribute("disabled");
    if (this.hasAttribute("required")) input.required = true;
    const label = document.createElement("label");
    label.setAttribute("for", "input");
    const toggle = document.createElement("div");
    toggle.setAttribute("part", "toggle");
    toggle.classList.add("label-wrapper");
    const text = document.createElement("div");
    text.classList.add("text");
    text.innerHTML = "<slot></slot>";
    let errorSlot = document.createElement("slot");
    errorSlot.setAttribute("name", "error");
    let error = document.createElement("div");
    error.setAttribute("slot", "error");
    if (this.placement === "end") {
      native.classList.add("end");
      label.appendChild(text);
      label.appendChild(toggle);
    } else {
      label.appendChild(toggle);
      label.appendChild(text);
    }
    native.appendChild(input);
    native.appendChild(label);
    native.append(errorSlot);
    this.append(error);
    fragment.appendChild(native);
    this.input = input;
    return fragment;
  }
  afterDraw() {
    this.internals.setFormValue(this.checked ? this.value : null);
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
    this.setAriaState({
      role: "switch",
      checked: this.checked,
      disabled: this.disabled,
      required: this.required,
      invalid: this.invalid
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
Toggle.define("wje-toggle", Toggle);
export {
  Toggle as default
};
//# sourceMappingURL=wje-toggle.js.map
