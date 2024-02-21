var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
const styles = "/*\n[ WJ Tab Group ]\n*/\n:host {\n  --wj-tab-top: 0;\n  --wj-tab-start: 0;\n  --wj-tab-end: 0;\n  --wj-tab-bottom: 0;\n}\n\n.native-tab-group {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  position: relative;\n}\n\n.native-tab-group > header {\n  display: flex;\n  flex-direction: column;\n}\n.native-tab-group > header > nav {\n  display: flex;\n}\n\n.native-tab-group > section {\n  width: 100%;\n}\n.native-tab-group > section > article {\n  scroll-snap-align: start;\n  overflow-y: auto;\n  overscroll-behavior-y: contain;\n}\n\n:host([variant=top]) {\n  --wj-tab-top: auto !important;\n  --wj-tab-writing-mode: horizontal-tb;\n}\n:host([variant=top]) .native-tab-group {\n  flex-direction: column;\n}\n:host([variant=top]) nav {\n  border-bottom: 1px solid var(--wj-border-color);\n}\n\n:host([variant=start]) {\n  --wj-tab-start: auto !important;\n  --wj-tab-writing-mode: vertical-rl;\n}\n:host([variant=start]) .native-tab-group {\n  flex-direction: row;\n}\n:host([variant=start]) nav {\n  flex-direction: column;\n  border-right: 1px solid var(--wj-border-color);\n}\n\n:host([variant=end]) {\n  --wj-tab-writing-mode: vertical-rl;\n}\n:host([variant=end]) .native-tab-group {\n  flex-direction: row-reverse;\n}\n:host([variant=end]) nav {\n  flex-direction: column;\n  border-left: 1px solid var(--wj-border-color);\n}\n\n:host([variant=bottom]) {\n  --wj-tab-bottom: auto !important;\n  --wj-tab-writing-mode: horizontal-tb;\n}\n:host([variant=bottom]) .native-tab-group {\n  flex-direction: column-reverse;\n}\n:host([variant=bottom]) nav {\n  border-top: 1px solid var(--wj-border-color);\n}";
class TabGroup extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "TabGroup");
  }
  static get cssStyleSheet() {
    return styles;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.classList.add("native-tab-group");
    let header = document.createElement("header");
    header.classList.add("scroll-snap-x");
    let nav = document.createElement("nav");
    let section = document.createElement("section");
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
  afterDraw() {
    let activeTab = this.getActiveTab();
    let activeTabName = activeTab ? activeTab[0].name : this.getTabAll()[0].panel;
    this.setActiveTab(activeTabName);
    this.addEventListener("wj:tab-change", (e) => {
      if (e.detail.context.hasAttribute("disabled"))
        return false;
      this.setActiveTab(e.detail.context.panel);
    });
  }
  removeActiveTab() {
    this.getPanelAll().forEach((el) => {
      el.removeAttribute("active");
    });
    this.getTabAll().forEach((el) => {
      el.removeAttribute("active");
    });
  }
  setActiveTab(tab) {
    this.removeActiveTab();
    this.querySelector(`[panel="${tab}"]`).setAttribute("active", "");
    this.querySelector(`[name="${tab}"]`).setAttribute("active", "");
  }
  getActiveTab() {
    let activeTabs = Array.from(this.context.querySelectorAll("[active]"));
    return activeTabs.length > 0 ? activeTabs[0] : null;
  }
  getTabAll() {
    return this.context.querySelector('[name="nav"]').assignedElements();
  }
  getPanelAll() {
    return Array.from(this.querySelectorAll("wj-tab-panel"));
  }
}
customElements.get("wj-tab-group") || window.customElements.define("wj-tab-group", TabGroup);
export {
  TabGroup
};
