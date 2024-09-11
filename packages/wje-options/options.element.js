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

    /**
     * Lifecycle method, called whenever an observed property changes
     */
    attributeChangedCallback(name, old, newName) {
        // remove all loaded options 
        if (this.infiniteScroll) {
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

    async draw() {
        let fragment = document.createDocumentFragment();

        const slot = document.createElement('slot')

        if (this.hasAttribute('lazy')) {
            const list = document.createElement('wje-list');

            const infiniteScroll = document.createElement('wje-infinite-scroll');
            infiniteScroll.setAttribute('placement', 'wje-list');
            infiniteScroll.setAttribute('height', '100%');
            infiniteScroll.setAttribute('object-name', this.optionArrayPath);
            infiniteScroll.append(list);

            infiniteScroll.dataToHtml = this.htmlItem;

            infiniteScroll.setCustomData = async (page, signal) => {
                let res = await this.service.get(`${this.url}${this.search ? `/${this.search}` : ''}?page=${page}&size=${this.lazyLoadSize}`, null, false, signal);

                return res;
            }

            this.contains(infiniteScroll) || this.appendChild(infiniteScroll);

            this.infiniteScroll = infiniteScroll;
        } else {
            this.response = await this.getPages();
            this.append(...this.processData(this.response).map(this.htmlItem))
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
        const splittedOptionArrayPath = this.optionArrayPath?.split(".");
        let options = data;
        splittedOptionArrayPath?.forEach((path) => {
            options = options[path];
        });

        return options;
    }

    /**
     * Generates an HTML option element based on the provided item.
     * 
     * @param {Object} item - The item to generate the option element for.
     * @returns {HTMLElement} The generated option element.
     */
    htmlItem = (item) => {
        let option = document.createElement("wje-option");
        option.setAttribute("value", item[this.itemValue] || item.value); // ak je itemValue, tak ho pouzije, inak sa pouzije standardne properties value
        option.innerText = item[this.itemText] || item.text; // ak je itemText, tak ho pouzije, inak sa pouzije standardne properties text
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
}