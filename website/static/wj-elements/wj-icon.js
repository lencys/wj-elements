var w = Object.defineProperty;
var p = (t, e, o) => e in t ? w(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var d = (t, e, o) => (p(t, typeof e != "symbol" ? e + "" : e, o), o);
import g from "./wj-element.js";
import "./default-store-actions-ff3e8b0b.js";
const s = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map();
let c;
const j = (t) => a(t) && (t = t.trim(), b(t)) ? t : null, b = (t) => t.length > 0 && /(\/|\.)/.test(t), v = (t) => t.startsWith("data:image/svg+xml"), z = (t) => t.indexOf(";utf8,") !== -1, a = (t) => typeof t == "string", x = (t) => {
  const e = document.createElement("div");
  e.innerHTML = t;
  const o = e.firstElementChild;
  return o && o.nodeName.toLowerCase() === "svg" && (o.getAttribute("class"), u(o)) ? e.innerHTML : "";
}, u = (t) => {
  if (t.nodeType === 1) {
    if (t.nodeName.toLowerCase() === "script")
      return !1;
    for (let e = 0; e < t.attributes.length; e++) {
      const o = t.attributes[e].name;
      if (a(o) && o.toLowerCase().indexOf("on") === 0)
        return !1;
    }
    for (let e = 0; e < t.childNodes.length; e++)
      if (!u(t.childNodes[e]))
        return !1;
  }
  return !0;
}, y = (t, e) => {
  let o = m.get(t);
  if (!o)
    if (typeof fetch < "u" && typeof document < "u")
      if (v(t) && z(t)) {
        c || (c = new DOMParser());
        const r = c.parseFromString(t, "text/html").querySelector("svg");
        return r && s.set(t, r.outerHTML), Promise.resolve();
      } else
        o = fetch(t).then((n) => {
          if (n.ok)
            return n.text().then((r) => {
              r && e !== !1 && (r = x(r)), s.set(t, r || "");
            });
          s.set(t, "");
        }), m.set(t, o);
    else
      return s.set(t, ""), Promise.resolve();
  return o;
}, L = (t) => {
  let e = j(t.src);
  return e || (e = A(t.name), e ? C(e) : null);
}, A = (t) => !a(t) || t.trim() === "" || t.replace(/[a-z]|-|\d/gi, "") !== "" ? null : t, C = (t) => `./assets/img/icons/svgs/solid/${t}.svg`, E = `/*!
* direction.scss
*/:host(.wj-color-primary){--wj-color-base: #eae0fb !important;--wj-color-contrast: #845ae0 !important}:host(.wj-color-complete){--wj-color-base: #d3eeff !important;--wj-color-contrast: #0f8ff9 !important}:host(.wj-color-success){--wj-color-base: #d6f7f0 !important;--wj-color-contrast: #26bf93 !important}:host(.wj-color-warning){--wj-color-base: #fffde1 !important;--wj-color-contrast: #ffe858 !important}:host(.wj-color-danger){--wj-color-base: #fde2da !important;--wj-color-contrast: #e6533c !important}:host(.wj-color-info){--wj-color-base: #dbe6e8 !important;--wj-color-contrast: #475b6b !important}:host(.wj-color-menu){--wj-color-base: #f4f4f4 !important;--wj-color-contrast: #21252d !important}:host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;box-sizing:content-box!important}.icon-inner,svg{display:block;height:100%;width:100%}:host(.wj-size-small){--wj-icon-size: 18px}:host(.wj-size-large){--wj-icon-size: 32px}:host(.wj-size){font-size:var(--wj-icon-size)!important}:host(.wj-color){color:var(--wj-color-contrast)}
`, h = document.createElement("template");
h.innerHTML = `<style>
	${E}
</style>`;
class M extends g {
  constructor() {
    super(h);
    d(this, "className", "Icon");
  }
  set color(o) {
    this.setAttribute("color", o);
  }
  get color() {
    return this.getAttribute("color");
  }
  set name(o) {
    this.setAttribute("name", o);
  }
  get name() {
    return this.getAttribute("name");
  }
  set size(o) {
    this.setAttribute("size", "");
  }
  get size() {
    return this.getAttribute("size");
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(o, n, r) {
    let l = document.createDocumentFragment(), i = document.createElement("div");
    i.classList.add("icon-inner");
    let f = L(this);
    return y(f).then((S) => {
      i.innerHTML = s.get(f);
    }), this.color && this.classList.add("wj-color-" + this.color, "wj-color"), this.size && this.classList.add("wj-size", "wj-size-" + this.size), l.appendChild(i), l;
  }
}
customElements.get("wj-icon") || window.customElements.define("wj-icon", M);
export {
  M as Icon
};
