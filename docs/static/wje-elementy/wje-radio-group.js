var c = Object.defineProperty;
var u = (i, t, e) => t in i ? c(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var n = (i, t, e) => (u(i, typeof t != "symbol" ? t + "" : t, e), e);
import h from "./wje-element.js";
import r from "./wje-radio.js";
const m = ".wje-inline{display:flex;flex-direction:row;flex-wrap:wrap;gap:.5rem}";
class l extends h {
  /**
   * Creates an instance of RadioGroup.
   *
   * @constructor
   */
  constructor() {
    super();
    n(this, "className", "RadioGroup");
  }
  /**
   * Returns the CSS styles for the component.
   *
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return m;
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
   * Draws the component.
   *
   * @param {Object} context - The context for drawing.
   * @param {Object} store - The store for drawing.
   * @param {Object} params - The parameters for drawing.
   * @returns {DocumentFragment}
   */
  draw(e, s, p) {
    let o = document.createDocumentFragment(), a = document.createElement("div");
    a.classList.add("native-radio-group", this.hasAttribute("inline") ? "wje-inline" : "ddd");
    let d = document.createElement("slot");
    return a.appendChild(d), o.appendChild(a), o;
  }
  /**
   * Adds event listeners after the component is drawn.
   * Handles the selection of radio buttons.
   */
  afterDraw() {
    this.value && this.setRadioToChekced(this.getRadioByValue(this.value)), this.addEventListener("wje-radio:input", (e) => {
      this.removeCheck(), this.setRadioToChekced(e.detail.context);
    });
  }
  /**
   * Returns the radio button with the given value.
   *
   * @param {string} value - The value of the radio button.
   * @returns {Radio} The radio button.
   */
  getRadioByValue(e) {
    return this.getAllElements().filter((s) => s instanceof r && s.value === e)[0];
  }
  /**
   * Removes the check from all radio buttons.
   */
  removeCheck() {
    this.getAllElements().forEach((e) => {
      e instanceof r && (e.checked = !1);
    });
  }
  /**
   * Sets the given radio button to checked.
   *
   * @param {Radio} radio - The radio button to check.
   */
  setRadioToChekced(e) {
    e instanceof r && (this.setAttribute("value", e.value), e.checked = !0);
  }
  /**
   * Returns all the elements in the radio group.
   *
   * @returns {Array<Element>} The elements.
   */
  getAllElements() {
    return Array.from(this.childNodes);
  }
}
l.define("wje-radio-group", l);
export {
  l as default
};
