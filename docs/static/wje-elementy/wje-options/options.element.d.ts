import { default as WJElement } from '../wje-element/element.js';
import { default as Option } from '../wje-option/option.js';
import { default as InfiniteScroll } from '../wje-infinite-scroll/infinite-scroll.js';
import { default as List } from '../wje-list/list.js';
/**
 * `Options` is a custom web component that represents a set of options. It extends from `WJElement`.
 * @summary This element represents a set of options.
 * @documentation https://elements.webjet.sk/components/options
 * @status stable
 * @tag wje-options
 */
export default class Options extends WJElement {
    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet} The CSS styles for the component.
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Retrieves an array of attributes that should be observed for changes.
     * The method returns a list of attribute names that the browser will monitor for changes.
     * @returns {Array<string>} An array of attribute names to observe.
     */
    static get observedAttributes(): Array<string>;
    dependencies: {
        'wje-option': typeof Option;
        'wje-infinite-scroll': typeof InfiniteScroll;
        'wje-list': typeof List;
    };
    /**
     * Sets the option array path attribute.
     * @param {string} value The value to set for the option array path.
     */
    set optionArrayPath(value: string);
    /**
     * Gets the option array path attribute.
     * @returns {string} The value of the option array path attribute or "data" if not set.
     */
    get optionArrayPath(): string;
    /**
     * Checks if the option array path attribute is present.
     * @returns {boolean} True if the option array path attribute is present, false otherwise.
     */
    get hasOptionArrayPath(): boolean;
    /**
     * Sets the dropdown height attribute.
     * @param {string} value The value to set for the dropdown height.
     */
    set dropdownHeight(value: string);
    /**
     * Gets the dropdown height attribute.
     * @returns {string} The value of the dropdown height attribute or "100%" if not set.
     */
    get dropdownHeight(): string;
    /**
     * Sets the item value attribute.
     * @param {string} value The value to set for the item value.
     */
    set itemValue(value: string);
    /**
     * Gets the item value attribute.
     * @returns {string} The value of the item value attribute or "value" if not set.
     */
    get itemValue(): string;
    /**
     * Sets the item text attribute.
     * @param {string} value The value to set for the item text.
     */
    set itemText(value: string);
    /**
     * Gets the item text attribute.
     * @returns {string} The value of the item text attribute or "text" if not set.
     */
    get itemText(): string;
    /**
     * Sets the lazy load size attribute.
     * @param {number} value The value to set for the lazy load size.
     */
    set lazyLoadSize(value: number);
    /**
     * Gets the lazy load size attribute.
     * @returns {number} The value of the lazy load size attribute or 10 if not set.
     */
    get lazyLoadSize(): number;
    /**
     * Sets the search attribute.
     * @param {string} value The value to set for the search.
     */
    set search(value: string);
    /**
     * Gets the search attribute.
     * @returns {string} The value of the search attribute.
     */
    get search(): string;
    /**
     * Checks if the search attribute is present.
     * @returns {boolean} True if the search attribute is present, false otherwise.
     */
    get hasSearch(): boolean;
    /**
     * Sets the value to define search-to-query params behavior.
     * @param {string} value The value to be set for the search-to-query-params attribute.
     */
    set searchToQueryParams(value: string);
    /**
     * Retrieves the value of the 'search-to-query-params' attribute from the current instance.
     * @returns {string | null} The value of the 'search-to-query-params' attribute, or null if the attribute is not set.
     */
    get searchToQueryParams(): string | null;
    /**
     * Determines whether the 'search-to-query-params' attribute is present on the element.
     * @returns {boolean} True if the 'search-to-query-params' attribute exists, otherwise false.
     */
    get hasSearchToQueryParams(): boolean;
    /**
     * Sets the value of the search parameter name attribute.
     * @param {string} value The string value to set as the search parameter name.
     */
    set searchParamName(value: string);
    /**
     * Gets the search parameter name used in queries.
     * Retrieves the value of the 'search-param-name' attribute.
     * If the attribute is not set, it defaults to 'search'.
     * @returns {string} The search parameter name used for queries.
     */
    get searchParamName(): string;
    /**
     * Sets the queryParams attribute on the element.
     * @param {string} value The query parameters to set, represented as a string.
     */
    set queryParams(value: string);
    /**
     * Retrieves the value of the 'query-params' attribute.
     * @returns {string | null} The value of the 'query-params' attribute, or null if the attribute is not set.
     */
    get queryParams(): string | null;
    /**
     * Sets the lazy attribute.
     * @param {boolean} value The value to set for the lazy attribute.
     */
    set lazy(value: boolean);
    /**
     * Checks if the lazy attribute is present.
     * @returns {boolean} True if the lazy attribute is present, false otherwise.
     */
    get lazy(): boolean;
    /**
     * Gets the loaded options.
     * @returns {Array} The loaded options.
     */
    get options(): any[];
    /**
     * Sets the loaded options.
     * @type {Array}
     */
    set loadedOptions(loadedOptions: any[]);
    /**
     * Gets the loaded options.
     * @type {Array}
     */
    get loadedOptions(): any[];
    /**
     * Sets the elements that are preloaded and ready to be drawn.
     * @param {Array|object} elements The elements to be set for preloading. This can be an array or a specific object containing drawable elements.
     */
    private set drawPreloadedElements(elements);
    /**
     * Array of preloaded elements.
     * @type {Array}
     * @private
     */
    private get drawPreloadedElements();
    /**
     * Draws the component.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
    infiniteScroll: HTMLElement;
    response: any;
    /**
     * Syncs ARIA attributes on the host element.
     */
    syncAria(): void;
    afterDraw(): void;
    dispatchOptionsLoadEvent: (e: any) => void;
    /**
     * Processes the provided data based on the optional array path set in the instance.
     * @param {object} data The input data to be processed.
     * @returns {Array} The resolved options array from the data or an empty array if no match is found.
     */
    processData(data: object): any[];
    /**
     * Filters out options from the response object that have already been drawn, based on the specified option array path.
     * @param {object} response The response object containing data to process.
     * @returns {object} The filtered response object with drawn options removed.
     */
    filterOutDrawnOptions(response: object): object;
    /**
     * Recursively updates the object based on the provided path to the property.
     * @param {object | Array | null} object
     * @param {Array<string> | null} pathToProperty
     * @returns {object | Array | null}
     */
    recursiveUpdate: (object: object | any[] | null, pathToProperty: Array<string> | null) => object | any[] | null;
    /**
     * Generates an HTML option element based on the provided item.
     * @param {object} item The item to generate the option element for.
     * @returns {HTMLElement} The generated option element.
     */
    htmlItem: (item: object) => HTMLElement;
    /**
     * Fetches the pages from the provided URL.
     * @param {number} page The page number to fetch.
     * @returns {Promise<object>} The fetched data.
     * @throws Will throw an error if the response is not ok.
     */
    getPages(page: number): Promise<object>;
    /**
     * Finds the selected option data based on the given selected option values.
     * @param {Array} selectedOptionValues The array of selected option values.
     * @returns {Array} - The array of option data that matches the selected option values.
     */
    findSelectedOptionData(selectedOptionValues?: any[]): any[];
    /**
     * Adds an option to the element.
     * @param {object} optionData The data of the option to be added.
     */
    addOption(optionData: object): void;
    /**
     * Adds options to the element.
     * @param {Array} optionsData The array of option data to be added.
     * @param {boolean} [silent] Whether to suppress events triggered by adding options.
     */
    addOptions(optionsData?: any[], silent?: boolean): void;
    #private;
}
