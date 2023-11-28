var d = Object.defineProperty;
var u = (a, r, t) => r in a ? d(a, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[r] = t;
var h = (a, r, t) => (u(a, typeof r != "symbol" ? r + "" : r, t), t);
import g from "./wj-element.js";
import "./wj-store.js";
const m = `/*!
* direction.scss
*/:host{--wj-infinite-scroll-width: 100%;--wj-infinite-scroll-height: 300px;overflow-x:auto;width:var(--wj-infinite-scroll-width);height:var(--wj-infinite-scroll-height);display:block}
`;
class p extends g {
  constructor(t = {}) {
    super();
    h(this, "className", "InfiniteScroll");
    h(this, "scrollEvent", () => {
      this.addEventListener("scroll", this.onScroll);
    });
    h(this, "onScroll", (t) => {
      const { scrollTop: s, scrollHeight: e, clientHeight: i } = t.target;
      s + i >= e - 300 && this.currentPage <= this.totalPages && this.isLoading.includes(this.currentPage) && (this.currentPage++, this.loadPages(this.currentPage));
    });
    this.totalPages = 0, this.isLoading = [], String.prototype.interpolate = function(s) {
      let e = this, i = e.match(/\{{.*?\}}/g);
      if (i)
        for (let o of i) {
          let l = o.replace("{{", "").replace("}}", ""), n = "";
          l.split(".").forEach((c) => {
            n = n == "" ? s[c] : n[c];
          }), e = e.replace(o, n);
        }
      return e;
    };
  }
  static get cssStyleSheet() {
    return m;
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
    let i = document.createDocumentFragment(), o = document.createElement("slot"), l = document.createElement("div");
    return l.classList.add("loader"), i.appendChild(l), i.appendChild(o), this.loaderEl = l, i;
  }
  async afterDraw() {
    this.queryParams = this.queryParams || "", this.size = +this.size || 10, this.currentPage = 0, await this.loadPages(this.currentPage);
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
      if (this.hasMorePages(t)) {
        let s, e;
        typeof this.setCustomData == "function" ? e = await this.setCustomData(t) : e = await this.getPages(t), this.totalPages = e.totalPages, this.currentPage = t, s = e.data.map((o) => this.infiniteScrollTemplate.interpolate(o));
        let i = this;
        this.hasAttribute("placement") && (i = this.querySelector(this.placement)), i.insertAdjacentHTML("beforeend", s.join("")), this.isLoading.push(t);
      }
    } catch (s) {
      console.log(s.message);
    } finally {
      this.hideLoader();
    }
  }
}
customElements.get("wj-infinite-scroll") || window.customElements.define("wj-infinite-scroll", p);
export {
  p as InfiniteScroll
};
