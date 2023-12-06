var o = Object.defineProperty;
var p = (s, e, t) => e in s ? o(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var c = (s, e, t) => (p(s, typeof e != "symbol" ? e + "" : e, t), t);
import h from "./wj-element.js";
import "./wj-store.js";
function m(s, e) {
  function t(n) {
    const r = s.getBoundingClientRect(), i = s.ownerDocument.defaultView, d = r.left + i.pageXOffset, v = r.top + i.pageYOffset, w = n.pageX - d, a = n.pageY - v;
    e != null && e.onMove && e.onMove(w, a);
  }
  function l() {
    document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", l), e != null && e.onStop && e.onStop();
  }
  document.addEventListener("pointermove", t, { passive: !0 }), document.addEventListener("pointerup", l), (e == null ? void 0 : e.initialEvent) instanceof PointerEvent && t(e.initialEvent);
}
const u = `/*!
* direction.scss
*/:host{--wj-split-view-divider-area: 12px;--wj-split-view-divider-width: 4px;--wj-split-view-min: 0%;--wj-split-view-max: 100%;--wj-split-view-calc-a: 50%;--wj-split-view-calc-b: 50%;--wj-split-view-clamp-a: clamp(var(--wj-split-view-min), var(--wj-split-view-calc-a), var(--wj-split-view-max));--wj-split-view-clamp-b: clamp(var(--wj-split-view-min), var(--wj-split-view-calc-b), var(--wj-split-view-max));--wj-split-view-divider-background: var(--wj-border-color);--wj-split-view-divider-size: 4px;height:100%;width:100%}::slotted([slot=start]),::slotted([slot=end]){width:100%;display:flex;align-items:center;justify-content:center;overflow:hidden}:host(:not([vertical])) ::slotted([slot=start]){width:var(--wj-split-view-clamp-a)}:host(:not([vertical])) ::slotted([slot=end]){width:var(--wj-split-view-clamp-b)}:host([vertical]) ::slotted([slot=start]){height:var(--wj-split-view-clamp-a);width:100%}:host([vertical]) ::slotted([slot=end]){height:var(--wj-split-view-clamp-b);width:100%}.native-split-view{height:100%;width:100%;display:flex;flex-direction:row;overflow:hidden;position:relative}:host([vertical]) .native-split-view{flex-direction:column}.wj-divider{display:flex;position:relative;align-items:center;justify-content:center;z-index:1;background-color:var(--wj-split-view-divider-background);height:100%;width:var(--wj-split-view-divider-size);cursor:col-resize}.wj-divider:after{display:flex;content:"";position:absolute;height:100%;left:calc(var(--wj-split-view-divider-area) / -2 + var(--wj-split-view-divider-width) / 2);width:var(--wj-split-view-divider-area)}:host([vertical]) .wj-divider{height:var(--wj-split-view-divider-size);width:100%;cursor:row-resize}:host([vertical]) .wj-divider:after{width:100%;top:calc(var(--wj-split-view-divider-area) / -2 + var(--wj-split-view-divider-width) / 2);height:var(--wj-split-view-divider-area)}
`;
class j extends h {
  constructor() {
    super();
    c(this, "className", "SplitView");
    c(this, "handleDrag", (t) => {
      if (this.hasAttribute("disabled"))
        return !1;
      m(this, {
        onMove: (l, n) => {
          let r = this.hasAttribute("vertical") ? n : l, i = this.pixelsToPercentage(r), d = 100 - this.pixelsToPercentage(r);
          this.style.setProperty("--wj-split-view-calc-a", i + "%"), this.style.setProperty("--wj-split-view-calc-b", d + "%");
        },
        initialEvent: t
      });
    });
  }
  static get cssStyleSheet() {
    return u;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(t, l, n) {
    let r = document.createDocumentFragment(), i = document.createElement("div");
    i.classList.add("native-split-view");
    let d = document.createElement("slot");
    d.setAttribute("name", "start");
    let v = document.createElement("slot");
    v.setAttribute("name", "end");
    let w = document.createElement("slot");
    w.setAttribute("name", "divider");
    let a = document.createElement("div");
    return a.classList.add("wj-divider"), a.setAttribute("part", "divider"), a.appendChild(w), a.addEventListener("mousedown", this.handleDrag, !1), i.appendChild(d), i.appendChild(a), i.appendChild(v), r.appendChild(i), r;
  }
  afterDraw() {
    this.detectSize(), this.min && this.style.setProperty("--wj-split-view-min", this.pixelsToPercentage(this.min) + "%"), this.max && this.style.setProperty("--wj-split-view-max", 100 - this.pixelsToPercentage(this.max) + "%"), this.initial && (this.style.setProperty("--wj-split-view-calc-a", this.pixelsToPercentage(this.initial) + "%"), this.style.setProperty("--wj-split-view-calc-b", 100 - this.pixelsToPercentage(this.initial) + "%")), this.resizeObserver = new ResizeObserver((t) => this.handleResize(t));
  }
  detectSize() {
    const { width: t, height: l } = this.getBoundingClientRect();
    this.size = this.hasAttribute("vertical") ? l : t;
  }
  percentageToPixels(t) {
    return this.size * (t / 100);
  }
  pixelsToPercentage(t) {
    return t / this.size * 100;
  }
}
customElements.get("wj-split-view") || window.customElements.define("wj-split-view", j);
export {
  j as SplitView
};
