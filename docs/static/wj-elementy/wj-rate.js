var c = Object.defineProperty;
var u = (a, o, e) => o in a ? c(a, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[o] = e;
var n = (a, o, e) => (u(a, typeof o != "symbol" ? o + "" : o, e), e);
import d from "./wj-element.js";
import "./wj-store.js";
const v = `:host{display:flex}.native-rate{position:relative;display:flex;gap:var(--wj-rate-gap, .25rem)}.wj-rate-icon{position:relative;cursor:pointer}.selected{color:var(--wj-color-danger)}:host(:not([readonly])) .wj-rate-icon:hover{transform:scale(1.2)}.half wj-icon:first-child{color:#fff}.half wj-icon:last-child{color:currentColor;position:absolute;top:0;left:0}:host([disabled]) .native-rate{pointer-events:none;opacity:.5}
`;
class m extends d {
  constructor() {
    super();
    n(this, "className", "Rate");
    /*
     * Events - Mouse
     */
    n(this, "onMouseEnter", (e) => {
      e.preventDefault(), this.hoverValue = this.getValueFromXPosition(e.clientX), this.changeRate();
    });
    n(this, "onMouseLeave", (e) => {
      e.preventDefault(), this.hoverValue = 0, this.changeRate();
    });
    n(this, "onMouseMove", (e) => {
      e.preventDefault();
      let i = this.getValueFromXPosition(e.clientX);
      i != this.hoverValue && (this.hoverValue = i, this.changeRate());
    });
    /*
     * Events - Touch
     */
    n(this, "onTouchStart", (e) => {
      e.preventDefault(), this.hoverValue = this.getValueFromXPosition(e.touches[0].clientX), this.changeRate();
    });
    n(this, "onTouchEnd", (e) => {
      e.preventDefault(), this.hoverValue = 0, this.changeRate();
    });
    n(this, "onTouchMove", (e) => {
      e.preventDefault(), this.hoverValue = this.getValueFromXPosition(e.touches[0].clientX), this.changeRate();
    });
    n(this, "onClick", (e) => {
      e.preventDefault(), this.value = +this.hoverValue;
    });
  }
  set precision(e) {
    this.setAttribute("precision", e);
  }
  get precision() {
    return this.hasAttribute("precision") ? +this.getAttribute("precision") : 1;
  }
  set max(e) {
    this.setAttribute("max", e);
  }
  get max() {
    return this.hasAttribute("icons") ? this.icons.length : +this.getAttribute("max");
  }
  set icons(e) {
    return e;
  }
  get icons() {
    return this.hasAttribute("icons") ? JSON.parse(this.getAttribute("icons").replace(/'/g, '"')) : ["star-filled"];
  }
  set value(e) {
    this.setAttribute("value", e);
  }
  get value() {
    return this.hasAttribute("value") ? +this.getAttribute("value") : 0;
  }
  static get cssStyleSheet() {
    return v;
  }
  static get observedAttributes() {
    return ["is-hover"];
  }
  attributeChangedCallback(e, i, t) {
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(e, i, t) {
    let r = document.createDocumentFragment(), s = document.createElement("div");
    if (s.setAttribute("part", "native"), s.classList.add("native-rate"), this.native = s, this.hasAttribute("icons")) {
      let h = this.icons;
      for (let l = 0; l < h.length; l++)
        s.appendChild(this.createIcons(l));
    } else
      for (let h = 0; h < this.max; h++)
        s.appendChild(this.createIcons(h));
    return this.changeRate(), r.appendChild(s), r;
  }
  afterDraw() {
    this.hasAttribute("disabled") || this.hasAttribute("readonly") || (this.addEventListener("mouseenter", this.onMouseEnter), this.addEventListener("mouseleave", this.onMouseLeave), this.addEventListener("mousemove", this.onMouseMove), this.addEventListener("touchstart", this.onTouchStart), this.addEventListener("touchend", this.onTouchEnd), this.addEventListener("touchmove", this.onTouchMove), this.addEventListener("click", this.onClick));
  }
  createIcons(e) {
    let i = document.createElement("div");
    i.classList.add("wj-rate-icon");
    let t = this.getIcons(e);
    if (i.appendChild(t), this.value > e && this.value < e + 1) {
      let r = t.cloneNode(!0);
      i.appendChild(r);
    }
    return i;
  }
  changeRate() {
    const e = this.native.children, i = this.value !== this.hoverValue && this.hoverValue !== 0 && this.hoverValue !== void 0 ? this.hoverValue : this.value;
    for (let t = 0; t < e.length; t++)
      if (e[t].classList.remove("selected", "hovered"), e[t].children.length > 1 && (e[t].classList.remove("half"), e[t].querySelector("wj-icon:first-child").removeAttribute("style"), e[t].querySelector("wj-icon:last-child").remove()), t < i && e[t].classList.add("selected"), i > t && i < t + 1 && e[t].children.length === 1) {
        let r = e[t].querySelector("wj-icon").cloneNode(!0);
        e[t].appendChild(r);
        let s = (i - t) * 100;
        e[t].classList.add("half"), e[t].querySelector("wj-icon:first-child").style.clipPath = `inset(0 0 0 ${s}%)`, e[t].querySelector("wj-icon:last-child").style.clipPath = `inset(0 ${s}% 0 0)`;
      }
  }
  getIcons(e) {
    let i = document.createElement("wj-icon");
    return i.setAttribute("name", this.max ? this.icons[0] : this.icons[e]), i;
  }
  getValueFromXPosition(e) {
    const { left: i, right: t, width: r } = this.native.getBoundingClientRect(), s = this.roundToPrecision((e - i) / r * this.max, this.precision);
    return Math.min(Math.max(s, 0), this.max);
  }
  roundToPrecision(e, i = 0.5) {
    const t = 1 / i;
    return Math.ceil(e * t) / t;
  }
}
customElements.get("wj-rate") || window.customElements.define("wj-rate", m);
export {
  m as Rate
};
