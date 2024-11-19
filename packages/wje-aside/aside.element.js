import { default as WJElement } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * @summary This class represents an Aside element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/aside
 * @status stable
 * @augments WJElement
 * @slot - The aside main content.
 * @cssproperty --wje-aside-width;
 * @cssproperty --wje-aside-top;
 * @cssproperty --wje-aside-border-color: var(--wje-border-color);
 * @cssproperty --wje-aside-border-width;
 * @cssproperty --wje-aside-border-style;
 * @tag wje-aside
 */
export default class Aside extends WJElement {
  /**
   * Constructor for the Aside class.
   */
  constructor() {
    super();
  }

  /**
   * The class name for the Aside element ddddd.
   * @type {string}
   */
  className = 'Aside';

  /**
   * Getter for the CSS stylesheet.
   * @returns {object} The styles for the Aside element.
   */
  static get cssStyleSheet() {
    return styles;
  }

  /**
   * Getter for the observed attributes.
   * @returns {Array} An empty array as there are no observed attributes.
   */
  static get observedAttributes() {
    return [];
  }

  /**
   * Method to setup attributes for the Aside element.
   */
  setupAttributes() {
    this.isShadowRoot = 'open';
  }

  /**
   * Method to draw the Aside element.
   * @returns {object} The document fragment containing the drawn element.
   */
  draw() {
    let fragment = document.createDocumentFragment();

    if (this.width) this.style.setProperty('--wje-aside-width', this.width);

    if (this.top && this.hasAttribute('fixed')) this.style.setProperty('--wje-aside-top', this.top);

    let element = document.createElement('slot');

    fragment.appendChild(element);

    return fragment;
  }
}
