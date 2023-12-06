var c = Object.defineProperty;
var d = (o, e, t) => e in o ? c(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var u = (o, e, t) => (d(o, typeof e != "symbol" ? e + "" : e, t), t);
import p from "./wj-element.js";
import "./wj-store.js";
const m = `/*!
* direction.scss
*/:host{display:inline-block}:host .native-button-group{display:flex;flex-wrap:nowrap;line-height:1}:host slot{display:contents}::slotted(wj-button){margin:0}
`;
class g extends p {
  constructor() {
    super();
    u(this, "className", "ButtonGroup");
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
    let s = document.createDocumentFragment(), n = document.createElement("div");
    return n.classList.add("native-button-group"), n.setAttribute("part", "native"), this.slotElement = document.createElement("slot"), n.appendChild(this.slotElement), s.appendChild(n), s;
  }
  afterDraw(t, l, a) {
    const s = [...this.slotElement.assignedElements({ flatten: !0 })];
    s.forEach((n) => {
      let i = s.indexOf(n), r = this.findButton(n);
      r && (r.classList.add("wj-button-group-button"), r.classList.toggle("wj-button-group-first", i === 0), r.classList.toggle("wj-button-group-inner", i > 0 && i < s.length - 1), r.classList.toggle("wj-button-group-last", i === s.length - 1));
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
