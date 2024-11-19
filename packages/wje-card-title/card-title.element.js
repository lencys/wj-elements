import { default as WJElement } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * @summary CardTitle class that extends WJElement.
 * @documentation https://elements.webjet.sk/components/card-title
 * @status stable
 * @augments WJElement
 * @slot - The card title main content.
 * @cssproperty [--wje-card-title-font-size=24px] - Font size of the component;
 * @cssproperty [--wje-card-title-font-weight=500] - Font weight of the component;
 * @cssproperty [--wje-card-title-margin=0] - Margin of the component;
 * @cssproperty [--wje-card-title-padding=0] - Padding of the component;
 * @cssproperty [--wje-card-title-line-height=1.2] - Line height of the component;
 */
export default class CardTitle extends WJElement {
  /**
   * CardTitle constructor method.
   */
  constructor() {
    super();
  }

  /**
   * Class name for the CardTitle.
   * @type {string}
   */
  className = 'CardTitle';

  /**
   * Getter for the CSS stylesheet.
   * @returns {object} The styles object.
   * @static
   */
  static get cssStyleSheet() {
    return styles;
  }

  /**
   * Getter for the observed attributes.
   * @returns {Array} An empty array.
   * @static
   */
  static get observedAttributes() {
    return [];
  }

  /**
   * Sets up the attributes for the CardTitle.
   */
  setupAttributes() {
    this.isShadowRoot = 'open';
  }

  /**
   * Draws the CardTitle element.
   * @returns {DocumentFragment} The created document fragment.
   */
  draw() {
    let fragment = document.createDocumentFragment();

    let element = document.createElement('slot');

    fragment.appendChild(element);

    return fragment;
  }
}
