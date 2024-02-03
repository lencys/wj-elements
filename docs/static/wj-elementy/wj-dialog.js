var j = Object.defineProperty;
var b = (e, i, t) => i in e ? j(e, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[i] = t;
var m = (e, i, t) => (b(e, typeof i != "symbol" ? i + "" : i, t), t);
import u, { WjElementUtils as x } from "./wj-element.js";
import "./wj-store.js";
const f = `/*!
* direction.scss
*/:host{--wj-dialog-width: 600px;--wj-dialog-height: 600px;--wj-dialog-padding: 1rem;--wj-dialog-border-radius: 8px;--wj-dialog-border-width: 1px;--wj-dialog-border-style: solid;--wj-dialog-border-color: rgba(33, 33, 33, .17);--wj-dialog-margin-top: auto;--wj-dialog-margin-start: auto;--wj-dialog-margin-end: auto;--wj-dialog-margin-bottom: auto}:host .close{margin-left:auto}:host .modal-content{border-radius:3px;box-shadow:none}:host .dialog-header{position:relative;border-bottom:0;padding-inline:var(--wj-dialog-padding);padding-top:var(--wj-dialog-padding);display:flex;align-items:center}:host .dialog-header span{-webkit-transition:opacity .3s ease;transition:opacity .3s ease;font-family:Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:10.5px;text-transform:uppercase;display:inline-block;letter-spacing:.06em;font-weight:500;margin:0;padding:0;line-height:normal;overflow:hidden;text-overflow:ellipsis;filter:alpha(opacity=40)}:host .dialog-content{box-shadow:none;padding-inline:var(--wj-dialog-padding);white-space:normal;z-index:1}:host .dialog-footer{display:flex;justify-content:end;border-top:none;box-shadow:none;margin-top:0;padding-inline:var(--wj-dialog-padding);padding-top:0;padding-bottom:var(--wj-dialog-padding)}dialog::backdrop{--wj-backdrop: rgb(0, 0, 0);--wj-backdrop-opacity: .3;opacity:var(--wj-backdrop-opacity);background-color:var(--wj-backdrop)}:host(.separator) .dialog-header:after{content:"";height:1px;background:rgba(0,0,0,.08);left:var(--wj-dialog-padding);right:var(--wj-dialog-padding);position:absolute;bottom:0}:host dialog{box-sizing:border-box;transition:all .2s!important;width:var(--wj-dialog-width);height:var(--wj-dialog-height);box-shadow:0 .5rem 1rem #00000026;border-radius:var(--wj-dialog-border-radius);border-width:var(--wj-dialog-border-width);border-style:var(--wj-dialog-border-style);border-color:var(--wj-dialog-border-color);margin-top:var(--wj-dialog-margin-top);margin-bottom:var(--wj-dialog-margin-bottom);margin-inline:var(--wj-dialog-margin-start) var(--wj-dialog-margin-end);padding:0}:host(.stick-up){--wj-dialog-width: 300px !important;--wj-dialog-height: fit-content;--wj-dialog-border-radius: 0 0 8px 8px;--wj-dialog-border-width: 0 1px 1px 1px;--wj-dialog-margin-top: 0}:host(.slide-up){--wj-dialog-width: 300px !important;--wj-dialog-height: fit-content;--wj-dialog-border-radius: 8px;--wj-dialog-border-width: 1px}:host(.fill-in){--wj-dialog-width: 100%;--wj-dialog-height: 100%;--wj-dialog-border-radius: 0 0 0 0 !important;--wj-dialog-border-width: 0;--wj-dialog-margin-top: 0;--wj-dialog-margin-start: 0;--wj-dialog-margin-end: 0;--wj-dialog-margin-bottom: 0}:host(.fill-in) dialog{min-width:var(--wj-dialog-width);min-height:var(--wj-dialog-height)}:host(.slide-left){--wj-dialog-width: 300px !important;--wj-dialog-height: 100% !important;--wj-dialog-border-radius: 0;--wj-dialog-border-width: 0 1px 0 0;--wj-dialog-margin-top: 0;--wj-dialog-margin-start: 0;--wj-dialog-margin-end: auto;--wj-dialog-margin-bottom: 0}:host(.slide-left) dialog{min-height:var(--wj-dialog-height)}:host(.slide-right){--wj-dialog-width: 300px !important;--wj-dialog-height: 100% !important;--wj-dialog-border-radius: 0;--wj-dialog-border-width: 0 0 0 1px;--wj-dialog-margin-top: 0;--wj-dialog-margin-start: auto;--wj-dialog-margin-end: 0;--wj-dialog-margin-bottom: 0}:host(.slide-right) dialog{min-height:var(--wj-dialog-height)}:host(.small){--wj-dialog-width: 300px !important}:host(.medium){--wj-dialog-width: 500px !important}:host(.large){--wj-dialog-width: 600px !important}:host(.ex-large){--wj-dialog-width: 900px !important}
`;
class v extends u {
  constructor() {
    super();
    m(this, "className", "Dialog");
  }
  set placement(t) {
    this.setAttribute("placement", t);
  }
  get placement() {
    return this.getAttribute("placement") || "slide-up";
  }
  static get cssStyleSheet() {
    return f;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open", x.setAttributesToElement(this, {
      test: "test"
    });
  }
  beforeDraw(t, s, r) {
  }
  draw(t, s, r) {
    let p = document.createDocumentFragment();
    this.classList.add("modal", "fade", this.placement, r.size);
    let c = document.createElement("slot"), o = document.createElement("dialog");
    o.classList.add("modal-dialog");
    let g = document.createElement("wj-icon");
    g.setAttribute("name", "x"), g.setAttribute("slot", "icon-only");
    let a = document.createElement("wj-button");
    a.setAttribute("fill", "link"), a.setAttribute("size", "small"), a.classList.add("close"), a.addEventListener("click", () => {
      o.close();
    }), a.appendChild(g);
    let d = document.createElement("div");
    d.setAttribute("part", "header"), d.classList.add("dialog-header"), d.innerHTML = `<span>${this.title}</span>`, d.appendChild(a);
    let w = document.createElement("slot");
    w.setAttribute("name", "header"), d.appendChild(w);
    let n = document.createElement("div");
    n.setAttribute("part", "body"), n.classList.add("dialog-content"), n.appendChild(c);
    let l = document.createElement("div");
    l.setAttribute("part", "footer"), l.classList.add("dialog-footer"), l.innerHTML = "";
    let h = document.createElement("slot");
    return h.setAttribute("name", "footer"), l.appendChild(h), o.appendChild(d), o.appendChild(n), o.appendChild(l), p.appendChild(o), this.dialog = o, p;
  }
  afterDraw(t, s, r) {
    r.trigger && document.addEventListener(r.trigger, () => {
      this.dialog.showModal();
    });
  }
}
customElements.get("wj-dialog") || window.customElements.define("wj-dialog", v);
export {
  v as Dialog
};
