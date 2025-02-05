var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement, { event } from "./wje-element.js";
import "./wje-icon.js";
const styles = "/*\n[ WJ Dialog ]\n*/\n\n:host {\n    --wje-dialog-header-actions-gap: 0.5rem;\n\n    .close {\n        margin-left: auto;\n    }\n\n    .header-actions {\n        margin-left: auto;\n        display: flex;\n        align-items: center;\n        gap: var(--wje-dialog-header-actions-gap);\n    }\n\n    .modal-content {\n        border-radius: 3px;\n        box-shadow: none;\n    }\n\n    .dialog-header {\n        position: relative;\n        border-bottom: 0;\n        padding-inline: var(--wje-dialog-padding);\n        padding-top: var(--wje-dialog-padding);\n        padding-bottom: var(--wje-dialog-padding);\n        display: flex;\n        align-items: center;\n        span {\n            font-family: var(--wje-font-family-secondary);\n            font-size: 10.5px;\n            text-transform: uppercase;\n            display: inline-block;\n            letter-spacing: 0.06em;\n            font-weight: 500;\n            margin: 0;\n            padding: 0;\n            line-height: normal;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            filter: alpha(opacity=40);\n        }\n    }\n\n    .dialog-content {\n        box-shadow: none;\n        padding-inline: var(--wje-dialog-padding);\n        white-space: normal;\n        z-index: 1;\n    }\n\n    .dialog-footer {\n        display: flex;\n        justify-content: end;\n        border-top: none;\n        box-shadow: none;\n        margin-top: 0;\n        padding-inline: var(--wje-dialog-padding-inline);\n        padding-top: var(--wje-dialog-padding-top);\n        padding-bottom: var(--wje-dialog-padding-bottom);\n    }\n}\n\ndialog::backdrop {\n    opacity: var(--wje-backdrop-opacity);\n    background-color: var(--wje-backdrop);\n}\n\ndialog:focus-visible {\n    outline: none;\n}\n\n:host(.separator) .dialog-header:after {\n    content: '';\n    height: 1px;\n    background: rgba(0, 0, 0, 0.08);\n    left: var(--wje-dialog-padding);\n    right: var(--wje-dialog-padding);\n    position: absolute;\n    bottom: 0;\n}\n\n:host {\n    dialog {\n        box-sizing: border-box;\n        transition: all 0.2s !important;\n        width: var(--wje-dialog-width);\n        height: var(--wje-dialog-height);\n        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n\n        border-radius: var(--wje-dialog-border-radius);\n        border-width: var(--wje-dialog-border-width);\n        border-style: var(--wje-dialog-border-style);\n        border-color: var(--wje-dialog-border-color);\n\n        margin-top: var(--wje-dialog-margin-top);\n\n        margin-bottom: var(--wje-dialog-margin-bottom);\n        margin-inline: var(--wje-dialog-margin-start) var(--wje-dialog-margin-end);\n\n        padding: 0;\n    }\n}\n\n/*Top*/\n:host(.stick-up) {\n    --wje-dialog-width: 300px !important;\n    --wje-dialog-height: fit-content;\n    --wje-dialog-border-radius: 0 0 8px 8px;\n    --wje-dialog-border-width: 0 1px 1px 1px;\n    --wje-dialog-margin-top: 0;\n    --wje-dialog-translate-from: translateY(-110%);\n    --wje-dialog-template-to: translateX(0);\n}\n\n/*Cenetered*/\n:host(.slide-up) {\n    --wje-dialog-width: 300px !important;\n    --wje-dialog-height: fit-content;\n    --wje-dialog-border-radius: 8px;\n    --wje-dialog-border-width: 1px;\n    --wje-dialog-opacity-from: 0;\n    --wje-dialog-translate-from: scale(0.9);\n    --wje-dialog-translate-to: scale(1);\n}\n\n/*Fullscreen*/\n:host(.fill-in) {\n    --wje-dialog-width: 100%;\n    --wje-dialog-height: 100%;\n    --wje-dialog-border-radius: 0 0 0 0 !important;\n    --wje-dialog-border-width: 0;\n    --wje-dialog-margin-top: 0;\n    --wje-dialog-margin-start: 0;\n    --wje-dialog-margin-end: 0;\n    --wje-dialog-margin-bottom: 0;\n    --wje-dialog-translate-from: scale(0.95);\n    --wje-dialog-translate-to: scale(1);\n    dialog {\n        min-width: var(--wje-dialog-width);\n        min-height: var(--wje-dialog-height);\n    }\n}\n\n/*Slide Left*/\n:host(.slide-left) {\n    --wje-dialog-width: 300px !important;\n    --wje-dialog-height: 100% !important;\n    --wje-dialog-border-radius: 0;\n    --wje-dialog-border-width: 0 1px 0 0;\n    --wje-dialog-margin-top: 0;\n    --wje-dialog-margin-start: 0;\n    --wje-dialog-margin-end: auto;\n    --wje-dialog-margin-bottom: 0;\n    dialog {\n        min-height: var(--wje-dialog-height);\n        --wje-dialog-translate-from: translateX(-110%);\n        --wje-dialog-template-to: translateX(0);\n    }\n}\n\n/*Slide Right*/\n:host(.slide-right) {\n    --wje-dialog-width: 300px !important;\n    --wje-dialog-height: 100% !important;\n    --wje-dialog-border-radius: 0;\n    --wje-dialog-border-width: 0 0 0 1px;\n    --wje-dialog-margin-top: 0;\n    --wje-dialog-margin-start: auto;\n    --wje-dialog-margin-end: 0;\n    --wje-dialog-margin-bottom: 0;\n    dialog {\n        min-height: var(--wje-dialog-height);\n        --wje-dialog-translate-from: translateX(110%);\n        --wje-dialog-template-to: translateX(0);\n    }\n}\n\n:host(.small) {\n    --wje-dialog-width: 300px !important;\n}\n\n:host(.medium) {\n    --wje-dialog-width: 500px !important;\n}\n\n:host(.large) {\n    --wje-dialog-width: 600px !important;\n}\n\n:host(.ex-large) {\n    --wje-dialog-width: 900px !important;\n}\n\ndialog[open] {\n    animation: show 0.5s ease normal;\n}\n\n@keyframes show {\n    from {\n        opacity: var(--wje-dialog-opacity-from, 1);\n        transform: var(--wje-dialog-translate-from);\n    }\n    to {\n        opacity: 1;\n        transform: var(--wje-dialog-translate-to);\n    }\n}\n";
class Dialog extends WJElement {
  /**
   * @class
   */
  constructor() {
    super();
    /**
     * Sets the headline of the dialog.
     * @type {string}
     */
    __publicField(this, "className", "Dialog");
    /**
     * Opens the dialog.
     * @param e
     */
    __publicField(this, "onOpen", (e) => {
      this.dialog.innerHTML = "";
      Promise.resolve(this.beforeOpen(this, e)).then((res) => {
        this.htmlDialogBody(this.dialog);
        this.dialog.showModal();
        if (this.dialog.open) {
          Promise.resolve(this.afterOpen(this, e));
        }
      });
    });
    /**
     * Closes the dialog.
     * @param {object} e
     */
    __publicField(this, "onClose", (e) => {
      Promise.resolve(this.beforeClose(this, e)).then((res) => {
        this.dialog.close();
        if (this.dialog.open) {
          Promise.resolve(this.afterClose(this, e));
        }
      });
    });
  }
  /**
   * Sets the headline of the dialog.
   * @param value
   */
  set placement(value) {
    this.setAttribute("placement", value);
  }
  /**
   * Gets the headline of the dialog.
   * @returns {string|string}
   */
  get placement() {
    return this.getAttribute("placement") || "slide-up";
  }
  /**
   * Sets the headline of the dialog.
   * @param value
   */
  set async(value) {
    this.setAttribute("async", "");
  }
  /**
   * Gets the headline of the dialog.
   * @returns {boolean}
   */
  get async() {
    return this.hasAttribute("async");
  }
  /**
   * Sets the headline of the dialog.
   * @param value
   */
  set closeHidden(value) {
    if (value) this.setAttribute("close-hidden", "");
  }
  /**
   * Gets the headline of the dialog.
   * @returns {boolean}
   */
  get closeHidden() {
    return !!this.hasAttribute("close-hidden");
  }
  /**
   * Returns the CSS styles for the component.
   * @returns {*}
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Returns the list of attributes to observe for changes.
   * @returns {*[]}
   */
  static get observedAttributes() {
    return [];
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
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
    this.classList.add("fade", this.placement, params.size);
    let dialog = document.createElement("dialog");
    dialog.classList.add("modal-dialog");
    fragment.appendChild(dialog);
    this.dialog = dialog;
    return fragment;
  }
  /**
   * Creates the dialog body.
   * @param dialog
   */
  htmlDialogBody(dialog) {
    let icon = document.createElement("wje-icon");
    icon.setAttribute("name", "x");
    icon.setAttribute("slot", "icon-only");
    let close = document.createElement("wje-button");
    close.setAttribute("fill", "link");
    close.setAttribute("size", "small");
    close.setAttribute("part", "close");
    close.addEventListener("click", (e) => {
      this.close(e);
    });
    close.appendChild(icon);
    let header = document.createElement("div");
    header.setAttribute("part", "header");
    header.classList.add("dialog-header");
    if (this.hasAttribute("headline"))
      header.innerHTML = `<span part="headline">${this.getAttribute("headline")}</span>`;
    let slotHeader = document.createElement("slot");
    slotHeader.setAttribute("name", "header");
    const headerActions = document.createElement("div");
    headerActions.classList.add("header-actions");
    headerActions.setAttribute("part", "header-actions");
    headerActions.appendChild(slotHeader);
    header.appendChild(headerActions);
    if (!this.closeHidden) header.appendChild(close);
    let contentSlot = document.createElement("slot");
    let body = document.createElement("div");
    body.setAttribute("part", "body");
    body.classList.add("dialog-content");
    body.appendChild(contentSlot);
    let footer = document.createElement("div");
    footer.setAttribute("part", "footer");
    footer.classList.add("dialog-footer");
    footer.innerHTML = "";
    let slotFooter = document.createElement("slot");
    slotFooter.setAttribute("name", "footer");
    footer.appendChild(slotFooter);
    dialog.appendChild(header);
    dialog.appendChild(body);
    dialog.appendChild(footer);
  }
  /**
   * Closes the dialog.
   * @param e
   */
  close(e) {
    this.onClose(e);
  }
  /**
   * Draws the component after it has been drawn.
   * @param {object} context The context for drawing.
   * @param {object} store The store for drawing.
   * @param {object} params The parameters for drawing.
   */
  afterDraw(context, store, params) {
    if (params.trigger) {
      event.addListener(document, params.trigger, null, this.onOpen);
    }
    this.dialog.addEventListener("close", this.onClose);
  }
  /**
   * Before the component is disconnected.
   */
  beforeDisconnect() {
    var _a, _b;
    if ((_a = this.params) == null ? void 0 : _a.trigger) {
      event.removeListener(document, (_b = this.params) == null ? void 0 : _b.trigger, null, this.onOpen);
    }
    this.dialog.removeEventListener("close", this.onClose);
  }
  /**
   * Before the dialog opens.
   */
  beforeOpen() {
  }
  /**
   * After the dialog opens.
   */
  afterOpen() {
  }
  /**
   * Before the dialog closes.
   */
  beforeClose() {
  }
  /**
   * After the dialog closes.
   */
  afterClose() {
  }
}
Dialog.define("wje-dialog", Dialog);
export {
  Dialog as default
};
