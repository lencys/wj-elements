var a = Object.defineProperty;
var c = (r, t, e) => t in r ? a(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var o = (r, t, e) => (c(r, typeof t != "symbol" ? t + "" : t, e), e);
import l from "./wj-element.js";
import "./wj-store.js";
class p extends l {
  constructor() {
    super();
    o(this, "className", "Dropdown");
  }
  set trigger(e) {
    this.setAttribute("trigger", e);
  }
  get trigger() {
    return this.getAttribute("trigger") || "click";
  }
  static get cssStyleSheet() {
    return styles;
  }
  static get observedAttributes() {
    return ["active"];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(e, d, u) {
    let n = document.createDocumentFragment();
    this.classList.add("wj-placement", "wj-" + this.placement || "wj-start");
    let i = document.createElement("div");
    i.setAttribute("part", "native"), i.classList.add("native-dropdown");
    let s = document.createElement("wj-popup");
    return s.setAttribute("placement", this.placement), s.setAttribute("offset", this.offset), s.setAttribute("manual", ""), s.innerHTML = `<slot name="trigger" slot="anchor"></slot>
            <slot></slot>`, this.trigger === "click" && s.setAttribute("manual", ""), i.appendChild(s), n.appendChild(i), n;
  }
}
customElements.get("wj-dropdown") || window.customElements.define("wj-dropdown", p);
export {
  p as Dropdown
};
