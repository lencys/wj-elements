var p = Object.defineProperty;
var b = (o, s, t) => (s in o ? p(o, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (o[s] = t));
var r = (o, s, t) => (b(o, typeof s != 'symbol' ? s + '' : s, t), t);
import w from './wje-element.js';
const A = 500,
  C = 300,
  x = '--wje-masonry-layout-col-count',
  v = '--wje-masonry-layout-gap',
  d = 1,
  m = /* @__PURE__ */ new Map();
function c(o, s, t) {
  const e = parseFloat(o.getAttribute(s) || '');
  return isNaN(e) ? t : e;
}
function g(o, s, t) {
  return isNaN(s) ? Math.max(1, Math.ceil(o / t)) : s;
}
function E(o, s, t) {
  const e = m.get(t);
  e != null && window.clearTimeout(e), m.set(t, window.setTimeout(o, s));
}
function S(o) {
  let s = 0,
    t = 1 / 0;
  return (
    o.forEach((e, n) => {
      e < t && ((t = e), (s = n));
    }),
    s
  );
}
const N =
  ':host{display:flex;align-items:flex-start;justify-content:stretch;width:100%}.column{max-width:calc((100% / var(--wje-masonry-layout-col-count, 1) - ((var(--wje-masonry-layout-gap, 1rem) * (var(--wje-masonry-layout-col-count, 1) - 1) / var(--wje-masonry-layout-col-count, 1)))));width:100%;flex:1;display:flex;flex-direction:column}.column:not(:last-child){margin-inline-end:var(--wje-masonry-layout-gap, 1rem)}.column ::slotted(*){margin-block-end:var(--wje-masonry-layout-gap, 1rem);box-sizing:border-box;width:100%}#unset-items{opacity:0;position:absolute;pointer-events:none}';
class f extends w {
  /**
   * Constructor for the Masonry class.
   */
  constructor() {
    super();
    r(this, 'debounceId', `layout_${Math.random()}`);
    r(this, 'ro');
    r(this, 'className', 'Masonry');
    /**
     * Called when the slot changes.
     */
    r(this, 'onSlotChange', () => {
      (this.unsetSlot.assignedNodes() || []).filter((e) => e.nodeType === d).length > 0 && this.layout();
    });
    /**
     * Called when the window resizes.
     * @param {Array} entries - The entries to use.
     */
    r(this, 'onResize', (t) => {
      const { width: e } =
        t != null && Array.isArray(t) && t.length > 0 ? t[0].contentRect : { width: this.offsetWidth };
      g(e, this.cols, this.maxColWidth) !== this.columns.length && this.scheduleLayout();
    });
    /**
     * Lays out the element.
     */
    r(this, 'layout', () => {
      this.currentRequestAnimationFrameCallback != null &&
        window.cancelAnimationFrame(this.currentRequestAnimationFrameCallback),
        (this.currentRequestAnimationFrameCallback = requestAnimationFrame(() => {
          const t = this.gap,
            e = Array.from(this.children).filter((l) => l.nodeType === d),
            n = g(this.offsetWidth, this.cols, this.maxColWidth),
            a = Array(n).fill(0),
            i = [];
          for (const l of e) {
            const y = l.getBoundingClientRect().height;
            let u = S(a);
            a[u] += y + +t;
            const h = u;
            l.slot !== h && i.push(() => (l.slot = h));
          }
          for (const l of i) l();
          this.renderCols(n);
        }));
    });
    (this.debounceId = `layout_${Math.random()}`),
      (this.ro = void 0),
      (this.currentRequestAnimationFrameCallback = void 0),
      (this.unsetSlot = void 0);
  }
  /**
   * Setter for the maxColWidth property.
   * @param {number} value - The maximum column width.
   */
  set maxColWidth(t) {
    this.setAttribute('max-col-width', t);
  }
  /**
   * Getter for the maxColWidth property.
   * @returns {number} The maximum column width.
   */
  get maxColWidth() {
    return this.hasAttribute('max-col-width') ? +this.getAttribute('max-col-width') : +A;
  }
  /**
   * Setter for the cols property.
   * @param {number} value - The number of columns.
   */
  set cols(t) {
    this.hasAttribute('cols') && this.setAttribute('cols', t);
  }
  /**
   * Getter for the cols property.
   * @returns {number} The number of columns.
   */
  get cols() {
    return c(this, 'cols', 'auto');
  }
  /**
   * Setter for the gap property.
   * @param {number} value - The gap between columns.
   */
  set gap(t) {
    this.setAttribute('gap', t);
  }
  /**
   * Getter for the gap property.
   * @returns {number} The gap between columns.
   */
  get gap() {
    return c(this, 'gap', '24');
  }
  /**
   * Setter for the debounce property.
   * @param {number} value - The debounce time.
   */
  set debounce(t) {
    this.setAttribute('debounce', t);
  }
  /**
   * Getter for the debounce property.
   * @returns {number} The debounce time.
   */
  get debounce() {
    return c(this, 'debounce', C);
  }
  /**
   * Getter for the columns property.
   * @returns {Array} An array of all the columns.
   */
  get columns() {
    return Array.from(this.shadowRoot.querySelectorAll('.column'));
  }
  /**
   * Getter for the cssStyleSheet property.
   * @returns {CSSStyleSheet} The CSS style sheet.
   */
  static get cssStyleSheet() {
    return N;
  }
  /**
   * Getter for the observedAttributes property.
   * @returns {Array} An array of the observed attributes.
   */
  static get observedAttributes() {
    return ['max-col-width', 'gap', 'cols'];
  }
  /**
   * Callback for when an attribute changes.
   * @param {string} name - The name of the attribute.
   * @param {string} old - The old value of the attribute.
   * @param {string} newName - The new value of the attribute.
   */
  attributeChangedCallback(t, e, n) {
    switch (t) {
      case 'gap':
        this.style.setProperty(v, `${this.gap}px`);
        break;
    }
    this.scheduleLayout();
  }
  /**
   * Callback for when the element is disconnected.
   */
  disconnectedCallback() {
    this.unsetSlot.removeEventListener('slotchange', this.onSlotChange),
      window.removeEventListener('resize', this.onResize),
      this.ro != null && this.ro.unobserve(this);
  }
  /**
   * Sets up the attributes for the element.
   */
  setupAttributes() {
    this.isShadowRoot = 'open';
  }
  /**
   * Draws the element.
   * @param {CanvasRenderingContext2D} context - The context to draw on.
   * @param {Object} store - The store to use.
   * @param {Object} params - The parameters to use.
   * @returns {DocumentFragment} The drawn element.
   */
  draw(t, e, n) {
    let a = document.createDocumentFragment(),
      i = document.createElement('div');
    i.setAttribute('id', 'unset-items'), i.setAttribute('part', 'native');
    let l = document.createElement('slot');
    return i.appendChild(l), (this.unsetSlot = l), (this.native = i), a.appendChild(i), a;
  }
  /**
   * Called after the element is drawn.
   */
  afterDraw() {
    this.onSlotChange(),
      this.onResize(),
      this.layout(),
      this.unsetSlot.addEventListener('slotchange', this.onSlotChange),
      'ResizeObserver' in window
        ? ((this.ro = new ResizeObserver(this.onResize)), this.ro.observe(this))
        : window.addEventListener('resize', this.onResize);
  }
  /**
   * Renders the columns.
   * @param {number} colCount - The number of columns to render.
   */
  renderCols(t) {
    const e = this.columns;
    if (e.length !== t) {
      for (const n of e) n.parentNode && n.parentNode.removeChild(n);
      for (let n = 0; n < t; n++) {
        const a = document.createElement('div');
        a.classList.add('column'), a.setAttribute('part', `column column-${n}`);
        const i = document.createElement('slot');
        i.setAttribute('name', n), a.appendChild(i), this.context.appendChild(a);
      }
      this.style.setProperty(x, t);
    }
  }
  /**
   * Schedules a layout.
   * @param {number} ms - The number of milliseconds to wait before laying out.
   */
  scheduleLayout(t = this.debounce) {
    E(this.layout, t, this.debounceId);
  }
}
f.define('wje-masonry', f);
export { f as default };
