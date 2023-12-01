var w = Object.defineProperty;
var l = (e, t, g) => t in e ? w(e, t, { enumerable: !0, configurable: !0, writable: !0, value: g }) : e[t] = g;
var o = (e, t, g) => (l(e, typeof t != "symbol" ? t + "" : t, g), g);
import u from "./wj-element.js";
import "./wj-store.js";
const r = `/*!
* direction.scss
*/:host{display:flex;flex-wrap:wrap}:host(.wj-wrap){flex-wrap:wrap!important}:host{--wj-gutter-x: 1.5rem;--wj-gutter-y: 0;display:flex;flex-wrap:nowrap;margin-top:calc(var(--wj-gutter-y) * -1);margin-right:calc(var(--wj-gutter-x) * -.5);margin-left:calc(var(--wj-gutter-x) * -.5)}:host(.g-0),:host(.gx-0){--wj-gutter-x: 0}:host(.g-0),:host(.gy-0){--wj-gutter-y: 0}:host(.g-1),:host(.gx-1){--wj-gutter-x: .25rem}:host(.g-1),:host(.gy-1){--wj-gutter-y: .25rem}:host(.g-2),:host(.gx-2){--wj-gutter-x: .5rem}:host(.g-2),:host(.gy-2){--wj-gutter-y: .5rem}:host(.g-3),:host(.gx-3){--wj-gutter-x: 1rem}:host(.g-3),:host(.gy-3){--wj-gutter-y: 1rem}:host(.g-4),:host(.gx-4){--wj-gutter-x: 1.5rem}:host(.g-4),:host(.gy-4){--wj-gutter-y: 1.5rem}:host(.g-5),:host(.gx-5){--wj-gutter-x: 3rem}:host(.g-5),:host(.gy-5){--wj-gutter-y: 3rem}@media (min-width: 576px){:host(.g-sm-0),:host(.gx-sm-0){--wj-gutter-x: 0}:host(.g-sm-0),:host(.gy-sm-0){--wj-gutter-y: 0}:host(.g-sm-1),:host(.gx-sm-1){--wj-gutter-x: .25rem}:host(.g-sm-1),:host(.gy-sm-1){--wj-gutter-y: .25rem}:host(.g-sm-2),:host(.gx-sm-2){--wj-gutter-x: .5rem}:host(.g-sm-2),:host(.gy-sm-2){--wj-gutter-y: .5rem}:host(.g-sm-3),:host(.gx-sm-3){--wj-gutter-x: 1rem}:host(.g-sm-3),:host(.gy-sm-3){--wj-gutter-y: 1rem}:host(.g-sm-4),:host(.gx-sm-4){--wj-gutter-x: 1.5rem}:host(.g-sm-4),:host(.gy-sm-4){--wj-gutter-y: 1.5rem}:host(.g-sm-5),:host(.gx-sm-5){--wj-gutter-x: 3rem}:host(.g-sm-5),:host(.gy-sm-5){--wj-gutter-y: 3rem}}@media (min-width: 768px){:host(.g-md-0),:host(.gx-md-0){--wj-gutter-x: 0}:host(.g-md-0),:host(.gy-md-0){--wj-gutter-y: 0}:host(.g-md-1),:host(.gx-md-1){--wj-gutter-x: .25rem}:host(.g-md-1),:host(.gy-md-1){--wj-gutter-y: .25rem}:host(.g-md-2),:host(.gx-md-2){--wj-gutter-x: .5rem}:host(.g-md-2),:host(.gy-md-2){--wj-gutter-y: .5rem}:host(.g-md-3),:host(.gx-md-3){--wj-gutter-x: 1rem}:host(.g-md-3),:host(.gy-md-3){--wj-gutter-y: 1rem}:host(.g-md-4),:host(.gx-md-4){--wj-gutter-x: 1.5rem}:host(.g-md-4),:host(.gy-md-4){--wj-gutter-y: 1.5rem}:host(.g-md-5),:host(.gx-md-5){--wj-gutter-x: 3rem}:host(.g-md-5),:host(.gy-md-5){--wj-gutter-y: 3rem}}@media (min-width: 992px){:host(.g-lg-0),:host(.gx-lg-0){--wj-gutter-x: 0}:host(.g-lg-0),:host(.gy-lg-0){--wj-gutter-y: 0}:host(.g-lg-1),:host(.gx-lg-1){--wj-gutter-x: .25rem}:host(.g-lg-1),:host(.gy-lg-1){--wj-gutter-y: .25rem}:host(.g-lg-2),:host(.gx-lg-2){--wj-gutter-x: .5rem}:host(.g-lg-2),:host(.gy-lg-2){--wj-gutter-y: .5rem}:host(.g-lg-3),:host(.gx-lg-3){--wj-gutter-x: 1rem}:host(.g-lg-3),:host(.gy-lg-3){--wj-gutter-y: 1rem}:host(.g-lg-4),:host(.gx-lg-4){--wj-gutter-x: 1.5rem}:host(.g-lg-4),:host(.gy-lg-4){--wj-gutter-y: 1.5rem}:host(.g-lg-5),:host(.gx-lg-5){--wj-gutter-x: 3rem}:host(.g-lg-5),:host(.gy-lg-5){--wj-gutter-y: 3rem}}@media (min-width: 1200px){:host(.g-xl-0),:host(.gx-xl-0){--wj-gutter-x: 0}:host(.g-xl-0),:host(.gy-xl-0){--wj-gutter-y: 0}:host(.g-xl-1),:host(.gx-xl-1){--wj-gutter-x: .25rem}:host(.g-xl-1),:host(.gy-xl-1){--wj-gutter-y: .25rem}:host(.g-xl-2),:host(.gx-xl-2){--wj-gutter-x: .5rem}:host(.g-xl-2),:host(.gy-xl-2){--wj-gutter-y: .5rem}:host(.g-xl-3),:host(.gx-xl-3){--wj-gutter-x: 1rem}:host(.g-xl-3),:host(.gy-xl-3){--wj-gutter-y: 1rem}:host(.g-xl-4),:host(.gx-xl-4){--wj-gutter-x: 1.5rem}:host(.g-xl-4),:host(.gy-xl-4){--wj-gutter-y: 1.5rem}:host(.g-xl-5),:host(.gx-xl-5){--wj-gutter-x: 3rem}:host(.g-xl-5),:host(.gy-xl-5){--wj-gutter-y: 3rem}}@media (min-width: 1400px){:host(.g-xxl-0),:host(.gx-xxl-0){--wj-gutter-x: 0}:host(.g-xxl-0),:host(.gy-xxl-0){--wj-gutter-y: 0}:host(.g-xxl-1),:host(.gx-xxl-1){--wj-gutter-x: .25rem}:host(.g-xxl-1),:host(.gy-xxl-1){--wj-gutter-y: .25rem}:host(.g-xxl-2),:host(.gx-xxl-2){--wj-gutter-x: .5rem}:host(.g-xxl-2),:host(.gy-xxl-2){--wj-gutter-y: .5rem}:host(.g-xxl-3),:host(.gx-xxl-3){--wj-gutter-x: 1rem}:host(.g-xxl-3),:host(.gy-xxl-3){--wj-gutter-y: 1rem}:host(.g-xxl-4),:host(.gx-xxl-4){--wj-gutter-x: 1.5rem}:host(.g-xxl-4),:host(.gy-xxl-4){--wj-gutter-y: 1.5rem}:host(.g-xxl-5),:host(.gx-xxl-5){--wj-gutter-x: 3rem}:host(.g-xxl-5),:host(.gy-xxl-5){--wj-gutter-y: 3rem}}:host(.wj-justify-content-center){justify-content:center!important}:host(.wj-justify-content-end){justify-content:flex-end!important}:host(.wj-justify-content-between){justify-content:space-between!important}:host(.wj-justify-content-around){justify-content:space-around!important}:host(.wj-align-items-start){align-items:baseline!important}:host(.wj-align-items-center){align-items:center!important}:host(.wj-align-items-end){align-items:flex-end!important}
`;
console.log("STYLES ROW:", r);
class j extends u {
  constructor() {
    super();
    o(this, "className", "Row");
  }
  static get cssStyleSheet() {
    return r;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  beforeDraw(g, h, x) {
  }
  draw(g, h, x) {
    let s = document.createDocumentFragment();
    this.hasAttribute("wrap") && this.classList.add("wj-wrap");
    let m = document.createElement("slot");
    return s.appendChild(m), s;
  }
}
customElements.get("wj-row") || window.customElements.define("wj-row", j);
export {
  j as Row
};
