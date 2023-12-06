var h = Object.defineProperty;
var m = (t, e, o) => e in t ? h(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var l = (t, e, o) => (m(t, typeof e != "symbol" ? e + "" : e, o), o);
import w from "./wj-element.js";
import "./wj-store.js";
const i = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map();
let a;
const u = (t) => c(t) && (t = t.trim(), g(t)) ? t : null, g = (t) => t.length > 0 && /(\/|\.)/.test(t), p = (t) => t.startsWith("data:image/svg+xml"), j = (t) => t.indexOf(";utf8,") !== -1, c = (t) => typeof t == "string", v = (t) => {
  const e = document.createElement("div");
  e.innerHTML = t;
  const o = e.firstElementChild;
  return o && o.nodeName.toLowerCase() === "svg" && (o.getAttribute("class"), f(o)) ? e.innerHTML : "";
}, f = (t) => {
  if (t.nodeType === 1) {
    if (t.nodeName.toLowerCase() === "script")
      return !1;
    for (let e = 0; e < t.attributes.length; e++) {
      const o = t.attributes[e].name;
      if (c(o) && o.toLowerCase().indexOf("on") === 0)
        return !1;
    }
    for (let e = 0; e < t.childNodes.length; e++)
      if (!f(t.childNodes[e]))
        return !1;
  }
  return !0;
}, b = (t, e) => {
  let o = d.get(t);
  if (!o)
    if (typeof fetch < "u" && typeof document < "u")
      if (p(t) && j(t)) {
        a || (a = new DOMParser());
        const s = a.parseFromString(t, "text/html").querySelector("svg");
        return s && i.set(t, s.outerHTML), Promise.resolve();
      } else
        o = fetch(t).then((r) => {
          if (r.ok)
            return r.text().then((s) => {
              s && e !== !1 && (s = v(s)), i.set(t, s || "");
            });
          i.set(t, "");
        }), d.set(t, o);
    else
      return i.set(t, ""), Promise.resolve();
  return o;
}, z = (t) => {
  let e = u(t.src);
  return e || (e = L(t.name), e ? y(e) : null);
}, L = (t) => !c(t) || t.trim() === "" || t.replace(/[a-z]|-|\d/gi, "") !== "" ? null : t, y = (t) => {
  const e = `assets/img/icons/svg/${t}.svg`;
  console.log("SOM:", e);
  const o = new URL(e, import.meta.url);
  return console.log(o), o.href;
}, x = `/*!
* direction.scss
*/:host(.wj-color-primary){--wj-color-base: #eae0fb !important;--wj-color-contrast: #845ae0 !important}:host(.wj-color-complete){--wj-color-base: #d3eeff !important;--wj-color-contrast: #0f8ff9 !important}:host(.wj-color-success){--wj-color-base: #d6f7f0 !important;--wj-color-contrast: #26bf93 !important}:host(.wj-color-warning){--wj-color-base: #fffde1 !important;--wj-color-contrast: #ffe858 !important}:host(.wj-color-danger){--wj-color-base: #fde2da !important;--wj-color-contrast: #e6533c !important}:host(.wj-color-info){--wj-color-base: #dbe6e8 !important;--wj-color-contrast: #475b6b !important}:host(.wj-color-menu){--wj-color-base: #f4f4f4 !important;--wj-color-contrast: #21252d !important}:host{--wj-icon-width: 100%;--wj-icon-height: 100%;display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;box-sizing:content-box!important}.icon-inner,svg{display:block;height:var(--wj-icon-height);width:var(--wj-icon-width)}:host(.wj-size-small){--wj-icon-size: 18px}:host(.wj-size-large){--wj-icon-size: 32px}:host(.wj-size){font-size:var(--wj-icon-size)!important}:host(.wj-color){color:var(--wj-color-contrast)}
`;
class S extends w {
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
    let n = document.createDocumentFragment();
    return this.classList.add("lazy-loaded-image", "lazy"), this.classList.remove(...this.classList), this.element = document.createElement("div"), this.element.classList.add("icon-inner"), this.url = z(this), this.classList.add("wj-size"), this.color && this.classList.add("wj-color-" + this.color, "wj-color"), this.size && this.classList.add("wj-size-" + this.size), n.appendChild(this.element), n;
  }
  afterDraw() {
    let o = new IntersectionObserver((r, s) => {
      r.forEach((n) => {
        n.isIntersecting && (b(this.url).then((C) => {
          this.element.innerHTML = i.get(this.url);
        }), this.classList.remove("lazy"), o.unobserve(n.target));
      });
    });
    o.observe(this.element);
  }
}
customElements.get("wj-icon") || window.customElements.define("wj-icon", S);
export {
  S as Icon
};
