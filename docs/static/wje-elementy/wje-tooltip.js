var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
import "./wje-popup.js";
import { P as Popup } from "./popup.element-Cl6QeG8M.js";
import { event } from "./event.js";
const styles = "/*\n[ WJ Tooltip ]\n*/\n\n.native-tooltip {\n    display: flex;\n    align-items: center;\n    padding: var(--wje-tooltip-spacing);\n    color: var(--wje-tooltip-color);\n    background-color: var(--wje-tooltip-background);\n    font-weight: var(--wje-tooltip-font-weight);\n    font-size: var(--wje-tooltip-font-size);\n    border-radius: var(--wje-tooltip-border-radius);\n    line-height: var(--wje-tooltip-line-height);\n    box-sizing: border-box;\n    box-shadow: var(--wje-tooltip-shadow);\n}\n\n::slotted([slot='start']) {\n    margin: 0 0.3rem 0 0;\n}\n\n::slotted([slot='end']) {\n    margin: 0 0 0 0.3rem;\n}\n\n.arrow {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    background: var(--wje-tooltip-arrow-color);\n    transform: rotate(45deg);\n}\n";
const _Tooltip = class _Tooltip extends WJElement {
  /**
   * Creates an instance of Tooltip.
   */
  constructor() {
    super();
    /**
     * Dependencies of the Button element.
     * @type {object}
     */
    __publicField(this, "dependencies", {
      "wje-popup": Popup
    });
    /**
     * The class name for the component.
     * @type {string}
     */
    __publicField(this, "className", "Tooltip");
    __publicField(this, "popupHideCallback", () => {
      this.onHide();
    });
    /**
     * Handles the logic for showing the component's popup or tooltip.
     * Adds the `active` class, invokes lifecycle hooks, and manages the popup visibility.
     * @throws {Error} If the `beforeShow` method returns a non-string value or `false`.
     */
    __publicField(this, "onShow", () => {
      var _a;
      event.addListener(this, "wje-popup:hide", null, this.popupHideCallback);
      this.classList.add("active");
      if ((_a = this.querySelector("wje-dropdown")) == null ? void 0 : _a.classList.contains("active")) {
        return;
      }
      Promise.resolve(this.beforeShow(this)).then((res) => {
        if (!this.classList.contains("active") || !res || typeof res !== "string") {
          throw new Error("beforeShow method returned false or not string");
        }
        this.native.innerHTML = res;
        this.popup.show();
        Promise.resolve(this.afterShow(this));
      }).catch(() => {
        this.classList.remove("active");
        this.popup.hide();
      });
    });
    /**
     * Hides the component's popup or tooltip.
     * Removes the `active` class from the component and hides the popup element.
     */
    __publicField(this, "onHide", () => {
      event.removeListener(this, "wje-popup:hide", null, this.popupHideCallback);
      this.classList.remove("active");
      this.popup.hide();
    });
    this._instanceId = ++_Tooltip._instanceId;
  }
  /**
   * Set active attribute for the tooltip element.
   * @param value
   */
  set content(value) {
    this.setAttribute("content", value);
  }
  /**
   * Get active attribute for the tooltip element.
   * @returns {string}
   */
  get content() {
    if (this.hasAttribute("content")) return this.getAttribute("content");
    return "";
  }
  /**
   * Returns the CSS stylesheet for the component.
   * @static
   * @returns {CSSStyleSheet} The CSS stylesheet
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Returns the list of observed attributes.
   * @static
   * @returns {Array} An array of observed attributes
   */
  static get observedAttributes() {
    return ["active"];
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
    this.setAriaState({ role: "tooltip" });
  }
  /**
   * Draws the component for the tooltip.
   * @returns {object} Document fragment
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let popup = document.createElement("wje-popup");
    popup.setAttribute("placement", this.placement || "top");
    popup.setAttribute("offset", this.offset || "0");
    let slot = document.createElement("slot");
    slot.setAttribute("name", "anchor");
    slot.setAttribute("slot", "anchor");
    let arrow = document.createElement("div");
    arrow.classList.add("arrow");
    arrow.setAttribute("slot", "arrow");
    let start = document.createElement("slot");
    start.setAttribute("name", "start");
    let end = document.createElement("slot");
    end.setAttribute("name", "end");
    let content = document.createElement("div");
    content.innerHTML = this.content;
    let native = document.createElement("div");
    native.setAttribute("part", "native");
    native.classList.add("native-tooltip");
    native.appendChild(start);
    native.appendChild(content);
    native.appendChild(end);
    popup.appendChild(slot);
    popup.appendChild(arrow);
    popup.appendChild(native);
    this.mySlot = slot;
    this.popup = popup;
    this.native = native;
    fragment.appendChild(popup);
    return fragment;
  }
  /**
   * Draws the component for the tooltip.
   */
  afterDraw() {
    const resolveAnchor = () => {
      let anchorEl2 = this.mySlot.assignedElements()[0];
      if (!anchorEl2) {
        anchorEl2 = this.querySelector(":scope > *:not([slot])");
        if (anchorEl2) anchorEl2.setAttribute("slot", "anchor");
      }
      if (this.selector) {
        anchorEl2 = this.checkSelector(anchorEl2);
      }
      if (!anchorEl2) return null;
      const tooltipId = this.id || `wje-tooltip-${this._instanceId}`;
      if (!this.id) this.id = tooltipId;
      anchorEl2.setAttribute("aria-describedby", tooltipId);
      return anchorEl2;
    };
    this.onSlotChange = () => {
      resolveAnchor();
    };
    this.mySlot.addEventListener("slotchange", this.onSlotChange);
    this.onSlotChange();
    let anchorEl = resolveAnchor();
    if (!anchorEl) return;
    event.addListener(anchorEl, "mouseenter", null, this.onShow);
    event.addListener(anchorEl, "mouseleave", null, this.onHide);
    event.addListener(this, "wje-dropdown:open", null, this.onHide);
    event.addListener(this, "wje-dropdown:close", null, this.onShow);
  }
  afterDisconnect() {
    var _a;
    event.removeListener(this, "wje-dropdown:open", null, this.onHide);
    event.removeListener(this, "wje-dropdown:close", null, this.onShow);
    event.removeListener(this, "mouseenter", null, this.onShow);
    event.removeListener(this, "mouseleave", null, this.onHide);
    (_a = this.mySlot) == null ? void 0 : _a.removeEventListener("slotchange", this.onSlotChange);
  }
  dispatch(customEvent) {
    return new Promise((resolve) => {
      event.dispatchCustomEvent(this, customEvent, {
        resolve
      });
    });
  }
  beforeShow() {
    return this.native.innerHTML;
  }
  afterShow() {
    return true;
  }
  /**
   * Validates if the specified selector exists within the provided element.
   * Logs an error if the selector is not found and returns the found element or `null`.
   * @param {HTMLElement} anchorEl The root element to search within.
   * @returns {HTMLElement|null} The first element matching the selector, or `null` if not found.
   */
  checkSelector(anchorEl) {
    const newAnchorEl = anchorEl.querySelector(this.selector);
    if (newAnchorEl === null) {
      console.error("Selector not found:", this.selector);
    }
    return newAnchorEl;
  }
};
__publicField(_Tooltip, "_instanceId", 0);
let Tooltip = _Tooltip;
Tooltip.define("wje-tooltip", Tooltip);
export {
  Tooltip as default
};
//# sourceMappingURL=wje-tooltip.js.map
