var a = Object.defineProperty;
var c = (s, t, e) => t in s ? a(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var o = (s, t, e) => (c(s, typeof t != "symbol" ? t + "" : t, e), e);
import l from "./wj-element.js";
import "./wj-store.js";
const d = `/*!
* direction.scss
*/
`;
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
    return d;
  }
  static get observedAttributes() {
    return ["active"];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(e, u, m) {
    let i = document.createDocumentFragment();
    this.classList.add("wj-placement", "wj-" + this.placement || "wj-start");
    let n = document.createElement("div");
    n.setAttribute("part", "native"), n.classList.add("native-dropdown");
    let r = document.createElement("wj-popup");
    return r.setAttribute("placement", this.placement), r.setAttribute("offset", this.offset), r.setAttribute("manual", ""), r.innerHTML = `<slot name="trigger" slot="anchor"></slot>
            <slot></slot>`, this.trigger === "click" && r.setAttribute("manual", ""), n.appendChild(r), i.appendChild(n), i;
  }
}
customElements.get("wj-dropdown") || window.customElements.define("wj-dropdown", p);
export {
  p as Dropdown
};
