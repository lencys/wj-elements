import { default as WJElement, WjElementUtils } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * `MenuLabel` is a custom web component that represents a menu label.
 * @summary This element represents a menu label.
 * @documentation https://elements.webjet.sk/components/menu-label
 * @status stable
 * @augments {WJElement}
 * @csspart native - The native part of the menu label.
 * @slot - The default slot for the menu label.
 * @cssproperty [--wje-menu-label-font-size=.75rem] - Sets the font size of the menu label. Accepts any valid CSS length unit (e.g., `rem`, `px`, `em`).
 * @cssproperty [--wje-menu-label-weight=600] - Specifies the font weight of the menu label. Accepts values such as `normal`, `bold`, or numeric values (e.g., `400`, `600`).
 * @cssproperty [--wje-letter-spacing=.025rem] - Defines the spacing between letters in the menu label. Accepts any valid CSS length unit. Default value ensures slight spacing for improved readability.
 * @cssproperty [--wje-menu-label-color=var(--wje-color-contrast-6)] - Specifies the text color of the menu label. Accepts any valid CSS color value, including variables and named colors.
 * @cssproperty [--wje-padding-top=0] - Sets the top padding of the menu label. Accepts any valid CSS length value to control spacing above the label.
 * @cssproperty [--wje-padding-bottom=0] - Sets the bottom padding of the menu label. Accepts any valid CSS length value to control spacing below the label.
 * @cssproperty [--wje-padding-start=1.5rem] - Specifies the left padding of the menu label in left-to-right (LTR) layouts. In right-to-left (RTL) layouts, this becomes the right padding. Accepts any valid CSS length value.
 * @cssproperty [--wje-padding-end=1.5rem] - Specifies the right padding of the menu label in left-to-right (LTR) layouts. In right-to-left (RTL) layouts, this becomes the left padding. Accepts any valid CSS length value.
 * @tag wje-menu-label
 */

export default class MenuLabel extends WJElement {
  /**
   * Creates an instance of MenuLabel.
   * @class
   */
  constructor() {
    super();

    this.hasSubmenu = WjElementUtils.hasSlot(this, 'submenu');
  }

  className = 'MenuLabel';

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
   * Draws the component for the menu label.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();

    // SLOT
    let slot = document.createElement('slot');
    slot.setAttribute('part', 'native');
    slot.classList.add('native-menu-label');

    fragment.appendChild(slot);

    return fragment;
  }
}
