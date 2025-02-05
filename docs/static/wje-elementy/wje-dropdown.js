var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement, { event } from "./wje-element.js";
import { P as Popup } from "./popup.element-4DNn6DjX.js";
class Dropdown extends WJElement {
  /**
   * Creates an instance of Dropdown.
   * @class
   */
  constructor() {
    super();
    /**
     * The placement of the dropdown.
     * @type {{"wje-popup": Popup}}
     */
    __publicField(this, "dependencies", {
      "wje-popup": Popup
    });
    /**
     * Sets the placement of the dropdown.
     * @type {string}
     */
    __publicField(this, "className", "Dropdown");
    /**
     * Callback function to handle other dropdowns being opened. Close the dropdown if it is not the target and collapse is enabled.
     * @param {Event} e The event object.
     */
    __publicField(this, "otherDropdownOpennedCallback", (e) => {
      if (e.detail.detail.target !== this) {
        this.classList.remove("active");
        this.popup.hide();
      }
    });
    /**
     * @summary Toggles the dropdown element between active and inactive states.
     * Calls the `onOpen` method if the element is currently inactive,
     * and calls the `onClose` method if the element is currently active.
     * @param {Event} e The event object.
     */
    __publicField(this, "toggleCallback", (e) => {
      e.stopPropagation();
      if (this.classList.contains("active")) {
        this.onClose(e);
      } else {
        this.onOpen(e);
      }
    });
    /**
     * Open the popup element.
     * @param {object} e
     */
    __publicField(this, "onOpen", (e) => {
      e.stopPropagation();
      this.classList.add("active");
      Promise.resolve(this.beforeShow(this)).then((res) => {
        if (!this.classList.contains("active")) {
          throw new Error("beforeShow method returned false or not string");
        }
        this.popup.show();
        event.dispatchCustomEvent(this, "wje-dropdown:open", {
          bubbles: true,
          detail: { target: this }
        });
        Promise.resolve(this.afterShow(this));
      }).catch((error) => {
        this.classList.remove("active");
        this.popup.hide();
      });
    });
    /**
     * Close the popup element.
     * @param {object} e
     */
    __publicField(this, "onClose", (e) => {
      this.classList.remove("active");
      this.popup.hide();
      event.dispatchCustomEvent(this, "wje-dropdown:close", {
        bubbles: true,
        detail: { target: this }
      });
    });
  }
  /**
   * Sets the placement of the dropdown.
   * @param value
   */
  set trigger(value) {
    this.setAttribute("trigger", value);
  }
  /**
   * Gets the placement of the dropdown.
   * @returns {string|string}
   */
  get trigger() {
    return this.getAttribute("trigger") || "click";
  }
  /**
   * Getter for the CSS stylesheet.
   * @returns {string[]}
   */
  static get observedAttributes() {
    return ["active"];
  }
  /**
   * Sets up the attributes for the dropdown.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Removes the popup element.
   */
  beforeDraw() {
    var _a;
    (_a = this.popup) == null ? void 0 : _a.remove();
    this.popup = null;
  }
  /**
   * Draws the dropdown element and returns the created document fragment.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    this.classList.add("wje-placement", "wje-" + this.placement || "wje-start");
    let native = document.createElement("div");
    native.setAttribute("part", "native");
    native.classList.add("native-dropdown");
    let tooltip = document.createElement("wje-tooltip");
    tooltip.setAttribute("content", this.tooltip);
    let anchorSlot = document.createElement("slot");
    anchorSlot.setAttribute("name", "trigger");
    anchorSlot.setAttribute("slot", "anchor");
    let slot = document.createElement("slot");
    let popup = document.createElement("wje-popup");
    popup.setAttribute("placement", this.placement);
    popup.setAttribute("offset", this.offset);
    popup.appendChild(anchorSlot);
    popup.appendChild(slot);
    popup.setAttribute("manual", "");
    native.appendChild(popup);
    fragment.appendChild(native);
    this.popup = popup;
    this.anchorSlot = anchorSlot;
    return fragment;
  }
  /**
   * Adds event listeners for the mouseenter and mouseleave events.
   */
  afterDisconnect() {
    event.removeListener(this, "mouseenter", null, this.onOpen);
    event.removeListener(this, "mouseleave", null, this.onClose);
    event.removeListener(this.anchorSlot, "click", null, this.toggleCallback, { capture: true });
  }
  /**
   * Adds event listeners for the mouseenter and mouseleave events.
   */
  afterDraw() {
    event.addListener(this, "wje-popup:hide", null, () => {
      this.classList.remove("active");
    });
    if (this.trigger !== "click") {
      event.addListener(this, "mouseenter", null, this.onOpen);
      event.addListener(this, "mouseleave", null, this.onClose);
    } else {
      event.addListener(this.anchorSlot, "click", null, this.toggleCallback, { capture: true });
    }
    if (this.hasAttribute("collapsible")) {
      event.addListener(
        Array.from(this.querySelectorAll("wje-menu-item")),
        "click",
        "wje-menu-item:click",
        this.onClose
      );
    }
  }
  /**
   * @summary Returns the content to be displayed before showing the dropdown.
   * @returns {any} The content to be displayed.
   */
  beforeShow() {
    return this.content;
  }
  /**
   * This method is called after the dropdown is shown.
   */
  afterShow() {
  }
}
Dropdown.define("wje-dropdown", Dropdown);
export {
  Dropdown as default
};
