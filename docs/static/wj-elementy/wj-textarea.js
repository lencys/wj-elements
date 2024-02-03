var u = Object.defineProperty;
var x = (r, a, t) => a in r ? u(r, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[a] = t;
var d = (r, a, t) => (x(r, typeof a != "symbol" ? a + "" : a, t), t);
import p, { event as h } from "./wj-element.js";
import "./wj-store.js";
const b = `/*!
* direction.scss
*/:host{--wj-textarea-font-family: Inter UI, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;--wj-textarea-background-color: #fff;--wj-textarea-color: #212121;--wj-textarea-color-invalid: #b91e1e;--wj-textarea-border-width: 1px;--wj-textarea-border-style: solid;--wj-textarea-border-color: rgba(33, 33, 33, .14);--wj-textarea-border-color-focus: #7252D3;--wj-textarea-border-radius: 4px;--wj-textarea-margin-bottom: .5rem;--wj-textarea-line-height: 20px;--wj-textarea-padding: .5rem;width:100%;margin-bottom:var(--wj-textarea-margin-bottom);display:block}:host .wrapper{display:flex;width:100%;border-width:var(--wj-textarea-border-width);border-style:var(--wj-textarea-border-style);border-color:var(--wj-textarea-border-color);border-radius:var(--wj-textarea-border-radius)}:host textarea{font-family:var(--wj-textarea-font-family);color:var(--wj-textarea-color);font-size:14px;border:0 none;padding:0 var(--wj-textarea-padding)}:host textarea:focus{outline:none}:host([resize=auto]) textarea,:host([resize=none]) textarea{resize:none}.native-textarea .input-wrapper{width:100%;line-height:normal}.native-textarea.default{background-color:var(--wj-textarea-background-color);font-family:var(--wj-textarea-font-family);position:relative;padding-inline:0;padding-top:0;transition:background-color .2s ease;cursor:text}.native-textarea.default.focused .wrapper{border-color:var(--wj-textarea-border-color-focus)!important}.native-textarea.default.focused label{opacity:.67;font-size:12px;letter-spacing:normal}.native-textarea.default textarea{border:none;padding-top:0;background:none;box-shadow:none;width:calc(100% - var(--wj-textarea-padding) * 2);max-width:calc(100% - var(--wj-textarea-padding) * 2);min-width:calc(100% - var(--wj-textarea-padding) * 2)}.native-textarea.default label{padding:0 var(--wj-textarea-padding);display:block;opacity:1;cursor:text;transition:opacity .2s ease;line-height:var(--wj-textarea-line-height);padding-top:.25rem}.native-textarea.default label.fade{opacity:.5;font-size:12px;letter-spacing:normal}.native-textarea.default ::slotted([slot=start]){border-left:none;border-top:none;border-bottom:none}.native-textarea.default ::slotted([slot=end]){border-right:none;border-top:none;border-bottom:none}.native-textarea.standard{background-color:var(--wj-textarea-background-color);font-family:var(--wj-textarea-font-family);position:relative;border-radius:var(--wj-textarea-border-radius);padding:0;transition:background-color .2s ease;cursor:text}.native-textarea.standard.focused .wrapper{border-color:var(--wj-textarea-border-color-focus)!important}.native-textarea.standard textarea{display:block;min-height:32px;background:none;box-shadow:none;width:100%;box-sizing:border-box;border-radius:var(--wj-textarea-border-radius)}.native-textarea.standard label{margin:0;display:inline-block;opacity:1;cursor:text;transition:opacity .2s ease;line-height:var(--wj-textarea-line-height)}.native-textarea.standard ::slotted([slot=start]){border-right:none;border-radius:var(--wj-textarea-border-radius) 0 0 var(--wj-textarea-border-radius)}.native-textarea.standard ::slotted([slot=end]){border-left:none;border-radius:0 var(--wj-textarea-border-radius) var(--wj-textarea-border-radius) 0}.native-textarea.standard.has-start textarea{border-top-left-radius:0;border-bottom-left-radius:0}.native-textarea.standard.has-end textarea{border-top-right-radius:0;border-bottom-right-radius:0}.native-textarea.standard .error-message{position:static;background:transparent;padding:.25rem 0;left:auto;transform:none;color:var(--wj-textarea-color-invalid);font-size:12px;line-height:normal}.counter{float:right}
`;
class m extends p {
  constructor() {
    super();
    d(this, "className", "Textarea");
    d(this, "setTextareaHeight", () => {
      this.getAttribute("resize") === "auto" && (this.input.style.height = "auto", this.input.style.height = this.input.scrollHeight + "px");
    });
    d(this, "counter", (t) => {
      this.counterElement.innerText = t.target.value.length + "/" + this.input.maxLength;
    });
    this._checked = !1;
  }
  set checked(t) {
    this._checked = t, t ? this.setAttribute("checked", "") : this.removeAttribute("checked");
  }
  get checked() {
    return this._checked;
  }
  static get cssStyleSheet() {
    return b;
  }
  static get observedAttributes() {
    return ["checked"];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(t, v, g) {
    let l = document.createDocumentFragment(), i = document.createElement("div");
    i.classList.add("native-textarea", this.variant || "default"), this.hasAttribute("invalid") && i.classList.add("has-error");
    let c = document.createElement("div");
    c.classList.add("wrapper");
    let o = document.createElement("div");
    o.classList.add("input-wrapper");
    let n = document.createElement("label");
    n.htmlFor = "textarea", n.innerHTML = this.label || "";
    let e = document.createElement("textarea");
    if (e.id = "textarea", e.name = this.name, e.disabled = this.hasAttribute("disabled"), e.innerText = this.innerText, e.classList.add("form-control"), e.setAttribute("part", "input"), e.setAttribute("rows", this.rows || 3), e.setAttribute("spellcheck", !1), this.resize === "auto" && e.addEventListener("input", this.setTextareaHeight), this.variant === "standard" ? this.label && i.appendChild(n) : o.appendChild(n), o.appendChild(e), c.appendChild(o), i.appendChild(c), l.appendChild(i), this.hasAttribute("counter")) {
      e.maxLength = this.maxLength || 1e3, e.addEventListener("input", this.counter);
      let s = document.createElement("div");
      s.classList.add("counter"), s.innerText = `${e.value.length}/${e.maxLength}`, this.counterElement = s, l.appendChild(s);
    }
    return this.native = i, this.labelElement = n, this.input = e, l;
  }
  afterDraw() {
    this.resizeObserver = new ResizeObserver(() => this.setTextareaHeight), this.hasAttribute("disabled") || (h.addListener(this, "click", "wj:textarea:change"), h.addListener(this, "click", "wj:textarea:input")), this.input.addEventListener("focus", (t) => {
      this.labelElement.classList.add("fade"), this.native.classList.add("focused");
    }), this.input.addEventListener("blur", (t) => {
      this.native.classList.remove("focused"), t.target.value || this.labelElement.classList.remove("fade");
    });
  }
  disconnectedCallback() {
    this.resizeObserver.unobserve(this.input);
  }
}
customElements.get("wj-textarea") || window.customElements.define("wj-textarea", m);
export {
  m as Textarea
};
