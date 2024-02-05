var c = Object.defineProperty;
var b = (i, r, t) => r in i ? c(i, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[r] = t;
var u = (i, r, t) => (b(i, typeof r != "symbol" ? r + "" : r, t), t);
import m from "./wj-element.js";
import "./wj-store.js";
const h = `:host{--wj-input-font-family: var(--wj-font-family);--wj-input-background-color: var(--wj-background);--wj-input-color: var(--wj-color);--wj-input-color-invalid: var(--wj-color-danger);--wj-input-border-color: var(--wj-border-color);--wj-input-border-color-focus: var(--wj-color-primary);--wj-input-border-width: 1px;--wj-input-border-style: solid;--wj-input-border-radius: 4px;--wj-input-margin-bottom: .5rem;--wj-input-line-height: 20px;--wj-input-slot-padding-inline: .5rem;width:100%;margin-bottom:var(--wj-input-margin-bottom);display:block}:host .wrapper{display:flex;width:100%}:host .native-input .input-wrapper{width:100%;position:relative}:host .native-input.default{background-color:var(--wj-input-background-color);font-family:var(--wj-input-font-family);position:relative;border-radius:var(--wj-input-border-radius);border-width:var(--wj-input-border-width);border-style:var(--wj-input-border-style);border-color:var(--wj-input-border-color);padding-inline:0;padding-top:.25rem;padding-bottom:.25rem;transition:background-color .2s ease;cursor:text}:host .native-input.default .input-wrapper{margin-inline:.5rem}:host .native-input.default.focused{border-color:var(--wj-input-border-color-focus)!important}:host .native-input.default.focused label{opacity:.67;font-size:12px;letter-spacing:normal}:host .native-input.default input{border:none;height:25px;min-height:25px;padding:0;margin-top:-4px;background:none;box-shadow:none;width:100%}:host .native-input.default label{margin:0;display:block;opacity:1;cursor:text;transition:opacity .2s ease;line-height:var(--wj-input-line-height)}:host .native-input.default label.fade{opacity:.5;font-size:12px;letter-spacing:normal}:host .native-input.default ::slotted([slot=start]){border-left:none;border-top:none;border-bottom:none}:host .native-input.default ::slotted([slot=end]){border-right:none;border-top:none;border-bottom:none}:host .native-input.standard{background-color:var(--wj-input-background-color);font-family:var(--wj-input-font-family);position:relative;border-radius:var(--wj-input-border-radius);padding-inline:0;padding-top:0;padding-bottom:0;transition:background-color .2s ease;cursor:text}:host .native-input.standard.focused input{border-color:var(--wj-input-border-color-focus)!important}:host .native-input.standard input{display:block;min-height:32px;padding-inline:.5rem;padding-top:0;padding-bottom:0;background:none;box-shadow:none;width:100%;box-sizing:border-box;border-radius:var(--wj-input-border-radius);border-width:var(--wj-input-border-width);border-style:var(--wj-input-border-style);border-color:var(--wj-input-border-color)}:host .native-input.standard label{margin:0;display:inline-block;opacity:1;cursor:text;transition:opacity .2s ease;line-height:var(--wj-input-line-height)}:host .native-input.standard .input-wrapper:hover .clear{visibility:visible}:host .native-input.standard ::slotted([slot=start]){border-right:none;border-radius:var(--wj-input-border-radius) 0 0 var(--wj-input-border-radius)}:host .native-input.standard ::slotted([slot=end]){border-left:none;border-radius:0 var(--wj-input-border-radius) var(--wj-input-border-radius) 0}:host .native-input.standard.has-start input{border-top-left-radius:0;border-bottom-left-radius:0}:host .native-input.standard.has-end input{border-top-right-radius:0;border-bottom-right-radius:0}:host .native-input.standard .error-message{position:static;background:transparent;padding:.25rem 0;left:auto;transform:none;color:var(--wj-input-color-invalid);font-size:12px;line-height:normal}.clear{visibility:hidden;position:absolute;right:0;top:3px;--wj-padding-top: .25rem;--wj-padding-start: .25rem;--wj-padding-end: .25rem;--wj-padding-bottom: .25rem;--wj-button-margin-inline: 0 .25rem}:host([required]) .input-wrapper:after{color:var(--wj-input-color-invalid);content:"*";font-family:var(--wj-force-mac-font-family);font-size:20px;position:absolute;right:10px;top:2px}:host([required]) .standard .input-wrapper:after{top:0}:host([invalid]) .error-message{display:block}:host([invalid]) .default label{opacity:1!important;color:var(--wj-input-color-invalid)!important;animation-name:shake;animation-duration:.4s;animation-iteration-count:1}::slotted([slot=start]),::slotted([slot=end]){display:flex;align-items:center;border-width:var(--wj-input-border-width);border-style:var(--wj-input-border-style);border-color:var(--wj-input-border-color);padding-inline:var(--wj-input-slot-padding-inline)}slot[name=start],slot[name=end]{display:flex}input{background-color:var(--wj-input-background-color);border-width:var(--wj-input-border-width);border-style:var(--wj-input-border-style);border-color:var(--wj-input-border-color);font-family:var(--wjinput-font-family);color:var(--wj-input-color);-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;padding:.25rem .5rem;line-height:var(--wj-input-line-height);font-size:14px;font-weight:400;vertical-align:middle;min-height:32px}.error-message{display:none;position:absolute;width:auto;max-width:100%;min-width:auto;border-radius:50px;background:black;padding:.25rem .5rem;top:0;left:50%;transform:translate(-50%,-50%);color:#fff;font-size:12px;line-height:normal}@keyframes shake{8%,41%{transform:translate(-4px)}25%,58%{transform:translate(4px)}75%{transform:translate(-2px)}92%{transform:translate(2px)}0%,to{transform:translate(0)}}
`;
class w extends m {
  constructor(t = {}) {
    super();
    u(this, "className", "Input");
  }
  static get cssStyleSheet() {
    return h;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(t, d, s) {
    let o = document.createDocumentFragment(), n = document.createElement("div");
    n.setAttribute("part", "native"), n.classList.add("native-input-file", this.variant || "default");
    let a = document.createElement("input");
    a.setAttribute("type", "file"), a.setAttribute("multiple", ""), a.setAttribute("hidden", "");
    let e = document.createElement("wj-input");
    e.setAttribute("variant", "standard"), e.setAttribute("type", "text"), e.setAttribute("placeholder", "Click to upload"), e.setAttribute("readonly", "");
    let p = document.createElement("span");
    p.setAttribute("slot", "start");
    let l = document.createElement("wj-icon");
    return l.setAttribute("slot", "icon-only"), l.setAttribute("name", "cloud-upload"), p.appendChild(l), e.appendChild(p), n.appendChild(e), n.appendChild(a), o.appendChild(n), this.native = n, this.input = e, this.fileInput = a, o;
  }
  afterDraw() {
    this.input.addEventListener("click", () => {
      this.fileInput.click();
    }), this.fileInput.addEventListener("change", (t) => {
      for (var d = t.target.files, s = [], o = 0; o < d.length; o++)
        s.push(d[o].name);
      this.input.value = s.join(", ");
    });
  }
}
customElements.get("wj-input-file") || window.customElements.define("wj-input-file", w);
export {
  w as InputFile
};
