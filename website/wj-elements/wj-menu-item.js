var f = Object.defineProperty;
var g = (o, n, e) => n in o ? f(o, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[n] = e;
var l = (o, n, e) => (g(o, typeof n != "symbol" ? n + "" : n, e), e);
import j, { WjElementUtils as y, event as m } from "./wj-element.js";
import "./wj-store.js";
const x = `/*!
* direction.scss
*/:host{--wj-menu-submenu-offset: 0;--wj-menu-item-padding-top: .5rem;--wj-menu-item-padding-bottom: .5rem;--wj-menu-item-line-height: 1.8rem;--wj-menu-item-safe-triangle-cursor-x: 0;--wj-menu-item-safe-triangle-cursor-y: 0;--wj-menu-item-safe-triangle-submenu-start-x: 0;--wj-menu-item-safe-triangle-submenu-start-y: 0;--wj-menu-item-safe-triangle-submenu-end-x: 0;--wj-menu-item-safe-triangle-submenu-end-y: 0;--wj-menu-item-color-hover: $color-contrast-high;--wj-menu-item-background-hover: $color-contrast-lower;--wj-menu-item-color-active: $color-contrast-high;--wj-menu-item-background-active: $color-contrast-lower;display:block}:host .native-menu-item{position:relative;display:flex;flex-wrap:nowrap;align-items:center;color:var(--wj-color);padding-top:var(--wj-menu-item-padding-top);padding-bottom:var(--wj-menu-item-padding-bottom);transition:var(--wj-transition-fast) fill;user-select:none;white-space:nowrap;cursor:pointer;width:100%;line-height:var(--wj-menu-item-line-height)}:host .native-menu-item:hover,:host .native-menu-item:focus{color:var(--wj-menu-item-color-hover);background-color:var(--wj-menu-item-background-hover)}:host .native-menu-item:active{color:var(--wj-menu-item-color-active);background-color:var(--wj-menu-item-background-active)}:host .native-menu-item .label{flex:1 1 auto;display:inline-block;text-overflow:ellipsis;overflow:hidden}:host .native-menu-item .check-icon{flex:0 0 auto;display:var(--wj-menu-item-check-icon-display, flex);align-items:center;justify-content:center;width:1.5rem;visibility:hidden}:host .native-menu-item .check-icon.checked{visibility:visible}:host .native-menu-item .submenu-icon{--wj-icon-size: 14px !important;flex:0 0 auto;display:flex;align-items:center;justify-content:center;width:1.5rem;visibility:hidden}:host .native-menu-item.has-submenu .submenu-icon{visibility:visible}:host .native-menu-item.expanded-submenu{color:var(--wj-menu-item-color-active);background-color:var(--wj-menu-item-background-active)}:host .native-menu-item.expanded-submenu:hover{color:var(--wj-menu-item-color-hover);background-color:var(--wj-menu-item-background-hover)}:host .native-menu-item.expanded-submenu:after{content:"";position:fixed;z-index:calc(var(--wj-z-index-menu) - 1);top:0;right:0;bottom:0;left:0;clip-path:polygon(var(--wj-menu-item-safe-triangle-cursor-x) var(--wj-menu-item-safe-triangle-cursor-y),var(--wj-menu-item-safe-triangle-submenu-start-x) var(--wj-menu-item-safe-triangle-submenu-start-y),var(--wj-menu-item-safe-triangle-submenu-end-x) var(--wj-menu-item-safe-triangle-submenu-end-y))}:host(:focus-visible){outline:none}::slotted([slot=start]){flex:0 0 auto;display:flex;align-items:center;margin-inline-end:.5rem}::slotted([slot=end]){flex:0 0 auto;display:flex;align-items:center;margin-inline-start:.5rem}:host(.wj-menu-variant-nav) ::slotted([slot=submenu]){--wj-menu-border-width: 0 !important}:host ::slotted([slot=start]){width:1.5rem}:host ::slotted([slot=submenu]){margin-left:var(--wj-menu-submenu-offset)}:host(.wj-menu-variant-context){display:block}:host(.wj-menu-collapse) .label,:host(.wj-menu-collapse) .submenu-icon{display:none!important}:host(.wj-menu-collapse) ::slotted([slot=end]){display:none}
`;
class A extends j {
  constructor() {
    super();
    l(this, "className", "MenuItem");
    l(this, "dispatchMove", (e) => {
      this.style.setProperty("--wj-menu-item-safe-triangle-cursor-x", `${e.clientX}px`), this.style.setProperty("--wj-menu-item-safe-triangle-cursor-y", `${e.clientY}px`);
    });
    l(this, "dispatchReposition", (e) => {
      let r = this.submenu.assignedNodes()[0];
      const { left: c, top: s, width: t, height: a } = r.getBoundingClientRect();
      this.style.setProperty("--wj-menu-item-safe-triangle-submenu-start-x", `${c}px`), this.style.setProperty("--wj-menu-item-safe-triangle-submenu-start-y", `${s}px`), this.style.setProperty("--wj-menu-item-safe-triangle-submenu-end-x", `${c}px`), this.style.setProperty("--wj-menu-item-safe-triangle-submenu-end-y", `${s + a}px`);
    });
    this.hasSubmenu = y.hasSlot(this, "submenu"), this._collapsible = !1;
  }
  get placement() {
    let e = this.querySelector("wj-menu");
    return e != null && e.hasAttribute("placement") ? e.getAttribute("placement") : "right-start";
  }
  get offset() {
    let e = this.querySelector("wj-menu");
    return e != null && e.hasAttribute("offset") ? e.getAttribute("offset") : "0";
  }
  get variant() {
    let e = this.querySelector("wj-menu");
    return e != null && e.hasAttribute("variant") ? e.getAttribute("variant").toUpperCase() : "CONTEXT";
  }
  get collapse() {
    var e;
    return (e = this.parentElement) == null ? void 0 : e.hasAttribute("collapse");
  }
  static get cssStyleSheet() {
    return x;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    super.setupAttributes(), this.isShadowRoot = "open";
  }
  draw(e, r, c) {
    var w;
    let s = document.createDocumentFragment();
    this.classList.add("wj-menu-variant-" + this.variant.toLowerCase()), (w = this.querySelector("wj-menu")) == null || w.setAttribute("variant", this.variant.toLowerCase()), this.collapse && this.classList.add("wj-menu-collapse");
    let t = document.createElement("div");
    t.setAttribute("slot", "anchor"), t.setAttribute("part", "native"), t.setAttribute("id", "anchor"), t.classList.add("native-menu-item");
    let a = document.createElement("span");
    a.classList.add("check-icon"), a.innerHTML = '<wj-icon name="check"></wj-icon>', this.hasAttribute("checked") ? a.classList.add("checked") : a.classList.remove("checked");
    let d = document.createElement("slot");
    d.name = "start";
    let p = document.createElement("slot");
    p.classList.add("label");
    let b = document.createElement("slot");
    b.name = "end";
    let u = document.createElement("slot");
    u.setAttribute("part", "submenu"), u.name = "submenu";
    let h = document.createElement("span");
    h.classList.add("submenu-icon"), h.innerHTML = this.collapse ? '<wj-icon name="chevron-down"></wj-icon>' : '<wj-icon name="chevron-right"></wj-icon>', this.hasSubmenu ? t.classList.add("has-submenu") : t.classList.remove("has-submenu"), t.appendChild(a), t.appendChild(d), t.appendChild(p), t.appendChild(b), t.appendChild(h);
    let v = !1;
    if (this.collapse && this.variant === "NAV" && this.hasSubmenu || this.variant === "CONTEXT" && this.hasSubmenu) {
      let i = document.createElement("wj-popup");
      i.setAttribute("anchor", "anchor"), i.setAttribute("placement", this.placement), i.setAttribute("offset", this.offset), i.appendChild(t), i.appendChild(u), this.popup = i, s.appendChild(i), v = !0;
    }
    if (this.native = t, this.submenu = u, this.collapse && !this.hasSubmenu) {
      let i = document.createElement("wj-tooltip");
      i.setAttribute("content", this.textContent), i.setAttribute("placement", "right"), i.setAttribute("offset", this.offset || "0"), i.appendChild(t), s.appendChild(i);
    } else
      v || s.appendChild(t);
    return (!this.collapse && this.variant === "NAV" || this.variant === "MEGAMENU" && this.hasSubmenu) && s.appendChild(u), s;
  }
  afterDraw() {
    this.addEventListener("mousemove", this.dispatchMove), this.addEventListener("wj-popup:reposition", this.dispatchReposition), m.addListener(this, "mouseover", null, (e) => {
      this.hasAttribute("manual") || (e.stopPropagation(), this.showSubmenu(), this.focus());
    }), m.addListener(this, "focusout", null, (e) => {
      e.relatedTarget && this.contains(e.relatedTarget) || this.hideSubmenu();
    }), !this.collapse && this.variant === "NAV" && this.hasSubmenu ? m.addListener(this, "click", null, (e) => {
      let r = this.submenu.assignedElements({ flatten: !0 })[0];
      r.hasAttribute("active") ? this === e.target && r.removeAttribute("active") : r.setAttribute("active", ""), e.stopPropagation();
    }) : m.addListener(this, "click", null, (e) => {
      console.log("CLICK", this);
    });
  }
  showSubmenu() {
    this.tabIndex = -1, this.hasSubmenu && (this.popup.setAttribute("active", ""), this.native.classList.add("expanded-submenu"));
  }
  hideSubmenu() {
    this.tabIndex = 0, this.hasSubmenu && (this.popup.removeAttribute("active"), this.native.classList.remove("expanded-submenu"));
  }
}
customElements.get("wj-menu-item") || window.customElements.define("wj-menu-item", A);
export {
  A as MenuItem
};
