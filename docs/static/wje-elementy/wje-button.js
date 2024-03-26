var b = Object.defineProperty;
var j = (t, r, o) => r in t ? b(t, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[r] = o;
var s = (t, r, o) => (j(t, typeof r != "symbol" ? r + "" : r, o), o);
import h, { WjElementUtils as g, event as i } from "./wje-element.js";
import p from "./wje-icon.js";
const u = (t) => t === "false" || t === "null" || t === "NaN" || t === "undefined" || t === "0" ? !1 : !!t, v = ':host(.wje-button-solid.wje-color-primary){--wje-button-background-color: var(--wje-color-primary-10);--wje-button-border-color: var(--wje-color-primary-11);--wje-button-color: var(--wje-color-contrast-0)}:host(.wje-button-outline.wje-color-primary){--wje-button-border-color: var(--wje-color-primary-6);--wje-button-color: var(--wje-color-primary-6)}:host(.wje-button-solid.wje-color-complete){--wje-button-background-color: var(--wje-color-complete-10);--wje-button-border-color: var(--wje-color-complete-11);--wje-button-color: var(--wje-color-contrast-0)}:host(.wje-button-outline.wje-color-complete){--wje-button-border-color: var(--wje-color-complete-6);--wje-button-color: var(--wje-color-complete-6)}:host(.wje-button-solid.wje-color-success){--wje-button-background-color: var(--wje-color-success-10);--wje-button-border-color: var(--wje-color-success-11);--wje-button-color: var(--wje-color-contrast-0)}:host(.wje-button-outline.wje-color-success){--wje-button-border-color: var(--wje-color-success-6);--wje-button-color: var(--wje-color-success-6)}:host(.wje-button-solid.wje-color-warning){--wje-button-background-color: var(--wje-color-warning-10);--wje-button-border-color: var(--wje-color-warning-11);--wje-button-color: var(--wje-color-black)}:host(.wje-button-outline.wje-color-warning){--wje-button-border-color: var(--wje-color-warning-6);--wje-button-color: var(--wje-color-warning-6)}:host(.wje-button-solid.wje-color-danger){--wje-button-background-color: var(--wje-color-danger-10);--wje-button-border-color: var(--wje-color-danger-11);--wje-button-color: var(--wje-color-contrast-0)}:host(.wje-button-outline.wje-color-danger){--wje-button-border-color: var(--wje-color-danger-6);--wje-button-color: var(--wje-color-danger-6)}:host(.wje-button-solid.wje-color-neutral){--wje-button-background-color: var(--wje-color-contrast-10);--wje-button-border-color: var(--wje-color-contrast-11);--wje-button-color: var(--wje-color-contrast-0)}:host(.wje-button-outline.wje-color-neutral){--wje-button-border-color: var(--wje-color-contrast-6);--wje-button-color: var(--wje-color-contrast-6)}:host(.wje-button-solid.wje-color-default){--wje-button-background-color: transparent;--wje-button-border-color: var(--wje-color-contrast-4);--wje-button-color: var(--wje-color-contrast-11)}:host(.wje-button-outline.wje-color-default){--wje-button-border-color: var(--wje-color-contrast-4);--wje-button-color: var(--wje-color-contrast-11)}:host{--wje-button-border-radius: var(--wje-border-radius-medium);--wje-button-border-width: 1px;--wje-button-border-style: solid;--wje-button-border-color: var(--wje-color-contrast-1);--wje-button-margin-inline: 0;--wje-padding-top: .4rem;--wje-padding-start: .5rem;--wje-padding-end: .5rem;--wje-padding-bottom: .4rem;display:inline-flex;position:relative;width:auto;cursor:pointer;margin-inline:var(--wje-button-margin-inline)}:host(.wje-button-group-button){display:block}.button-native{font-family:var(--wje-font-family);font-size:var(--wje-font-size);display:flex;position:relative;align-items:center;width:100%;height:100%;min-height:inherit;overflow:hidden;border-width:var(--wje-button-border-width);border-style:var(--wje-button-border-style);border-color:var(--wje-button-border-color);outline:none;background-color:var(--wje-button-background-color);color:var(--wje-button-color);line-height:1;contain:layout style;cursor:pointer;z-index:0;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0;border-radius:var(--wje-button-border-radius);padding-top:var(--wje-padding-top);padding-bottom:var(--wje-padding-bottom);padding-inline:var(--wje-padding-start) var(--wje-padding-end)}@media (any-hover: hover){:host(.wje-button-solid.wje-color-primary:hover){--wje-button-background-color: var(--wje-color-primary-9);--wje-button-border-color: var(--wje-color-primary-10);--wje-button-color: var(--wje-color-contrast-0)}:host(.wje-button-outline.wje-color-primary:hover){--wje-button-background-color: var(--wje-color-primary-1);--wje-button-border-color: var(--wje-color-primary-11);--wje-button-color: var(--wje-color-primary-11)}:host(.wje-button-solid.wje-color-complete:hover){--wje-button-background-color: var(--wje-color-complete-9);--wje-button-border-color: var(--wje-color-complete-10);--wje-button-color: var(--wje-color-contrast-0)}:host(.wje-button-outline.wje-color-complete:hover){--wje-button-background-color: var(--wje-color-complete-1);--wje-button-border-color: var(--wje-color-complete-11);--wje-button-color: var(--wje-color-complete-11)}:host(.wje-button-solid.wje-color-success:hover){--wje-button-background-color: var(--wje-color-success-9);--wje-button-border-color: var(--wje-color-success-10);--wje-button-color: var(--wje-color-contrast-0)}:host(.wje-button-outline.wje-color-success:hover){--wje-button-background-color: var(--wje-color-success-1);--wje-button-border-color: var(--wje-color-success-11);--wje-button-color: var(--wje-color-success-11)}:host(.wje-button-solid.wje-color-warning:hover){--wje-button-background-color: var(--wje-color-warning-9);--wje-button-border-color: var(--wje-color-warning-10);--wje-button-color: var(--wje-color-black)}:host(.wje-button-outline.wje-color-warning:hover){--wje-button-background-color: var(--wje-color-warning-1);--wje-button-border-color: var(--wje-color-warning-11);--wje-button-color: var(--wje-color-warning-11)}:host(.wje-button-solid.wje-color-danger:hover){--wje-button-background-color: var(--wje-color-danger-9);--wje-button-border-color: var(--wje-color-danger-10);--wje-button-color: var(--wje-color-contrast-0)}:host(.wje-button-outline.wje-color-danger:hover){--wje-button-background-color: var(--wje-color-danger-1);--wje-button-border-color: var(--wje-color-danger-11);--wje-button-color: var(--wje-color-danger-11)}:host(.wje-button-solid.wje-color-neutral:hover){--wje-button-background-color: var(--wje-color-contrast-9);--wje-button-border-color: var(--wje-color-contrast-10);--wje-button-color: var(--wje-color-contrast-0)}:host(.wje-button-outline.wje-color-neutral:hover){--wje-button-background-color: var(--wje-color-contrast-1);--wje-button-border-color: var(--wje-color-contrast-11);--wje-button-color: var(--wje-color-contrast-11)}:host(.wje-button-solid.wje-color-default:hover){--wje-button-background-color: var(--wje-color-contrast-1);--wje-button-border-color: var(--wje-color-contrast-2);--wje-button-color: var(--wje-color-contrast-9)}:host(.wje-button-outline.wje-color-default:hover){--wje-button-background-color: var(--wje-color-contrast-1);--wje-button-border-color: var(--wje-color-contrast-2);--wje-button-color: var(--wje-color-contrast-9)}:host(.wje-button-link:hover){--wje-button-background-color: var(--wje-color-contrast-1) !important;--wje-button-border-color: transparent !important;color:var(--wje-color-contrast-9)!important}}.button-inner{display:flex;position:relative;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.button-solid.wje-color){background-color:var(--wje-button-background-color);color:var(--wje-button-color)}:host(.wje-button-link){--wje-button-border-width: 1px;--wje-button-border-color: transparent;--wje-button-background-color: transparent !important}:host(.wje-button-disabled){cursor:default;opacity:.5;pointer-events:none}:host(.wje-button-round){--wje-button-border-radius: var(--wje-border-radius-pill)}:host(.wje-button-circle){--wje-button-border-radius: var(--wje-border-radius-circle);aspect-ratio:1/1}:host(.wje-button-large){--wje-padding-top: .6rem;--wje-padding-start: .7rem;--wje-padding-end: .7rem;--wje-padding-bottom: .6rem}:host(.wje-button-small){--wje-padding-top: .25rem;--wje-padding-start: .25rem;--wje-padding-end: .25rem;--wje-padding-bottom: .25rem}::slotted(wje-icon[slot="start"]){margin:0 .3rem 0 -.3rem}::slotted(wje-icon[slot="end"]){margin:0 -.2rem 0 .3rem}:host(:not([only-caret])) slot[name=caret]{padding:0 0 0 .3rem}:host([only-caret]) slot[name=caret]{padding:0;display:block}:host(.wje-button-group-first:not(.wje-button-group-last)) .button-native{border-start-end-radius:0;border-end-end-radius:0}:host(.wje-button-group-inner) .button-native{border-radius:0}:host(.wje-button-group-last:not(.wje-button-group-first)) .button-native{border-start-start-radius:0;border-end-start-radius:0}:host(.wje-button-group-button:not(.wje-button-group-first)){margin-inline-start:calc(-1 * var(--wje-button-border-width))!important}::slotted([slot="toggle"]){display:none}::slotted([slot="toggle"].show){display:block}';
class d extends h {
  /**
   * Button constructor
   * @constructor
   */
  constructor() {
    super();
    /**
     * Dependencies
     * @type {Object}
     */
    s(this, "depandencies", {
      "wje-icon": p
    });
    /**
     * Class name
     * @type {string}
     */
    s(this, "className", "Button");
    /**
     * Event dialog open method
     * @param {Event} e - The event
     */
    s(this, "eventDialogOpen", (o) => {
      document.dispatchEvent(
        new CustomEvent(
          this.dialog,
          {
            bubbles: !0
          }
        )
      );
    });
    /**
     * Toggle states method
     */
    s(this, "toggleStates", () => {
      this.slotToggle.assignedNodes().filter((l) => l.nodeType === Node.ELEMENT_NODE).forEach((l) => {
        l.classList.contains("show") ? l.classList.remove("show") : l.classList.add("show");
      });
    });
  }
  /**
   * Set active state
   * @param {boolean} value - The value to set
   */
  set active(o) {
    this.setAttribute("active", "");
  }
  /**
   * Get active state
   * @returns {boolean} active - The active state
   */
  get active() {
    return this.hasAttribute("active");
  }
  /**
   * Set disabled state
   * @param {boolean} value - The value to set
   */
  set disabled(o) {
    this.setAttribute("disabled", "");
  }
  /**
   * Get disabled state
   * @returns {boolean} disabled - The disabled state
   */
  get disabled() {
    return this.hasAttribute("disabled");
  }
  /**
   * Set fill
   * @param {string} value - The value to set
   */
  set fill(o) {
    this.setAttribute("fill", o);
  }
  /**
   * Get fill
   * @returns {string} fill - The fill
   */
  get fill() {
    return this.getAttribute("fill") || "solid";
  }
  /**
   * Set outline
   * @param {boolean} value - The value to set
   */
  set outline(o) {
    this.setAttribute("outline", "");
  }
  /**
   * Get outline
   * @returns {boolean} outline - The outline
   */
  get outline() {
    return this.hasAttribute("outline");
  }
  /**
   * Set stop propagation
   * @param {boolean} value - The value to set
   */
  set stopPropagation(o) {
    this.setAttribute("stop-propagation", u(o));
  }
  /**
   * Get stop propagation
   * @returns {boolean} stopPropagation - The stop propagation
   */
  get stopPropagation() {
    return u(this.getAttribute("stop-propagation"));
  }
  /**
   * Get CSS stylesheet
   * @static
   * @returns {Object} styles - The CSS styles
   */
  static get cssStyleSheet() {
    return v;
  }
  /**
   * Get observed attributes
   * @static
   * @returns {Array<string>} observedAttributes - The observed attributes
   */
  static get observedAttributes() {
    return [];
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
  draw(o, l, m) {
    let w = document.createDocumentFragment();
    if (this.disabled && this.classList.add("wje-button-disabled"), this.variant && this.classList.add("wje-button-" + this.variant), this.hasAttribute("round") && this.classList.add("wje-button-round"), this.hasAttribute("circle") && this.classList.add("wje-button-circle"), this.outline && this.classList.add("wje-outline"), this.fill && this.classList.add("wje-button-" + this.fill), this.size && this.classList.add("wje-button-" + this.size), this.hasAttribute("color") ? this.classList.add("wje-color-" + this.color, "wje-color") : this.classList.add("wje-color-default", "wje-color"), this.hasAttribute("caret") || this.hasAttribute("only-caret")) {
      let a = document.createElement("wje-icon");
      a.style.setProperty("--wje-icon-size", "14px"), a.setAttribute("slot", "caret"), a.setAttribute("name", "chevron-down"), this.appendChild(a);
    }
    if (this.active) {
      this.classList.add("wje-active");
      let a = document.createElement("wje-icon");
      a.setAttribute("name", "check"), this.appendChild(a);
    }
    this.disabled && this.classList.add("wje-disabled");
    let c = document.createElement(this.hasAttribute("href") ? "a" : "button");
    c.classList.add("button-native"), c.setAttribute("part", "native");
    let n = document.createElement("span");
    n.classList.add("button-inner");
    let e = document.createElement("slot");
    return e.setAttribute("name", "icon-only"), n.appendChild(e), e = document.createElement("slot"), e.setAttribute("name", "start"), n.appendChild(e), e = document.createElement("slot"), n.appendChild(e), e = document.createElement("slot"), e.setAttribute("name", "end"), n.appendChild(e), e = document.createElement("slot"), e.setAttribute("name", "caret"), n.appendChild(e), this.hasToggle = g.hasSlot(this, "toggle"), this.hasToggle && (this.slotToggle = document.createElement("slot"), this.slotToggle.setAttribute("name", "toggle"), n.appendChild(this.slotToggle)), c.appendChild(n), w.appendChild(c), w;
  }
  /**
   * After draw method
   */
  afterDraw() {
    this.hasToggle && (this.toggle === "off" ? this.slotToggle.assignedNodes()[1].classList.add("show") : this.slotToggle.assignedNodes()[0].classList.add("show")), i.addListener(this, "click", "wje:button-click", null, { stopPropagation: this.stopPropagation }), i.addListener(this, "click", null, this.eventDialogOpen), this.hasToggle && i.addListener(this, "click", "wje-button:toggle", this.toggleStates, { stopPropagation: this.stopPropagation });
  }
  /**
   * Before disconnect method
   */
  beforeDisconnect() {
    this.removeEventListener("click", this.eventDialogOpen);
  }
}
d.define("wje-button", d);
export {
  d as default
};
