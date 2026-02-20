import { default as WJElement } from '../wje-element/element.js';
import { Localizer } from '../utils/localize.js';
/**
 * @summary This class represents the Pagination component for navigating through paginated content and dynamically updating navigation elements based on attributes like the number of items, page size, etc. Extends the WJElement class.
 * @documentation https://elements.webjet.sk/components/pagination
 * @status stable
 * @augments WJElement
 * @dependency wje-icon, wje-button
 * @csspart native - The wrapper element for the pagination component.
 */
export default class Pagination extends WJElement {
    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Getter for the observedAttributes attribute of the input element.
     * @returns {Array} The attributes to observe for changes.
     */
    static get observedAttributes(): any[];
    localizer: Localizer;
    _paginateObj: any;
    /**
     * Sets the value of the 'page' attribute for the object.
     * @param {string} value The value to set for the 'page' attribute.
     */
    set page(value: string);
    /**
     * Retrieves the current page number as a numeric value.
     * @returns {number} The current page number. Returns 0 if the attribute 'page' is not set or is not a numeric value.
     */
    get page(): number;
    /**
     * Sets the maximum number of pages.
     * Updates the 'max-pages' attribute with the provided value.
     * @param {number|string} value The maximum number of pages to set. Can be a number or a parsable string representing a number.
     */
    set maxPages(value: number | string);
    /**
     * Gets the maximum number of pages.
     * This getter retrieves the value of the "max-pages" attribute from the element.
     * If the attribute is not set or is invalid, it defaults to 3.
     * @returns {number} The maximum number of pages as a numeric value.
     */
    get maxPages(): number;
    /**
     * Sets the `pageSize` attribute to the specified value.
     * @param {number|string} value The desired page size value. This can be a number or a string representation of the size.
     */
    set pageSize(value: number | string);
    /**
     * Retrieves the value of the 'page-size' attribute and converts it to a number.
     * If the attribute is not set or is invalid, returns the default value of 3.
     * @returns {number} The numeric value of the 'page-size' attribute or the default value of 3.
     */
    get pageSize(): number;
    /**
     * Sets the total number of items.
     * @param {number} value The new total number of items to set.
     */
    set totalItems(value: number);
    /**
     * Retrieves the total number of items represented by the 'total-items' attribute.
     * @returns {number} The total number of items. Defaults to 0 if the attribute is not set or is invalid.
     */
    get totalItems(): number;
    /**
     * Sets the visibility of the first button based on the provided value.
     * Adds the 'show-first-button' attribute when the value is truthy, and removes it otherwise.
     * @param {boolean} value Determines whether to show the first button. If true, the 'show-first-button' attribute is added; if false, it is removed.
     */
    set showFirstButton(value: boolean);
    /**
     * Determines whether the 'show-first-button' attribute is present on the element.
     * @returns {boolean} True if the 'show-first-button' attribute is set; otherwise, false.
     */
    get showFirstButton(): boolean;
    /**
     * Sets the visibility of the "last" button. This method controls the presence
     * or absence of the "show-last-button" attribute based on the provided value.
     * @param {boolean} value A boolean value indicating whether to show the "last" button.
     * If true, the "show-last-button" attribute is added;
     * if false, the attribute is removed.
     */
    set showLastButton(value: boolean);
    /**
     * Determines if the 'show-last-button' attribute is present on the element.
     * @returns {boolean} True if the 'show-last-button' attribute is present, otherwise false.
     */
    get showLastButton(): boolean;
    /**
     * Sets the pagination object by calculating the pagination details
     * based on the total items, current page, page size, and maximum pages.
     * @param {object} value The value to set the pagination object. The pagination details are computed internally.
     */
    set paginateObj(value: object);
    /**
     * Retrieves the pagination object used for managing paginated data.
     * @returns {object} The pagination object containing details and functionality for paginating data.
     */
    get paginateObj(): object;
    /**
     * Sets the 'round' attribute on the element. If the provided value is truthy,
     * the 'round' attribute is added. If the value is falsy, the attribute is removed.
     * @param {boolean} value A boolean value determining whether to add or remove the 'round' attribute.
     */
    set round(value: boolean);
    /**
     * Retrieves the value of the 'round' attribute for the current element.
     * @returns {boolean} A boolean indicating whether the 'round' attribute is present on the element.
     */
    get round(): boolean;
    /**
     * Sets the `show-info` attribute on the element based on the provided value.
     * @param {boolean} value A boolean indicating whether to add or remove the `show-info` attribute.
     */
    set showInfo(value: boolean);
    /**
     * Retrieves the value of the 'show-info' attribute.
     * Checks if the 'show-info' attribute is present on the element.
     * @returns {boolean} True if the 'show-info' attribute is present, otherwise false.
     */
    get showInfo(): boolean;
    set showPageSizeOptions(value: boolean);
    get showPageSizeOptions(): boolean;
    set pageSizeOptions(value: Array<number>);
    /**
     * Retrieves the list of available page size options.
     * This method is used to fetch the values representing the different page size options
     * that can be provided or configured in a paginated component or system.
     * @returns {Array<number>} An array of numbers representing the selectable page size options.
     */
    get pageSizeOptions(): Array<number>;
    set hideEmpty(value: boolean);
    get hideEmpty(): boolean;
    /**
     * Dependencies of the Button element.
     * @type {object}
     */
    dependencies: object;
    beforeDraw(): Promise<void>;
    /**
     * Creates a document fragment, appends a new slot element to it, and returns the fragment.
     * @returns {DocumentFragment} A document fragment containing a slot element.
     */
    draw(): DocumentFragment;
    /**
     * Creates a pagination control for navigating between pages of content.
     * This method generates and returns a document fragment containing pagination controls, including buttons for navigating to the first, previous, next, and last pages, as well as optional informational text about the current set of displayed items and total number of items.
     * @returns {DocumentFragment} A document fragment containing the pagination controls.
     */
    htmlPagination(): DocumentFragment;
    /**
     * Creates and returns a DocumentFragment containing a series of buttons for pagination purposes,
     * based on the provided pagination object.
     * @param {object} paginateObj An object containing pagination details.
     * @param {number} paginateObj.currentPage The current active page index (1-based).
     * @param {Array<number>} paginateObj.pages An array of page numbers to display in the pagination.
     * @param {number} paginateObj.totalPages Total number of pages available for pagination.
     * @returns {DocumentFragment} A DocumentFragment containing the buttons and additional pagination elements.
     */
    htmlStackButtons(paginateObj: {
        currentPage: number;
        pages: Array<number>;
        totalPages: number;
    }): DocumentFragment;
    /**
     * Handles the click action for pagination and updates the current page.
     * If the clicked page number is the same as the current page, no action is performed.
     * Otherwise, the current page is updated to the new page number, and a custom event
     * 'wje-pagination:page-change' is dispatched with the pagination object.
     * @param {Event} e The event triggered by the page click.
     * @param {number} page The page number that was clicked.
     */
    pageClickAction: (e: Event, page: number) => void;
}
