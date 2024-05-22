var d = Object.defineProperty;
var u = (r, t, e) => t in r ? d(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var s = (r, t, e) => (u(r, typeof t != "symbol" ? t + "" : t, e), e);
import h, { event as a } from "./wje-element.js";
import { P as m } from "./popup.element-BFIsYEbU.js";
class p extends h {
  constructor() {
    super();
    s(this, "depandencies", {
      "wje-popup": m
    });
    s(this, "className", "Dropdown");
    /**
     * @summary Show tooltip
     */
    s(this, "onShow", () => {
      this.popup.show();
    });
    /**
     * @summary Hide tooltip
     */
    s(this, "onHide", () => {
      this.popup.hide();
    });
  }
  set trigger(e) {
    this.setAttribute("trigger", e);
  }
  get trigger() {
    return this.getAttribute("trigger") || "click";
  }
  static get observedAttributes() {
    return ["active"];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(e, g, w) {
    let l = document.createDocumentFragment();
    this.classList.add("wje-placement", "wje-" + this.placement || "wje-start");
    let o = document.createElement("div");
    o.setAttribute("part", "native"), o.classList.add("native-dropdown");
    let n = document.createElement("slot");
    n.setAttribute("name", "trigger"), n.setAttribute("slot", "anchor");
    let c = document.createElement("slot"), i = document.createElement("wje-popup");
    return i.setAttribute("placement", this.placement), i.setAttribute("offset", this.offset), i.appendChild(n), i.appendChild(c), this.trigger === "click" && i.setAttribute("manual", ""), o.appendChild(i), l.appendChild(o), this.popup = i, this.anchorSlot = n, l;
  }
  afterDraw() {
    this.trigger != "click" && (a.addListener(this.anchorSlot, "mouseenter", null, this.onShow), a.addListener(this.anchorSlot, "mouseleave", null, this.onHide)), this.hasAttribute("collapsible") && a.addListener(Array.from(this.querySelectorAll("wje-menu-item")), "click", "wje-menu-item:click", this.onHide);
  }
}
p.define("wje-dropdown", p);
export {
  p as default
};
