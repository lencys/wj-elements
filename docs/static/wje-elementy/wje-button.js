var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { b as bindRouterLinks } from "./router-links-CJnOdbas.js";
import WJElement, { WjElementUtils, event } from "./wje-element.js";
import Icon from "./wje-icon.js";
const bool = (v) => {
  return v === "false" || v === "null" || v === "NaN" || v === "undefined" || v === "0" ? false : !!v;
};
const styles = "/*\n[ WJ Button ]\n*/\n\n/*PRIMARY*/\n.wje-button-solid.wje-color-primary {\n    background-color: var(--wje-color-primary-9);\n    border-color: var(--wje-color-primary-9);\n    color: var(--wje-color-contrast-0);\n}\n\n.wje-button-outline.wje-color-primary {\n    background-color: var(--wje-color-primary-1);\n    border-color: var(--wje-color-primary-9);\n    color: var(--wje-color-primary-9);\n}\n\n.wje-button-link.wje-color-primary {\n    background-color: transparent;\n    border-color: transparent;\n    color: var(--wje-color-primary-9);\n}\n\n/*COMPLETE*/\n.wje-button-solid.wje-color-complete {\n    background-color: var(--wje-color-complete-9);\n    border-color: var(--wje-color-complete-9);\n    color: var(--wje-color-contrast-0);\n}\n\n.wje-button-outline.wje-color-complete {\n    background-color: var(--wje-color-complete-1);\n    border-color: var(--wje-color-complete-9);\n    color: var(--wje-color-complete-9);\n}\n\n.wje-button-link.wje-color-complete {\n    background-color: transparent;\n    border-color: transparent;\n    color: var(--wje-color-complete-9);\n}\n\n/*SUCCESS*/\n.wje-button-solid.wje-color-success {\n    background-color: var(--wje-color-success-9);\n    border-color: var(--wje-color-success-9);\n    color: var(--wje-color-contrast-0);\n}\n\n.wje-button-outline.wje-color-success {\n    background-color: var(--wje-color-success-1);\n    border-color: var(--wje-color-success-9);\n    color: var(--wje-color-success-9);\n}\n\n.wje-button-link.wje-color-success {\n    background-color: transparent;\n    border-color: transparent;\n    color: var(--wje-color-success-9);\n}\n\n/*WARNING*/\n.wje-button-solid.wje-color-warning {\n    background-color: var(--wje-color-warning-9);\n    border-color: var(--wje-color-warning-9);\n    color: var(--wje-color-black);\n}\n\n.wje-button-outline.wje-color-warning {\n    background-color: var(--wje-color-warning-1);\n    border-color: var(--wje-color-warning-11);\n    color: var(--wje-color-warning-11);\n}\n\n.wje-button-link.wje-color-warning {\n    background-color: transparent;\n    border-color: transparent;\n    color: var(--wje-color-warning-11);\n}\n\n/*DANGER*/\n.wje-button-solid.wje-color-danger {\n    background-color: var(--wje-color-danger-9);\n    border-color: var(--wje-color-danger-9);\n    color: var(--wje-color-contrast-0);\n}\n\n.wje-button-outline.wje-color-danger {\n    background-color: var(--wje-color-danger-1);\n    border-color: var(--wje-color-danger-9);\n    color: var(--wje-color-danger-9);\n}\n\n.wje-button-link.wje-color-danger {\n    background-color: transparent;\n    border-color: transparent;\n    color: var(--wje-color-danger-9);\n}\n\n/*NEUTRAL*/\n.wje-button-solid.wje-color-info {\n    background-color: var(--wje-color-contrast-9);\n    border-color: var(--wje-color-contrast-9);\n    color: var(--wje-color-contrast-0);\n}\n\n.wje-button-outline.wje-color-info {\n    background-color: var(--wje-color-contrast-1);\n    border-color: var(--wje-color-contrast-9);\n    color: var(--wje-color-contrast-9);\n}\n\n.wje-button-link.wje-color-info {\n    background-color: transparent;\n    border-color: transparent;\n    color: var(--wje-color-contrast-9);\n}\n\n/*DEFAULT*/\n.wje-button-solid.wje-color-default {\n    background-color: var(--wje-color-contrast-0);\n    border-color: var(--wje-color-contrast-3);\n    color: var(--wje-color-contrast-11);\n}\n\n.wje-button-outline.wje-color-default {\n    background-color: var(--wje-color-contrast-1);\n    border-color: var(--wje-color-contrast-5);\n    color: var(--wje-color-contrast-11);\n}\n\n.wje-button-link.wje-color-default {\n    background-color: transparent;\n    border-color: transparent;\n    color: var(--wje-color-contrast-11);\n}\n\n:host {\n    --wje-padding-top: 0.4rem;\n    --wje-padding-start: 0.5rem;\n    --wje-padding-end: 0.5rem;\n    --wje-padding-bottom: 0.4rem;\n\n    display: inline-flex;\n    position: relative;\n    width: auto;\n    cursor: pointer;\n    margin-inline: var(--wje-button-margin-inline);\n}\n\n:host(.wje-button-group-button) {\n    display: block;\n}\n\n.native-button {\n    font-family: var(--wje-font-family);\n    font-size: var(--wje-font-size);\n    display: flex;\n    position: relative;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    min-height: inherit;\n    /*overflow: hidden;*/ /* Sposobovalo problemy s badge a tooltip */\n    border-width: var(--wje-button-border-width);\n    border-style: var(--wje-button-border-style);\n    border-color: var(--wje-button-border-color);\n    background-color: transparent;\n    /*color: var(--wje-button-color);*/\n    line-height: 1;\n    contain: layout style;\n    cursor: pointer;\n    z-index: 0;\n    box-sizing: border-box;\n    appearance: none;\n    margin: 0;\n    border-radius: var(--wje-button-border-radius);\n    padding-top: var(--wje-padding-top);\n    padding-bottom: var(--wje-padding-bottom);\n    padding-inline: var(--wje-padding-start) var(--wje-padding-end);\n    white-space: nowrap;\n}\n\n.native-button:hover {\n    outline-style: solid;\n    outline-width: var(--wje-button-outline-width);\n    transition: outline-width 0.1s linear;\n}\n\n@media (any-hover: hover) {\n    .wje-button-solid.wje-color-primary:hover {\n        background-color: var(--wje-color-primary-9);\n        border-color: var(--wje-color-primary-9);\n        color: var(--wje-color-contrast-0);\n        outline-color: var(--wje-color-primary-2);\n    }\n\n    .wje-button-outline.wje-color-primary:hover {\n        background-color: var(--wje-color-primary-1);\n        border-color: var(--wje-color-primary-9);\n        color: var(--wje-color-primary-9);\n        outline-color: var(--wje-color-primary-2);\n    }\n\n    .wje-button-link.wje-color-primary:hover {\n        background-color: var(--wje-color-primary-1);\n        border-color: transparent;\n        color: var(--wje-color-primary-9);\n        outline-color: transparent;\n        outline-width: 0;\n    }\n\n    .wje-button-solid.wje-color-complete:hover {\n        background-color: var(--wje-color-complete-9);\n        border-color: var(--wje-color-complete-9);\n        color: var(--wje-color-contrast-0);\n        outline-color: var(--wje-color-complete-2);\n    }\n\n    .wje-button-outline.wje-color-complete:hover {\n        background-color: var(--wje-color-complete-1);\n        border-color: var(--wje-color-complete-9);\n        color: var(--wje-color-complete-9);\n        outline-color: var(--wje-color-complete-2);\n    }\n\n    .wje-button-link.wje-color-complete:hover {\n        background-color: var(--wje-color-complete-1);\n        border-color: transparent;\n        color: var(--wje-color-complete-9);\n        outline-color: transparent;\n        outline-width: 0;\n    }\n\n    .wje-button-solid.wje-color-success:hover {\n        background-color: var(--wje-color-success-9);\n        border-color: var(--wje-color-success-9);\n        color: var(--wje-color-contrast-0);\n        outline-color: var(--wje-color-success-2);\n    }\n\n    .wje-button-outline.wje-color-success:hover {\n        background-color: var(--wje-color-success-1);\n        border-color: var(--wje-color-success-9);\n        color: var(--wje-color-success-9);\n        outline-color: var(--wje-color-success-2);\n    }\n\n    .wje-button-link.wje-color-success:hover {\n        background-color: var(--wje-color-success-1);\n        border-color: transparent;\n        color: var(--wje-color-success-9);\n        outline-color: transparent;\n        outline-width: 0;\n    }\n\n    .wje-button-solid.wje-color-warning:hover {\n        background-color: var(--wje-color-warning-9);\n        border-color: var(--wje-color-warning-9);\n        color: var(--wje-color-black);\n        outline-color: var(--wje-color-warning-2);\n    }\n\n    .wje-button-outline.wje-color-warning:hover {\n        background-color: var(--wje-color-warning-1);\n        border-color: var(--wje-color-warning-11);\n        color: var(--wje-color-warning-11);\n        outline-color: var(--wje-color-warning-2);\n    }\n\n    .wje-button-link.wje-color-warning:hover {\n        background-color: var(--wje-color-warning-1);\n        border-color: transparent;\n        color: var(--wje-color-warning-11);\n        outline-color: transparent;\n        outline-width: 0;\n    }\n\n    .wje-button-solid.wje-color-danger:hover {\n        background-color: var(--wje-color-danger-9);\n        border-color: var(--wje-color-danger-9);\n        color: var(--wje-color-contrast-0);\n        outline-color: var(--wje-color-danger-2);\n    }\n\n    .wje-button-outline.wje-color-danger:hover {\n        background-color: var(--wje-color-danger-1);\n        border-color: var(--wje-color-danger-9);\n        color: var(--wje-color-danger-9);\n        outline-color: var(--wje-color-danger-2);\n    }\n\n    .wje-button-link.wje-color-danger:hover {\n        background-color: var(--wje-color-danger-1);\n        border-color: transparent;\n        color: var(--wje-color-danger-9);\n        outline-color: transparent;\n        outline-width: 0;\n    }\n\n    .wje-button-solid.wje-color-info:hover {\n        background-color: var(--wje-color-contrast-9);\n        border-color: var(--wje-color-contrast-9);\n        color: var(--wje-color-contrast-0);\n        outline-color: var(--wje-color-contrast-3);\n    }\n\n    .wje-button-outline.wje-color-info:hover {\n        background-color: var(--wje-color-contrast-1);\n        border-color: var(--wje-color-contrast-9);\n        color: var(--wje-color-contrast-9);\n        outline-color: var(--wje-color-contrast-3);\n    }\n\n    .wje-button-link.wje-color-info:hover {\n        background-color: var(--wje-color-contrast-3);\n        border-color: transparent;\n        color: var(--wje-color-contrast-11);\n        outline-color: transparent;\n        outline-width: 0;\n    }\n\n    .wje-button-solid.wje-color-default:hover {\n        background-color: var(--wje-color-contrast-0);\n        border-color: var(--wje-color-contrast-3);\n        color: var(--wje-color-contrast-11);\n        outline-color: var(--wje-color-contrast-3);\n    }\n\n    .wje-button-outline.wje-color-default:hover {\n        background-color: var(--wje-color-contrast-2);\n        border-color: var(--wje-color-contrast-5);\n        color: var(--wje-color-contrast-11);\n        outline-color: var(--wje-color-contrast-3);\n    }\n\n    .wje-button-link.wje-color-default:hover {\n        background-color: var(--wje-color-contrast-3);\n        border-color: transparent;\n        color: var(--wje-color-contrast-11);\n        outline-color: transparent;\n        outline-width: 0;\n    }\n}\n\n.button-inner {\n    display: flex;\n    position: relative;\n    flex-flow: row nowrap;\n    flex-shrink: 0;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    line-height: normal;\n}\n\n/*\n[ Link ]\n*/\n\n.wje-button-link {\n    border-width: var(--wje-button-border-width);\n    border-radius: var(--wje-button-border-radius);\n    border-color: transparent;\n    background-color: transparent;\n}\n\n/*\n[ Disabled ]\n*/\n\n.wje-button-disabled {\n    cursor: default;\n    opacity: 0.5;\n    pointer-events: none;\n}\n\n/*\n[ Round ]\n*/\n\n:host([round]) .native-button {\n    border-radius: var(--wje-border-radius-pill);\n}\n\n:host([circle]) .native-button {\n    border-radius: var(--wje-border-radius-circle);\n    aspect-ratio: 1/1;\n    width: 1.813rem;\n    display: flex;\n    align-items: center;\n    --wje-padding-top: 0;\n    --wje-padding-start: 0;\n    --wje-padding-end: 0;\n    --wje-padding-bottom: 0;\n}\n\n:host([size='small']) .native-button {\n    --wje-padding-top: 0.25rem;\n    --wje-padding-start: 0.25rem;\n    --wje-padding-end: 0.25rem;\n    --wje-padding-bottom: 0.25rem;\n}\n\n:host([size='large']) .native-button {\n    --wje-padding-top: 0.6rem;\n    --wje-padding-start: 0.7rem;\n    --wje-padding-end: 0.7rem;\n    --wje-padding-bottom: 0.6rem;\n}\n\n:host([size='small'][circle]) .native-button {\n    width: 1.5rem;\n    --wje-padding-top: 0;\n    --wje-padding-start: 0;\n    --wje-padding-end: 0;\n    --wje-padding-bottom: 0;\n}\n\n:host([size='large'][circle]) .native-button {\n    width: 2.188rem;\n    --wje-padding-top: 0;\n    --wje-padding-start: 0;\n    --wje-padding-end: 0;\n    --wje-padding-bottom: 0;\n}\n\n::slotted(wje-icon[slot='start']) {\n    margin: 0 0.3rem 0 0;\n}\n\n::slotted(wje-icon[slot='end']) {\n    margin: 0 -0.2rem 0 0.3rem;\n}\n\n:host(:not([only-caret])) slot[name='caret'] {\n    padding: 0 0 0 0.3rem;\n}\n\n:host([only-caret]) slot[name='caret'] {\n    padding: 0;\n    display: block;\n}\n\n:host(.wje-button-group-first:not(.wje-button-group-last)) .native-button {\n    border-start-end-radius: 0;\n    border-end-end-radius: 0;\n}\n\n:host(.wje-button-group-inner) .native-button {\n    border-radius: 0;\n}\n\n:host(.wje-button-group-last:not(.wje-button-group-first)) .native-button {\n    border-start-start-radius: 0;\n    border-end-start-radius: 0;\n}\n\n:host(.wje-button-group-button:not(.wje-button-group-first)) {\n    margin-inline-start: calc(-1 * var(--wje-button-border-width)) !important;\n}\n\n::slotted([slot='toggle']) {\n    display: none;\n}\n\n::slotted([slot='toggle'].show) {\n    display: block;\n}\n";
class Button extends WJElement {
  /**
   * Button constructor method.
   * @class
   */
  constructor() {
    super();
    /**
     * Dependencies of the Button element.
     * @type {object}
     */
    __publicField(this, "dependencies", {
      "wje-icon": Icon
    });
    /**
     * Class name for the Button element
     * @type {string}
     */
    __publicField(this, "className", "Button");
    /**
     * Event dialog open method for the Button element.
     * @param {Event} e The event object
     */
    __publicField(this, "eventDialogOpen", (e) => {
      event.dispatchCustomEvent(this, this.dialog);
    });
    /**
     * Toggle states method for the Button element.
     */
    __publicField(this, "toggleStates", () => {
      const nodes = this.slotToggle.assignedNodes().filter((node) => node.nodeType === Node.ELEMENT_NODE);
      nodes.forEach((node, index) => {
        if (node.classList.contains("show")) {
          node.classList.remove("show");
        } else {
          node.classList.add("show");
          this.setAttribute("value", index === 0 ? "on" : "off");
        }
      });
    });
    this.internals_ = this.attachInternals();
  }
  /**
   * Properties of the element Button.
   * @param value
   */
  set color(value) {
    this.setAttribute("color", value || "default");
  }
  /**
   * Get color of the Button element.
   * @returns {string|string}
   */
  get color() {
    return this.getAttribute("color") || "default";
  }
  /**
   * Set variant of the Button element.
   * @param value
   */
  set caret(value) {
    this.setAttribute("caret", value);
  }
  /**
   * Get variant of the Button element.
   * @returns {boolean}
   */
  get caret() {
    return this.hasAttribute("caret");
  }
  /**
   * Set variant of the Button element.
   * @param value
   */
  set tooltip(value) {
    this.setAttribute("tooltip", value);
  }
  /**
   * Get variant of the Button element.
   * @returns {boolean}
   */
  get tooltip() {
    return this.hasAttribute("tooltip");
  }
  /**
   * Set variant of the Button element.
   * @param value
   */
  set dialog(value) {
    this.setAttribute("dialog", value);
  }
  /**
   * Get variant of the Button element.
   * @returns {string|object}
   */
  get dialog() {
    return this.getAttribute("dialog");
  }
  /**
   * Set active state of the Button element.
   * @param {boolean} value The value to set
   */
  set active(value) {
    this.setAttribute("active", "");
  }
  /**
   * Get active state of the Button element.
   * @returns {boolean} active - The active state
   */
  get active() {
    return this.hasAttribute("active");
  }
  /**
   * Set disabled state of the Button element.
   * @param {boolean} value The value to set
   */
  set disabled(value) {
    if (value) this.setAttribute("disabled", "");
    else this.removeAttribute("disabled");
  }
  /**
   * Get disabled state of the Button element.
   * @returns {boolean} disabled - The disabled state
   */
  get disabled() {
    return this.hasAttribute("disabled");
  }
  /**
   * Set fill of the Button element.
   * @param {string} value The value to set
   */
  set fill(value) {
    this.setAttribute("fill", value);
  }
  /**
   * Get fill of the Button element.
   * @returns {string} fill - The fill value
   */
  get fill() {
    return this.getAttribute("fill") || "solid";
  }
  /**
   * Set outline state of the Button element.
   * @param {boolean} value The value to set
   */
  set outline(value) {
    this.setAttribute("outline", "");
  }
  /**
   * Get outline state of the Button element.
   * @returns {boolean} outline - The outline state
   */
  get outline() {
    return this.hasAttribute("outline");
  }
  /**
   * Set stop propagation state of the Button element.
   * @param {boolean} value The value to set
   */
  set stopPropagation(value) {
    this.setAttribute("stop-propagation", bool(value));
  }
  /**
   * Get stop propagation state of the Button element.
   * @returns {boolean} stopPropagation - The stop propagation state
   */
  get stopPropagation() {
    return bool(this.getAttribute("stop-propagation"));
  }
  /**
   * Get CSS stylesheet for the Button element.
   * @static
   * @returns {CSSStyleSheet} styles - The CSS stylesheet for the Button element.
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Get observed attributes for the Button element.
   * @static
   * @returns {Array<string>} observedAttributes - The observed attributes array for the Button element.
   */
  static get observedAttributes() {
    return ["disabled"];
  }
  /**
   * @summary Callback function that is called when the custom element is associated with a form.
   * This function sets the internal `_form` property to the associated form.
   * @param {HTMLFormElement} form The form the custom element is associated with.
   */
  formAssociatedCallback(form) {
    this._form = form;
  }
  /**
   * @summary Callback function that is called when the form-associated state of the custom element changes.
   * This function updates the 'disabled' attribute of the element based on the new state.
   * @param {boolean} disabled The new form-associated state.
   */
  formDisabledCallback(disabled) {
    if (disabled) {
      this.setAttribute("disabled", "");
    } else {
      this.removeAttribute("disabled");
    }
  }
  /**
   * Setup attributes for the Button element.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draw method for the Button element.
   * @returns {object} fragment - The document fragment containing the drawn element.
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement(this.hasAttribute("href") ? "a" : "button");
    if (this.hasAttribute("href")) {
      native.setAttribute("href", this.getAttribute("href"));
    } else {
      if (this.type === "submit") {
        native.setAttribute("type", "submit");
      }
    }
    native.classList.add("native-button");
    native.setAttribute("part", "native");
    this.classList.remove("wje-button-disabled");
    if (this.disabled) native.classList.add("wje-button-disabled");
    if (this.variant) native.classList.add("wje-button-" + this.variant);
    if (this.hasAttribute("round")) native.classList.add("wje-button-round");
    if (this.hasAttribute("circle")) native.classList.add("wje-button-circle");
    if (this.outline) native.classList.add("wje-outline");
    if (this.fill) native.classList.add("wje-button-" + this.fill);
    if (this.size) native.classList.add("wje-button-" + this.size);
    if (this.querySelectorAll("[slot=caret]").length < 1 && this.hasAttribute("caret") || this.hasAttribute("only-caret")) {
      let i = document.createElement("wje-icon");
      i.style.setProperty("--wje-icon-size", "14px");
      i.setAttribute("slot", "caret");
      i.setAttribute("name", "chevron-down");
      i.setAttribute("part", "caret");
      this.appendChild(i);
    }
    if (this.active) {
      this.classList.add("wje-active");
      let i = document.createElement("wje-icon");
      i.setAttribute("name", "check");
      this.appendChild(i);
    }
    native.classList.add("wje-color-" + this.color, "wje-color");
    let span = document.createElement("span");
    span.setAttribute("part", "inner");
    span.classList.add("button-inner");
    let slot = document.createElement("slot");
    slot.setAttribute("name", "icon-only");
    span.appendChild(slot);
    slot = document.createElement("slot");
    slot.setAttribute("name", "start");
    span.appendChild(slot);
    slot = document.createElement("slot");
    span.appendChild(slot);
    slot = document.createElement("slot");
    slot.setAttribute("name", "end");
    span.appendChild(slot);
    slot = document.createElement("slot");
    slot.setAttribute("name", "caret");
    span.appendChild(slot);
    this.hasToggle = WjElementUtils.hasSlot(this, "toggle");
    if (this.hasToggle) {
      this.slotToggle = document.createElement("slot");
      this.slotToggle.setAttribute("name", "toggle");
      span.appendChild(this.slotToggle);
    }
    native.appendChild(span);
    if (this.tooltip) {
      let tooltip = document.createElement("wje-tooltip");
      tooltip.setAttribute("content", this.getAttribute("tooltip"));
      tooltip.setAttribute("placement", this.getAttribute("tooltip-placement") || "top");
      tooltip.appendChild(native);
      fragment.appendChild(tooltip);
    } else {
      fragment.appendChild(native);
    }
    return fragment;
  }
  /**
   * After draw method for the Button element.
   */
  afterDraw() {
    if (this.hasAttribute("route")) {
      this.unbindRouterLinks = bindRouterLinks(this.parentElement, { selector: false });
    }
    if (this.hasToggle) {
      if (this.toggle === "off") {
        this.slotToggle.assignedNodes()[1].classList.add("show");
        this.setAttribute("value", "off");
      } else {
        this.slotToggle.assignedNodes()[0].classList.add("show");
        this.setAttribute("value", "on");
      }
    }
    if (this.hasAttribute("dialog")) {
      event.addListener(this, "click", null, this.eventDialogOpen);
    } else {
      event.addListener(this, "click", "wje-button:click", null);
    }
    if (this.hasToggle)
      event.addListener(this, "click", "wje-button:toggle", this.toggleStates, {
        stopPropagation: this.stopPropagation
      });
    if (this.type === "submit") {
      event.addListener(this, "click", "wje-button:submit", () => {
        console.log("submit", this.internals_.form);
        event.dispatchCustomEvent(this.internals_.form, "submit", {});
      });
    }
    if (this.type === "reset") {
      event.addListener(this, "click", "wje-button:reset", () => {
        this.internals_.form.reset();
      });
    }
  }
  /**
   * Before disconnect method for the Button element.
   */
  beforeDisconnect() {
    var _a;
    this.removeEventListener("click", this.eventDialogOpen);
    (_a = this.unbindRouterLinks) == null ? void 0 : _a.call(this);
  }
}
/**
 * @summary A static property that indicates whether the custom element is form-associated or not.
 * Form-associated custom elements are elements that can participate in form submission.
 * @type {boolean}
 */
__publicField(Button, "formAssociated", true);
Button.define("wje-button", Button);
export {
  Button as default
};
