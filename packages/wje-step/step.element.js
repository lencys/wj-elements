import { default as WJElement } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * `Step` is a custom web component that represents a step.
 * @summary This element represents a step.
 * @documentation https://elements.webjet.sk/components/step
 * @status stable
 * @augments WJElement
 * @csspart native - The native part of the step.
 * @slot - The default slot for the step.
 * @tag wje-step
 */
export default class Step extends WJElement {
  /**
   * Creates an instance of Step.
   */
  constructor() {
    super();
  }

  /**
   * The class name for the component.
   * @type {string}
   */
  className = 'Step';

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

    let native = document.createElement('div');
    native.className = 'step-native';
    native.setAttribute('part', 'native');

    const slot = document.createElement('slot');

    native.appendChild(slot);

    fragment.appendChild(native);

    return fragment;
  }
}
