var h = Object.defineProperty;
var v = (n, i, e) => i in n ? h(n, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[i] = e;
var d = (n, i, e) => (v(n, typeof i != "symbol" ? i + "" : i, e), e);
import f from "./wje-element.js";
import { L as S } from "./localize-7fxVJArK.js";
class l extends f {
  /**
   * Creates an instance of RelativeTime.
   *
   * @constructor
   */
  constructor() {
    super();
    d(this, "className", "RelativeTime");
    this.localizer = new S(this);
  }
  /**
   * Gets the ISO date of the relative time component.
   *
   * @returns {string} The ISO date.
   */
  get dateISO() {
    let e = /* @__PURE__ */ new Date(), t = this.getAttribute("date");
    return this.hasAttribute("date") && (this.isISODate(t) ? t = t : t = +t * 1e3, e = new Date(t)), e.toISOString();
  }
  /**
   * Returns the CSS styles for the component.
   *
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Returns the list of attributes to observe for changes.
   *
   * @static
   * @returns {Array<string>}
   */
  static get observedAttributes() {
    return [""];
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draws the component.
   *
   * @param {Object} context - The context for drawing.
   * @param {Object} store - The store for drawing.
   * @param {Object} params - The parameters for drawing.
   * @returns {DocumentFragment}
   */
  draw(e, t, u) {
    let r = document.createDocumentFragment(), a = document.createElement("div");
    return a.setAttribute("part", "native"), a.classList.add("native-relative-time"), a.innerText = this.getRelativeTimeString(this.dateISO), r.appendChild(a), r;
  }
  /**
   * Returns the relative time string for the given date.
   *
   * @param {string} date - The date.
   * @param {string} lang - The language.
   * @returns {string} The relative time string.
   */
  getRelativeTimeString(e, t = navigator.language) {
    const r = new Date(e).getTime(), a = Math.round((r - Date.now()) / 1e3), o = [
      60,
      3600,
      86400,
      86400 * 7,
      86400 * 30,
      86400 * 365,
      1 / 0
    ], c = ["second", "minute", "hour", "day", "week", "month", "year"], s = o.findIndex((g) => g > Math.abs(a)), m = s ? o[s - 1] : 1;
    return this.localizer.relativeTime(Math.floor(a / m), c[s], { numeric: "auto" });
  }
  /**
   * Checks if the given string is an ISO date.
   *
   * @param {string} str - The string to check.
   * @returns {boolean} True if the string is an ISO date, false otherwise.
   */
  isISODate(e) {
    return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\+\d{2}:\d{2}|Z)$/.test(e);
  }
}
l.define("wje-relative-time", l);
export {
  l as default
};
