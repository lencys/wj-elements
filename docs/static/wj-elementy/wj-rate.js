var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
const styles = "/*\n[ WJ Rate ]\n*/\n:host {\n  display: flex;\n}\n\n.native-rate {\n  position: relative;\n  display: flex;\n  gap: var(--wj-rate-gap, 0.25rem);\n}\n\n.wj-rate-icon {\n  position: relative;\n  cursor: pointer;\n}\n\n.selected {\n  color: var(--wj-color-danger);\n}\n\n:host(:not([readonly])) .wj-rate-icon:hover {\n  transform: scale(1.2);\n}\n\n.half wj-icon:first-child {\n  color: white;\n}\n\n.half wj-icon:last-child {\n  color: currentColor;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n:host([disabled]) .native-rate {\n  pointer-events: none;\n  opacity: 0.5;\n}";
class Rate extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Rate");
    /*
     * Events - Mouse
     */
    __publicField(this, "onMouseEnter", (e) => {
      e.preventDefault();
      this.hoverValue = this.getValueFromXPosition(e.clientX);
      this.changeRate();
    });
    __publicField(this, "onMouseLeave", (e) => {
      e.preventDefault();
      this.hoverValue = 0;
      this.changeRate();
    });
    __publicField(this, "onMouseMove", (e) => {
      e.preventDefault();
      let newValue = this.getValueFromXPosition(e.clientX);
      if (newValue != this.hoverValue) {
        this.hoverValue = newValue;
        this.changeRate();
      }
    });
    /*
     * Events - Touch
     */
    __publicField(this, "onTouchStart", (e) => {
      e.preventDefault();
      this.hoverValue = this.getValueFromXPosition(e.touches[0].clientX);
      this.changeRate();
    });
    __publicField(this, "onTouchEnd", (e) => {
      e.preventDefault();
      this.hoverValue = 0;
      this.changeRate();
    });
    __publicField(this, "onTouchMove", (e) => {
      e.preventDefault();
      this.hoverValue = this.getValueFromXPosition(e.touches[0].clientX);
      this.changeRate();
    });
    __publicField(this, "onClick", (e) => {
      e.preventDefault();
      this.value = +this.hoverValue;
    });
  }
  set precision(value) {
    this.setAttribute("precision", value);
  }
  get precision() {
    return this.hasAttribute("precision") ? +this.getAttribute("precision") : 1;
  }
  set max(value) {
    this.setAttribute("max", value);
  }
  get max() {
    return this.hasAttribute("icons") ? this.icons.length : +this.getAttribute("max");
  }
  set icons(value) {
    return value;
  }
  get icons() {
    return this.hasAttribute("icons") ? JSON.parse(this.getAttribute("icons").replace(/'/g, '"')) : ["star-filled"];
  }
  set value(value) {
    this.setAttribute("value", value);
  }
  get value() {
    return this.hasAttribute("value") ? +this.getAttribute("value") : 0;
  }
  static get cssStyleSheet() {
    return styles;
  }
  static get observedAttributes() {
    return ["is-hover"];
  }
  attributeChangedCallback(name, old, newName) {
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.setAttribute("part", "native");
    native.classList.add("native-rate");
    this.native = native;
    if (this.hasAttribute("icons")) {
      let icons = this.icons;
      for (let i = 0; i < icons.length; i++) {
        native.appendChild(this.createIcons(i));
      }
    } else {
      for (let i = 0; i < this.max; i++) {
        native.appendChild(this.createIcons(i));
      }
    }
    this.changeRate();
    fragment.appendChild(native);
    return fragment;
  }
  afterDraw() {
    if (this.hasAttribute("disabled") || this.hasAttribute("readonly")) {
      return;
    }
    this.addEventListener("mouseenter", this.onMouseEnter);
    this.addEventListener("mouseleave", this.onMouseLeave);
    this.addEventListener("mousemove", this.onMouseMove);
    this.addEventListener("touchstart", this.onTouchStart);
    this.addEventListener("touchend", this.onTouchEnd);
    this.addEventListener("touchmove", this.onTouchMove);
    this.addEventListener("click", this.onClick);
  }
  createIcons(i) {
    let div = document.createElement("div");
    div.classList.add("wj-rate-icon");
    let icon = this.getIcons(i);
    div.appendChild(icon);
    if (this.value > i && this.value < i + 1) {
      let clone = icon.cloneNode(true);
      div.appendChild(clone);
    }
    return div;
  }
  changeRate() {
    const icons = this.native.children;
    const rateValue = this.value !== this.hoverValue && this.hoverValue !== 0 && this.hoverValue !== void 0 ? this.hoverValue : this.value;
    for (let i = 0; i < icons.length; i++) {
      icons[i].classList.remove("selected", "hovered");
      if (icons[i].children.length > 1) {
        icons[i].classList.remove("half");
        icons[i].querySelector("wj-icon:first-child").removeAttribute("style");
        icons[i].querySelector("wj-icon:last-child").remove();
      }
      if (i < rateValue) {
        icons[i].classList.add("selected");
      }
      if (rateValue > i && rateValue < i + 1 && icons[i].children.length === 1) {
        let clone = icons[i].querySelector("wj-icon").cloneNode(true);
        icons[i].appendChild(clone);
        let percent = (rateValue - i) * 100;
        icons[i].classList.add("half");
        icons[i].querySelector("wj-icon:first-child").style.clipPath = `inset(0 0 0 ${percent}%)`;
        icons[i].querySelector("wj-icon:last-child").style.clipPath = `inset(0 ${percent}% 0 0)`;
      }
    }
  }
  getIcons(index) {
    let icon = document.createElement("wj-icon");
    icon.setAttribute("name", this.max ? this.icons[0] : this.icons[index]);
    return icon;
  }
  getValueFromXPosition(coordinate) {
    const { left, right, width } = this.native.getBoundingClientRect();
    const value = this.roundToPrecision((coordinate - left) / width * this.max, this.precision);
    return Math.min(Math.max(value, 0), this.max);
  }
  roundToPrecision(numberToRound, precision = 0.5) {
    const multiplier = 1 / precision;
    return Math.ceil(numberToRound * multiplier) / multiplier;
  }
}
WJElement.define("wj-rate", Rate);
export {
  Rate as default
};
