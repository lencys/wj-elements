var u = Object.defineProperty;
var f = (i, e, t) => e in i ? u(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var l = (i, e, t) => (f(i, typeof e != "symbol" ? e + "" : e, t), t);
import h from "./wje-element.js";
import g from "./wje-icon.js";
function j(i, e) {
  function t(o) {
    const d = i.getBoundingClientRect(), r = i.ownerDocument.defaultView, n = d.left + r.pageXOffset, m = d.top + r.pageYOffset, c = o.pageX - n, p = o.pageY - m;
    e != null && e.onMove && e.onMove(c, p);
  }
  function a() {
    document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", a), e != null && e.onStop && e.onStop();
  }
  document.addEventListener("pointermove", t, { passive: !0 }), document.addEventListener("pointerup", a), (e == null ? void 0 : e.initialEvent) instanceof PointerEvent && t(e.initialEvent);
}
const b = ':host{--wje-img-compare-divider-area: 12px;--wje-img-compare-divider-background: white;--wje-img-compare-divider-size: 2px;--wje-img-compare-divider-left: 50%;--wje-img-compare-position: 50%;--wje-img-compare-clip-path: inset(0 calc(100% - var(--wje-img-compare-position)) 0 0);---wje-img-compare-divider-area: auto;display:inline-block;position:relative;width:100%;border-color:var(--wje-border-color);border-style:solid;border-width:1px}.wje-before,.wje-after{display:block}.wje-after{position:absolute;top:0;left:0;height:100%;width:100%;clip-path:var(--wje-img-compare-clip-path)}.native-split-view{max-width:100%;max-height:100%;overflow:hidden}.wje-divider{display:flex;position:absolute;align-items:center;justify-content:center;z-index:1;background-color:var(--wje-img-compare-divider-background);height:100%;width:var(--wje-img-compare-divider-size);cursor:col-resize;top:0;left:var(--wje-img-compare-divider-left)}.wje-divider:after{display:flex;content:"";position:absolute;height:100%;left:calc(var(--wje-img-compare-divider-area) / -2 + var(--wje-img-compare-divider-size) / 2);width:var(---wje-img-compare-divider-area)}.wje-divider wje-icon{position:absolute;background-color:#fff;padding:.5rem;color:var(--wje-color-dark);border-radius:var(--wje-border-radius-circle);box-shadow:#523f6933 0 0 30px 10px;background:var(--wje-color-white)!important}';
class w extends h {
  /**
   * Creates an instance of ImgComparer.
   *
   * @constructor
   */
  constructor() {
    super();
    /**
     * Dependencies of the ImgComparer component.
     *
     * @property {Object} depandencies
     */
    l(this, "depandencies", {
      "wje-icon": g
    });
    l(this, "className", "ImgComparer");
    /**
     * Handles the drag event.
     *
     * @param {Event} e - The event.
     */
    l(this, "handleDrag", (t) => {
      const { width: a } = this.native.getBoundingClientRect();
      j(this, {
        onMove: (o) => {
          let d = o / a * 100;
          this.position = parseFloat(this.clamp(d, 0, 100).toFixed(2)), this.native.style.setProperty("--wje-img-compare-divider-left", this.position + "%"), this.native.style.setProperty("--wje-img-compare-clip-path", `inset(0 ${100 - this.position}% 0 0)`);
        },
        initialEvent: t
      });
    });
    /**
     * Clamps a number between a minimum and maximum value.
     *
     * @param {number} num - The number to clamp.
     * @param {number} min - The minimum value.
     * @param {number} max - The maximum value.
     * @returns {number} The clamped number.
     */
    l(this, "clamp", (t, a, o) => Math.min(Math.max(t, a), o));
  }
  /**
   * Returns the CSS styles for the component.
   *
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return b;
  }
  /**
   * Returns the list of attributes to observe for changes.
   *
   * @static
   * @returns {Array<string>}
   */
  static get observedAttributes() {
    return [];
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
  draw(t, a, o) {
    let d = document.createDocumentFragment(), r = document.createElement("div");
    r.classList.add("native-split-view");
    let n = document.createElement("div");
    n.classList.add("wje-before");
    let m = document.createElement("slot");
    m.setAttribute("name", "before");
    let c = document.createElement("div");
    c.classList.add("wje-after");
    let p = document.createElement("slot");
    p.setAttribute("name", "after");
    let v = document.createElement("wje-icon");
    v.setAttribute("name", "arrow-bar-both");
    let s = document.createElement("div");
    return s.classList.add("wje-divider"), s.setAttribute("part", "divider"), s.addEventListener("mousedown", this.handleDrag, !1), n.appendChild(m), c.appendChild(p), s.appendChild(v), r.appendChild(n), r.appendChild(c), r.appendChild(s), d.appendChild(r), this.native = r, d;
  }
}
w.define("wje-img-comparer", w);
export {
  w as default
};
