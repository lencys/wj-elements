var c = Object.defineProperty;
var u = (i, t, e) => t in i ? c(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var s = (i, t, e) => (u(i, typeof t != "symbol" ? t + "" : t, e), e);
import h, { event as p } from "./wje-element.js";
import m from "./wje-popup.js";
class l extends h {
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
    let a = document.createDocumentFragment();
    this.classList.add("wje-placement", "wje-" + this.placement || "wje-start");
    let o = document.createElement("div");
    o.setAttribute("part", "native"), o.classList.add("native-dropdown");
    let n = document.createElement("slot");
    n.setAttribute("name", "trigger"), n.setAttribute("slot", "anchor");
    let d = document.createElement("slot"), r = document.createElement("wje-popup");
    return r.setAttribute("placement", this.placement), r.setAttribute("offset", this.offset), r.appendChild(n), r.appendChild(d), this.trigger === "click" && r.setAttribute("manual", ""), o.appendChild(r), a.appendChild(o), this.popup = r, this.anchorSlot = n, a;
  }
  afterDraw() {
    this.trigger != "click" && (p.addListener(this.anchorSlot, "mouseenter", null, this.onShow), p.addListener(this.anchorSlot, "mouseleave", null, this.onHide));
  }
}
l.define("wje-dropdown", l);
export {
  l as default
};
