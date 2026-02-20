var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
import { event } from "./event.js";
const styles = "/*\n[ WJ Accordion Item ]\n*/\n\n:host {\n    --wje-accordion-background: var(--wje-color-contrast-0);\n    --wje-accordion-border: var(--wje-color-contrast-0);\n    --wje-accordion-border-radius: var(--wje-border-radius-large);\n    --wje-accordion-background-hover: var(--wje-color-contrast-1);\n    --wje-accordion-border-hover: var(--wje-color-contrast-2);\n    --wje-accordion-background-expanded: var(--wje-color-contrast-0);\n    --wje-accordion-border-expanded: var(--wje-color-contrast-0);\n    --wje-accordion-headline-color: var(--wje-color-contrast-11) !important;\n    --wje-accordion-content-color: var(--wje-color-contrast-6);\n}\n\n:host([color='primary']) {\n    --wje-accordion-background: var(--wje-color-primary-1);\n    --wje-accordion-border: var(--wje-color-primary-1);\n    --wje-accordion-background-hover: var(--wje-color-primary-2);\n    --wje-accordion-border-hover: var(--wje-color-primary-2);\n    --wje-accordion-background-expanded: transparent;\n    --wje-accordion-border-expanded: var(--wje-color-primary-3);\n    --wje-accordion-headline-color: var(--wje-color-contrast-11) !important;\n    --wje-accordion-content-color: var(--wje-color-contrast-6);\n}\n\n:host([color='complete']) {\n    --wje-accordion-background: var(--wje-color-complete-1);\n    --wje-accordion-border: var(--wje-color-complete-1);\n    --wje-accordion-background-hover: var(--wje-color-complete-2);\n    --wje-accordion-border-hover: var(--wje-color-complete-2);\n    --wje-accordion-background-expanded: transparent;\n    --wje-accordion-border-expanded: var(--wje-color-complete-3);\n    --wje-accordion-headline-color: var(--wje-color-contrast-11) !important;\n    --wje-accordion-content-color: var(--wje-color-contrast-6);\n}\n\n:host([color='success']) {\n    --wje-accordion-background: var(--wje-color-success-1);\n    --wje-accordion-border: var(--wje-color-success-1);\n    --wje-accordion-background-hover: var(--wje-color-success-2);\n    --wje-accordion-border-hover: var(--wje-color-success-2);\n    --wje-accordion-background-expanded: transparent;\n    --wje-accordion-border-expanded: var(--wje-color-success-3);\n    --wje-accordion-headline-color: var(--wje-color-contrast-11) !important;\n    --wje-accordion-content-color: var(--wje-color-contrast-6);\n}\n\n:host([color='danger']) {\n    --wje-accordion-background: var(--wje-color-danger-1);\n    --wje-accordion-border: var(--wje-color-danger-1);\n    --wje-accordion-background-hover: var(--wje-color-danger-2);\n    --wje-accordion-border-hover: var(--wje-color-danger-2);\n    --wje-accordion-background-expanded: transparent;\n    --wje-accordion-border-expanded: var(--wje-color-danger-3);\n    --wje-accordion-headline-color: var(--wje-color-contrast-11) !important;\n    --wje-accordion-content-color: var(--wje-color-contrast-6);\n}\n\n:host([color='warning']) {\n    --wje-accordion-background: var(--wje-color-warning-1);\n    --wje-accordion-border: var(--wje-color-warning-1);\n    --wje-accordion-background-hover: var(--wje-color-warning-2);\n    --wje-accordion-border-hover: var(--wje-color-warning-2);\n    --wje-accordion-background-expanded: transparent;\n    --wje-accordion-border-expanded: var(--wje-color-warning-3);\n    --wje-accordion-headline-color: var(--wje-color-contrast-11) !important;\n    --wje-accordion-content-color: var(--wje-color-contrast-6);\n}\n\n:host([color='info']) {\n    --wje-accordion-background: var(--wje-color-info-1);\n    --wje-accordion-border: var(--wje-color-info-1);\n    --wje-accordion-background-hover: var(--wje-color-info-2);\n    --wje-accordion-border-hover: var(--wje-color-info-2);\n    --wje-accordion-background-expanded: transparent;\n    --wje-accordion-border-expanded: var(--wje-color-info-3);\n    --wje-accordion-headline-color: var(--wje-color-contrast-11) !important;\n    --wje-accordion-content-color: var(--wje-color-contrast-6);\n}\n\n:host {\n    display: block;\n    margin-bottom: 0.5rem;\n}\n\n/*:host(.expanding) #content {*/\n/*    display: none;*/\n/*}*/\n\n/*:host(.collapsing) #content {*/\n/*    max-height: 0;*/\n/*}*/\n\n.native-accordion-item {\n    display: block;\n    background-color: var(--wje-accordion-background);\n    border-radius: var(--wje-accordion-border-radius);\n    border-width: 1px;\n    border-style: solid;\n    border-color: var(--wje-accordion-border);\n    transition: background-color 200ms ease-in-out;\n    &:hover {\n        background-color: var(--wje-accordion-background-hover);\n        border-color: var(--wje-accordion-border-hover);\n    }\n}\n\n:host(.expanded) .native-accordion-item {\n    background-color: var(--wje-accordion-background-expanded);\n    border-color: var(--wje-accordion-border-expanded);\n}\n\n.headline {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    align-items: center;\n    font-size: var(--wje-font-size) !important;\n    color: var(--wje-accordion-headline-color);\n    line-height: normal !important;\n    margin: 0 !important;\n    padding: 0.75rem;\n}\n\n[name='description'] {\n    font-size: var(--wje-font-size-small);\n    color: var(--wje-color-contrast-6);\n}\n\nwje-icon {\n    margin-left: auto;\n    transform: rotate(var(--wje-accordion-marker-rotate, 0deg));\n}\n\n[part='content'] {\n    /*background: var(--wje-accordion-background);*/\n    display: block;\n    color: var(--wje-accordion-content-color);\n    overflow: hidden;\n    max-height: 0;\n    transition: max-height 250ms ease-in-out;\n}\n\n[part='content'] slot {\n    display: block;\n    margin: 0 0.75rem 0.75rem 0.75rem;\n}\n\n:host(.expanded) [part='content'] {\n    /*display: block;*/\n    /*padding: 0 .75rem .75rem .75rem;*/\n    max-height: 100vh;\n}\n";
const _AccordionItem = class _AccordionItem extends WJElement {
  /**
   * Constructor for the AccordionItem class.
   */
  constructor() {
    super();
    /**
     * The class name for the Accordion Item element.
     * @type {string}
     */
    __publicField(this, "className", "AccordionItem");
    /**
     * Method to handle the attribute changes.
     */
    __publicField(this, "collapse", () => {
      var _a;
      this.classList.remove("expanded");
      this.classList.add("collapsed");
      (_a = this.headline) == null ? void 0 : _a.setAttribute("aria-expanded", "false");
    });
    /**
     * Method to handle the attribute changes.
     */
    __publicField(this, "expand", () => {
      var _a;
      this.classList.remove("collapsed");
      this.classList.add("expanded");
      (_a = this.headline) == null ? void 0 : _a.setAttribute("aria-expanded", "true");
    });
    this._instanceId = ++_AccordionItem._instanceId;
  }
  /**
   * Getter for the CSS stylesheet.
   * @returns {object} The styles for the Accordion Item element.
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Getter for the observed attributes.
   * @returns {Array} An array containing the name of the observed attribute.
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
   * Method to draw the Accordion Item element. This method returns a document fragment containing the drawn element.
   * @returns {object} The document fragment containing the drawn element.
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.setAttribute("part", "native");
    native.classList.add("native-accordion-item");
    let headline = document.createElement("div");
    headline.setAttribute("part", "headline");
    headline.classList.add("headline");
    const baseId = this.id || `wje-accordion-item-${this._instanceId}`;
    headline.id = `${baseId}-header`;
    let headlineDescription = document.createElement("slot");
    headlineDescription.setAttribute("part", "description");
    headlineDescription.setAttribute("name", "description");
    let slotHeadline = document.createElement("slot");
    slotHeadline.setAttribute("name", "headline");
    let toggle = document.createElement("slot");
    toggle.setAttribute("part", "toggle");
    toggle.setAttribute("name", "toggle");
    let mark = document.createElement("wje-icon");
    mark.setAttribute("name", "chevron-down");
    let content = document.createElement("div");
    content.setAttribute("part", "content");
    content.setAttribute("id", `${baseId}-panel`);
    content.setAttribute("role", "region");
    content.setAttribute("aria-labelledby", headline.id);
    let slot = document.createElement("slot");
    slot.setAttribute("name", "content");
    toggle.appendChild(mark);
    headline.appendChild(slotHeadline);
    headline.appendChild(toggle);
    headline.appendChild(headlineDescription);
    content.appendChild(slot);
    native.appendChild(headline);
    native.appendChild(content);
    fragment.appendChild(native);
    this.headline = headline;
    this.toggle = toggle;
    this.content = content;
    return fragment;
  }
  /**
   * Method to execute after the Accordion Item element is drawn.
   */
  afterDraw() {
    if (!this.classList.contains("expanded")) this.classList.add("collapsed");
    this.headline.setAttribute("role", "button");
    this.headline.setAttribute("tabindex", "0");
    this.headline.setAttribute("aria-controls", this.content.id);
    this.headline.setAttribute("aria-expanded", this.classList.contains("expanded") ? "true" : "false");
    this.headline.addEventListener("click", () => {
      if (this.classList.contains("collapsed")) {
        event.dispatchCustomEvent(this, "wje-accordion-item:open");
        this.toggle.style.setProperty("--wje-accordion-marker-rotate", "180deg");
        this.expand();
      } else {
        event.dispatchCustomEvent(this, "wje-accordion-item:close");
        this.toggle.style.setProperty("--wje-accordion-marker-rotate", "0deg");
        this.collapse();
      }
    });
    this.headline.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.headline.click();
      }
    });
  }
};
__publicField(_AccordionItem, "_instanceId", 0);
let AccordionItem = _AccordionItem;
AccordionItem.define("wje-accordion-item", AccordionItem);
export {
  AccordionItem as default
};
//# sourceMappingURL=wje-accordion-item.js.map
