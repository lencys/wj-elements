var w = Object.defineProperty;
var h = (i, e, t) => e in i ? w(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var p = (i, e, t) => (h(i, typeof e != "symbol" ? e + "" : e, t), t);
import u from "./wj-element.js";
import "./wj-store.js";
function f(i, e) {
  function t(o) {
    const d = i.getBoundingClientRect(), r = i.ownerDocument.defaultView, n = d.left + r.pageXOffset, l = d.top + r.pageYOffset, s = o.pageX - n, m = o.pageY - l;
    e != null && e.onMove && e.onMove(s, m);
  }
  function a() {
    document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", a), e != null && e.onStop && e.onStop();
  }
  document.addEventListener("pointermove", t, { passive: !0 }), document.addEventListener("pointerup", a), (e == null ? void 0 : e.initialEvent) instanceof PointerEvent && t(e.initialEvent);
}
const g = `/*!
* direction.scss
*/:host{--wj-img-compare-divider-area: 12px;--wj-img-compare-divider-background: white;--wj-img-compare-divider-size: 2px;--wj-img-compare-divider-left: 50%;--wj-img-compare-position: 50%;--wj-img-compare-clip-path: inset(0 calc(100% - var(--wj-img-compare-position)) 0 0);display:inline-block;position:relative;width:100%;border-color:var(--wj-border-color);border-style:solid;border-width:1px}.wj-before,.wj-after{display:block}.wj-after{position:absolute;top:0;left:0;height:100%;width:100%;clip-path:var(--wj-img-compare-clip-path)}.native-split-view{max-width:100%;max-height:100%;overflow:hidden}.wj-divider{display:flex;position:absolute;align-items:center;justify-content:center;z-index:1;background-color:var(--wj-img-compare-divider-background);height:100%;width:var(--wj-img-compare-divider-size);cursor:col-resize;top:0;left:var(--wj-img-compare-divider-left)}.wj-divider:after{display:flex;content:"";position:absolute;height:100%;left:calc(var(--wj-img-compare-divider-area) / -2 + var(--wj-img-compare-divider-size) / 2);width:var(---wj-img-compare-divider-area)}.wj-divider wj-icon{position:absolute;background-color:#fff;padding:.5rem;color:var(--wj-color);border-radius:50%;width:20px;height:20px;box-shadow:#523f6933 0 0 30px 10px}
`;
class j extends u {
  constructor() {
    super();
    p(this, "className", "ImgComparer");
    p(this, "handleDrag", (t) => {
      const { width: a } = this.native.getBoundingClientRect();
      f(this, {
        onMove: (o) => {
          let d = o / a * 100;
          this.position = parseFloat(this.clamp(d, 0, 100).toFixed(2)), this.native.style.setProperty("--wj-img-compare-divider-left", this.position + "%"), this.native.style.setProperty("--wj-img-compare-clip-path", `inset(0 ${100 - this.position}% 0 0)`);
        },
        initialEvent: t
      });
    });
    p(this, "clamp", (t, a, o) => Math.min(Math.max(t, a), o));
  }
  static get cssStyleSheet() {
    return g;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(t, a, o) {
    let d = document.createDocumentFragment(), r = document.createElement("div");
    r.classList.add("native-split-view");
    let n = document.createElement("div");
    n.classList.add("wj-before");
    let l = document.createElement("slot");
    l.setAttribute("name", "before");
    let s = document.createElement("div");
    s.classList.add("wj-after");
    let m = document.createElement("slot");
    m.setAttribute("name", "after");
    let v = document.createElement("wj-icon");
    v.setAttribute("name", "arrows-left-right");
    let c = document.createElement("div");
    return c.classList.add("wj-divider"), c.setAttribute("part", "divider"), c.addEventListener("mousedown", this.handleDrag, !1), n.appendChild(l), s.appendChild(m), c.appendChild(v), r.appendChild(n), r.appendChild(s), r.appendChild(c), d.appendChild(r), this.native = r, d;
  }
}
customElements.get("wj-img-comparer") || window.customElements.define("wj-img-comparer", j);
export {
  j as ImgComparer
};
