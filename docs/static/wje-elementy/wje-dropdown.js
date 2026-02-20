var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _onMenuItemCustom;
import WJElement from "./wje-element.js";
import { P as Popup } from "./popup.element-Cl6QeG8M.js";
import { event } from "./event.js";
const _Dropdown = class _Dropdown extends WJElement {
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
    __publicField(this, "popupHideCallback", (e) => {
      if (this.classList.contains("active") && e.target.tagName === "WJE-DROPDOWN") {
        this.toggleCallback(e);
      }
    });
    /**
     * Handles delegated clicks from inside the popup and closes the dropdown when a leaf menu item is selected.
     * This works even when the menu is portaled, because we rely on the composed path.
     */
    __publicField(this, "onMenuItemClick", (e) => {
      const path = typeof e.composedPath === "function" ? e.composedPath() : [];
      const item = path.find((n) => n && n.tagName === "WJE-MENU-ITEM");
      if (!item) return;
      if (item.hasAttribute("disabled") || item.getAttribute("aria-disabled") === "true") return;
      if (typeof item.querySelector === "function" && item.querySelector("wje-menu")) return;
      this.onClose();
    });
    /**
     * @summary Toggles the dropdown element between active and inactive states.
     * Calls the `onOpen` method if the element is currently inactive,
     * and calls the `onClose` method if the element is currently active.
     * @param {Event} e The event object.
     */
    __publicField(this, "toggleCallback", (e) => {
      if (this.classList.contains("active")) {
        e.stopPropagation();
        this.onClose();
      } else {
        e.stopPropagation();
        this.onOpen(e);
      }
    });
    /**
     * Open the popup element.
     * @param {object} e
     */
    __publicField(this, "onOpen", (e) => {
      this.classList.add("active");
      this.syncAria();
      Promise.resolve(this.beforeShow(this)).then((res) => {
        if (!this.classList.contains("active")) {
          throw new Error("beforeShow method returned false or not string");
        }
        this.popup.show(true);
        event.addListener(document, "wje-menu-item:click", null, __privateGet(this, _onMenuItemCustom), false);
        event.dispatchCustomEvent(this, "wje-dropdown:open", {
          bubbles: true,
          detail: { target: this }
        });
        Promise.resolve(this.afterShow(this));
      }).catch((error) => {
        this.classList.remove("active");
        this.popup.hide(true);
      });
    });
    __publicField(this, "beforeClose", () => {
    });
    __publicField(this, "afterClose", () => {
    });
    __publicField(this, "onClose", () => {
      this.classList.remove("active");
      this.syncAria();
      Promise.resolve(this.beforeClose(this)).then((res) => {
        if (this.classList.contains("active")) {
          throw new Error("beforeShow method returned false or not string");
        }
        this.popup.hide(true);
        event.removeListener(document, "wje-menu-item:click", null, __privateGet(this, _onMenuItemCustom), false);
        event.dispatchCustomEvent(this, "wje-dropdown:close", {
          bubbles: true,
          detail: { target: this }
        });
        Promise.resolve(this.afterClose(this));
      }).catch((error) => {
        this.classList.add("active");
        this.popup.show(true);
      });
    });
    __privateAdd(this, _onMenuItemCustom, (e) => {
      const path = typeof e.composedPath === "function" ? e.composedPath() : [];
      if (!this.popup || !this.popup.floatingEl || !path.includes(this.popup.floatingEl)) return;
      const item = path.find((n) => n && n.tagName === "WJE-MENU-ITEM");
      if (!item) return;
      if (item.hasAttribute("disabled") || item.getAttribute("aria-disabled") === "true") return;
      if (item.hasAttribute("has-submenu")) return;
      this.classList.remove("active");
      this.popup.hide(true);
    });
    this._instanceId = ++_Dropdown._instanceId;
  }
  /**
   * Sets or removes the 'portaled' attribute on the element.
   * When the value is truthy, the attribute 'portaled' is added to the element.
   * When the value is falsy, the attribute 'portaled' is removed from the element.
   * @param {boolean} value Determines whether to add or remove the 'portaled' attribute.
   */
  set portaled(value) {
    if (value) {
      this.setAttribute("portaled", value);
    } else {
      this.removeAttribute("portaled");
    }
  }
  /**
   * Getter method for the `portaled` property.
   * Checks if the `portaled` attribute is present on the element.
   * @returns {boolean} Returns `true` if the `portaled` attribute exists, otherwise `false`.
   */
  get portaled() {
    return this.getAttribute("portaled") || "";
  }
  /**
   * Checks whether the element has the 'portaled' attribute.
   * @returns {boolean} True if the element has the 'portaled' attribute, otherwise false.
   */
  get isPortaled() {
    return this.hasAttribute("portaled");
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
    popup.setAttribute("part", "popup");
    if (this.isPortaled)
      popup.setAttribute("portal", this.portaled);
    popup.append(anchorSlot, slot);
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
  afterDraw() {
    event.addListener(this, "wje-popup:hide", null, this.popupHideCallback);
    event.addListener(this.popup, "click", null, this.onMenuItemClick, { capture: true });
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
    this.onSlotChange = () => this.syncAria();
    this.anchorSlot.addEventListener("slotchange", this.onSlotChange);
    this.syncAria();
  }
  /**
   * Adds event listeners for the mouseenter and mouseleave events.
   */
  afterDisconnect() {
    var _a;
    event.removeListener(this, "mouseenter", null, this.onOpen);
    event.removeListener(this, "mouseleave", null, this.onClose);
    event.removeListener(this.anchorSlot, "click", null, this.toggleCallback, { capture: true });
    event.removeListener(this, "wje-popup:hide", null, this.popupHideCallback);
    event.removeListener(this.popup, "click", null, this.onMenuItemClick, { capture: true });
    event.removeListener(document, "wje-menu-item:click", null, __privateGet(this, _onMenuItemCustom), false);
    (_a = this.anchorSlot) == null ? void 0 : _a.removeEventListener("slotchange", this.onSlotChange);
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
  /**
   * Syncs ARIA attributes for the trigger element.
   */
  syncAria() {
    var _a, _b, _c, _d;
    const triggerEl = (_c = (_b = (_a = this.anchorSlot) == null ? void 0 : _a.assignedElements) == null ? void 0 : _b.call(_a, { flatten: true })) == null ? void 0 : _c[0];
    if (!triggerEl) return;
    const popupId = ((_d = this.popup) == null ? void 0 : _d.id) || `wje-dropdown-popup-${this._instanceId}`;
    if (this.popup && !this.popup.id) this.popup.id = popupId;
    const hasMenu = !!this.querySelector("wje-menu");
    triggerEl.setAttribute("aria-haspopup", hasMenu ? "menu" : "dialog");
    triggerEl.setAttribute("aria-expanded", this.classList.contains("active") ? "true" : "false");
    triggerEl.setAttribute("aria-controls", popupId);
  }
};
_onMenuItemCustom = new WeakMap();
__publicField(_Dropdown, "_instanceId", 0);
let Dropdown = _Dropdown;
Dropdown.define("wje-dropdown", Dropdown);
export {
  Dropdown as default
};
//# sourceMappingURL=wje-dropdown.js.map
