var g = Object.defineProperty;
var j = (o, n, e) => n in o ? g(o, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[n] = e;
var m = (o, n, e) => (j(o, typeof n != "symbol" ? n + "" : n, e), e);
import x, { WjElementUtils as y, event as l } from "./wj-element.js";
import { b as k } from "./router-links-e0087f84.js";
import "./wj-store.js";
const A = `:host{--wj-menu-item-color: var(--wj-color);--wj-menu-item-background: transparent;--wj-menu-item-color-hover: var(--wj-color-contrast-8);--wj-menu-item-background-hover: var(--wj-border-color);--wj-menu-item-color-focus: var(--wj-color-contrast-8);--wj-menu-item-background-focus: var(--wj-border-color);--wj-menu-item-color-active: var(--wj-color-contrast-8);--wj-menu-item-background-active: var(--wj-border-color);--wj-menu-item-padding-top: .5rem;--wj-menu-item-padding-bottom: .5rem;--wj-menu-item-line-height: 1.8rem;--wj-menu-item-safe-triangle-cursor-x: 0;--wj-menu-item-safe-triangle-cursor-y: 0;--wj-menu-item-safe-triangle-submenu-start-x: 0;--wj-menu-item-safe-triangle-submenu-start-y: 0;--wj-menu-item-safe-triangle-submenu-end-x: 0;--wj-menu-item-safe-triangle-submenu-end-y: 0;--wj-menu-submenu-offset: 0;--wj-menu-item-icon-visibility: hidden;display:block}:host .native-menu-item{background:var(--wj-menu-item-background);position:relative;display:flex;flex-wrap:nowrap;align-items:center;color:var(--wj-menu-item-color);padding-top:var(--wj-menu-item-padding-top);padding-bottom:var(--wj-menu-item-padding-bottom);transition:var(--wj-transition-fast) fill;-webkit-user-select:none;user-select:none;white-space:nowrap;cursor:pointer;width:100%;line-height:var(--wj-menu-item-line-height)}:host .native-menu-item:hover{color:var(--wj-menu-item-color-hover);background:var(--wj-menu-item-background-hover)}:host .native-menu-item:focus{color:var(--wj-menu-item-color-focus);background:var(--wj-menu-item-background-focus)}:host .native-menu-item:active{color:var(--wj-menu-item-color-active);background:var(--wj-menu-item-background-active)}:host .native-menu-item .label{flex:1 1 auto;display:inline-block;text-overflow:ellipsis;overflow:hidden}:host .native-menu-item .check-icon{flex:0 0 auto;display:var(--wj-menu-item-check-icon-display, flex);align-items:center;justify-content:center;width:1.5rem;visibility:hidden}:host .native-menu-item .check-icon.checked{visibility:visible}:host .native-menu-item.expanded-submenu{color:var(--wj-menu-item-color-active);background:var(--wj-menu-item-background-active)}:host .native-menu-item.expanded-submenu:hover{color:var(--wj-menu-item-color-hover);background:var(--wj-menu-item-background-hover)}:host .native-menu-item.expanded-submenu:after{content:"";position:fixed;z-index:1;top:0;right:0;bottom:0;left:0;clip-path:polygon(var(--wj-menu-item-safe-triangle-cursor-x) var(--wj-menu-item-safe-triangle-cursor-y),var(--wj-menu-item-safe-triangle-submenu-start-x) var(--wj-menu-item-safe-triangle-submenu-start-y),var(--wj-menu-item-safe-triangle-submenu-end-x) var(--wj-menu-item-safe-triangle-submenu-end-y))}.submenu-icon{--wj-icon-size: 14px !important;flex:0 0 auto;display:flex;align-items:center;justify-content:center;width:1.5rem;visibility:var(--wj-menu-item-icon-visibility)}.has-submenu .submenu-icon{--wj-menu-item-icon-visibility: visible}.submenu-icon.collapse{flex:none;right:10px;position:relative}:host(:focus-visible){outline:none}::slotted([slot=start]){flex:0 0 auto;display:flex;align-items:center;margin-inline-end:.5rem}::slotted([slot=end]){flex:0 0 auto;display:flex;align-items:center;margin-inline-start:.5rem}:host(.wj-menu-variant-nav) ::slotted([slot=submenu]){--wj-menu-border-width: 0 !important;--wj-menu-margin-inline: 2rem 0 !important}:host ::slotted([slot=start]){width:1.5rem}:host(.wj-menu-variant-context){display:block}:host(.active){color:var(--wj-menu-item-color-active);background:var(--wj-menu-item-background-active)}:host(.open){color:var(--wj-menu-item-color-active);background:var(--wj-menu-item-background-active)}
`;
class L extends x {
  constructor() {
    super();
    m(this, "className", "MenuItem");
    m(this, "dispatchMove", (e) => {
      this.style.setProperty("--wj-menu-item-safe-triangle-cursor-x", `${e.clientX}px`), this.style.setProperty("--wj-menu-item-safe-triangle-cursor-y", `${e.clientY}px`);
    });
    m(this, "dispatchReposition", (e) => {
      if (this.submenu.assignedNodes().length === 0)
        return;
      let i = this.submenu.assignedNodes()[0];
      const { left: c, top: s, width: t, height: a } = i.getBoundingClientRect();
      this.style.setProperty("--wj-menu-item-safe-triangle-submenu-start-x", `${c}px`), this.style.setProperty("--wj-menu-item-safe-triangle-submenu-start-y", `${s}px`), this.style.setProperty("--wj-menu-item-safe-triangle-submenu-end-x", `${c}px`), this.style.setProperty("--wj-menu-item-safe-triangle-submenu-end-y", `${s + a}px`);
    });
    k(this, { selector: !1 }), this.hasSubmenu = y.hasSlot(this, "submenu"), this._collapsible = !1;
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
    return e != null && e.hasAttribute("variant") && !this.collapse ? e.getAttribute("variant").toUpperCase() : "CONTEXT";
  }
  get collapse() {
    var e;
    return (e = this.parentElement) == null ? void 0 : e.hasAttribute("collapse");
  }
  static get cssStyleSheet() {
    return A;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    super.setupAttributes(), this.isShadowRoot = "open", this.setAttribute("active-class", "open");
  }
  draw(e, i, c) {
    var w;
    let s = document.createDocumentFragment();
    this.setAttribute("tabindex", "0"), this.classList.add("wj-menu-variant-" + this.variant.toLowerCase()), (w = this.querySelector("wj-menu")) == null || w.setAttribute("variant", this.variant.toLowerCase());
    let t = document.createElement("div");
    t.setAttribute("part", "native"), t.setAttribute("id", "anchor"), t.classList.add("native-menu-item");
    let a = document.createElement("span");
    a.classList.add("check-icon"), a.innerHTML = '<wj-icon name="check"></wj-icon>', this.hasAttribute("checked") ? a.classList.add("checked") : a.classList.remove("checked");
    let h = document.createElement("slot");
    h.name = "start";
    let p = document.createElement("slot");
    p.classList.add("label");
    let b = document.createElement("slot");
    b.name = "end";
    let u = document.createElement("slot");
    u.setAttribute("part", "submenu"), u.name = "submenu";
    let f = this.collapse ? "collapse" : "expand", d = document.createElement("span");
    d.classList.add("submenu-icon", f), d.innerHTML = this.collapse ? '<wj-icon name="chevron-down"></wj-icon>' : '<wj-icon name="chevron-right"></wj-icon>', this.hasSubmenu ? t.classList.add("has-submenu") : t.classList.remove("has-submenu"), t.appendChild(a), t.appendChild(h), t.appendChild(p), t.appendChild(b), t.appendChild(d);
    let v = !1;
    if (
      /*(this.collapse && this.variant === "NAV" && this.hasSubmenu) || */
      this.variant === "CONTEXT" && this.hasSubmenu
    ) {
      t.setAttribute("slot", "anchor");
      let r = document.createElement("wj-popup");
      r.setAttribute("anchor", "anchor"), r.setAttribute("placement", this.placement), r.setAttribute("offset", this.offset), r.appendChild(t), r.appendChild(u), this.popup = r, s.appendChild(r), v = !0;
    }
    return this.collapse && !this.hasSubmenu ? s.appendChild(this.collapseItem(t)) : v || s.appendChild(t), (!this.collapse && this.variant === "NAV" || this.variant === "MEGAMENU" && this.hasSubmenu) && s.appendChild(u), this.native = t, this.submenu = u, s;
  }
  afterDraw() {
    this.addEventListener("mousemove", this.dispatchMove), this.addEventListener("wj-popup:reposition", this.dispatchReposition), l.addListener(this, "mouseover", null, (e) => {
      this.hasAttribute("manual") || this.variant === "NAV" && !this.collapse || (e.stopPropagation(), this.showSubmenu(), this.focus());
    }), l.addListener(this, "focusout", null, (e) => {
      e.relatedTarget && this.contains(e.relatedTarget) || this.variant === "NAV" && !this.collapse || this.hideSubmenu();
    }), !this.collapse && this.variant === "NAV" && this.hasSubmenu ? l.addListener(this, "click", null, (e) => {
      let i = this.submenu.assignedElements({ flatten: !0 })[0];
      i.hasAttribute("active") ? this === e.target && i.removeAttribute("active") : i.setAttribute("active", ""), e.stopPropagation();
    }) : l.addListener(this, "click", null, (e) => {
    });
  }
  collapseItem(e) {
    let i = document.createElement("wj-tooltip");
    return i.setAttribute("content", this.textContent), i.setAttribute("placement", "right"), i.setAttribute("offset", this.offset || "0"), i.appendChild(e), i;
  }
  showSubmenu() {
    this.tabIndex = -1, this.hasSubmenu && (this.popup.setAttribute("active", ""), this.classList.add("expanded-submenu"), this.native.classList.add("expanded-submenu"));
  }
  hideSubmenu() {
    this.tabIndex = 0, this.hasSubmenu && (this.popup.removeAttribute("active"), this.classList.remove("expanded-submenu"), this.native.classList.remove("expanded-submenu"));
  }
}
customElements.get("wj-menu-item") || window.customElements.define("wj-menu-item", L);
export {
  L as MenuItem
};
