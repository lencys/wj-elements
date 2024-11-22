import { default as WJElement } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * `Rate` is a custom web component that represents a rating component.
 * @summary This element represents a rating component.
 * @documentation https://elements.webjet.sk/components/rate
 * @status stable
 * @augments {WJElement}
 * @attribute {number} precision - The precision of the rating component.
 * @attribute {number} max - The maximum value of the rating component.
 * @attribute {Array<string>} icons - The icons of the rating component.
 * @csspart native - The native part of the rating component.
 * @cssproperty [--wje-rate-gap=.25rem] - Defines the spacing (gap) between individual items in the rating component. Accepts any valid CSS length unit (e.g., `px`, `rem`, `em`) to adjust the distance between rating elements.
 * @cssproperty [--wje-rate-color=var(--wje-color-contrast-11)] - Specifies the default color of the rating items. Accepts any valid CSS color value, including named colors, hex values, RGB, or CSS variables.
 * @cssproperty [--wje-rate-selected-color=var(--wje-color-danger-9)] - Sets the color for selected or highlighted rating items. This property helps visually distinguish selected ratings. Accepts any valid CSS color value.
 * @tag wje-rate
 */

export default class Rate extends WJElement {
  /**
   * Creates an instance of Rate.
   * @class
   */
  constructor() {
    super();
  }

  /**
   * Sets the precision of the rating component.
   * @param {number} value The value to set.
   */
  set precision(value) {
    this.setAttribute('precision', value);
  }

  /**
   * Gets the precision of the rating component.
   * @returns {number} The value of the precision.
   */
  get precision() {
    return this.hasAttribute('precision') ? +this.getAttribute('precision') : 1;
  }

  /**
   * Sets the maximum value of the rating component.
   * @param {number} value The value to set.
   */
  set max(value) {
    this.setAttribute('max', value);
  }

  /**
   * Gets the maximum value of the rating component.
   * @returns {number} The value of the maximum value.
   */
  get max() {
    return this.hasAttribute('icons') ? this.icons.length : +this.getAttribute('max');
  }

  /**
   * Sets the icons of the rating component.
   * @param {Array<string>} value The value to set.
   */
  set icons(value) {
    return value;
  }

  /**
   * Gets the icons of the rating component.
   * @returns {Array<string>} The value of the icons.
   */
  get icons() {
    return this.hasAttribute('icons') ? JSON.parse(this.getAttribute('icons').replace(/'/g, '"')) : ['star'];
  }

  /**
   * Sets the value of the rating component.
   * @param {number} value The value to set.
   */
  set value(value) {
    this.setAttribute('value', value);
  }

  /**
   * Gets the value of the rating component.
   * @returns {number} The value of the rating component.
   */
  get value() {
    return this.hasAttribute('value') ? +this.getAttribute('value') : 0;
  }

  /**
   * Sets the hover value of the rating component.
   * @type {string}
   */
  className = 'Rate';

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
    return ['is-hover'];
  }

  /**
   * Called when an attribute changes.
   * @param {string} name The name of the attribute that changed.
   * @param {string} old The old value of the attribute.
   * @param {string} newName The new value of the attribute.
   */
  attributeChangedCallback(name, old, newName) {
    if (name === 'is-hover') {
      // this.draw();
    }
  }

  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = 'open';
  }

  /**
   * Draws the component for the rating component.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();

    let native = document.createElement('div');
    native.setAttribute('part', 'native');
    native.classList.add('native-rate');

    this.native = native;

    if (this.hasAttribute('icons')) {
      let icons = this.icons;
      for (let i = 0; i < icons.length; i++) {
        native.appendChild(this.createIcons(i));
      }
    } else {
      for (let i = 0; i < this.max; i++) {
        native.appendChild(this.createIcons(i));
      }
    }

    this.changeRate();

    fragment.appendChild(native);

    return fragment;
  }

  /**
   * Adds event listeners after the component is drawn.
   */
  afterDraw() {
    if (this.hasAttribute('disabled') || this.hasAttribute('readonly')) {
      return;
    }

    this.addEventListener('mouseenter', this.onMouseEnter);
    this.addEventListener('mouseleave', this.onMouseLeave);
    this.addEventListener('mousemove', this.onMouseMove);
    this.addEventListener('touchstart', this.onTouchStart);
    this.addEventListener('touchend', this.onTouchEnd);
    this.addEventListener('touchmove', this.onTouchMove);
    this.addEventListener('click', this.onClick);
  }

  /**
   * Creates the icons for the rating component.
   * @param {number} i The index of the icon.
   * @returns {Element} The icon element.
   */
  createIcons(i) {
    let div = document.createElement('div');
    div.classList.add('wje-rate-icon');

    let icon = this.getIcons(i);
    let clone = icon.cloneNode(true);

    div.appendChild(icon);
    div.appendChild(clone);

    return div;
  }

  /**
   * Changes the rate of the rating component.
   */
  changeRate() {
    const icons = this.native.children;
    const rateValue =
      this.value !== this.hoverValue && this.hoverValue !== 0 && this.hoverValue !== undefined
        ? this.hoverValue
        : this.value;

    for (let i = 0; i < icons.length; i++) {
      const icon = icons[i];
      const firstIcon = icon.querySelector('wje-icon:first-child');
      const lastIcon = icon.querySelector('wje-icon:last-child');

      const isSelected = i < rateValue;
      const isPartial = rateValue > i && rateValue < i + 1;

      if (isSelected) {
        icon.classList.add('selected');
        if (this.hasAttribute('selected') && this.getAttribute('selected') === 'filled') {
          lastIcon.setAttribute('filled', '');
        }
      } else {
        icon.classList.remove('selected');
        lastIcon.removeAttribute('filled');
      }

      if (isPartial) {
        const percent = ((rateValue - i) * 100).toFixed(2);
        icon.classList.add('half');

        firstIcon.style.clipPath = `inset(0 0 0 ${percent}%)`;
        lastIcon.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;

        lastIcon.removeAttribute('hidden');
      } else {
        icon.classList.remove('half');
        firstIcon.style.clipPath = ``;
        lastIcon.style.clipPath = ``;
        lastIcon.setAttribute('hidden', '');
      }

      icon.setAttribute('data-index', i);
      icon.setAttribute('data-rate', rateValue);
    }
  }

  /**
   * Event handler for the mouse enter event.
   * @param {Event} e The event.
   */
  onMouseEnter = (e) => {
    e.preventDefault();

    this.hoverValue = this.getValueFromXPosition(e.clientX);
    this.changeRate();
  };

  /**
   * Event handler for the mouse leave event.
   * @param {Event} e The event.
   */
  onMouseLeave = (e) => {
    e.preventDefault();

    this.hoverValue = 0;
    this.changeRate();
  };

  /**
   * Event handler for the mouse move event.
   * @param {Event} e The event.
   */
  onMouseMove = (e) => {
    e.preventDefault();

    let newValue = +this.getValueFromXPosition(e.clientX);
    if (newValue !== +this.hoverValue) {
      this.hoverValue = newValue;
      this.changeRate();
    }
  };

  /**
   * Event handler for the touch start event.
   * @param {Event} e The event.
   */
  onTouchStart = (e) => {
    e.preventDefault();

    this.hoverValue = this.getValueFromXPosition(e.touches[0].clientX);
    this.changeRate();
  };

  /**
   * Event handler for the touch end event.
   * @param {Event} e The event.
   */
  onTouchEnd = (e) => {
    e.preventDefault();

    this.hoverValue = 0;
    this.changeRate();
  };

  /**
   * Event handler for the touch move event.
   * @param {Event} e The event.
   */
  onTouchMove = (e) => {
    e.preventDefault();

    this.hoverValue = this.getValueFromXPosition(e.touches[0].clientX);
    this.changeRate();
  };

  /**
   * Event handler for the click event.
   * @param {Event} e The event.
   */
  onClick = (e) => {
    e.preventDefault();

    this.value = +this.hoverValue;
  };

  /**
   * Returns the icons for the rating component.
   * @param {number} index The index of the icon.
   * @returns {Element} The icon element.
   */
  getIcons(index) {
    let icon = document.createElement('wje-icon');
    icon.setAttribute('name', this.max ? this.icons[0] : this.icons[index]);

    if (this.hasAttribute('filled')) icon.setAttribute('filled', '');

    return icon;
  }

  /**
   * Returns the value from the x position.
   * @param {number} coordinate The x coordinate.
   * @returns {number} The value from the x position.
   */
  getValueFromXPosition(coordinate) {
    const { left, right, width } = this.native.getBoundingClientRect();
    const value = this.roundToPrecision(((coordinate - left) / width) * this.max, this.precision);

    return Math.min(Math.max(value, 0), this.max);
  }

  /**
   * Rounds a given number to the nearest specified precision.
   * @param {number} numberToRound The number to be rounded.
   * @param {number} [precision] The precision to which the number should be rounded.
   * @returns {number} - The rounded number.
   * @example
   * roundToPrecision(2.3); // Returns 2.5
   * roundToPrecision(2.3, 0.1); // Returns 2.3
   * roundToPrecision(2.6, 1); // Returns 3
   */
  roundToPrecision(numberToRound, precision = 0.5) {
    const multiplier = 1 / precision;
    return Math.ceil(numberToRound * multiplier) / multiplier;
  }
}
