var d = Object.defineProperty;
var c = (i, t, e) => t in i ? d(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var n = (i, t, e) => (c(i, typeof t != "symbol" ? t + "" : t, e), e);
import u from "./wj-element.js";
import { Radio as o } from "./wj-radio.js";
import "./wj-store.js";
const h = `.wj-inline{display:flex;flex-direction:row;flex-wrap:wrap;gap:.5rem}
`;
class m extends u {
  constructor() {
    super();
    n(this, "className", "RadioGroup");
  }
  static get cssStyleSheet() {
    return h;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(e, s, p) {
    let a = document.createDocumentFragment(), r = document.createElement("div");
    r.classList.add("native-radio-group", this.hasAttribute("inline") ? "wj-inline" : "ddd");
    let l = document.createElement("slot");
    return r.appendChild(l), a.appendChild(r), a;
  }
  afterDraw() {
    this.value && this.setRadioToChekced(this.getRadioByValue(this.value)), this.addEventListener("wj:radio:input", (e) => {
      this.removeCheck(), this.setRadioToChekced(e.detail.context);
    });
  }
  getRadioByValue(e) {
    return this.getAllElements().filter((s) => s instanceof o && s.value === e)[0];
  }
  removeCheck() {
    this.getAllElements().forEach((e) => {
      e instanceof o && (e.checked = !1);
    });
  }
  setRadioToChekced(e) {
    e instanceof o && (this.setAttribute("value", e.value), e.checked = !0);
  }
  getAllElements() {
    return Array.from(this.childNodes);
  }
}
customElements.get("wj-radio-group") || window.customElements.define("wj-radio-group", m);
export {
  m as RadioGroup
};
