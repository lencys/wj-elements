var c = Object.defineProperty;
var m = (a, e, t) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var o = (a, e, t) => (m(a, typeof e != "symbol" ? e + "" : e, t), t);
import u from "./wje-element.js";
import { s as d } from "./styles-4vJ2wdTZ.js";
function p(a, e = 30, t = 80) {
  let i = a, n = 0;
  for (let s = 0; s < (i == null ? void 0 : i.length); s++)
    n = i.charCodeAt(s) + ((n << 5) - n);
  return "hsl(" + n % 360 + ", " + e + "%, " + t + "%)";
}
function g(a, e = 2) {
  let t = a.split(" "), i = t[0].substring(0, 1).toUpperCase();
  return t.length > 1 && e > 1 && (i += t[t.length - 1].substring(0, 1).toUpperCase()), i;
}
class h extends u {
  /**
   * Avatar class constructor
   */
  constructor() {
    super();
    /**
     * Class name
     */
    o(this, "className", "Avatar");
  }
  /**
   * Getter for cssStyleSheet
   * @returns {string} styles
   */
  static get cssStyleSheet() {
    return d;
  }
  /**
   * Method to setup attributes
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Method to draw the avatar
   * @param {object} context - The context
   * @param {object} store - The store
   * @param {object} params - The parameters
   * @returns {object} fragment - The document fragment
   */
  draw(t, i, n) {
    let r = document.createDocumentFragment(), l = document.createElement("div");
    if (l.setAttribute("part", "native"), l.classList.add("native-avatar"), this.size && this.classList.add("wje-avatar-" + this.size), this.isImage()) {
      let s = document.createElement("slot");
      l.appendChild(s);
    } else if (this.hasAttribute("initials")) {
      let s = g(this.label);
      this.setAttribute("style", `--wje-avatar-background-color: ${p(s)}`), l.innerText = s;
    } else {
      let s = document.createElement("slot");
      s.setAttribute("name", "icon"), l.appendChild(s);
    }
    return r.appendChild(l), r;
  }
  /**
   * Method to check if the avatar is an image
   * @returns {boolean} - True if the avatar is an image, false otherwise
   */
  isImage() {
    return this.getElementsByTagName("wje-img").length > 0;
  }
}
h.define("wje-avatar", h);
export {
  h as default
};
