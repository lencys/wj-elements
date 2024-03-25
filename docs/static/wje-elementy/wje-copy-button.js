var h = Object.defineProperty;
var m = (o, e, t) => e in o ? h(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var r = (o, e, t) => (m(o, typeof e != "symbol" ? e + "" : e, t), t);
import f, { event as c } from "./wje-element.js";
import b from "./wje-input.js";
function y(o) {
  const e = document.createElement("pre");
  return e.style.width = "1px", e.style.height = "1px", e.style.position = "fixed", e.style.top = "5px", e.textContent = o, e;
}
function p(o) {
  if ("clipboard" in navigator)
    return navigator.clipboard.writeText(o.textContent || "");
  const e = getSelection();
  if (e == null)
    return Promise.reject(new Error());
  e.removeAllRanges();
  const t = document.createRange();
  return t.selectNodeContents(o), e.addRange(t), e.removeAllRanges(), Promise.resolve();
}
function l(o) {
  if ("clipboard" in navigator)
    return navigator.clipboard.writeText(o);
  const e = document.body;
  if (!e)
    return Promise.reject(new Error());
  const t = y(o);
  return e.appendChild(t), p(t), e.removeChild(t), Promise.resolve();
}
const g = ":host{cursor:pointer;padding:.5rem}";
class d extends f {
  /**
   * Constructor for the CopyButton class.
   * Initializes the timeout property.
   */
  constructor() {
    super();
    r(this, "className", "CopyButton");
    /**
     * Handles the click event.
     * @param {Event} e - The event object.
     */
    r(this, "clicked", (t) => {
      const i = t.currentTarget;
      i instanceof HTMLElement && this.copy(i);
    });
    /**
     * Handles the keydown event.
     * @param {Event} e - The event object.
     */
    r(this, "keydown", (t) => {
      if (t.key === " " || t.key === "Enter") {
        const i = t.currentTarget;
        i instanceof HTMLElement && this.copy(i);
      }
    });
    /**
     * Handles the focus event.
     * @param {Event} e - The event object.
     */
    r(this, "focused", (t) => {
      t.currentTarget.addEventListener("keydown", this.keydown);
    });
    /**
     * Handles the blur event.
     * @param {Event} e - The event object.
     */
    r(this, "blurred", (t) => {
      t.currentTarget.removeEventListener("keydown", this.keydown);
    });
    /**
     * Handles the copied event.
     * @param {Event} e - The event object.
     */
    r(this, "copied", (t) => {
      this.icon.setAttribute("color", "success"), this.icon.setAttribute("name", "check"), this.tooltip.setAttribute("content", this.labelSuccess || "Copied"), setTimeout(() => {
        this.icon.removeAttribute("color"), this.icon.setAttribute("name", "clipboard"), this.tooltip.setAttribute("content", this.label || "Copy");
      }, this.timeout);
    });
    this.timeout = 1e3;
  }
  /**
   * Setter for the value property.
   * @param {string} value - The value to be set.
   */
  set value(t) {
    this.setAttribute("value", t);
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
    return g;
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
   * Draws the ColorPicker.
   * @param {Object} context - The context to draw in.
   * @param {Object} store - The store to use.
   * @param {Object} params - The parameters to use.
   * @returns {DocumentFragment} The created document fragment.
   */
  draw(t, i, a) {
    let s = document.createDocumentFragment(), n = document.createElement("wje-tooltip");
    n.setAttribute("offset", "5"), n.setAttribute("content", this.label || "Copy");
    let u = document.createElement("wje-icon");
    return u.setAttribute("name", "clipboard"), n.appendChild(u), s.appendChild(n), this.tooltip = n, this.icon = u, s;
  }
  /**
   * Sets up the event listeners after the CopyButton is drawn.
   */
  afterDraw() {
    c.addListener(this, "click", null, this.clicked), c.addListener(this, "focus", null, this.focused), c.addListener(this, "blur", null, this.blurred), c.addListener(this, "wje:copy-button", null, this.copied);
  }
  /**
   * Copies the specified text or node.
   * @param {HTMLElement} button - The button element.
   */
  async copy(t) {
    const i = this.getAttribute("for"), a = this.getAttribute("value");
    if (t.getAttribute("aria-disabled") !== "true") {
      if (a)
        await l(a), c.dispatchCustomEvent(this, "wje:copy-button");
      else if (i) {
        const s = "getRootNode" in Element.prototype ? t.getRootNode() : t.ownerDocument;
        if (!(s instanceof Document || "ShadowRoot" in window && s instanceof ShadowRoot))
          return;
        const n = s.getElementById(i);
        n && (await this.copyTarget(n), c.dispatchCustomEvent(this, "wje:copy-button"));
      }
    }
  }
  /**
   * Copies the target content.
   * @param {HTMLElement} content - The content to be copied.
   * @returns {Promise} A promise that resolves when the content is copied.
   */
  copyTarget(t) {
    return t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof b ? l(t.value) : t instanceof HTMLAnchorElement && t.hasAttribute("href") ? l(t.href) : p(t);
  }
}
d.define("wje-copy-button", d);
export {
  d as default
};
