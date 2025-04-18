import { default as WJElement, event } from '../wje-element/element.js';
import InfiniteScroll from '../wje-infinite-scroll/infinite-scroll.element.js';
import List from '../wje-list/list.element.js';
import Option from '../wje-option/option.js';

/**
 * `Options` is a custom web component that represents a set of options.
 * It extends from `WJElement`.
 * @summary This element represents a set of options.
 * @documentation https://elements.webjet.sk/components/options
 * @status stable
 * @augments {WJElement}
 * // @fires wje-options:load - Event fired when the options are loaded.
 * @tag wje-options
 */
export default class Options extends WJElement {
    /**
     * Stores the loaded options.
     * @type {Array}
     * @private
     */
    #loadedOptions = [];

    #drawPreloadedElements = []

    /**
     * Creates an instance of Options.
     * @class
     */
    constructor() {
        super();
    }

    dependencies = {
        'wje-option': Option,
        'wje-infinite-scroll': InfiniteScroll,
        'wje-list': List,
    };

    className = 'Options';

    /**
     * Returns the list of attributes to observe for changes.
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes() {
        return ['search', 'attached'];
    }

    /**
     * Sets the option array path attribute.
     * @param {string} value The value to set for the option array path.
     */
    set optionArrayPath(value) {
        this.setAttribute('option-array-path', value);
    }

    /**
     * Gets the option array path attribute.
     * @returns {string} The value of the option array path attribute or "data" if not set.
     */
    get optionArrayPath() {
        return this.getAttribute('option-array-path');
    }

    /**
     * Checks if the option array path attribute is present.
     * @returns {boolean} True if the option array path attribute is present, false otherwise.
     */
    get hasOptionArrayPath() {
        return this.hasAttribute('option-array-path');
    }

    /**
     * Gets the dropdown height attribute.
     * @returns {string} The value of the dropdown height attribute or "100%" if not set.
     */
    get dropdownHeight() {
        return this.getAttribute('dropdown-height') || '100%';
    }

    /**
     * Sets the dropdown height attribute.
     * @param {string} value The value to set for the dropdown height.
     */
    set dropdownHeight(value) {
        this.setAttribute('dropdown-height', value);
    }

    /**
     * Sets the item value attribute.
     * @param {string} value The value to set for the item value.
     */
    set itemValue(value) {
        this.setAttribute('item-value', value);
    }

    /**
     * Gets the item value attribute.
     * @returns {string} The value of the item value attribute or "value" if not set.
     */
    get itemValue() {
        return this.getAttribute('item-value') || 'value';
    }

    /**
     * Sets the item text attribute.
     * @param {string} value The value to set for the item text.
     */
    set itemText(value) {
        this.setAttribute('item-text', value);
    }

    /**
     * Gets the item text attribute.
     * @returns {string} The value of the item text attribute or "text" if not set.
     */
    get itemText() {
        return this.getAttribute('item-text') || 'text';
    }

    /**
     * Gets the lazy load size attribute.
     * @returns {number} The value of the lazy load size attribute or 10 if not set.
     */
    get lazyLoadSize() {
        return this.getAttribute('lazy-load-size') || 10;
    }

    /**
     * Sets the lazy load size attribute.
     * @param {number} value The value to set for the lazy load size.
     */
    set lazyLoadSize(value) {
        this.setAttribute('lazy-load-size', value);
    }

    /**
     * Sets the search attribute.
     * @param {string} value The value to set for the search.
     */
    set search(value) {
        this.setAttribute('search', value);
    }

    /**
     * Gets the search attribute.
     * @returns {string} The value of the search attribute.
     */
    get search() {
        return this.getAttribute('search');
    }

    /**
     * Checks if the search attribute is present.
     * @returns {boolean} True if the search attribute is present, false otherwise.
     */
    get hasSearch() {
        return this.hasAttribute('search');
    }

    /**
     * Retrieves the value of the 'search-to-query-params' attribute from the current instance.
     * @returns {string | null} The value of the 'search-to-query-params' attribute, or null if the attribute is not set.
     */
    get searchToQueryParams() {
        return this.getAttribute('search-to-query-params');
    }

    /**
     * Sets the value to define search-to-query params behavior.
     * @param {string} value The value to be set for the search-to-query-params attribute.
     */
    set searchToQueryParams(value) {
        this.setAttribute('search-to-query-params', value);
    }

    /**
     * Determines whether the 'search-to-query-params' attribute is present on the element.
     * @returns {boolean} True if the 'search-to-query-params' attribute exists, otherwise false.
     */
    get hasSearchToQueryParams() {
        return this.hasAttribute('search-to-query-params');
    }

    /**
     * Sets the value of the search parameter name attribute.
     * @param {string} value The string value to set as the search parameter name.
     */
    set searchParamName(value) {
        this.setAttribute('search-param-name', value);
    }

    /**
     * Gets the search parameter name used in queries.
     * Retrieves the value of the 'search-param-name' attribute.
     * If the attribute is not set, it defaults to 'search'.
     * @returns {string} The search parameter name used for queries.
     */
    get searchParamName() {
        return this.getAttribute('search-param-name') || 'search';
    }
    /**
     * Checks if the lazy attribute is present.
     * @returns {boolean} True if the lazy attribute is present, false otherwise.
     */
    get lazy() {
        return this.hasAttribute('lazy');
    }

    /**
     * Sets the lazy attribute.
     * @param {boolean} value The value to set for the lazy attribute.
     */
    set lazy(value) {
        this.setAttribute('lazy', value);
    }

    /**
     * Gets the loaded options.
     * @returns {Array} The loaded options.
     */
    get options() {
        return this.loadedOptions?.flat();
    }

    /**
     * Gets the loaded options.
     * @type {Array}
     */
    get loadedOptions() {
        return this.#loadedOptions;
    }

    /**
     * Sets the loaded options.
     * @type {Array}
     */
    set loadedOptions(loadedOptions) {
        this.#loadedOptions = loadedOptions;
    }

    /**
     * Array of preloaded elements.
     * @type {Array}
     * @private
     */
    get drawPreloadedElements() {
        return this.#drawPreloadedElements;
    }

    set drawPreloadedElements(elements) {
        this.#drawPreloadedElements = elements;
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
    }

    /**
     * Prepares the component before drawing.
     * Fetches the pages and creates the options elements.
     */
    afterDraw() {
        // event.dispatchCustomEvent(this, 'wje-options:load', {}); // nepomohlo to, v ff stale je scroll hore
    }

    /**
     * Draws the component.
     * @returns {DocumentFragment}
     */
    async draw() {
        let fragment = document.createDocumentFragment();

        const slot = document.createElement('slot');
        fragment.appendChild(slot);

        if (this.hasAttribute('lazy')) {

            if (this.contains(this.infiniteScroll)) {
                this.drawPreloadedElements.forEach((el) => { el.remove() });
                this.loadedOptions = [];
                this.infiniteScroll.placementObj.innerHTML = '';
                this.infiniteScroll.totalPages = 0;
                this.infiniteScroll.refresh();

                return fragment;
            }

            const infiniteScroll = document.createElement('wje-infinite-scroll');
            infiniteScroll.setAttribute('placement', 'wje-list');
            infiniteScroll.setAttribute('height', this.dropdownHeight);
            infiniteScroll.setAttribute('object-name', this.optionArrayPath);

            const list = document.createElement('wje-list');
            infiniteScroll.append(list);

            infiniteScroll.dataToHtml = this.htmlItem;

            infiniteScroll.setCustomData = async (page, signal) => {
                let processedUrl = `${this.url}${this.search ? `/${this.search}` : ''}?page=${page}&size=${this.lazyLoadSize}`;

                if (this.hasSearchToQueryParams) {
                    processedUrl = `${this.url}?page=${page}&size=${this.lazyLoadSize}${this.search ? `&${this.searchParamName}=${this.search}` : ''}`;
                }

                let res = await this.service.get(processedUrl, null, false, signal);
                const filteredOptions = this.filterOutDrawnOptions(res);
                this.loadedOptions.push(...this.processData(filteredOptions));

                return filteredOptions;
            };

            event.addListener(infiniteScroll, 'wje-infinite-scroll:load', null, (e) => {
                event.dispatchCustomEvent(this, 'wje-options:load', {});
            });

            if (this.hasAttribute('attached')) {
                this.appendChild(infiniteScroll);
                this.drawPreloadedElements.forEach((el) => {
                    list.appendChild(el);
                })
            }

            this.infiniteScroll = infiniteScroll;

        } else {
            this.response = await this.getPages();
            let optionsData = this.filterOutDrawnOptions(this.response);
            optionsData = this.processData(optionsData);

            this.loadedOptions.push(...optionsData);

            this.append(...optionsData.map(this.htmlItem));
        }

        return fragment;
    }

    /**
     * Processes the given data and returns the options based on the option array path.
     * @param {any} data The data to be processed.
     * @returns {any} - The options based on the option array path.
     */
    processData(data) {
        const splittedOptionArrayPath = this.optionArrayPath ? this.optionArrayPath?.split('.') : null;
        let options = data;

        splittedOptionArrayPath?.forEach((path) => {
            options = options[path];
        });

        return options ?? [];
    }

    /**
     * Filters out drawn options from the response.
     * @param {object | null} response The response to filter.
     * @returns {object} The filtered response.
     */
    filterOutDrawnOptions(response) {
        const splittedOptionArrayPath = this.optionArrayPath ? this.optionArrayPath?.split('.') : [];
        let filteredResponse = structuredClone(response);

        filteredResponse = this.recursiveUpdate(filteredResponse, splittedOptionArrayPath);
        return filteredResponse;
    }

    /**
     * Recursively updates the object based on the provided path to the property.
     * @param {object | Array | null} object
     * @param {Array<string> | null} pathToProperty
     * @returns {object | Array | null}
     */
    recursiveUpdate = (object, pathToProperty) => {
        if (pathToProperty.length === 0) {
            if (Array.isArray(object)) {
                return object.filter(
                    (option) =>
                        !this.loadedOptions.some(
                            (loadedOption) => loadedOption[this.itemValue] === option[this.itemValue]
                        )
                );
            } else {
                console.error('Expected an array but got:', object, pathToProperty);
                return [];
            }
        }

        const [currentPath, ...remainingPath] = pathToProperty;
        if (remainingPath.length > 0) {
            object[currentPath] = this.recursiveUpdate(object[currentPath], remainingPath);
        } else {
            object[currentPath] =
                object[currentPath]?.filter(
                    (option) =>
                        !this.loadedOptions.some(
                            (loadedOption) => loadedOption[this.itemValue] === option[this.itemValue]
                        )
                ) ?? [];
        }
        return object;
    };

    /**
     * Generates an HTML option element based on the provided item.
     * @param {object} item The item to generate the option element for.
     * @returns {HTMLElement} The generated option element.
     */
    htmlItem = (item) => {
        let option = document.createElement('wje-option');

        if (item[this.itemValue] === null || item[this.itemValue] === undefined) {
            console.warn(`The item ${JSON.stringify(item)} does not have the property ${this.itemValue}`);
        }

        if (item[this.itemText] === null || item[this.itemText] === undefined) {
            console.warn(`The item ${JSON.stringify(item)} does not have the property ${this.itemText}`);
        }

        option.setAttribute('value', item[this.itemValue] ?? '');
        option.innerText = item[this.itemText] ?? '';

        return option;
    };

    /**
     * Fetches the pages from the provided URL.
     * @param {number} page The page number to fetch.
     * @returns {Promise<object>} The fetched data.
     * @throws Will throw an error if the response is not ok.
     */
    async getPages(page) {
        const response = await fetch(this.url);
        if (!response.ok) {
            throw new Error(`An error occurred: ${response.status}`);
        }
        return await response.json();
    }

    /**
     * Finds the selected option data based on the given selected option values.
     * @param {Array} selectedOptionValues The array of selected option values.
     * @returns {Array} - The array of option data that matches the selected option values.
     */
    findSelectedOptionData(selectedOptionValues = []) {
        return this.options.filter((option) => selectedOptionValues.includes(option[this.itemValue]));
    }

    /**
     * Adds an option to the element.
     * @param {object} optionData The data of the option to be added.
     */
    addOption(optionData) {
        if (this.loadedOptions.some((option) => option[this.itemValue] === optionData[this.itemValue])) {
            return;
        }

        const item = this.htmlItem(optionData);
        this.#drawPreloadedElements.push(item);
        this.prepend(item);
        this.loadedOptions.push(optionData);
    }

    /**
     * Adds options to the element.
     * @param {Array} optionsData The array of option data to be added.
     * @param {boolean} [silent] Whether to suppress events triggered by adding options.
     */
    addOptions(optionsData = [], silent = false) {
        if (Array.isArray(optionsData)) optionsData?.forEach((od) => this.addOption(od, silent));
        else this.addOption(optionsData, silent);
    }
}
