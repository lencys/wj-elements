var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ WJ Tab Group ]\n*/\n\n:host {\n    --wje-tab-top: 0;\n    --wje-tab-start: 0;\n    --wje-tab-end: 0;\n    --wje-tab-bottom: 0;\n}\n.native-tab-group {\n    display: flex;\n    flex-direction: column;\n\n    overflow: hidden;\n    position: relative;\n}\n\n.native-tab-group > header {\n    display: flex;\n    flex-direction: column;\n\n    & > nav {\n        display: flex;\n    }\n}\n\n.native-tab-group > section {\n    width: 100%;\n\n    & > article {\n        scroll-snap-align: start;\n        overflow-y: auto;\n        overscroll-behavior-y: contain;\n    }\n}\n\n/*TOP*/\n:host([variant='top']) {\n    --wje-tab-top: auto !important;\n    --wje-tab-writing-mode: horizontal-tb;\n    .native-tab-group {\n        flex-direction: column;\n    }\n    nav {\n        border-bottom: 1px solid var(--wje-border-color);\n    }\n}\n\n/*START*/\n:host([variant='start']) {\n    --wje-tab-start: auto !important;\n    --wje-tab-writing-mode: vertical-rl;\n    .native-tab-group {\n        flex-direction: row;\n    }\n    nav {\n        flex-direction: column;\n        border-right: 1px solid var(--wje-border-color);\n    }\n}\n\n/*END*/\n:host([variant='end']) {\n    --wje-tab-writing-mode: vertical-rl;\n    .native-tab-group {\n        flex-direction: row-reverse;\n    }\n    nav {\n        flex-direction: column;\n        border-left: 1px solid var(--wje-border-color);\n    }\n}\n\n/*BOTTOM*/\n:host([variant='bottom']) {\n    --wje-tab-bottom: auto !important;\n    --wje-tab-writing-mode: horizontal-tb;\n    .native-tab-group {\n        flex-direction: column-reverse;\n    }\n    nav {\n        border-top: 1px solid var(--wje-border-color);\n    }\n}\n";
class TabGroup extends WJElement {
  /**
   * Creates an instance of TabGroup.
   * @class
   */
  constructor() {
    super();
    __publicField(this, "className", "TabGroup");
  }
  /**
   * Returns the CSS styles for the component.
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Sets up the event listeners before the component is drawn.
   * This method is called before the component is drawn.
   * It is used to set up event listeners.
   */
  beforeDraw() {
    let activeTabName = location.hash.replace("#", "");
    if (this.getPanelAllName().includes(activeTabName)) {
      window.addEventListener("load", (e) => {
        this.setActiveTab(activeTabName);
      });
    }
  }
  /**
   * Draws the component.
   * @param {object} context The context for drawing.
   * @param {object} store The store for drawing.
   * @param {object} params The parameters for drawing.
   * @returns {DocumentFragment}
   */
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.setAttribute("part", "native");
    native.classList.add("native-tab-group");
    let header = document.createElement("header");
    header.setAttribute("part", "tabs");
    header.classList.add("scroll-snap-x");
    let nav = document.createElement("nav");
    let section = document.createElement("section");
    section.setAttribute("part", "panels");
    let slot = document.createElement("slot");
    let slotNav = document.createElement("slot");
    slotNav.setAttribute("name", "nav");
    header.appendChild(nav);
    nav.appendChild(slotNav);
    section.appendChild(slot);
    native.appendChild(header);
    native.appendChild(section);
    fragment.appendChild(native);
    return fragment;
  }
  /**
   * Sets up the event listeners after the component is drawn.
   */
  afterDraw() {
    let activeTab = this.getActiveTab();
    let activeTabName = activeTab ? activeTab[0].panel : this.getTabAll()[0].panel;
    this.setActiveTab(activeTabName);
    this.addEventListener("wje-tab:change", (e) => {
      if (e.detail.context.hasAttribute("disabled")) return;
      this.setActiveTab(e.detail.context.panel);
    });
  }
  /**
   * Removes the active attribute from all tabs and panels.
   */
  removeActiveTab() {
    this.getPanelAll().forEach((el) => {
      el.removeAttribute("active");
    });
    this.getTabAll().forEach((el) => {
      el.removeAttribute("active");
    });
  }
  /**
   * Sets the active tab and panel.
   * @param {string} tab The name of the tab to set as active.
   */
  setActiveTab(tab) {
    this.removeActiveTab();
    this.querySelector(`[panel="${tab}"]`).setAttribute("active", "");
    this.querySelector(`[name="${tab}"]`).setAttribute("active", "");
  }
  /**
   * Returns the currently active tab.
   * @returns {Element|null} The active tab, or null if no tab is active.
   */
  getActiveTab() {
    let activeTabs = Array.from(this.querySelectorAll("wje-tab[active]"));
    return activeTabs.length > 0 ? activeTabs : null;
  }
  /**
   * Returns all tabs.
   * @returns {Array<Element>} An array of all tabs.
   */
  getTabAll() {
    return this.context.querySelector('[name="nav"]').assignedElements();
  }
  /**
   * Returns all panels.
   * @returns {Array<Element>} An array of all panels.
   */
  getPanelAll() {
    return Array.from(this.querySelectorAll("wje-tab-panel"));
  }
  /**
   * Returns the names of all tabs.
   * @returns {Array<string>} An array of all tab names.
   */
  getPanelAllName() {
    return this.getPanelAll().map((el) => el.getAttribute("name"));
  }
}
TabGroup.define("wje-tab-group", TabGroup);
export {
  TabGroup as default
};
