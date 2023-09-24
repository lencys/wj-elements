var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import "./wj-store.js";
const styles = '/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Input ]\n*/\n:host {\n  --wj-input-font-family: Inter UI, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n  --wj-input-background-color: #fff;\n  --wj-input-color: #212121;\n  --wj-input-color-invalid: #b91e1e;\n  --wj-input-border-color: rgba(33, 33, 33, 0.14);\n  --wj-input-border-color-focus: #7252D3;\n  --wj-input-border-radius: 2px;\n  --wj-input-margin-bottom: .5rem;\n  --wj-input-line-height: 20px;\n  width: 100%;\n  margin-bottom: var(--wj-input-margin-bottom);\n  display: block;\n}\n:host .error-message {\n  display: none;\n  position: absolute;\n  width: auto;\n  max-width: 90%;\n  border-radius: 50px;\n  background: black;\n  padding: 0.25rem 0.5rem;\n  top: 0;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-size: 12px;\n  line-height: normal;\n}\n:host input {\n  background-color: var(--wj-input-background-color);\n  border: 1px solid var(--wj-input-border-color);\n  font-family: var(--wjinput-font-family);\n  color: var(--wj-input-color);\n  border-top-color: rgba(33, 33, 33, 0.21);\n  appearance: none;\n  outline: 0;\n  padding: 6px 8px;\n  line-height: var(--wj-input-line-height);\n  font-size: 14px;\n  font-weight: normal;\n  vertical-align: middle;\n  min-height: 32px;\n}\n:host .native-input {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n}\n:host .native-input .input-wrapper {\n  width: 100%;\n}\n:host .native-input.default {\n  background-color: var(--wj-input-background-color);\n  font-family: var(--wj-input-font-family);\n  position: relative;\n  border-radius: var(--wj-input-border-radius);\n  border: 1px solid var(--wj-input-border-color);\n  border-top-color: rgba(8, 8, 8, 0.14);\n  padding-inline: 9px;\n  padding-top: 5px;\n  padding-bottom: 4px;\n  transition: background-color 0.2s ease;\n  cursor: text;\n}\n:host .native-input.default.focused {\n  border: 1px solid var(--wj-input-border-color-focus) !important;\n}\n:host .native-input.default.focused label {\n  opacity: 0.67;\n  font-size: 12px;\n  letter-spacing: normal;\n}\n:host .native-input.default input {\n  border: none;\n  height: 25px;\n  min-height: 25px;\n  padding: 0;\n  margin-top: -4px;\n  background: none;\n  box-shadow: none;\n  width: 100%;\n}\n:host .native-input.default label {\n  margin: 0;\n  display: block;\n  opacity: 1;\n  cursor: text;\n  transition: opacity 0.2s ease;\n  line-height: var(--wj-input-line-height);\n}\n:host .native-input.default label.fade {\n  opacity: 0.5;\n  font-size: 12px;\n  letter-spacing: normal;\n}\n:host([required]) .input-wrapper::after {\n  color: #D83C31;\n  content: "*";\n  font-family: -apple-system, BlinkMacSystemFont, "Inter UI", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n  font-size: 20px;\n  position: absolute;\n  right: 10px;\n  top: 2px;\n}\n:host([invalid]) .error-message {\n  display: block;\n}\n:host([invalid]) label {\n  opacity: 1 !important;\n  color: var(--wj-input-color-invalid) !important;\n  animation-name: shake;\n  animation-duration: 0.4s;\n  animation-iteration-count: 1;\n}\nslot[name=start], slot[name=end] {\n  display: flex;\n  align-items: center;\n  position: relative;\n}\nslot[name=start] {\n  margin-inline: 0 10px;\n}\nslot[name=end] {\n  margin-inline: 10px 0;\n}\n::slotted([slot=start]) {\n  padding-inline: 0 10px;\n}\n::slotted([slot=start]):after {\n  border-right: 1px solid rgba(0, 0, 0, 0.16);\n  content: "";\n  display: block;\n  width: 1px;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n::slotted([slot=end]) {\n  padding-inline: 10px 0;\n}\n::slotted([slot=end]):after {\n  border-right: 1px solid rgba(0, 0, 0, 0.16);\n  content: "";\n  display: block;\n  width: 1px;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n@keyframes shake {\n  8%, 41% {\n    transform: translateX(-4px);\n  }\n  25%, 58% {\n    transform: translateX(4px);\n  }\n  75% {\n    transform: translateX(-2px);\n  }\n  92% {\n    transform: translateX(2px);\n  }\n  0%, 100% {\n    transform: translateX(0);\n  }\n}';
class Input extends WJElement {
  constructor(options = {}) {
    super();
    __publicField(this, "className", "Input");
    this.invalid = false;
    this.pristine = true;
    this.internals = this.attachInternals();
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
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store, params) {
    let hasSlotStart = this.hasSlot(this, "start");
    let hasSlotEnd = this.hasSlot(this, "end");
    let fragment = document.createDocumentFragment();
    let div = document.createElement("div");
    div.classList.add("native-input", "default");
    if (this.hasAttribute("invalid"))
      div.classList.add("has-error");
    let wrapper = document.createElement("div");
    wrapper.classList.add("input-wrapper");
    let label = document.createElement("label");
    label.innerText = this.label;
    if (this.value && !this.hasAttribute("error"))
      label.classList.add("fade");
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("value", this.value || "");
    input.classList.add("form-control", "pristine");
    if (this.hasAttribute("placeholder"))
      input.setAttribute("placeholder", this.placeholder);
    if (this.hasAttribute("disabled"))
      input.setAttribute("disabled", "");
    if (this.hasAttribute("readonly"))
      input.setAttribute("readonly", "");
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
    if (hasSlotStart)
      div.appendChild(start);
    wrapper.appendChild(label);
    wrapper.appendChild(input);
    div.appendChild(wrapper);
    if (hasSlotEnd)
      div.appendChild(end);
    div.appendChild(error);
    fragment.appendChild(div);
    this.native = div;
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
          console.log("validationError:", this.validationError);
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
