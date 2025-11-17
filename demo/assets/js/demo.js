import { setBasePath } from "/dist/base-path.js";
import WJElement from '../../../dist/wje-element.js';

// Set the base path for the application
setBasePath("/dist/");

// Set the base variable for translations
window.translations = new Map();

/*********************************/

document.querySelector('.dark-light-mode').addEventListener('wje-button:click', () => {
  document.body.classList.toggle('wje-theme-dark');
  saveModePreference();
});
loadModePreference();

function saveModePreference() {
  const body = document.body;
  let isDarkMode = body.classList.contains('wje-theme-dark');
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

function loadModePreference() {
  const body = document.body;
  const darkMode = localStorage.getItem('darkMode');
  if (darkMode === 'enabled') {
    body.classList.add('wje-theme-dark');
  } else {
    body.classList.remove('wje-theme-dark');
  }
}

/*********************************/

export class ShadowElement extends WJElement {
  constructor() {
    super();
  }

  /**
   * Returns the CSS styles for the component.
   *
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return;
  }

  /**
   * Configures and initializes attributes for the current instance.
   * @returns {void} This method does not return a value.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }

  /**
   * Creates and constructs a DOM fragment representing a form element,
   * including a title, description, and either an input or select field
   * based on the object's type and data.
   * @returns {DocumentFragment} A document fragment containing the created elements.
   */
  draw() {
    let fragment = document.createDocumentFragment();

    let container = document.createElement("div");
    container.classList.add("container");
    container.innerHTML = `<wje-dropdown label="Start" placement="bottom-start" offset="5" collapsible portaled="dialog">
      <wje-button size="medium" slot="trigger" stop-propagation="true" caret>Large</wje-button>
      <wje-menu variant="context">
        <wje-menu-item route="accordion">
          <wje-icon name="plane" slot="start"></wje-icon>
          <wje-label>Menu item accordion</wje-label>
        </wje-menu-item>
        <wje-menu-item>
          <wje-icon name="book" slot="start"></wje-icon>
          <wje-label>Menu item</wje-label>
        </wje-menu-item>
        <wje-menu-item>
          <wje-icon name="music" slot="start"></wje-icon>
          <wje-label>Menu item</wje-label>
        </wje-menu-item>
        <wje-menu-item>
          <wje-icon name="video" slot="start"></wje-icon>
          <wje-label>Menu item</wje-label>
        </wje-menu-item>
      </wje-menu>
    </wje-dropdown>`;

    fragment.appendChild(container);

    return fragment;
  }
}

ShadowElement.define('wje-shadow-element', ShadowElement);