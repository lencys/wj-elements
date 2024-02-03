var d = Object.defineProperty;
var c = (s, e, t) => e in s ? d(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var r = (s, e, t) => (c(s, typeof e != "symbol" ? e + "" : e, t), t);
import u, { event as p } from "./wj-element.js";
import "./wj-store.js";
const m = `/*!
* direction.scss
*/:host{--arrow-size: 7px;--arrow-color: #000000}.native-tooltip{display:block;padding:.5rem;color:#fff;background-color:var(--arrow-color);font-weight:400;font-size:.75rem!important;border-radius:4px;line-height:1;box-sizing:border-box;box-shadow:0 1px 8px #00000080}.arrow{position:absolute;width:10px;height:10px;background:black;transform:rotate(45deg)}
`;
class h extends u {
  constructor() {
    super();
    r(this, "className", "Tooltip");
    r(this, "onShow", () => {
      console.log("show"), this.popup.show();
    });
    r(this, "onHide", () => {
      this.popup.hide();
    });
  }
  static get cssStyleSheet() {
    return m;
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
    t && (p.addListener(t, "mouseenter", null, this.onShow), p.addListener(t, "mouseleave", null, this.onHide));
  }
}
customElements.get("wj-tooltip") || window.customElements.define("wj-tooltip", h);
export {
  h as Tooltip
};
