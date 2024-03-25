var x = Object.defineProperty;
var p = (i, a, t) => a in i ? x(i, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[a] = t;
var s = (i, a, t) => (p(i, typeof a != "symbol" ? a + "" : a, t), t);
import b, { event as h } from "./wje-element.js";
const v = ':host{--wje-textarea-font-family: var(--wje-font-family);--wje-textarea-background-color: var(--wje-background);--wje-textarea-color: var(--wje-color);--wje-textarea-color-invalid: var(--wje-color-danger);--wje-textarea-border-width: 1px;--wje-textarea-border-style: solid;--wje-textarea-border-color: var(--wje-border-color);--wje-textarea-border-color-focus: var(--wje-color-primary);--wje-textarea-border-radius: 4px;--wje-textarea-margin-bottom: .5rem;--wje-textarea-line-height: 20px;--wje-textarea-padding: .5rem;width:100%;margin-bottom:var(--wje-textarea-margin-bottom);display:block}:host .wrapper{display:flex;width:100%;border-width:var(--wje-textarea-border-width);border-style:var(--wje-textarea-border-style);border-color:var(--wje-textarea-border-color);border-radius:var(--wje-textarea-border-radius)}:host textarea{font-family:var(--wje-textarea-font-family);color:var(--wje-textarea-color);font-size:14px;border:0 none;padding:0 var(--wje-textarea-padding)}:host textarea:focus{outline:none}:host([resize="auto"]) textarea,:host([resize="none"]) textarea{resize:none}.native-textarea .input-wrapper{width:100%;line-height:normal}.native-textarea.default{background-color:var(--wje-textarea-background-color);font-family:var(--wje-textarea-font-family);position:relative;padding-inline:0;padding-top:0;transition:background-color .2s ease;cursor:text}.native-textarea.default.focused .wrapper{border-color:var(--wje-textarea-border-color-focus)!important}.native-textarea.default.focused label{opacity:.67;font-size:12px;letter-spacing:normal}.native-textarea.default textarea{border:none;padding-top:0;background:none;box-shadow:none;width:calc(100% - var(--wje-textarea-padding) * 2);max-width:calc(100% - var(--wje-textarea-padding) * 2);min-width:calc(100% - var(--wje-textarea-padding) * 2)}.native-textarea.default label{padding:0 var(--wje-textarea-padding);display:block;opacity:1;cursor:text;transition:opacity .2s ease;line-height:var(--wje-textarea-line-height);padding-top:.25rem}.native-textarea.default label.fade{opacity:.5;font-size:12px;letter-spacing:normal}.native-textarea.default ::slotted([slot="start"]){border-left:none;border-top:none;border-bottom:none}.native-textarea.default ::slotted([slot="end"]){border-right:none;border-top:none;border-bottom:none}.native-textarea.standard{background-color:var(--wje-textarea-background-color);font-family:var(--wje-textarea-font-family);position:relative;border-radius:var(--wje-textarea-border-radius);padding:0;transition:background-color .2s ease;cursor:text}.native-textarea.standard.focused .wrapper{border-color:var(--wje-textarea-border-color-focus)!important}.native-textarea.standard textarea{display:block;min-height:32px;background:none;box-shadow:none;width:100%;box-sizing:border-box;border-radius:var(--wje-textarea-border-radius)}.native-textarea.standard label{margin:0;display:inline-block;opacity:1;cursor:text;transition:opacity .2s ease;line-height:var(--wje-textarea-line-height)}.native-textarea.standard ::slotted([slot="start"]){border-right:none;border-radius:var(--wje-textarea-border-radius) 0 0 var(--wje-textarea-border-radius)}.native-textarea.standard ::slotted([slot="end"]){border-left:none;border-radius:0 var(--wje-textarea-border-radius) var(--wje-textarea-border-radius) 0}.native-textarea.standard.has-start textarea{border-top-left-radius:0;border-bottom-left-radius:0}.native-textarea.standard.has-end textarea{border-top-right-radius:0;border-bottom-right-radius:0}.native-textarea.standard .error-message{position:static;background:transparent;padding:.25rem 0;left:auto;transform:none;color:var(--wje-textarea-color-invalid);font-size:12px;line-height:normal}.counter{float:right}';
class u extends b {
  /**
   * Creates an instance of Textarea.
   *
   * @constructor
   */
  constructor() {
    super();
    s(this, "className", "Textarea");
    /**
     * Sets the height of the textarea.
     */
    s(this, "setTextareaHeight", () => {
      this.getAttribute("resize") === "auto" && (this.input.style.height = "auto", this.input.style.height = this.input.scrollHeight + "px");
    });
    /**
     * Updates the counter for the textarea.
     *
     * @param {Event} e - The event object.
     */
    s(this, "counter", (t) => {
      this.counterElement.innerText = t.target.value.length + "/" + this.input.maxLength;
    });
    this._checked = !1;
  }
  /**
   * Sets the checked state of the textarea.
   *
   * @param {boolean} value - The checked state.
   */
  set checked(t) {
    this._checked = t, t ? this.setAttribute("checked", "") : this.removeAttribute("checked");
  }
  /**
   * Returns the checked state of the textarea.
   *
   * @returns {boolean} The checked state.
   */
  get checked() {
    return this._checked;
  }
  /**
   * Returns the CSS styles for the component.
   *
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return v;
  }
  /**
   * Returns the list of attributes to observe for changes.
   *
   * @static
   * @returns {Array<string>}
   */
  static get observedAttributes() {
    return ["checked"];
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draws the component.
   *
   * @param {Object} context - The context for drawing.
   * @param {Object} store - The store for drawing.
   * @param {Object} params - The parameters for drawing.
   * @returns {DocumentFragment}
   */
  draw(t, w, m) {
    let l = document.createDocumentFragment(), r = document.createElement("div");
    r.classList.add("native-textarea", this.variant || "default"), r.setAttribute("part", "native"), this.hasAttribute("invalid") && r.classList.add("has-error");
    let c = document.createElement("div");
    c.classList.add("wrapper");
    let n = document.createElement("div");
    n.classList.add("input-wrapper");
    let o = document.createElement("label");
    o.htmlFor = "textarea", o.innerHTML = this.label || "";
    let e = document.createElement("textarea");
    if (e.id = "textarea", e.name = this.name, e.disabled = this.hasAttribute("disabled"), e.innerText = this.innerText, e.classList.add("form-control"), e.setAttribute("part", "input"), e.setAttribute("rows", this.rows || 3), e.setAttribute("spellcheck", !1), this.resize === "auto" && e.addEventListener("input", this.setTextareaHeight), this.variant === "standard" ? this.label && r.appendChild(o) : n.appendChild(o), n.appendChild(e), c.appendChild(n), r.appendChild(c), l.appendChild(r), this.hasAttribute("counter")) {
      e.maxLength = this.maxLength || 1e3, e.addEventListener("input", this.counter);
      let d = document.createElement("div");
      d.classList.add("counter"), d.innerText = `${e.value.length}/${e.maxLength}`, this.counterElement = d, l.appendChild(d);
    }
    return this.native = r, this.labelElement = o, this.input = e, l;
  }
  /**
   * Sets up the event listeners after the component is drawn.
   */
  afterDraw() {
    this.resizeObserver = new ResizeObserver(() => this.setTextareaHeight), this.hasAttribute("disabled") || (h.addListener(this, "click", "wje:textarea:change"), h.addListener(this, "click", "wje:textarea:input")), this.input.addEventListener("focus", (t) => {
      this.labelElement.classList.add("fade"), this.native.classList.add("focused");
    }), this.input.addEventListener("blur", (t) => {
      this.native.classList.remove("focused"), t.target.value || this.labelElement.classList.remove("fade");
    });
  }
  /**
   * Disconnects the component.
   */
  disconnectedCallback() {
    this.resizeObserver.unobserve(this.input);
  }
}
u.define("wje-textarea", u);
export {
  u as default
};
