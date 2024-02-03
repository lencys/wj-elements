var d = Object.defineProperty;
var h = (r, a, t) => a in r ? d(r, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[a] = t;
var n = (r, a, t) => (h(r, typeof a != "symbol" ? a + "" : a, t), t);
import v from "./wj-element.js";
import "./wj-store.js";
function w(r, a = 30, t = 80) {
  let o = r, s = 0;
  for (let e = 0; e < (o == null ? void 0 : o.length); e++)
    s = o.charCodeAt(e) + ((s << 5) - s);
  return "hsl(" + s % 360 + ", " + a + "%, " + t + "%)";
}
function c(r, a = 2) {
  let t = r.split(" "), o = t[0].substring(0, 1).toUpperCase();
  return t.length > 1 && a > 1 && (o += t[t.length - 1].substring(0, 1).toUpperCase()), o;
}
const j = `:host{--wj-avatar-width: 32px;--wj-avatar-height: 32px;--wj-avatar-font-size: .75rem;--wj-avatar-font-weight: 400;--wj-avatar-color: inherit;--wj-avatar-background-color: var(--wj-color-contrast-low);--wj-avatar-border-radius: 50%;--wj-avatar-border-color: transparent;--wj-avatar-border-width: 1px;--wj-avatar-border-style: solid;display:inline-block;width:var(--wj-avatar-width);height:var(--wj-avatar-height);font-size:var(--wj-avatar-font-size);font-weight:var(--wj-avatar-font-weight);color:var(--wj-avatar-color)}:host .native-avatar{display:flex;align-items:center;justify-content:center;width:100%;height:100%;border-radius:var(--wj-avatar-border-radius);background-color:var(--wj-avatar-background-color)}::slotted(wj-img),::slotted(img){border-radius:var(--wj-avatar-border-radius);width:100%;height:100%;object-fit:cover;overflow:hidden}:host(.wj-avatar-border){border-color:var(--wj-avatar-border-color);border-width:var(--wj-avatar-border-width);border-style:var(--wj-avatar-border-style)}:host(.wj-avatar-small){--wj-avatar-width: 24px;--wj-avatar-height: 24px}:host(.wj-avatar-large){--wj-avatar-width: 48px;--wj-avatar-height: 48px}
`;
class g extends v {
  constructor() {
    super();
    n(this, "className", "Avatar");
  }
  static get cssStyleSheet() {
    return j;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(t, o, s) {
    let l = document.createDocumentFragment(), i = document.createElement("div");
    if (i.setAttribute("part", "native"), i.classList.add("native-avatar"), this.size && this.classList.add("wj-avatar-" + this.size), this.isImage()) {
      let e = document.createElement("slot");
      i.appendChild(e);
    } else if (this.hasAttribute("initials")) {
      let e = c(this.label);
      this.setAttribute("style", `--wj-avatar-background-color: ${w(e)}`), i.innerText = e;
    } else {
      let e = document.createElement("slot");
      e.setAttribute("name", "icon"), i.appendChild(e);
    }
    return l.appendChild(i), l;
  }
  isImage() {
    return this.getElementsByTagName("wj-img").length > 0;
  }
}
customElements.get("wj-avatar") || window.customElements.define("wj-avatar", g);
export {
  g as Avatar
};
