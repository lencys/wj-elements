var w = Object.defineProperty;
var j = (t, e, o) => e in t ? w(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var m = (t, e, o) => (j(t, typeof e != "symbol" ? e + "" : e, o), o);
import b from "./wj-element.js";
import "./default-store-actions-ff3e8b0b.js";
const n = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map();
let c;
const v = (t) => l(t) && (t = t.trim(), x(t)) ? t : null, x = (t) => t.length > 0 && /(\/|\.)/.test(t), u = (t) => t.startsWith("data:image/svg+xml"), h = (t) => t.indexOf(";utf8,") !== -1, l = (t) => typeof t == "string", z = (t) => {
  const e = document.createElement("div");
  e.innerHTML = t;
  const o = e.firstElementChild;
  return o && o.nodeName.toLowerCase() === "svg" && (o.getAttribute("class"), g(o)) ? e.innerHTML : "";
}, g = (t) => {
  if (t.nodeType === 1) {
    if (t.nodeName.toLowerCase() === "script")
      return !1;
    for (let e = 0; e < t.attributes.length; e++) {
      const o = t.attributes[e].name;
      if (l(o) && o.toLowerCase().indexOf("on") === 0)
        return !1;
    }
    for (let e = 0; e < t.childNodes.length; e++)
      if (!g(t.childNodes[e]))
        return !1;
  }
  return !0;
}, L = (t, e) => {
  let o = d.get(t);
  if (console.log(!o), !o)
    if (typeof fetch < "u" && typeof document < "u")
      if (console.log("SVG", u(t) && h(t)), u(t) && h(t)) {
        c || (c = new DOMParser());
        const r = c.parseFromString(t, "text/html").querySelector("svg");
        return r && n.set(t, r.outerHTML), Promise.resolve();
      } else
        o = fetch(t).then((s) => {
          if (s.ok)
            return s.text().then((r) => {
              r && e !== !1 && (r = z(r)), n.set(t, r || "");
            });
          n.set(t, "");
        }), d.set(t, o);
    else
      return n.set(t, ""), Promise.resolve();
  return o;
}, y = (t) => {
  let e = v(t.src);
  return e || (e = S(t.name), e ? A(e) : null);
}, S = (t) => !l(t) || t.trim() === "" || t.replace(/[a-z]|-|\d/gi, "") !== "" ? null : t, A = (t) => `./assets/img/icons/svgs/solid/${t}.svg`, E = `/*!
* direction.scss
*/:host(.wj-color-primary){--wj-color-base: #eae0fb !important;--wj-color-contrast: #845ae0 !important}:host(.wj-color-complete){--wj-color-base: #d3eeff !important;--wj-color-contrast: #0f8ff9 !important}:host(.wj-color-success){--wj-color-base: #d6f7f0 !important;--wj-color-contrast: #26bf93 !important}:host(.wj-color-warning){--wj-color-base: #fffde1 !important;--wj-color-contrast: #ffe858 !important}:host(.wj-color-danger){--wj-color-base: #fde2da !important;--wj-color-contrast: #e6533c !important}:host(.wj-color-info){--wj-color-base: #dbe6e8 !important;--wj-color-contrast: #475b6b !important}:host(.wj-color-menu){--wj-color-base: #f4f4f4 !important;--wj-color-contrast: #21252d !important}:host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;box-sizing:content-box!important}.icon-inner,svg{display:block;height:100%;width:100%}:host(.wj-size-small){font-size:18px!important}:host(.wj-size-large){font-size:32px!important}:host(.wj-color){color:var(--wj-color-contrast)}
`, p = document.createElement("template");
p.innerHTML = `<style>
	${E}
</style>`;
class C extends b {
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
    let f = document.createDocumentFragment(), a = document.createElement("div");
    a.classList.add("icon-inner"), console.log("NAME", this.name);
    let i = y(this);
    return console.log("URL", i), console.log("SVG333", L(i).then((M) => {
      console.log("SVG", n.get(i)), a.innerHTML = n.get(i);
    })), this.color && this.classList.add("wj-color-" + this.color, "wj-color"), this.size && this.classList.add("wj-size-" + this.size), f.appendChild(a), f;
  }
  afterDraw(o, s, r) {
  }
}
customElements.get("wj-icon") || window.customElements.define("wj-icon", C);
export {
  C as Icon
};
