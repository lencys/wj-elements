var g = Object.defineProperty;
var h = (n, i, t) => i in n ? g(n, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[i] = t;
var d = (n, i, t) => (h(n, typeof i != "symbol" ? i + "" : i, t), t);
import v from "./wj-element.js";
import { L as p } from "./localize-762a9f0f.js";
import "./wj-store.js";
const w = "";
class S extends v {
  constructor() {
    super();
    d(this, "className", "RelativeTime");
    this.localizer = new p(this);
  }
  get dateISO() {
    let t = /* @__PURE__ */ new Date(), e = this.getAttribute("date");
    return this.hasAttribute("date") && (this.isISODate(e) ? e = e : e = +e * 1e3, t = new Date(e)), t.toISOString();
  }
  static get cssStyleSheet() {
    return w;
  }
  static get observedAttributes() {
    return [""];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(t, e, l) {
    let s = document.createDocumentFragment(), a = document.createElement("div");
    return a.setAttribute("part", "native"), a.classList.add("native-relative-time"), a.innerText = this.getRelativeTimeString(this.dateISO), s.appendChild(a), s;
  }
  getRelativeTimeString(t, e = navigator.language) {
    const s = new Date(t).getTime(), a = Math.round((s - Date.now()) / 1e3), o = [
      60,
      3600,
      86400,
      86400 * 7,
      86400 * 30,
      86400 * 365,
      1 / 0
    ], m = ["second", "minute", "hour", "day", "week", "month", "year"], r = o.findIndex((u) => u > Math.abs(a)), c = r ? o[r - 1] : 1;
    return this.localizer.relativeTime(Math.floor(a / c), m[r], { numeric: "auto" });
  }
  isISODate(t) {
    return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\+\d{2}:\d{2}|Z)$/.test(t);
  }
}
customElements.get("wj-relative-time") || window.customElements.define("wj-relative-time", S);
export {
  S as RelativeTime
};
