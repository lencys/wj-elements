var c = Object.defineProperty;
var d = (r, t, e) => t in r ? c(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var l = (r, t, e) => (d(r, typeof t != "symbol" ? t + "" : t, e), e);
import i, { WjElementUtils as u } from "./wj-element.js";
import "./default-store-actions-ff3e8b0b.js";
const p = `:host{color:red}
`, m = document.createElement("template");
m.innerHTML = `<style>
	${p}
</style>`;
class w extends i {
  constructor() {
    super(m);
    l(this, "className", "Card");
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open", u.setAttributesToElement(this, {
      test: "test"
    });
  }
  beforeDraw(e, o, s) {
  }
  draw(e, o, s) {
    console.log(e, o, s);
    let n = document.createDocumentFragment(), a = document.createElement("div");
    return a.innerHTML = s.text, n.appendChild(a), n;
  }
  afterDraw(e, o, s) {
    console.log("afterDraw", this.params);
  }
}
customElements.get("wj-card") || window.customElements.define("wj-card", w);
export {
  w as Card
};
