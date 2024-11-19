import { default as WJElement, event } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * `Tooltip` is a custom web component that represents a tooltip.
 * @summary This element represents a tooltip.
 * @documentation https://elements.webjet.sk/components/tooltip
 * @status stable
 * @augments {WJElement}
 * @csspart native - The native tooltip wrapper.
 * @slot arrow - The arrow slot for the tooltip.
 * @slot anchor - The anchor slot for the tooltip.
 * @cssproperty [--wje-tooltip-arrow-color=var(--wje-color-contrast-11)] - Specifies the color of the tooltip's arrow. This property determines the visual color of the arrow that points to the element the tooltip is attached to. Accepts any valid CSS color value such as `hex`, `rgb`, or `CSS variable`.
 * @tag wje-tooltip
 */
export default class Tooltip extends WJElement {
  /**
   * Creates an instance of Tooltip.
   */
  constructor() {
    super();
  }

  /**
   * Set active attribute for the tooltip element.
   * @param value
   */
  set content(value) {
    this.setAttribute('content', value);
  }

  /**
   * Get active attribute for the tooltip element.
   * @returns {string}
   */
  get content() {
    if (this.hasAttribute('content')) return this.getAttribute('content');

    return '';
  }

  /**
   * The class name for the component.
   * @type {string}
   */
  className = 'Tooltip';

  /**
   * Returns the CSS stylesheet for the component.
   * @static
   * @returns {CSSStyleSheet} The CSS stylesheet
   */
  static get cssStyleSheet() {
    return styles;
  }

  /**
   * Returns the list of observed attributes.
   * @static
   * @returns {Array} An array of observed attributes
   */
  static get observedAttributes() {
    return ['active'];
  }

  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = 'open';
  }

  /**
   * Draws the component for the tooltip.
   * @returns {object} Document fragment
   */
  draw() {
    let fragment = document.createDocumentFragment();

    let popup = document.createElement('wje-popup');
    popup.setAttribute('placement', this.placement || 'top');
    popup.setAttribute('offset', this.offset || '0');

    // SLOT - Anchor
    let slot = document.createElement('slot');
    slot.setAttribute('slot', 'anchor');

    // let slot = this.querySelector("wje-button");

    let arrow = document.createElement('div');
    arrow.classList.add('arrow');
    arrow.setAttribute('slot', 'arrow');

    // SLOT - Start
    let start = document.createElement('slot');
    start.setAttribute('name', 'start');

    // SLOT - End
    let end = document.createElement('slot');
    end.setAttribute('name', 'end');

    let content = document.createElement('div');
    content.innerHTML = this.content;

    let native = document.createElement('div');
    native.setAttribute('part', 'native');
    native.classList.add('native-tooltip');

    native.appendChild(start);
    native.appendChild(content);
    native.appendChild(end);

    popup.appendChild(slot);
    popup.appendChild(arrow);
    popup.appendChild(native);

    this.mySlot = slot;
    this.popup = popup;
    this.native = native;

    fragment.appendChild(popup);

    return fragment;
  }

  /**
   * Draws the component for the tooltip.
   */
  afterDraw() {
    let anchorEl = this.mySlot.assignedElements()[0];
    if (this.selector) {
      anchorEl = this.checkSelector(anchorEl);
    }

    if (!anchorEl) return;

    event.addListener(anchorEl, 'mouseenter', null, this.onShow);
    event.addListener(anchorEl, 'mouseleave', null, this.onHide);
    event.addListener(this, 'wje-dropdown:open', null, this.onHide);
    event.addListener(this, 'wje-dropdown:close', null, this.onShow);
  }

  dispatch(customEvent) {
    return new Promise((resolve) => {
      event.dispatchCustomEvent(this, customEvent, {
        resolve: resolve,
      });
    });
  }

  beforeShow() {
    return this.native.innerHTML;
  }

  afterShow() {
    return true;
  }

  /**
   * Handles the logic for showing the component's popup or tooltip.
   * Adds the `active` class, invokes lifecycle hooks, and manages the popup visibility.
   * @throws {Error} If the `beforeShow` method returns a non-string value or `false`.
   */
  onShow = () => {
    this.classList.add('active');

    if (this.querySelector('wje-dropdown')?.classList.contains('active')) {
      return;
    }

    Promise.resolve(this.beforeShow(this))
      .then((res) => {
        if (!this.classList.contains('active') || !res || typeof res !== 'string') {
          throw new Error('beforeShow method returned false or not string');
        }

        this.native.innerHTML = res;

        this.popup.show(); // Show tooltip

        Promise.resolve(this.afterShow(this));
      })
      .catch(() => {
        // ak je nejaka chyba tak to len zatvorime
        this.classList.remove('active');
        this.popup.hide();
      });
  };

  /**
   * Hides the component's popup or tooltip.
   * Removes the `active` class from the component and hides the popup element.
   */
  onHide = () => {
    this.classList.remove('active');
    this.popup.hide();
  };

  /**
   * Validates if the specified selector exists within the provided element.
   * Logs an error if the selector is not found and returns the found element or `null`.
   * @param {HTMLElement} anchorEl The root element to search within.
   * @returns {HTMLElement|null} The first element matching the selector, or `null` if not found.
   */
  checkSelector(anchorEl) {
    const newAnchorEl = anchorEl.querySelector(this.selector);
    if (newAnchorEl === null) {
      console.error('Selector not found:', this.selector);
    }

    return newAnchorEl;
  }
}
