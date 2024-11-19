var h = Object.defineProperty;
var g = (r, t, e) => (t in r ? h(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (r[t] = e));
var c = (r, t, e) => (g(r, typeof t != 'symbol' ? t + '' : t, e), e);
import b, { event as d } from './wje-element.js';
const w =
  ':host{--wje-toggle-color-base: var(--wje-color-contrast-3);--wje-toggle-width: 30px;--wje-toggle-height: 18px;--wje-toggle-border-radius: 50px;--wje-toggle-handle-width: 13px;--wje-toggle-handle-height: 13px;--wje-toggle-handle-border-radius: 9px;--wje-toggle-handle-color: #fff;--wje-toggle-handle-shadow: 1px 0 1px .5px rgba(0,0,0,.12), 2px 4px 6px rgba(0,0,0,.2);--wje-toggle-handle-shadow-checked: 1px 1px 0 rgba(0,0,0,.08), -3px 3px 6px rgba(0,0,0,.3);--wje-toggle-duration: .25s;--wje-toggle-curve: cubic-bezier(.4,0,.2,1)}:host(.wje-color-primary) input:checked+label>.label-wrapper{--wje-toggle-color-base: var(--wje-color-primary) !important}:host(.wje-color-complete) input:checked+label>.label-wrapper{--wje-toggle-color-base: var(--wje-color-complete)}:host(.wje-color-success) input:checked+label>.label-wrapper{--wje-toggle-color-base: var(--wje-color-success) !important}:host(.wje-color-warning) input:checked+label>.label-wrapper{--wje-toggle-color-base: var(--wje-color-warning)}:host(.wje-color-danger) input:checked+label>.label-wrapper{--wje-toggle-color-base: var(--wje-color-danger)}:host(.wje-color-info) input:checked+label>.label-wrapper{--wje-toggle-color-base: var(--wje-color-info)}.native-toggle{display:flex}label{display:flex;cursor:pointer;align-items:center;-webkit-user-select:none;user-select:none}label .label-wrapper{width:var(--wje-toggle-width)!important;min-width:var(--wje-toggle-width);height:var(--wje-toggle-height);position:relative;display:flex;align-items:center}label .label-wrapper:before{content:"";position:absolute;cursor:pointer;width:100%;height:100%;top:auto;left:0;background:var(--wje-toggle-color-base);background-size:300%;background-position:right;border-radius:var(--wje-toggle-border-radius);border:none;box-shadow:inset 0 0 0 1px #0000001f;transition:background calc(var(--wje-toggle-duration) + (var(--wje-toggle-duration) * .24)),box-shadow var(--wje-toggle-duration);transition-timing-function:var(--wje-toggle-curve)}label .label-wrapper:after{content:"";position:absolute;transform:translate(0);background:var(--wje-toggle-handle-color);width:var(--wje-toggle-handle-width);height:var(--wje-toggle-handle-height);border-radius:var(--wje-toggle-handle-border-radius);top:auto;left:2px;box-shadow:var(--wje-toggle-handle-shadow);transition:transform,box-shadow;transition-duration:var(--wje-toggle-duration);transition-timing-function:var(--wje-toggle-curve)}input[type=checkbox][disabled]+label{cursor:not-allowed!important;color:var(--wje-color-contrast-9);opacity:.58}input[type=checkbox][disabled]+label:before{cursor:not-allowed!important}input[type=checkbox]{position:absolute;z-index:-1;opacity:0}input[type=checkbox]:checked+label .label-wrapper:before{background-position:left;box-shadow:inset 0 0 0 1px #0000001f}input[type=checkbox]:checked+label .label-wrapper:after{transform:translate(calc(var(--wje-toggle-width) - var(--wje-toggle-handle-width) - 4px));box-shadow:var(--wje-toggle-handle-shadow-checked)}input[type=checkbox]:focus+label .label-wrapper:before{outline:none!important;box-shadow:inset 0 0 0 1px #0000001f,0 0 #78c8fe}input[type=checkbox][disabled]:active+label .label-wrapper:after{transform:scaleX(1.1);transform-origin:center left;transition:transform step-start}input[type=checkbox]:checked[disabled]:active+label .label-wrapper:after{transform:translate(calc(100% - 6px)) scaleX(1.1);transform-origin:center right}input[type=checkbox]:hover:active+label .label-wrapper:before{background-color:transparent}:host .text{margin-inline:.5rem 0}:host .end label{width:100%}:host .end .text{margin-inline:0 .5rem;width:100%}slot{display:flex;align-items:center;width:100%}';
class p extends b {
  /**
   * @constructor
   * @summary Toggle constructor
   */
  constructor() {
    super();
    /**
     * @summary Class name
     * @type {string}
     */
    c(this, 'className', 'Toggle');
  }
  /**
   * @summary Set checked attribute
   * @returns {boolean} true if the toggle is checked, false otherwise
   */
  set disabled(e) {
    e ? this.setAttribute('disabled', '') : this.removeAttribute('disabled');
  }
  /**
   * @summary Get disabled attribute
   * @returns {boolean} true if the toggle is disabled, false otherwise
   */
  get disabled() {
    return this.hasAttribute('disabled');
  }
  /**
   * @summary Set checked attribute
   * @returns {boolean} true if the toggle is checked, false otherwise
   */
  set checked(e) {
    e ? this.setAttribute('checked', '') : this.removeAttribute('checked');
  }
  /**
   * @summary Get checked attribute
   * @returns {boolean} true if the toggle is checked, false otherwise
   */
  get checked() {
    return this.hasAttribute('checked');
  }
  /**
   * @summary Get CSS stylesheet
   * @static
   * @returns {Object} styles
   */
  static get cssStyleSheet() {
    return w;
  }
  static get observedAttributes() {
    return ['checked', 'disabled'];
  }
  /**
   * @summary Setup attributes
   */
  setupAttributes() {
    this.isShadowRoot = 'open';
  }
  /**
   * @summary Draw method
   * @param {Object} context - The context
   * @param {Object} store - The store
   * @param {Object} params - The parameters
   * @returns {Object} Document fragment
   */
  draw(e, u, j) {
    let s = document.createDocumentFragment(),
      o = document.createElement('div');
    o.setAttribute('part', 'native'), o.classList.add('native-toggle');
    let a = document.createElement('input');
    a.setAttribute('part', 'input'),
      a.setAttribute('type', 'checkbox'),
      a.setAttribute('name', this.name),
      a.setAttribute('id', 'input'),
      (a.checked = this.hasAttribute('checked')),
      (a.disabled = this.hasAttribute('disabled'));
    let l = document.createElement('label');
    l.setAttribute('for', 'input');
    let i = document.createElement('div');
    i.setAttribute('part', 'toggle'), i.classList.add('label-wrapper');
    let n = document.createElement('div');
    return (
      n.classList.add('text'),
      (n.innerHTML = '<slot></slot>'),
      this.color && this.classList.add('wje-color-' + this.color, 'wje-color'),
      o.appendChild(a),
      o.appendChild(l),
      this.placement === 'end'
        ? (o.classList.add('end'), l.appendChild(n), l.appendChild(i))
        : (l.appendChild(i), l.appendChild(n)),
      s.appendChild(o),
      (this.input = a),
      s
    );
  }
  afterDraw() {
    this.disabled ||
      (this.input.addEventListener('input', (e) => {
        (this.checked = e.target.checked), d.dispatchCustomEvent(this, 'wje-toggle:input');
      }),
      this.input.addEventListener('change', (e) => {
        (this.checked = e.target.checked), d.dispatchCustomEvent(this, 'wje-toggle:change');
      }));
  }
}
p.define('wje-toggle', p);
export { p as default };
