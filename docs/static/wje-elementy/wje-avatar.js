var h = Object.defineProperty;
var v = (r, e, t) => e in r ? h(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var n = (r, e, t) => (v(r, typeof e != "symbol" ? e + "" : e, t), t);
import w from "./wje-element.js";
function c(r, e = 30, t = 80) {
  let i = r, s = 0;
  for (let a = 0; a < (i == null ? void 0 : i.length); a++)
    s = i.charCodeAt(a) + ((s << 5) - s);
  return "hsl(" + s % 360 + ", " + e + "%, " + t + "%)";
}
function j(r, e = 2) {
  let t = r.split(" "), i = t[0].substring(0, 1).toUpperCase();
  return t.length > 1 && e > 1 && (i += t[t.length - 1].substring(0, 1).toUpperCase()), i;
}
const g = ":host{--wje-avatar-width: 32px;--wje-avatar-height: 32px;--wje-avatar-font-size: .75rem;--wje-avatar-font-weight: 400;--wje-avatar-color: inherit;--wje-avatar-background-color: var(--wje-color-contrast-low);--wje-avatar-border-radius: 50%;--wje-avatar-border-color: transparent;--wje-avatar-border-width: 1px;--wje-avatar-border-style: solid;display:inline-block;width:var(--wje-avatar-width);height:var(--wje-avatar-height);font-size:var(--wje-avatar-font-size);font-weight:var(--wje-avatar-font-weight);color:var(--wje-avatar-color)}:host .native-avatar{display:flex;align-items:center;justify-content:center;width:100%;height:100%;border-radius:var(--wje-avatar-border-radius);background-color:var(--wje-avatar-background-color)}::slotted(wje-img),::slotted(img){border-radius:var(--wje-avatar-border-radius);width:100%;height:100%;object-fit:cover;overflow:hidden}:host(.wje-avatar-border){border-color:var(--wje-avatar-border-color);border-width:var(--wje-avatar-border-width);border-style:var(--wje-avatar-border-style)}:host(.wje-avatar-small){--wje-avatar-width: 24px;--wje-avatar-height: 24px}:host(.wje-avatar-large){--wje-avatar-width: 48px;--wje-avatar-height: 48px}";
class d extends w {
  /**
   * Avatar class constructor
   */
  constructor() {
    super();
    /**
     * Class name
     */
    n(this, "className", "Avatar");
  }
  /**
   * Getter for cssStyleSheet
   * @returns {string} styles
   */
  static get cssStyleSheet() {
    return g;
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
  draw(t, i, s) {
    let l = document.createDocumentFragment(), o = document.createElement("div");
    if (o.setAttribute("part", "native"), o.classList.add("native-avatar"), this.size && this.classList.add("wje-avatar-" + this.size), this.isImage()) {
      let a = document.createElement("slot");
      o.appendChild(a);
    } else if (this.hasAttribute("initials")) {
      let a = j(this.label);
      this.setAttribute("style", `--wje-avatar-background-color: ${c(a)}`), o.innerText = a;
    } else {
      let a = document.createElement("slot");
      a.setAttribute("name", "icon"), o.appendChild(a);
    }
    return l.appendChild(o), l;
  }
  /**
   * Method to check if the avatar is an image
   * @returns {boolean} - True if the avatar is an image, false otherwise
   */
  isImage() {
    return this.getElementsByTagName("wje-img").length > 0;
  }
}
d.define("wje-avatar", d);
export {
  d as default
};
