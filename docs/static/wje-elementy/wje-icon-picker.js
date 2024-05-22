var w = Object.defineProperty;
var g = (l, o, e) => o in l ? w(l, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[o] = e;
var p = (l, o, e) => (g(l, typeof o != "symbol" ? o + "" : o, e), e);
import b, { event as j } from "./wje-element.js";
import u from "./wje-infinite-scroll.js";
import v from "./wje-input.js";
import f from "./wje-tooltip.js";
import "./wje-popup.js";
import { P as k } from "./popup.element-BFIsYEbU.js";
const x = ":host{--wje-icon-picker-radius: var(--wje-border-radius-small);--wje-icon-picker-icon-size: 1.5rem;--wje-icon-picker-border-width: 1px;--wje-icon-picker-border-style: solid;--wje-icon-picker-border-color: var(--wje-border-color);--wje-icon-picker-padding: .25rem;padding:0 1rem}.anchor{width:var(--wje-icon-picker-icon-size);height:var(--wje-icon-picker-icon-size);padding:var(--wje-icon-picker-padding);border-width:var(--wje-icon-picker-border-width);border-style:var(--wje-icon-picker-border-style);border-color:var(--wje-icon-picker-border-color);box-sizing:border-box;border-radius:var(--wje-icon-picker-radius)}.picker{width:320px;height:271px;box-shadow:0 0 5px #0000000d,0 5px 20px #0000001a;border-radius:var(--wje-icon-picker-radius);border-width:var(--wje-icon-picker-border-width);border-style:var(--wje-icon-picker-border-style);border-color:var(--wje-icon-picker-border-color);overflow:auto;padding:1rem;background:var(--wje-background)}.icon-items{--icon-min-width: 2rem;display:grid;grid-gap:.5rem;grid-template-columns:repeat(auto-fit,minmax(var(--icon-min-width),1fr))}.icon-item{box-sizing:border-box;display:flex;align-items:center;justify-content:center;text-align:center;color:inherit;padding:.25rem;min-height:var(--wje-icon-picker-icon-size);min-width:var(--wje-icon-picker-icon-size);text-decoration:none}.icon-item:hover{border-radius:.25rem;background:var(--wje-border-color)}.wje-size{--wje-icon-size: 24px !important}icon-item svg{width:var(--wje-icon-picker-icon-size);height:var(--wje-icon-picker-icon-size)}wje-input{--wje-input-border-radius: 4px;--wje-input-margin-bottom: 0}wje-infinite-scroll{margin-top:1rem}wje-select{--wje-select-border-width: 0 0 1px 0 !important;--wje-select-border-radius: 0 !important;margin-bottom:1rem}.anchor wje-icon{--wje-icon-size: 100% !important}";
class m extends b {
  /**
   * Creates an instance of IconPicker.
   *
   * @constructor
   */
  constructor() {
    super();
    /**
     * Dependencies of the IconPicker component.
     *
     * @property {Object} depandencies
     */
    p(this, "depandencies", {
      "wje-input": v,
      "wje-infinite-scroll": u,
      "wje-tooltip": f,
      "wje-popup": k
    });
    p(this, "className", "IconPicker");
    /**
     * Event handler for searching icons.
     *
     * @param {Event} e - The event.
     */
    p(this, "searchIcon", (e) => {
      this.infiniteScroll.unScrollEvent(), this.infiniteScroll.setCustomData = (i = 0) => {
        let t = this.tags.filter((n) => n.tags.includes(e.detail.value));
        return {
          data: t,
          page: i,
          size: this.size,
          totalPages: Math.round(t.length / this.size)
        };
      }, this.clearIconsContainer(), this.infiniteScroll.loadPages();
    });
    /**
     * Closes the component.
     */
    p(this, "onClose", () => {
      this.popup.onHide();
    });
    /**
     * Gets the URL of the tags.
     *
     * @param {string} path - The path to get the URL of.
     * @returns {string} The URL of the tags.
     */
    p(this, "getTagsUrl", (e) => {
      let i = new URL(import.meta.url), t = i.pathname, r = t.substring(0, t.lastIndexOf("/"));
      return new URL(i.origin + r + e).href;
    });
    this.size = 48;
  }
  /**
   * Setter for the markerPosition property.
   *
   * @param {any} value - The value to set.
   */
  set markerPosition(e) {
    this._markerPosition = e;
  }
  /**
   * Getter for the markerPosition property.
   *
   * @returns {any} The value of the markerPosition property.
   */
  get markerPosition() {
    return this._markerPosition;
  }
  /**
   * Setter for the swatches property.
   *
   * @param {any} value - The value to set.
   */
  set swatches(e) {
    this.setAttribute("swatches", e.split(","));
  }
  /**
   * Getter for the swatches property.
   *
   * @returns {any} The value of the swatches property.
   */
  get swatches() {
    return this._swatches;
  }
  /**
   * Returns the CSS styles for the component.
   *
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return x;
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
   */
  async beforeDraw() {
    this.tags = Object.values(await this.getTags()), this.category = this.getCategory(this.tags);
  }
  /**
   * Draws the component.
   *
   * @param {Object} context - The context for drawing.
   * @param {Object} store - The store for drawing.
   * @param {Object} params - The parameters for drawing.
   * @returns {DocumentFragment}
   */
  draw(e, i, t) {
    let r = document.createDocumentFragment(), n = document.createElement("div");
    n.classList.add("native-color-picker");
    let d = document.createElement("div");
    d.setAttribute("slot", "anchor"), d.classList.add("anchor");
    let h = document.createElement("div");
    h.classList.add("picker");
    let s = document.createElement("wje-input");
    s.classList.add("input"), s.setAttribute("variant", "standard"), s.setAttribute("placeholder", "type to filter..."), s.setAttribute("clearable", ""), s.addEventListener("wje-input:input", this.searchIcon);
    let a = new u();
    a.setAttribute("url", this.getTagsUrl("/assets/tags.json")), a.setAttribute("placement", ".icon-items"), a.setAttribute("size", this.size), a.setAttribute("height", "223px"), a.innerHTML = `<div class="icon-items">
            <div class="icon-item" iterate>
                <wje-tooltip content="{{name}}">
                    <wje-icon name="{{name}}" size="large"></wje-icon>
                </wje-tooltip>
            </div>
        </div>`, h.appendChild(s), h.appendChild(a);
    let c = document.createElement("wje-popup");
    return c.setAttribute("placement", this.placement || "bottom-start"), c.setAttribute("offset", this.offset), c.setAttribute("manual", ""), c.appendChild(d), c.appendChild(h), n.appendChild(c), r.appendChild(n), this.popup = c, this.input = s, this.anchor = d, this.picker = h, this.infiniteScroll = a, r;
  }
  /**
   * Called after the component has been drawn.
   */
  afterDraw() {
    this.setupInfiniteScroll(), this.addEventListener("wje-popup:show", (e) => {
      this.initial();
    }), this.addEventListener("wje-input:clear", (e) => {
      this.setupInfiniteScroll(), this.clearIconsContainer(), this.infiniteScroll.scrollEvent(), this.infiniteScroll.loadPages(0);
    }), this.addEventListener("wje-infinite-scroll:click-item", (e) => {
      const t = e.detail.context.querySelector("wje-icon").getAttribute("name"), r = this.tags.find((d) => d.name === t), n = document.createElement("wje-icon");
      n.setAttribute("name", t), r.icon = n, this.value = r, this.anchor.innerHTML = "", this.anchor.appendChild(n), j.dispatchCustomEvent(this, "wje-icon-picker:select", r);
    }), this.init = !1;
  }
  /**
   * Initializes the component.
   */
  initial() {
    this.infiniteScroll.scrollEvent();
  }
  /**
   * Sets up the infinite scroll for the component.
   */
  setupInfiniteScroll() {
    this.infiniteScroll.setCustomData = (e = 0) => {
      let i = Object.values(this.tags);
      return {
        data: i.slice(e * this.size, e * this.size + this.size),
        page: e,
        size: this.size,
        totalPages: Math.round(i.length / this.size)
      };
    };
  }
  /**
   * Gets the category of the tags.
   *
   * @param {Array} tags - The tags to get the category of.
   * @returns {Array} The category of the tags.
   */
  getCategory(e) {
    return [...new Set(e.map((t) => t.category))];
  }
  /**
   * Gets the tags.
   *
   * @returns {Promise<Array>} The tags.
   */
  async getTags() {
    return (await fetch(this.getTagsUrl("/assets/tags.json"))).json();
  }
  /**
   * Called when the component is disconnected.
   */
  disconnectedCallback() {
    this.init = !1;
  }
  /**
   * Clears the icons container.
   */
  clearIconsContainer() {
    this.context.querySelector(".icon-items").innerHTML = "";
  }
}
m.define("wje-icon-picker", m);
export {
  m as default
};
