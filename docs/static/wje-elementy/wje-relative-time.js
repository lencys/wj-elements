var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { Localizer } from "./localize.js";
import WJElement from "./wje-element.js";
class RelativeTime extends WJElement {
  /**
   * Creates an instance of RelativeTime.
   * @class
   */
  constructor() {
    super();
    /**
     * Sets the lang of the relative time component.
     * @type {string}
     */
    __publicField(this, "className", "RelativeTime");
    this.localizer = new Localizer(this);
  }
  /**
   * Sets the date of the relative time component.
   * @param value
   */
  set date(value) {
    this.setAttribute("date", value);
  }
  /**
   * Gets the date of the relative time component.
   * @returns {string}
   */
  get date() {
    return this.getAttribute("date");
  }
  /**
   * Sets the object date of the relative time component.
   * @param value
   */
  set objectDate(value) {
    this.setAttribute("object-date", value);
  }
  /**
   * Gets the object date of the relative time component.
   * @returns {Date}
   */
  get objectDate() {
    let date = /* @__PURE__ */ new Date();
    let inputDate = this.date;
    if (!!inputDate && inputDate !== "") {
      inputDate = this.isISODate(inputDate) ? inputDate : +inputDate * 1e3;
      date = new Date(inputDate);
    }
    return date;
  }
  /**
   * Returns the list of attributes to observe for changes.
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
   * Draws the component for the relative time.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("div");
    element.setAttribute("part", "native");
    element.classList.add("native-relative-time");
    element.innerText = this.getRelativeTimeString();
    fragment.appendChild(element);
    return fragment;
  }
  /**
   * Returns the relative time string for the given date.
   */
  getRelativeTimeString(lang = navigator.language) {
    if (this.objectDate.toString() === "Invalid Date" || this.objectDate.toString() === "NaN") {
      return "";
    }
    const timeMs = this.objectDate.getTime();
    const deltaSeconds = Math.round((timeMs - Date.now()) / 1e3);
    const cutoffs = [60, 3600, 86400, 86400 * 7, 86400 * 30, 86400 * 365, Infinity];
    const units = ["second", "minute", "hour", "day", "week", "month", "year"];
    const unitIndex = cutoffs.findIndex((cutoff) => cutoff > Math.abs(deltaSeconds));
    const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;
    return this.localizer.relativeTime(
      this.getAttribute("lang"),
      Math.floor(deltaSeconds / divisor),
      units[unitIndex],
      { numeric: "auto" }
    );
  }
  /**
   * Checks if the given string is an ISO date.
   * @param {string} str The string to check.
   * @returns {boolean} True if the string is an ISO date, false otherwise.
   */
  isISODate(str) {
    const date = new Date(str);
    return !isNaN(date.getTime());
  }
}
RelativeTime.define("wje-relative-time", RelativeTime);
export {
  RelativeTime as default
};
