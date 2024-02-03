var w = Object.defineProperty;
var f = (e, t, o) => t in e ? w(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var l = (e, t, o) => (f(e, typeof t != "symbol" ? t + "" : t, o), o);
import m from "./wj-element.js";
import "./wj-store.js";
const n = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map();
let c;
const u = (e) => a(e) && (e = e.trim(), g(e)) ? e : null, g = (e) => e.length > 0 && /(\/|\.)/.test(e), j = (e) => e.startsWith("data:image/svg+xml"), v = (e) => e.indexOf(";utf8,") !== -1, a = (e) => typeof e == "string", p = (e) => {
  const t = document.createElement("div");
  t.innerHTML = e;
  const o = t.firstElementChild;
  return o && o.nodeName.toLowerCase() === "svg" && (o.getAttribute("class"), d(o)) ? t.innerHTML : "";
}, d = (e) => {
  if (e.nodeType === 1) {
    if (e.nodeName.toLowerCase() === "script")
      return !1;
    for (let t = 0; t < e.attributes.length; t++) {
      const o = e.attributes[t].name;
      if (a(o) && o.toLowerCase().indexOf("on") === 0)
        return !1;
    }
    for (let t = 0; t < e.childNodes.length; t++)
      if (!d(e.childNodes[t]))
        return !1;
  }
  return !0;
}, z = (e, t) => {
  let o = h.get(e);
  if (!o)
    if (typeof fetch < "u" && typeof document < "u")
      if (j(e) && v(e)) {
        c || (c = new DOMParser());
        const s = c.parseFromString(e, "text/html").querySelector("svg");
        return s && n.set(e, s.outerHTML), Promise.resolve();
      } else
        o = fetch(e).then((r) => {
          if (r.ok)
            return r.text().then((s) => {
              s && t !== !1 && (s = p(s)), n.set(e, s || "");
            });
          n.set(e, "");
        }), h.set(e, o);
    else
      return n.set(e, ""), Promise.resolve();
  return o;
}, b = (e) => {
  let t = u(e.src);
  return t || (t = y(e.name), t ? L(t) : null);
}, y = (e) => !a(e) || e.trim() === "" || e.replace(/[a-z]|-|\d/gi, "") !== "" ? null : e, L = (e) => {
  const t = `/assets/img/icons/svg/${e}.svg`;
  let o = new URL(import.meta.url), r = o.pathname, s = r.substring(0, r.lastIndexOf("/"));
  return new URL(o.origin + s + t).href;
}, x = `:host(.wj-color-primary){--wj-icon-color: var(--wj-color-primary)}:host(.wj-color-complete){--wj-icon-color: var(--wj-color-complete)}:host(.wj-color-success){--wj-icon-color: var(--wj-color-success)}:host(.wj-color-warning){--wj-icon-color: var(--wj-color-warning)}:host(.wj-color-danger){--wj-icon-color: var(--wj-color-danger)}:host(.wj-color-info){--wj-icon-color: var(--wj-color-info)}:host{--wj-icon-size: 1rem;--wj-icon-width: var(--wj-icon-size, 100%);--wj-icon-height: var(--wj-icon-size, 100%);display:inline-block;width:var(--wj-icon-width);height:var(--wj-icon-height);contain:strict;fill:currentColor;box-sizing:content-box!important}.icon-inner,svg{display:block;width:var(--wj-icon-width);height:var(--wj-icon-height)}:host(.wj-size-small){--wj-icon-size: 18px}:host(.wj-size-large){--wj-icon-size: 32px}:host(.wj-size){font-size:var(--wj-icon-size)}:host(.wj-color){color:var(--wj-icon-color)!important}
`;
class S extends m {
  constructor() {
    super();
    l(this, "className", "Icon");
  }
  static get cssStyleSheet() {
    return x;
  }
  static get observedAttributes() {
    return ["name"];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(o, r, s) {
    let i = document.createDocumentFragment();
    return this.classList.add("lazy-loaded-image", "lazy"), this.element = document.createElement("div"), this.element.classList.add("icon-inner"), this.url = b(this), this.classList.add("wj-size"), this.color && this.classList.add("wj-color-" + this.color, "wj-color"), this.size && this.classList.add("wj-size-" + this.size), i.appendChild(this.element), i;
  }
  afterDraw() {
    let o = new IntersectionObserver((r, s) => {
      r.forEach((i) => {
        i.isIntersecting && (z(this.url).then((C) => {
          this.element.innerHTML = n.get(this.url), this.element.querySelector("svg").setAttribute("part", "svg");
        }), this.classList.remove("lazy"), o.unobserve(i.target));
      });
    });
    o.observe(this.element);
  }
}
customElements.get("wj-icon") || window.customElements.define("wj-icon", S);
export {
  S as Icon
};
