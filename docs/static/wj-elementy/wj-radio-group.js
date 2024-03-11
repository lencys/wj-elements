var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import Radio from "./wj-radio.js";
const styles = "/*\n[ WJ Radio Group ]\n*/\n.wj-inline {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}";
class RadioGroup extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "RadioGroup");
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
    native.classList.add("native-radio-group", this.hasAttribute("inline") ? "wj-inline" : "ddd");
    let slot = document.createElement("slot");
    native.appendChild(slot);
    fragment.appendChild(native);
    return fragment;
  }
  afterDraw() {
    if (this.value) {
      this.setRadioToChekced(this.getRadioByValue(this.value));
    }
    this.addEventListener("wj:radio:input", (e) => {
      this.removeCheck();
      this.setRadioToChekced(e.detail.context);
    });
  }
  getRadioByValue(value) {
    return this.getAllElements().filter((el) => el instanceof Radio && el.value === value)[0];
  }
  removeCheck() {
    this.getAllElements().forEach((el) => {
      if (el instanceof Radio)
        el.checked = false;
    });
  }
  setRadioToChekced(radio) {
    if (radio instanceof Radio) {
      this.setAttribute("value", radio.value);
      radio.checked = true;
    }
  }
  getAllElements() {
    return Array.from(this.childNodes);
  }
}
WJElement.define("wj-radio-group", RadioGroup);
export {
  RadioGroup as default
};
