var f = Object.defineProperty;
var u = (e, t, r) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var l = (e, t, r) => (u(e, typeof t != "symbol" ? t + "" : t, r), r);
import g from "./wje-element.js";
const n = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map();
let a;
const m = (e) => c(e) && (e = e.trim(), j(e)) ? e : null, j = (e) => e.length > 0 && /(\/|\.)/.test(e), v = (e) => e.startsWith("data:image/svg+xml"), p = (e) => e.indexOf(";utf8,") !== -1, c = (e) => typeof e == "string", z = (e) => {
  const t = document.createElement("div");
  t.innerHTML = e;
  const r = t.firstElementChild;
  return r && r.nodeName.toLowerCase() === "svg" && (r.getAttribute("class"), w(r)) ? t.innerHTML : "";
}, w = (e) => {
  if (e.nodeType === 1) {
    if (e.nodeName.toLowerCase() === "script")
      return !1;
    for (let t = 0; t < e.attributes.length; t++) {
      const r = e.attributes[t].name;
      if (c(r) && r.toLowerCase().indexOf("on") === 0)
        return !1;
    }
    for (let t = 0; t < e.childNodes.length; t++)
      if (!w(e.childNodes[t]))
        return !1;
  }
  return !0;
}, b = (e, t) => {
  let r = h.get(e);
  if (!r)
    if (typeof fetch < "u" && typeof document < "u")
      if (v(e) && p(e)) {
        a || (a = new DOMParser());
        const o = a.parseFromString(e, "text/html").querySelector("svg");
        return o && n.set(e, o.outerHTML), Promise.resolve();
      } else
        r = fetch(e).then((s) => {
          if (s.ok)
            return s.text().then((o) => {
              o && t !== !1 && (o = z(o)), n.set(e, o || "");
            });
          n.set(e, "");
        }), h.set(e, r);
    else
      return n.set(e, ""), Promise.resolve();
  return r;
}, y = (e) => {
  let t = m(e.src);
  return t || (t = L(e.name), t ? x(t, e.hasAttribute("filled")) : null);
}, L = (e) => !c(e) || e.trim() === "" || e.replace(/[a-z]|-|\d/gi, "") !== "" ? null : e, x = (e, t = !1) => {
  const r = `/assets/img/icons/${t ? "filled" : "outline"}/${e}.svg`;
  let s = new URL(import.meta.url), o = s.pathname, i = o.substring(0, o.lastIndexOf("/"));
  return new URL(s.origin + i + r).href;
}, S = ":host(.wje-color-primary){--wje-icon-color: var(--wje-color-primary)}:host(.wje-color-complete){--wje-icon-color: var(--wje-color-complete)}:host(.wje-color-success){--wje-icon-color: var(--wje-color-success)}:host(.wje-color-warning){--wje-icon-color: var(--wje-color-warning)}:host(.wje-color-danger){--wje-icon-color: var(--wje-color-danger)}:host(.wje-color-info){--wje-icon-color: var(--wje-color-info)}:host{--wje-icon-size: 1rem;--wje-icon-width: var(--wje-icon-size, 100%);--wje-icon-height: var(--wje-icon-size, 100%);//background: transparent !important;display:inline-block;width:var(--wje-icon-width);height:var(--wje-icon-height);contain:strict;fill:currentColor;box-sizing:content-box!important}.icon-inner,svg{display:block;width:var(--wje-icon-width);height:var(--wje-icon-height)}:host(.wje-size-small){--wje-icon-size: 18px}:host(.wje-size-large){--wje-icon-size: 32px}:host(.wje-size){font-size:var(--wje-icon-size)}:host(.wje-color){color:var(--wje-icon-color)!important}";
class d extends g {
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
    return S;
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
  draw(r, s, o) {
    let i = document.createDocumentFragment();
    return this.classList.add("lazy-loaded-image", "lazy"), this.element = document.createElement("div"), this.element.classList.add("icon-inner"), this.url = y(this), this.classList.add("wje-size"), this.color && this.classList.add("wje-color-" + this.color, "wje-color"), this.size && this.classList.add("wje-size-" + this.size), i.appendChild(this.element), i;
  }
  /**
   * Called after the component has been drawn.
   */
  afterDraw() {
    let r = new IntersectionObserver((s, o) => {
      s.forEach((i) => {
        i.isIntersecting && (b(this.url).then((C) => {
          this.element.innerHTML = n.get(this.url), this.element.querySelector("svg").setAttribute("part", "svg");
        }), this.classList.remove("lazy"), r.unobserve(i.target));
      });
    });
    r.observe(this.element);
  }
}
d.define("wje-icon", d);
export {
  d as default
};
