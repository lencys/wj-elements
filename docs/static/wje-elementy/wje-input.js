var j = Object.defineProperty;
var y = (n, a, t) => a in n ? j(n, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[a] = t;
var b = (n, a, t) => (y(n, typeof a != "symbol" ? a + "" : a, t), t);
import x, { event as w } from "./wje-element.js";
const A = ':host{--wje-input-font-family: var(--wje-font-family);--wje-input-background-color: var(--wje-background);--wje-input-color: var(--wje-color);--wje-input-color-invalid: var(--wje-color-danger);--wje-input-border-color: var(--wje-border-color);--wje-input-border-color-focus: var(--wje-color-primary);--wje-input-border-width: 1px;--wje-input-border-style: solid;--wje-input-border-radius: 4px;--wje-input-margin-bottom: .5rem;--wje-input-line-height: 20px;--wje-input-slot-padding-inline: .5rem;width:100%;margin-bottom:var(--wje-input-margin-bottom);display:block}:host .wrapper{display:flex;width:100%}:host .native-input .input-wrapper{width:100%;position:relative}:host .native-input.default{background-color:var(--wje-input-background-color);font-family:var(--wje-input-font-family);position:relative;border-radius:var(--wje-input-border-radius);border-width:var(--wje-input-border-width);border-style:var(--wje-input-border-style);border-color:var(--wje-input-border-color);padding-inline:0;padding-top:.25rem;padding-bottom:.25rem;transition:background-color .2s ease;cursor:text}:host .native-input.default .input-wrapper{margin-inline:.5rem}:host .native-input.default.focused{border-color:var(--wje-input-border-color-focus)!important}:host .native-input.default.focused label{opacity:.67;font-size:12px;letter-spacing:normal}:host .native-input.default input{border:none;height:25px;min-height:25px;padding:0;margin-top:-4px;background:none;box-shadow:none;width:100%}:host .native-input.default label{margin:0;display:block;opacity:1;cursor:text;transition:opacity .2s ease;line-height:var(--wje-input-line-height)}:host .native-input.default label.fade{opacity:.5;font-size:12px;letter-spacing:normal}:host .native-input.default ::slotted([slot="start"]){border-left:none;border-top:none;border-bottom:none}:host .native-input.default ::slotted([slot="end"]){border-right:none;border-top:none;border-bottom:none}:host .native-input.standard{background-color:var(--wje-input-background-color);font-family:var(--wje-input-font-family);position:relative;border-radius:var(--wje-input-border-radius);padding-inline:0;padding-top:0;padding-bottom:0;transition:background-color .2s ease;cursor:text}:host .native-input.standard.focused input{border-color:var(--wje-input-border-color-focus)!important}:host .native-input.standard input{display:block;min-height:32px;padding-inline:.5rem;padding-top:0;padding-bottom:0;background:none;box-shadow:none;width:100%;box-sizing:border-box;border-radius:var(--wje-input-border-radius);border-width:var(--wje-input-border-width);border-style:var(--wje-input-border-style);border-color:var(--wje-input-border-color)}:host .native-input.standard label{margin:0;display:inline-block;opacity:1;cursor:text;transition:opacity .2s ease;line-height:var(--wje-input-line-height)}:host .native-input.standard .input-wrapper:hover .clear{visibility:visible}:host .native-input.standard ::slotted([slot="start"]){border-right:none;border-radius:var(--wje-input-border-radius) 0 0 var(--wje-input-border-radius)}:host .native-input.standard ::slotted([slot="end"]){border-left:none;border-radius:0 var(--wje-input-border-radius) var(--wje-input-border-radius) 0}:host .native-input.standard.has-start input{border-top-left-radius:0;border-bottom-left-radius:0}:host .native-input.standard.has-end input{border-top-right-radius:0;border-bottom-right-radius:0}:host .native-input.standard .error-message{position:static;background:transparent;padding:.25rem 0;left:auto;transform:none;color:var(--wje-input-color-invalid);font-size:12px;line-height:normal}.clear{visibility:hidden;position:absolute;right:0;top:3px;--wje-padding-top: .25rem;--wje-padding-start: .25rem;--wje-padding-end: .25rem;--wje-padding-bottom: .25rem;--wje-button-margin-inline: 0 .25rem}:host([required]) .input-wrapper:after{color:var(--wje-input-color-invalid);content:"*";font-family:var(--wje-force-mac-font-family);font-size:20px;position:absolute;right:10px;top:2px}:host([required]) .standard .input-wrapper:after{top:0}:host([invalid]) .error-message{display:block}:host([invalid]) .default label{opacity:1!important;color:var(--wje-input-color-invalid)!important;animation-name:shake;animation-duration:.4s;animation-iteration-count:1}::slotted([slot="start"]),::slotted([slot="end"]){display:flex;align-items:center;border-width:var(--wje-input-border-width);border-style:var(--wje-input-border-style);border-color:var(--wje-input-border-color);padding-inline:var(--wje-input-slot-padding-inline)}slot[name=start],slot[name=end]{display:flex}input{background-color:var(--wje-input-background-color);border-width:var(--wje-input-border-width);border-style:var(--wje-input-border-style);border-color:var(--wje-input-border-color);font-family:var(--wjinput-font-family);color:var(--wje-input-color);-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;padding:.25rem .5rem;line-height:var(--wje-input-line-height);font-size:14px;font-weight:400;vertical-align:middle;min-height:32px}.error-message{display:none;position:absolute;width:auto;max-width:100%;min-width:auto;border-radius:50px;background:#000;padding:.25rem .5rem;top:0;left:50%;transform:translate(-50%,-50%);color:#fff;font-size:12px;line-height:normal}@keyframes shake{8%,41%{transform:translate(-4px)}25%,58%{transform:translate(4px)}75%{transform:translate(-2px)}92%{transform:translate(2px)}0%,to{transform:translate(0)}}';
class m extends x {
  /**
   * Constructor for the Input class.
   * @param {Object} options - The options for the Input class.
   */
  constructor(t = {}) {
    super();
    /**
     * The class name of the input.
     * @type {string}
     */
    b(this, "className", "Input");
    this.invalid = !1, this.pristine = !0, this.internals = this.attachInternals();
  }
  /**
   * Setter for the value attribute.
   * @param {string} value - The value to set.
   */
  set value(t) {
    this.setAttribute("value", t);
  }
  /**
   * Getter for the value attribute.
   * @returns {string} The value of the attribute.
   */
  get value() {
    return this.getAttribute("value") || "";
  }
  /**
   * Getter for the customErrorDisplay attribute.
   * @returns {boolean} Whether the attribute is present.
   */
  get customErrorDisplay() {
    return this.hasAttribute("custom-error-display");
  }
  /**
   * Getter for the validateOnChange attribute.
   * @returns {boolean} Whether the attribute is present.
   */
  get validateOnChange() {
    return this.hasAttribute("validate-on-change");
  }
  /**
   * Getter for the invalid attribute.
   * @returns {boolean} Whether the attribute is present.
   */
  get invalid() {
    return this.hasAttribute("invalid");
  }
  /**
   * Setter for the invalid attribute.
   * @param {boolean} isInvalid - Whether the input is invalid.
   */
  set invalid(t) {
    t && this.customErrorDisplay ? this.setAttribute("invalid", "") : this.removeAttribute("invalid");
  }
  /**
   * Getter for the form attribute.
   * @returns {HTMLFormElement} The form the input is associated with.
   */
  get form() {
    return this.internals.form;
  }
  /**
   * Getter for the name attribute.
   * @returns {string} The name of the input.
   */
  get name() {
    return this.getAttribute("name");
  }
  /**
   * Getter for the type attribute.
   * @returns {string} The type of the input.
   */
  get type() {
    return this.localName;
  }
  /**
   * Getter for the validity attribute.
   * @returns {ValidityState} The validity state of the input.
   */
  get validity() {
    return this.internals.validity;
  }
  /**
   * Getter for the validationMessage attribute.
   * @returns {string} The validation message of the input.
   */
  get validationMessage() {
    return this.internals.validationMessage;
  }
  /**
   * Getter for the willValidate attribute.
   * @returns {boolean} Whether the input will be validated.
   */
  get willValidate() {
    return this.internals.willValidate;
  }
  /**
   * Checks the validity of the input.
   * @returns {boolean} Whether the input is valid.
   */
  checkValidity() {
    return this.internals.checkValidity();
  }
  /**
   * Reports the validity of the input.
   * @returns {boolean} Whether the input is valid.
   */
  reportValidity() {
    return this.internals.reportValidity();
  }
  /**
   * Getter for the cssStyleSheet attribute.
   * @returns {CSSStyleSheet} The CSS style sheet of the input.
   */
  static get cssStyleSheet() {
    return A;
  }
  /**
   * Getter for the observedAttributes attribute.
   * @returns {Array} The attributes to observe for changes.
   */
  static get observedAttributes() {
    return ["value"];
  }
  /**
   * Sets up the attributes for the input.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draws the input.
   * @param {CanvasRenderingContext2D} context - The context to draw on.
   * @param {Object} store - The store to use.
   * @param {Object} params - The parameters to use.
   * @returns {DocumentFragment} The drawn input.
   */
  draw(t, e, s) {
    let o = this.hasSlot(this, "start"), v = this.hasSlot(this, "end"), f = document.createDocumentFragment(), r = document.createElement("div");
    r.setAttribute("part", "native"), r.classList.add("native-input", this.variant || "default"), this.hasAttribute("invalid") && r.classList.add("has-error");
    let l = document.createElement("div");
    l.classList.add("wrapper");
    let d = document.createElement("div");
    d.classList.add("input-wrapper");
    let u = document.createElement("label");
    u.innerText = this.label, this.value && !this.hasAttribute("error") && u.classList.add("fade");
    let i = document.createElement("input");
    i.setAttribute("type", "text"), i.setAttribute("part", "input"), i.setAttribute("value", this.value || ""), i.classList.add("form-control"), this.hasAttribute("placeholder") && i.setAttribute("placeholder", this.placeholder), this.hasAttribute("multiple") && i.setAttribute("multiple", this.multiple), this.hasAttribute("disabled") && i.setAttribute("disabled", ""), this.hasAttribute("readonly") && i.setAttribute("readonly", ""), this.hasAttribute("maxlength") && i.setAttribute("maxlength", this.maxlength), this.hasAttribute("max") && i.setAttribute("max", this.max), this.hasAttribute("min") && i.setAttribute("min", this.min);
    let p = document.createElement("div");
    p.classList.add("error-message");
    let h = null;
    o && (h = document.createElement("slot"), h.setAttribute("name", "start"));
    let c = null;
    if (v && (c = document.createElement("slot"), c.setAttribute("name", "end")), o && (l.appendChild(h), r.classList.add("has-start")), this.variant === "standard" ? this.label && r.appendChild(u) : d.appendChild(u), d.appendChild(i), l.appendChild(d), r.appendChild(l), this.hasAttribute("clearable")) {
      this.clear = document.createElement("wje-button"), this.clear.classList.add("clear"), this.clear.setAttribute("fill", "link"), this.clear.setAttribute("part", "clear");
      let g = document.createElement("wje-icon");
      g.setAttribute("name", "x"), this.clear.appendChild(g), d.appendChild(this.clear);
    }
    return v && (l.appendChild(c), r.classList.add("has-end")), r.appendChild(p), f.appendChild(r), this.native = r, this.labelElement = u, this.input = i, this.errorMessage = p, f;
  }
  /**
   * Runs after the input is drawn.
   */
  afterDraw() {
    [
      "type",
      "value",
      "placeholder",
      "required",
      "min",
      "max",
      "minLength",
      "maxLength",
      "pattern"
    ].forEach((t) => {
      const e = t === "required" ? this.hasAttribute(t) : this.getAttribute(t);
      e != null && (this.input[t] = e);
    }), this.input.addEventListener("focus", (t) => {
      this.labelElement.classList.add("fade"), this.native.classList.add("focused");
    }), this.input.addEventListener("blur", (t) => {
      this.native.classList.remove("focused"), t.target.value || this.labelElement.classList.remove("fade");
    }), this.input.addEventListener("input", (t) => {
      this.validateOnChange && (this.pristine = !1), this.input.classList.remove("pristine"), this.labelElement.classList.add("fade");
      const e = new t.constructor(t.type, t);
      this.dispatchEvent(e), this.validateInput(), w.dispatchCustomEvent(this, "wje-input:input", {
        value: this.input.value
      });
    }), this.addEventListener("invalid", (t) => {
      this.invalid = !0, this.pristine = !1, this.errorMessage.textContent = this.internals.validationMessage, this.customErrorDisplay && t.preventDefault();
    }), this.addEventListener("focus", () => this.input.focus()), this.clear && this.clear.addEventListener("wje-button:click", (t) => {
      this.input.value = "", w.dispatchCustomEvent(this.clear, "wje-input:clear");
    });
  }
  /**
   * Validates the input.
   */
  validateInput() {
    const t = this.input.validity;
    if (this.invalid = !1, t.valid)
      this.internals.setValidity({}), this.pristine = !1, this.errorMessage.textContent = this.input.validationMessage;
    else
      for (let e in t) {
        const s = `message-${e.toString()}`;
        if (t[e]) {
          this.validationError = e.toString(), this.invalid = !this.pristine && !t.valid;
          let o = this.message;
          this.hasAttribute("message") || (o = this.hasAttribute(s) ? this.getAttribute(s) : this.input.validationMessage), this.internals.setValidity(
            { [this.validationError]: !0 },
            o
          ), this.invalid && this.customErrorDisplay && this.dispatchEvent(new Event("invalid"));
        }
      }
  }
  /**
   * Checks whether the input has a slot.
   * @param {HTMLElement} el - The element to check.
   * @param {string} slotName - The name of the slot to check for.
   * @returns {boolean} Whether the input has the slot.
   */
  hasSlot(t, e = null) {
    let s = e ? `[slot="${e}"]` : "[slot]";
    return t.querySelectorAll(s).length > 0;
  }
}
/**
 * Whether the input is associated with a form.
 * @type {boolean}
 */
b(m, "formAssociated", !0);
m.define("wje-input", m);
export {
  m as default
};
