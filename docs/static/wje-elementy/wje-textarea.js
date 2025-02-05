var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement, { event } from "./wje-element.js";
const styles = "/*\n[ WJ Textarea ]\n*/\n\n:host {\n    width: 100%;\n    margin-bottom: var(--wje-textarea-margin-bottom);\n    display: block;\n    .wrapper {\n        display: flex;\n        width: 100%;\n        border-width: var(--wje-textarea-border-width);\n        border-style: var(--wje-textarea-border-style);\n        border-color: var(--wje-textarea-border-color);\n        border-radius: var(--wje-textarea-border-radius);\n        box-sizing: border-box;\n    }\n    textarea {\n        font-family: var(--wje-textarea-font-family);\n        color: var(--wje-textarea-color);\n        font-size: 14px;\n        border: 0 none;\n        padding: 0 var(--wje-textarea-padding);\n        &:focus {\n            outline: none;\n        }\n    }\n}\n\n:host([invalid]) {\n    .error-message {\n        display: block;\n    }\n    .default {\n        label {\n            opacity: 1 !important;\n            color: var(--wje-input-color-invalid) !important;\n            animation-name: shake;\n            animation-duration: 0.4s;\n            animation-iteration-count: 1;\n        }\n    }\n}\n\n:host([required]) .input-wrapper::after {\n    color: var(--wje-input-color-invalid);\n    content: '*';\n    font-family: var(--wje-force-mac-font-family);\n    font-size: 20px;\n    position: absolute;\n    right: 0;\n    top: 0;\n}\n\n:host([required]) .standard .input-wrapper::after {\n    top: 0;\n}\n\n:host([resize='auto']) textarea,\n:host([resize='none']) textarea {\n    resize: none;\n}\n\n.native-textarea {\n    .input-wrapper {\n        width: 100%;\n        line-height: normal;\n    }\n    &.default {\n        background-color: var(--wje-textarea-background-color);\n        font-family: var(--wje-textarea-font-family);\n        position: relative;\n        padding-inline: 0;\n        padding-top: 0;\n        transition: background-color 0.2s ease;\n        cursor: text;\n        &.focused {\n            .wrapper {\n                border-color: var(--wje-textarea-border-color-focus) !important;\n            }\n            label {\n                opacity: 0.67;\n                font-size: 12px;\n                letter-spacing: normal;\n            }\n        }\n        textarea {\n            border: none;\n            padding-top: 0;\n            background: none;\n            box-shadow: none;\n            width: calc(100% - var(--wje-textarea-padding) * 2);\n            max-width: calc(100% - var(--wje-textarea-padding) * 2);\n            min-width: calc(100% - var(--wje-textarea-padding) * 2);\n        }\n        label {\n            padding: 0 var(--wje-textarea-padding);\n            display: block;\n            opacity: 1;\n            cursor: text;\n            transition: opacity 0.2s ease;\n            line-height: var(--wje-textarea-line-height);\n            padding-top: 0.25rem;\n            &.fade {\n                opacity: 0.5;\n                font-size: 12px;\n                letter-spacing: normal;\n            }\n        }\n        ::slotted([slot='start']) {\n            border-left: none;\n            border-top: none;\n            border-bottom: none;\n        }\n\n        ::slotted([slot='end']) {\n            border-right: none;\n            border-top: none;\n            border-bottom: none;\n        }\n    }\n    &.standard {\n        font-family: var(--wje-textarea-font-family);\n        position: relative;\n        border-radius: var(--wje-textarea-border-radius);\n        padding: 0;\n        transition: background-color 0.2s ease;\n        cursor: text;\n        &.focused {\n            .wrapper {\n                border-color: var(--wje-textarea-border-color-focus) !important;\n            }\n        }\n        textarea {\n            background-color: var(--wje-textarea-background-color);\n            display: block;\n            min-height: 32px;\n            box-shadow: none;\n            width: 100%;\n            box-sizing: border-box;\n            border-radius: var(--wje-textarea-border-radius);\n        }\n        label {\n            margin: 0;\n            display: inline-block;\n            opacity: 1;\n            cursor: text;\n            transition: opacity 0.2s ease;\n            line-height: var(--wje-textarea-line-height);\n        }\n        ::slotted([slot='start']) {\n            border-right: none;\n            border-radius: var(--wje-textarea-border-radius) 0 0 var(--wje-textarea-border-radius);\n        }\n\n        ::slotted([slot='end']) {\n            border-left: none;\n            border-radius: 0 var(--wje-textarea-border-radius) var(--wje-textarea-border-radius) 0;\n        }\n\n        &.has-start textarea {\n            border-top-left-radius: 0;\n            border-bottom-left-radius: 0;\n        }\n\n        &.has-end textarea {\n            border-top-right-radius: 0;\n            border-bottom-right-radius: 0;\n        }\n        .error-message {\n            position: static;\n            background: transparent;\n            padding: 0.25rem 0;\n            left: auto;\n            transform: none;\n            color: var(--wje-textarea-color-invalid);\n            font-size: 12px;\n            line-height: normal;\n        }\n    }\n}\n\n.counter {\n    float: right;\n}\n\n@keyframes shake {\n    8%,\n    41% {\n        transform: translateX(-4px);\n    }\n    25%,\n    58% {\n        transform: translateX(4px);\n    }\n    75% {\n        transform: translateX(-2px);\n    }\n    92% {\n        transform: translateX(2px);\n    }\n    0%,\n    100% {\n        transform: translateX(0);\n    }\n}\n";
class Textarea extends WJElement {
  /**
   * Creates an instance of Textarea.
   * @class
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
    __publicField(this, "className", "Textarea");
    /**
     * Sets the height of the textarea.
     */
    __publicField(this, "setTextareaHeight", () => {
      if (this.getAttribute("resize") === "auto") {
        this.input.style.height = "auto";
        this.input.style.height = this.input.scrollHeight + "px";
      }
    });
    /**
     * Updates the counter for the textarea.
     * @param {Event} e The event object.
     */
    __publicField(this, "counterFn", (e) => {
      this.counterElement.innerText = e.target.value.length + "/" + this.input.maxLength;
    });
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
   * @returns {string} The name of the input.
   */
  get name() {
    return this.getAttribute("name");
  }
  /**
   * Getter for the type attribute.
   * @returns {string} The type of the input.
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
   * @returns {string} The validation message of the input.
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
   * Returns the CSS styles for the component.
   * @static
   * @returns {CSSStyleSheet} The CSS stylesheet
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
    return [];
  }
  set placeholder(value) {
    this.setAttribute("placeholder", value);
  }
  get placeholder() {
    return this.getAttribute("placeholder");
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
    if (this.pristine) {
      this.value = this.innerHTML;
      this.pristine = false;
    }
  }
  beforeDraw() {
    this.observer.disconnect();
  }
  /**
   * Draws the component for the textarea.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.classList.add("native-textarea", this.variant || "default");
    native.setAttribute("part", "native");
    if (this.hasAttribute("invalid")) native.classList.add("has-error");
    let wrapper = document.createElement("div");
    wrapper.setAttribute("part", "wrapper");
    wrapper.classList.add("wrapper");
    let inputWrapper = document.createElement("div");
    inputWrapper.classList.add("input-wrapper");
    let label = document.createElement("label");
    label.htmlFor = "textarea";
    label.innerHTML = this.label || "";
    let input = document.createElement("textarea");
    input.id = "textarea";
    input.name = this.name;
    input.disabled = this.hasAttribute("disabled");
    input.innerText = this.value;
    input.placeholder = this.placeholder || "";
    input.classList.add("form-control");
    input.setAttribute("part", "input");
    input.setAttribute("rows", this.rows || 3);
    input.setAttribute("spellcheck", false);
    const attributes = Array.from(this.attributes).map((attr) => attr.name);
    attributes.forEach((attr) => {
      if (this.hasAttribute(attr)) {
        input.setAttribute(attr, this[attr] || "");
      }
    });
    if (this.resize === "auto") input.addEventListener("input", this.setTextareaHeight);
    if (this.variant === "standard") {
      if (this.label) native.appendChild(label);
    } else {
      inputWrapper.appendChild(label);
    }
    inputWrapper.appendChild(input);
    wrapper.appendChild(inputWrapper);
    native.appendChild(wrapper);
    fragment.appendChild(native);
    if (this.hasAttribute("counter")) {
      input.maxLength = this.maxLength || 1e3;
      input.addEventListener("input", this.counterFn);
      let counter = document.createElement("div");
      counter.classList.add("counter");
      counter.innerText = `${input.value.length}/${input.maxLength}`;
      this.counterElement = counter;
      fragment.appendChild(counter);
    }
    this.native = native;
    this.labelElement = label;
    this.input = input;
    return fragment;
  }
  /**
   * Sets up the event listeners after the component is drawn.
   */
  afterDraw() {
    this.resizeObserver = new ResizeObserver(() => this.setTextareaHeight);
    if (!this.hasAttribute("disabled")) {
      event.addListener(this, "click", "wje:textarea:change");
      event.addListener(this, "click", "wje:textarea:input");
    }
    this.input.addEventListener("focus", (e) => {
      this.labelElement.classList.add("fade");
      this.native.classList.add("focused");
    });
    this.input.addEventListener("blur", (e) => {
      this.native.classList.remove("focused");
      if (!e.target.value) this.labelElement.classList.remove("fade");
    });
    this.addEventListener("invalid", (e) => {
      this.invalid = true;
      this.pristine = false;
      this.showInvalidMessage();
      if (this.customErrorDisplay) {
        e.preventDefault();
      }
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
      event.dispatchCustomEvent(this, "wje-textarea:input", {
        value: this.input.value
      });
      this.value = this.input.value;
    });
    this.validateInput();
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
   * Disconnects the component.
   */
  beforeDisconnect() {
    this.resizeObserver.unobserve(this.input);
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
   * @summary Callback function that is called when the custom element is associated with a form.
   * This function adds an event listener to the form's submit event, which validates the input and propagates the validation.
   * @param {HTMLFormElement} form The form the custom element is associated with.
   */
  formAssociatedCallback(form) {
    this.internals.setFormValue(this.value);
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
}
/**
 * Whether the input is associated with a form.
 * @type {boolean}
 */
__publicField(Textarea, "formAssociated", true);
Textarea.define("wje-textarea", Textarea);
export {
  Textarea as default
};
