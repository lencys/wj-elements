import { default as WJElement } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * @summary Breadcrumbs class.
 * @documentation https://elements.webjet.sk/components/breadcrumbs
 * @status stable
 * @augments WJElement
 * @slot - The breadcrumb main content.
 */
export default class Breadcrumbs extends WJElement {
  /**
   * Breadcrumbs constructor method.
   * @class
   */
  constructor() {
    super();

    /**
     * Last breadcrumb flag
     * @type {boolean}
     */
    this.last = false;
  }

  /**
   * Class name for the Breadcrumbs element.
   * @type {string}
   */
  className = 'Breadcrumbs';

  /**
   * Get CSS stylesheet for the Breadcrumbs element.
   * @static
   * @returns {object} styles - The CSS styles
   */
  static get cssStyleSheet() {
    return styles;
  }

  /**
   * Setup attributes for the Breadcrumbs element.
   */
  setupAttributes() {
    this.isShadowRoot = 'open';
  }

  /**
   * Draw method for the Breadcrumbs element.
   * @returns {object} fragment - The document fragment
   */
  draw() {
    let fragment = document.createDocumentFragment();

    let element = document.createElement('slot');

    fragment.appendChild(element);

    return fragment;
  }

  /**
   * After draw method for the Breadcrumbs element.
   */
  afterDraw() {
    let maxItems = +this.maxItems || 0;
    let itemsBeforeCollapse = +this.itemsBeforeCollapse || 1;
    let itemsAfterCollapse = +this.itemsAfterCollapse || 1;

    let breadcrumbs = this.getBreadcrumbs();

    if (breadcrumbs.length === 0) return;

    let breadcrumb = breadcrumbs.findLast((e) => e);

    breadcrumb.setAttribute('last', true);

    const shouldCollapse =
      maxItems !== undefined && breadcrumbs.length > maxItems && itemsBeforeCollapse + itemsAfterCollapse <= maxItems;

    if (shouldCollapse) {
      breadcrumbs.forEach((b, index) => {
        if (index === itemsBeforeCollapse) {
          b.setAttribute('show-collapsed-indicator', true);
        }

        if (index >= itemsBeforeCollapse && index < breadcrumbs.length - itemsAfterCollapse) {
          b.setAttribute('collapsed', true);
        }
      });
    }
  }

  /**
   * Get breadcrumbs method.
   * @returns {Array} - The breadcrumbs array
   */
  getBreadcrumbs() {
    return Array.from(this.querySelectorAll('wje-breadcrumb')) || [];
  }
}
