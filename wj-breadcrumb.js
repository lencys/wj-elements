var h = Object.defineProperty;
var b = (o, a, e) => a in o ? h(o, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[a] = e;
var p = (o, a, e) => (b(o, typeof a != "symbol" ? a + "" : a, e), e);
import w, { WjElementUtils as l, event as j } from "./wj-element.js";
import "./wj-store.js";
const g = `:host{--wj-breadcrumb-a: var(--wj-color-contrast-high);--wj-breadcrumb-a-hover: var(--wj-color-contrast-medium);display:flex;flex:0 0 auto;align-items:center;line-height:1.5}:host(.collapsed){display:none}.native-breadcrumb{display:flex;align-items:center;width:100%;outline:none;background:inherit;padding:.25rem .75rem;color:var(--wj-breadcrumb-a);text-decoration:none}.native-breadcrumb.hidden{display:none}.native-breadcrumb.active{font-weight:700}.native-breadcrumb:hover{color:var(--wj-breadcrumb-a-hover)}button{margin-inline:.75rem;border:0 solid transparent;border-radius:3px;background-color:transparent;display:flex;align-items:center;justify-content:center;cursor:pointer}.separator{display:inline-flex;align-items:center}::slotted([slot=start]){margin-inline:0 .5rem}::slotted([slot=end]){margin-inline:.5rem 0}
`;
class v extends w {
  constructor() {
    var e;
    super();
    p(this, "className", "Breadcrumb");
    this._showSeparator = !0, this._collapsedVariant = ((e = this.parentElement) == null ? void 0 : e.collapsedVariant) || "BUTTON";
  }
  get showSeparator() {
    return this._showSeparator;
  }
  set showSeparator(e) {
    this._showSeparator = e;
  }
  get collapsedVariant() {
    return this._collapsedVariant.toUpperCase();
  }
  set collapsedVariant(e) {
    this._collapsedVariant = e || this.parentElement.collapsedVariant;
  }
  static get cssStyleSheet() {
    return g;
  }
  static get observedAttributes() {
    return ["show-collapsed-indicator", "collapsed", "last"];
  }
  attributeChangedCallback(e, r, t) {
    return e === "collapsed" ? l.stringToBoolean(t) && this.classList.add("collapsed") : e === "show-collapsed-indicator" ? l.stringToBoolean(t) && (this.showCollapsedIndicator = !0) : e === "last" && (this.active = l.stringToBoolean(t), this.showSeparator = !l.stringToBoolean(t)), !1;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(e, r, t) {
    let s = document.createDocumentFragment(), n = document.createElement("a");
    n.classList.add("native-breadcrumb"), this.active && n.classList.add("active");
    let u = document.createElement("slot"), d = document.createElement("slot");
    d.setAttribute("name", "start");
    let c = document.createElement("slot");
    if (c.setAttribute("name", "end"), n.appendChild(d), n.appendChild(u), n.appendChild(c), s.appendChild(n), this.showCollapsedIndicator && (s.appendChild(this.drawCollapsedIndicator()), this.classList.remove("collapsed"), n.classList.add("hidden")), this.showSeparator) {
      let i = document.createElement("span");
      if (i.classList.add("separator"), i.setAttribute("part", "separator"), l.hasSlot(this, "separator")) {
        let m = document.createElement("slot");
        m.setAttribute("name", "separator"), i.appendChild(m);
      } else
        i.innerHTML = `<wj-icon name=${this.separator || "chevron-right"}></wj-icon>`;
      s.appendChild(i);
    }
    return this.native = n, s;
  }
  drawCollapsedIndicator() {
    let e = null;
    return this.collapsedVariant === "DROPDOWN" ? e = this.collapseDropdown() : e = this.collapseButton(), e;
  }
  collapseDropdown() {
    let e = document.createElement("wj-dropdown");
    e.setAttribute("placement", "bottom"), e.setAttribute("offset", "10");
    let r = document.createElement("wj-button");
    r.setAttribute("slot", "trigger"), r.setAttribute("fill", "link"), r.innerHTML = '<wj-icon name="dots"></wj-icon>';
    let t = document.createElement("wj-menu");
    return t.setAttribute("variant", "context"), e.appendChild(r), e.appendChild(t), e.innerHTML = `<wj-button slot="trigger" fill="link">
            <wj-icon name="dots"></wj-icon>
        </wj-button>
        <wj-menu variant="context">
            <wj-menu-item>Test 0</wj-menu-item>
            <wj-menu-item>Test 1</wj-menu-item>
            <wj-menu-item>Test 2</wj-menu-item>
        </wj-menu>`, this.parentElement.querySelectorAll("wj-breadcrumb").forEach((s) => {
    }), e;
  }
  collapseButton() {
    let e = document.createElement("button");
    return e.setAttribute("aria-label", "Show more breadcrumbs"), e.setAttribute("part", "collapsed-indicator"), e.innerHTML = '<wj-icon name="dots"></wj-icon>', j.addListener(e, "click", null, (r) => {
      this.native.classList.remove("hidden"), e.remove(), this.parentElement.querySelectorAll("wj-breadcrumb").forEach((t) => {
        t.classList.remove("collapsed");
      }), r.stopPropagation();
    }), e;
  }
}
customElements.get("wj-breadcrumb") || window.customElements.define("wj-breadcrumb", v);
export {
  v as Breadcrumb
};
