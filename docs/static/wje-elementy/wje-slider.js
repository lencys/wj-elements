var v = Object.defineProperty;
var p = (a, o, r) => (o in a ? v(a, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (a[o] = r));
var l = (a, o, r) => (p(a, typeof o != 'symbol' ? o + '' : o, r), r);
import j from './wje-element.js';
const g =
  ':host{--wje-slider-track-height: .25rem;position:relative;display:flex;align-items:center;max-width:100%}:host .native-slider{display:flex;position:relative;flex-grow:1;align-items:center;height:inherit}:host .slider{display:flex;align-items:center;position:relative;flex:1 1 0%;width:100%;height:var(--height);contain:size layout style;cursor:grab;touch-action:pan-y}input[type=range]{-webkit-appearance:none;width:100%;height:var(--wje-slider-track-height);margin:0;border-radius:5px;background-size:70% 100%;background-repeat:no-repeat;--wje-slider-color: var(--wje-color-primary);--wje-slider-thumb-color: var(--wje-color-primary);--wje-slider-thumb-shadow: none;--wje-slider-thumb-shadow-active: color-mix(in hsl, var(--wje-color-contrast-2) 60%, white) 0 0 0 7px;--wje-slider-track-color: var(--wje-color-contrast-2);background-color:var(--wje-slider-track-color, var(--wje-color-contrast-2));background-image:linear-gradient(var(--wje-slider-color, var(--wje-color-primary)),var(--wje-slider-color, var(--wje-color-primary)))}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;height:18px;width:18px;border-radius:50%;cursor:ew-resize;transition:background .3s ease-in-out}input[type=range]::-moz-range-thumb{-webkit-appearance:none;height:18px;width:18px;border-radius:50%;cursor:pointer;transition:background .3s ease-in-out;border:0}input[type=range]::-ms-thumb{-webkit-appearance:none;height:18px;width:18px;border-radius:50%;cursor:ew-resize;transition:background .3s ease-in-out}input[type=range]::-webkit-slider-runnable-track{-webkit-appearance:none;box-shadow:none;border:none;background:transparent}input[type=range]::-moz-range-track{-webkit-appearance:none;box-shadow:none;border:none;background:transparent}input[type=range]::-ms-track{-webkit-appearance:none;box-shadow:none;border:none;background:transparent}input[type=range][color=primary]{--wje-slider-color: var(--wje-color-primary);--wje-slider-thumb-color: var(--wje-color-primary);--wje-slider-thumb-shadow: none;--wje-slider-thumb-shadow-active: color-mix(in hsl, var(--wje-color-contrast-2) 60%, white) 0 0 0 7px;--wje-slider-track-color: var(--wje-color-contrast-2);background-color:var(--wje-slider-track-color, var(--wje-color-contrast-2));background-image:linear-gradient(var(--wje-slider-color, var(--wje-color-primary)),var(--wje-slider-color, var(--wje-color-primary)))}input[type=range][color=primary]::-webkit-slider-thumb{background:var(--wje-slider-thumb-color, var(--wje-color-primary));box-shadow:var(--wje-slider-thumb-shadow)}input[type=range][color=primary]::-moz-range-thumb{background:var(--wje-slider-thumb-color, var(--wje-color-primary));box-shadow:var(--wje-slider-thumb-shadow)}input[type=range][color=primary]::-ms-thumb{background:var(--wje-slider-thumb-color, var(--wje-color-primary));box-shadow:var(--wje-slider-thumb-shadow)}input[type=range][color=primary]::-webkit-slider-thumb:active{background:var(--wje-slider-thumb-color, var(--wje-color-primary));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=primary]::-moz-range-thumb:active{background:var(--wje-slider-thumb-color, var(--wje-color-primary));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=primary]::-ms-thumb:active{background:var(--wje-slider-thumb-color, var(--wje-color-primary));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=primary]::-webkit-slider-thumb:hover{background:var(--wje-slider-thumb-color, var(--wje-color-primary));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=primary]::-moz-range-thumb:hover{background:var(--wje-slider-thumb-color, var(--wje-color-primary));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=primary]::-ms-thumb:hover{background:var(--wje-slider-thumb-color, var(--wje-color-primary));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=success]{--wje-slider-color: var(--wje-color-success);--wje-slider-thumb-color: var(--wje-color-success);--wje-slider-thumb-shadow: none;--wje-slider-thumb-shadow-active: color-mix(in hsl, var(--wje-color-contrast-2) 60%, white) 0 0 0 7px;--wje-slider-track-color: var(--wje-color-contrast-2);background-color:var(--wje-slider-track-color, var(--wje-color-contrast-2));background-image:linear-gradient(var(--wje-slider-color, var(--wje-color-success)),var(--wje-slider-color, var(--wje-color-success)))}input[type=range][color=success]::-webkit-slider-thumb{background:var(--wje-slider-thumb-color, var(--wje-color-success));box-shadow:var(--wje-slider-thumb-shadow)}input[type=range][color=success]::-moz-range-thumb{background:var(--wje-slider-thumb-color, var(--wje-color-success));box-shadow:var(--wje-slider-thumb-shadow)}input[type=range][color=success]::-ms-thumb{background:var(--wje-slider-thumb-color, var(--wje-color-success));box-shadow:var(--wje-slider-thumb-shadow)}input[type=range][color=success]::-webkit-slider-thumb:active{background:var(--wje-slider-thumb-color, var(--wje-color-success));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=success]::-moz-range-thumb:active{background:var(--wje-slider-thumb-color, var(--wje-color-success));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=success]::-ms-thumb:active{background:var(--wje-slider-thumb-color, var(--wje-color-success));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=success]::-webkit-slider-thumb:hover{background:var(--wje-slider-thumb-color, var(--wje-color-success));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=success]::-moz-range-thumb:hover{background:var(--wje-slider-thumb-color, var(--wje-color-success));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=success]::-ms-thumb:hover{background:var(--wje-slider-thumb-color, var(--wje-color-success));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=complete]{--wje-slider-color: var(--wje-color-complete);--wje-slider-thumb-color: var(--wje-color-complete);--wje-slider-thumb-shadow: none;--wje-slider-thumb-shadow-active: color-mix(in hsl, var(--wje-color-contrast-2) 60%, white) 0 0 0 7px;--wje-slider-track-color: var(--wje-color-contrast-2);background-color:var(--wje-slider-track-color, var(--wje-color-contrast-2));background-image:linear-gradient(var(--wje-slider-color, var(--wje-color-complete)),var(--wje-slider-color, var(--wje-color-complete)))}input[type=range][color=complete]::-webkit-slider-thumb{background:var(--wje-slider-thumb-color, var(--wje-color-complete));box-shadow:var(--wje-slider-thumb-shadow)}input[type=range][color=complete]::-moz-range-thumb{background:var(--wje-slider-thumb-color, var(--wje-color-complete));box-shadow:var(--wje-slider-thumb-shadow)}input[type=range][color=complete]::-ms-thumb{background:var(--wje-slider-thumb-color, var(--wje-color-complete));box-shadow:var(--wje-slider-thumb-shadow)}input[type=range][color=complete]::-webkit-slider-thumb:active{background:var(--wje-slider-thumb-color, var(--wje-color-complete));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=complete]::-moz-range-thumb:active{background:var(--wje-slider-thumb-color, var(--wje-color-complete));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=complete]::-ms-thumb:active{background:var(--wje-slider-thumb-color, var(--wje-color-complete));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=complete]::-webkit-slider-thumb:hover{background:var(--wje-slider-thumb-color, var(--wje-color-complete));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=complete]::-moz-range-thumb:hover{background:var(--wje-slider-thumb-color, var(--wje-color-complete));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=complete]::-ms-thumb:hover{background:var(--wje-slider-thumb-color, var(--wje-color-complete));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=danger]{--wje-slider-color: var(--wje-color-danger);--wje-slider-thumb-color: var(--wje-color-danger);--wje-slider-thumb-shadow: none;--wje-slider-thumb-shadow-active: color-mix(in hsl, var(--wje-color-contrast-2) 60%, white) 0 0 0 7px;--wje-slider-track-color: var(--wje-color-contrast-2);background-color:var(--wje-slider-track-color, var(--wje-color-contrast-2));background-image:linear-gradient(var(--wje-slider-color, var(--wje-color-danger)),var(--wje-slider-color, var(--wje-color-danger)))}input[type=range][color=danger]::-webkit-slider-thumb{background:var(--wje-slider-thumb-color, var(--wje-color-danger));box-shadow:var(--wje-slider-thumb-shadow)}input[type=range][color=danger]::-moz-range-thumb{background:var(--wje-slider-thumb-color, var(--wje-color-danger));box-shadow:var(--wje-slider-thumb-shadow)}input[type=range][color=danger]::-ms-thumb{background:var(--wje-slider-thumb-color, var(--wje-color-danger));box-shadow:var(--wje-slider-thumb-shadow)}input[type=range][color=danger]::-webkit-slider-thumb:active{background:var(--wje-slider-thumb-color, var(--wje-color-danger));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=danger]::-moz-range-thumb:active{background:var(--wje-slider-thumb-color, var(--wje-color-danger));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=danger]::-ms-thumb:active{background:var(--wje-slider-thumb-color, var(--wje-color-danger));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=danger]::-webkit-slider-thumb:hover{background:var(--wje-slider-thumb-color, var(--wje-color-danger));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=danger]::-moz-range-thumb:hover{background:var(--wje-slider-thumb-color, var(--wje-color-danger));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=danger]::-ms-thumb:hover{background:var(--wje-slider-thumb-color, var(--wje-color-danger));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=warning]{--wje-slider-color: var(--wje-color-warning);--wje-slider-thumb-color: var(--wje-color-warning);--wje-slider-thumb-shadow: none;--wje-slider-thumb-shadow-active: color-mix(in hsl, var(--wje-color-contrast-2) 60%, white) 0 0 0 7px;--wje-slider-track-color: var(--wje-color-contrast-2);background-color:var(--wje-slider-track-color, var(--wje-color-contrast-2));background-image:linear-gradient(var(--wje-slider-color, var(--wje-color-warning)),var(--wje-slider-color, var(--wje-color-warning)))}input[type=range][color=warning]::-webkit-slider-thumb{background:var(--wje-slider-thumb-color, var(--wje-color-warning));box-shadow:var(--wje-slider-thumb-shadow)}input[type=range][color=warning]::-moz-range-thumb{background:var(--wje-slider-thumb-color, var(--wje-color-warning));box-shadow:var(--wje-slider-thumb-shadow)}input[type=range][color=warning]::-ms-thumb{background:var(--wje-slider-thumb-color, var(--wje-color-warning));box-shadow:var(--wje-slider-thumb-shadow)}input[type=range][color=warning]::-webkit-slider-thumb:active{background:var(--wje-slider-thumb-color, var(--wje-color-warning));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=warning]::-moz-range-thumb:active{background:var(--wje-slider-thumb-color, var(--wje-color-warning));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=warning]::-ms-thumb:active{background:var(--wje-slider-thumb-color, var(--wje-color-warning));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=warning]::-webkit-slider-thumb:hover{background:var(--wje-slider-thumb-color, var(--wje-color-warning));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=warning]::-moz-range-thumb:hover{background:var(--wje-slider-thumb-color, var(--wje-color-warning));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=warning]::-ms-thumb:hover{background:var(--wje-slider-thumb-color, var(--wje-color-warning));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=dark]{--wje-slider-color: var(--wje-color-contrast-10);--wje-slider-thumb-color: var(--wje-color-contrast-10);--wje-slider-thumb-shadow: none;--wje-slider-thumb-shadow-active: color-mix(in hsl, var(--wje-color-contrast-6) 60%, white) 0 0 0 7px;--wje-slider-track-color: var(--wje-color-contrast-6);background-color:var(--wje-slider-track-color, var(--wje-color-contrast-6));background-image:linear-gradient(var(--wje-slider-color, var(--wje-color-contrast-10)),var(--wje-slider-color, var(--wje-color-contrast-10)))}input[type=range][color=dark]::-webkit-slider-thumb{background:var(--wje-slider-thumb-color, var(--wje-color-contrast-10));box-shadow:var(--wje-slider-thumb-shadow)}input[type=range][color=dark]::-moz-range-thumb{background:var(--wje-slider-thumb-color, var(--wje-color-contrast-10));box-shadow:var(--wje-slider-thumb-shadow)}input[type=range][color=dark]::-ms-thumb{background:var(--wje-slider-thumb-color, var(--wje-color-contrast-10));box-shadow:var(--wje-slider-thumb-shadow)}input[type=range][color=dark]::-webkit-slider-thumb:active{background:var(--wje-slider-thumb-color, var(--wje-color-contrast-10));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=dark]::-moz-range-thumb:active{background:var(--wje-slider-thumb-color, var(--wje-color-contrast-10));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=dark]::-ms-thumb:active{background:var(--wje-slider-thumb-color, var(--wje-color-contrast-10));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=dark]::-webkit-slider-thumb:hover{background:var(--wje-slider-thumb-color, var(--wje-color-contrast-10));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=dark]::-moz-range-thumb:hover{background:var(--wje-slider-thumb-color, var(--wje-color-contrast-10));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range][color=dark]::-ms-thumb:hover{background:var(--wje-slider-thumb-color, var(--wje-color-contrast-10));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range]::-webkit-slider-thumb{background:var(--wje-slider-thumb-color, var(--wje-color-primary));box-shadow:var(--wje-slider-thumb-shadow)}input[type=range]::-moz-range-thumb{background:var(--wje-slider-thumb-color, var(--wje-color-primary));box-shadow:var(--wje-slider-thumb-shadow)}input[type=range]::-ms-thumb{background:var(--wje-slider-thumb-color, var(--wje-color-primary));box-shadow:var(--wje-slider-thumb-shadow)}input[type=range]::-webkit-slider-thumb:active{background:var(--wje-slider-thumb-color, var(--wje-color-primary));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range]::-moz-range-thumb:active{background:var(--wje-slider-thumb-color, var(--wje-color-primary));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range]::-ms-thumb:active{background:var(--wje-slider-thumb-color, var(--wje-color-primary));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range]::-webkit-slider-thumb:hover{background:var(--wje-slider-thumb-color, var(--wje-color-primary));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range]::-moz-range-thumb:hover{background:var(--wje-slider-thumb-color, var(--wje-color-primary));box-shadow:var(--wje-slider-thumb-shadow-active)}input[type=range]::-ms-thumb:hover{background:var(--wje-slider-thumb-color, var(--wje-color-primary));box-shadow:var(--wje-slider-thumb-shadow-active)}datalist{display:flex;justify-content:space-between;height:auto;overflow:hidden;margin-top:16px}datalist option:before{content:"";display:block;width:0;height:auto;padding-left:3px;text-indent:0}output{position:absolute;background:var(--wje-color-contrast-11);color:var(--wje-color-contrast-0);top:-46px;padding:4px 8px;border-radius:4px}::slotted([slot=label]){margin-inline:0 1rem;font-size:var(--wje-font-size)}::slotted([slot=start]){margin-inline:0 1rem}::slotted([slot=end]){margin-inline:1rem 0}';
class b extends j {
  /**
   * Creates an instance of Slider.
   *
   * @constructor
   */
  constructor() {
    super();
    l(this, 'className', 'Slider');
    /**
     * Sets the handle position of the slider.
     */
    l(this, 'setHandlePosition', () => {
      this.input.style.backgroundSize = this.getPercentage(this.input.value, this.input.min, this.input.max) + '% 100%';
    });
    /**
     * Sets the bubble of the slider.
     */
    l(this, 'setBubble', () => {
      let r = this.getPercentage(this.input.value, this.input.min, this.input.max);
      (this.output.style.left = `calc(${r}% + (${8 - r * 0.15}px) - ${this.output.offsetWidth / 2}px)`),
        (this.output.innerHTML = this.input.value);
    });
  }
  /**
   * Sets the value of the slider.
   *
   * @param {number} value - The value to set.
   */
  set value(r) {
    this.setAttribute('value', r), this.input && ((this.input.value = r), this.setHandlePosition());
  }
  /**
   * Returns the value of the slider.
   *
   * @returns {number} The value of the slider.
   */
  get value() {
    return this.getAttribute('value') || 0;
  }
  /**
   * Sets the minimum value of the slider.
   *
   * @param {number} value - The minimum value to set.
   */
  set min(r) {
    this.setAttribute('min', r);
  }
  /**
   * Returns the minimum value of the slider.
   *
   * @returns {number} The minimum value of the slider.
   */
  get min() {
    return this.getAttribute('min') || 0;
  }
  /**
   * Sets the maximum value of the slider.
   *
   * @param {number} value - The maximum value to set.
   */
  set max(r) {
    this.setAttribute('max', r);
  }
  /**
   * Returns the maximum value of the slider.
   *
   * @returns {number} The maximum value of the slider.
   */
  get max() {
    return this.getAttribute('max') || 100;
  }
  /**
   * Sets the step value of the slider.
   *
   * @param {number} value - The step value to set.
   */
  set step(r) {
    this.setAttribute('step', r);
  }
  /**
   * Returns the step value of the slider.
   *
   * @returns {number} The step value of the slider.
   */
  get step() {
    return this.getAttribute('step') || 1;
  }
  /**
   * Returns the CSS styles for the component.
   *
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return g;
  }
  /**
   * Returns the list of attributes to observe for changes.
   *
   * @static
   * @returns {Array<string>}
   */
  static get observedAttributes() {
    return ['max', 'value'];
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
  draw(r, c, n) {
    let d = document.createDocumentFragment(),
      t = document.createElement('div');
    (t.className = 'native-slider'), t.setAttribute('part', 'native');
    let s = document.createElement('div');
    s.className = 'slider';
    let u = document.createElement('slot');
    u.name = 'label';
    let w = document.createElement('slot');
    w.name = 'start';
    let h = document.createElement('slot');
    h.name = 'end';
    let i = document.createElement('output');
    i.setAttribute('for', 'slider'), (i.id = 'output'), i.setAttribute('hidden', '');
    let e = document.createElement('input');
    return (
      (e.type = 'range'),
      (e.min = this.min),
      (e.max = this.max),
      (e.step = this.step),
      (e.value = this.value),
      (e.id = 'slider'),
      (e.name = 'slider'),
      (e.part = 'slider'),
      e.setAttribute('autocomplete', 'off'),
      e.setAttribute('color', this.color || ''),
      e.addEventListener('input', (m) => {
        this.setHandlePosition(m.target);
      }),
      s.appendChild(e),
      this.hasAttribute('bubble') && s.appendChild(i),
      t.appendChild(u),
      t.appendChild(w),
      t.appendChild(s),
      t.appendChild(h),
      d.appendChild(t),
      (this.input = e),
      (this.output = i),
      d
    );
  }
  /**
   * Sets up the event listeners after the component is drawn.
   */
  afterDraw() {
    this.setHandlePosition(),
      this.hasAttribute('bubble') &&
        ((this.output.innerHTML = this.input.value),
        this.output.removeAttribute('hidden'),
        setTimeout(this.setBubble, 50)),
      this.dispatchInit(this.input.value),
      this.input.addEventListener('input', (r) => {
        (this.value = r.target.value), this.dispatchMove(this.value), this.hasAttribute('bubble') && this.setBubble();
      }),
      this.input.addEventListener('change', (r) => {
        this.dispatchChange(r.target.value);
      });
  }
  /**
   * Dispatches the slider initialization event.
   *
   * @param {number} value - The value of the slider.
   */
  dispatchInit(r) {
    this.dispatchEvent(
      new CustomEvent('wje:slider-init', {
        bubbles: !0,
        detail: {
          value: r,
          output: this.output,
        },
      })
    );
  }
  /**
   * Dispatches the slider move event.
   *
   * @param {number} value - The value of the slider.
   */
  dispatchMove(r) {
    this.dispatchEvent(
      new CustomEvent('wje:slider-move', {
        bubbles: !0,
        detail: {
          value: r,
          output: this.output,
        },
      })
    );
  }
  /**
   * Dispatches the slider change event.
   *
   * @param {number} value - The value of the slider.
   */
  dispatchChange(r) {
    this.dispatchEvent(
      new CustomEvent('wje:slider-change', {
        bubbles: !0,
        detail: {
          value: r,
          output: this.output,
        },
      })
    );
  }
  /**
   * Returns the percentage of the slider value.
   *
   * @param {number} value - The value of the slider.
   * @param {number} min - The minimum value of the slider.
   * @param {number} max - The maximum value of the slider.
   * @returns {number} The percentage of the slider value.
   */
  getPercentage(r = 0, c, n) {
    return Number(((r - c) * 100) / (n - c)) || 0;
  }
}
b.define('wje-slider', b);
export { b as default };
