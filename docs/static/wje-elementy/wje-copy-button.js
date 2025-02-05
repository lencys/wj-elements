var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement, { WjElementUtils, event } from "./wje-element.js";
import Input from "./wje-input.js";
function createNode(text) {
  const node = document.createElement("pre");
  node.style.width = "1px";
  node.style.height = "1px";
  node.style.position = "fixed";
  node.style.top = "5px";
  node.textContent = text;
  return node;
}
function copyNode(node) {
  if ("clipboard" in navigator) {
    return navigator.clipboard.writeText(node.textContent || "");
  }
  const selection = getSelection();
  if (selection === null) {
    return Promise.reject(new Error());
  }
  selection.removeAllRanges();
  const range = document.createRange();
  range.selectNodeContents(node);
  selection.addRange(range);
  selection.removeAllRanges();
  return Promise.resolve();
}
function copyText(text) {
  if ("clipboard" in navigator) {
    return navigator.clipboard.writeText(text);
  }
  const body = document.body;
  if (!body) {
    return Promise.reject(new Error());
  }
  const node = createNode(text);
  body.appendChild(node);
  copyNode(node);
  body.removeChild(node);
  return Promise.resolve();
}
const styles = "/*\n[ Wj Copy Button ]\n*/\n\n:host {\n    cursor: pointer;\n    padding: 0.5rem;\n}\n";
class CopyButton extends WJElement {
  /**
   * Constructor for the CopyButton class.
   * Initializes the timeout property.
   */
  constructor() {
    super();
    __publicField(this, "className", "CopyButton");
    /**
     * Handles the click event.
     * @param {Event} e The event object.
     */
    __publicField(this, "clicked", (e) => {
      const button = e.currentTarget;
      if (button instanceof HTMLElement) {
        this.copy(button);
      }
    });
    /**
     * Handles the keydown event.
     * @param {Event} e The event object.
     */
    __publicField(this, "keydown", (e) => {
      if (e.key === " " || e.key === "Enter") {
        const button = e.currentTarget;
        if (button instanceof HTMLElement) {
          this.copy(button);
        }
      }
    });
    /**
     * Handles the focus event.
     * @param {Event} e The event object.
     */
    __publicField(this, "focused", (e) => {
      e.currentTarget.addEventListener("keydown", this.keydown);
    });
    /**
     * Handles the blur event.
     * @param {Event} e The event object.
     */
    __publicField(this, "blurred", (e) => {
      e.currentTarget.removeEventListener("keydown", this.keydown);
    });
    /**
     * Handles the copied event.
     * You can override this method to customize the behavior when the text is copied.
     * @param {Event} e The event object.
     */
    __publicField(this, "copied", (e) => {
      if (this.hasOwnProperty("icon")) {
        this.icon.setAttribute("color", "success");
        this.icon.setAttribute("name", "check");
      }
      this.tooltip.setAttribute("content", this.labelSuccess || "Copied");
      setTimeout(() => {
        console.log("TIMEOUT", this.hasOwnProperty("icon"));
        if (this.hasOwnProperty("icon")) {
          this.icon.removeAttribute("color");
          this.icon.setAttribute("name", "clipboard");
        }
        this.tooltip.setAttribute("content", this.label || "Copy");
      }, this.timeout);
    });
    this.timeout = 1e3;
  }
  /**
   * Setter for the value property.
   * @param {string} value The value to be set.
   */
  set value(value) {
    this.setAttribute("value", value);
  }
  /**
   * Getter for the value property.
   * @returns {string} The value of the value property.
   */
  get value() {
    return this.getAttribute("value") || "";
  }
  /**
   * Getter for the cssStyleSheet property.
   * @returns {string} The CSS styles.
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Getter for the observedAttributes property.
   * @returns {Array} An empty array.
   */
  static get observedAttributes() {
    return [];
  }
  /**
   * Sets up the attributes for the CopyButton.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draws the ColorPicker element.
   * @returns {DocumentFragment} The created document fragment.
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let tooltip = document.createElement("wje-tooltip");
    tooltip.setAttribute("offset", "5");
    tooltip.setAttribute("content", this.label || "Copy");
    if (WjElementUtils.hasSlot(this)) {
      let slot = document.createElement("slot");
      tooltip.appendChild(slot);
    } else {
      let icon = document.createElement("wje-icon");
      icon.setAttribute("name", "clipboard");
      tooltip.appendChild(icon);
      this.icon = icon;
    }
    fragment.appendChild(tooltip);
    this.tooltip = tooltip;
    return fragment;
  }
  /**
   * Adds event listeners for the click, focus, and blur events.
   */
  afterDraw() {
    event.addListener(this, "click", null, this.clicked);
    event.addListener(this, "focus", null, this.focused);
    event.addListener(this, "blur", null, this.blurred);
    event.addListener(this, "wje-copy-button:click", null, this.copied);
  }
  /**
   * Copies the specified text or node.
   * @param {HTMLElement} button The button element.
   */
  async copy(button) {
    const id = this.getAttribute("for");
    const text = this.getAttribute("value");
    if (button.getAttribute("aria-disabled") === "true") {
      return;
    }
    if (text) {
      await copyText(text);
      event.dispatchCustomEvent(this, "wje-copy-button:click");
    } else if (id) {
      const root = "getRootNode" in Element.prototype ? button.getRootNode() : button.ownerDocument;
      if (!(root instanceof Document || "ShadowRoot" in window && root instanceof ShadowRoot)) return;
      const node = root.getElementById(id);
      if (node) {
        await this.copyTarget(node);
        event.dispatchCustomEvent(this, "wje-copy-button:click");
      }
    }
  }
  /**
   * Copies the target content.
   * @param {HTMLElement} content The content to be copied.
   * @returns {Promise} A promise that resolves when the content is copied.
   */
  copyTarget(content) {
    if (content instanceof HTMLInputElement || content instanceof HTMLTextAreaElement || content instanceof Input) {
      return copyText(content.value);
    } else if (content instanceof HTMLAnchorElement && content.hasAttribute("href")) {
      return copyText(content.href);
    } else {
      return copyNode(content);
    }
  }
}
CopyButton.define("wje-copy-button", CopyButton);
export {
  CopyButton as default
};
