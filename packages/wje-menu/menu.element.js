import { default as WJElement } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * `Menu` is a custom web component that represents a menu.
 * It extends from `WJElement`.
 * @summary This element represents a menu.
 * @documentation https://elements.webjet.sk/components/menu
 * @status stable
 * @augments {WJElement}
 * @csspart native - The native part of the menu.
 * @slot - The default slot for the menu.
 * @cssproperty [--wje-menu-background=var(--wje-background)] - Defines the background color of the menu. Accepts any valid CSS color value, such as `#ffffff`, `rgb(255, 255, 255)`, or CSS variables.
 * @cssproperty [--wje-menu-border-width=1px] - Specifies the width of the menu's border. Accepts any valid CSS length value (e.g., `px`, `em`, `%`).
 * @cssproperty [--wje-menu-border-style=solid] - Sets the style of the menu's border. Common values include `solid`, `dashed`, `dotted`, etc.
 * @cssproperty [--wje-menu-border-color=var(--wje-border-color)] - Defines the color of the menu's border. Accepts any valid CSS color value.
 * @cssproperty [--wje-menu-border-radius=var(--wje-border-radius-small)] - Determines the radius of the menu's corners, creating rounded edges. Accepts any valid CSS length value (e.g., `px`, `%`).
 * @cssproperty [--wje-menu-padding-top=.5rem] - Specifies the top padding inside the menu. Accepts any valid CSS length value.
 * @cssproperty [--wje-menu-padding-bottom=.5rem] - Specifies the bottom padding inside the menu. Accepts any valid CSS length value.
 * @cssproperty [--wje-menu-padding-inline=0] - Sets the horizontal (left and right) padding inside the menu. Accepts any valid CSS length value.
 * @cssproperty [--wje-menu-margin-top=0] - Defines the top margin outside the menu. Accepts any valid CSS length value.
 * @cssproperty [--wje-menu-margin-bottom=0] - Defines the bottom margin outside the menu. Accepts any valid CSS length value.
 * @cssproperty [--wje-menu-margin-inline=0] - Specifies the horizontal (left and right) margin outside the menu. Accepts any valid CSS length value.
 * @cssproperty [--wje-menu-collapse-width=65px] - Sets the width of the menu when it is collapsed. This property is typically used to define the reduced size of the menu in collapsed state. Accepts any valid CSS length value.
 * @tag wje-menu
 */
export default class Menu extends WJElement {
  /**
   * Creates an instance of Menu.
   * @class
   */
  constructor() {
    super();
  }

  className = 'Menu';

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
    return ['active', 'collapse'];
  }

  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = 'open';
  }

  /**
   * Draws the component for the menu.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();

    this.classList.remove('wje-menu-collapse');

    if (this.hasAttribute('collapse')) this.classList.add('wje-menu-collapse');

    let native = document.createElement('div');
    native.setAttribute('part', 'native');
    native.classList.add('native-menu');

    let slot = document.createElement('slot');

    native.appendChild(slot);
    fragment.appendChild(native);

    return fragment;
  }

  /**
   * Refreshes the component after drawing.
   */
  afterDraw() {
    Array.from(this.children).forEach((child) => {
      if (child.tagName.includes('-')) child.refresh();
    });
  }

  /**
   * Cleans up the component before disconnecting.
   */
  beforeDisconnect() {
    this.context.innerHTML = '';
  }
}
