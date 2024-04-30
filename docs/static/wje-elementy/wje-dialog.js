var u = Object.defineProperty;
var f = (o, t, e) => t in o ? u(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var s = (o, t, e) => (f(o, typeof t != "symbol" ? t + "" : t, e), e);
import v, { event as p } from "./wje-element.js";
import "./wje-icon.js";
const x = ':host{--wje-dialog-width: 600px;--wje-dialog-height: 600px;--wje-dialog-border-radius: var(--wje-border-radius-large);--wje-dialog-border-width: var(--wje-border-width);--wje-dialog-border-style: var(--wje-border-style);--wje-dialog-border-color: var(--wje-border-color);--wje-dialog-margin-top: auto;--wje-dialog-margin-start: auto;--wje-dialog-margin-end: auto;--wje-dialog-margin-bottom: auto;--wje-dialog-padding: 1rem;--wje-dialog-padding-inline: 1rem;--wje-dialog-padding-top: 1rem;--wje-dialog-padding-bottom: 1rem}:host .close{margin-left:auto}:host .modal-content{border-radius:3px;box-shadow:none}:host .dialog-header{position:relative;border-bottom:0;padding-inline:var(--wje-dialog-padding);padding-top:var(--wje-dialog-padding);padding-bottom:var(--wje-dialog-padding);display:flex;align-items:center}:host .dialog-header span{font-family:var(--wje-font-family-secondary);font-size:10.5px;text-transform:uppercase;display:inline-block;letter-spacing:.06em;font-weight:500;margin:0;padding:0;line-height:normal;overflow:hidden;text-overflow:ellipsis;filter:alpha(opacity=40)}:host .dialog-content{box-shadow:none;padding-inline:var(--wje-dialog-padding);white-space:normal;z-index:1}:host .dialog-footer{display:flex;justify-content:end;border-top:none;box-shadow:none;margin-top:0;padding-inline:var(--wje-dialog-padding-inline);padding-top:var(--wje-dialog-padding-top);padding-bottom:var(--wje-dialog-padding-bottom)}dialog::backdrop{opacity:var(--wje-backdrop-opacity);background-color:var(--wje-backdrop)}dialog:focus-visible{outline:none}:host(.separator) .dialog-header:after{content:"";height:1px;background:#00000014;left:var(--wje-dialog-padding);right:var(--wje-dialog-padding);position:absolute;bottom:0}:host dialog{box-sizing:border-box;transition:all .2s!important;width:var(--wje-dialog-width);height:var(--wje-dialog-height);box-shadow:0 .5rem 1rem #00000026;border-radius:var(--wje-dialog-border-radius);border-width:var(--wje-dialog-border-width);border-style:var(--wje-dialog-border-style);border-color:var(--wje-dialog-border-color);margin-top:var(--wje-dialog-margin-top);margin-bottom:var(--wje-dialog-margin-bottom);margin-inline:var(--wje-dialog-margin-start) var(--wje-dialog-margin-end);padding:0}:host(.stick-up){--wje-dialog-width: 300px !important;--wje-dialog-height: fit-content;--wje-dialog-border-radius: 0 0 8px 8px;--wje-dialog-border-width: 0 1px 1px 1px;--wje-dialog-margin-top: 0;--wje-dialog-translate-from: translateY(-110%);--wje-dialog-template-to: translateX(0)}:host(.slide-up){--wje-dialog-width: 300px !important;--wje-dialog-height: fit-content;--wje-dialog-border-radius: 8px;--wje-dialog-border-width: 1px;--wje-dialog-opacity-from: 0;--wje-dialog-translate-from: scale(.9);--wje-dialog-translate-to: scale(1)}:host(.fill-in){--wje-dialog-width: 100%;--wje-dialog-height: 100%;--wje-dialog-border-radius: 0 0 0 0 !important;--wje-dialog-border-width: 0;--wje-dialog-margin-top: 0;--wje-dialog-margin-start: 0;--wje-dialog-margin-end: 0;--wje-dialog-margin-bottom: 0;--wje-dialog-translate-from: scale(.95);--wje-dialog-translate-to: scale(1)}:host(.fill-in) dialog{min-width:var(--wje-dialog-width);min-height:var(--wje-dialog-height)}:host(.slide-left){--wje-dialog-width: 300px !important;--wje-dialog-height: 100% !important;--wje-dialog-border-radius: 0;--wje-dialog-border-width: 0 1px 0 0;--wje-dialog-margin-top: 0;--wje-dialog-margin-start: 0;--wje-dialog-margin-end: auto;--wje-dialog-margin-bottom: 0}:host(.slide-left) dialog{min-height:var(--wje-dialog-height);--wje-dialog-translate-from: translateX(-110%);--wje-dialog-template-to: translateX(0)}:host(.slide-right){--wje-dialog-width: 300px !important;--wje-dialog-height: 100% !important;--wje-dialog-border-radius: 0;--wje-dialog-border-width: 0 0 0 1px;--wje-dialog-margin-top: 0;--wje-dialog-margin-start: auto;--wje-dialog-margin-end: 0;--wje-dialog-margin-bottom: 0}:host(.slide-right) dialog{min-height:var(--wje-dialog-height);--wje-dialog-translate-from: translateX(110%);--wje-dialog-template-to: translateX(0)}:host(.small){--wje-dialog-width: 300px !important}:host(.medium){--wje-dialog-width: 500px !important}:host(.large){--wje-dialog-width: 600px !important}:host(.ex-large){--wje-dialog-width: 900px !important}dialog[open]{animation:show .5s ease normal}@keyframes show{0%{opacity:var(--wje-dialog-opacity-from, 1);transform:var(--wje-dialog-translate-from)}to{opacity:1;transform:var(--wje-dialog-translate-to)}}';
class c extends v {
  constructor() {
    super();
    s(this, "className", "Dialog");
    s(this, "onOpen", (e) => {
      Promise.resolve(this.beforeOpen(this)).then((g) => {
        this.dialog.showModal(), this.dialog.open && Promise.resolve(this.afterOpen(this));
      });
    });
    s(this, "onClose", (e) => {
      Promise.resolve(this.beforeClose(this)).then((g) => {
        this.dialog.close(), this.dialog.open && Promise.resolve(this.afterClose(this));
      });
    });
  }
  set placement(e) {
    this.setAttribute("placement", e);
  }
  get placement() {
    return this.getAttribute("placement") || "slide-up";
  }
  set async(e) {
    this.setAttribute("async", "");
  }
  get async() {
    return this.hasAttribute("async");
  }
  static get cssStyleSheet() {
    return x;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(e, g, r) {
    let w = document.createDocumentFragment();
    this.classList.add("fade", this.placement, r.size);
    let b = document.createElement("slot"), a = document.createElement("dialog");
    a.classList.add("modal-dialog");
    let h = document.createElement("wje-icon");
    h.setAttribute("name", "x"), h.setAttribute("slot", "icon-only");
    let i = document.createElement("wje-button");
    i.setAttribute("fill", "link"), i.setAttribute("size", "small"), i.classList.add("close"), i.addEventListener("click", () => {
      this.close();
    }), i.appendChild(h);
    let d = document.createElement("div");
    d.setAttribute("part", "header"), d.classList.add("dialog-header"), this.hasAttribute("headline") && (d.innerHTML = `<span>${this.headline}</span>`), d.appendChild(i);
    let m = document.createElement("slot");
    m.setAttribute("name", "header"), d.appendChild(m);
    let n = document.createElement("div");
    n.setAttribute("part", "body"), n.classList.add("dialog-content"), n.appendChild(b);
    let l = document.createElement("div");
    l.setAttribute("part", "footer"), l.classList.add("dialog-footer"), l.innerHTML = "";
    let j = document.createElement("slot");
    return j.setAttribute("name", "footer"), l.appendChild(j), a.appendChild(d), a.appendChild(n), a.appendChild(l), w.appendChild(a), this.dialog = a, w;
  }
  close() {
    this.onClose();
  }
  afterDraw(e, g, r) {
    this.button = document.querySelector(`[dialog=${r.trigger}]`), r.trigger && p.addListener(this.button, r.trigger, null, this.onOpen);
  }
  beforeOpen() {
  }
  afterOpen() {
  }
  beforeClose() {
  }
  afterClose() {
  }
  disconnectedCallback() {
    p.removeElement(this.button), p.removeElement(this.dialog);
  }
}
c.define("wje-dialog", c);
export {
  c as default
};
