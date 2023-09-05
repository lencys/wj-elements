var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { W as WJElement } from "./wj-element-e3d75f4b.js";
import "./wj-store.js";
const styles = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n:host {\n  --wj-card-subtitle-font-size: 10.5px;\n  --wj-card-subtitle-font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n}\n:host {\n  -webkit-transition: opacity 0.3s ease;\n  transition: opacity 0.3s ease;\n  font-family: var(--wj-card-subtitle-font-family);\n  font-size: var(--wj-card-subtitle-font-size);\n  text-transform: uppercase;\n  display: inline-block;\n  letter-spacing: 0.06em;\n  font-weight: 500;\n  margin: 0;\n  padding: 0;\n  line-height: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  filter: alpha(opacity=40);\n}";
const template = document.createElement("template");
template.innerHTML = `<style>
	${styles}
</style>`;
class CardSubtitle extends WJElement {
  constructor() {
    super(template);
    __publicField(this, "className", "CardTitle");
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  beforeDraw(context, store, params) {
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("slot");
    fragment.appendChild(element);
    return fragment;
  }
}
customElements.get("wj-card-subtitle") || window.customElements.define("wj-card-subtitle", CardSubtitle);
export {
  CardSubtitle
};
