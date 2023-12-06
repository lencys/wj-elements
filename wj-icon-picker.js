var m = Object.defineProperty;
var u = (l, r, t) => r in l ? m(l, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[r] = t;
var h = (l, r, t) => (u(l, typeof r != "symbol" ? r + "" : r, t), t);
import w, { event as g } from "./wj-element.js";
import { InfiniteScroll as b } from "./wj-infinite-scroll.js";
import "./wj-tooltip.js";
import "./wj-store.js";
const j = `/*!
* direction.scss
*/:host{--wj-icon-picker-radius: .25rem;--wj-icon-picker-icon-size: 1.5rem;--wj-icon-picker-border-width: 1px;--wj-icon-picker-border-style: solid;--wj-icon-picker-border-color: var(--wj-border-color);--wj-icon-picker-padding: .25rem;padding:0 1rem}.anchor{width:var(--wj-icon-picker-icon-size);height:var(--wj-icon-picker-icon-size);padding:var(--wj-icon-picker-padding);border-width:var(--wj-icon-picker-border-width);border-style:var(--wj-icon-picker-border-style);border-color:var(--wj-icon-picker-border-color);box-sizing:border-box;border-radius:var(--wj-icon-picker-radius)}.picker{width:320px;height:271px;box-shadow:0 0 5px #0000000d,0 5px 20px #0000001a;border-radius:var(--wj-icon-picker-radius);overflow:auto;padding:1rem;background:#fff}.icon-items{--icon-min-width: 2rem;display:grid;grid-gap:.5rem;grid-template-columns:repeat(auto-fit,minmax(var(--icon-min-width),1fr))}.icon-item{box-sizing:border-box;display:flex;align-items:center;justify-content:center;text-align:center;color:inherit;padding:.25rem;min-height:var(--wj-icon-picker-icon-size);min-width:var(--wj-icon-picker-icon-size);text-decoration:none}.icon-item:hover{border-radius:.25rem;background:var(--wj-border-color)}.wj-size{--wj-icon-size: 24px !important}icon-item svg{width:var(--wj-icon-picker-icon-size);height:var(--wj-icon-picker-icon-size)}wj-input{--wj-input-border-radius: 4px;--wj-input-margin-bottom: 0}wj-infinite-scroll{margin-top:1rem}wj-select{--wj-select-border-width: 0 0 1px 0 !important;--wj-select-border-radius: 0 !important;margin-bottom:1rem}hr{background:red;height:1px;border:0 none}.anchor wj-icon{--wj-icon-size: 100% !important}
`;
class v extends w {
  constructor() {
    super();
    h(this, "className", "IconPicker");
    /*
    * @description event handler pre vyhladavanie ikon
    * @param e
     */
    h(this, "searchIcon", (t) => {
      this.infiniteScroll.unScrollEvent(), this.infiniteScroll.setCustomData = (e = 0) => {
        let i = this.tags.filter((n) => n.tags.includes(t.detail.value));
        return {
          data: i,
          page: e,
          size: this.size,
          totalPages: Math.round(i.length / this.size)
        };
      }, this.clearIconsContainer(), this.infiniteScroll.loadPages();
    });
    h(this, "onClose", () => {
      this.popup.onHide();
    });
    this.size = 48;
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
  draw(t, e, i) {
    let s = document.createDocumentFragment(), n = document.createElement("div");
    n.classList.add("native-color-picker");
    let d = document.createElement("div");
    d.setAttribute("slot", "anchor"), d.classList.add("anchor");
    let p = document.createElement("div");
    p.classList.add("picker");
    let o = document.createElement("wj-input");
    o.classList.add("input"), o.setAttribute("variant", "standard"), o.setAttribute("placeholder", "type to filter..."), o.setAttribute("clearable", ""), o.addEventListener("wj-input:input", this.searchIcon);
    let a = new b();
    a.setAttribute("url", "/demo/assets/data/tags.json"), a.setAttribute("placement", ".icon-items"), a.setAttribute("size", this.size), a.setAttribute("height", "223px"), a.innerHTML = `<div class="icon-items">
            <div class="icon-item" iterate>
                <wj-tooltip content="{{name}}">
                    <wj-icon name="{{name}}" size="large"></wj-icon>
                </wj-tooltip>
            </div>
        </div>`, p.appendChild(o), p.appendChild(a);
    let c = document.createElement("wj-popup");
    return c.setAttribute("placement", this.placement || "bottom-start"), c.setAttribute("offset", this.offset), c.setAttribute("manual", ""), c.appendChild(d), c.appendChild(p), n.appendChild(c), s.appendChild(n), this.popup = c, this.input = o, this.anchor = d, this.picker = p, this.infiniteScroll = a, s;
  }
  afterDraw() {
    this.setupInfiniteScroll(), this.addEventListener("wj-popup:show", (t) => {
      this.initial();
    }), this.addEventListener("wj-input:clear", (t) => {
      this.setupInfiniteScroll(), this.clearIconsContainer(), this.infiniteScroll.scrollEvent(), this.infiniteScroll.loadPages(0);
    }), this.addEventListener("wj-infinite-scroll:click-item", (t) => {
      console.log("A");
      const i = t.detail.context.querySelector("wj-icon").getAttribute("name"), s = this.tags.find((d) => d.name === i), n = document.createElement("wj-icon");
      n.setAttribute("name", i), s.icon = n, this.value = s, this.anchor.innerHTML = "", this.anchor.appendChild(n), g.dispatchCustomEvent(this, "wj-icon-picker:select", s);
    }), this.init = !1;
  }
  initial() {
    this.infiniteScroll.scrollEvent();
  }
  setupInfiniteScroll() {
    this.infiniteScroll.setCustomData = (t = 0) => {
      let e = Object.values(this.tags);
      return {
        data: e.slice(t * this.size, t * this.size + this.size),
        page: t,
        size: this.size,
        totalPages: Math.round(e.length / this.size)
      };
    };
  }
  createIconItem(t) {
    let e = document.createElement("div");
    e.classList.add("icon-item");
    let i = document.createElement("wj-icon");
    return i.setAttribute("name", t.name), i.classList.add("lazy-loaded-image", "lazy"), e.appendChild(i), e;
  }
  createOption(t) {
    let e = document.createElement("wj-option");
    return e.setAttribute("value", t), e.innerText = t, e;
  }
  getCategory(t) {
    return [...new Set(t.map((i) => i.category))];
  }
  async getTags() {
    return (await fetch("/demo/assets/data/tags.json")).json();
  }
  disconnectedCallback() {
    this.init = !1;
  }
  /*
  * @description vymazanie ikon z kontajnera
   */
  clearIconsContainer() {
    this.context.querySelector(".icon-items").innerHTML = "";
  }
}
customElements.get("wj-icon-picker") || window.customElements.define("wj-icon-picker", v);
export {
  v as IconPicker
};
