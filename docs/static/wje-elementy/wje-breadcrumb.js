var b = Object.defineProperty;
var w = (s, r, e) => r in s ? b(s, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[r] = e;
var m = (s, r, e) => (w(s, typeof r != "symbol" ? r + "" : r, e), e);
import j, { WjElementUtils as l, event as f } from "./wje-element.js";
const g = ':host{--wje-breadcrumb-a: var(--wje-color-contrast-high);--wje-breadcrumb-a-hover: var(--wje-color-contrast-medium);display:flex;flex:0 0 auto;align-items:center;line-height:1.5}:host(.collapsed){display:none}.native-breadcrumb{display:flex;align-items:center;width:100%;outline:none;background:inherit;padding:.25rem .75rem;color:var(--wje-breadcrumb-a);text-decoration:none}.native-breadcrumb.hidden{display:none}.native-breadcrumb.active{font-weight:700}.native-breadcrumb:hover{color:var(--wje-breadcrumb-a-hover)}button{margin-inline:.75rem;border:0 solid transparent;border-radius:3px;background-color:transparent;display:flex;align-items:center;justify-content:center;cursor:pointer}.separator{display:inline-flex;align-items:center}::slotted([slot="start"]){margin-inline:0 .5rem}::slotted([slot="end"]){margin-inline:.5rem 0}';
class u extends j {
  /**
   * Breadcrumb constructor
   */
  constructor() {
    var e;
    super();
    /**
     * Class name
     * @type {string}
     */
    m(this, "className", "Breadcrumb");
    this._showSeparator = !0, this._collapsedVariant = ((e = this.parentElement) == null ? void 0 : e.collapsedVariant) || "BUTTON";
  }
  /**
   * Get show separator flag
   * @returns {boolean} showSeparator - The show separator flag
   */
  get showSeparator() {
    return this._showSeparator;
  }
  /**
   * Set show separator flag
   * @param {boolean} value - The value to set
   */
  set showSeparator(e) {
    this._showSeparator = e;
  }
  /**
   * Get collapsed variant
   * @returns {string} collapsedVariant - The collapsed variant
   */
  get collapsedVariant() {
    return this._collapsedVariant.toUpperCase();
  }
  /**
   * Set collapsed variant
   * @param {string} value - The value to set
   */
  set collapsedVariant(e) {
    this._collapsedVariant = e || this.parentElement.collapsedVariant;
  }
  /**
   * Get CSS stylesheet
   * @static
   * @returns {Object} styles - The CSS styles
   */
  static get cssStyleSheet() {
    return g;
  }
  /**
   * Get observed attributes
   * @static
   * @returns {Array<string>} observedAttributes - The observed attributes
   */
  static get observedAttributes() {
    return ["show-collapsed-indicator", "collapsed", "last"];
  }
  /**
   * Attribute changed callback
   * @param {string} name - The attribute name
   * @param {string} oldValue - The old value
   * @param {string} newValue - The new value
   * @returns {boolean} false - Always returns false
   */
  attributeChangedCallback(e, n, t) {
    return e === "collapsed" ? l.stringToBoolean(t) && this.classList.add("collapsed") : e === "show-collapsed-indicator" ? l.stringToBoolean(t) && (this.showCollapsedIndicator = !0, this.refresh()) : e === "last" && (this.active = l.stringToBoolean(t), this.showSeparator = !l.stringToBoolean(t), this.refresh()), !1;
  }
  /**
   * Setup attributes
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draw method
   * @param {Object} context - The context
   * @param {Object} store - The store
   * @param {Object} params - The parameters
   * @returns {Object} fragment - The document fragment
   */
  draw(e, n, t) {
    let o = document.createDocumentFragment(), a = document.createElement("a");
    a.classList.add("native-breadcrumb"), a.setAttribute("part", "native"), this.active && a.classList.add("active");
    let h = document.createElement("slot"), d = document.createElement("slot");
    d.setAttribute("name", "start");
    let c = document.createElement("slot");
    if (c.setAttribute("name", "end"), a.appendChild(d), a.appendChild(h), a.appendChild(c), o.appendChild(a), this.showCollapsedIndicator && (o.appendChild(this.drawCollapsedIndicator()), this.classList.remove("collapsed"), a.classList.add("hidden")), this.showSeparator) {
      let i = document.createElement("span");
      if (i.classList.add("separator"), i.setAttribute("part", "separator"), l.hasSlot(this, "separator")) {
        let p = document.createElement("slot");
        p.setAttribute("name", "separator"), i.appendChild(p);
      } else
        i.innerHTML = `<wje-icon name=${this.separator || "chevron-right"}></wje-icon>`;
      o.appendChild(i);
    }
    return this.native = a, o;
  }
  /**
   * Draw collapsed indicator
   * @returns {Object} collapsedIndicator - The collapsed indicator
   */
  drawCollapsedIndicator() {
    let e = null;
    return this.collapsedVariant === "DROPDOWN" ? e = this.collapseDropdown() : e = this.collapseButton(), e;
  }
  /**
   * Collapse dropdown
   * @returns {Object} dropdown - The dropdown
   */
  collapseDropdown() {
    let e = document.createElement("wje-dropdown");
    e.setAttribute("placement", "bottom"), e.setAttribute("offset", "10");
    let n = document.createElement("wje-button");
    n.setAttribute("slot", "trigger"), n.setAttribute("fill", "link"), n.innerHTML = '<wje-icon name="dots"></wje-icon>';
    let t = document.createElement("wje-menu");
    return t.setAttribute("variant", "context"), e.appendChild(n), e.appendChild(t), e.innerHTML = `<wje-button slot="trigger" fill="link">
            <wje-icon name="dots"></wje-icon>
        </wje-button>
        <wje-menu variant="context">
            <wje-menu-item>Test 0</wje-menu-item>
            <wje-menu-item>Test 1</wje-menu-item>
            <wje-menu-item>Test 2</wje-menu-item>
        </wje-menu>`, this.parentElement.querySelectorAll("wje-breadcrumb").forEach((o) => {
    }), e;
  }
  /**
   * Collapse button
   * @returns {Object} button - The button
   */
  collapseButton() {
    let e = document.createElement("button");
    return e.setAttribute("aria-label", "Show more breadcrumbs"), e.setAttribute("part", "collapsed-indicator"), e.innerHTML = '<wje-icon name="dots"></wje-icon>', f.addListener(e, "click", null, (n) => {
      this.native.classList.remove("hidden"), e.remove(), this.parentElement.querySelectorAll("wje-breadcrumb").forEach((t) => {
        t.classList.remove("collapsed");
      }), n.stopPropagation();
    }), e;
  }
}
u.define("wje-breadcrumb", u);
export {
  u as default
};
