var y = Object.defineProperty;
var j = (n, a, t) => a in n ? y(n, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[a] = t;
var b = (n, a, t) => (j(n, typeof a != "symbol" ? a + "" : a, t), t);
import x, { event as g } from "./wj-element.js";
import "./wj-store.js";
const E = `/*!
* direction.scss
*/:host{--wj-input-font-family: Inter UI, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;--wj-input-background-color: #fff;--wj-input-color: #212121;--wj-input-color-invalid: #b91e1e;--wj-input-border-color: rgba(33, 33, 33, .14);--wj-input-border-color-focus: #7252D3;--wj-input-border-width: 1px;--wj-input-border-style: solid;--wj-input-border-radius: 4px;--wj-input-margin-bottom: .5rem;--wj-input-line-height: 20px;--wj-input-slot-padding-inline: .5rem;width:100%;margin-bottom:var(--wj-input-margin-bottom);display:block}:host .wrapper{display:flex;width:100%}:host .native-input .input-wrapper{width:100%;position:relative}:host .native-input.default{background-color:var(--wj-input-background-color);font-family:var(--wj-input-font-family);position:relative;border-radius:var(--wj-input-border-radius);border-width:var(--wj-input-border-width);border-style:var(--wj-input-border-style);border-color:var(--wj-input-border-color);border-top-color:#08080824;padding-inline:0;padding-top:.25rem;padding-bottom:.25rem;transition:background-color .2s ease;cursor:text}:host .native-input.default .input-wrapper{margin-inline:.5rem}:host .native-input.default.focused{border-color:var(--wj-input-border-color-focus)!important}:host .native-input.default.focused label{opacity:.67;font-size:12px;letter-spacing:normal}:host .native-input.default input{border:none;height:25px;min-height:25px;padding:0;margin-top:-4px;background:none;box-shadow:none;width:100%}:host .native-input.default label{margin:0;display:block;opacity:1;cursor:text;transition:opacity .2s ease;line-height:var(--wj-input-line-height)}:host .native-input.default label.fade{opacity:.5;font-size:12px;letter-spacing:normal}:host .native-input.default ::slotted([slot=start]){border-left:none;border-top:none;border-bottom:none}:host .native-input.default ::slotted([slot=end]){border-right:none;border-top:none;border-bottom:none}:host .native-input.standard{background-color:var(--wj-input-background-color);font-family:var(--wj-input-font-family);position:relative;border-radius:var(--wj-input-border-radius);padding-inline:0;padding-top:0;padding-bottom:0;transition:background-color .2s ease;cursor:text}:host .native-input.standard.focused input{border-color:var(--wj-input-border-color-focus)!important}:host .native-input.standard input{display:block;min-height:32px;padding-inline:.5rem;padding-top:0;padding-bottom:0;background:none;box-shadow:none;width:100%;box-sizing:border-box;border-radius:var(--wj-input-border-radius);border-width:var(--wj-input-border-width);border-style:var(--wj-input-border-style);border-color:var(--wj-input-border-color)}:host .native-input.standard label{margin:0;display:inline-block;opacity:1;cursor:text;transition:opacity .2s ease;line-height:var(--wj-input-line-height)}:host .native-input.standard .input-wrapper:hover .clear{visibility:visible}:host .native-input.standard ::slotted([slot=start]){border-right:none;border-radius:var(--wj-input-border-radius) 0 0 var(--wj-input-border-radius)}:host .native-input.standard ::slotted([slot=end]){border-left:none;border-radius:0 var(--wj-input-border-radius) var(--wj-input-border-radius) 0}:host .native-input.standard.has-start input{border-top-left-radius:0;border-bottom-left-radius:0}:host .native-input.standard.has-end input{border-top-right-radius:0;border-bottom-right-radius:0}:host .native-input.standard .error-message{position:static;background:transparent;padding:.25rem 0;left:auto;transform:none;color:var(--wj-input-color-invalid);font-size:12px;line-height:normal}.clear{visibility:hidden;position:absolute;right:0;top:3px;--wj-padding-top: .25rem;--wj-padding-start: .25rem;--wj-padding-end: .25rem;--wj-padding-bottom: .25rem;--wj-button-margin-inline: 0 .25rem}:host([required]) .input-wrapper:after{color:var(--wj-input-color-invalid);content:"*";font-family:-apple-system,BlinkMacSystemFont,Inter UI,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:20px;position:absolute;right:10px;top:2px}:host([required]) .standard .input-wrapper:after{top:0}:host([invalid]) .error-message{display:block}:host([invalid]) .default label{opacity:1!important;color:var(--wj-input-color-invalid)!important;animation-name:shake;animation-duration:.4s;animation-iteration-count:1}::slotted([slot=start]),::slotted([slot=end]){display:flex;align-items:center;border-width:var(--wj-input-border-width);border-style:var(--wj-input-border-style);border-color:var(--wj-input-border-color);padding-inline:var(--wj-input-slot-padding-inline)}slot[name=start],slot[name=end]{display:flex}input{background-color:var(--wj-input-background-color);border-width:var(--wj-input-border-width);border-style:var(--wj-input-border-style);border-color:var(--wj-input-border-color);font-family:var(--wjinput-font-family);color:var(--wj-input-color);border-top-color:#21212136;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;padding:.25rem .5rem;line-height:var(--wj-input-line-height);font-size:14px;font-weight:400;vertical-align:middle;min-height:32px}.error-message{display:none;position:absolute;width:auto;max-width:100%;min-width:auto;border-radius:50px;background:black;padding:.25rem .5rem;top:0;left:50%;transform:translate(-50%,-50%);color:#fff;font-size:12px;line-height:normal}@keyframes shake{8%,41%{transform:translate(-4px)}25%,58%{transform:translate(4px)}75%{transform:translate(-2px)}92%{transform:translate(2px)}0%,to{transform:translate(0)}}
`;
class w extends x {
  constructor(t = {}) {
    super();
    b(this, "className", "Input");
    this.invalid = !1, this.pristine = !0, this.internals = this.attachInternals();
  }
  set value(t) {
    this.setAttribute("value", t);
  }
  get value() {
    return this.getAttribute("value") || "";
  }
  get customErrorDisplay() {
    return this.hasAttribute("custom-error-display");
  }
  get validateOnChange() {
    return this.hasAttribute("validate-on-change");
  }
  get invalid() {
    return this.hasAttribute("invalid");
  }
  set invalid(t) {
    t && this.customErrorDisplay ? this.setAttribute("invalid", "") : this.removeAttribute("invalid");
  }
  get form() {
    return this.internals.form;
  }
  get name() {
    return this.getAttribute("name");
  }
  get type() {
    return this.localName;
  }
  get validity() {
    return this.internals.validity;
  }
  get validationMessage() {
    return this.internals.validationMessage;
  }
  get willValidate() {
    return this.internals.willValidate;
  }
  checkValidity() {
    return this.internals.checkValidity();
  }
  reportValidity() {
    return this.internals.reportValidity();
  }
  static get cssStyleSheet() {
    return E;
  }
  static get observedAttributes() {
    return ["value"];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(t, e, s) {
    let o = this.hasSlot(this, "start"), v = this.hasSlot(this, "end"), m = document.createDocumentFragment(), i = document.createElement("div");
    i.setAttribute("part", "native"), i.classList.add("native-input", this.variant || "default"), this.hasAttribute("invalid") && i.classList.add("has-error");
    let l = document.createElement("div");
    l.classList.add("wrapper");
    let d = document.createElement("div");
    d.classList.add("input-wrapper");
    let u = document.createElement("label");
    u.innerText = this.label, this.value && !this.hasAttribute("error") && u.classList.add("fade");
    let r = document.createElement("input");
    r.setAttribute("type", "text"), r.setAttribute("part", "input"), r.setAttribute("value", this.value || ""), r.classList.add("form-control"), this.hasAttribute("placeholder") && r.setAttribute("placeholder", this.placeholder), this.hasAttribute("disabled") && r.setAttribute("disabled", ""), this.hasAttribute("readonly") && r.setAttribute("readonly", "");
    let p = document.createElement("div");
    p.classList.add("error-message");
    let h = null;
    o && (h = document.createElement("slot"), h.setAttribute("name", "start"));
    let c = null;
    if (v && (c = document.createElement("slot"), c.setAttribute("name", "end")), o && (l.appendChild(h), i.classList.add("has-start")), this.variant === "standard" ? this.label && i.appendChild(u) : d.appendChild(u), d.appendChild(r), l.appendChild(d), i.appendChild(l), this.hasAttribute("clearable")) {
      this.clear = document.createElement("wj-button"), this.clear.classList.add("clear"), this.clear.setAttribute("variant", "link"), this.clear.setAttribute("part", "clear");
      let f = document.createElement("wj-icon");
      f.setAttribute("name", "x"), this.clear.appendChild(f), d.appendChild(this.clear);
    }
    return v && (l.appendChild(c), i.classList.add("has-end")), i.appendChild(p), m.appendChild(i), this.native = i, this.labelElement = u, this.input = r, this.errorMessage = p, m;
  }
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
      this.dispatchEvent(e), this.validateInput(), g.dispatchCustomEvent(this, "wj-input:input", {
        value: this.input.value
      });
    }), this.addEventListener("invalid", (t) => {
      this.invalid = !0, this.pristine = !1, this.errorMessage.textContent = this.internals.validationMessage, this.customErrorDisplay && t.preventDefault();
    }), this.addEventListener("focus", () => this.input.focus()), this.clear && this.clear.addEventListener("wj:button-click", (t) => {
      this.input.value = "", g.dispatchCustomEvent(this.clear, "wj-input:clear");
    });
  }
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
  hasSlot(t, e = null) {
    let s = e ? `[slot="${e}"]` : "[slot]";
    return t.querySelectorAll(s).length > 0;
  }
}
b(w, "formAssociated", !0);
customElements.get("wj-input") || window.customElements.define("wj-input", w);
export {
  w as Input
};
