var m = Object.defineProperty;
var s = (n, e, t) => e in n ? m(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var a = (n, e, t) => (s(n, typeof e != "symbol" ? e + "" : e, t), t);
import d from "./wj-element.js";
import "./wj-store.js";
const u = `/*!
* direction.scss
*/:host{--wj-menu-background: #fff;--wj-menu-border-width: 1px;--wj-menu-border-style: solid;--wj-menu-border-color: var(--wj-border-color);--wj-menu-border-radius: 4px;--wj-menu-padding-top: .5rem;--wj-menu-padding-bottom: .5rem;--wj-menu-padding-inline: 0;--wj-menu-margin-top: ;--wj-menu-margin-bottom: 0;--wj-menu-margin-inline: 0;--wj-menu-z-index: 900;display:none;background:var(--wj-menu-background);position:relative;border-width:var(--wj-menu-border-width);border-style:var(--wj-menu-border-style);border-color:var(--wj-menu-border-color);z-index:var(--wj-menu-z-index);border-radius:var(--wj-menu-border-radius);-webkit-border-radius:var(--wj-menu-border-radius);-moz-border-radius:var(--wj-menu-border-radius);padding-top:var(--wj-menu-padding-top);padding-bottom:var(--wj-menu-padding-bottom);padding-inline:var(--wj-menu-padding-inline);margin-top:var(--wj-menu-margin-top);margin-bottom:var(--wj-menu-margin-bottom);margin-inline:var(--wj-menu-margin-inline);overflow:auto;overscroll-behavior:none}:host .native-menu{display:flex;flex-direction:column;width:100%}:host .native-menu ::slotted(wj-button){margin:0}:host(.wj-menu-collapse){max-width:70px!important}:host([variant=context]){display:block!important;margin-left:var(--wj-menu-submenu-offset)}:host([variant=megamenu]) .native-menu{flex-direction:row;align-items:end;flex-wrap:nowrap}:host([variant=megamenu]) .native-menu .check-icon{display:none}:host([active]){display:flex!important}
`;
class l extends d {
  constructor() {
    super();
    a(this, "className", "Menu");
  }
  static get cssStyleSheet() {
    return u;
  }
  static get observedAttributes() {
    return ["active", "collapse"];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(t, c, w) {
    console.log("TRALALA", this.hasAttribute("collapse"));
    let o = document.createDocumentFragment();
    this.classList.remove("wj-menu-collapse"), this.hasAttribute("collapse") && this.classList.add("wj-menu-collapse");
    let r = document.createElement("div");
    r.classList.add("native-menu");
    let i = document.createElement("slot");
    return r.appendChild(i), o.appendChild(r), o;
  }
}
customElements.get("wj-menu") || window.customElements.define("wj-menu", l);
export {
  l as Menu
};
