import { default as WJElement, event } from "../wje-element/element.js";
import InfiniteScroll from "../wje-infinite-scroll/infinite-scroll.element.js";
import List from "../wje-list/list.element.js";
import Option from "../wje-option/option.js";


/**
 * `Options` is a custom web component that represents a set of options.
 * It extends from `WJElement`.
 * @summary This element represents a set of options.
 * @documentation https://elements.webjet.sk/components/options
 * @status stable
 *
 * @extends {WJElement}
 *
 * @fires wje-options:load - Event fired when the options are loaded.
 *
 * @tag wje-options
 */
export default class Options extends WJElement {
    /**
     * Creates an instance of Options.
     *
     * @constructor
     */
    constructor() {
        super();

        this._loadedOptions = [];

    }

    dependencies = {
        "wje-option": Option,
        "wje-infinite-scroll": InfiniteScroll,
        "wje-list": List
    }

    className = "Options";

    /**
     * Returns the list of attributes to observe for changes.
     *
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes() {
        return ['search'];
    }

    set optionArrayPath(value) {
        this.setAttribute("option-array-path", value);
    }

    get optionArrayPath() {
        return this.getAttribute("option-array-path") ?? "data";
    }

    get hasOptionArrayPath() {
        return this.hasAttribute("option-array-path");
    }

    get dropdownHeight() {
        return this.getAttribute("dropdown-height") || "100%";
    }

    set dropdownHeight(value) {
        this.setAttribute("dropdown-height", value);
    }

    set itemValue(value) {
        this.setAttribute("item-value", value);
    }

    get itemValue() {
        return this.getAttribute("item-value") || "value";
    }

    set itemText(value) {
        this.setAttribute("item-text", value);
    }

    get itemText() {
        return this.getAttribute("item-text") || "text";
    }

    get lazyLoadSize() {
        return this.getAttribute("lazy-load-size") || 10;
    }

    set lazyLoadSize(value) {
        this.setAttribute("lazy-load-size", value);
    }

    set search(value) {
        this.setAttribute("search", value);
    }

    get search() {
        return this.getAttribute("search");
    }

    get hasSearch() {
        return this.hasAttribute("search");
    }

    get lazy() {
        return this.hasAttribute("lazy");
    }

    set lazy(value) {
        this.setAttribute("lazy", value);
    }

    get options() {
        return this._loadedOptions?.flat();
    }

    /**
     * Lifecycle method, called whenever an observed property changes
     */
    attributeChangedCallback(name, oldValue, newValue) {
        // remove all loaded options 
        if (this.infiniteScroll && name === "search" && oldValue !== newValue) {
            this._loadedOptions = [];
            this.infiniteScroll.placementObj.innerHTML = "";
            this.infiniteScroll.totalPages = 0
            this.infiniteScroll.refresh();
        }
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Prepares the component before drawing.
     * Fetches the pages and creates the options elements.
     */
    async beforeDraw() {
        event.dispatchCustomEvent(this, "wje-options:load", {}); // nepomohlo to, v ff stale je scroll hore
    }

    /**
     * Draws the component.
     *
     * @param {Object} context - The context for drawing.
     * @param {Object} store - The store for drawing.
     * @param {Object} params - The parameters for drawing.
     * @returns {DocumentFragment}
     */
    async draw() {
        let fragment = document.createDocumentFragment();

        const slot = document.createElement('slot')

        if (this.hasAttribute('lazy')) {
            const list = document.createElement('wje-list');

            const infiniteScroll = document.createElement('wje-infinite-scroll');
            infiniteScroll.setAttribute('placement', 'wje-list');
            infiniteScroll.setAttribute('height', this.dropdownHeight);
            infiniteScroll.setAttribute('object-name', this.optionArrayPath);
            infiniteScroll.append(list);

            infiniteScroll.dataToHtml = this.htmlItem;

            infiniteScroll.setCustomData = async (page, signal) => {
                let res = await this.service.get(`${this.url}${this.search ? `/${this.search}` : ''}?page=${page}&size=${this.lazyLoadSize}`, null, false, signal);

                const filteredOptions = this.filterOutDrawnOptions(res);
                this._loadedOptions.push(...this.processData(filteredOptions))

                return filteredOptions;
            }

            this.contains(infiniteScroll) || this.appendChild(infiniteScroll);

            this.infiniteScroll = infiniteScroll;
        } else {
            this.response = await this.getPages();
            let optionsData = this.filterOutDrawnOptions(this.response);
            optionsData = this.processData(optionsData);

            this._loadedOptions.push(...optionsData);

            this.append(...optionsData.map(this.htmlItem))
        }

        fragment.appendChild(slot);

        return fragment;
    }

    /**
     * Processes the given data and returns the options based on the option array path.
     * 
     * @param {any} data - The data to be processed.
     * @returns {any} - The options based on the option array path.
     */
    processData(data) {
        const splittedOptionArrayPath = this.optionArrayPath ? this.optionArrayPath?.split(".") : null;
        let options = data;

        splittedOptionArrayPath?.forEach((path) => {
            options = options[path];
        });

        return options ?? [];
    }

    /**
     * Filters out drawn options from the response.
     * 
     * @param {any} response - The response to filter.
     * @returns {any} - The filtered response.
     */
    filterOutDrawnOptions(response) {
        const splittedOptionArrayPath = this.optionArrayPath ? this.optionArrayPath?.split(".") : [];
        let filteredResponse = structuredClone(response);

        const recursiveUpdate = (object, pathToProperty) => {
            if (pathToProperty.length === 0) {
                return object.filter(option => !this._loadedOptions.some(loadedOption => loadedOption[this.itemValue] === option[this.itemValue]));
            }

            if (pathToProperty.length > 1) {
                object[pathToProperty[0]] = recursiveUpdate(object[pathToProperty[0]], pathToProperty.slice(1));
                return object;
            }

            object[pathToProperty[0]] = object[pathToProperty[0]]?.filter(option => !this._loadedOptions.some(loadedOption => loadedOption[this.itemValue] === option[this.itemValue])) ?? [];
            return object;
        }

        filteredResponse = recursiveUpdate(filteredResponse, splittedOptionArrayPath);
        return filteredResponse;
    }

    /**
     * Generates an HTML option element based on the provided item.
     * 
     * @param {Object} item - The item to generate the option element for.
     * @returns {HTMLElement} The generated option element.
     */
    htmlItem = (item) => {
        let option = document.createElement("wje-option");

        if (item[this.itemValue] == null) {
            console.warn(`The item ${JSON.stringify(item)} does not have the property ${this.itemValue}`);
        }

        if (item[this.itemText] == null) {
            console.warn(`The item ${JSON.stringify(item)} does not have the property ${this.itemText}`);
        }

        option.setAttribute("value", item[this.itemValue] ?? '');
        option.innerText = item[this.itemText] ?? '';

        return option;
    }

    /**
     * Fetches the pages from the provided URL.
     *
     * @param {number} page - The page number to fetch.
     * @returns {Promise<Object>} The fetched data.
     * @throws Will throw an error if the response is not ok.
     */
    async getPages(page) {
        const response = await fetch(this.url);
        if (!response.ok) {
            throw new Error(`An error occurred: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }

    /**
     * Finds the selected option data based on the given selected option values.
     *
     * @param {Array} selectedOptionValues - The array of selected option values.
     * @returns {Array} - The array of option data that matches the selected option values.
     */
    findSelectedOptionData(selectedOptionValues = []) {
        return this.options.filter(option => selectedOptionValues.includes(option[this.itemValue]));
    }

    /**
     * Adds an option to the element.
     * 
     * @param {Object} optionData - The data of the option to be added.
     */
    addOption(optionData) {
        if (this._loadedOptions.some(option => option[this.itemValue] === optionData[this.itemValue])) {
            return;
        }

        this.appendChild(this.htmlItem(optionData));
        this._loadedOptions.push(optionData);
    }

    /**
     * Adds options to the element.
     * 
     * @param {Array} optionsData - The array of option data to be added.
     * @param {boolean} [silent=false] - Whether to suppress events triggered by adding options.
     */
    addOptions(optionsData = [], silent = false) {
        Array.isArray(optionsData) ? optionsData?.forEach(optionData => this.addOption(optionData, silent)) : this.addOption(optionsData, silent);
    }
}