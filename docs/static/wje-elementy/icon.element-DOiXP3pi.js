var w = Object.defineProperty;
var f = (e, t, r) => t in e ? w(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var l = (e, t, r) => (f(e, typeof t != "symbol" ? t + "" : t, r), r);
import u from "./wje-element.js";
const n = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map();
let a;
const g = (e) => c(e) && (e = e.trim(), m(e)) ? e : null, m = (e) => e.length > 0 && /(\/|\.)/.test(e), j = (e) => e.startsWith("data:image/svg+xml"), v = (e) => e.indexOf(";utf8,") !== -1, c = (e) => typeof e == "string", p = (e) => {
  const t = document.createElement("div");
  t.innerHTML = e;
  const r = t.firstElementChild;
  return r && r.nodeName.toLowerCase() === "svg" && (r.getAttribute("class"), d(r)) ? t.innerHTML : "";
}, d = (e) => {
  if (e.nodeType === 1) {
    if (e.nodeName.toLowerCase() === "script")
      return !1;
    for (let t = 0; t < e.attributes.length; t++) {
      const r = e.attributes[t].name;
      if (c(r) && r.toLowerCase().indexOf("on") === 0)
        return !1;
    }
    for (let t = 0; t < e.childNodes.length; t++)
      if (!d(e.childNodes[t]))
        return !1;
  }
  return !0;
}, z = (e, t) => {
  let r = h.get(e);
  if (!r)
    if (typeof fetch < "u" && typeof document < "u")
      if (j(e) && v(e)) {
        a || (a = new DOMParser());
        const s = a.parseFromString(e, "text/html").querySelector("svg");
        return s && n.set(e, s.outerHTML), Promise.resolve();
      } else
        r = fetch(e).then((o) => {
          if (o.ok)
            return o.text().then((s) => {
              s && t !== !1 && (s = p(s)), n.set(e, s || "");
            });
          n.set(e, "");
        }), h.set(e, r);
    else
      return n.set(e, ""), Promise.resolve();
  return r;
}, b = (e) => {
  let t = g(e.src);
  return t || (t = y(e.name), t ? L(t, e.hasAttribute("filled")) : null);
}, y = (e) => !c(e) || e.trim() === "" || e.replace(/[a-z]|-|\d/gi, "") !== "" ? null : e, L = (e, t = !1) => {
  const r = `/assets/img/icons/${t ? "filled" : "outline"}/${e}.svg`;
  let o = new URL(import.meta.url), s = o.pathname, i = s.substring(0, s.lastIndexOf("/"));
  return new URL(o.origin + i + r).href;
}, x = ":host(.wje-color-primary){--wje-icon-color: var(--wje-color-primary)}:host(.wje-color-complete){--wje-icon-color: var(--wje-color-complete)}:host(.wje-color-success){--wje-icon-color: var(--wje-color-success)}:host(.wje-color-warning){--wje-icon-color: var(--wje-color-warning)}:host(.wje-color-danger){--wje-icon-color: var(--wje-color-danger)}:host(.wje-color-info){--wje-icon-color: var(--wje-color-info)}:host{--wje-icon-size: 1rem;--wje-icon-width: var(--wje-icon-size, 100%);--wje-icon-height: var(--wje-icon-size, 100%);//background: transparent !important;display:inline-block;width:var(--wje-icon-width);height:var(--wje-icon-height);contain:strict;fill:currentColor;box-sizing:content-box!important}.icon-inner,svg{display:block;width:var(--wje-icon-width);height:var(--wje-icon-height)}:host(.wje-size-small){--wje-icon-size: 18px}:host(.wje-size-large){--wje-icon-size: 32px}:host(.wje-size){font-size:var(--wje-icon-size)}:host(.wje-color){color:var(--wje-icon-color)!important}";
class I extends u {
  /**
   * Creates an instance of IconElement.
   *
   * @constructor
   */
  constructor() {
    super();
    l(this, "className", "Icon");
  }
  /**
   * Returns the CSS styles for the component.
   *
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return x;
  }
  /**
   * Returns the list of attributes to observe for changes.
   *
   * @static
   * @returns {Array<string>}
   */
  static get observedAttributes() {
    return ["name"];
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
  draw(r, o, s) {
    let i = document.createDocumentFragment();
    return this.classList.add("lazy-loaded-image", "lazy"), this.element = document.createElement("div"), this.element.classList.add("icon-inner"), this.url = b(this), this.classList.add("wje-size"), this.color && this.classList.add("wje-color-" + this.color, "wje-color"), this.size && this.classList.add("wje-size-" + this.size), i.appendChild(this.element), i;
  }
  /**
   * Called after the component has been drawn.
   */
  afterDraw() {
    let r = new IntersectionObserver((o, s) => {
      o.forEach((i) => {
        i.isIntersecting && (z(this.url).then((S) => {
          this.element.innerHTML = n.get(this.url), this.element.querySelector("svg").setAttribute("part", "svg");
        }), this.classList.remove("lazy"), r.unobserve(i.target));
      });
    });
    r.observe(this.element);
  }
}
export {
  I
};
