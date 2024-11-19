import { default as WJElement } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * @summary This class represents an Card Content element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/card-content
 * @status stable
 * @augments WJElement
 * @slot - The card content main content.
 * @cssproperty [--wje-card-padding=0] - Padding of the component;
 */
export default class CardContent extends WJElement {
  /**
   * CardContent constructor method.
   * @class
   */
  constructor() {
    super();
  }

  /**
   * Class name for the CardContent element.
   * @type {string}
   */
  className = 'CardContent';

  /**
   * Get CSS stylesheet for the CardContent element.
   * @static
   * @returns {object} styles - The CSS styles for the CardContent element.
   */
  static get cssStyleSheet() {
    return styles;
  }

  /**
   * Setup attributes for the CardContent element.
   */
  setupAttributes() {
    this.isShadowRoot = 'open';
  }

  /**
   * Draw method for the CardContent element.
   * @returns {object} fragment - The document fragment containing the drawn element.
   */
  draw() {
    let fragment = document.createDocumentFragment();

    let element = document.createElement('slot');
    fragment.appendChild(element);

    return fragment;
  }
}
