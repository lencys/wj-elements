var A = Object.defineProperty;
var j = (i, o, e) => (o in i ? A(i, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (i[o] = e));
var g = (i, o, e) => (j(i, typeof o != 'symbol' ? o + '' : o, e), e);
import k from './wje-element.js';
const f =
  ':host(.wje-color-primary) #bar{--wje-progress-bar-color: var(--wje-color-primary)}:host(.wje-color-complete) #bar{--wje-progress-bar-color: var(--wje-color-complete)}:host(.wje-color-success) #bar{--wje-progress-bar-color: var(--wje-color-success)}:host(.wje-color-warning) #bar{--wje-progress-bar-color: var(--wje-color-warning)}:host(.wje-color-danger) #bar{--wje-progress-bar-color: var(--wje-color-danger)}:host(.wje-color-dark) #bar{--wje-progress-bar-color: var(--wje-color-contrast-0)}:host(.wje-color-light) #bar{--wje-progress-bar-color: var(--wje-color-contrast-11)}:host{--wje-progress-bar-color: var(--wje-color-contrast-6);--wje-progress-bar-text-size: .75rem;--wje-progress-bar-text-color: var(--wje-color);--wje-progress-bar-stroke: var(--wje-color-contrast-3);stroke:var(--wje-progress-bar-stroke)}:host .progress{position:relative;display:flex;align-items:center}:host .slot-wrapper{display:flex;position:absolute;top:0;align-items:center;width:100%;height:100%;justify-content:center}:host #bar{stroke:var(--wje-progress-bar-color)}:host text{transform:rotate(90deg);transform-origin:center;text-anchor:middle;dominant-baseline:middle;font-size:var(--wje-progress-bar-text-size);fill:var(--wje-progress-bar-text-color);stroke:var(--wje-progress-bar-text-color)}:host(.wje-color) #bar{stroke:var(--wje-progress-bar-color)}::slotted([slot="start"]){margin-inline:0 1rem}::slotted([slot="end"]){margin-inline:1rem 0}';
class w extends k {
  /**
   * Creates an instance of ProgressBar.
   *
   * @constructor
   */
  constructor() {
    super();
    g(this, 'className', 'ProgressBar');
  }
  /**
   * Sets the radius of the progress bar.
   *
   * @param {number} value - The value to set.
   */
  set radius(e) {
    this.setAttribute('radius', e);
  }
  /**
   * Gets the radius of the progress bar.
   *
   * @returns {number} The value of the radius.
   */
  get radius() {
    return +this.getAttribute('radius') || 70;
  }
  /**
   * Gets the diameter of the progress bar.
   *
   * @returns {number} The value of the diameter.
   */
  get diameter() {
    return this.radius * 2 + this.stroke;
  }
  /**
   * Sets the stroke of the progress bar.
   *
   * @param {number} value - The value to set.
   */
  set stroke(e) {
    this.setAttribute('stroke', e);
  }
  /**
   * Gets the stroke of the progress bar.
   *
   * @returns {number} The value of the stroke.
   */
  get stroke() {
    return +this.getAttribute('stroke') || 6;
  }
  /**
   * Gets the linecap of the progress bar.
   *
   * @returns {string} The value of the linecap.
   */
  get linecap() {
    return this.getAttribute('linecap') || 'square';
  }
  /**
   * Returns the CSS styles for the component.
   *
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return f;
  }
  /**
   * Returns the list of attributes to observe for changes.
   *
   * @static
   * @returns {Array<string>}
   */
  static get observedAttributes() {
    return ['progress'];
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = 'open';
  }
  /**
   * Draws the component.
   *
   * @param {Object} context - The context for drawing.
   * @param {Object} store - The store for drawing.
   * @param {Object} params - The parameters for drawing.
   * @returns {DocumentFragment}
   */
  draw(e, h, l) {
    let c = this.radius + this.stroke / 2,
      u = document.createDocumentFragment();
    l.color && this.classList.add('wje-color-' + l.color, 'wje-color');
    let a = document.createElement('div');
    a.classList.add('progress');
    let m = document.createElement('slot'),
      d = document.createElement('div');
    d.classList.add('slot-wrapper');
    let p = document.createElement('slot');
    p.setAttribute('name', 'start');
    let b = document.createElement('slot');
    b.setAttribute('name', 'end');
    let s = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
      r,
      t;
    if ((this == null ? void 0 : this.type) === 'circle') {
      s.setAttribute('width', this.diameter),
        s.setAttribute('height', this.diameter),
        s.setAttribute('viewBox', `0 0 ${this.diameter} ${this.diameter}`),
        s.setAttribute('style', 'transform: rotate(-90deg)'),
        (r = document.createElementNS('http://www.w3.org/2000/svg', 'circle')),
        r.setAttribute('r', this.radius),
        r.setAttribute('cx', c),
        r.setAttribute('cy', c),
        r.setAttribute('fill', 'transparent'),
        (t = document.createElementNS('http://www.w3.org/2000/svg', 'circle')),
        t.setAttribute('r', this.radius),
        t.setAttribute('cx', c),
        t.setAttribute('cy', c),
        t.setAttribute('fill', 'transparent'),
        t.setAttribute('stroke-dasharray', '0'),
        t.setAttribute('stroke-dashoffset', '0');
      let n = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      n.setAttribute('x', '50%'), n.setAttribute('y', '50%'), (n.innerHTML = this.progress + '%'), s.appendChild(n);
    } else
      s.setAttribute('width', '100%'),
        s.setAttribute('height', this.stroke),
        s.setAttribute('preserveAspectRatio', 'none'),
        (r = document.createElementNS('http://www.w3.org/2000/svg', 'line')),
        r.setAttribute('x1', 0),
        r.setAttribute('y1', this.stroke / 2),
        r.setAttribute('x2', '100%'),
        r.setAttribute('y2', this.stroke / 2),
        (t = document.createElementNS('http://www.w3.org/2000/svg', 'line')),
        t.setAttribute('x1', 0),
        t.setAttribute('y1', this.stroke / 2),
        t.setAttribute('x2', this.progress + '%'),
        t.setAttribute('y2', this.stroke / 2);
    return (
      r.setAttribute('stroke-linecap', this.linecap),
      r.setAttribute('stroke-width', this.stroke + 'px'),
      t.setAttribute('stroke-linecap', this.linecap),
      t.setAttribute('stroke-width', this.stroke + 'px'),
      t.setAttribute('id', 'bar'),
      s.appendChild(r),
      s.appendChild(t),
      d.appendChild(m),
      a.appendChild(p),
      a.appendChild(d),
      a.appendChild(s),
      a.appendChild(b),
      u.appendChild(a),
      (this.background = r),
      (this.bar = t),
      u
    );
  }
  /**
   * Adds event listeners after the component is drawn.
   */
  afterDraw(e, h, l) {
    this.type === 'circle' &&
      (this.background.setAttribute('stroke-dasharray', this.getCircleDashoffset(100) + 'px'),
      this.background.setAttribute('stroke-dashoffset', '0px'),
      this.bar.setAttribute('stroke-dasharray', this.getCircleDasharray(this.radius) + 'px'),
      this.bar.setAttribute('stroke-dashoffset', this.getCircleDashoffset(l.progress, this.radius) + 'px'));
  }
  /**
   * Returns the dasharray for a circle with the given radius.
   *
   * @param {number} radius - The radius of the circle.
   * @returns {number} The dasharray value.
   */
  getCircleDasharray(e = 70) {
    return 2 * Math.PI * e;
  }
  /**
   * Returns the dashoffset for a circle with the given progress and radius.
   *
   * @param {number} progress - The progress of the circle.
   * @param {number} radius - The radius of the circle.
   * @returns {number} The dashoffset value.
   */
  getCircleDashoffset(e = 0, h) {
    return this.getCircleDasharray(h) * ((100 - e) / 100);
  }
}
w.define('wje-progress-bar', w);
export { w as default };
