var c = Object.defineProperty;
var d = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e;
var u = (a, t, e) => (d(a, typeof t != "symbol" ? t + "" : t, e), e);
import h from "./wj-element.js";
import { L as p } from "./localize-762a9f0f.js";
import "./wj-store.js";
const g = `.native-format-digital{white-space:nowrap}
`;
class f extends h {
  constructor() {
    super();
    u(this, "className", "FormatDigital");
    this.localizer = new p(this);
  }
  get unit() {
    return this.hasAttribute("unit") ? this.getAttribute("unit") : "byte";
  }
  static get cssStyleSheet() {
    return g;
  }
  static get observedAttributes() {
    return ["value"];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  beforeDraw() {
    if (this.value < 0)
      return;
    const e = ["", "kilo", "mega", "giga", "tera"], o = ["", "kilo", "mega", "giga", "tera", "peta"], n = this.unit === "bit" ? e : o, r = Math.max(0, Math.min(Math.floor(Math.log10(this.value) / 3), n.length - 1)), i = n[r] + this.unit, s = parseFloat((this.value / Math.pow(1e3, r)).toPrecision(3));
    this.formattedValue = this.localizer.formatNumber(s, {
      style: "unit",
      unit: i,
      unitDisplay: this.unitDisplay || "short"
    });
  }
  draw(e, o, n) {
    let r = document.createDocumentFragment(), i = document.createElement("div");
    i.setAttribute("part", "native"), i.classList.add("native-format-digital");
    let s = document.createElement("span");
    s.setAttribute("part", "formatted"), s.innerText = this.formattedValue;
    let l = document.createElement("slot");
    l.setAttribute("name", "start");
    let m = document.createElement("slot");
    return m.setAttribute("name", "end"), i.appendChild(l), i.appendChild(s), i.appendChild(m), r.appendChild(i), r;
  }
}
customElements.get("wj-format-digital") || window.customElements.define("wj-format-digital", f);
export {
  f as FormatDigital
};
