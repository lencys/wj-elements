var n = Object.defineProperty;
var a = (s, e, t) => (e in s ? n(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (s[e] = t));
var l = (s, e, t) => (a(s, typeof e != 'symbol' ? e + '' : e, t), t);
import d from './wje-element.js';
const u = ':host{display:block;width:100%}';
class c extends d {
  /**
   * Constructor for the Accordion class.
   */
  constructor() {
    super();
    /**
     * The class name for the Accordion element.
     * @type {string}
     */
    l(this, 'className', 'Accordion');
  }
  set multiple(t) {
    this.setAttribute('multiple', '');
  }
  get multiple() {
    return this.hasAttribute('multiple');
  }
  /**
   * Getter for the CSS stylesheet.
   * @return {Object} The styles for the Accordion element.
   */
  static get cssStyleSheet() {
    return u;
  }
  /**
   * Getter for the observed attributes.
   * @return {Array} An array containing the name of the observed attribute.
   */
  static get observedAttributes() {
    return [];
  }
  /**
   * Method to setup attributes for the Accordion element.
   */
  setupAttributes() {
    this.isShadowRoot = 'open';
  }
  beforeDraw() {
    console.log('beforeDraw', this.getAccordions()),
      this.getAccordions().forEach((t, o) => {
        console.log(t, o, +this.getAttribute('index')),
          this.hasAttribute('index') &&
            +this.getAttribute('index') === o &&
            (console.log('index', +this.getAttribute('index') + ' !== ' + o), t.classList.add('expanded'));
      });
  }
  /**
   * Method to draw the Accordion element.
   * @param {Object} context - The context in which the element is drawn.
   * @param {Object} store - The store containing the state of the element.
   * @param {Object} params - The parameters for drawing the element.
   * @return {Object} The document fragment containing the drawn element.
   */
  draw(t, o, h) {
    let i = document.createDocumentFragment(),
      r = document.createElement('slot');
    return i.appendChild(r), (this.slotEl = r), i;
  }
  afterDraw() {
    this.addEventListener('wje-accordion-item:close', (t) => {
      console.log('wje-accordion-item:close', t.detail);
    }),
      this.addEventListener('wje-accordion-item:open', (t) => {
        console.log('wje-accordion-item:open', t.detail), this.multiple || this.collapseAll(t.detail.context);
      });
  }
  collapseAll(t) {
    this.getAccordions().forEach((o) => {
      o !== t && o.collapse();
    });
  }
  getAccordions() {
    return Array.from(this.querySelectorAll(':scope > wje-accordion-item'));
  }
}
c.define('wje-accordion', c);
export { c as default };
