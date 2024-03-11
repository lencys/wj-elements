var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
const styles = '/*\n[ WJ Input ]\n*/\n:host {\n  --wj-input-font-family: var(--wj-font-family);\n  --wj-input-background-color: var(--wj-background);\n  --wj-input-color: var(--wj-color);\n  --wj-input-color-invalid: var(--wj-color-danger);\n  --wj-input-border-color: var(--wj-border-color);\n  --wj-input-border-color-focus: var(--wj-color-primary);\n  --wj-input-border-width: 1px;\n  --wj-input-border-style: solid;\n  --wj-input-border-radius: 4px;\n  --wj-input-margin-bottom: .5rem;\n  --wj-input-line-height: 20px;\n  --wj-input-slot-padding-inline: .5rem;\n  width: 100%;\n  margin-bottom: var(--wj-input-margin-bottom);\n  display: block;\n}\n:host .wrapper {\n  display: flex;\n  width: 100%;\n}\n:host .native-input .input-wrapper {\n  width: 100%;\n  position: relative;\n}\n:host .native-input.default {\n  background-color: var(--wj-input-background-color);\n  font-family: var(--wj-input-font-family);\n  position: relative;\n  border-radius: var(--wj-input-border-radius);\n  border-width: var(--wj-input-border-width);\n  border-style: var(--wj-input-border-style);\n  border-color: var(--wj-input-border-color);\n  padding-inline: 0;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  transition: background-color 0.2s ease;\n  cursor: text;\n}\n:host .native-input.default .input-wrapper {\n  margin-inline: 0.5rem;\n}\n:host .native-input.default.focused {\n  border-color: var(--wj-input-border-color-focus) !important;\n}\n:host .native-input.default.focused label {\n  opacity: 0.67;\n  font-size: 12px;\n  letter-spacing: normal;\n}\n:host .native-input.default input {\n  border: none;\n  height: 25px;\n  min-height: 25px;\n  padding: 0;\n  margin-top: -4px;\n  background: none;\n  box-shadow: none;\n  width: 100%;\n}\n:host .native-input.default label {\n  margin: 0;\n  display: block;\n  opacity: 1;\n  cursor: text;\n  transition: opacity 0.2s ease;\n  line-height: var(--wj-input-line-height);\n}\n:host .native-input.default label.fade {\n  opacity: 0.5;\n  font-size: 12px;\n  letter-spacing: normal;\n}\n:host .native-input.default ::slotted([slot=start]) {\n  border-left: none;\n  border-top: none;\n  border-bottom: none;\n}\n:host .native-input.default ::slotted([slot=end]) {\n  border-right: none;\n  border-top: none;\n  border-bottom: none;\n}\n:host .native-input.standard {\n  background-color: var(--wj-input-background-color);\n  font-family: var(--wj-input-font-family);\n  position: relative;\n  border-radius: var(--wj-input-border-radius);\n  padding-inline: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  transition: background-color 0.2s ease;\n  cursor: text;\n}\n:host .native-input.standard.focused input {\n  border-color: var(--wj-input-border-color-focus) !important;\n}\n:host .native-input.standard input {\n  display: block;\n  min-height: 32px;\n  padding-inline: 0.5rem;\n  padding-top: 0;\n  padding-bottom: 0;\n  background: none;\n  box-shadow: none;\n  width: 100%;\n  box-sizing: border-box;\n  border-radius: var(--wj-input-border-radius);\n  border-width: var(--wj-input-border-width);\n  border-style: var(--wj-input-border-style);\n  border-color: var(--wj-input-border-color);\n}\n:host .native-input.standard label {\n  margin: 0;\n  display: inline-block;\n  opacity: 1;\n  cursor: text;\n  transition: opacity 0.2s ease;\n  line-height: var(--wj-input-line-height);\n}\n:host .native-input.standard .input-wrapper:hover .clear {\n  visibility: visible;\n}\n:host .native-input.standard ::slotted([slot=start]) {\n  border-right: none;\n  border-radius: var(--wj-input-border-radius) 0 0 var(--wj-input-border-radius);\n}\n:host .native-input.standard ::slotted([slot=end]) {\n  border-left: none;\n  border-radius: 0 var(--wj-input-border-radius) var(--wj-input-border-radius) 0;\n}\n:host .native-input.standard.has-start input {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n:host .native-input.standard.has-end input {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n:host .native-input.standard .error-message {\n  position: static;\n  background: transparent;\n  padding: 0.25rem 0;\n  left: auto;\n  transform: none;\n  color: var(--wj-input-color-invalid);\n  font-size: 12px;\n  line-height: normal;\n}\n\n.clear {\n  visibility: hidden;\n  position: absolute;\n  right: 0;\n  top: 3px;\n  --wj-padding-top: .25rem;\n  --wj-padding-start: .25rem;\n  --wj-padding-end: .25rem;\n  --wj-padding-bottom: .25rem;\n  --wj-button-margin-inline: 0 .25rem;\n}\n\n:host([required]) .input-wrapper::after {\n  color: var(--wj-input-color-invalid);\n  content: "*";\n  font-family: var(--wj-force-mac-font-family);\n  font-size: 20px;\n  position: absolute;\n  right: 10px;\n  top: 2px;\n}\n\n:host([required]) .standard .input-wrapper::after {\n  top: 0;\n}\n\n:host([invalid]) .error-message {\n  display: block;\n}\n:host([invalid]) .default label {\n  opacity: 1 !important;\n  color: var(--wj-input-color-invalid) !important;\n  animation-name: shake;\n  animation-duration: 0.4s;\n  animation-iteration-count: 1;\n}\n\n::slotted([slot=start]), ::slotted([slot=end]) {\n  display: flex;\n  align-items: center;\n  border-width: var(--wj-input-border-width);\n  border-style: var(--wj-input-border-style);\n  border-color: var(--wj-input-border-color);\n  padding-inline: var(--wj-input-slot-padding-inline);\n}\n\nslot[name=start], slot[name=end] {\n  display: flex;\n}\n\ninput {\n  background-color: var(--wj-input-background-color);\n  border-width: var(--wj-input-border-width);\n  border-style: var(--wj-input-border-style);\n  border-color: var(--wj-input-border-color);\n  font-family: var(--wjinput-font-family);\n  color: var(--wj-input-color);\n  appearance: none;\n  outline: 0;\n  padding: 0.25rem 0.5rem;\n  line-height: var(--wj-input-line-height);\n  font-size: 14px;\n  font-weight: normal;\n  vertical-align: middle;\n  min-height: 32px;\n}\n\n.error-message {\n  display: none;\n  position: absolute;\n  width: auto;\n  max-width: 100%;\n  min-width: auto;\n  border-radius: 50px;\n  background: black;\n  padding: 0.25rem 0.5rem;\n  top: 0;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-size: 12px;\n  line-height: normal;\n}\n\n@keyframes shake {\n  8%, 41% {\n    transform: translateX(-4px);\n  }\n  25%, 58% {\n    transform: translateX(4px);\n  }\n  75% {\n    transform: translateX(-2px);\n  }\n  92% {\n    transform: translateX(2px);\n  }\n  0%, 100% {\n    transform: translateX(0);\n  }\n}';
class InputFile extends WJElement {
  constructor(options = {}) {
    super();
    __publicField(this, "className", "Input");
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
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.setAttribute("part", "native");
    native.classList.add("native-input-file", this.variant || "default");
    let fileInput = document.createElement("input");
    fileInput.setAttribute("type", "file");
    fileInput.setAttribute("multiple", "");
    fileInput.setAttribute("hidden", "");
    let input = document.createElement("wj-input");
    input.setAttribute("variant", "standard");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Click to upload");
    input.setAttribute("readonly", "");
    let span = document.createElement("span");
    span.setAttribute("slot", "start");
    let icon = document.createElement("wj-icon");
    icon.setAttribute("slot", "icon-only");
    icon.setAttribute("name", "cloud-upload");
    span.appendChild(icon);
    input.appendChild(span);
    native.appendChild(input);
    native.appendChild(fileInput);
    fragment.appendChild(native);
    this.native = native;
    this.input = input;
    this.fileInput = fileInput;
    return fragment;
  }
  afterDraw() {
    this.input.addEventListener("click", () => {
      this.fileInput.click();
    });
    this.fileInput.addEventListener("change", (e) => {
      var files = e.target.files;
      var fileNames = [];
      for (var i = 0; i < files.length; i++) {
        fileNames.push(files[i].name);
      }
      this.input.value = fileNames.join(", ");
    });
  }
}
WJElement.define("wj-input-file", InputFile);
export {
  InputFile as default
};
