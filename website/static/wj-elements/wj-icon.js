var g = Object.defineProperty;
var j = (t, e, o) => e in t ? g(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var m = (t, e, o) => (j(t, typeof e != "symbol" ? e + "" : e, o), o);
import b from "./wj-element.js";
import "./default-store-actions-ff3e8b0b.js";
const n = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map();
let a;
const v = (t) => c(t) && (t = t.trim(), z(t)) ? t : null, z = (t) => t.length > 0 && /(\/|\.)/.test(t), u = (t) => t.startsWith("data:image/svg+xml"), w = (t) => t.indexOf(";utf8,") !== -1, c = (t) => typeof t == "string", x = (t) => {
  const e = document.createElement("div");
  e.innerHTML = t;
  const o = e.firstElementChild;
  return o && o.nodeName.toLowerCase() === "svg" && (o.getAttribute("class"), h(o)) ? e.innerHTML : "";
}, h = (t) => {
  if (t.nodeType === 1) {
    if (t.nodeName.toLowerCase() === "script")
      return !1;
    for (let e = 0; e < t.attributes.length; e++) {
      const o = t.attributes[e].name;
      if (c(o) && o.toLowerCase().indexOf("on") === 0)
        return !1;
    }
    for (let e = 0; e < t.childNodes.length; e++)
      if (!h(t.childNodes[e]))
        return !1;
  }
  return !0;
}, y = (t, e) => {
  let o = d.get(t);
  if (console.log(!o), !o)
    if (typeof fetch < "u" && typeof document < "u")
      if (console.log("SVG", u(t) && w(t)), u(t) && w(t)) {
        a || (a = new DOMParser());
        const r = a.parseFromString(t, "text/html").querySelector("svg");
        return r && n.set(t, r.outerHTML), Promise.resolve();
      } else
        o = fetch(t).then((s) => {
          if (s.ok)
            return s.text().then((r) => {
              r && e !== !1 && (r = x(r)), n.set(t, r || "");
            });
          n.set(t, "");
        }), d.set(t, o);
    else
      return n.set(t, ""), Promise.resolve();
  return o;
}, L = (t) => {
  let e = v(t.src);
  return e || (e = A(t.name), e ? C(e) : null);
}, A = (t) => !c(t) || t.trim() === "" || t.replace(/[a-z]|-|\d/gi, "") !== "" ? null : t, C = (t) => `./assets/img/icons/svgs/solid/${t}.svg`, E = `/*!
* direction.scss
*/:host(.wj-color-primary){--wj-color-base: #eae0fb !important;--wj-color-contrast: #845ae0 !important}:host(.wj-color-complete){--wj-color-base: #d3eeff !important;--wj-color-contrast: #0f8ff9 !important}:host(.wj-color-success){--wj-color-base: #d6f7f0 !important;--wj-color-contrast: #26bf93 !important}:host(.wj-color-warning){--wj-color-base: #fffde1 !important;--wj-color-contrast: #ffe858 !important}:host(.wj-color-danger){--wj-color-base: #fde2da !important;--wj-color-contrast: #e6533c !important}:host(.wj-color-info){--wj-color-base: #dbe6e8 !important;--wj-color-contrast: #475b6b !important}:host(.wj-color-menu){--wj-color-base: #f4f4f4 !important;--wj-color-contrast: #21252d !important}:host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;box-sizing:content-box!important}.icon-inner,svg{display:block;height:100%;width:100%}:host(.wj-size-small){--wj-icon-size: 18px}:host(.wj-size-large){--wj-icon-size: 32px}:host(.wj-size){font-size:var(--wj-icon-size)!important}:host(.wj-color){color:var(--wj-color-contrast)}
`, p = document.createElement("template");
p.innerHTML = `<style>
	${E}
</style>`;
class S extends b {
  constructor() {
    super(p);
    m(this, "className", "Icon");
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
  beforeDraw(o, s, r) {
  }
  draw(o, s, r) {
    let l = document.createDocumentFragment(), i = document.createElement("div");
    i.classList.add("icon-inner");
    let f = L(this);
    return y(f).then((M) => {
      i.innerHTML = n.get(f);
    }), this.color && this.classList.add("wj-color-" + this.color, "wj-color"), this.size && this.classList.add("wj-size", "wj-size-" + this.size), l.appendChild(i), l;
  }
  afterDraw(o, s, r) {
  }
}
customElements.get("wj-icon") || window.customElements.define("wj-icon", S);
export {
  S as Icon
};
