import { default as WJElement } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * @summary This class represents Badge element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/avatar
 * @status stable
 * @augments WJElement
 * @slot - The badge main content.
 */
export default class Badge extends WJElement {
  /**
   * Badge constructor method.
   * @class
   */
  constructor() {
    super();
  }

  /**
   * Class name for the Badge element
   * @type {string}
   */
  className = 'Badge';

  /**
   * Get CSS stylesheet.
   * @static
   * @returns {object} styles - The CSS styles
   */
  static get cssStyleSheet() {
    return styles;
  }

  /**
   * Getter for the observed attributes.
   * @returns {Array} An array containing the name of the observed attribute.
   */
  static get observedAttributes() {
    return ['color'];
  }

  /**
   * Setup attributes for the Badge element.
   */
  setupAttributes() {
    this.isShadowRoot = 'open';
  }

  /**
   * Draw method for the Badge element.
   * @returns {object} fragment - The document fragment
   */
  draw() {
    let fragment = document.createDocumentFragment();

    let native = document.createElement('div');
    native.setAttribute('part', 'native');
    native.classList.add('native-badge');

    // Add color
    if (this.hasAttribute('color')) native.classList.add('wje-color-' + this.color, 'wje-color');
    else native.classList.add('wje-color-default', 'wje-color');

    let slot = document.createElement('slot');

    native.appendChild(slot);

    fragment.appendChild(native);

    return fragment;
  }
}
