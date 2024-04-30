var m = Object.defineProperty;
var p = (l, r, t) => r in l ? m(l, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[r] = t;
var d = (l, r, t) => (p(l, typeof r != "symbol" ? r + "" : r, t), t);
import f, { WjElementUtils as w, event as g } from "./wje-element.js";
const y = ":host{--wje-infinite-scroll-width: 100%;--wje-infinite-scroll-height: 300px;--wje-infinite-scroll-loading-bg: rgba(0, 0, 0, 0);overflow-x:auto;width:var(--wje-infinite-scroll-width);height:var(--wje-infinite-scroll-height);display:block}.native{position:relative}.loading{position:sticky;display:none;justify-content:center;align-items:center;width:100%;height:100%;top:0;left:0;z-index:9999;background-color:var(--wje-infinite-scroll-loading-bg)}.loading.show{display:flex}[name=ending]{display:none;margin-top:1rem;text-align:center}[name=ending].show{display:block}";
class u extends f {
  /**
   * Creates an instance of InfiniteScroll.
   *
   * @constructor
   * @param {Object} options - The options for the InfiniteScroll.
   */
  constructor(t = {}) {
    super();
    d(this, "className", "InfiniteScroll");
    /**
     * Adds the scroll event listener.
     */
    d(this, "scrollEvent", () => {
      this.addEventListener("scroll", this.onScroll);
    });
    /**
     * Removes the scroll event listener.
     */
    d(this, "unScrollEvent", () => {
      this.removeEventListener("scroll", this.onScroll);
    });
    /**
     * Handles the scroll event.
     *
     * @param {Event} e - The event.
     */
    d(this, "onScroll", (t) => {
      const { scrollTop: i, scrollHeight: e, clientHeight: n } = t.target;
      i + n >= e - 300 && this.currentPage <= this.totalPages && this.isLoading.includes(this.currentPage) && (this.currentPage++, this.loadPages(this.currentPage));
    });
    this.totalPages = 0, this.isLoading = [], this._response = {}, String.prototype.interpolate = function(i) {
      let e = this, n = e.match(/\{{.*?\}}/g);
      if (n)
        for (let s of n) {
          let c = s.replace("{{", "").replace("}}", ""), a = "";
          console.log("CLEAN KEY", c), c.split(".").forEach((o) => {
            console.log(o), a = a == "" ? i[o] : a[o];
          }), e = e.replace(s, a);
        }
      return e;
    };
  }
  set response(t) {
    this._response = t;
  }
  get response() {
    return this._response;
  }
  set objectName(t) {
    this.setAttribute("object-name", t);
  }
  get objectName() {
    return this.getAttribute("object-name") || "data";
  }
  /**
   * Returns the CSS styles for the component.
   *
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return y;
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
  beforeDraw(t, i, e) {
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
  draw(t, i, e) {
    let n = document.createDocumentFragment(), s = document.createElement("div");
    s.classList.add("native"), s.setAttribute("part", "native-infinite-scroll");
    let c = document.createElement("slot"), a = document.createElement("slot");
    if (a.setAttribute("name", "ending"), w.hasSlot(this, "loader")) {
      let o = document.createElement("div");
      o.classList.add("loading");
      let h = document.createElement("slot");
      h.setAttribute("name", "loader"), o.appendChild(h), this.loadingEl = o, n.appendChild(o);
    }
    return s.appendChild(c), s.appendChild(a), n.appendChild(s), this.endingEl = a, n;
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
    let i = this.url.includes("?");
    const e = await fetch(`${this.url}${i ? "&" : "?"}page=${t}&size=${this.size}${this == null ? void 0 : this.queryParams}`);
    if (!e.ok)
      throw new Error(`An error occurred: ${e.status}`);
    return await e.json();
  }
  /**
   * Hides the loader.
   */
  hideLoader() {
    var t;
    (t = this == null ? void 0 : this.loadingEl) == null || t.classList.remove("show");
  }
  /**
   * Shows the loader.
   */
  showLoader() {
    var t;
    (t = this == null ? void 0 : this.loadingEl) == null || t.classList.add("show");
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
        let i, e;
        typeof this.setCustomData == "function" ? e = await this.setCustomData(t) : e = await this.getPages(t), this.totalPages = e.totalPages, this.currentPage = t;
        const n = new DOMParser();
        let s = this;
        this.hasAttribute("placement") && (s = this.querySelector(this.placement)), g.dispatchCustomEvent(this, "wje-infinite-scroll:load", e), this.response = e, e[this.objectName].forEach((c) => {
          const a = this.infiniteScrollTemplate.interpolate(c), h = n.parseFromString(a, "text/html").querySelector(this.iterate.tagName.toLowerCase());
          g.addListener(h, "click", "wje-infinite-scroll:click-item", null, { stopPropagation: !0 }), s.insertAdjacentElement("beforeend", h);
        }), this.isLoading.push(t);
      } else
        g.dispatchCustomEvent(this, "wje-infinite-scroll:complete"), this.endingEl.classList.add("show");
    } catch (i) {
      console.log(i.message);
    } finally {
      this.hideLoader();
    }
  }
}
u.define("wje-infinite-scroll", u);
export {
  u as default
};
