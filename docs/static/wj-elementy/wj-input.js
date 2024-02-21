var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement, { event } from "./wj-element.js";
const styles = '/*\n[ WJ Input ]\n*/\n:host {\n  --wj-input-font-family: var(--wj-font-family);\n  --wj-input-background-color: var(--wj-background);\n  --wj-input-color: var(--wj-color);\n  --wj-input-color-invalid: var(--wj-color-danger);\n  --wj-input-border-color: var(--wj-border-color);\n  --wj-input-border-color-focus: var(--wj-color-primary);\n  --wj-input-border-width: 1px;\n  --wj-input-border-style: solid;\n  --wj-input-border-radius: 4px;\n  --wj-input-margin-bottom: .5rem;\n  --wj-input-line-height: 20px;\n  --wj-input-slot-padding-inline: .5rem;\n  width: 100%;\n  margin-bottom: var(--wj-input-margin-bottom);\n  display: block;\n}\n:host .wrapper {\n  display: flex;\n  width: 100%;\n}\n:host .native-input .input-wrapper {\n  width: 100%;\n  position: relative;\n}\n:host .native-input.default {\n  background-color: var(--wj-input-background-color);\n  font-family: var(--wj-input-font-family);\n  position: relative;\n  border-radius: var(--wj-input-border-radius);\n  border-width: var(--wj-input-border-width);\n  border-style: var(--wj-input-border-style);\n  border-color: var(--wj-input-border-color);\n  padding-inline: 0;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  transition: background-color 0.2s ease;\n  cursor: text;\n}\n:host .native-input.default .input-wrapper {\n  margin-inline: 0.5rem;\n}\n:host .native-input.default.focused {\n  border-color: var(--wj-input-border-color-focus) !important;\n}\n:host .native-input.default.focused label {\n  opacity: 0.67;\n  font-size: 12px;\n  letter-spacing: normal;\n}\n:host .native-input.default input {\n  border: none;\n  height: 25px;\n  min-height: 25px;\n  padding: 0;\n  margin-top: -4px;\n  background: none;\n  box-shadow: none;\n  width: 100%;\n}\n:host .native-input.default label {\n  margin: 0;\n  display: block;\n  opacity: 1;\n  cursor: text;\n  transition: opacity 0.2s ease;\n  line-height: var(--wj-input-line-height);\n}\n:host .native-input.default label.fade {\n  opacity: 0.5;\n  font-size: 12px;\n  letter-spacing: normal;\n}\n:host .native-input.default ::slotted([slot=start]) {\n  border-left: none;\n  border-top: none;\n  border-bottom: none;\n}\n:host .native-input.default ::slotted([slot=end]) {\n  border-right: none;\n  border-top: none;\n  border-bottom: none;\n}\n:host .native-input.standard {\n  background-color: var(--wj-input-background-color);\n  font-family: var(--wj-input-font-family);\n  position: relative;\n  border-radius: var(--wj-input-border-radius);\n  padding-inline: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  transition: background-color 0.2s ease;\n  cursor: text;\n}\n:host .native-input.standard.focused input {\n  border-color: var(--wj-input-border-color-focus) !important;\n}\n:host .native-input.standard input {\n  display: block;\n  min-height: 32px;\n  padding-inline: 0.5rem;\n  padding-top: 0;\n  padding-bottom: 0;\n  background: none;\n  box-shadow: none;\n  width: 100%;\n  box-sizing: border-box;\n  border-radius: var(--wj-input-border-radius);\n  border-width: var(--wj-input-border-width);\n  border-style: var(--wj-input-border-style);\n  border-color: var(--wj-input-border-color);\n}\n:host .native-input.standard label {\n  margin: 0;\n  display: inline-block;\n  opacity: 1;\n  cursor: text;\n  transition: opacity 0.2s ease;\n  line-height: var(--wj-input-line-height);\n}\n:host .native-input.standard .input-wrapper:hover .clear {\n  visibility: visible;\n}\n:host .native-input.standard ::slotted([slot=start]) {\n  border-right: none;\n  border-radius: var(--wj-input-border-radius) 0 0 var(--wj-input-border-radius);\n}\n:host .native-input.standard ::slotted([slot=end]) {\n  border-left: none;\n  border-radius: 0 var(--wj-input-border-radius) var(--wj-input-border-radius) 0;\n}\n:host .native-input.standard.has-start input {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n:host .native-input.standard.has-end input {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n:host .native-input.standard .error-message {\n  position: static;\n  background: transparent;\n  padding: 0.25rem 0;\n  left: auto;\n  transform: none;\n  color: var(--wj-input-color-invalid);\n  font-size: 12px;\n  line-height: normal;\n}\n\n.clear {\n  visibility: hidden;\n  position: absolute;\n  right: 0;\n  top: 3px;\n  --wj-padding-top: .25rem;\n  --wj-padding-start: .25rem;\n  --wj-padding-end: .25rem;\n  --wj-padding-bottom: .25rem;\n  --wj-button-margin-inline: 0 .25rem;\n}\n\n:host([required]) .input-wrapper::after {\n  color: var(--wj-input-color-invalid);\n  content: "*";\n  font-family: var(--wj-force-mac-font-family);\n  font-size: 20px;\n  position: absolute;\n  right: 10px;\n  top: 2px;\n}\n\n:host([required]) .standard .input-wrapper::after {\n  top: 0;\n}\n\n:host([invalid]) .error-message {\n  display: block;\n}\n:host([invalid]) .default label {\n  opacity: 1 !important;\n  color: var(--wj-input-color-invalid) !important;\n  animation-name: shake;\n  animation-duration: 0.4s;\n  animation-iteration-count: 1;\n}\n\n::slotted([slot=start]), ::slotted([slot=end]) {\n  display: flex;\n  align-items: center;\n  border-width: var(--wj-input-border-width);\n  border-style: var(--wj-input-border-style);\n  border-color: var(--wj-input-border-color);\n  padding-inline: var(--wj-input-slot-padding-inline);\n}\n\nslot[name=start], slot[name=end] {\n  display: flex;\n}\n\ninput {\n  background-color: var(--wj-input-background-color);\n  border-width: var(--wj-input-border-width);\n  border-style: var(--wj-input-border-style);\n  border-color: var(--wj-input-border-color);\n  font-family: var(--wjinput-font-family);\n  color: var(--wj-input-color);\n  appearance: none;\n  outline: 0;\n  padding: 0.25rem 0.5rem;\n  line-height: var(--wj-input-line-height);\n  font-size: 14px;\n  font-weight: normal;\n  vertical-align: middle;\n  min-height: 32px;\n}\n\n.error-message {\n  display: none;\n  position: absolute;\n  width: auto;\n  max-width: 100%;\n  min-width: auto;\n  border-radius: 50px;\n  background: black;\n  padding: 0.25rem 0.5rem;\n  top: 0;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-size: 12px;\n  line-height: normal;\n}\n\n@keyframes shake {\n  8%, 41% {\n    transform: translateX(-4px);\n  }\n  25%, 58% {\n    transform: translateX(4px);\n  }\n  75% {\n    transform: translateX(-2px);\n  }\n  92% {\n    transform: translateX(2px);\n  }\n  0%, 100% {\n    transform: translateX(0);\n  }\n}';
class Input extends WJElement {
  constructor(options = {}) {
    super();
    __publicField(this, "className", "Input");
    this.invalid = false;
    this.pristine = true;
    this.internals = this.attachInternals();
  }
  set value(value) {
    this.setAttribute("value", value);
  }
  get value() {
    return this.getAttribute("value") || "";
  }
  get customErrorDisplay() {
    return this.hasAttribute("custom-error-display");
  }
  get validateOnChange() {
    return this.hasAttribute("validate-on-change");
  }
  get invalid() {
    return this.hasAttribute("invalid");
  }
  set invalid(isInvalid) {
    isInvalid && this.customErrorDisplay ? this.setAttribute("invalid", "") : this.removeAttribute("invalid");
  }
  get form() {
    return this.internals.form;
  }
  get name() {
    return this.getAttribute("name");
  }
  get type() {
    return this.localName;
  }
  get validity() {
    return this.internals.validity;
  }
  get validationMessage() {
    return this.internals.validationMessage;
  }
  get willValidate() {
    return this.internals.willValidate;
  }
  checkValidity() {
    return this.internals.checkValidity();
  }
  reportValidity() {
    return this.internals.reportValidity();
  }
  static get cssStyleSheet() {
    return styles;
  }
  static get observedAttributes() {
    return ["value"];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store, params) {
    let hasSlotStart = this.hasSlot(this, "start");
    let hasSlotEnd = this.hasSlot(this, "end");
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.setAttribute("part", "native");
    native.classList.add("native-input", this.variant || "default");
    if (this.hasAttribute("invalid"))
      native.classList.add("has-error");
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    let inputWrapper = document.createElement("div");
    inputWrapper.classList.add("input-wrapper");
    let label = document.createElement("label");
    label.innerText = this.label;
    if (this.value && !this.hasAttribute("error"))
      label.classList.add("fade");
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("part", "input");
    input.setAttribute("value", this.value || "");
    input.classList.add("form-control");
    if (this.hasAttribute("placeholder"))
      input.setAttribute("placeholder", this.placeholder);
    if (this.hasAttribute("multiple"))
      input.setAttribute("multiple", this.multiple);
    if (this.hasAttribute("disabled"))
      input.setAttribute("disabled", "");
    if (this.hasAttribute("readonly"))
      input.setAttribute("readonly", "");
    if (this.hasAttribute("maxlength"))
      input.setAttribute("maxlength", this.maxlength);
    if (this.hasAttribute("max"))
      input.setAttribute("max", this.max);
    if (this.hasAttribute("min"))
      input.setAttribute("min", this.min);
    let error = document.createElement("div");
    error.classList.add("error-message");
    let start = null;
    if (hasSlotStart) {
      start = document.createElement("slot");
      start.setAttribute("name", "start");
    }
    let end = null;
    if (hasSlotEnd) {
      end = document.createElement("slot");
      end.setAttribute("name", "end");
    }
    if (hasSlotStart) {
      wrapper.appendChild(start);
      native.classList.add("has-start");
    }
    if (this.variant === "standard") {
      if (this.label)
        native.appendChild(label);
    } else {
      inputWrapper.appendChild(label);
    }
    inputWrapper.appendChild(input);
    wrapper.appendChild(inputWrapper);
    native.appendChild(wrapper);
    if (this.hasAttribute("clearable")) {
      this.clear = document.createElement("wj-button");
      this.clear.classList.add("clear");
      this.clear.setAttribute("fill", "link");
      this.clear.setAttribute("part", "clear");
      let clearIcon = document.createElement("wj-icon");
      clearIcon.setAttribute("name", "x");
      this.clear.appendChild(clearIcon);
      inputWrapper.appendChild(this.clear);
    }
    if (hasSlotEnd) {
      wrapper.appendChild(end);
      native.classList.add("has-end");
    }
    native.appendChild(error);
    fragment.appendChild(native);
    this.native = native;
    this.labelElement = label;
    this.input = input;
    this.errorMessage = error;
    return fragment;
  }
  afterDraw() {
    [
      "type",
      "value",
      "placeholder",
      "required",
      "min",
      "max",
      "minLength",
      "maxLength",
      "pattern"
    ].forEach((attr) => {
      const attrValue = attr === "required" ? this.hasAttribute(attr) : this.getAttribute(attr);
      if (attrValue !== null && attrValue !== void 0) {
        this.input[attr] = attrValue;
      }
    });
    this.input.addEventListener("focus", (e) => {
      this.labelElement.classList.add("fade");
      this.native.classList.add("focused");
    });
    this.input.addEventListener("blur", (e) => {
      this.native.classList.remove("focused");
      if (!e.target.value)
        this.labelElement.classList.remove("fade");
    });
    this.input.addEventListener("input", (e) => {
      if (this.validateOnChange) {
        this.pristine = false;
      }
      this.input.classList.remove("pristine");
      this.labelElement.classList.add("fade");
      const clone = new e.constructor(e.type, e);
      this.dispatchEvent(clone);
      this.validateInput();
      event.dispatchCustomEvent(this, "wj-input:input", {
        value: this.input.value
      });
    });
    this.addEventListener("invalid", (e) => {
      this.invalid = true;
      this.pristine = false;
      this.errorMessage.textContent = this.internals.validationMessage;
      if (this.customErrorDisplay) {
        e.preventDefault();
      }
    });
    this.addEventListener("focus", () => this.input.focus());
    if (this.clear) {
      this.clear.addEventListener("wj:button-click", (e) => {
        this.input.value = "";
        event.dispatchCustomEvent(this.clear, "wj-input:clear");
      });
    }
  }
  validateInput() {
    const validState = this.input.validity;
    this.invalid = false;
    if (!validState.valid) {
      for (let state in validState) {
        const attr = `message-${state.toString()}`;
        if (validState[state]) {
          this.validationError = state.toString();
          this.invalid = !this.pristine && !validState.valid;
          let errorMessage = this.message;
          if (!this.hasAttribute("message"))
            errorMessage = this.hasAttribute(attr) ? this.getAttribute(attr) : this.input.validationMessage;
          this.internals.setValidity(
            { [this.validationError]: true },
            errorMessage
          );
          if (this.invalid && this.customErrorDisplay) {
            this.dispatchEvent(new Event("invalid"));
          }
        }
      }
    } else {
      this.internals.setValidity({});
      this.pristine = false;
      this.errorMessage.textContent = this.input.validationMessage;
    }
  }
  hasSlot(el, slotName = null) {
    let selector = slotName ? `[slot="${slotName}"]` : "[slot]";
    return el.querySelectorAll(selector).length > 0 ? true : false;
  }
}
__publicField(Input, "formAssociated", true);
customElements.get("wj-input") || window.customElements.define("wj-input", Input);
export {
  Input
};
