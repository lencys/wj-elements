var b = Object.defineProperty;
var h = (i, e, t) => e in i ? b(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var u = (i, e, t) => (h(i, typeof e != "symbol" ? e + "" : e, t), t);
import m, { event as v } from "./wje-element.js";
const w = ':host{--wje-input-font-family: var(--wje-font-family);--wje-input-background-color: var(--wje-background);--wje-input-color: var(--wje-color);--wje-input-color-invalid: var(--wje-color-danger);--wje-input-border-color: var(--wje-border-color);--wje-input-border-color-focus: var(--wje-color-primary);--wje-input-border-width: 1px;--wje-input-border-style: solid;--wje-input-border-radius: 4px;--wje-input-margin-bottom: .5rem;--wje-input-line-height: 20px;--wje-input-slot-padding-inline: .5rem;width:100%;margin-bottom:var(--wje-input-margin-bottom);display:block}:host .wrapper{display:flex;width:100%}:host .native-input .input-wrapper{width:100%;position:relative}:host .native-input.default{background-color:var(--wje-input-background-color);font-family:var(--wje-input-font-family);position:relative;border-radius:var(--wje-input-border-radius);border-width:var(--wje-input-border-width);border-style:var(--wje-input-border-style);border-color:var(--wje-input-border-color);padding-inline:0;padding-top:.25rem;padding-bottom:.25rem;transition:background-color .2s ease;cursor:text}:host .native-input.default .input-wrapper{margin-inline:.5rem}:host .native-input.default.focused{border-color:var(--wje-input-border-color-focus)!important}:host .native-input.default.focused label{opacity:.67;font-size:12px;letter-spacing:normal}:host .native-input.default input{border:none;height:25px;min-height:25px;padding:0;margin-top:-4px;background:none;box-shadow:none;width:100%}:host .native-input.default label{margin:0;display:block;opacity:1;cursor:text;transition:opacity .2s ease;line-height:var(--wje-input-line-height)}:host .native-input.default label.fade{opacity:.5;font-size:12px;letter-spacing:normal}:host .native-input.default ::slotted([slot="start"]){border-left:none;border-top:none;border-bottom:none}:host .native-input.default ::slotted([slot="end"]){border-right:none;border-top:none;border-bottom:none}:host .native-input.standard{background-color:var(--wje-input-background-color);font-family:var(--wje-input-font-family);position:relative;border-radius:var(--wje-input-border-radius);padding-inline:0;padding-top:0;padding-bottom:0;transition:background-color .2s ease;cursor:text}:host .native-input.standard.focused input{border-color:var(--wje-input-border-color-focus)!important}:host .native-input.standard input{display:block;min-height:32px;padding-inline:.5rem;padding-top:0;padding-bottom:0;background:none;box-shadow:none;width:100%;box-sizing:border-box;border-radius:var(--wje-input-border-radius);border-width:var(--wje-input-border-width);border-style:var(--wje-input-border-style);border-color:var(--wje-input-border-color)}:host .native-input.standard label{margin:0;display:inline-block;opacity:1;cursor:text;transition:opacity .2s ease;line-height:var(--wje-input-line-height)}:host .native-input.standard .input-wrapper:hover .clear{visibility:visible}:host .native-input.standard ::slotted([slot="start"]){border-right:none;border-radius:var(--wje-input-border-radius) 0 0 var(--wje-input-border-radius)}:host .native-input.standard ::slotted([slot="end"]){border-left:none;border-radius:0 var(--wje-input-border-radius) var(--wje-input-border-radius) 0}:host .native-input.standard.has-start input{border-top-left-radius:0;border-bottom-left-radius:0}:host .native-input.standard.has-end input{border-top-right-radius:0;border-bottom-right-radius:0}:host .native-input.standard .error-message{position:static;background:transparent;padding:.25rem 0;left:auto;transform:none;color:var(--wje-input-color-invalid);font-size:12px;line-height:normal}.clear{visibility:hidden;position:absolute;right:0;top:3px;--wje-padding-top: .25rem;--wje-padding-start: .25rem;--wje-padding-end: .25rem;--wje-padding-bottom: .25rem;--wje-button-margin-inline: 0 .25rem}:host([required]) .input-wrapper:after{color:var(--wje-input-color-invalid);content:"*";font-family:var(--wje-force-mac-font-family);font-size:20px;position:absolute;right:10px;top:2px}:host([required]) .standard .input-wrapper:after{top:0}:host([invalid]) .error-message{display:block}:host([invalid]) .default label{opacity:1!important;color:var(--wje-input-color-invalid)!important;animation-name:shake;animation-duration:.4s;animation-iteration-count:1}::slotted([slot="start"]),::slotted([slot="end"]){display:flex;align-items:center;border-width:var(--wje-input-border-width);border-style:var(--wje-input-border-style);border-color:var(--wje-input-border-color);padding-inline:var(--wje-input-slot-padding-inline)}slot[name=start],slot[name=end]{display:flex}input{background-color:var(--wje-input-background-color);border-width:var(--wje-input-border-width);border-style:var(--wje-input-border-style);border-color:var(--wje-input-border-color);font-family:var(--wje-input-font-family);color:var(--wje-input-color);-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;padding:.25rem .5rem;line-height:var(--wje-input-line-height);font-size:14px;font-weight:400;vertical-align:middle;min-height:32px}.error-message{display:none;position:absolute;width:auto;max-width:100%;min-width:auto;border-radius:50px;background:#000;padding:.25rem .5rem;top:0;left:50%;transform:translate(-50%,-50%);color:#fff;font-size:12px;line-height:normal}@keyframes shake{8%,41%{transform:translate(-4px)}25%,58%{transform:translate(4px)}75%{transform:translate(-2px)}92%{transform:translate(2px)}0%,to{transform:translate(0)}}';
class c extends m {
  /**
   * @constructor
   * @summary InputFile constructor
   * @param {Object} options - The options
   */
  constructor(t = {}) {
    super();
    /**
     * @summary Class name
     * @type {string}
     */
    u(this, "className", "Input");
    this._value = "";
  }
  set value(t) {
    this._value = t;
  }
  get value() {
    return this._value;
  }
  /**
   * @summary Get CSS stylesheet
   * @static
   * @returns {Object} styles
   */
  static get cssStyleSheet() {
    return w;
  }
  /**
   * @summary Get observed attributes
   * @static
   * @returns {Array} An empty array
   */
  static get observedAttributes() {
    return [];
  }
  /**
   * @summary Setup attributes
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * @summary Draw method
   * @param {Object} context - The context
   * @param {Object} store - The store
   * @param {Object} params - The parameters
   * @returns {Object} Document fragment
   */
  draw(t, a, s) {
    let n = document.createDocumentFragment(), o = document.createElement("div");
    o.setAttribute("part", "native"), o.classList.add("native-input-file", this.variant || "default");
    let d = document.createElement("input");
    d.setAttribute("type", "file"), d.setAttribute("multiple", ""), d.setAttribute("hidden", "");
    let r = document.createElement("wje-input");
    r.setAttribute("variant", "standard"), r.setAttribute("type", "text"), r.setAttribute("placeholder", "Click to upload"), r.setAttribute("readonly", "");
    let l = document.createElement("span");
    l.setAttribute("slot", "start");
    let p = document.createElement("wje-icon");
    return p.setAttribute("slot", "icon-only"), p.setAttribute("name", "cloud-upload"), l.appendChild(p), r.appendChild(l), o.appendChild(r), o.appendChild(d), n.appendChild(o), this.native = o, this.input = r, this.fileInput = d, n;
  }
  /**
   * @summary After draw method
   */
  afterDraw() {
    this.input.addEventListener("click", () => {
      this.fileInput.click();
    }), this.fileInput.addEventListener("change", (t) => {
      let a = t.target.files, s = [];
      for (let n = 0; n < a.length; n++)
        s.push(a[n].name);
      this.input.value = s.join(", "), this.value = a, v.dispatchCustomEvent(this, "wje-input-file:change", { files: a });
    });
  }
}
c.define("wje-input-file", c);
export {
  c as default
};
