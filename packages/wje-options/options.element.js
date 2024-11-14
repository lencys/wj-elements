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
        return this.getAttribute("option-array-path");
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
        return this.loadedOptions?.flat();
    }

    get loadedOptions() {
        return this._loadedOptions
    }

    set loadedOption(loadedOptions) {
        this._loadedOptions = loadedOptions
    }

    /**
     * Lifecycle method, called whenever an observed property changes
     */
    attributeChangedCallback(name, oldValue, newValue) {
        // remove all loaded options 
        if (this.infiniteScroll && name === "search" && oldValue !== newValue) {
            this.loadedOptions = [];
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
    beforeDraw() {
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
                this.loadedOptions.push(...this.processData(filteredOptions))

                return filteredOptions;
            }

            if (!this.contains(infiniteScroll)) {
                this.appendChild(infiniteScroll);
            }

            this.infiniteScroll = infiniteScroll;
        } else {
            this.response = await this.getPages();
            let optionsData = this.filterOutDrawnOptions(this.response);
            optionsData = this.processData(optionsData);

            this.loadedOptions.push(...optionsData);

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
     * @param {Object | null} response - The response to filter.
     * @returns {Object} - The filtered response.
     */
    filterOutDrawnOptions(response) {
        const splittedOptionArrayPath = this.optionArrayPath ? this.optionArrayPath?.split(".") : [];
        let filteredResponse = structuredClone(response);

        filteredResponse = this.recursiveUpdate(filteredResponse, splittedOptionArrayPath);
        return filteredResponse;
    }

    /**
     * 
     * @param {Object | Array | null} object 
     * @param {Array<string> | null} pathToProperty 
     * @returns  {Object | Array | null}
     */
    recursiveUpdate = (object, pathToProperty) => {
        if (pathToProperty.length === 0) {
            return object.filter(option => !this.loadedOptions.some(loadedOption => loadedOption[this.itemValue] === option[this.itemValue]));
        }

        const [currentPath, ...remainingPath] = pathToProperty;
        if (remainingPath.length > 0) {
            object[currentPath] = this.recursiveUpdate(object[currentPath], remainingPath);
        } else {
            object[currentPath] = object[currentPath]?.filter(option => !this.loadedOptions.some(loadedOption => loadedOption[this.itemValue] === option[this.itemValue])) ?? [];
        }
        return object;
    }

    /**
     * Generates an HTML option element based on the provided item.
     * 
     * @param {Object} item - The item to generate the option element for.
     * @returns {HTMLElement} The generated option element.
     */
    htmlItem = (item) => {
        let option = document.createElement("wje-option");

        if (item[this.itemValue] === null || item[this.itemValue] === undefined) {
            console.warn(`The item ${JSON.stringify(item)} does not have the property ${this.itemValue}`);
        }

        if (item[this.itemText] === null || item[this.itemText] === undefined) {
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
        if (this.loadedOptions.some(option => option[this.itemValue] === optionData[this.itemValue])) {
            return;
        }

        this.prepend(this.htmlItem(optionData));
        this.loadedOptions.push(optionData);
    }

    /**
     * Adds options to the element.
     * 
     * @param {Array} optionsData - The array of option data to be added.
     * @param {boolean} [silent=false] - Whether to suppress events triggered by adding options.
     */
    addOptions(optionsData = [], silent = false) {
        if (Array.isArray(optionsData))
            optionsData?.forEach(od => this.addOption(od, silent));
        else
            this.addOption(optionsData, silent);
    }
}