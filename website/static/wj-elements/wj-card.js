var d = Object.defineProperty;
var l = (r, t, o) => t in r ? d(r, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[t] = o;
var s = (r, t, o) => (l(r, typeof t != "symbol" ? t + "" : t, o), o);
import h, { WjElementUtils as p } from "./wj-element.js";
import "./default-store-actions-ff3e8b0b.js";
const b = `/*!
* direction.scss
*/:host{--wj-card-margin-top: 0;--wj-card-margin-bottom: 1rem;--wj-card-margin-inline: 0;--wj-card-border-color: transparent}:host(.wj-color-primary){--wj-color-base: #7252D3 !important;--wj-color-contrast: #fff !important}:host(.wj-color-complete){--wj-color-base: #0072EC !important;--wj-color-contrast: #fff !important}:host(.wj-color-success){--wj-color-base: #19AD79 !important;--wj-color-contrast: #fff !important}:host(.wj-color-warning){--wj-color-base: #FFd945 !important;--wj-color-contrast: #4b4b4b !important}:host(.wj-color-danger){--wj-color-base: #D83C31 !important;--wj-color-contrast: #fff !important}:host(.wj-color-info){--wj-color-base: #3B4752 !important;--wj-color-contrast: #fff !important}:host(.wj-color-menu){--wj-color-base: #2b303b !important;--wj-color-contrast: #fff !important}:host{-webkit-transition:all .2s ease;transition:all .2s ease;margin-top:var(--wj-card-margin-top);margin-bottom:var(--wj-card-margin-bottom);margin-inline:var(--wj-card-margin-inline);box-shadow:#0000001f 0 4px 16px;border-color:var(--wj-border-color);border-style:var(--wj-border-style);border-width:var(--wj-border-size);border-radius:var(--wj-border-radius);font-family:var(--wj-font-family);font-size:var(--wj-font-size);line-height:var(--wj-line-height);color:var(--wj-color-contrast);position:relative;width:100%;word-wrap:normal;display:flex;flex-direction:column;contain:content;overflow:hidden;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}:host.card-collapsed .card-header .card-controls .card-icon-collapse:before{content:""}:host.card-maximized .card-header .card-controls .card-icon-maximize:before{content:""}:host.card-bordered{border:1px solid rgba(224,224,224,.7)}:host.card-borderless{border:none;box-shadow:none}:host.card-condensed .card-header{padding:9px 13px 0;min-height:32px}:host.card-condensed .card-header .card-title{opacity:.4}:host.card-condensed .card-body{padding:13px}:host.card-hover .card-header .card-title{opacity:.4}:host.card-hover:hover .card-header .card-title{opacity:1}:host.card-transparent{background:transparent;border:none;-webkit-box-shadow:none;box-shadow:none}:host.card-transparent .card-body{background:transparent}:host.full-height{height:100%}:host.full-height .card-body{height:auto;width:100%;height:100%}:host.card-featured{-webkit-box-shadow:-1px 1px 3px 0px rgba(121,129,135,.14);box-shadow:-1px 1px 3px #79818724;width:calc(100% - 50px);float:right}:host.card-featured .card-title h4{font-family:Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:16px;text-transform:uppercase;color:inherit}:host.card-featured .card-body h3{line-height:34px;font-size:26px}:host.card-featured .footer .username{line-height:8px;padding-top:10px;font-size:16px}:host.card-featured .footer .buttons li{display:inline;list-style:none;font-weight:700;margin-left:20px}:host.card-featured .footer .buttons li:first-child{margin-left:0}:host.card-featured .footer .buttons .heart{color:#d83c31}:host.card-featured .footer .buttons .comment{color:#4b4b4b}:host.card-featured .ribbon{width:38px;height:38px;margin-left:-39px;float:left;-webkit-box-shadow:inset -3px 0px 3px 0px rgba(0,0,0,.14);box-shadow:inset -3px 0 3px #00000024}:host.card-featured .ribbon.green{background:#0072EC}:host.card-featured .ribbon.blue{background:#19AD79}:host.hover-fill:hover{background:#f4f4f4}:host.hover-stroke:hover{border:1px solid #e0e0e0}:host(.wj-color){background-color:var(--wj-color-base, red);color:var(--wj-color-contrast)}
`, c = document.createElement("template");
c.innerHTML = `<style>
	${b}
</style>`;
class m extends h {
  constructor() {
    super(c);
    s(this, "className", "Card");
  }
  set color(o) {
    this.setAttribute("color", o);
  }
  get color() {
    return this.getAttribute("color");
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open", p.setAttributesToElement(this, {
      test: "test"
    });
  }
  beforeDraw(o, e, a) {
  }
  draw(o, e, a) {
    let n = document.createDocumentFragment(), i = document.createElement("slot");
    return this.color && this.classList.add("wj-color-" + this.color, "wj-color"), n.appendChild(i), n;
  }
  afterDraw(o, e, a) {
    console.log("afterDraw", this.params);
  }
}
customElements.get("wj-card") || window.customElements.define("wj-card", m);
export {
  m as Card
};
