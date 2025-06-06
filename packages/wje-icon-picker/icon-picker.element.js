import { default as WJElement, event } from '../wje-element/element.js';
import { getBasePath } from "../utils/base-path.js";
import InfiniteScroll from '../wje-infinite-scroll/infinite-scroll.js';
import Input from '../wje-input/input.js';
import Popup from '../wje-popup/popup.js';
import Tooltip from '../wje-tooltip/tooltip.js';
import styles from './styles/styles.css?inline';

/**
 * @summary This element allows users to pick an icon from a set of available options.
 * `IconPicker` is a custom web component that represents an interactive icon picker. It features
 * search functionality, infinite scrolling, and popup-based selection. The component is highly customizable
 * and integrates seamlessly with other `WJElement` components.
 * @documentation https://elements.webjet.sk/components/icon-picker
 * @status stable
 * @augments {WJElement}
 * @attribute {string} icon - The selected icon's name.
 * @attribute {number} size - The number of icons displayed per page in infinite scroll. Default is 60.
 * @csspart native - The native part of the component.
 * @csspart anchor - The part representing the anchor button displaying the selected icon.
 * @csspart picker - The picker part containing the search and icon selection interface.
 * @csspart input - The input part for searching icons.
 * @cssproperty [--wje-color-picker-value=#ff0000] - The default color value.
 * @cssproperty [--wje-color-picker-area=transparent] - The background color of the color picker area.
 * @cssproperty [--wje-color-picker-swatch=transparent] - The background color of the swatch picker.
 * @cssproperty [--wje-color-picker-size=1rem] - The size of the icons in the picker.
 * @cssproperty [--wje-color-picker-radius=4px] - The border radius of the picker.
 * @tag wje-icon-picker
 */

export default class IconPicker extends WJElement {
    /**
     * Creates an instance of IconPicker.
     * @class
     */
    constructor() {
        super();
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
    set size(value) {
        this.setAttribute('size', value);
    }

    /**
     * Getter for the markerPosition property.
     * @returns {any} size The value of the markerPosition property.
     */
    get size() {
        return this.getAttribute('size') || 60;
    }

    /**
     * Setter for the value property.
     * @param value
     */
    set icon(value) {
        this.setAttribute('icon', value);
    }

    /**
     * Getter for the value property.
     * @returns {string}
     */
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

        this.transformedObjects = this.convertObject(this.tags);

        this.index = this.transformedObjects.map((item) => ({
            ...item,
            searchText: `${item.name.toLowerCase()} ${item.tags.join(' ').toLowerCase()}`,
        }));
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
        infiniteScroll.setAttribute('url', getBasePath('assets/tags.json'));
        infiniteScroll.setAttribute('placement', '.icon-items');
        infiniteScroll.setAttribute('size', this.size);
        infiniteScroll.setAttribute('height', '223px');
        infiniteScroll.innerHTML = '<div class="icon-items"></div>';

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

        this.infiniteScroll.dataToHtml = this.dataToHtml;
        this.infiniteScroll.compareFunction = (i, item) => i.name === item.name;
        this.infiniteScroll.setCustomData = (page = 0) => {
            return {
                data: this.transformedObjects.slice(page * this.size, page * this.size + this.size),
                page: page,
                size: this.size,
                totalPages: Math.round(this.transformedObjects.length / this.size),
            };
        };

        return fragment;
    }

    /**
     * Called after the component has been drawn.
     */
    afterDraw() {
        this.addEventListener('wje-popup:show', () => {
            this.initial();
        });

        // udalost po vymazani inputu
        this.addEventListener('wje-input:clear', () => {
            this.clearIconsContainer(); // clear icons container
            this.infiniteScroll.scrollEvent(); // bind scroll event
            this.infiniteScroll.loadPages(0); // load first page
        });

        this.addEventListener('wje-infinite-scroll:click-item', (e) => {
            let icon = e.detail.context.querySelector('wje-icon');
            let name = icon.getAttribute('name');
            let stylesType = icon.hasAttribute('filled') ? 'filled' : 'outline';
            let uniqueObject = this.transformedObjects.find(
                (i) => i.name === name && Object.keys(i.styles)[0] === stylesType
            );

            const iconElement = document.createElement('wje-icon');
            iconElement.setAttribute('name', name);
            if (uniqueObject.styles.hasOwnProperty('filled')) iconElement.setAttribute('filled', '');

            uniqueObject.icon = iconElement;

            this.value = uniqueObject;
            this.icon = uniqueObject.name;

            this.anchor.innerHTML = '';
            this.anchor.appendChild(iconElement);

            event.dispatchCustomEvent(this, 'wje-icon-picker:select', uniqueObject); // odpalenie custom eventu
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
     * Converts an object of tags into a transformed array of objects, separating `filled` and `outline` styles.
     * The function processes an input object containing tags, extracts its values,
     * and for each tag that has both `filled` and `outline` styles, splits them into
     * two separate objects. Tags without `filled` styles remain unchanged.
     * @param {object} tags The input object containing tags as properties. Each property is an object with a `styles` key.
     * @param {object} tags[].styles The styles object containing `filled` and/or `outline` styles.
     * @param {object} [tags[].styles.outline] The outline style object, if present.
     * @param {object} [tags[].styles.filled] The filled style object, if present.
     * @returns {Array<object>} An array of transformed objects. Objects with both `filled` and `outline` styles are split into separate objects, each containing only one style.
     * @example
     * const tags = {
     *     hourglass: {
     *         styles: {
     *             outline: { ... },
     *             filled: { ... },
     *         }
     *     },
     *     clock: {
     *         styles: {
     *             outline: { ... },
     *         }
     *     }
     * };
     * const result = convertObject(tags);
     * console.log(result);
     * // [
     * //   { styles: { outline: { ... } } },
     * //   { styles: { filled: { ... } } },
     * //   { styles: { outline: { ... } } }
     * // ]
     */
    convertObject = (tags = {}) => {
        let originalObjects = Object.values(tags);
        let transformedObjects = [];
        for (let i = 0; i < originalObjects.length; i++) {
            const obj = originalObjects[i];
            if (obj.styles.filled) {
                transformedObjects.push(
                    { ...obj, styles: { outline: obj.styles.outline } },
                    { ...obj, styles: { filled: obj.styles.filled } }
                );
            } else {
                transformedObjects.push(obj);
            }
        }

        return transformedObjects;
    };

    /**
     * Converts an icon data object into an HTML element structure.
     * This function creates a styled HTML element that represents an icon with a tooltip.
     * The tooltip displays the name of the icon, and the icon itself is styled based on
     * whether it uses the `filled` style.
     * @param {object} data The icon data object.
     * @returns {HTMLElement} A `div` element containing the icon wrapped in a `wje-tooltip`. The tooltip displays the icon name, and the `wje-icon` element represents the icon with attributes set according to the data.
     * @example
     * const iconData = {
     *     name: "hourglass",
     *     styles: {
     *         filled: { ... }
     *     }
     * };
     * const htmlElement = dataToHtml(iconData);
     * document.body.appendChild(htmlElement);
     *
     * // The resulting structure:
     * // <div class="icon-item">
     * //   <wje-tooltip content="hourglass">
     * //     <wje-icon name="hourglass" size="large" filled></wje-icon>
     * //   </wje-tooltip>
     * // </div>
     */
    dataToHtml = (data) => {
        let iconItem = document.createElement('div');
        iconItem.classList.add('icon-item');

        let tooltip = document.createElement('wje-tooltip');
        tooltip.setAttribute('content', data.name);

        let icon = document.createElement('wje-icon');
        icon.setAttribute('name', data.name);
        icon.setAttribute('size', 'large');
        if (data.styles.hasOwnProperty('filled')) icon.setAttribute('filled', '');

        tooltip.appendChild(icon);
        iconItem.appendChild(tooltip);

        return iconItem;
    };

    /**
     * Gets the category of the tags.
     * @param {Array} tags The tags to get the category of.
     * @returns {Array} The category of the tags.
     */
    getCategory(tags) {
        return [...new Set(tags.map((obj) => obj.category))];
    }

    /**
     * Gets the tags.
     * @returns {Promise<Array>} The tags of the component.
     */
    async getTags() {
        const response = await fetch(getBasePath('assets/tags.json'));
        return response.json();
    }

    /**
     * Called when the component is disconnected.
     */
    beforeDisconnect() {
        this.init = false;
    }

    /**
     * Searches icons based on user input.
     * This method handles the input event and filters the available icons based on the provided search string.
     * The filtering is performed on an index that combines icon names and their tags.
     * The results are then adjusted for infinite scrolling.
     * @param {Event} e The input event (e.g., `wje-input:input`) containing the search query details.
     */
    searchIcon = (e) => {
        const query = e.detail.value.toLowerCase();

        const results = this.index.filter((item) => item.searchText.includes(query));

        this.infiniteScroll.unScrollEvent();
        this.infiniteScroll.setCustomData = (page = 0) => {
            const data = results.slice(page * this.size, page * this.size + this.size);
            return {
                data: data,
                page: page,
                size: this.size,
                totalPages: Math.ceil(results.length / this.size),
            };
        };

        this.clearIconsContainer();
        this.infiniteScroll.loadPages(0);
    }

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
    }
}
