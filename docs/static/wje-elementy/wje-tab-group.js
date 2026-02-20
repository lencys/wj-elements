var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ WJ Tab Group ]\n*/\n\n:host {\n    --wje-tab-top: 0;\n    --wje-tab-start: 0;\n    --wje-tab-end: 0;\n    --wje-tab-bottom: 0;\n    width: 100%;\n}\n.native-tab-group {\n    display: flex;\n    flex-direction: column;\n\n    overflow: hidden;\n    position: relative;\n}\n\n.native-tab-group > header {\n    display: flex;\n    flex-direction: column;\n\n    & > nav {\n        display: flex;\n        align-items: center;\n    }\n}\n\n.native-tab-group > section {\n    width: 100%;\n\n    & > article {\n        scroll-snap-align: start;\n        overflow-y: auto;\n        overscroll-behavior-y: contain;\n    }\n}\n\n/*TOP*/\n:host([variant='top']) {\n    --wje-tab-top: auto !important;\n    --wje-tab-writing-mode: horizontal-tb;\n    .native-tab-group {\n        flex-direction: column;\n    }\n    nav {\n        border-bottom: var(--wje-tab-group-nav-border);\n    }\n}\n\n/*START*/\n:host([variant='start']) {\n    --wje-tab-start: auto !important;\n    --wje-tab-writing-mode: vertical-rl;\n    .native-tab-group {\n        flex-direction: row;\n    }\n    nav {\n        flex-direction: column;\n        border-right: var(--wje-tab-group-nav-border);\n    }\n}\n\n/*END*/\n:host([variant='end']) {\n    --wje-tab-writing-mode: vertical-rl;\n    .native-tab-group {\n        flex-direction: row-reverse;\n    }\n    nav {\n        flex-direction: column;\n        border-left: var(--wje-tab-group-nav-border);\n    }\n}\n\n/*BOTTOM*/\n:host([variant='bottom']) {\n    --wje-tab-bottom: auto !important;\n    --wje-tab-writing-mode: horizontal-tb;\n    .native-tab-group {\n        flex-direction: column-reverse;\n    }\n    nav {\n        border-top: var(--wje-tab-group-nav-border);\n    }\n}\n\n.dropdown-active {\n    wje-button{\n        &::part(native) {\n            color: var(--wje-color-primary-8);\n        }\n    }\n}";
const _TabGroup = class _TabGroup extends WJElement {
  /**
   * Creates an instance of TabGroup.
   * @class
   */
  constructor() {
    super();
    __publicField(this, "className", "TabGroup");
    this._instanceId = ++_TabGroup._instanceId;
    this._lastNavWidth = null;
    this._initialized = false;
  }
  /**
   * Sets the value for the 'variant' attribute of the element.
   * @param {string} value The value to set for the 'variant' attribute.
   */
  set variant(value) {
    this.setAttribute("variant", value);
    this.setAriaState({
      orientation: value === "start" || value === "end" ? "vertical" : "horizontal"
    });
  }
  /**
   * Gets the value of the 'variant' attribute.
   * If the attribute is not set, it defaults to 'top'.
   * @returns {string} The value of the 'variant' attribute or the default value 'top' if not set.
   */
  get variant() {
    return this.getAttribute("variant") || "top";
  }
  /**
   * Sets the 'type' attribute of the element to the specified value.
   * @param {string} value The value to set for the 'type' attribute.
   */
  set type(value) {
    this.setAttribute("type", value);
  }
  /**
   * Retrieves the `type` attribute of the element.
   * If the `type` attribute is not set, it defaults to `'panel'`.
   * @returns {string} The value of the `type` attribute or the default value `'panel'`.
   */
  get type() {
    return this.getAttribute("type") || "panel";
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
    this.setAriaState({
      role: "tablist",
      orientation: this.variant === "start" || this.variant === "end" ? "vertical" : "horizontal"
    });
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
   * Creates and returns a document fragment containing a structured layout for a tab group.
   * The tab group layout includes a `header` section with navigational elements,
   * a `section` element for tab panels, and slots for customization such as additional navigation items,
   * dropdowns, and more.
   * The structure comprises:
   * - A `div` container with relevant styling and part attributes.
   * - A `header` for tabs, including a slot for navigation (`nav`) and additional tabs in a dropdown (`moreDropdown`).
   * - A `section` for tab panels with a customizable `slot`.
   * This function also initializes the `nav` and `moreDropdown` properties for external use.
   * @returns {DocumentFragment} The completed document fragment containing the tab group layout.
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.setAttribute("part", "native");
    native.classList.add("native-tab-group");
    let header = document.createElement("header");
    header.setAttribute("part", "tabs");
    header.classList.add("scroll-snap-x");
    let nav = document.createElement("nav");
    nav.setAttribute("part", "nav");
    let section = document.createElement("section");
    section.setAttribute("part", "panels");
    let slot = document.createElement("slot");
    let slotNav = document.createElement("slot");
    slotNav.setAttribute("name", "nav");
    let icon = document.createElement("wje-icon");
    icon.setAttribute("name", "dots");
    let button = document.createElement("wje-button");
    button.setAttribute("slot", "trigger");
    button.setAttribute("fill", "link");
    let menu = document.createElement("wje-menu");
    menu.setAttribute("variant", "context");
    let slotMore = document.createElement("slot");
    slotMore.setAttribute("name", "more");
    let moreDropdown = document.createElement("wje-dropdown");
    moreDropdown.setAttribute("placement", "bottom-end");
    moreDropdown.setAttribute("collapsible", "");
    moreDropdown.classList.add("more-tabs");
    button.append(icon);
    menu.append(slotMore);
    moreDropdown.append(button);
    moreDropdown.append(menu);
    header.append(nav);
    nav.append(slotNav);
    if (this.variant === "top" || this.variant === "bottom") {
      nav.append(moreDropdown);
    }
    section.append(slot);
    native.append(header);
    native.append(section);
    fragment.append(native);
    this.nav = nav;
    this.moreDropdown = moreDropdown;
    return fragment;
  }
  /**
   * Executes necessary initializations and attaches event listeners after a drawing operation.
   * Handles active tab selection, 'wje-tab:change' event binding, and window resize event for overflow checking.
   * @returns {void} Does not return a value.
   */
  afterDraw() {
    let activeTab = this.getActiveTab();
    let activeTabName = activeTab ? activeTab[0][this.type] : this.getTabAll()[0][this.type];
    this.setActiveTab(activeTabName);
    this.addEventListener("wje-tab:change", (e) => {
      if (e.detail.context.hasAttribute("disabled")) return;
      this.setActiveTab(e.detail.context.panel);
    });
    if (this.variant === "top" || this.variant === "bottom") {
      this.initTabMetrics();
      this._resizeObserver = new ResizeObserver((entries) => {
        const width = entries[0].contentRect.width;
        if (width !== this._lastNavWidth) {
          this._lastNavWidth = width;
          this.checkOverflow();
        }
      });
      this._resizeObserver.observe(this);
    }
  }
  /**
   * Removes the 'active' class from all panel and tab elements.
   * @returns {void} This method does not return a value.
   */
  removeActiveTab() {
    this.getPanelAll().forEach((el) => {
      el.classList.remove("active");
    });
    this.getTabAll().forEach((el) => {
      el.classList.remove("active");
    });
  }
  /**
   * Sets the active tab and panel.
   * @param {string} tab The name of the tab to set as active.
   */
  setActiveTab(tab) {
    var _a;
    this.removeActiveTab();
    const el = this.querySelector(`[${this.type}="${tab}"]`);
    el == null ? void 0 : el.classList.add("active");
    if (this.type === "panel")
      (_a = this.querySelector(`[name="${tab}"]`)) == null ? void 0 : _a.classList.add("active");
    if (el)
      this.dropdownActive(el);
    this.syncAria();
  }
  /**
   * Returns the currently active tab.
   * @returns {Element|null} The active tab, or null if no tab is active.
   */
  getActiveTab() {
    let activeTabs = Array.from(this.querySelectorAll("wje-tab.active"));
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
   * Returns all tabs, including those moved to "more".
   * @returns {Array<Element>} An array of all tabs.
   */
  getAllTabs() {
    return Array.from(this.querySelectorAll("wje-tab"));
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
  /**
   * Toggles the visibility of the "more" dropdown based on the presence of tabs in the "more" slot.
   * @returns {void} Does not return a value.
   */
  toggleMoreVisibility() {
    const hasTabsInMore = !!this.querySelector('wje-tab[slot="more"]');
    const nextHidden = !hasTabsInMore;
    if (this.moreDropdown.hidden !== nextHidden) {
      this.moreDropdown.hidden = nextHidden;
    }
  }
  /**
   * Initializes metrics for tabs within the component. Assigns each tab to the navigation slot
   * and calculates their dimensions for further operations.
   * @returns {void} Does not return any value.
   */
  initTabMetrics() {
    const tabs = Array.from(this.querySelectorAll("wje-tab"));
    tabs.forEach((tab) => tab.setAttribute("slot", "nav"));
    requestAnimationFrame(() => {
      this._tabMetrics = tabs.map((tab) => ({
        el: tab,
        width: tab.getBoundingClientRect().width
      }));
      this._initialized = true;
      this.checkOverflow();
      this._lastNavWidth = this.nav.getBoundingClientRect().width;
    });
  }
  /**
   * Checks if the tabs within a navigation bar overflow the available space.
   * Moves overflowing tabs into a dropdown menu and updates their state accordingly.
   * @returns {void} This method does not return a value.
   */
  checkOverflow() {
    if (!this._initialized) return;
    const navWidth = this.nav.getBoundingClientRect().width;
    const moreWidth = this.moreDropdown.offsetWidth || 48;
    let used = 0;
    let overflowStarted = false;
    for (const { el, width } of this._tabMetrics) {
      used += width;
      const shouldOverflow = used + moreWidth > navWidth;
      el.setAttribute("slot", shouldOverflow || overflowStarted ? "more" : "nav");
      overflowStarted || (overflowStarted = shouldOverflow);
    }
    this.toggleMoreVisibility();
  }
  /**
   * Toggles the "dropdown-active" class on the element based on its "active" status
   * and the value of its "slot" attribute.
   * @param {HTMLElement} el The HTML element to evaluate and apply the toggle logic.
   * @returns {void} This method does not return any value.
   */
  dropdownActive(el) {
    if (el.classList.contains("active")) {
      if (el.getAttribute("slot") === "more")
        this.moreDropdown.classList.add("dropdown-active");
      else
        this.moreDropdown.classList.remove("dropdown-active");
    }
  }
  /**
   * Syncs ARIA attributes on tabs and panels.
   */
  syncAria() {
    const tabs = this.getAllTabs();
    const panels = this.getPanelAll();
    const panelByName = new Map(panels.map((p) => [p.getAttribute("name"), p]));
    this.id || `wje-tab-group-${this._instanceId}`;
    this.setAriaState({
      orientation: this.variant === "start" || this.variant === "end" ? "vertical" : "horizontal"
    });
    tabs.forEach((tab, index) => {
      const tabName = tab.getAttribute(this.type) || tab.panel || tab.route || String(index);
      const isActive = tab.classList.contains("active");
      const isDisabled = tab.hasAttribute("disabled");
      if (!tab.id) tab.id = `wje-tab-${tabName}`;
      let controlsId = "";
      if (this.type === "panel") {
        const panel = panelByName.get(tabName);
        if (panel) {
          if (!panel.id) panel.id = `wje-tab-panel-${tabName}`;
          controlsId = panel.id;
          panel.setAriaState({
            role: "tabpanel",
            labelledBy: tab.id
          });
        }
      }
      tab.setAriaState({
        role: "tab",
        selected: isActive,
        disabled: isDisabled,
        controls: controlsId || ""
      });
      if (typeof tab.setRovingTabIndex === "function") {
        tab.setRovingTabIndex(isActive ? 0 : -1);
      }
    });
  }
  disconnectedCallback() {
    var _a, _b;
    (_a = super.disconnectedCallback) == null ? void 0 : _a.call(this);
    (_b = this._resizeObserver) == null ? void 0 : _b.disconnect();
  }
};
__publicField(_TabGroup, "_instanceId", 0);
let TabGroup = _TabGroup;
TabGroup.define("wje-tab-group", TabGroup);
export {
  TabGroup as default
};
//# sourceMappingURL=wje-tab-group.js.map
