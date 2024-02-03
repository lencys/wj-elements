var u = Object.defineProperty;
var m = (l, r, t) => r in l ? u(l, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[r] = t;
var c = (l, r, t) => (m(l, typeof r != "symbol" ? r + "" : r, t), t);
import g, { event as p } from "./wj-element.js";
import "./wj-store.js";
const f = `/*!
* direction.scss
*/:host{--wj-infinite-scroll-width: 100%;--wj-infinite-scroll-height: 300px;overflow-x:auto;width:var(--wj-infinite-scroll-width);height:var(--wj-infinite-scroll-height);display:block}
`;
class w extends g {
  constructor(t = {}) {
    super();
    c(this, "className", "InfiniteScroll");
    c(this, "scrollEvent", () => {
      this.addEventListener("scroll", this.onScroll);
    });
    c(this, "unScrollEvent", () => {
      this.removeEventListener("scroll", this.onScroll);
    });
    c(this, "onScroll", (t) => {
      const { scrollTop: s, scrollHeight: e, clientHeight: i } = t.target;
      s + i >= e - 300 && this.currentPage <= this.totalPages && this.isLoading.includes(this.currentPage) && (this.currentPage++, this.loadPages(this.currentPage));
    });
    this.totalPages = 0, this.isLoading = [], String.prototype.interpolate = function(s) {
      let e = this, i = e.match(/\{{.*?\}}/g);
      if (i)
        for (let a of i) {
          let o = a.replace("{{", "").replace("}}", ""), n = "";
          o.split(".").forEach((h) => {
            n = n == "" ? s[h] : n[h];
          }), e = e.replace(a, n);
        }
      return e;
    };
  }
  static get cssStyleSheet() {
    return f;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  beforeDraw(t, s, e) {
    this.iterate = this.querySelector("[iterate]"), this.infiniteScrollTemplate = this.iterate.outerHTML, this.iterate.remove(), this.setAttribute("style", "height: " + this.height);
  }
  draw(t, s, e) {
    let i = document.createDocumentFragment(), a = document.createElement("slot"), o = document.createElement("div");
    return o.classList.add("loader"), i.appendChild(o), i.appendChild(a), this.loaderEl = o, i;
  }
  async afterDraw() {
    this.queryParams = this.queryParams || "", this.size = +this.size || 10, this.currentPage = 0, this.scrollEvent(), await this.loadPages(this.currentPage);
  }
  /** @function getPages
   * @description nacitanie dalsej stranky
   * @return response json
   */
  async getPages(t) {
    let s = this.url.includes("?");
    const e = await fetch(`${this.url}${s ? "&" : "?"}page=${t}&size=${this.size}${this == null ? void 0 : this.queryParams}`);
    if (!e.ok)
      throw new Error(`An error occurred: ${e.status}`);
    return await e.json();
  }
  hideLoader() {
    this.loaderEl.classList.remove("show");
  }
  showLoader() {
    this.loaderEl.classList.add("show");
  }
  hasMorePages(t) {
    return this.totalPages === 0 || t <= this.totalPages;
  }
  /** @function getPages
   * @description methoda zavola getPages a nasledne sa vykona callback funkcia draw. Ako a kde sa nieco vykresli sa deje v inicializacii lib-ky
   * @return response json
   */
  async loadPages(t) {
    this.showLoader();
    try {
      if (this.hasMorePages(t) || typeof this.setCustomData == "function") {
        let s, e;
        typeof this.setCustomData == "function" ? e = await this.setCustomData(t) : e = await this.getPages(t), this.totalPages = e.totalPages, this.currentPage = t;
        const i = new DOMParser();
        let a = this;
        this.hasAttribute("placement") && (a = this.querySelector(this.placement)), e.data.forEach((o) => {
          const n = this.infiniteScrollTemplate.interpolate(o), h = i.parseFromString(n, "text/html");
          console.log("DOC", this.iterate.tagName.toLowerCase());
          const d = h.querySelector(this.iterate.tagName.toLowerCase());
          p.addListener(d, "click", "wj-infinite-scroll:click-item", null, { stopPropagation: !0 }), a.insertAdjacentElement("beforeend", d);
        }), this.isLoading.push(t);
      }
    } catch (s) {
      console.log(s.message);
    } finally {
      this.hideLoader();
    }
  }
}
customElements.get("wj-infinite-scroll") || window.customElements.define("wj-infinite-scroll", w);
export {
  w as InfiniteScroll
};
