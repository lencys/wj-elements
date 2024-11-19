import { default as WJElement, event } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * `Tab` is a custom web component that represents a tab.
 * @summary This element represents a tab.
 * @documentation https://elements.webjet.sk/components/tab
 * @status stable
 * @augments {WJElement}
 * @cssproperty [--wje-tab-text-transform=uppercase] - The text transformation for the tab (e.g., uppercase, lowercase).
 * @cssproperty [--wje-tab-font-weight=500] - The font weight of the tab text.
 * @cssproperty [--wje-tab-letter-spacing=0.06em] - The letter spacing of the tab text.
 * @cssproperty [--wje-tab-padding-inline=1rem] - The horizontal padding of the tab.
 * @cssproperty [--wje-tab-padding-top=.75rem] - The top padding of the tab text.
 * @cssproperty [--wje-tab-padding-bottom=.75rem] - The bottom padding of the tab text.
 * @cssproperty [--wje-tab-color-active=var(--wje-color-primary-11)] - The text color of the active tab.
 * @cssproperty [--wje-tab-color-hover=var(--wje-color-primary-1)] - The text color of the tab when hovered.
 * //@fires wje-tab:change - Dispatched when the tab is changed.
 * @tag wje-tab
 */
export default class Tab extends WJElement {
  /**
   * Creates an instance of Tab.
   */
  constructor() {
    super();

    /**
     * Indicates whether this is the last tab.
     * @type {boolean}
     */
    this.last = false;
  }

  /**
   * The class name for the component.
   */
  className = 'Tab';

  /**
   * Returns the CSS styles for the component.
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return styles;
  }

  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = 'open';
  }

  /**
   * Draws the component for the tab.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();

    let slot = document.createElement('slot');

    let a = document.createElement('a');
    a.setAttribute('href', '#' + this.panel);
    a.setAttribute('part', 'native');
    a.classList.add('native-tab');
    a.appendChild(slot);

    fragment.appendChild(a);

    return fragment;
  }

  /**
   * Sets up event listeners after the component is rendered.
   * // @fires wje-tab:change - Dispatched when the component is clicked, indicating a tab change.
   */
  afterDraw() {
    event.addListener(this, 'click', 'wje-tab:change');
  }
}
