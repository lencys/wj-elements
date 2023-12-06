var d = Object.defineProperty;
var h = (r, a, t) => a in r ? d(r, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[a] = t;
var l = (r, a, t) => (h(r, typeof a != "symbol" ? a + "" : a, t), t);
import v from "./wj-element.js";
import "./wj-store.js";
function w(r, a = 30, t = 80) {
  let i = r, s = 0;
  for (let e = 0; e < (i == null ? void 0 : i.length); e++)
    s = i.charCodeAt(e) + ((s << 5) - s);
  return "hsl(" + s % 360 + ", " + a + "%, " + t + "%)";
}
function c(r, a = 2) {
  let t = r.split(" "), i = t[0].substring(0, 1).toUpperCase();
  return t.length > 1 && a > 1 && (i += t[t.length - 1].substring(0, 1).toUpperCase()), i;
}
const g = `/*!
* direction.scss
*/:host{--wj-avatar-width: 32px;--wj-avatar-height: 32px;--wj-avatar-font-size: .75rem;--wj-avatar-font-weight: 400;--wj-avatar-color: inherit;--wj-avatar-background-color: rgba(33, 33, 33, .17);--wj-avatar-border-radius: 50%;--wj-avatar-border-color: transparent;--wj-avatar-border-width: 1px;--wj-avatar-border-style: solid;display:inline-block;width:var(--wj-avatar-width);height:var(--wj-avatar-height);font-size:var(--wj-avatar-font-size);font-weight:var(--wj-avatar-font-weight);color:var(--wj-avatar-color)}:host .native-avatar{display:flex;align-items:center;justify-content:center;width:100%;height:100%;border-radius:var(--wj-avatar-border-radius);background-color:var(--wj-avatar-background-color)}::slotted(wj-img),::slotted(img){border-radius:var(--wj-avatar-border-radius);width:100%;height:100%;object-fit:cover;overflow:hidden}:host(.wj-avatar-border){border-color:var(--wj-avatar-border-color);border-width:var(--wj-avatar-border-width);border-style:var(--wj-avatar-border-style)}:host(.wj-avatar-small){--wj-avatar-width: 24px;--wj-avatar-height: 24px}:host(.wj-avatar-large){--wj-avatar-width: 48px;--wj-avatar-height: 48px}
`;
class j extends v {
  constructor() {
    super();
    l(this, "className", "Avatar");
  }
  static get cssStyleSheet() {
    return g;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(t, i, s) {
    let n = document.createDocumentFragment(), o = document.createElement("div");
    if (o.setAttribute("part", "native"), o.classList.add("native-avatar"), this.size && this.classList.add("wj-avatar-" + this.size), this.isImage()) {
      let e = document.createElement("slot");
      o.appendChild(e);
    } else if (this.hasAttribute("initials")) {
      let e = c(this.label);
      this.setAttribute("style", `--wj-avatar-background-color: ${w(e)}`), o.innerText = e;
    } else {
      let e = document.createElement("slot");
      e.setAttribute("name", "icon"), o.appendChild(e);
    }
    return n.appendChild(o), n;
  }
  isImage() {
    return this.getElementsByTagName("wj-img").length > 0;
  }
}
customElements.get("wj-avatar") || window.customElements.define("wj-avatar", j);
export {
  j as Avatar
};
