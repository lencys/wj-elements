import { default as WJElement } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * @summary This element represents a footer. `Footer` is a custom web component that represents a footer.
 * @documentation https://elements.webjet.sk/components/footer
 * @status stable
 * @augments WJElement
 * @slot default - Default slot for the footer content
 * @cssproperty --primary-color - The primary color of the footer
 */

export default class Footer extends WJElement {
  /**
   * Creates an instance of Footer.
   * @class
   */
  constructor() {
    super();
  }

  className = 'Footer';

  /**
   * Returns the CSS styles for the component.
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return styles;
  }

  /**
   * Returns the list of attributes to observe for changes.
   * @static
   * @returns {Array<string>}
   */
  static get observedAttributes() {
    return [];
  }

  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = 'open';
  }

  /**
   * Draws the component.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();

    let element = document.createElement('slot');

    fragment.appendChild(element);

    return fragment;
  }
}
