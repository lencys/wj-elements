var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import { L as Localizer } from "./localize-DSOailh_.js";
const styles = "/*\n[ WJ Avatar ]\n*/";
class RelativeTime extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "RelativeTime");
    this.localizer = new Localizer(this);
  }
  get dateISO() {
    let date = /* @__PURE__ */ new Date();
    let inputDate = this.getAttribute("date");
    if (this.hasAttribute("date")) {
      if (this.isISODate(inputDate)) {
        inputDate = inputDate;
      } else {
        inputDate = +inputDate * 1e3;
      }
      date = new Date(inputDate);
    }
    return date.toISOString();
  }
  static get cssStyleSheet() {
    return styles;
  }
  static get observedAttributes() {
    return [""];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("div");
    element.setAttribute("part", "native");
    element.classList.add("native-relative-time");
    element.innerText = this.getRelativeTimeString(this.dateISO);
    fragment.appendChild(element);
    return fragment;
  }
  getRelativeTimeString(date, lang = navigator.language) {
    let dateObj = new Date(date);
    const timeMs = dateObj.getTime();
    const deltaSeconds = Math.round((timeMs - Date.now()) / 1e3);
    const cutoffs = [
      60,
      3600,
      86400,
      86400 * 7,
      86400 * 30,
      86400 * 365,
      Infinity
    ];
    const units = ["second", "minute", "hour", "day", "week", "month", "year"];
    const unitIndex = cutoffs.findIndex((cutoff) => cutoff > Math.abs(deltaSeconds));
    const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;
    return this.localizer.relativeTime(Math.floor(deltaSeconds / divisor), units[unitIndex], { numeric: "auto" });
  }
  isISODate(str) {
    let regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\+\d{2}:\d{2}|Z)$/;
    return regex.test(str);
  }
}
WJElement.define("wj-relative-time", RelativeTime);
export {
  RelativeTime as default
};
