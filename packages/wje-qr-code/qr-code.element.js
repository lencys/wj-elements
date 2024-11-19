import WJElement from '../wje-element/element.js';
import styles from './styles/styles.css?inline';
import QRious from 'qrious';

/**
 * `QrCode` is a custom web component that generates a QR code.
 * @summary This element represents a QR code generator.
 * @documentation https://elements.webjet.sk/components/qr-code
 * @status stable
 * @augments {WJElement}
 * @csspart native - The native part of the QR code.
 * @slot top - The slot for the top content of the QR code.
 * @slot bottom - The slot for the bottom content of the QR code.
 * @tag wje-qr-code
 */

export default class QrCode extends WJElement {
  /**
   * Creates an instance of QrCode.
   */
  constructor() {
    super();
  }

  /**
   * The class name for the component.
   * @type {string}
   */
  className = 'QrCode';

  /**
   * Returns the CSS stylesheet for the component.
   * @returns {CSSStyleSheet} The CSS stylesheet.
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
   * Returns the list of observed attributes.
   * @returns {string[]} The list of observed attributes.
   */
  static get observedAttributes() {
    return ['value', 'background', 'backgroundAlpha', 'foreground', 'foregroundAlpha', 'level', 'padding', 'size'];
  }

  /**
   * Draws the QR code component.
   * @returns {DocumentFragment} The document fragment containing the QR code component.
   */
  draw() {
    let fragment = document.createDocumentFragment();

    let wrapper = document.createElement('div');
    wrapper.classList.add('container');

    let qrCode = document.createElement('canvas');
    qrCode.classList.add('qr');
    qrCode.setAttribute('part', 'native');

    let slotTop = document.createElement('slot');
    slotTop.setAttribute('name', 'top');

    let slotBottom = document.createElement('slot');
    slotBottom.setAttribute('name', 'bottom');

    wrapper.appendChild(slotTop);
    wrapper.appendChild(qrCode);
    wrapper.appendChild(slotBottom);

    fragment.appendChild(wrapper);

    return fragment;
  }

  /**
   * Called after the component is drawn to generate the QR code.
   */
  afterDraw() {
    const canvas = this.shadowRoot.querySelector('canvas');
    const qrOptions = {};

    const attributes = [
      'value',
      'background',
      'backgroundAlpha',
      'foreground',
      'foregroundAlpha',
      'level',
      'padding',
      'size',
    ];

    attributes.forEach((attribute) => {
      const value = this.getAttribute(attribute);
      if (value !== null) {
        qrOptions[attribute] = value;
      }
    });

    if (!qrOptions.hasOwnProperty('value')) {
      qrOptions.value = 'empty value';
    }

    const qr = new QRious({
      element: canvas,
      ...qrOptions,
    });
  }
}
