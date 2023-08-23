var j = Object.defineProperty;
var y = (e, g, t) => g in e ? j(e, g, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[g] = t;
var x = (e, g, t) => (y(e, typeof g != "symbol" ? g + "" : g, t), t);
import s from "./wj-element.js";
import "./default-store-actions-ff3e8b0b.js";
const d = `/*!
* direction.scss
*/:host{display:flex;flex-wrap:wrap}:host{--wj-gutter-x: 1.5rem;--wj-gutter-y: 0;display:flex;flex-wrap:wrap;margin-top:calc(var(--wj-gutter-y) * -1);margin-right:calc(var(--wj-gutter-x) * -.5);margin-left:calc(var(--wj-gutter-x) * -.5)}.g-0,.gx-0{--wj-gutter-x: 0}.g-0,.gy-0{--wj-gutter-y: 0}.g-1,.gx-1{--wj-gutter-x: .25rem}.g-1,.gy-1{--wj-gutter-y: .25rem}.g-2,.gx-2{--wj-gutter-x: .5rem}.g-2,.gy-2{--wj-gutter-y: .5rem}.g-3,.gx-3{--wj-gutter-x: 1rem}.g-3,.gy-3{--wj-gutter-y: 1rem}.g-4,.gx-4{--wj-gutter-x: 1.5rem}.g-4,.gy-4{--wj-gutter-y: 1.5rem}.g-5,.gx-5{--wj-gutter-x: 3rem}.g-5,.gy-5{--wj-gutter-y: 3rem}@media (min-width: 576px){.g-sm-0,.gx-sm-0{--wj-gutter-x: 0}.g-sm-0,.gy-sm-0{--wj-gutter-y: 0}.g-sm-1,.gx-sm-1{--wj-gutter-x: .25rem}.g-sm-1,.gy-sm-1{--wj-gutter-y: .25rem}.g-sm-2,.gx-sm-2{--wj-gutter-x: .5rem}.g-sm-2,.gy-sm-2{--wj-gutter-y: .5rem}.g-sm-3,.gx-sm-3{--wj-gutter-x: 1rem}.g-sm-3,.gy-sm-3{--wj-gutter-y: 1rem}.g-sm-4,.gx-sm-4{--wj-gutter-x: 1.5rem}.g-sm-4,.gy-sm-4{--wj-gutter-y: 1.5rem}.g-sm-5,.gx-sm-5{--wj-gutter-x: 3rem}.g-sm-5,.gy-sm-5{--wj-gutter-y: 3rem}}@media (min-width: 768px){.g-md-0,.gx-md-0{--wj-gutter-x: 0}.g-md-0,.gy-md-0{--wj-gutter-y: 0}.g-md-1,.gx-md-1{--wj-gutter-x: .25rem}.g-md-1,.gy-md-1{--wj-gutter-y: .25rem}.g-md-2,.gx-md-2{--wj-gutter-x: .5rem}.g-md-2,.gy-md-2{--wj-gutter-y: .5rem}.g-md-3,.gx-md-3{--wj-gutter-x: 1rem}.g-md-3,.gy-md-3{--wj-gutter-y: 1rem}.g-md-4,.gx-md-4{--wj-gutter-x: 1.5rem}.g-md-4,.gy-md-4{--wj-gutter-y: 1.5rem}.g-md-5,.gx-md-5{--wj-gutter-x: 3rem}.g-md-5,.gy-md-5{--wj-gutter-y: 3rem}}@media (min-width: 992px){.g-lg-0,.gx-lg-0{--wj-gutter-x: 0}.g-lg-0,.gy-lg-0{--wj-gutter-y: 0}.g-lg-1,.gx-lg-1{--wj-gutter-x: .25rem}.g-lg-1,.gy-lg-1{--wj-gutter-y: .25rem}.g-lg-2,.gx-lg-2{--wj-gutter-x: .5rem}.g-lg-2,.gy-lg-2{--wj-gutter-y: .5rem}.g-lg-3,.gx-lg-3{--wj-gutter-x: 1rem}.g-lg-3,.gy-lg-3{--wj-gutter-y: 1rem}.g-lg-4,.gx-lg-4{--wj-gutter-x: 1.5rem}.g-lg-4,.gy-lg-4{--wj-gutter-y: 1.5rem}.g-lg-5,.gx-lg-5{--wj-gutter-x: 3rem}.g-lg-5,.gy-lg-5{--wj-gutter-y: 3rem}}@media (min-width: 1200px){.g-xl-0,.gx-xl-0{--wj-gutter-x: 0}.g-xl-0,.gy-xl-0{--wj-gutter-y: 0}.g-xl-1,.gx-xl-1{--wj-gutter-x: .25rem}.g-xl-1,.gy-xl-1{--wj-gutter-y: .25rem}.g-xl-2,.gx-xl-2{--wj-gutter-x: .5rem}.g-xl-2,.gy-xl-2{--wj-gutter-y: .5rem}.g-xl-3,.gx-xl-3{--wj-gutter-x: 1rem}.g-xl-3,.gy-xl-3{--wj-gutter-y: 1rem}.g-xl-4,.gx-xl-4{--wj-gutter-x: 1.5rem}.g-xl-4,.gy-xl-4{--wj-gutter-y: 1.5rem}.g-xl-5,.gx-xl-5{--wj-gutter-x: 3rem}.g-xl-5,.gy-xl-5{--wj-gutter-y: 3rem}}@media (min-width: 1400px){.g-xxl-0,.gx-xxl-0{--wj-gutter-x: 0}.g-xxl-0,.gy-xxl-0{--wj-gutter-y: 0}.g-xxl-1,.gx-xxl-1{--wj-gutter-x: .25rem}.g-xxl-1,.gy-xxl-1{--wj-gutter-y: .25rem}.g-xxl-2,.gx-xxl-2{--wj-gutter-x: .5rem}.g-xxl-2,.gy-xxl-2{--wj-gutter-y: .5rem}.g-xxl-3,.gx-xxl-3{--wj-gutter-x: 1rem}.g-xxl-3,.gy-xxl-3{--wj-gutter-y: 1rem}.g-xxl-4,.gx-xxl-4{--wj-gutter-x: 1.5rem}.g-xxl-4,.gy-xxl-4{--wj-gutter-y: 1.5rem}.g-xxl-5,.gx-xxl-5{--wj-gutter-x: 3rem}.g-xxl-5,.gy-xxl-5{--wj-gutter-y: 3rem}}
`, m = document.createElement("template");
m.innerHTML = `<style>
	${d}
</style>`;
class a extends s {
  constructor() {
    super(m);
    x(this, "className", "Row");
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  beforeDraw(t, l, w) {
  }
  draw(t, l, w) {
    let r = document.createDocumentFragment(), u = document.createElement("slot");
    return r.appendChild(u), r;
  }
}
customElements.get("wj-row") || window.customElements.define("wj-row", a);
export {
  a as Row
};
