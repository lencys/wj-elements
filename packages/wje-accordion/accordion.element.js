import { default as WJElement } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * @summary This class represents an Accordion element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/accordion
 * @status stable
 * @augments WJElement
 * @attribute {boolean} multiple - The multiple attribute for the accordion.
 * @attribute {number} index - The index attribute for the accordion.
 * @attribute {boolean} disabled - The disabled attribute for the accordion.
 * @attribute {boolean} expanded - The expanded attribute for the accordion.
 * @slot - The accordion main content.
 * //@fires [wje-accordion-item:open] The event fired when the accordion item is opened.
 * @tag wje-accordion
 */
export default class Accordion extends WJElement {
  /**
   * Constructor for the Accordion class.
   */
  constructor() {
    super();
  }

  /**
   * Sets the `multiple` attribute on the element.
   * If `true`, the `multiple` attribute is added.
   * If `false`, the `multiple` attribute is removed.
   * @param {boolean} value A boolean value indicating whether the element should support multiple selections.
   */
  set multiple(value) {
    if (value) {
      this.setAttribute('multiple', '');
    } else {
      this.removeAttribute('multiple');
    }
  }

  /**
   * Determines whether the element has the `multiple` attribute.
   * @returns {boolean} `true` if the `multiple` attribute is present, otherwise `false`.
   */
  get multiple() {
    return this.hasAttribute('multiple');
  }

  /**
   * Sets the value of the `index` attribute.
   * @param {number|string} value The value to set for the `index` attribute.
   */
  set index(value) {
    this.setAttribute('index', value);
  }

  /**
   * Retrieves the value of the `index` attribute as a number.
   * @returns {number} The numerical value of the `index` attribute, or `0` if the attribute is not set.
   */
  get index() {
    return +this.getAttribute('index') || 0;
  }

  /**
   * The class name for the Accordion element.
   * @type {string}
   */
  className = 'Accordion';

  /**
   * Getter for the CSS stylesheet.
   * @returns {object} The styles for the Accordion element.
   */
  static get cssStyleSheet() {
    return styles;
  }

  /**
   * Getter for the observed attributes.
   * @returns {Array} An array containing the name of the observed attribute.
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

  /**
   * Method to run before the element is drawn.
   */
  beforeDraw() {
    this.getAccordions().forEach((accordion, index) => {
      if (this.index && +this.index === index) {
        accordion.classList.add('expanded');
      }
    });
  }

  /**
   * Method to draw the Accordion element.
   * @returns {object} The document fragment containing the drawn element.
   */
  draw() {
    let fragment = document.createDocumentFragment();

    let slot = document.createElement('slot');

    fragment.appendChild(slot);

    this.slotEl = slot;

    return fragment;
  }

  /**
   * Method to run after the element is drawn.
   */
  afterDraw() {
    this.addEventListener('wje-accordion-item:open', (e) => {
      if (!this.multiple) this.collapseAll(e.detail.context);
    });
  }

  /**
   * Method to run after the element is drawn.
   * @param exception
   */
  collapseAll(exception) {
    this.getAccordions().forEach((accordion) => {
      if (accordion !== exception) accordion.collapse();
    });
  }

  /**
   * Method to get the accordions.
   * @returns {Array} An array containing the accordions.
   */
  getAccordions() {
    return Array.from(this.querySelectorAll(':scope > wje-accordion-item'));
  }
}
