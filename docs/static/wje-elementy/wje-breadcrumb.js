var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement, { WjElementUtils, event } from "./wje-element.js";
const styles = "/*\n[ WJ Breadcrumb ]\n*/\n\n:host {\n    display: flex;\n    flex: 0 0 auto;\n    align-items: center;\n    line-height: 1.5;\n}\n\n:host(.collapsed) {\n    display: none;\n}\n.native-breadcrumb {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    outline: none;\n    background: inherit;\n    padding: 0.25rem 0.75rem;\n    color: var(--wje-breadcrumb-a);\n    text-decoration: none;\n    &.hidden {\n        display: none;\n    }\n    &.active {\n        font-weight: bold;\n    }\n    &:hover {\n        color: var(--wje-breadcrumb-a-hover);\n    }\n}\n\nbutton {\n    margin-inline: 0.75rem;\n    border: 0 solid transparent;\n    border-radius: 3px;\n    background-color: transparent;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n}\n\n.separator {\n    display: inline-flex;\n    align-items: center;\n}\n\n::slotted([slot='start']) {\n    margin-inline: 0 0.5rem;\n}\n\n::slotted([slot='end']) {\n    margin-inline: 0.5rem 0;\n}\n";
class Breadcrumb extends WJElement {
  /**
   * Breadcrumb constructor method.
   */
  constructor() {
    super();
    /**
     * Class name for the Breadcrumb element.
     * @type {string}
     */
    __publicField(this, "className", "Breadcrumb");
    this._showSeparator = true;
    this.showCollapsedIndicator = false;
  }
  /**
   * Get show separator flag.
   * @returns {boolean} showSeparator - The show separator flag
   */
  get showSeparator() {
    return this._showSeparator;
  }
  /**
   * Set show separator flag.
   * @param {boolean} value The value to set
   */
  set showSeparator(value) {
    this._showSeparator = value;
  }
  /**
   * Set collapsed variant.
   * @param {string} value The value to set
   */
  set collapsedVariant(value) {
    this._collapsedVariant = value;
  }
  /**
   * Get collapsed variant.
   * @returns {string} The collapsed variant value in uppercase.
   */
  get collapsedVariant() {
    let variant = this.parentElement.variant || this._collapsedVariant;
    return variant.toUpperCase();
  }
  /**
   * Get CSS stylesheet for the Breadcrumb element.
   * @static
   * @returns {object} styles - The CSS styles
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Get observed attributes for the Breadcrumb element.
   * @static
   * @returns {Array<string>} - The observed attributes array for the Breadcrumb element.
   */
  static get observedAttributes() {
    return ["show-collapsed-indicator", "collapsed", "last"];
  }
  /**
   * Attribute changed callback method.
   * @returns {boolean} false - Always returns false
   */
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "collapsed") {
      if (WjElementUtils.stringToBoolean(newValue) && !this.hasAttribute("show-collapsed-indicator"))
        this.classList.add("collapsed");
    } else if (name === "show-collapsed-indicator") {
      if (WjElementUtils.stringToBoolean(newValue)) {
        this.showCollapsedIndicator = true;
        this.refresh();
      }
    } else if (name === "last") {
      this.active = WjElementUtils.stringToBoolean(newValue);
      this.showSeparator = !WjElementUtils.stringToBoolean(newValue);
      this.refresh();
    }
    return false;
  }
  /**
   * Setup attributes for the Breadcrumb element.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draw method for the Breadcrumb element.
   * @returns {object} fragment - The document fragment
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("a");
    native.classList.add("native-breadcrumb");
    native.setAttribute("part", "native");
    if (this.active) native.classList.add("active");
    let slot = document.createElement("slot");
    let start = document.createElement("slot");
    start.setAttribute("name", "start");
    let end = document.createElement("slot");
    end.setAttribute("name", "end");
    native.appendChild(start);
    native.appendChild(slot);
    native.appendChild(end);
    fragment.appendChild(native);
    if (WjElementUtils.stringToBoolean(this.showCollapsedIndicator)) {
      fragment.appendChild(this.drawCollapsedIndicator());
      native.classList.add("hidden");
    }
    if (this.showSeparator) {
      let separator = document.createElement("span");
      separator.classList.add("separator");
      separator.setAttribute("part", "separator");
      if (WjElementUtils.hasSlot(this, "separator")) {
        let slotSeparator = document.createElement("slot");
        slotSeparator.setAttribute("name", "separator");
        separator.appendChild(slotSeparator);
      } else {
        separator.innerHTML = `<wje-icon name=${this.separator || "chevron-right"}></wje-icon>`;
      }
      fragment.appendChild(separator);
    }
    this.native = native;
    return fragment;
  }
  /**
   * Draw collapsed indicator method.
   * @returns {object} - The collapsed indicator element.
   */
  drawCollapsedIndicator() {
    let collapsedIndicator = null;
    if (this.collapsedVariant === "DROPDOWN") {
      collapsedIndicator = this.collapseDropdown();
    } else {
      collapsedIndicator = this.collapseButton();
    }
    return collapsedIndicator;
  }
  /**
   * Collapse dropdown button.
   * @returns {object} dropdown - The dropdown button.
   */
  collapseDropdown() {
    let dropdown = document.createElement("wje-dropdown");
    dropdown.setAttribute("placement", "bottom");
    dropdown.setAttribute("offset", "10");
    let button = document.createElement("wje-button");
    button.setAttribute("slot", "trigger");
    button.setAttribute("fill", "link");
    button.innerHTML = `<wje-icon name="dots"></wje-icon>`;
    let menu = document.createElement("wje-menu");
    menu.setAttribute("variant", "context");
    dropdown.appendChild(button);
    dropdown.appendChild(menu);
    dropdown.innerHTML = `<wje-button slot="trigger" fill="link">
            <wje-icon name="dots"></wje-icon>
        </wje-button>
        <wje-menu variant="context">
            <wje-menu-item>Test 0</wje-menu-item>
            <wje-menu-item>Test 1</wje-menu-item>
            <wje-menu-item>Test 2</wje-menu-item>
        </wje-menu>`;
    this.parentElement.querySelectorAll("wje-breadcrumb").forEach((el) => {
    });
    return dropdown;
  }
  /**
   * Collapse button method.
   * @returns {object} - The button element.
   */
  collapseButton() {
    let button = document.createElement("button");
    button.setAttribute("aria-label", "Show more breadcrumbs");
    button.setAttribute("part", "collapsed-indicator");
    button.innerHTML = `<wje-icon name="dots"></wje-icon>`;
    event.addListener(button, "click", null, (e) => {
      this.native.classList.remove("hidden");
      button.remove();
      this.parentElement.querySelectorAll("wje-breadcrumb").forEach((el) => {
        el.classList.remove("collapsed");
      });
      e.stopPropagation();
    });
    return button;
  }
}
Breadcrumb.define("wje-breadcrumb", Breadcrumb);
export {
  Breadcrumb as default
};
