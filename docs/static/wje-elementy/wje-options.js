var p = Object.defineProperty;
var c = (o, e, t) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var a = (o, e, t) => (c(o, typeof e != "symbol" ? e + "" : e, t), t);
import d, { event as u } from "./wje-element.js";
import { O as h } from "./option.element-CpeafIM-.js";
class r extends d {
  /**
   * Creates an instance of Options.
   *
   * @constructor
   */
  constructor() {
    super();
    a(this, "depandencies", {
      "wje-option": h
    });
    a(this, "className", "Options");
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
   * Fetches the pages and creates the options elements.
   */
  async beforeDraw() {
    this.response = await this.getPages();
    let t = document.createDocumentFragment();
    this.response.forEach((s, i) => {
      let n = document.createElement("wje-option");
      n.setAttribute("value", s[this.itemValue] || s.value), n.innerText = s[this.itemText] || s.text, t.appendChild(n);
    }), this.parentElement.appendChild(t), u.dispatchCustomEvent(this, "wje-options:load", {});
  }
  /**
   * Fetches the pages from the provided URL.
   *
   * @param {number} page - The page number to fetch.
   * @returns {Promise<Object>} The fetched data.
   * @throws Will throw an error if the response is not ok.
   */
  async getPages(t) {
    const s = await fetch(this.url);
    if (!s.ok)
      throw new Error(`An error occurred: ${s.status}`);
    return await s.json();
  }
}
r.define("wje-options", r);
export {
  r as default
};
