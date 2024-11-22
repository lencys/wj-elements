import { default as WJElement } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * @summary This class represents a Badge element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/badge
 * @status stable
 * @augments WJElement
 * @attribute {string} color - The color of the badge element. Accepts any valid string primary, secondary, success, danger, warning, info, default.
 * @slot - The badge's main content.
 * @csspart native - The component's native wrapper.
 * @cssproperty [--wje-badge-border-radius=var(--wje-border-radius-pill)] - Border radius of the badge element.
 * @tag wje-badge
 */

export default class Badge extends WJElement {
  /**
   * Creates an instance of Badge.
   * Represents a custom Badge element.
   * @class
   */
  constructor() {
    super();
  }

  /**
   * The class name for the Badge element.
   * @type {string} The class name for the Badge element.
   */
  className = 'Badge';

  /**
   * Retrieves the CSS stylesheet for the Badge element.
   * @static
   * @returns {CSSStyleSheet} The CSS styles associated with the Badge.
   */
  static get cssStyleSheet() {
    return styles;
  }

  /**
   * Specifies the attributes to observe for changes.
   * @static
   * @returns {Array<string>} An array containing the names of attributes to observe.
   * @example
   * static get observedAttributes() {
   *   return ['color'];
   * }
   */
  static get observedAttributes() {
    return ['color'];
  }

  /**
   * Configures initial attributes for the Badge element.
   * @returns {void} Nothing is returned.
   */
  setupAttributes() {
    this.isShadowRoot = 'open';
  }

  /**
   * Creates the DOM structure for the Badge element.
   * @returns {DocumentFragment} A document fragment containing the Badge's structure.
   */
  draw() {
    let fragment = document.createDocumentFragment();

    let native = document.createElement('div');
    native.setAttribute('part', 'native');
    native.classList.add('native-badge');

    // Add color classes based on the `color` attribute
    if (this.hasAttribute('color')) {
      native.classList.add(`wje-color-${this.color}`, 'wje-color');
    } else {
      native.classList.add('wje-color-default', 'wje-color');
    }

    let slot = document.createElement('slot');

    native.appendChild(slot);

    fragment.appendChild(native);

    return fragment;
  }
}
