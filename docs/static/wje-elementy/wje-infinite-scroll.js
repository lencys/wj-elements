var g = Object.defineProperty;
var m = (l, r, t) => r in l ? g(l, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[r] = t;
var h = (l, r, t) => (m(l, typeof r != "symbol" ? r + "" : r, t), t);
import p, { event as f } from "./wje-element.js";
const w = ":host{--wje-infinite-scroll-width: 100%;--wje-infinite-scroll-height: 300px;overflow-x:auto;width:var(--wje-infinite-scroll-width);height:var(--wje-infinite-scroll-height);display:block}";
class u extends p {
  /**
   * Creates an instance of InfiniteScroll.
   *
   * @constructor
   * @param {Object} options - The options for the InfiniteScroll.
   */
  constructor(t = {}) {
    super();
    h(this, "className", "InfiniteScroll");
    /**
     * Adds the scroll event listener.
     */
    h(this, "scrollEvent", () => {
      this.addEventListener("scroll", this.onScroll);
    });
    /**
     * Removes the scroll event listener.
     */
    h(this, "unScrollEvent", () => {
      this.removeEventListener("scroll", this.onScroll);
    });
    /**
     * Handles the scroll event.
     *
     * @param {Event} e - The event.
     */
    h(this, "onScroll", (t) => {
      const { scrollTop: s, scrollHeight: e, clientHeight: i } = t.target;
      s + i >= e - 300 && this.currentPage <= this.totalPages && this.isLoading.includes(this.currentPage) && (this.currentPage++, this.loadPages(this.currentPage));
    });
    this.totalPages = 0, this.isLoading = [], String.prototype.interpolate = function(s) {
      let e = this, i = e.match(/\{{.*?\}}/g);
      if (i)
        for (let a of i) {
          let o = a.replace("{{", "").replace("}}", ""), n = "";
          o.split(".").forEach((c) => {
            n = n == "" ? s[c] : n[c];
          }), e = e.replace(a, n);
        }
      return e;
    };
  }
  /**
   * Returns the CSS styles for the component.
   *
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return w;
  }
  /**
   * Returns the list of attributes to observe for changes.
   *
   * @static
   * @returns {Array<string>}
   */
  static get observedAttributes() {
    return [];
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Prepares the component before drawing.
   *
   * @param {Object} context - The context for drawing.
   * @param {Object} store - The store for drawing.
   * @param {Object} params - The parameters for drawing.
   */
  beforeDraw(t, s, e) {
    this.iterate = this.querySelector("[iterate]"), this.infiniteScrollTemplate = this.iterate.outerHTML, this.iterate.remove(), this.setAttribute("style", "height: " + this.height);
  }
  /**
   * Draws the component.
   *
   * @param {Object} context - The context for drawing.
   * @param {Object} store - The store for drawing.
   * @param {Object} params - The parameters for drawing.
   * @returns {DocumentFragment}
   */
  draw(t, s, e) {
    let i = document.createDocumentFragment(), a = document.createElement("slot"), o = document.createElement("div");
    return o.classList.add("loader"), i.appendChild(o), i.appendChild(a), this.loaderEl = o, i;
  }
  /**
   * Called after the component has been drawn.
   */
  async afterDraw() {
    this.queryParams = this.queryParams || "", this.size = +this.size || 10, this.currentPage = 0, this.scrollEvent(), await this.loadPages(this.currentPage);
  }
  /**
   * Fetches the pages from the server.
   *
   * @param {number} page - The page number.
   * @returns {Promise<Object>} The response from the server.
   */
  async getPages(t) {
    let s = this.url.includes("?");
    const e = await fetch(`${this.url}${s ? "&" : "?"}page=${t}&size=${this.size}${this == null ? void 0 : this.queryParams}`);
    if (!e.ok)
      throw new Error(`An error occurred: ${e.status}`);
    return await e.json();
  }
  /**
   * Hides the loader.
   */
  hideLoader() {
    this.loaderEl.classList.remove("show");
  }
  /**
   * Shows the loader.
   */
  showLoader() {
    this.loaderEl.classList.add("show");
  }
  /**
   * Checks if there are more pages to load.
   *
   * @param {number} page - The page number.
   * @returns {boolean} Whether there are more pages to load.
   */
  hasMorePages(t) {
    return this.totalPages === 0 || t <= this.totalPages;
  }
  /**
   * Loads the pages.
   *
   * @param {number} page - The page number.
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
          const n = this.infiniteScrollTemplate.interpolate(o), d = i.parseFromString(n, "text/html").querySelector(this.iterate.tagName.toLowerCase());
          f.addListener(d, "click", "wje-infinite-scroll:click-item", null, { stopPropagation: !0 }), a.insertAdjacentElement("beforeend", d);
        }), this.isLoading.push(t);
      }
    } catch (s) {
      console.log(s.message);
    } finally {
      this.hideLoader();
    }
  }
}
u.define("wje-infinite-scroll", u);
export {
  u as default
};
