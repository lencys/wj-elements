var c = Object.defineProperty;
var h = (s, e, t) => e in s ? c(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var a = (s, e, t) => (h(s, typeof e != "symbol" ? e + "" : e, t), t);
import u, { event as n } from "./wje-element.js";
const w = ":host{--wje-tooltip-arrow-color: var(--wje-color-contrast-11)}.native-tooltip{display:block;padding:.5rem;color:var(--wje-color-contrast-0);background-color:var(--wje-color-contrast-11);font-weight:400;font-size:.75rem!important;border-radius:var(--wje-border-radius-small);line-height:1;box-sizing:border-box;box-shadow:var(--wje-box-shadow-medium)}.arrow{position:absolute;width:10px;height:10px;background:var(--wje-tooltip-arrow-color);transform:rotate(45deg)}";
class p extends u {
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
    a(this, "onShow", async () => {
      console.log("Before event show"), await n.dispatchCustomEvent(this, "wj-tooltip:show"), console.log("Before show"), this.popup.show(), console.log("After show"), n.dispatchCustomEvent(this, "wj-tooltip:showed"), console.log("After event show");
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
    return w;
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
  draw(t, m, v) {
    let d = document.createDocumentFragment(), o = document.createElement("wje-popup");
    o.setAttribute("placement", this.placement || "top"), o.setAttribute("offset", this.offset || "0");
    let i = document.createElement("slot");
    i.setAttribute("slot", "anchor");
    let l = document.createElement("div");
    l.classList.add("arrow"), l.setAttribute("slot", "arrow");
    let r = document.createElement("div");
    return r.setAttribute("part", "native"), r.classList.add("native-tooltip"), r.innerHTML = this.content, o.appendChild(i), o.appendChild(l), o.appendChild(r), this.mySlot = i, this.popup = o, d.appendChild(o), d;
  }
  /**
   * @summary After draw method
   */
  afterDraw() {
    let t = this.mySlot.assignedElements()[0];
    t && (n.addListener(t, "mouseenter", null, this.onShow), n.addListener(t, "mouseleave", null, this.onHide));
  }
}
p.define("wje-tooltip", p);
export {
  p as default
};
