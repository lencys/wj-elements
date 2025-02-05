var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement, { event } from "./wje-element.js";
const styles = "/*\n[ WJ Input ]\n*/\n\n:host {\n    width: 100%;\n    margin-bottom: var(--wje-input-margin-bottom);\n    display: block;\n\n    .wrapper {\n        display: flex;\n        width: 100%;\n        flex-direction: column;\n    }\n    .native-input {\n        .input-wrapper {\n            flex-wrap: wrap;\n            display: flex;\n            width: 100%;\n            position: relative;\n            box-sizing: border-box;\n\n            label {\n                width: 100%;\n            }\n        }\n        &.default {\n            background-color: var(--wje-input-background-color);\n            font-family: var(--wje-input-font-family);\n            position: relative;\n            border-radius: var(--wje-input-border-radius);\n            border-width: var(--wje-input-border-width);\n            border-style: var(--wje-input-border-style);\n            border-color: var(--wje-input-border-color);\n            padding-inline: 0;\n            padding-top: 0.25rem;\n            padding-bottom: 0.25rem;\n            transition: background-color 0.2s ease;\n            cursor: text;\n            .input-wrapper {\n                padding-inline: 0.5rem;\n            }\n            &.focused {\n                border-color: var(--wje-input-border-color-focus) !important;\n                label {\n                    opacity: 0.67;\n                    font-size: 12px;\n                    letter-spacing: normal;\n                }\n            }\n            input {\n                border: none;\n                height: 25px;\n                min-height: 25px;\n                padding: 0;\n                margin-top: -4px;\n                background: none;\n                box-shadow: none;\n                width: 100%;\n            }\n            label {\n                margin: 0;\n                display: block;\n                opacity: 1;\n                cursor: text;\n                transition: opacity 0.2s ease;\n                line-height: var(--wje-input-line-height);\n                &.fade {\n                    opacity: 0.5;\n                    font-size: 12px;\n                    letter-spacing: normal;\n                }\n            }\n            ::slotted([slot='start']) {\n                border-left: none;\n                border-top: none;\n                border-bottom: none;\n            }\n\n            ::slotted([slot='end']) {\n                border-right: none;\n                border-top: none;\n                border-bottom: none;\n            }\n        }\n        &.standard {\n            font-family: var(--wje-input-font-family);\n            position: relative;\n            border-radius: var(--wje-input-border-radius);\n            padding-inline: 0;\n            padding-top: 0;\n            padding-bottom: 0;\n            transition: background-color 0.2s ease;\n            cursor: text;\n            &.focused {\n                input {\n                    border-color: var(--wje-input-border-color-focus) !important;\n                }\n            }\n            input {\n                background-color: var(--wje-input-background-color);\n                display: block;\n                min-height: 32px;\n                padding-inline: 0.5rem;\n                padding-top: 0;\n                padding-bottom: 0;\n                /*background: none;*/\n                box-shadow: none;\n                width: 100%;\n                box-sizing: border-box;\n                border-radius: var(--wje-input-border-radius);\n                border-width: var(--wje-input-border-width);\n                border-style: var(--wje-input-border-style);\n                border-color: var(--wje-input-border-color);\n            }\n            label {\n                margin: 0;\n                display: inline-block;\n                opacity: 1;\n                cursor: text;\n                transition: opacity 0.2s ease;\n                line-height: var(--wje-input-line-height);\n            }\n            .input-wrapper {\n                flex-wrap: nowrap;\n                &:hover .clear {\n                    visibility: visible;\n                }\n            }\n            ::slotted([slot='start']) {\n                border-right: none;\n                border-radius: var(--wje-input-border-radius) 0 0 var(--wje-input-border-radius);\n            }\n\n            ::slotted([slot='end']) {\n                border-left: none;\n                border-radius: 0 var(--wje-input-border-radius) var(--wje-input-border-radius) 0;\n            }\n\n            &.has-start input {\n                border-top-left-radius: 0;\n                border-bottom-left-radius: 0;\n            }\n\n            &.has-end input {\n                border-top-right-radius: 0;\n                border-bottom-right-radius: 0;\n            }\n            .error-message {\n                position: static;\n\n                background: transparent;\n                padding: 0.25rem 0;\n                left: auto;\n                transform: none;\n                color: var(--wje-input-color-invalid);\n                font-size: 12px;\n                line-height: normal;\n            }\n        }\n    }\n}\n\n.clear {\n    visibility: hidden;\n    position: absolute;\n    right: 0;\n    top: 3px;\n    --wje-padding-top: 0.25rem;\n    --wje-padding-start: 0.25rem;\n    --wje-padding-end: 0.25rem;\n    --wje-padding-bottom: 0.25rem;\n    --wje-button-margin-inline: 0 0.25rem;\n}\n\n:host([required]) .input-wrapper::after {\n    color: var(--wje-input-color-invalid);\n    content: '*';\n    font-family: var(--wje-force-mac-font-family);\n    font-size: 20px;\n    position: absolute;\n    right: 0;\n    top: 0;\n}\n\n:host([required]) .standard .input-wrapper::after {\n    top: 0;\n}\n\n:host([invalid]) {\n    .error-message {\n        display: block;\n    }\n    .default {\n        label {\n            opacity: 1 !important;\n            color: var(--wje-input-color-invalid) !important;\n            animation-name: shake;\n            animation-duration: 0.4s;\n            animation-iteration-count: 1;\n        }\n    }\n}\n\n::slotted([slot='start']),\n::slotted([slot='end']) {\n    display: flex;\n    align-items: center;\n    border-width: var(--wje-input-border-width);\n    border-style: var(--wje-input-border-style);\n    border-color: var(--wje-input-border-color);\n    padding-inline: var(--wje-input-slot-padding-inline);\n}\n\n/*\n    .options-show is a class that is added to the host element when the select options are shown\n */\n:host(.options-show) ::slotted([slot='start']) {\n    border-bottom-left-radius: 0 !important;\n}\n\n:host(.options-show) ::slotted([slot='end']) {\n    border-bottom-right-radius: 0 !important;\n}\n\nslot[name='start'],\nslot[name='end'] {\n    display: flex;\n}\n\nslot[name='error'] {\n    display: none;\n    margin-inline: 0.5rem;\n}\n\n:host([invalid]) slot[name='error'] {\n    display: block;\n}\n\ninput {\n    background-color: var(--wje-input-background-color);\n    border-width: var(--wje-input-border-width);\n    border-style: var(--wje-input-border-style);\n    border-color: var(--wje-input-border-color);\n    font-family: var(--wje-input-font-family);\n    color: var(--wje-input-color);\n    appearance: none;\n    outline: 0;\n    padding: 0.25rem 0.5rem;\n    line-height: var(--wje-input-line-height);\n    font-size: 14px;\n    font-weight: normal;\n    vertical-align: middle;\n    min-height: 32px;\n}\n\n.error-message {\n    display: none;\n    position: absolute;\n    max-width: 100%;\n    min-width: auto;\n    border-radius: 50px;\n    background: black;\n    padding: 0.25rem 0.5rem;\n    top: 0;\n    left: 50%;\n    transform: translate(-50%, -75%);\n    color: white;\n    font-size: 12px;\n    width: max-content;\n    line-height: normal;\n}\n\n@keyframes shake {\n    8%,\n    41% {\n        transform: translateX(-4px);\n    }\n    25%,\n    58% {\n        transform: translateX(4px);\n    }\n    75% {\n        transform: translateX(-2px);\n    }\n    92% {\n        transform: translateX(2px);\n    }\n    0%,\n    100% {\n        transform: translateX(0);\n    }\n}\n";
class Input extends WJElement {
  /**
   * Creates an instance of Input.
   */
  constructor() {
    super();
    __publicField(this, "observeFunction", (mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes") {
          const attributeName = mutation.attributeName;
          const oldValue = mutation.oldValue;
          const newValue = this.getAttribute(attributeName);
          console.log(`Attribute ${attributeName} changed from ${oldValue} to ${newValue}`);
        }
      });
      this.refresh();
    });
    /**
     * The class name of the input element.
     * @type {string}
     */
    __publicField(this, "className", "Input");
    this.invalid = false;
    this.pristine = true;
    this.internals = this.attachInternals();
    this.observer = new MutationObserver(this.observeFunction);
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
  }
  /**
   * Getter for the value attribute.
   * @returns {string} The value of the attribute.
   */
  get value() {
    var _a;
    return ((_a = this.input) == null ? void 0 : _a.value) ?? this._value ?? "";
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
   * Getter for the invalid attribute.
   * @returns {boolean} Whether the attribute is present.
   */
  get invalid() {
    return this.hasAttribute("invalid");
  }
  /**
   * Setter for the invalid attribute.
   * @param {boolean} isInvalid Whether the input is invalid.
   */
  set invalid(isInvalid) {
    if (isInvalid) this.setAttribute("invalid", "");
    else this.removeAttribute("invalid");
  }
  /**
   * Getter for the form attribute.
   * @returns {HTMLFormElement} The form the input is associated with.
   */
  get form() {
    return this.internals.form;
  }
  /**
   * Getter for the name attribute.
   * @returns {string} The name of the input element.
   */
  get name() {
    return this.getAttribute("name");
  }
  /**
   * Getter for the type attribute.
   * @returns {string} The type of the input element.
   */
  get type() {
    return this.localName;
  }
  /**
   * Getter for the validity attribute.
   * @returns {ValidityState} The validity state of the input.
   */
  get validity() {
    return this.internals.validity;
  }
  /**
   * Getter for the validationMessage attribute.
   * @returns {string} The validation message of the input element.
   */
  get validationMessage() {
    return this.internals.validationMessage;
  }
  /**
   * Getter for the willValidate attribute.
   * @returns {boolean} Whether the input will be validated.
   */
  get willValidate() {
    return this.internals.willValidate;
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
    return [];
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
  }
  beforeDraw() {
    this.observer.disconnect();
  }
  /**
   * Draws the input element.
   * @returns {DocumentFragment} The drawn input.
   */
  draw() {
    let hasSlotStart = this.hasSlot(this, "start");
    let hasSlotEnd = this.hasSlot(this, "end");
    let hasSlotError = this.hasSlot(this, "error");
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.setAttribute("part", "native");
    native.classList.add("native-input", this.variant || "default");
    if (this.hasAttribute("invalid")) native.classList.add("has-error");
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    let inputWrapper = document.createElement("div");
    inputWrapper.setAttribute("part", "wrapper");
    inputWrapper.classList.add("input-wrapper");
    let label = document.createElement("label");
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
    let error = document.createElement("div");
    error.classList.add("error-message");
    error.setAttribute("part", "error");
    let errorSlot = null;
    if (hasSlotError) {
      errorSlot = document.createElement("slot");
      errorSlot.setAttribute("name", "error");
      if (this.hasAttribute("error-inline")) {
        native.appendChild(errorSlot);
      } else {
        error.appendChild(errorSlot);
        wrapper.appendChild(error);
      }
    } else {
      wrapper.appendChild(error);
    }
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
      inputWrapper.appendChild(start);
      native.classList.add("has-start");
    }
    if (this.variant === "standard") {
      if (this.label) native.appendChild(label);
    } else {
      inputWrapper.appendChild(label);
    }
    inputWrapper.appendChild(input);
    wrapper.appendChild(inputWrapper);
    native.appendChild(wrapper);
    if (this.hasAttribute("clearable")) {
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
      inputWrapper.appendChild(end);
      native.classList.add("has-end");
    }
    fragment.appendChild(native);
    this.native = native;
    this.labelElement = label;
    this.input = input;
    this.errorMessage = error;
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
      this.validateInput();
      if (this.validateOnChange) {
        this.pristine = false;
        this.propagateValidation();
      }
      this.input.classList.remove("pristine");
      this.labelElement.classList.add("fade");
      const clone = new e.constructor(e.type, e);
      this.dispatchEvent(clone);
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
    this.validateInput();
    if (this.hasAttribute("invalid")) {
      this.showInvalidMessage();
    }
    this.observer.observe(this, {
      attributes: true,
      // Watch for attribute changes
      attributeOldValue: true
      // Keep track of the old value of attributes
    });
  }
  componentCleanup() {
    this.observer.disconnect();
  }
  /**
   * @summary Displays the validation message for the input.
   * If the input has a slot named 'error', it sets the text content of the element with attribute 'error-message' inside the slot to the validation message.
   * If the input does not have an 'error' slot, it sets the text content of the errorMessage property to the validation message.
   */
  showInvalidMessage() {
    let hasSlotError = this.hasSlot(this, "error");
    if (hasSlotError) {
      const slot = this.querySelector("[slot='error']");
      let errorMessage = slot.querySelector("[error-message]");
      if (!errorMessage) {
        const error = document.createElement("div");
        error.setAttribute("error-message", "");
        slot.appendChild(error);
        errorMessage = error;
      }
      errorMessage.textContent = this.internals.validationMessage;
    } else {
      this.errorMessage.textContent = this.internals.validationMessage;
    }
  }
  /**
   * @summary Validates the input.
   * This method checks the validity state of the input. If the input is not valid, it iterates over the validity state object.
   * For each invalid state, it constructs an attribute name and checks if the input has this attribute.
   * If the input has the attribute, it sets the validation error to the state and the error message to the attribute value.
   * If the input does not have the attribute, it sets the error message to the default validation message of the input.
   * It then sets the validity in the form internals to an object with the validation error as key and true as value, and the error message.
   * If the input is valid, it sets the validity in the form internals to an empty object.
   */
  validateInput() {
    const validState = this.input.validity;
    if (!validState.valid) {
      for (let state in validState) {
        const attr = `message-${state.toString()}`;
        if (validState[state]) {
          this.validationError = state.toString();
          let errorMessage = this.message;
          if (!this.hasAttribute("message"))
            errorMessage = this.hasAttribute(attr) ? this.getAttribute(attr) : this.input.validationMessage;
          this.internals.setValidity({ [this.validationError]: true }, errorMessage);
        }
      }
    } else {
      this.internals.setValidity({});
    }
  }
  /**
   * @summary Propagates the validation state of the input.
   * This method sets the 'invalid' property of the input based on its 'pristine' state and its internal validity state.
   * If the input is invalid and the 'customErrorDisplay' property is true, it dispatches an 'invalid' event.
   */
  propagateValidation() {
    this.invalid = !this.pristine && !this.internals.validity.valid;
    if (this.invalid && this.customErrorDisplay) {
      this.dispatchEvent(new Event("invalid"));
    }
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
  /**
   * @summary Callback function that is called when the custom element is associated with a form.
   * This function adds an event listener to the form's submit event, which validates the input and propagates the validation.
   * @param {HTMLFormElement} form The form the custom element is associated with.
   */
  formAssociatedCallback(form) {
    form == null ? void 0 : form.addEventListener("submit", () => {
      this.validateInput();
      this.propagateValidation();
    });
  }
  /**
   * The formResetCallback method is a built-in lifecycle callback that gets called when a form gets reset.
   * This method is responsible for resetting the value of the custom input element to its default value.
   * It also resets the form value and validity state in the form internals.
   * @function
   */
  formResetCallback() {
    this.value = this.defaultValue;
    this.internals.setFormValue(this.defaultValue);
    this.internals.setValidity({});
  }
  /**
   * The formStateRestoreCallback method is a built-in lifecycle callback that gets called when the state of a form-associated custom element is restored.
   * This method is responsible for restoring the value of the custom input element to its saved state.
   * It also restores the form value and validity state in the form internals to their saved states.
   * @param {object} state The saved state of the custom input element.
   * @function
   */
  formStateRestoreCallback(state) {
    this.value = state.value;
    this.internals.setFormValue(state.value);
    this.internals.setValidity({});
  }
  /**
   * The formStateSaveCallback method is a built-in lifecycle callback that gets called when the state of a form-associated custom element is saved.
   * This method is responsible for saving the value of the custom input element.
   * @returns {object} The saved state of the custom input element.
   * @function
   */
  formStateSaveCallback() {
    return {
      value: this.value
    };
  }
  /**
   * The formDisabledCallback method is a built-in lifecycle callback that gets called when the disabled state of a form-associated custom element changes.
   * This method is not implemented yet.
   * @param {boolean} disabled The new disabled state of the custom input element.
   * @function
   */
  formDisabledCallback(disabled) {
    console.warn("formDisabledCallback not implemented yet");
  }
  // dispatchEvent(e) {
  //     return false;
  // }
}
/**
 * Whether the input is associated with a form.
 * @type {boolean}
 */
__publicField(Input, "formAssociated", true);
Input.define("wje-input", Input);
export {
  Input as default
};
