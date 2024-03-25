var d = Object.defineProperty;
var h = (i, t, e) => t in i ? d(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var m = (i, t, e) => (h(i, typeof t != "symbol" ? t + "" : t, e), e);
import p from "./wje-element.js";
import { L as f } from "./localize-7fxVJArK.js";
const g = ".native-format-digital{white-space:nowrap}";
class c extends p {
  /**
   * Creates an instance of FormatDigital.
   *
   * @constructor
   */
  constructor() {
    super();
    m(this, "className", "FormatDigital");
    this.localizer = new f(this);
  }
  /**
   * Returns the unit of the digital format.
   *
   * @returns {string}
   */
  get unit() {
    return this.hasAttribute("unit") ? this.getAttribute("unit") : "byte";
  }
  /**
   * Returns the CSS styles for the component.
   *
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return g;
  }
  /**
   * Returns the list of attributes to observe for changes.
   *
   * @static
   * @returns {Array<string>}
   */
  static get observedAttributes() {
    return ["value"];
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
  beforeDraw() {
    if (this.value < 0)
      return;
    const e = ["", "kilo", "mega", "giga", "tera"], o = ["", "kilo", "mega", "giga", "tera", "peta"], n = this.unit === "bit" ? e : o, r = Math.max(0, Math.min(Math.floor(Math.log10(this.value) / 3), n.length - 1)), a = n[r] + this.unit, s = parseFloat((this.value / Math.pow(1e3, r)).toPrecision(3));
    this.formattedValue = this.localizer.formatNumber(s, {
      style: "unit",
      unit: a,
      unitDisplay: this.unitDisplay || "short"
    });
  }
  /**
   * Draws the component.
   *
   * @param {Object} context - The context for drawing.
   * @param {Object} store - The store for drawing.
   * @param {Object} params - The parameters for drawing.
   * @returns {DocumentFragment}
   */
  draw(e, o, n) {
    let r = document.createDocumentFragment(), a = document.createElement("div");
    a.setAttribute("part", "native"), a.classList.add("native-format-digital");
    let s = document.createElement("span");
    s.setAttribute("part", "formatted"), s.innerText = this.formattedValue;
    let l = document.createElement("slot");
    l.setAttribute("name", "start");
    let u = document.createElement("slot");
    return u.setAttribute("name", "end"), a.appendChild(l), a.appendChild(s), a.appendChild(u), r.appendChild(a), r;
  }
}
c.define("wje-format-digital", c);
export {
  c as default
};
