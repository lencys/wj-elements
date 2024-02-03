var c = Object.defineProperty;
var p = (n, e, t) => e in n ? c(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var i = (n, e, t) => (p(n, typeof e != "symbol" ? e + "" : e, t), t);
import d from "./wj-element.js";
import "./wj-store.js";
const m = `:host{display:inline-block}:host .native-button-group{display:flex;flex-wrap:nowrap;line-height:1}:host slot{display:contents}::slotted(wj-button){margin:0!important}
`;
class g extends d {
  constructor() {
    super();
    i(this, "className", "ButtonGroup");
  }
  static get cssStyleSheet() {
    return m;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(t, l, a) {
    let s = document.createDocumentFragment(), o = document.createElement("div");
    return o.classList.add("native-button-group"), o.setAttribute("part", "native"), this.slotElement = document.createElement("slot"), o.appendChild(this.slotElement), s.appendChild(o), s;
  }
  afterDraw(t, l, a) {
    const s = [...this.slotElement.assignedElements({ flatten: !0 })];
    s.forEach((o) => {
      let u = s.indexOf(o), r = this.findButton(o);
      r && (r.classList.add("wj-button-group-button"), r.classList.toggle("wj-button-group-first", u === 0), r.classList.toggle("wj-button-group-inner", u > 0 && u < s.length - 1), r.classList.toggle("wj-button-group-last", u === s.length - 1));
    });
  }
  findButton(t) {
    const l = "wj-button";
    return t.closest(l) ?? t.querySelector(l);
  }
}
customElements.get("wj-button-group") || window.customElements.define("wj-button-group", g);
export {
  g as ButtonGroup
};
