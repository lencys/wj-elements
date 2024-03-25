var h = Object.defineProperty;
var p = (s, e, t) => e in s ? h(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var c = (s, e, t) => (p(s, typeof e != "symbol" ? e + "" : e, t), t);
import m from "./wje-element.js";
function u(s, e) {
  function t(n) {
    const r = s.getBoundingClientRect(), i = s.ownerDocument.defaultView, d = r.left + i.pageXOffset, v = r.top + i.pageYOffset, w = n.pageX - d, a = n.pageY - v;
    e != null && e.onMove && e.onMove(w, a);
  }
  function l() {
    document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", l), e != null && e.onStop && e.onStop();
  }
  document.addEventListener("pointermove", t, { passive: !0 }), document.addEventListener("pointerup", l), (e == null ? void 0 : e.initialEvent) instanceof PointerEvent && t(e.initialEvent);
}
const j = ':host{--wje-split-view-divider-area: 12px;--wje-split-view-divider-width: 4px;--wje-split-view-min: 0%;--wje-split-view-max: 100%;--wje-split-view-calc-a: 50%;--wje-split-view-calc-b: 50%;--wje-split-view-clamp-a: clamp(var(--wje-split-view-min), var(--wje-split-view-calc-a), var(--wje-split-view-max));--wje-split-view-clamp-b: clamp(var(--wje-split-view-min), var(--wje-split-view-calc-b), var(--wje-split-view-max));--wje-split-view-divider-background: var(--wje-border-color);--wje-split-view-divider-size: 4px;height:100%;width:100%}::slotted([slot=start]),::slotted([slot=end]){width:100%;display:flex;align-items:center;justify-content:center;overflow:hidden}:host(:not([vertical])) ::slotted([slot=start]){width:var(--wje-split-view-clamp-a)}:host(:not([vertical])) ::slotted([slot=end]){width:var(--wje-split-view-clamp-b)}:host([vertical]) ::slotted([slot=start]){height:var(--wje-split-view-clamp-a);width:100%}:host([vertical]) ::slotted([slot=end]){height:var(--wje-split-view-clamp-b);width:100%}.native-split-view{height:100%;width:100%;display:flex;flex-direction:row;overflow:hidden;position:relative}:host([vertical]) .native-split-view{flex-direction:column}.wje-divider{display:flex;position:relative;align-items:center;justify-content:center;z-index:1;background-color:var(--wje-split-view-divider-background);height:100%;width:var(--wje-split-view-divider-size);cursor:col-resize}.wje-divider:after{display:flex;content:"";position:absolute;height:100%;left:calc(var(--wje-split-view-divider-area) / -2 + var(--wje-split-view-divider-width) / 2);width:var(--wje-split-view-divider-area)}:host([vertical]) .wje-divider{height:var(--wje-split-view-divider-size);width:100%;cursor:row-resize}:host([vertical]) .wje-divider:after{width:100%;top:calc(var(--wje-split-view-divider-area) / -2 + var(--wje-split-view-divider-width) / 2);height:var(--wje-split-view-divider-area)}';
class o extends m {
  /**
   * Creates an instance of SplitView.
   *
   * @constructor
   */
  constructor() {
    super();
    c(this, "className", "SplitView");
    /**
     * Handles the drag event.
     *
     * @param {Event} e - The event object.
     */
    c(this, "handleDrag", (t) => {
      if (this.hasAttribute("disabled"))
        return !1;
      u(this, {
        onMove: (l, n) => {
          let r = this.hasAttribute("vertical") ? n : l, i = this.pixelsToPercentage(r), d = 100 - this.pixelsToPercentage(r);
          this.style.setProperty("--wje-split-view-calc-a", i + "%"), this.style.setProperty("--wje-split-view-calc-b", d + "%");
        },
        initialEvent: t
      });
    });
  }
  /**
   * Returns the CSS styles for the component.
   *
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return j;
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
    return a.classList.add("wje-divider"), a.setAttribute("part", "divider"), a.appendChild(w), a.addEventListener("mousedown", this.handleDrag, !1), i.appendChild(d), i.appendChild(a), i.appendChild(v), r.appendChild(i), r;
  }
  /**
   * Sets up the event listeners after the component is drawn.
   */
  afterDraw() {
    this.detectSize(), this.min && this.style.setProperty("--wje-split-view-min", this.pixelsToPercentage(this.min) + "%"), this.max && this.style.setProperty("--wje-split-view-max", 100 - this.pixelsToPercentage(this.max) + "%"), this.initial && (this.style.setProperty("--wje-split-view-calc-a", this.pixelsToPercentage(this.initial) + "%"), this.style.setProperty("--wje-split-view-calc-b", 100 - this.pixelsToPercentage(this.initial) + "%")), this.resizeObserver = new ResizeObserver((t) => this.handleResize(t));
  }
  /**
   * Detects the size of the split view.
   */
  detectSize() {
    const { width: t, height: l } = this.getBoundingClientRect();
    this.size = this.hasAttribute("vertical") ? l : t;
  }
  /**
   * Converts pixels to a percentage.
   *
   * @param {number} value - The pixel value.
   * @returns {number} The percentage value.
   */
  pixelsToPercentage(t) {
    return t / this.size * 100;
  }
}
o.define("wje-split-view", o);
export {
  o as default
};
