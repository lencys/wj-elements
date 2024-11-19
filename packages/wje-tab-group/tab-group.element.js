import { default as WJElement } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * `TabGroup` is a custom web component that represents a group of tabs.
 * @summary This element represents a group of tabs.
 * @documentation https://elements.webjet.sk/components/tab-group
 * @status stable
 * @augments WJElement
 * @slot - The default slot for the tab group.
 * @slot nav - Slot for the navigation of the tab group.
 * @cssproperty [--wje-tab-group-padding=1rem] - Specifies the padding inside the tab group. This property defines the space between the content of the tab group and its outer boundary. Accepts any valid CSS length unit (e.g., `px`, `rem`, `em`, `%`).
 * @tag wje-tab-group
 */

export default class TabGroup extends WJElement {
  /**
   * Creates an instance of TabGroup.
   * @class
   */
  constructor() {
    super();
  }

  className = 'TabGroup';

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
   * Sets up the event listeners before the component is drawn.
   * This method is called before the component is drawn.
   * It is used to set up event listeners.
   */
  beforeDraw() {
    let activeTabName = location.hash.replace('#', '');

    // skontrolujeme ci sa nachadza v paneloch
    if (this.getPanelAllName().includes(activeTabName)) {
      // window.addEventListener('hashchange', (e) => {
      //     this.setActiveTab(activeTabName);
      // });

      window.addEventListener('load', (e) => {
        this.setActiveTab(activeTabName);
      });
    }
  }

  /**
   * Draws the component.
   * @param {object} context The context for drawing.
   * @param {object} store The store for drawing.
   * @param {object} params The parameters for drawing.
   * @returns {DocumentFragment}
   */
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();

    let native = document.createElement('div');
    native.setAttribute('part', 'native');
    native.classList.add('native-tab-group');

    let header = document.createElement('header');
    header.setAttribute('part', 'tabs');
    header.classList.add('scroll-snap-x');

    let nav = document.createElement('nav');

    let section = document.createElement('section');
    section.setAttribute('part', 'panels');

    let slot = document.createElement('slot');

    let slotNav = document.createElement('slot');
    slotNav.setAttribute('name', 'nav');

    header.appendChild(nav);
    nav.appendChild(slotNav);
    section.appendChild(slot);

    native.appendChild(header);
    native.appendChild(section);

    fragment.appendChild(native);

    return fragment;
  }

  /**
   * Sets up the event listeners after the component is drawn.
   */
  afterDraw() {
    let activeTab = this.getActiveTab();
    let activeTabName = activeTab ? activeTab[0].panel : this.getTabAll()[0].panel;

    this.setActiveTab(activeTabName);

    this.addEventListener('wje-tab:change', (e) => {
      if (e.detail.context.hasAttribute('disabled')) return;

      this.setActiveTab(e.detail.context.panel);
    });
  }

  /**
   * Removes the active attribute from all tabs and panels.
   */
  removeActiveTab() {
    this.getPanelAll().forEach((el) => {
      el.removeAttribute('active');
    });

    this.getTabAll().forEach((el) => {
      el.removeAttribute('active');
    });
  }

  /**
   * Sets the active tab and panel.
   * @param {string} tab The name of the tab to set as active.
   */
  setActiveTab(tab) {
    this.removeActiveTab();
    this.querySelector(`[panel="${tab}"]`).setAttribute('active', '');
    this.querySelector(`[name="${tab}"]`).setAttribute('active', '');
  }

  /**
   * Returns the currently active tab.
   * @returns {Element|null} The active tab, or null if no tab is active.
   */
  getActiveTab() {
    let activeTabs = Array.from(this.querySelectorAll('wje-tab[active]'));
    return activeTabs.length > 0 ? activeTabs : null;
  }

  /**
   * Returns all tabs.
   * @returns {Array<Element>} An array of all tabs.
   */
  getTabAll() {
    return this.context.querySelector('[name="nav"]').assignedElements();
  }

  /**
   * Returns all panels.
   * @returns {Array<Element>} An array of all panels.
   */
  getPanelAll() {
    return Array.from(this.querySelectorAll('wje-tab-panel'));
  }

  /**
   * Returns the names of all tabs.
   * @returns {Array<string>} An array of all tab names.
   */
  getPanelAllName() {
    return this.getPanelAll().map((el) => el.getAttribute('name'));
  }
}
