var u = Object.defineProperty;
var d = (r, o, e) => o in r ? u(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e;
var n = (r, o, e) => (d(r, typeof o != "symbol" ? o + "" : o, e), e);
import v from "./wje-element.js";
const p = ":host{--wje-rate-gap: .25rem;display:flex}.native-rate{position:relative;display:flex;gap:var(--wje-rate-gap)}.wje-rate-icon{position:relative;cursor:pointer}.selected{color:var(--wje-color-danger)}:host(:not([readonly])) .wje-rate-icon:hover{transform:scale(1.2)}.half wje-icon:first-child{color:#fff}.half wje-icon:last-child{color:currentColor;position:absolute;top:0;left:0}:host([disabled]) .native-rate{pointer-events:none;opacity:.5}";
class c extends v {
  /**
   * Creates an instance of Rate.
   *
   * @constructor
   */
  constructor() {
    super();
    n(this, "className", "Rate");
    /**
     * Event handler for the mouse enter event.
     *
     * @param {Event} e - The event.
     */
    n(this, "onMouseEnter", (e) => {
      e.preventDefault(), this.hoverValue = this.getValueFromXPosition(e.clientX), this.changeRate();
    });
    /**
     * Event handler for the mouse leave event.
     *
     * @param {Event} e - The event.
     */
    n(this, "onMouseLeave", (e) => {
      e.preventDefault(), this.hoverValue = 0, this.changeRate();
    });
    /**
     * Event handler for the mouse move event.
     *
     * @param {Event} e - The event.
     */
    n(this, "onMouseMove", (e) => {
      e.preventDefault();
      let i = this.getValueFromXPosition(e.clientX);
      i != this.hoverValue && (this.hoverValue = i, this.changeRate());
    });
    /**
     * Event handler for the touch start event.
     *
     * @param {Event} e - The event.
     */
    n(this, "onTouchStart", (e) => {
      e.preventDefault(), this.hoverValue = this.getValueFromXPosition(e.touches[0].clientX), this.changeRate();
    });
    /**
     * Event handler for the touch end event.
     *
     * @param {Event} e - The event.
     */
    n(this, "onTouchEnd", (e) => {
      e.preventDefault(), this.hoverValue = 0, this.changeRate();
    });
    /**
     * Event handler for the touch move event.
     *
     * @param {Event} e - The event.
     */
    n(this, "onTouchMove", (e) => {
      e.preventDefault(), this.hoverValue = this.getValueFromXPosition(e.touches[0].clientX), this.changeRate();
    });
    /**
     * Event handler for the click event.
     *
     * @param {Event} e - The event.
     */
    n(this, "onClick", (e) => {
      e.preventDefault(), this.value = +this.hoverValue;
    });
  }
  /**
   * Sets the precision of the rating component.
   *
   * @param {number} value - The value to set.
   */
  set precision(e) {
    this.setAttribute("precision", e);
  }
  /**
   * Gets the precision of the rating component.
   *
   * @returns {number} The value of the precision.
   */
  get precision() {
    return this.hasAttribute("precision") ? +this.getAttribute("precision") : 1;
  }
  /**
   * Sets the maximum value of the rating component.
   *
   * @param {number} value - The value to set.
   */
  set max(e) {
    this.setAttribute("max", e);
  }
  /**
   * Gets the maximum value of the rating component.
   *
   * @returns {number} The value of the maximum value.
   */
  get max() {
    return this.hasAttribute("icons") ? this.icons.length : +this.getAttribute("max");
  }
  /**
   * Sets the icons of the rating component.
   *
   * @param {Array<string>} value - The value to set.
   */
  set icons(e) {
    return e;
  }
  /**
   * Gets the icons of the rating component.
   *
   * @returns {Array<string>} The value of the icons.
   */
  get icons() {
    return this.hasAttribute("icons") ? JSON.parse(this.getAttribute("icons").replace(/'/g, '"')) : ["star-filled"];
  }
  /**
   * Sets the value of the rating component.
   *
   * @param {number} value - The value to set.
   */
  set value(e) {
    this.setAttribute("value", e);
  }
  /**
   * Gets the value of the rating component.
   *
   * @returns {number} The value of the value.
   */
  get value() {
    return this.hasAttribute("value") ? +this.getAttribute("value") : 0;
  }
  /**
   * Returns the CSS styles for the component.
   *
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return p;
  }
  /**
   * Returns the list of attributes to observe for changes.
   *
   * @static
   * @returns {Array<string>}
   */
  static get observedAttributes() {
    return ["is-hover"];
  }
  /**
   * Called when an attribute changes.
   *
   * @param {string} name - The name of the attribute.
   * @param {string} old - The old value of the attribute.
   * @param {string} newName - The new value of the attribute.
   */
  attributeChangedCallback(e, i, t) {
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
  draw(e, i, t) {
    let a = document.createDocumentFragment(), s = document.createElement("div");
    if (s.setAttribute("part", "native"), s.classList.add("native-rate"), this.native = s, this.hasAttribute("icons")) {
      let h = this.icons;
      for (let l = 0; l < h.length; l++)
        s.appendChild(this.createIcons(l));
    } else
      for (let h = 0; h < this.max; h++)
        s.appendChild(this.createIcons(h));
    return this.changeRate(), a.appendChild(s), a;
  }
  /**
   * Adds event listeners after the component is drawn.
   */
  afterDraw() {
    this.hasAttribute("disabled") || this.hasAttribute("readonly") || (this.addEventListener("mouseenter", this.onMouseEnter), this.addEventListener("mouseleave", this.onMouseLeave), this.addEventListener("mousemove", this.onMouseMove), this.addEventListener("touchstart", this.onTouchStart), this.addEventListener("touchend", this.onTouchEnd), this.addEventListener("touchmove", this.onTouchMove), this.addEventListener("click", this.onClick));
  }
  /**
   * Creates the icons for the rating component.
   *
   * @param {number} i - The index of the icon.
   * @returns {Element} The icon element.
   */
  createIcons(e) {
    let i = document.createElement("div");
    i.classList.add("wje-rate-icon");
    let t = this.getIcons(e);
    if (i.appendChild(t), this.value > e && this.value < e + 1) {
      let a = t.cloneNode(!0);
      i.appendChild(a);
    }
    return i;
  }
  /**
   * Changes the rate of the rating component.
   */
  changeRate() {
    const e = this.native.children, i = this.value !== this.hoverValue && this.hoverValue !== 0 && this.hoverValue !== void 0 ? this.hoverValue : this.value;
    for (let t = 0; t < e.length; t++)
      if (e[t].classList.remove("selected", "hovered"), e[t].children.length > 1 && (e[t].classList.remove("half"), e[t].querySelector("wje-icon:first-child").removeAttribute("style"), e[t].querySelector("wje-icon:last-child").remove()), t < i && e[t].classList.add("selected"), i > t && i < t + 1 && e[t].children.length === 1) {
        let a = e[t].querySelector("wje-icon").cloneNode(!0);
        e[t].appendChild(a);
        let s = (i - t) * 100;
        e[t].classList.add("half"), e[t].querySelector("wje-icon:first-child").style.clipPath = `inset(0 0 0 ${s}%)`, e[t].querySelector("wje-icon:last-child").style.clipPath = `inset(0 ${s}% 0 0)`;
      }
  }
  /**
   * Returns the icons for the rating component.
   *
   * @param {number} index - The index of the icon.
   * @returns {Element} The icon element.
   */
  getIcons(e) {
    let i = document.createElement("wje-icon");
    return i.setAttribute("name", this.max ? this.icons[0] : this.icons[e]), i;
  }
  /**
   * Returns the value from the x position.
   *
   * @param {number} coordinate - The x coordinate.
   * @returns {number} The value.
   */
  getValueFromXPosition(e) {
    const { left: i, right: t, width: a } = this.native.getBoundingClientRect(), s = this.roundToPrecision((e - i) / a * this.max, this.precision);
    return Math.min(Math.max(s, 0), this.max);
  }
  /**
   * Rounds a number to the given precision.
   *
   * @param {number} numberToRound - The number to round.
   * @param {number} precision - The precision.
   * @returns {number} The rounded number.
   */
  roundToPrecision(e, i = 0.5) {
    const t = 1 / i;
    return Math.ceil(e * t) / t;
  }
}
c.define("wje-rate", c);
export {
  c as default
};
