var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { F as FormAssociatedElement } from "./form-associated-element-DEQ4y-jn.js";
import { event } from "./event.js";
const styles = "/*\n[ WJ Textarea ]\n*/\n\n:host {\n    width: 100%;\n    margin-bottom: var(--wje-textarea-margin-bottom);\n    display: block;\n\n    label {\n        margin: var(--wje-textarea-label-margin);\n        padding: var(--wje-textarea-label-padding);\n        display: var(--wje-textarea-label-display);\n        opacity: 1;\n        cursor: text;\n        transition: opacity 0.2s ease;\n        line-height: var(--wje-textarea-label-line-height);\n        font-size: var(--wje-textarea-label-font-size);\n    }\n\n    .wrapper {\n        display: flex;\n        width: 100%;\n        border-width: var(--wje-textarea-border-width);\n        border-style: var(--wje-textarea-border-style);\n        border-color: var(--wje-textarea-border-color);\n        border-radius: var(--wje-textarea-border-radius);\n        box-sizing: border-box;\n    }\n    textarea {\n        font-family: var(--wje-textarea-font-family);\n        color: var(--wje-textarea-color);\n        font-size: 14px;\n        border: 0 none;\n        padding: var(--wje-textarea-padding);\n        &:focus {\n            outline: none;\n        }\n    }\n}\n\n:host([invalid]) {\n    .error-message {\n        display: block;\n    }\n    .default {\n        label {\n            opacity: 1 !important;\n            color: var(--wje-input-color-invalid) !important;\n            animation-name: shake;\n            animation-duration: 0.4s;\n            animation-iteration-count: 1;\n        }\n    }\n}\n\n:host([required]) .wrapper::after {\n    color: var(--wje-input-color-invalid);\n    content: var(--wje-input-required-symbol);\n    font-size: 24px;\n    position: absolute;\n    right: 12px;\n    top: 0;\n}\n\n:host([required]) .standard .input-wrapper::after {\n    right: 13px;\n    top: -20px;\n}\n\n:host([resize='auto']) textarea,\n:host([resize='none']) textarea {\n    resize: none;\n}\n\n.native-textarea {\n    .input-wrapper {\n        width: 100%;\n        line-height: normal;\n    }\n    &.default {\n        background-color: var(--wje-textarea-background-color);\n        font-family: var(--wje-textarea-font-family);\n        position: relative;\n        padding-inline: 0;\n        padding-top: 0;\n        transition: background-color 0.2s ease;\n        cursor: text;\n        &.focused {\n            .wrapper {\n                border-color: var(--wje-textarea-border-color-focus) !important;\n            }\n            label {\n                opacity: 0.67;\n                font-size: 12px;\n                letter-spacing: normal;\n            }\n        }\n        textarea {\n            border: none;\n            padding-top: 0;\n            background: none;\n            box-shadow: none;\n            width: calc(100% - var(--wje-textarea-padding) * 2);\n            max-width: calc(100% - var(--wje-textarea-padding) * 2);\n            min-width: calc(100% - var(--wje-textarea-padding) * 2);\n            padding: 0 var(--wje-textarea-padding);\n        }\n        label {\n            margin: var(--wje-textarea-label-margin);\n            padding: var(--wje-textarea-label-padding);\n            display: var(--wje-textarea-label-display);\n            opacity: 1;\n            cursor: text;\n            transition: opacity 0.2s ease;\n            line-height: var(--wje-textarea-label-line-height);\n            font-size: var(--wje-textarea-label-font-size);\n        }\n        /*label {*/\n        /*    padding: 0 var(--wje-textarea-padding);*/\n        /*    display: block;*/\n        /*    line-height: var(--wje-textarea-line-height);*/\n        /*    padding-top: 0.25rem;*/\n        /*    &.fade {*/\n        /*        opacity: 0.5;*/\n        /*        font-size: 12px;*/\n        /*        letter-spacing: normal;*/\n        /*    }*/\n        /*}*/\n        ::slotted([slot='start']) {\n            border-left: none;\n            border-top: none;\n            border-bottom: none;\n        }\n\n        ::slotted([slot='end']) {\n            border-right: none;\n            border-top: none;\n            border-bottom: none;\n        }\n    }\n    &.standard {\n        position: relative;\n        border-radius: var(--wje-textarea-border-radius);\n        padding: 0;\n        transition: background-color 0.2s ease;\n        cursor: text;\n        &.focused {\n            .wrapper {\n                border-color: var(--wje-textarea-border-color-focus) !important;\n            }\n        }\n        textarea {\n            background-color: var(--wje-textarea-background-color);\n            display: block;\n            min-height: 32px;\n            box-shadow: none;\n            width: 100%;\n            box-sizing: border-box;\n            border-radius: var(--wje-textarea-border-radius);\n        }\n        /*label {*/\n        /*    margin: var(--wje-textarea-label-margin);*/\n        /*    display: inline-block;*/\n        /*    line-height: var(--wje-textarea-line-height);*/\n        /*}*/\n        ::slotted([slot='start']) {\n            border-right: none;\n            border-radius: var(--wje-textarea-border-radius) 0 0 var(--wje-textarea-border-radius);\n        }\n\n        ::slotted([slot='end']) {\n            border-left: none;\n            border-radius: 0 var(--wje-textarea-border-radius) var(--wje-textarea-border-radius) 0;\n        }\n\n        &.has-start textarea {\n            border-top-left-radius: 0;\n            border-bottom-left-radius: 0;\n        }\n\n        &.has-end textarea {\n            border-top-right-radius: 0;\n            border-bottom-right-radius: 0;\n        }\n        slot[name='error'] {\n            position: static;\n            background: transparent;\n            padding: 0.25rem 0;\n            left: auto;\n            transform: none;\n            color: var(--wje-textarea-color-invalid);\n            font-size: 12px;\n            line-height: normal;\n        }\n    }\n}\n\n.counter {\n    float: right;\n}\n\nslot[name='error'] {\n    display: none;\n}\n\n:host([invalid]) slot[name='error'] {\n    display: block;\n}\n\nslot[name='error'] {\n    display: none;\n    position: absolute;\n    max-width: 100%;\n    min-width: auto;\n    border-radius: 50px;\n    background: black;\n    padding: 0.25rem 0.5rem;\n    top: 0;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: white;\n    font-size: var(--wje-font-size-small);\n    width: max-content;\n    line-height: normal;\n}\n\n@keyframes shake {\n    8%,\n    41% {\n        transform: translateX(-4px);\n    }\n    25%,\n    58% {\n        transform: translateX(4px);\n    }\n    75% {\n        transform: translateX(-2px);\n    }\n    92% {\n        transform: translateX(2px);\n    }\n    0%,\n    100% {\n        transform: translateX(0);\n    }\n}\n";
const _Textarea = class _Textarea extends FormAssociatedElement {
  /**
   * Creates an instance of Textarea.
   * @class
   */
  constructor() {
    super();
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
    this._instanceId = ++_Textarea._instanceId;
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
   * Getter for the value attribute.
   * @returns {string} The value of the attribute.
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
    if (value === null || value === void 0) {
      this.removeAttribute("label");
    } else {
      this.setAttribute("label", value);
    }
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
  set placeholder(value) {
    this.setAttribute("placeholder", value);
  }
  get placeholder() {
    return this.getAttribute("placeholder");
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
    return ["value", "name", "disabled", "placeholder", "label", "required", "readonly", "invalid", "rows"];
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
    if (this.pristine) {
      const attrValue = this.getAttribute("value");
      this.value = attrValue !== null ? attrValue : this.innerHTML;
      this.pristine = false;
    }
    this.syncAria();
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    if (name === "label") {
      this.refresh();
      return;
    }
    if (!this.input) {
      this.syncAria();
      return;
    }
    if (name === "value") {
      this._value = newValue ?? "";
      this.input.value = this.value;
      this.internals.setFormValue(this.value);
    } else if (name === "name") {
      this.input.name = this.name;
    } else if (name === "disabled") {
      this.input.disabled = this.hasAttribute("disabled");
    } else if (name === "required") {
      this.input.required = this.required;
    } else if (name === "readonly") {
      this.input.readOnly = this.hasAttribute("readonly");
    } else if (name === "placeholder") {
      this.input.placeholder = this.placeholder || "";
    } else if (name === "rows") {
      this.input.rows = Number(newValue || 3);
    }
    this.syncAria();
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
    label.setAttribute("part", "label");
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
    input.rows = Number(this.getAttribute("rows") || 3);
    input.setAttribute("spellcheck", false);
    const attributes = Array.from(this.attributes).map((attr) => attr.name);
    attributes.forEach((attr) => {
      if (this.hasAttribute(attr)) {
        input.setAttribute(attr, this[attr] || "");
      }
    });
    let error = document.createElement("div");
    error.setAttribute("slot", "error");
    let errorSlot = document.createElement("slot");
    errorSlot.setAttribute("name", "error");
    this._ariaErrorId = this.id ? `${this.id}-error` : `wje-textarea-${this._instanceId}-error`;
    errorSlot.id = this._ariaErrorId;
    if (this.getAttribute("resize") === "auto") input.addEventListener("input", this.setTextareaHeight);
    if (this.label) {
      if (this.variant === "standard") {
        native.appendChild(label);
      } else {
        inputWrapper.appendChild(label);
      }
    }
    inputWrapper.appendChild(input);
    wrapper.appendChild(inputWrapper);
    native.appendChild(wrapper);
    native.append(errorSlot);
    this.append(error);
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
    this.syncAria();
    return fragment;
  }
  /**
   * Sets up the event listeners after the component is drawn.
   */
  afterDraw() {
    if (this.getAttribute("resize") === "auto" && typeof ResizeObserver === "function") {
      this.resizeObserver = new ResizeObserver(() => this.setTextareaHeight());
      this.resizeObserver.observe(this.input);
    }
    if (!this.hasAttribute("disabled")) {
      event.addListener(this, "click", "wje-textarea:change");
      event.addListener(this, "click", "wje-textarea:input");
    }
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
      if (this.invalid) {
        this.invalid = false;
        this.internals.setValidity({}, "");
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
    this.addEventListener("invalid", (e) => {
      this.invalid = true;
      this.pristine = false;
      this.showInvalidMessage();
      if (this.customErrorDisplay) {
        e.preventDefault();
      }
    });
    this.validate();
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
  componentCleanup() {
    var _a, _b;
    (_a = this.resizeObserver) == null ? void 0 : _a.unobserve(this.input);
    (_b = this.resizeObserver) == null ? void 0 : _b.disconnect();
  }
  /**
   * Disconnects the component.
   */
  beforeDisconnect() {
    var _a, _b;
    (_a = this.resizeObserver) == null ? void 0 : _a.unobserve(this.input);
    (_b = this.resizeObserver) == null ? void 0 : _b.disconnect();
  }
};
__publicField(_Textarea, "_instanceId", 0);
let Textarea = _Textarea;
Textarea.define("wje-textarea", Textarea);
export {
  Textarea as default
};
//# sourceMappingURL=wje-textarea.js.map
