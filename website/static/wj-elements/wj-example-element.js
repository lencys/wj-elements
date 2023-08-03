var c = Object.defineProperty;
var i = (s, t, e) => t in s ? c(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var m = (s, t, e) => (i(s, typeof t != "symbol" ? t + "" : t, e), e);
import p, { WjElementUtils as u } from "./wj-element.js";
import "./default-store-actions-ff3e8b0b.js";
const d = `:host{color:red}
`, a = document.createElement("template");
a.innerHTML = `<style>
	${d}
</style>`;
class E extends p {
  constructor() {
    super(a);
    m(this, "className", "ExampleElement");
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open", u.setAttributesToElement(this, {
      test: "test"
    });
  }
  beforeDraw(e, o, n) {
  }
  draw(e, o, n) {
    console.log(e, o, n);
    let r = document.createDocumentFragment(), l = document.createElement("div");
    return l.innerHTML = n.text, r.appendChild(l), r;
  }
  afterDraw(e, o, n) {
    console.log("afterDraw", this.params);
  }
}
customElements.get("wj-example-element") || window.customElements.define("wj-example-element", E);
export {
  E as ExampleElement
};
