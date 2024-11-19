import { default as WJElement } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * `ToolbarAction` is a custom web component that represents a toolbar action.
 * @summary This element represents a toolbar action.
 * @documentation https://elements.webjet.sk/components/toolbar-action
 * @status stable
 * @augments {WJElement}
 * @csspart native - The native toolbar action wrapper.
 * @slot - The default slot for the toolbar action.
 * @tag wje-toolbar-action
 */
export default class ToolbarAction extends WJElement {
  /**
   * Creates an instance of ToolbarAction.
   */
  constructor() {
    super();
  }

  /**
   * The class name for the component.
   * @type {string}
   */
  className = 'ToolbarAction';

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
   * @returns {Array} An empty array
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
   * Draws the component for the toolbar action.
   * @returns {object} Document fragment
   */
  draw() {
    let fragment = document.createDocumentFragment();

    let maxItems = +this.maxItems || 0;
    let actions = this.getActions();

    let slot = document.createElement('slot');

    let element = document.createElement('div');
    element.setAttribute('part', 'native');
    element.classList.add('native-toolbar-action');

    const shouldCollapse = maxItems !== 0 && actions.length > maxItems;
    if (shouldCollapse) {
      element = document.createElement('wje-dropdown');
    }

    element.appendChild(slot);

    fragment.appendChild(element);

    return fragment;
  }

  /**
   * Returns the actions for the toolbar action.
   * @returns {Array} An array of wje-button elements
   */
  getActions() {
    return Array.from(this.querySelectorAll('wje-button'));
  }
}
