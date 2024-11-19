import { default as WJElement } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * `ReorderDropzone` is a custom web component that represents a reorder dropzone.
 * @summary This element represents a reorder dropzone.
 * @documentation https://elements.webjet.sk/components/reorder-dropzone
 * @status stable
 * @augments WJElement
 * @csspart native - The native part of the reorder dropzone.
 * @slot - The default slot for the reorder dropzone.
 * @tag wje-reorder-dropzone
 */
export default class ReorderDropzone extends WJElement {
  /**
   * Creates an instance of ReorderDropzone.
   */
  constructor() {
    super();
  }

  /**
   * The class name for the component.
   * @type {string}
   */
  className = 'ReorderDropzone';

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
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();

    let dropzone = document.createElement('div');
    dropzone.classList.add('dropzone');

    let slot = document.createElement('slot');

    dropzone.appendChild(slot);

    fragment.appendChild(dropzone);

    return fragment;
  }
}
