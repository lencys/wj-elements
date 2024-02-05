var m = Object.defineProperty;
var u = (l, n, e) => n in l ? m(l, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[n] = e;
var h = (l, n, e) => (u(l, typeof n != "symbol" ? n + "" : n, e), e);
import w, { event as b } from "./wj-element.js";
import { InfiniteScroll as g } from "./wj-infinite-scroll.js";
import "./wj-tooltip.js";
import "./wj-store.js";
const j = `:host{--wj-icon-picker-radius: var(--wj-border-radius-small);--wj-icon-picker-icon-size: 1.5rem;--wj-icon-picker-border-width: 1px;--wj-icon-picker-border-style: solid;--wj-icon-picker-border-color: var(--wj-border-color);--wj-icon-picker-padding: .25rem;padding:0 1rem}.anchor{width:var(--wj-icon-picker-icon-size);height:var(--wj-icon-picker-icon-size);padding:var(--wj-icon-picker-padding);border-width:var(--wj-icon-picker-border-width);border-style:var(--wj-icon-picker-border-style);border-color:var(--wj-icon-picker-border-color);box-sizing:border-box;border-radius:var(--wj-icon-picker-radius)}.picker{width:320px;height:271px;box-shadow:0 0 5px #0000000d,0 5px 20px #0000001a;border-radius:var(--wj-icon-picker-radius);border-width:var(--wj-icon-picker-border-width);border-style:var(--wj-icon-picker-border-style);border-color:var(--wj-icon-picker-border-color);overflow:auto;padding:1rem;background:var(--wj-background)}.icon-items{--icon-min-width: 2rem;display:grid;grid-gap:.5rem;grid-template-columns:repeat(auto-fit,minmax(var(--icon-min-width),1fr))}.icon-item{box-sizing:border-box;display:flex;align-items:center;justify-content:center;text-align:center;color:inherit;padding:.25rem;min-height:var(--wj-icon-picker-icon-size);min-width:var(--wj-icon-picker-icon-size);text-decoration:none}.icon-item:hover{border-radius:.25rem;background:var(--wj-border-color)}.wj-size{--wj-icon-size: 24px !important}icon-item svg{width:var(--wj-icon-picker-icon-size);height:var(--wj-icon-picker-icon-size)}wj-input{--wj-input-border-radius: 4px;--wj-input-margin-bottom: 0}wj-infinite-scroll{margin-top:1rem}wj-select{--wj-select-border-width: 0 0 1px 0 !important;--wj-select-border-radius: 0 !important;margin-bottom:1rem}.anchor wj-icon{--wj-icon-size: 100% !important}
`;
class v extends w {
  constructor() {
    super();
    h(this, "className", "IconPicker");
    /*
    * @description event handler pre vyhladavanie ikon
    * @param e
     */
    h(this, "searchIcon", (e) => {
      this.infiniteScroll.unScrollEvent(), this.infiniteScroll.setCustomData = (t = 0) => {
        let i = this.tags.filter((r) => r.tags.includes(e.detail.value));
        return {
          data: i,
          page: t,
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
  set markerPosition(e) {
    this._markerPosition = e;
  }
  get markerPosition() {
    return this._markerPosition;
  }
  set swatches(e) {
    this.setAttribute("swatches", e.split(","));
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
  draw(e, t, i) {
    let o = document.createDocumentFragment(), r = document.createElement("div");
    r.classList.add("native-color-picker");
    let d = document.createElement("div");
    d.setAttribute("slot", "anchor"), d.classList.add("anchor");
    let p = document.createElement("div");
    p.classList.add("picker");
    let s = document.createElement("wj-input");
    s.classList.add("input"), s.setAttribute("variant", "standard"), s.setAttribute("placeholder", "type to filter..."), s.setAttribute("clearable", ""), s.addEventListener("wj-input:input", this.searchIcon);
    let a = new g();
    a.setAttribute("url", "/demo/assets/data/tags.json"), a.setAttribute("placement", ".icon-items"), a.setAttribute("size", this.size), a.setAttribute("height", "223px"), a.innerHTML = `<div class="icon-items">
            <div class="icon-item" iterate>
                <wj-tooltip content="{{name}}">
                    <wj-icon name="{{name}}" size="large"></wj-icon>
                </wj-tooltip>
            </div>
        </div>`, p.appendChild(s), p.appendChild(a);
    let c = document.createElement("wj-popup");
    return c.setAttribute("placement", this.placement || "bottom-start"), c.setAttribute("offset", this.offset), c.setAttribute("manual", ""), c.appendChild(d), c.appendChild(p), r.appendChild(c), o.appendChild(r), this.popup = c, this.input = s, this.anchor = d, this.picker = p, this.infiniteScroll = a, o;
  }
  afterDraw() {
    this.setupInfiniteScroll(), this.addEventListener("wj-popup:show", (e) => {
      this.initial();
    }), this.addEventListener("wj-input:clear", (e) => {
      this.setupInfiniteScroll(), this.clearIconsContainer(), this.infiniteScroll.scrollEvent(), this.infiniteScroll.loadPages(0);
    }), this.addEventListener("wj-infinite-scroll:click-item", (e) => {
      const i = e.detail.context.querySelector("wj-icon").getAttribute("name"), o = this.tags.find((d) => d.name === i), r = document.createElement("wj-icon");
      r.setAttribute("name", i), o.icon = r, this.value = o, this.anchor.innerHTML = "", this.anchor.appendChild(r), b.dispatchCustomEvent(this, "wj-icon-picker:select", o);
    }), this.init = !1;
  }
  initial() {
    this.infiniteScroll.scrollEvent();
  }
  setupInfiniteScroll() {
    this.infiniteScroll.setCustomData = (e = 0) => {
      let t = Object.values(this.tags);
      return {
        data: t.slice(e * this.size, e * this.size + this.size),
        page: e,
        size: this.size,
        totalPages: Math.round(t.length / this.size)
      };
    };
  }
  createIconItem(e) {
    let t = document.createElement("div");
    t.classList.add("icon-item");
    let i = document.createElement("wj-icon");
    return i.setAttribute("name", e.name), i.classList.add("lazy-loaded-image", "lazy"), t.appendChild(i), t;
  }
  createOption(e) {
    let t = document.createElement("wj-option");
    return t.setAttribute("value", e), t.innerText = e, t;
  }
  getCategory(e) {
    return [...new Set(e.map((i) => i.category))];
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
