var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { F as FormAssociatedElement } from "./form-associated-element-DEQ4y-jn.js";
import { event } from "./event.js";
const styles = "/*\n[ WJ Input ]\n*/\n\n:host {\n    width: 100%;\n    margin-bottom: var(--wje-input-margin-bottom);\n    display: block;\n    label {\n        margin: var(--wje-input-label-margin);\n        padding: var(--wje-input-label-padding);\n        display: var(--wje-input-label-display);\n        opacity: 1;\n        cursor: text;\n        transition: opacity 0.2s ease;\n        line-height: var(--wje-input-label-line-height);\n        font-size: var(--wje-input-label-font-size);\n    }\n    .wrapper {\n        display: grid;\n        grid-template-columns: auto 1fr auto;\n        width: 100%;\n        > .input-wrapper {\n            grid-column: 2;\n        }\n    }\n    .native-input {\n        .input-wrapper {\n            display: block;\n            width: 100%;\n            position: relative;\n            box-sizing: border-box;\n\n            label {\n                width: 100%;\n            }\n        }\n        &.default {\n            background-color: var(--wje-input-background-color);\n            font-family: var(--wje-input-font-family);\n            position: relative;\n            border-radius: var(--wje-input-border-radius);\n            border-width: var(--wje-input-border-width);\n            border-style: var(--wje-input-border-style);\n            border-color: var(--wje-input-border-color);\n            padding-inline: 0;\n            padding-top: 0.25rem;\n            padding-bottom: 0.25rem;\n            transition: background-color 0.2s ease;\n            cursor: text;\n            .input-wrapper {\n                padding-inline: 0.5rem;\n            }\n            &.focused {\n                border-color: var(--wje-input-border-color-focus) !important;\n                label {\n                    opacity: 0.67;\n                    font-size: 12px;\n                    letter-spacing: normal;\n                }\n            }\n            input {\n                border: none;\n                height: 25px;\n                min-height: 25px;\n                padding: 0;\n                margin-top: -4px;\n                background: none;\n                box-shadow: none;\n                width: 100%;\n            }\n            label {\n                &.fade {\n                    opacity: 0.5;\n                    font-size: 12px;\n                    letter-spacing: normal;\n                }\n            }\n            ::slotted([slot='start']) {\n                border-left: none;\n                border-top: none;\n                border-bottom: none;\n            }\n\n            ::slotted([slot='end']) {\n                border-right: none;\n                border-top: none;\n                border-bottom: none;\n            }\n        }\n        &.standard {\n            font-family: var(--wje-input-font-family);\n            position: relative;\n            border-radius: var(--wje-input-border-radius);\n            padding-inline: 0;\n            padding-top: 0;\n            padding-bottom: 0;\n            transition: background-color 0.2s ease;\n            cursor: text;\n            &.focused {\n                input {\n                    border-color: var(--wje-input-border-color-focus) !important;\n                }\n            }\n            input {\n                background-color: var(--wje-input-background-color);\n                display: block;\n                min-height: 32px;\n                padding-inline: 0.5rem;\n                padding-top: 0;\n                padding-bottom: 0;\n                /*background: none;*/\n                box-shadow: none;\n                width: 100%;\n                box-sizing: border-box;\n                border-radius: var(--wje-input-border-radius);\n                border-width: var(--wje-input-border-width);\n                border-style: var(--wje-input-border-style);\n                border-color: var(--wje-input-border-color);\n            }\n            .input-wrapper {\n                flex-wrap: nowrap;\n                &:hover .clear {\n                    visibility: visible;\n                }\n            }\n            ::slotted([slot='start']) {\n                border-right: none;\n                border-radius: var(--wje-input-border-radius) 0 0 var(--wje-input-border-radius);\n            }\n\n            ::slotted([slot='end']) {\n                border-left: none;\n                border-radius: 0 var(--wje-input-border-radius) var(--wje-input-border-radius) 0;\n            }\n\n            &.has-start input {\n                border-top-left-radius: 0;\n                border-bottom-left-radius: 0;\n            }\n\n            &.has-end input {\n                border-top-right-radius: 0;\n                border-bottom-right-radius: 0;\n            }\n            slot[name='error'] {\n                position: static;\n\n                background: transparent;\n                padding: 0.25rem 0;\n                left: auto;\n                transform: none;\n                color: var(--wje-input-color-invalid);\n                font-size: 12px;\n                line-height: normal;\n            }\n        }\n    }\n}\n\n:host([type=hidden]) {\n    margin: 0;\n    .native-input {\n        padding: 0;\n        border-width: 0;\n    }\n}\n\n.clear {\n    visibility: hidden;\n    position: absolute;\n    right: 0;\n    top: 3px;\n    --wje-padding-top: 0.25rem;\n    --wje-padding-start: 0.25rem;\n    --wje-padding-end: 0.25rem;\n    --wje-padding-bottom: 0.25rem;\n    --wje-button-margin-inline: 0 0.25rem;\n}\n\n:host([required]) .wrapper::after {\n    color: var(--wje-input-color-invalid);\n    content: var(--wje-input-required-symbol);\n    font-size: 24px;\n    position: absolute;\n    right: 12px;\n    top: 0;\n}\n\n:host([required]) .standard .input-wrapper::after {\n    right: 13px;\n    top: -20px;\n}\n\n:host([invalid]) {\n    .default {\n        label {\n            opacity: 1 !important;\n            color: var(--wje-input-color-invalid) !important;\n            animation-name: shake;\n            animation-duration: 0.4s;\n            animation-iteration-count: 1;\n        }\n    }\n}\n\n::slotted([slot='start']),\n::slotted([slot='end']) {\n    display: flex;\n    align-items: center;\n    border-width: var(--wje-input-border-width);\n    border-style: var(--wje-input-border-style);\n    border-color: var(--wje-input-border-color);\n    padding-inline: var(--wje-input-slot-padding-inline);\n}\n\n:host(.options-show) ::slotted([slot='start']) {\n    border-bottom-left-radius: 0 !important;\n}\n\n:host(.options-show) ::slotted([slot='end']) {\n    border-bottom-right-radius: 0 !important;\n}\n\nslot[name='start'],\nslot[name='end'] {\n    display: flex;\n}\n\nslot[name='error'] {\n    display: none;\n}\n\n:host([invalid]) slot[name='error'] {\n    display: block;\n}\n\n:host([disabled]) input {\n    opacity: 0.5;\n}\n\ninput {\n    background-color: var(--wje-input-background-color);\n    border-width: var(--wje-input-border-width);\n    border-style: var(--wje-input-border-style);\n    border-color: var(--wje-input-border-color);\n    color: var(--wje-input-color);\n    appearance: none;\n    outline: 0;\n    padding: 0.25rem 0.5rem;\n    line-height: var(--wje-input-line-height);\n    font-size: 14px;\n    font-weight: normal;\n    vertical-align: middle;\n    min-height: 32px;\n}\n\nslot[name='error'] {\n    display: none;\n    position: absolute;\n    max-width: 100%;\n    min-width: auto;\n    border-radius: 50px;\n    background: black;\n    padding: 0.25rem 0.5rem;\n    top: 0;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: white;\n    font-size: var(--wje-font-size-small);\n    width: max-content;\n    line-height: normal;\n}\n\n@keyframes shake {\n    8%,\n    41% {\n        transform: translateX(-4px);\n    }\n    25%,\n    58% {\n        transform: translateX(4px);\n    }\n    75% {\n        transform: translateX(-2px);\n    }\n    92% {\n        transform: translateX(2px);\n    }\n    0%,\n    100% {\n        transform: translateX(0);\n    }\n}\n";
const _Input = class _Input extends FormAssociatedElement {
  /**
   * Creates an instance of Input.
   */
  constructor() {
    super();
    /**
     * The class name of the input element.
     * @type {string}
     */
    __publicField(this, "className", "Input");
    this.invalid = false;
    this.pristine = true;
    this._instanceId = ++_Input._instanceId;
  }
  /**
   * Setter for the value attribute.
   * @param {string} value The value to set.
   */
  set value(value) {
    this.internals.setFormValue(value);
    if (this.input) this.input.value = value;
    this.pristine = false;
    this._value = value;
    this.syncAria();
  }
  /**
   * Retrieves the value from the input element if available; otherwise,
   * returns the internal _value property or an empty string as the default.
   * @returns {string} The current value from the input element, the internal _value, or an empty string.
   */
  get value() {
    var _a;
    return ((_a = this.input) == null ? void 0 : _a.value) ?? this._value ?? "";
  }
  /**
   * Sets the label attribute of the element.
   * @param {string} value The value to set as the label attribute.
   */
  set label(value) {
    this.setAttribute("label", value);
  }
  /**
   * Retrieves the value of the 'label' attribute if it exists.
   * If the 'label' attribute is not set, it returns false.
   * @returns {string|boolean} The value of the 'label' attribute as a string, or false if the attribute is not set.
   */
  get label() {
    return this.getAttribute("label") || false;
  }
  /**
   * Sets the custom error display attribute for an element.
   * @param {boolean} value If true, adds the 'custom-error-display' attribute to the element. If false, removes the attribute from the element.
   */
  set customErrorDisplay(value) {
    if (value) {
      this.setAttribute("custom-error-display", "");
    } else {
      this.removeAttribute("custom-error-display");
    }
  }
  /**
   * Getter for the customErrorDisplay attribute.
   * @returns {boolean} Whether the attribute is present.
   */
  get customErrorDisplay() {
    return this.hasAttribute("custom-error-display");
  }
  /**
   * Sets the `validateOnChange` property. If set to a truthy value, it adds the
   * `validate-on-change` attribute to the element. If set to a falsy value, it
   * removes the `validate-on-change` attribute from the element.
   * @param {boolean} value Determines whether to add or remove the
   * `validate-on-change` attribute. A truthy value adds the attribute, whereas a
   * falsy value removes it.
   */
  set validateOnChange(value) {
    if (value) {
      this.setAttribute("validate-on-change", "");
    } else {
      this.removeAttribute("validate-on-change");
    }
  }
  /**
   * Getter for the validateOnChange attribute.
   * @returns {boolean} Whether the attribute is present.
   */
  get validateOnChange() {
    return this.hasAttribute("validate-on-change");
  }
  /**
   * @summary Getter for the defaultValue attribute.
   * This method retrieves the 'value' attribute of the custom input element.
   * The 'value' attribute represents the default value of the input element.
   * If the 'value' attribute is not set, it returns an empty string.
   * @returns {string} The default value of the input element.
   */
  get defaultValue() {
    return this.getAttribute("value") ?? "";
  }
  /**
   * @summary Setter for the defaultValue attribute.
   * This method sets the 'value' attribute of the custom input element to the provided value.
   * The 'value' attribute represents the default value of the input element.
   * @param {string} value The value to set as the default value.
   */
  set defaultValue(value) {
    this.setAttribute("value", value);
  }
  /**
   * Sets or removes the 'clearable' attribute on the element.
   * When set to a truthy value, the 'clearable' attribute is added; when falsy, the attribute is removed.
   * @param {boolean} value Determines whether to set or remove the 'clearable' attribute. If true, the 'clearable' attribute is added. If false, it is removed.
   */
  set clearable(value) {
    if (value) {
      this.setAttribute("clearable", "");
    } else {
      this.removeAttribute("clearable");
    }
  }
  /**
   * Checks if the 'clearable' attribute is present on the element.
   * @returns {boolean} True if the 'clearable' attribute is set, otherwise false.
   */
  get clearable() {
    return this.hasAttribute("clearable");
  }
  /**
   * Sets the placeholder value for an element. If the provided value is non-empty,
   * it assigns the value to the "placeholder" attribute. Otherwise, it removes
   * the "placeholder" attribute from the element.
   * @param {string} value The placeholder text to set or null/undefined to remove the attribute.
   */
  set placeholder(value) {
    if (value) {
      this.setAttribute("placeholder", value);
    } else {
      this.removeAttribute("placeholder");
    }
  }
  /**
   * Retrieves the value of the 'placeholder' attribute from the element.
   * If the attribute is not set, it returns an empty string.
   * @returns {string} The value of the 'placeholder' attribute or an empty string if not set.
   */
  get placeholder() {
    return this.getAttribute("placeholder") || "";
  }
  /**
   * Sets the `variant` attribute on the element. If a value is provided, it will set the attribute to the given value.
   * If no value is provided, it removes the `variant` attribute from the element.
   * @param {string} value The value to set for the `variant` attribute. If falsy, the attribute is removed.
   */
  set variant(value) {
    if (value) {
      this.setAttribute("variant", value);
    } else {
      this.removeAttribute("variant");
    }
  }
  /**
   * Retrieves the value of the 'variant' attribute from the element.
   * If the attribute is not set, it defaults to 'default'.
   * @returns {string} The value of the 'variant' attribute or 'default' if not set.
   */
  get variant() {
    return this.getAttribute("variant") || "default";
  }
  /**
   * Getter for the cssStyleSheet attribute.
   * @returns {CSSStyleSheet} The CSS style sheet of the input element.
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Getter for the observedAttributes attribute of the input element.
   * @returns {Array} The attributes to observe for changes.
   */
  static get observedAttributes() {
    return ["type", "value", "name", "disabled", "placeholder", "label", "message", "error-inline", "required", "readonly", "invalid"];
  }
  /**
   * Sets up the attributes for the input.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
    if (this.pristine) {
      this.value = this.defaultValue;
      this.pristine = false;
    }
    this.syncAria();
  }
  attributeChangedCallback(name, oldValue, newValue) {
    var _a;
    (_a = super.attributeChangedCallback) == null ? void 0 : _a.call(this, name, oldValue, newValue);
    if (oldValue === newValue) return;
    if (!this.input) {
      this.syncAria();
      return;
    }
    if (name === "value") {
      this._value = newValue ?? "";
      this.input.value = this.value;
      this.internals.setFormValue(this.value);
    } else if (name === "type") {
      this.input.type = this.getAttribute("type") || "text";
    } else if (name === "name") {
      this.input.name = this.name;
    } else if (name === "disabled") {
      this.input.disabled = this.disabled;
    } else if (name === "required") {
      this.input.required = this.required;
    } else if (name === "readonly") {
      this.input.readOnly = this.hasAttribute("readonly");
    } else if (name === "placeholder") {
      this.input.placeholder = this.placeholder;
    } else if (name === "label") {
      if (this.labelElement) this.labelElement.innerText = this.label || "";
    }
    this.syncAria();
  }
  /**
   * Draws the input element.
   * @returns {DocumentFragment} The drawn input.
   */
  draw() {
    let hasSlotStart = this.hasSlot(this, "start");
    let hasSlotEnd = this.hasSlot(this, "end");
    this.hasSlot(this, "error");
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.setAttribute("part", "native");
    native.classList.add("native-input", this.variant);
    if (this.invalid) native.classList.add("has-error");
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    let inputWrapper = document.createElement("div");
    inputWrapper.setAttribute("part", "wrapper");
    inputWrapper.classList.add("input-wrapper");
    let label = document.createElement("label");
    label.setAttribute("part", "label");
    label.innerText = this.label;
    if (this.value && !this.hasAttribute("error")) label.classList.add("fade");
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("part", "input");
    input.setAttribute("value", this.value || "");
    input.classList.add("form-control");
    const attributes = Array.from(this.attributes).map((attr) => attr.name);
    attributes.forEach((attr) => {
      if (this.hasAttribute(attr)) {
        input.setAttribute(attr, this[attr] || "");
      }
    });
    let errorSlot = document.createElement("slot");
    errorSlot.setAttribute("name", "error");
    errorSlot.setAttribute("part", "error-slot");
    this._ariaErrorId = this.id ? `${this.id}-error` : `wje-input-${this._instanceId}-error`;
    errorSlot.id = this._ariaErrorId;
    let error = document.createElement("div");
    error.setAttribute("slot", "error");
    let start = null;
    if (hasSlotStart) {
      start = document.createElement("slot");
      start.setAttribute("name", "start");
      start.setAttribute("part", "start");
    }
    let end = null;
    if (hasSlotEnd) {
      end = document.createElement("slot");
      end.setAttribute("name", "end");
      end.setAttribute("part", "end");
    }
    if (hasSlotStart) {
      wrapper.appendChild(start);
      native.classList.add("has-start");
    }
    if (this.label) {
      if (this.variant === "standard") {
        native.append(label);
      } else {
        inputWrapper.appendChild(label);
      }
    }
    inputWrapper.appendChild(input);
    wrapper.appendChild(inputWrapper);
    native.appendChild(wrapper);
    native.append(errorSlot);
    this.append(error);
    if (this.clearable) {
      this.clear = document.createElement("wje-button");
      this.clear.classList.add("clear");
      this.clear.setAttribute("fill", "link");
      this.clear.setAttribute("part", "clear");
      let clearIcon = document.createElement("wje-icon");
      clearIcon.setAttribute("name", "x");
      this.clear.appendChild(clearIcon);
      inputWrapper.appendChild(this.clear);
    }
    if (hasSlotEnd) {
      wrapper.appendChild(end);
      native.classList.add("has-end");
    }
    fragment.appendChild(native);
    this.native = native;
    this.labelElement = label;
    this.input = input;
    this.errorMessage = error;
    this.syncAria();
    return fragment;
  }
  /**
   * Runs after the input is drawn to the DOM.
   */
  afterDraw() {
    this.input.addEventListener("focus", (e) => {
      this.labelElement.classList.add("fade");
      this.native.classList.add("focused");
    });
    this.input.addEventListener("blur", (e) => {
      this.native.classList.remove("focused");
      if (!e.target.value) this.labelElement.classList.remove("fade");
    });
    this.input.addEventListener("input", (e) => {
      this.validate();
      if (this.validateOnChange) {
        this.pristine = false;
        this.propagateValidation();
      }
      if (this.invalid && this.checkValidity()) {
        this.invalid = false;
        this.errorMessage.textContent = "";
        this.internals.setValidity({}, "");
      }
      this.input.classList.remove("pristine");
      this.labelElement.classList.add("fade");
      event.dispatchCustomEvent(this, "wje-input:input", {
        value: this.input.value
      });
      this.value = this.input.value;
    });
    this.addEventListener("invalid", (e) => {
      this.invalid = true;
      this.pristine = false;
      this.showInvalidMessage();
      if (this.customErrorDisplay) {
        e.preventDefault();
      }
    });
    this.addEventListener("focus", () => this.input.focus());
    if (this.clear) {
      this.clear.addEventListener("wje-button:click", (e) => {
        this.input.value = "";
        event.dispatchCustomEvent(this.clear, "wje-input:clear");
      });
    }
    this.validate();
    if (this.invalid) {
      this.showInvalidMessage();
    }
    this.syncAria();
  }
  /**
   * Syncs ARIA attributes on the host element.
   */
  syncAria() {
    const requiredInvalid = this.required && !this.value;
    const invalid = this.invalid || requiredInvalid;
    const label = this.label && this.label !== false ? this.label.trim() : "";
    this.setAriaState({
      role: "textbox",
      disabled: this.disabled,
      required: this.required,
      readonly: this.hasAttribute("readonly"),
      invalid,
      describedBy: this._ariaErrorId,
      ...label ? { label } : {}
    });
  }
  /**
   * Checks whether the input has a slot.
   * @param {HTMLElement} el The element to check.
   * @param {string} slotName The name of the slot to check for.
   * @returns {boolean} Whether the input has the slot.
   */
  hasSlot(el, slotName = null) {
    let selector = slotName ? `[slot="${slotName}"]` : "[slot]";
    return el.querySelectorAll(selector).length > 0 ? true : false;
  }
};
__publicField(_Input, "_instanceId", 0);
let Input = _Input;
Input.define("wje-input", Input);
export {
  Input as default
};
//# sourceMappingURL=wje-input.js.map
