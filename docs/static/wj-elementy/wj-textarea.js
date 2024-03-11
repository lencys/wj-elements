var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement, { event } from "./wj-element.js";
const styles = "/*\n[ WJ Textarea ]\n*/\n:host {\n  --wj-textarea-font-family: var(--wj-font-family);\n  --wj-textarea-background-color: var(--wj-background);\n  --wj-textarea-color: var(--wj-color);\n  --wj-textarea-color-invalid: var(--wj-color-danger);\n  --wj-textarea-border-width: 1px;\n  --wj-textarea-border-style: solid;\n  --wj-textarea-border-color: var(--wj-border-color);\n  --wj-textarea-border-color-focus: var(--wj-color-primary);\n  --wj-textarea-border-radius: 4px;\n  --wj-textarea-margin-bottom: .5rem;\n  --wj-textarea-line-height: 20px;\n  --wj-textarea-padding: 0.5rem;\n  width: 100%;\n  margin-bottom: var(--wj-textarea-margin-bottom);\n  display: block;\n}\n:host .wrapper {\n  display: flex;\n  width: 100%;\n  border-width: var(--wj-textarea-border-width);\n  border-style: var(--wj-textarea-border-style);\n  border-color: var(--wj-textarea-border-color);\n  border-radius: var(--wj-textarea-border-radius);\n}\n:host textarea {\n  font-family: var(--wj-textarea-font-family);\n  color: var(--wj-textarea-color);\n  font-size: 14px;\n  border: 0 none;\n  padding: 0 var(--wj-textarea-padding);\n}\n:host textarea:focus {\n  outline: none;\n}\n\n:host([resize=auto]) textarea,\n:host([resize=none]) textarea {\n  resize: none;\n}\n\n.native-textarea .input-wrapper {\n  width: 100%;\n  line-height: normal;\n}\n.native-textarea.default {\n  background-color: var(--wj-textarea-background-color);\n  font-family: var(--wj-textarea-font-family);\n  position: relative;\n  padding-inline: 0;\n  padding-top: 0;\n  transition: background-color 0.2s ease;\n  cursor: text;\n}\n.native-textarea.default.focused .wrapper {\n  border-color: var(--wj-textarea-border-color-focus) !important;\n}\n.native-textarea.default.focused label {\n  opacity: 0.67;\n  font-size: 12px;\n  letter-spacing: normal;\n}\n.native-textarea.default textarea {\n  border: none;\n  padding-top: 0;\n  background: none;\n  box-shadow: none;\n  width: calc(100% - var(--wj-textarea-padding) * 2);\n  max-width: calc(100% - var(--wj-textarea-padding) * 2);\n  min-width: calc(100% - var(--wj-textarea-padding) * 2);\n}\n.native-textarea.default label {\n  padding: 0 var(--wj-textarea-padding);\n  display: block;\n  opacity: 1;\n  cursor: text;\n  transition: opacity 0.2s ease;\n  line-height: var(--wj-textarea-line-height);\n  padding-top: 0.25rem;\n}\n.native-textarea.default label.fade {\n  opacity: 0.5;\n  font-size: 12px;\n  letter-spacing: normal;\n}\n.native-textarea.default ::slotted([slot=start]) {\n  border-left: none;\n  border-top: none;\n  border-bottom: none;\n}\n.native-textarea.default ::slotted([slot=end]) {\n  border-right: none;\n  border-top: none;\n  border-bottom: none;\n}\n.native-textarea.standard {\n  background-color: var(--wj-textarea-background-color);\n  font-family: var(--wj-textarea-font-family);\n  position: relative;\n  border-radius: var(--wj-textarea-border-radius);\n  padding: 0;\n  transition: background-color 0.2s ease;\n  cursor: text;\n}\n.native-textarea.standard.focused .wrapper {\n  border-color: var(--wj-textarea-border-color-focus) !important;\n}\n.native-textarea.standard textarea {\n  display: block;\n  min-height: 32px;\n  background: none;\n  box-shadow: none;\n  width: 100%;\n  box-sizing: border-box;\n  border-radius: var(--wj-textarea-border-radius);\n}\n.native-textarea.standard label {\n  margin: 0;\n  display: inline-block;\n  opacity: 1;\n  cursor: text;\n  transition: opacity 0.2s ease;\n  line-height: var(--wj-textarea-line-height);\n}\n.native-textarea.standard ::slotted([slot=start]) {\n  border-right: none;\n  border-radius: var(--wj-textarea-border-radius) 0 0 var(--wj-textarea-border-radius);\n}\n.native-textarea.standard ::slotted([slot=end]) {\n  border-left: none;\n  border-radius: 0 var(--wj-textarea-border-radius) var(--wj-textarea-border-radius) 0;\n}\n.native-textarea.standard.has-start textarea {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.native-textarea.standard.has-end textarea {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.native-textarea.standard .error-message {\n  position: static;\n  background: transparent;\n  padding: 0.25rem 0;\n  left: auto;\n  transform: none;\n  color: var(--wj-textarea-color-invalid);\n  font-size: 12px;\n  line-height: normal;\n}\n\n.counter {\n  float: right;\n}";
class Textarea extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Textarea");
    __publicField(this, "setTextareaHeight", () => {
      if (this.getAttribute("resize") === "auto") {
        this.input.style.height = "auto";
        this.input.style.height = this.input.scrollHeight + "px";
      }
    });
    __publicField(this, "counter", (e) => {
      this.counterElement.innerText = e.target.value.length + "/" + this.input.maxLength;
    });
    this._checked = false;
  }
  set checked(value) {
    this._checked = value;
    if (value)
      this.setAttribute("checked", "");
    else
      this.removeAttribute("checked");
  }
  get checked() {
    return this._checked;
  }
  static get cssStyleSheet() {
    return styles;
  }
  static get observedAttributes() {
    return ["checked"];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.classList.add("native-textarea", this.variant || "default");
    if (this.hasAttribute("invalid"))
      native.classList.add("has-error");
    let wrapper = document.createElement("div");
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
    input.innerText = this.innerText;
    input.classList.add("form-control");
    input.setAttribute("part", "input");
    input.setAttribute("rows", this.rows || 3);
    input.setAttribute("spellcheck", false);
    if (this.resize === "auto")
      input.addEventListener("input", this.setTextareaHeight);
    if (this.variant === "standard") {
      if (this.label)
        native.appendChild(label);
    } else {
      inputWrapper.appendChild(label);
    }
    inputWrapper.appendChild(input);
    wrapper.appendChild(inputWrapper);
    native.appendChild(wrapper);
    fragment.appendChild(native);
    if (this.hasAttribute("counter")) {
      input.maxLength = this.maxLength || 1e3;
      input.addEventListener("input", this.counter);
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
  afterDraw() {
    this.resizeObserver = new ResizeObserver(() => this.setTextareaHeight);
    if (!this.hasAttribute("disabled")) {
      event.addListener(this, "click", "wj:textarea:change");
      event.addListener(this, "click", "wj:textarea:input");
    }
    this.input.addEventListener("focus", (e) => {
      this.labelElement.classList.add("fade");
      this.native.classList.add("focused");
    });
    this.input.addEventListener("blur", (e) => {
      this.native.classList.remove("focused");
      if (!e.target.value)
        this.labelElement.classList.remove("fade");
    });
  }
  disconnectedCallback() {
    this.resizeObserver.unobserve(this.input);
  }
}
WJElement.define("wj-textarea", Textarea);
export {
  Textarea as default
};
