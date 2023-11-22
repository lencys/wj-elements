var u = Object.defineProperty;
var g = (o, i, t) => i in o ? u(o, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[i] = t;
var h = (o, i, t) => (g(o, typeof i != "symbol" ? i + "" : i, t), t);
import w from "./wj-element.js";
import { InfiniteScroll as b } from "./wj-infinite-scroll.js";
import "./wj-tooltip.js";
import "./wj-store.js";
const j = `/*!
* direction.scss
*/:host{--wj-color-picker-value: #ff0000;--wj-color-picker-radius: .25rem;--wj-color-picker-icon-size: 2rem;padding:0 1rem}.anchor{width:1rem;height:1rem;background:var(--wj-color-picker-value)}.picker{width:320px;height:320px;box-shadow:0 0 5px #0000000d,0 5px 20px #0000001a;border-radius:var(--wj-color-picker-radius);overflow:auto;padding:1rem}.icon-items{--icon-min-width: 2rem;display:grid;grid-gap:.5rem;grid-template-columns:repeat(auto-fit,minmax(var(--icon-min-width),1fr))}.icon-item{box-sizing:border-box;display:flex;align-items:center;justify-content:center;text-align:center;color:inherit;padding:0 .25rem;text-decoration:none}.icon-item:hover{border-radius:.25rem;background:var(--wj-border-color)}icon-item svg{width:var(--wj-color-picker-icon-size);height:var(--wj-color-picker-icon-size)}wj-input{--wj-input-border-radius: 4px;--wj-input-margin-bottom: 0}wj-infinite-scroll{margin-top:1rem}wj-select{--wj-select-border-width: 0 0 1px 0 !important;--wj-select-border-radius: 0 !important;margin-bottom:1rem}hr{background:red;height:1px;border:0 none}
`;
class v extends w {
  constructor() {
    super();
    h(this, "className", "IconPicker");
    this.size = 56;
  }
  set markerPosition(t) {
    this._markerPosition = t;
  }
  get markerPosition() {
    return this._markerPosition;
  }
  set swatches(t) {
    this.setAttribute("swatches", t.split(","));
  }
  get swatches() {
    return this._swatches;
  }
  static get cssStyleSheet() {
    return j;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  async beforeDraw() {
    this.tags = Object.values(await this.getTags()), this.category = this.getCategory(this.tags);
  }
  draw(t, e, s) {
    let m = document.createDocumentFragment(), p = document.createElement("div");
    p.classList.add("native-color-picker");
    let l = document.createElement("div");
    l.setAttribute("slot", "anchor"), l.classList.add("anchor");
    let c = document.createElement("div");
    c.classList.add("picker");
    let r = document.createElement("wj-select");
    r.setAttribute("placeholder", "Category"), r.setAttribute("variant", "standard"), r.setAttribute("max-options", "1"), r.setAttribute("variant", "standard"), r.setAttribute("max-height", "180px"), r.setAttribute("clearable", ""), this.createOptions(r);
    let d = document.createElement("wj-input");
    d.classList.add("input"), d.setAttribute("variant", "standard"), d.setAttribute("placeholder", "type to filter...");
    let a = new b();
    a.setAttribute("url", "/demo/assets/data/tags.json"), a.setAttribute("placement", ".icon-items"), a.setAttribute("size", this.size), a.setAttribute("height", "223px"), a.innerHTML = `<div class="icon-items">
            <div class="icon-item" iterate>
                <wj-tooltip content="{{name}}">
                  <wj-icon name="{{name}}" size="large"></wj-icon>
                </wj-tooltip>
            </div>
        </div>`, c.appendChild(r), c.appendChild(d), c.appendChild(a);
    let n = document.createElement("wj-popup");
    return n.setAttribute("placement", this.placement || "bottom-start"), n.setAttribute("offset", this.offset), n.setAttribute("manual", ""), n.appendChild(l), n.appendChild(c), p.appendChild(n), m.appendChild(p), this.popup = n, this.anchor = l, this.picker = c, this.infiniteScroll = a, m;
  }
  afterDraw() {
    this.addEventListener("wj:popup-show", (t) => {
      this.infiniteScroll.scrollEvent();
    }), this.infiniteScroll.setCustomData = (t) => {
      let e = Object.values(this.tags);
      return {
        data: e.slice(t * this.size, t * this.size + this.size),
        page: t,
        size: this.size,
        totalPages: Math.round(e.length / this.size)
      };
    }, this.init = !1;
  }
  createItems() {
    let t = document.createElement("div");
    return t.classList.add("icon-items"), Object.values(this.tags).slice(0, 200).forEach((e) => {
      t.appendChild(this.createIconItem(e));
    }), t;
  }
  createIconItem(t) {
    let e = document.createElement("div");
    e.classList.add("icon-item");
    let s = document.createElement("wj-icon");
    return s.setAttribute("name", t.name), s.classList.add("lazy-loaded-image", "lazy"), e.appendChild(s), e;
  }
  createOption(t) {
    let e = document.createElement("wj-option");
    return e.setAttribute("value", t), e.innerText = t, e;
  }
  createOptions(t) {
    this.category.forEach((e) => {
      t.appendChild(this.createOption(e));
    });
  }
  getCategory(t) {
    return [...new Set(t.map((s) => s.category))];
  }
  async getTags() {
    return (await fetch("/demo/assets/data/tags.json")).json();
  }
  disconnectedCallback() {
    this.init = !1;
  }
}
customElements.get("wj-icon-picker") || window.customElements.define("wj-icon-picker", v);
export {
  v as IconPicker
};
