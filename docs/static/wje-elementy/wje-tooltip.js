var c = Object.defineProperty;
var u = (r, e, t) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var a = (r, e, t) => (u(r, typeof e != "symbol" ? e + "" : e, t), t);
import h, { event as d } from "./wje-element.js";
const m = ":host{--wje-tooltip-arrow-color: var(--wje-color-contrast-11)}.native-tooltip{display:block;padding:.5rem;color:var(--wje-color-contrast-0);background-color:var(--wje-color-contrast-11);font-weight:400;font-size:.75rem!important;border-radius:var(--wje-border-radius-small);line-height:1;box-sizing:border-box;box-shadow:var(--wje-box-shadow-medium)}.arrow{position:absolute;width:10px;height:10px;background:var(--wje-tooltip-arrow-color);transform:rotate(45deg)}";
class p extends h {
  /**
   * @constructor
   * @summary Tooltip constructor
   */
  constructor() {
    super();
    /**
     * @summary Class name
     * @type {string}
     */
    a(this, "className", "Tooltip");
    /**
     * @summary Show tooltip
     */
    a(this, "onShow", () => {
      this.popup.show();
    });
    /**
     * @summary Hide tooltip
     */
    a(this, "onHide", () => {
      this.popup.hide();
    });
  }
  /**
   * @summary Get CSS stylesheet
   * @static
   * @returns {Object} styles
   */
  static get cssStyleSheet() {
    return m;
  }
  /**
   * @summary Get observed attributes
   * @static
   * @returns {Array} An array of observed attributes
   */
  static get observedAttributes() {
    return ["active", "content"];
  }
  /**
   * @summary Setup attributes
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * @summary Draw method
   * @param {Object} context - The context
   * @param {Object} store - The store
   * @param {Object} params - The parameters
   * @returns {Object} Document fragment
   */
  draw(t, w, b) {
    let l = document.createDocumentFragment(), o = document.createElement("wje-popup");
    o.setAttribute("placement", this.placement || "top"), o.setAttribute("offset", this.offset || "0");
    let i = document.createElement("slot");
    i.setAttribute("slot", "anchor");
    let n = document.createElement("div");
    n.classList.add("arrow"), n.setAttribute("slot", "arrow");
    let s = document.createElement("div");
    return s.setAttribute("part", "native"), s.classList.add("native-tooltip"), s.innerHTML = this.content, o.appendChild(i), o.appendChild(n), o.appendChild(s), this.mySlot = i, this.popup = o, l.appendChild(o), l;
  }
  /**
   * @summary After draw method
   */
  afterDraw() {
    let t = this.mySlot.assignedElements()[0];
    t && (d.addListener(t, "mouseenter", null, this.onShow), d.addListener(t, "mouseleave", null, this.onHide));
  }
}
p.define("wje-tooltip", p);
export {
  p as default
};
