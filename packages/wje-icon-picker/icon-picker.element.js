import { default as WJElement, event } from '../wje-element/element.js';
import InfiniteScroll from '../wje-infinite-scroll/infinite-scroll.js';
import Input from '../wje-input/input.js';
import Popup from '../wje-popup/popup.js';
import Tooltip from '../wje-tooltip/tooltip.js';
import styles from './styles/styles.css?inline';

/**
 * @summary This element allows users to pick an icon. `IconPicker` is a custom web component that represents an icon picker.
 * It extends from `WJElement` and uses the `InfiniteScroll`, `Input`, and `Tooltip` components.
 * @documentation https://elements.webjet.sk/components/icon-picker
 * @status stable
 * @augments {WJElement}
 * @property {string} icon - The icon to set.
 * @csspart native - The native part
 * @csspart anchor - The anchor part
 * @csspart picker - The picker part
 * @csspart input - The input part
 * @cssproperty [--wje-icon-picker-radius=var(--wje-border-radius-small)] - The border radius of the icon picker
 * @cssproperty [--wje-icon-picker-icon-size=1.5rem] - The size of the icon picker. This property defines the width and height of the icon displayed in the icon picker. Accepts any valid CSS length unit (e.g., `px`, `rem`, `em`, `%`).
 * @cssproperty [--wje-icon-picker-border-width=1px] - The border width of the icon picker. This property defines the width of the border of the icon picker. Accepts any valid CSS length unit (e.g., `px`, `rem`, `em`, `%`).
 * @cssproperty [--wje-icon-picker-border-style=solid] - The border style of the icon picker. This property defines the style of the border of the icon picker. Accepts any valid CSS border style (e.g., `solid`, `dotted`, `dashed`).
 * @cssproperty [--wje-icon-picker-border-color=var(--wje-border-color)] - The border color of the icon picker. This property defines the color of the border of the icon picker. Accepts any valid CSS color value (e.g., `#000`, `rgb(0,0,0)`, `rgba(0,0,0,0)`).
 * @cssproperty [--wje-icon-picker-padding=.25rem .5rem] - The padding of the icon picker. This property defines the padding of the icon picker. Accepts any valid CSS length unit (e.g., `px`, `rem`, `em`, `%`).
 * @tag wje-icon-picker
 */
export default class IconPicker extends WJElement {
  /**
   * Creates an instance of IconPicker.
   * @class
   */
  constructor() {
    super();
    this.size = 60;
  }

  /**
   * Dependencies of the IconPicker component.
   * @property {object} dependencies
   */
  dependencies = {
    'wje-input': Input,
    'wje-infinite-scroll': InfiniteScroll,
    'wje-tooltip': Tooltip,
    'wje-popup': Popup,
  };

  /**
   * Setter for the markerPosition property.
   * @param {any} value The value to set.
   */
  set markerPosition(value) {
    this._markerPosition = value;
  }

  /**
   * Getter for the markerPosition property.
   * @returns {any} The value of the markerPosition property.
   */
  get markerPosition() {
    return this._markerPosition;
  }

  /**
   * Setter for the swatches property.
   * @param {any} value The value to set.
   */
  set swatches(value) {
    this.setAttribute('swatches', value.split(','));
  }

  /**
   * Getter for the swatches property.
   * @returns {any} The value of the swatches property.
   */
  get swatches() {
    return this._swatches;
  }

  set icon(value) {
    this.setAttribute('icon', value);
  }

  get icon() {
    return this.getAttribute('icon');
  }

  className = 'IconPicker';

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
    return [];
  }

  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = 'open';
  }

  /**
   * Prepares the component before drawing.
   */
  async beforeDraw() {
    this.tags = Object.values(await this.getTags());
  }

  /**
   * Draws the component.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();

    let native = document.createElement('div');
    native.classList.add('native-color-picker');

    // ANCHOR
    let anchor = document.createElement('div');
    anchor.setAttribute('slot', 'anchor');
    anchor.classList.add('anchor');

    if (this.hasAttribute('icon') && this.icon) {
      let icon = document.createElement('wje-icon');
      icon.setAttribute('name', this.icon);

      anchor.appendChild(icon);
    }

    // PICKER
    let picker = document.createElement('div');
    picker.classList.add('picker');

    let input = document.createElement('wje-input');
    input.classList.add('input');
    input.setAttribute('variant', 'standard');
    input.setAttribute('placeholder', 'type to filter...');
    input.setAttribute('clearable', '');
    input.addEventListener('wje-input:input', this.searchIcon);

    let infiniteScroll = new InfiniteScroll();

    infiniteScroll.setAttribute('url', this.getTagsUrl('../../tags.json'));
    infiniteScroll.setAttribute('placement', '.icon-items');
    infiniteScroll.setAttribute('size', this.size);
    infiniteScroll.setAttribute('height', '223px');
    infiniteScroll.innerHTML = `<div class="icon-items">
            <div class="icon-item" iterate>
                <wje-tooltip content="{{name}}">
                    <wje-icon name="{{name}}" size="large"></wje-icon>
                </wje-tooltip>
            </div>
        </div>`;

    // APPEND
    picker.appendChild(input);

    picker.appendChild(infiniteScroll);

    // POPUP
    let popup = document.createElement('wje-popup');
    popup.setAttribute('placement', this.placement || 'bottom-start');
    popup.setAttribute('offset', this.offset);
    popup.setAttribute('manual', '');

    popup.appendChild(anchor);
    popup.appendChild(picker);

    native.appendChild(popup);

    fragment.appendChild(native);

    this.popup = popup;
    this.input = input;
    this.anchor = anchor;
    this.picker = picker;
    this.infiniteScroll = infiniteScroll;

    this.setupInfiniteScroll();

    return fragment;
  }

  /**
   * Called after the component has been drawn.
   */
  afterDraw() {
    this.addEventListener('wje-popup:show', (e) => {
      this.initial();
    });

    // udalost po vymazani inputu
    this.addEventListener('wje-input:clear', (e) => {
      this.setupInfiniteScroll(); // reset infinite scroll
      this.clearIconsContainer(); // clear icons container
      this.infiniteScroll.scrollEvent(); // bind scroll event
      this.infiniteScroll.loadPages(0); // load first page
    });

    this.addEventListener('wje-infinite-scroll:click-item', (e) => {
      const icon = e.detail.context.querySelector('wje-icon');
      const name = icon.getAttribute('name');
      const object = this.tags.find((i) => i.name === name);
      const iconElement = document.createElement('wje-icon');
      iconElement.setAttribute('name', name);

      object.icon = iconElement;

      this.value = object;

      this.anchor.innerHTML = '';
      this.anchor.appendChild(iconElement);

      event.dispatchCustomEvent(this, 'wje-icon-picker:select', object); // odpalenie custom eventu
    });

    this.init = false;
  }

  /**
   * Initializes the component.
   */
  initial() {
    this.infiniteScroll.scrollEvent();
  }

  /**
   * Sets up the infinite scroll for the component.
   */
  setupInfiniteScroll() {
    this.infiniteScroll.setCustomData = (page = 0) => {
      let data = Object.values(this.tags);
      return {
        data: data.slice(page * this.size, page * this.size + this.size),
        page: page,
        size: this.size,
        totalPages: Math.round(data.length / this.size),
      };
    };
  }

  /**
   * Gets the category of the tags.
   * @param {Array} tags The tags to get the category of.
   * @returns {Array} The category of the tags.
   */
  getCategory(tags) {
    let category = [...new Set(tags.map((obj) => obj.category))];
    return category;
  }

  /**
   * Gets the tags.
   * @returns {Promise<Array>} The tags of the component.
   */
  async getTags() {
    const response = await fetch(this.getTagsUrl('../../tags.json'));
    return response.json();
  }

  /**
   * Called when the component is disconnected.
   */
  beforeDisconnect() {
    this.init = false;
  }

  /**
   * Event handler for searching icons.
   * @param {Event} e The event.
   */
  searchIcon = (e) => {
    this.infiniteScroll.unScrollEvent(); // unbind scroll event
    this.infiniteScroll.setCustomData = (page = 0) => {
      let data = this.tags.filter((i) => i.tags.includes(e.detail.value));
      return {
        data: data,
        page: page,
        size: this.size,
        totalPages: Math.round(data.length / this.size),
      };
    };

    this.clearIconsContainer(); // clear icons container
    this.infiniteScroll.loadPages(0); // load only
  };

  /**
   * Clears the icons container.
   */
  clearIconsContainer() {
    this.context.querySelector('.icon-items').innerHTML = '';
  }

  /**
   * Closes the component.
   */
  onClose = () => {
    this.popup.handleHide();
  };

  /**
   * Gets the URL of the tags.
   * @param {string} path The path to get the URL of.
   * @returns {string} The URL of the tags path.
   */
  getTagsUrl = (path) => {
    return new URL(process.env.VITE_ICON_ASSETS_URL + path).href;
  };
}
