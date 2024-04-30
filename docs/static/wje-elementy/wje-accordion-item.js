var j = Object.defineProperty;
var v = (e, o, r) => o in e ? j(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r;
var n = (e, o, r) => (v(e, typeof o != "symbol" ? o + "" : o, r), r);
import p, { event as s } from "./wje-element.js";
const h = ":host([color=primary]){--wje-accordion-background: var(--wje-color-primary-1);--wje-accordion-border: var(--wje-color-primary-1);--wje-accordion-background-hover: var(--wje-color-primary-2);--wje-accordion-border-hover: var(--wje-color-primary-2);--wje-accordion-background-expanded: transparent;--wje-accordion-border-expanded: var(--wje-color-primary-3);--wje-accordion-headline-color: var(--wje-color-contrast-11) !important;--wje-accordion-content-color: var(--wje-color-contrast-6)}:host([color=complete]){--wje-accordion-background: var(--wje-color-complete-1);--wje-accordion-border: var(--wje-color-complete-1);--wje-accordion-background-hover: var(--wje-color-complete-2);--wje-accordion-border-hover: var(--wje-color-complete-2);--wje-accordion-background-expanded: transparent;--wje-accordion-border-expanded: var(--wje-color-complete-3);--wje-accordion-headline-color: var(--wje-color-contrast-11) !important;--wje-accordion-content-color: var(--wje-color-contrast-6)}:host([color=success]){--wje-accordion-background: var(--wje-color-success-1);--wje-accordion-border: var(--wje-color-success-1);--wje-accordion-background-hover: var(--wje-color-success-2);--wje-accordion-border-hover: var(--wje-color-success-2);--wje-accordion-background-expanded: transparent;--wje-accordion-border-expanded: var(--wje-color-success-3);--wje-accordion-headline-color: var(--wje-color-contrast-11) !important;--wje-accordion-content-color: var(--wje-color-contrast-6)}:host([color=danger]){--wje-accordion-background: var(--wje-color-danger-1);--wje-accordion-border: var(--wje-color-danger-1);--wje-accordion-background-hover: var(--wje-color-danger-2);--wje-accordion-border-hover: var(--wje-color-danger-2);--wje-accordion-background-expanded: transparent;--wje-accordion-border-expanded: var(--wje-color-danger-3);--wje-accordion-headline-color: var(--wje-color-contrast-11) !important;--wje-accordion-content-color: var(--wje-color-contrast-6)}:host([color=warning]){--wje-accordion-background: var(--wje-color-warning-1);--wje-accordion-border: var(--wje-color-warning-1);--wje-accordion-background-hover: var(--wje-color-warning-2);--wje-accordion-border-hover: var(--wje-color-warning-2);--wje-accordion-background-expanded: transparent;--wje-accordion-border-expanded: var(--wje-color-warning-3);--wje-accordion-headline-color: var(--wje-color-contrast-11) !important;--wje-accordion-content-color: var(--wje-color-contrast-6)}:host([color=info]){--wje-accordion-background: var(--wje-color-info-1);--wje-accordion-border: var(--wje-color-info-1);--wje-accordion-background-hover: var(--wje-color-info-2);--wje-accordion-border-hover: var(--wje-color-info-2);--wje-accordion-background-expanded: transparent;--wje-accordion-border-expanded: var(--wje-color-info-3);--wje-accordion-headline-color: var(--wje-color-contrast-11) !important;--wje-accordion-content-color: var(--wje-color-contrast-6)}:host{display:block;margin-bottom:.5rem}.native-accordion-item{display:block;background-color:var(--wje-accordion-background);border-radius:var(--wje-border-radius-small);border-width:1px;border-style:solid;border-color:var(--wje-accordion-border);transition:background-color .2s ease-in-out}.native-accordion-item:hover{background-color:var(--wje-accordion-background-hover);border-color:var(--wje-accordion-border-hover)}:host(.expanded) .native-accordion-item{background-color:var(--wje-accordion-background-expanded);border-color:var(--wje-accordion-border-expanded)}#headline{display:block}#headline::slotted(span){display:block;text-transform:uppercase;font-size:var(--wje-font-size)!important;color:var(--wje-accordion-headline-color);line-height:normal!important;margin:0!important;padding:.75rem}#content{display:block;color:var(--wje-accordion-content-color);overflow:hidden;max-height:0;transition:max-height .2s ease-in-out}#content slot{display:block;margin:0 .75rem .75rem}:host(.expanded) #content{max-height:100vh}";
class w extends p {
  /**
   * Constructor for the AccordionItem class.
   */
  constructor() {
    super();
    /**
     * The class name for the Accordion Item element.
     * @type {string}
     */
    n(this, "className", "AccordionItem");
    // afterDraw(context, store, params) {
    //     this.summary.style.setProperty("--wje-accordion-marker", `url(${svgIcon})`);
    //     this.summary.style.setProperty("--wje-accordion-marker-rotate", '180deg');
    //
    //     this.native.addEventListener("toggle", (e) => {
    //         e.stopPropagation();
    //         if (this.native.open) {
    //             event.dispatchCustomEvent(this, "wje-accordion-item:open");
    //         } else {
    //             event.dispatchCustomEvent(this, "wje-accordion-item:close");
    //         }
    //     });
    // }
    n(this, "collapse", () => {
      this.classList.remove("expanded"), this.classList.add("collapsed");
    });
    n(this, "expand", () => {
      this.classList.remove("collapsed"), this.classList.add("expanded");
    });
  }
  /**
   * Getter for the CSS stylesheet.
   * @return {Object} The styles for the Accordion Item element.
   */
  static get cssStyleSheet() {
    return h;
  }
  /**
   * Getter for the observed attributes.
   * @return {Array} An array containing the name of the observed attribute.
   */
  static get observedAttributes() {
    return [];
  }
  /**
   * Method to setup attributes for the Accordion Item element.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Method to draw the Accordion Item element.
   * @param {Object} context - The context in which the element is drawn.
   * @param {Object} store - The store containing the state of the element.
   * @param {Object} params - The parameters for drawing the element.
   * @return {Object} The document fragment containing the drawn element.
   */
  draw(r, b, m) {
    let i = document.createDocumentFragment(), c = document.createElement("div");
    c.setAttribute("part", "native"), c.classList.add("native-accordion-item");
    let a = document.createElement("slot");
    a.setAttribute("name", "headline"), a.setAttribute("id", "headline");
    let t = document.createElement("slot");
    t.setAttribute("name", "toggle"), t.setAttribute("id", "toggle");
    let d = document.createElement("div");
    d.setAttribute("id", "content");
    let l = document.createElement("slot");
    return l.setAttribute("name", "content"), d.appendChild(l), c.appendChild(a), c.appendChild(d), i.appendChild(c), this.headline = a, this.toggle = t, i;
  }
  /**
   * Method to execute after the Accordion Item element is drawn.
   */
  afterDraw() {
    this.classList.contains("expanded") || this.classList.add("collapsed"), this.headline.addEventListener("click", () => {
      this.classList.contains("collapsed") ? (this.collapse(), s.dispatchCustomEvent(this, "wje-accordion-item:open")) : (this.expand(), s.dispatchCustomEvent(this, "wje-accordion-item:close"));
    });
  }
}
w.define("wje-accordion-item", w);
export {
  w as default
};
