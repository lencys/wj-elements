var p = Object.defineProperty;
var c = (r, e, t) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var s = (r, e, t) => (c(r, typeof e != "symbol" ? e + "" : e, t), t);
import m, { event as d } from "./wj-element.js";
import "./wj-store.js";
const u = `:host{--wj-tooltip-arrow-color: var(--wj-color-contrast-11)}.native-tooltip{display:block;padding:.5rem;color:var(--wj-color-contrast-0);background-color:var(--wj-color-contrast-11);font-weight:400;font-size:.75rem!important;border-radius:var(--wj-border-radius-small);line-height:1;box-sizing:border-box;box-shadow:var(--wj-box-shadow-medium)}.arrow{position:absolute;width:10px;height:10px;background:var(--wj-tooltip-arrow-color);transform:rotate(45deg)}
`;
class h extends m {
  constructor() {
    super();
    s(this, "className", "Tooltip");
    s(this, "onShow", () => {
      this.popup.show();
    });
    s(this, "onHide", () => {
      this.popup.hide();
    });
  }
  static get cssStyleSheet() {
    return u;
  }
  static get observedAttributes() {
    return ["active", "content"];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(t, w, b) {
    let l = document.createDocumentFragment(), o = document.createElement("wj-popup");
    o.setAttribute("placement", this.placement || "top"), o.setAttribute("offset", this.offset || "0");
    let n = document.createElement("slot");
    n.setAttribute("slot", "anchor");
    let i = document.createElement("div");
    i.classList.add("arrow"), i.setAttribute("slot", "arrow");
    let a = document.createElement("div");
    return a.classList.add("native-tooltip"), a.innerHTML = this.content, o.appendChild(n), o.appendChild(i), o.appendChild(a), this.mySlot = n, this.popup = o, l.appendChild(o), l;
  }
  afterDraw() {
    let t = this.mySlot.assignedElements()[0];
    t && (d.addListener(t, "mouseenter", null, this.onShow), d.addListener(t, "mouseleave", null, this.onHide));
  }
}
customElements.get("wj-tooltip") || window.customElements.define("wj-tooltip", h);
export {
  h as Tooltip
};
