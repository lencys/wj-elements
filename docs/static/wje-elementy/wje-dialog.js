var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
import { event } from "./event.js";
const styles = `/*
[ WJ Dialog ]
*/

:host {
    --wje-dialog-header-actions-gap: 0.5rem;

    .close {
        margin-left: auto;
    }

    .header-actions {
        margin-left: auto;
        display: flex;
        align-items: center;
        gap: var(--wje-dialog-header-actions-gap);
    }

    .modal-content {
        border-radius: 3px;
        box-shadow: none;
    }

    .dialog-header {
        position: relative;
        border-bottom: 0;
        padding-inline: var(--wje-dialog-header-padding-inline);
        padding-block: var(--wje-dialog-header-padding-block);
        display: grid;
        grid-template-columns: 1fr auto auto; /* headline vľavo, button vpravo */
        grid-template-rows: auto;  /* horný riadok, potom header-actions */
        align-items: center;
        gap: 0.5rem;
        > span[part="headline"] {
            font-family: var(--wje-font-family-secondary);
            font-size: var(--wje-dialog-headline-font-size);
            text-transform: var(--wje-dialog-headline-text-transform);
            display: inline-block;
            letter-spacing: var(--wje-dialog-headline-letter-spacing);
            font-weight: var(--wje-dialog-headline-font-weight);
            margin: 0;
            padding: 0;
            line-height: normal;
            overflow: hidden;
            text-overflow: ellipsis;
            filter: alpha(opacity=40);

            grid-column: 1;
        }

         > wje-button[part="close"] {
            grid-column: 3;
            grid-row: 1;
            justify-self: end;
        }

         > .header-actions {
            grid-column: 2;
            grid-row: 1;
        }
    }

    .dialog-content {
        box-shadow: none;
        padding-inline: var(--wje-dialog-content-padding-inline);
        padding-block: var(--wje-dialog-content-padding-block);
        white-space: normal;
        z-index: 1;
    }

    .dialog-footer {
        display: flex;
        justify-content: end;
        border-top: none;
        box-shadow: none;
        margin-top: 0;
        padding-inline: var(--wje-dialog-footer-padding-inline);
        padding-block: var(--wje-dialog-footer-padding-block);
    }

    /* Footer should not take space when nothing is slotted */
    .dialog-footer[hidden] {
        display: none;
        padding-inline: 0;
        padding-block: 0;
    }
}

.blocking-element {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wje-color-contrast-0);
    opacity: 0.75;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    wje-icon {
        animation: loader 1s linear infinite;
    }
}

@keyframes loader {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

dialog::backdrop {
    opacity: var(--wje-backdrop-opacity);
    background-color: var(--wje-backdrop);
}

dialog:focus-visible {
    outline: none;
}

:host(.separator) .dialog-header:after {
    content: '';
    height: 1px;
    background: rgba(0, 0, 0, 0.08);
    left: var(--wje-dialog-padding);
    right: var(--wje-dialog-padding);
    position: absolute;
    bottom: 0;
}

:host {
    dialog {
        background: var(--wje-dialog-background);
        box-sizing: border-box;
        transition: all 0.2s !important;
        width: var(--wje-dialog-width);
        height: var(--wje-dialog-height);
        box-shadow: var(--wje-shadow-large);

        border-radius: var(--wje-dialog-border-radius);
        border-width: var(--wje-dialog-border-width);
        border-style: var(--wje-dialog-border-style);
        border-color: var(--wje-dialog-border-color);

        margin-top: var(--wje-dialog-margin-top);

        margin-bottom: var(--wje-dialog-margin-bottom);
        margin-inline: var(--wje-dialog-margin-start) var(--wje-dialog-margin-end);

        padding: 0;
    }
}


/*Top*/
:host(.stick-up) {
    --wje-dialog-width: 300px;
    --wje-dialog-height: fit-content;
    --wje-dialog-border-radius: 0 0 var(--wje-border-radius-large) var(--wje-border-radius-large);
    --wje-dialog-border-width: 0 1px 1px 1px;
    --wje-dialog-margin-top: 0;
    --wje-dialog-translate-from: translateY(-110%);
    --wje-dialog-template-to: translateX(0);
}

/*Cenetered*/
:host(.slide-up) {
    --wje-dialog-width: 300px;
    --wje-dialog-height: fit-content;
    --wje-dialog-border-radius: var(--wje-border-radius-large);
    --wje-dialog-border-width: 1px;
    --wje-dialog-opacity-from: 0;
    --wje-dialog-translate-from: scale(0.9);
    --wje-dialog-translate-to: scale(1);
}

/*Fullscreen*/
:host(.fill-in) {
    --wje-dialog-width: 100%;
    --wje-dialog-height: 100%;
    --wje-dialog-border-radius: 0 0 0 0 !important;
    --wje-dialog-border-width: 0;
    --wje-dialog-margin-top: 0;
    --wje-dialog-margin-start: 0;
    --wje-dialog-margin-end: 0;
    --wje-dialog-margin-bottom: 0;
    --wje-dialog-translate-from: scale(0.95);
    --wje-dialog-translate-to: scale(1);
    dialog {
        min-width: var(--wje-dialog-width);
        min-height: var(--wje-dialog-height);
    }
}

/*Slide Left*/
:host(.slide-left) {
    --wje-dialog-width: 300px;
    --wje-dialog-height: 100%;
    --wje-dialog-border-radius: 0;
    --wje-dialog-border-width: 0 1px 0 0;
    --wje-dialog-margin-top: 0;
    --wje-dialog-margin-start: 0;
    --wje-dialog-margin-end: auto;
    --wje-dialog-margin-bottom: 0;
    dialog {
        min-height: var(--wje-dialog-height);
        --wje-dialog-translate-from: translateX(-110%);
        --wje-dialog-template-to: translateX(0);
    }
}

/*Slide Right*/
:host(.slide-right) {
    --wje-dialog-width: 300px !important;
    --wje-dialog-height: 100% !important;
    --wje-dialog-border-radius: 0;
    --wje-dialog-border-width: 0 0 0 1px;
    --wje-dialog-margin-top: 0;
    --wje-dialog-margin-start: auto;
    --wje-dialog-margin-end: 0;
    --wje-dialog-margin-bottom: 0;
    dialog {
        min-height: var(--wje-dialog-height);
        --wje-dialog-translate-from: translateX(110%);
        --wje-dialog-template-to: translateX(0);
    }
}

:host(.small) {
    --wje-dialog-width: 300px !important;
}

:host(.medium) {
    --wje-dialog-width: 500px !important;
}

:host(.large) {
    --wje-dialog-width: 600px !important;
}

:host(.ex-large) {
    --wje-dialog-width: 900px !important;
}

dialog[open] {
    animation: show 0.5s ease normal;
}

@keyframes show {
    from {
        opacity: var(--wje-dialog-opacity-from, 1);
        transform: var(--wje-dialog-translate-from);
    }
    to {
        opacity: 1;
        transform: var(--wje-dialog-translate-to);
    }
}

:host(.scroll-body) {
    dialog[open] {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    .dialog-content {
        overflow: auto;
        padding-block: 0;
        margin-block: var(--wje-dialog-content-padding-block);
    }
}
`;
const _Dialog = class _Dialog extends WJElement {
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
      if (this.dialog) {
        this.dialog.innerHTML = "";
      }
      setTimeout(() => {
        Promise.resolve(this.beforeOpen(this, e)).then((res) => {
          this.htmlDialogBody(this.dialog);
          this.dialog.showModal();
          if (this.dialog.open) {
            Promise.resolve(this.afterOpen(this, e));
          }
        });
      }, 0);
    });
    /**
     * Closes the dialog.
     * @param {object} e
     */
    __publicField(this, "onClose", (e) => {
      Promise.resolve(this.beforeClose(this, e)).then((res) => {
        this.dialog.close();
        if (!this.dialog.open) {
          Promise.resolve(this.afterClose(this, e));
        }
      });
    });
    this._instanceId = ++_Dialog._instanceId;
  }
  /**
   * Sets the value of the 'headline' attribute.
   * @param {string} value The new value for the 'headline' attribute.
   */
  set headline(value) {
    this.setAttribute("headline", value);
  }
  /**
   * Retrieves the value of the "headline" attribute from the element.
   * If the "headline" attribute is not present, returns an empty string.
   * @returns {string} The headline attribute value or an empty string if not set.
   */
  get headline() {
    return this.getAttribute("headline") || "";
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
  set hiddenHeader(value) {
    if (value) this.setAttribute("hidden-header", "");
  }
  get hiddenHeader() {
    return !!this.hasAttribute("hidden-header");
  }
  set hiddenFooter(value) {
    if (value) this.setAttribute("hidden-footer", "");
  }
  get hiddenFooter() {
    return !!this.hasAttribute("hidden-footer");
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
    dialog.setAttribute("part", "dialog");
    dialog.classList.add("modal-dialog");
    fragment.appendChild(dialog);
    this.dialog = dialog;
    return fragment;
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
  }
  /**
   * Creates the dialog body.
   * @param dialog
   */
  htmlDialogBody(dialog) {
    const dialogId = this.id || `wje-dialog-${this._instanceId}`;
    let icon = document.createElement("wje-icon");
    icon.setAttribute("name", "x");
    icon.setAttribute("slot", "icon-only");
    let close = document.createElement("wje-button");
    close.setAttribute("fill", "link");
    close.setAttribute("size", "small");
    close.setAttribute("part", "close");
    close.setAttribute("aria-label", "Close dialog");
    close.addEventListener("click", (e) => {
      this.close(e);
    });
    let header = document.createElement("div");
    header.setAttribute("part", "header");
    header.classList.add("dialog-header");
    header.id = `${dialogId}-header`;
    if (this.hasAttribute("headline"))
      header.innerHTML = `<span part="headline">${this.headline}</span>`;
    let slotHeader = document.createElement("slot");
    slotHeader.setAttribute("name", "header");
    const headerActions = document.createElement("div");
    headerActions.classList.add("header-actions");
    headerActions.setAttribute("part", "header-actions");
    headerActions.appendChild(slotHeader);
    let contentSlot = document.createElement("slot");
    let body = document.createElement("div");
    body.setAttribute("part", "body");
    body.classList.add("dialog-content");
    body.id = `${dialogId}-body`;
    let footer = document.createElement("div");
    footer.setAttribute("part", "footer");
    footer.classList.add("dialog-footer");
    footer.innerHTML = "";
    let slotFooter = document.createElement("slot");
    slotFooter.setAttribute("name", "footer");
    slotFooter.id = "footerSlot";
    slotFooter.addEventListener("slotchange", () => this.updateHasFooter());
    close.appendChild(icon);
    if (!this.closeHidden) header.appendChild(close);
    header.appendChild(headerActions);
    body.appendChild(contentSlot);
    footer.appendChild(slotFooter);
    if (!this.hiddenHeader) dialog.appendChild(header);
    dialog.appendChild(body);
    if (!this.hiddenFooter) dialog.appendChild(footer);
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-modal", "true");
    dialog.setAttribute("aria-describedby", body.id);
    if (!this.hiddenHeader) {
      dialog.setAttribute("aria-labelledby", header.id);
    } else {
      dialog.removeAttribute("aria-labelledby");
    }
    const ariaState = {
      role: "dialog",
      modal: true,
      describedBy: body.id
    };
    if (!this.hiddenHeader) {
      ariaState.labelledBy = header.id;
      this.removeAttribute("aria-label");
    } else {
      this.removeAttribute("aria-labelledby");
      if (this.headline) {
        ariaState.label = this.headline;
      } else {
        this.removeAttribute("aria-label");
      }
    }
    this.setAriaState(ariaState);
    Promise.resolve().then(() => this.updateHasFooter());
  }
  /**
   * Closes the dialog.
   * @param e
   */
  close(e) {
    this.onClose(e);
  }
  /**
   * Before the component is disconnected.
   */
  beforeDisconnect() {
    var _a, _b;
    if ((_a = this.params) == null ? void 0 : _a.trigger) {
      event.removeListener(document, (_b = this.params) == null ? void 0 : _b.trigger, null, this.onOpen);
    }
  }
  /**
   * Before the dialog opens.
   */
  beforeOpen(dialog, trigger) {
  }
  /**
   * After the dialog opens.
   */
  afterOpen(dialog, trigger) {
  }
  /**
   * Before the dialog closes.
   */
  beforeClose(dialog, trigger) {
  }
  /**
   * After the dialog closes.
   */
  afterClose(dialog, trigger) {
  }
  /**
   * Registers an event listener on the provided button that triggers a blocking UI element
   * and executes a given promise when the button is clicked.
   * @param {HTMLElement} button The button element to attach the event listener to.
   * @param {Function} promise A function that returns a promise to be executed when the button is clicked.
   */
  registerBlockingEvent(button, promise) {
    button.addEventListener("wje-button:click", async (e) => {
      let blockingElement = document.createElement("div");
      blockingElement.classList.add("blocking-element");
      let icon = document.createElement("wje-icon");
      icon.setAttribute("name", "loader-2");
      icon.setAttribute("size", "2x-large");
      blockingElement.appendChild(icon);
      let scrollOffset = this.dialog.scrollTop;
      blockingElement.style.top = `${scrollOffset}px`;
      blockingElement.style.bottom = `-${scrollOffset}px`;
      this.dialog.appendChild(blockingElement);
      await promise().then((res) => {
        this.close();
        blockingElement.remove();
      }).catch((err) => {
        console.error(err);
        blockingElement.remove();
      });
    });
  }
  updateHasFooter() {
    var _a, _b, _c;
    if (this.hiddenFooter) {
      const footerEl2 = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(".dialog-footer");
      if (footerEl2) footerEl2.setAttribute("hidden", "");
      this.removeAttribute("has-footer");
      return;
    }
    const slot = (_b = this.shadowRoot) == null ? void 0 : _b.getElementById("footerSlot");
    if (!slot) {
      this.removeAttribute("has-footer");
      return;
    }
    const assigned = slot.assignedNodes({ flatten: true });
    const hasContent = assigned.some((n) => {
      if (n.nodeType === Node.ELEMENT_NODE) return true;
      if (n.nodeType === Node.TEXT_NODE) return n.textContent.trim().length > 0;
      return false;
    });
    const footerEl = (_c = this.shadowRoot) == null ? void 0 : _c.querySelector(".dialog-footer");
    if (footerEl) footerEl.toggleAttribute("hidden", !hasContent);
    this.toggleAttribute("has-footer", hasContent);
  }
};
__publicField(_Dialog, "_instanceId", 0);
let Dialog = _Dialog;
Dialog.define("wje-dialog", Dialog);
export {
  Dialog as default
};
//# sourceMappingURL=wje-dialog.js.map
