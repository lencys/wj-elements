import { default as WJElement, event, WjElementUtils } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * `InfiniteScroll` is a custom web component that represents an infinite scroll.
 * It extends from `WJElement`.
 * @summary This element allows users to scroll through a potentially infinite amount of content.
 * @documentation https://elements.webjet.sk/components/infinite-scroll
 * @status stable
 * @augments {WJElement}
 * @csspart loader - The loader part of the infinite scroll.
 * @slot - The default slot for the infinite scroll.
 * @cssproperty [--wje-infinite-scroll-width=100%] - Sets the width of the infinite scroll container. his property determines how wide the infinite scroll area will be relative to its parent element. Accepts any valid CSS width value, such as percentages (`%`), pixels (`px`), or viewport units (`vw`). The default value is `100%`, which makes it span the full width of its container.
 * @cssproperty [--wje-infinite-scroll-height=300px] - Defines the height of the infinite scroll container. This property specifies how tall the infinite scroll area should be. Accepts any valid CSS height value, such as pixels (`px`), percentages (`%`), or viewport units (`vh`). The default value is `300px`, providing a fixed height suitable for most use cases.
 * //@fires wje-infinite-scroll:click-item - Event fired when an item is clicked.
 * @tag wje-infinite-scroll
 */

export default class InfiniteScroll extends WJElement {
    #drawnItems;
    #loadedItems;
    #response;
    #infiniteScrollTemplate;
    #abortController;
    #signal;
    #loading;
    /**
     * Creates an instance of InfiniteScroll.
     */
    constructor() {
        super();

        this.totalPages = 0;
        this.isLoading = [];
        this.#response = {};
        this.iterate = null;
        this.#infiniteScrollTemplate = null;
        this.#abortController = new AbortController();
        this.#signal = this.#abortController.signal;
        this.#drawnItems = [];
        this.#loadedItems = [];
        this.placementObj = this;
    }

    /**
     * Dependencies of the InfiniteScroll component.
     * @param value
     */
    set infiniteScrollTemplate(value) {
        this.#infiniteScrollTemplate = value;
    }

    /**
     * Getter for the infiniteScrollTemplate property.
     * @returns {null}
     */
    get infiniteScrollTemplate() {
        return this.#infiniteScrollTemplate;
    }

    /**
     * Dependencies of the InfiniteScroll component.
     * @param value
     */
    set response(value) {
        this.#response = value;
    }

    /**
     * Getter for the response property.
     * @returns {*|{}}
     */
    get response() {
        return this.#response;
    }

    /**
     * Dependencies of the InfiniteScroll component.
     * @param value
     */
    set objectName(value) {
        this.setAttribute('object-name', value);
    }

    get objectName() {
        return this.getAttribute('object-name') ?? 'data';
    }

    className = 'InfiniteScroll';

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
     * Prepares the component for updates before it is drawn.
     * This method handles the removal of templates for iteration, adjusts the height styling of the component,
     * and manages abort signals for loading operations.
     * @returns {void} No return value.
     */
    beforeDraw() {
        this.#loadedItems = [];
        this.#drawnItems = [];

        this.iterate = this.querySelector('[iterate]');

        if (this.iterate) {
            if (this.iterate.nodeName !== 'TEMPLATE') {
                console.error('The iterate attribute must be a template element');
                this.infiniteScrollTemplate = this.iterate?.outerHTML;
            } else {
                this.infiniteScrollTemplate = this.iterate?.innerHTML;
            }

            this.iterate?.remove(); // remove template
        }

        this.setAttribute('style', 'height: ' + this.height);

        // if this.#loading is not fulfilled then cancel the promise
        if (this.#signal) {
            this.#abortController.abort();
            this.#abortController = new AbortController();
            this.#signal = this.#abortController.signal;
        }
    }

    /**
     * Creates and returns a document fragment containing the structure for an infinite scroll component.
     * The structure includes native elements, slots for customization, and optional loading content.
     * @returns {DocumentFragment} The document fragment containing the component's DOM structure.
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement('div');
        native.classList.add('native-infinite-scroll');
        native.setAttribute('part', 'native-infinite-scroll');

        let slot = document.createElement('slot');

        let ending = document.createElement('slot');
        ending.setAttribute('name', 'ending');

        if (WjElementUtils.hasSlot(this, 'loader')) {
            let loading = document.createElement('div');
            loading.classList.add('loading');

            let loader = document.createElement('slot');
            loader.setAttribute('name', 'loader');

            loading.appendChild(loader);

            this.loadingEl = loading;

            fragment.appendChild(loading);
        }

        native.appendChild(slot);
        native.appendChild(ending);

        fragment.appendChild(native);

        this.endingEl = ending;

        return fragment;
    }

    /**
     * Called after the component has been drawn.
     */
    async afterDraw() {
        this.queryParams = this.queryParams || '';
        this.size = +this.size || 10;
        this.currentPage = 0;

        this.scrollEvent();
        this.#loading = this.loadPages(this.currentPage);
        await this.#loading;
    }

    /**
     * Attaches a scroll event listener to the current object.
     * The `scrollEvent` function binds the `onScroll` method to the 'scroll' event
     * of the current object. This enables handling of scroll events for
     * specific functionality such as updating UI elements, loading content dynamically,
     * or tracking user interaction with scrollable content.
     */
    scrollEvent = () => {
        this.addEventListener('scroll', this.onScroll);
    };

    /**
     * A function that removes the scroll event listener from the current context.
     * This function is used to unbind the `onScroll` event listener
     * from the `scroll` event of the current object. It ensures that
     * the scroll event no longer triggers the `onScroll` handler.
     * @function
     */
    unScrollEvent = () => {
        this.removeEventListener('scroll', this.onScroll);
    };

    /**
     * A scroll event handler function that checks the scroll position and triggers loading additional content
     * when the user scrolls near the bottom of the page.
     * Properties accessed:
     * - `scrollTop`: The number of pixels that the content of an element is scrolled vertically.
     * - `scrollHeight`: The total height of the element's content.
     * - `clientHeight`: The inner height of the element in pixels, including padding but excluding borders and scrollbars.
     * Conditions:
     * - Determines if the scroll position is within 300 pixels of the bottom of the element.
     * - Verifies that the current page number is less than or equal to the total number of pages.
     * - Checks if the current page is already in the loading state.
     * Actions:
     * - Increments the current page number when the conditions are met.
     * - Initiates loading for the next page by calling the `loadPages` function.
     * @param {Event} e The scroll event object.
     */
    onScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;

        if (
            scrollTop + clientHeight >= scrollHeight - 300 &&
            this.currentPage <= this.totalPages &&
            this.isLoading.includes(this.currentPage)
        ) {
            this.currentPage++;
            this.#loading = this.loadPages(this.currentPage);
        }
    };

    /**
     * Fetches the pages from the server.
     * @param {number} page The page number.
     * @returns {Promise<object>} The response from the server.
     */
    async getPages(page) {
        let hasParams = this.url?.includes('?');
        const response = await fetch(
            `${this.url}${hasParams ? '&' : '?'}page=${page}&size=${this.size}${this?.queryParams}`,
            {
                signal: this.#signal,
            }
        );

        if (!response.ok) {
            throw new Error(`An error occurred: ${response.status}`);
        }
        return await response.json();
    }

    /**
     * Hides the loader.
     */
    hideLoader() {
        this?.loadingEl?.classList.remove('show');
    }

    /**
     * Displays the loader element by adding the 'show' class to its class list.
     * This method is useful for indicating a loading or processing state in the UI.
     * @returns {void} No return value.
     */
    showLoader() {
        this?.loadingEl?.classList.add('show');
    }

    /**
     * Checks if there are more pages to load.
     * @param {number} page The page number.
     * @returns {boolean} Whether there are more pages to load.
     */
    hasMorePages(page) {
        return this.totalPages === 0 || page < this.totalPages;
    }

    /**
     * Loads the pages.
     * @param {number} page The page number.
     */
    async loadPages(page) {
        this.showLoader();
        try {
            event.dispatchCustomEvent(this, 'wje-infinite-scroll:start');
            if (this.hasMorePages(page)) {
                let response;
                this.parser = new DOMParser();

                if (typeof this.setCustomData === 'function') {
                    response = await this.setCustomData(page, this.#signal);
                } else {
                    response = await this.getPages(page);
                }

                this.totalPages = Number(response?.totalPages ?? 0);
                this.currentPage = page;

                this.placementObj = this;

                // if there is a "container" attribute, find the element
                if (this.hasAttribute('placement')) this.placementObj = this.querySelector(this.placement);

                event.dispatchCustomEvent(this, 'wje-infinite-scroll:load', response);

                this.response = response;

                // Normalize items: support array responses and common paged formats.
                let items;
                if (Array.isArray(response)) {
                    items = response;
                } else if (this.objectName && Array.isArray(response?.[this.objectName])) {
                    items = response[this.objectName];
                } else if (Array.isArray(response?.content)) {
                    // common Spring pageable style
                    items = response.content;
                } else {
                    items = [];
                }

                this.#loadedItems = items;

                const notDrawnItems = this.#loadedItems.filter(
                    (item) => !this.#drawnItems.some(this.compareFunction.bind(this, item))
                );
                this.customForeach(notDrawnItems);
                this.#drawnItems.push(...notDrawnItems);

                this.isLoading.push(page);
                event.dispatchCustomEvent(this, 'wje-infinite-scroll:finish', response);
            } else {
                event.dispatchCustomEvent(this, 'wje-infinite-scroll:complete');
                this.endingEl.classList.add('show');
            }
        } catch (error) {
            console.error(error);
        } finally {
            this.hideLoader();
        }
    }

    compareFunction = (i, item) => i.id === item.id;

    /**
     * Converts a data item into an HTML element based on a template.
     * This function takes a data item, interpolates it into a predefined template,
     * parses the resulting HTML string, and returns the first child element of the parsed HTML content.
     * @param {object} item The data object to interpolate into the HTML template.
     * @returns {Element} The first child element generated from the interpolated HTML string.
     */
    dataToHtml = (item) => {
        let interpolateItem = this.interpolate(this.infiniteScrollTemplate, item);
        let doc = this.parser.parseFromString(interpolateItem, 'text/html');
        let element = doc.activeElement.firstElementChild;

        return element;
    };

    /**
     * A custom implementation of the forEach method designed to iterate over an array of data,
     * transform each item into an HTML element, and append the element to a specified placement object.
     * Additionally, it adds an event listener to each generated element for handling click events.
     * @param {Array} data An array of items to process. Each item is transformed into an HTML element
     * and appended to the placement object specified in the context of `this`.
     */
    customForeach = (data) => {
        data.forEach((item) => {
            let element = this.dataToHtml(item);

            let symbol = Symbol("infinite-scroll-item");
            element[symbol] = item;
            item[symbol] = element;

            event.addListener(element, 'click', 'wje-infinite-scroll:click-item', null);

            this.placementObj.insertAdjacentElement('beforeend', element);
        });
    };

    /**
     * Interpolates a string template with values from the provided parameters object.
     * The template contains placeholders in the format `{{key}}` or `{{key.subkey}}`,
     * which are replaced with the corresponding values from the `params` object.
     * Placeholders support dot notation for accessing nested properties within the `params` object.
     * @param {string} template The string template containing placeholders to be replaced.
     * @param {object} params The object containing key-value pairs used for substitution in the template.
     * @returns {string} A string with all placeholders replaced by their respective values from the `params` object.
     */
    interpolate = (template, params) => {
        let keys = template.match(/\{{.*?\}}/g);

        if (keys) {
            for (let key of keys) {
                let cleanKey = key.replace('{{', '').replace('}}', '');
                let val = '';
                cleanKey.split('.').forEach((k) => {
                    val = val === '' ? params[k] : val[k];
                });

                template = template.replace(key, val);
            }
        }
        return template;
    };

    addItem(item, place = 'beforeend') {
        let element = this.dataToHtml(item);

        let symbol = Symbol("infinite-scroll-item");
        element[symbol] = item;
        item[symbol] = element;

        this.placementObj.insertAdjacentElement(place, element);

        this.#drawnItems.push(item);

        // if drawnItems are more than page * size then add the page to isLoading
        if (this.#drawnItems.length > this.size * this.currentPage) {
            this.totalPages += 1;
        }
    }

    removeItem(item) {
        let drawnItem = this.#drawnItems.find(this.compareFunction.bind(this, item));
        if (!drawnItem) {
            console.error('Item not found');
            return;
        }
        let symbol = Object.getOwnPropertySymbols(drawnItem).at(0);
        let element = drawnItem[symbol];
        if (!element) {
            console.error('Element not found');
            return;
        }

        element?.remove();

        this.#drawnItems = this.#drawnItems.filter((i) => i !== item);
        // if drawnItems are less than page * size then remove the page from isLoading
        if (this.#drawnItems.length < this.size * this.currentPage) {
            this.isLoading = this.isLoading.filter((i) => i !== this.currentPage);
            this.currentPage--;
        }
    }

    reset() {
        this.isLoading = [];
        this.currentPage = 0;
        this.totalPages = 0;
        this.response = {};
        this.#drawnItems = [];
        this.#loadedItems = [];
        this.placementObj.innerHTML = '';
    }
}
