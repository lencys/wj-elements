import { Localizer } from '../utils/localize.js';
import { default as WJElement, event } from '../wje-element/element.js';
import { paginate } from './service/service.js';
import Icon from '../wje-icon/icon.js';
import Button from '../wje-button/button.js';
import styles from './styles/styles.css?inline';

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
     * Creates an instance of Pagination.
     */
    constructor() {
        super();
        this.localizer = new Localizer(this);

        this._paginateObj = null;
    }

    /**
     * Sets the value of the 'page' attribute for the object.
     * @param {string} value The value to set for the 'page' attribute.
     */
    set page(value) {
        this.setAttribute('page', value);
    }

    /**
     * Retrieves the current page number as a numeric value.
     * @returns {number} The current page number. Returns 0 if the attribute 'page' is not set or is not a numeric value.
     */
    get page() {
        return +this.getAttribute('page') || 0;
    }

    /**
     * Sets the maximum number of pages.
     * Updates the 'max-pages' attribute with the provided value.
     * @param {number|string} value The maximum number of pages to set. Can be a number or a parsable string representing a number.
     */
    set maxPages(value) {
        this.setAttribute('max-pages', value);
    }

    /**
     * Gets the maximum number of pages.
     * This getter retrieves the value of the "max-pages" attribute from the element.
     * If the attribute is not set or is invalid, it defaults to 3.
     * @returns {number} The maximum number of pages as a numeric value.
     */
    get maxPages() {
        return +this.getAttribute('max-pages') || 10;
    }

    /**
     * Sets the `pageSize` attribute to the specified value.
     * @param {number|string} value The desired page size value. This can be a number or a string representation of the size.
     */
    set pageSize(value) {
        this.setAttribute('page-size', value);
    }

    /**
     * Retrieves the value of the 'page-size' attribute and converts it to a number.
     * If the attribute is not set or is invalid, returns the default value of 3.
     * @returns {number} The numeric value of the 'page-size' attribute or the default value of 3.
     */
    get pageSize() {
        return +this.getAttribute('page-size') || 3;
    }

    /**
     * Sets the total number of items.
     * @param {number} value The new total number of items to set.
     */
    set totalItems(value) {
        this.setAttribute('total-items', value);
    }

    /**
     * Retrieves the total number of items represented by the 'total-items' attribute.
     * @returns {number} The total number of items. Defaults to 0 if the attribute is not set or is invalid.
     */
    get totalItems() {
        return +this.getAttribute('total-items') || 0;
    }

    /**
     * Sets the visibility of the first button based on the provided value.
     * Adds the 'show-first-button' attribute when the value is truthy, and removes it otherwise.
     * @param {boolean} value Determines whether to show the first button. If true, the 'show-first-button' attribute is added; if false, it is removed.
     */
    set showFirstButton(value) {
        this.removeAttribute('show-first-button');

        if (value) {
            this.setAttribute('show-first-button', '');
        }
    }

    /**
     * Determines whether the 'show-first-button' attribute is present on the element.
     * @returns {boolean} True if the 'show-first-button' attribute is set; otherwise, false.
     */
    get showFirstButton() {
        return this.hasAttribute('show-first-button');
    }

    /**
     * Sets the visibility of the "last" button. This method controls the presence
     * or absence of the "show-last-button" attribute based on the provided value.
     * @param {boolean} value A boolean value indicating whether to show the "last" button.
     * If true, the "show-last-button" attribute is added;
     * if false, the attribute is removed.
     */
    set showLastButton(value) {
        this.removeAttribute('show-last-button');

        if (value) {
            this.setAttribute('show-last-button', '');
        }
    }

    /**
     * Determines if the 'show-last-button' attribute is present on the element.
     * @returns {boolean} True if the 'show-last-button' attribute is present, otherwise false.
     */
    get showLastButton() {
        return this.hasAttribute('show-last-button');
    }

    /**
     * Sets the pagination object by calculating the pagination details
     * based on the total items, current page, page size, and maximum pages.
     * @param {object} value The value to set the pagination object. The pagination details are computed internally.
     */
    set paginateObj(value) {
        this._paginateObj = value;
    }

    /**
     * Retrieves the pagination object used for managing paginated data.
     * @returns {object} The pagination object containing details and functionality for paginating data.
     */
    get paginateObj() {
        return this._paginateObj;
    }

    /**
     * Sets the 'round' attribute on the element. If the provided value is truthy,
     * the 'round' attribute is added. If the value is falsy, the attribute is removed.
     * @param {boolean} value A boolean value determining whether to add or remove the 'round' attribute.
     */
    set round(value) {
        this.removeAttribute('round');

        if (value) {
            this.setAttribute('round', '');
        }
    }

    /**
     * Retrieves the value of the 'round' attribute for the current element.
     * @returns {boolean} A boolean indicating whether the 'round' attribute is present on the element.
     */
    get round() {
        return this.hasAttribute('round');
    }

    /**
     * Sets the `show-info` attribute on the element based on the provided value.
     * @param {boolean} value A boolean indicating whether to add or remove the `show-info` attribute.
     */
    set showInfo(value) {
        this.removeAttribute('show-info');

        if (value) {
            this.setAttribute('show-info', '');
        }
    }

    /**
     * Retrieves the value of the 'show-info' attribute.
     * Checks if the 'show-info' attribute is present on the element.
     * @returns {boolean} True if the 'show-info' attribute is present, otherwise false.
     */
    get showInfo() {
        return this.hasAttribute('show-info');
    }

    set showPageSizeOptions(value) {
        if (!value) return;
        this.setAttribute('show-page-size-options', value);
    }

    get showPageSizeOptions() {
        return this.hasAttribute('show-page-size-options');
    }

    set pageSizeOptions(value) {
        if (!value) return;
        this.setAttribute('page-size-options', value);
    }

    /**
     * Retrieves the list of available page size options.
     * This method is used to fetch the values representing the different page size options
     * that can be provided or configured in a paginated component or system.
     * @returns {Array<number>} An array of numbers representing the selectable page size options.
     */
    get pageSizeOptions() {
        let options = this.getAttribute('page-size-options');
        if (!options) return [6, 10, 50, 100, 500];
        return options.split(',').map((o) => +o).filter((o) => !isNaN(o));
    }

    /**
     * Dependencies of the Button element.
     * @type {object}
     */
    dependencies = {
        'wje-icon': Icon,
        'wje-button': Button,
    };

    className = 'Pagination';

    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Getter for the observedAttributes attribute of the input element.
     * @returns {Array} The attributes to observe for changes.
     */
    static get observedAttributes() {
        return ['page', 'total-items', 'page-size'];
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
    }

    async beforeDraw() {
        this.paginateObj = await paginate(this.totalItems, this.page, this.pageSize, this.maxPages);
    }

    /**
     * Creates a document fragment, appends a new slot element to it, and returns the fragment.
     * @returns {DocumentFragment} A document fragment containing a slot element.
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement('div');
        native.setAttribute('part', 'native');
        native.classList.add('native-pagination');

        native.append(this.htmlPagination());

        fragment.append(native);

        return fragment;
    }

    /**
     * Creates a pagination control for navigating between pages of content.
     * This method generates and returns a document fragment containing pagination controls, including buttons for navigating to the first, previous, next, and last pages, as well as optional informational text about the current set of displayed items and total number of items.
     * @returns {DocumentFragment} A document fragment containing the pagination controls.
     */
    htmlPagination() {
        let fragment = document.createDocumentFragment();

        let select = document.createElement('wje-select');
        select.setAttribute('size', 'small');
        select.setAttribute('variant', 'standard');
        select.setAttribute('value', this.pageSize);
        select.addEventListener('wje-select:change', (e) => {
            console.log("Page size changed to: ", e.detail.context.value[0]);
            this.pageSize = e.detail.context.value[0];
        });

        let options = this.pageSizeOptions.map((o) => {
            let option = document.createElement('wje-option');
            option.value = o;
            option.textContent = o;
            // if (o === this.pageSize) option.selected = true;
            return option;
        });

        let info = document.createElement('div');
        info.classList.add('info');
        info.innerHTML = `${this.paginateObj.startIndex + 1} - ${this.paginateObj.endIndex + 1} ${this.localizer.translate('wj.pagination.of')} ${this.totalItems}`;

        let pagination = document.createElement('div');
        pagination.classList.add('pages');

        const button = document.createElement('wje-button');
        button.setAttribute('fill', 'link');
        if (this.round) button.setAttribute('round', '');

        // First button
        let firstButton = button.cloneNode(true);
        firstButton.title = this.localizer.translate('wj.pagination.first');
        firstButton.innerHTML = `<wje-icon name="chevron-left-pipe" slot="icon-only"></wje-icon>`;
        firstButton.addEventListener('wje-button:click', (e) => this.pageClickAction(e, 0));

        // Previous button
        const prevButton = button.cloneNode(true);
        prevButton.title = this.localizer.translate('wj.pagination.prev');
        prevButton.innerHTML = `<wje-icon name="chevron-left" slot="icon-only"></wje-icon>`;
        if (this.page === 0) prevButton.disabled = true;
        prevButton.addEventListener('wje-button:click', (e) => this.pageClickAction(e, this.page - 1));

        // Next button
        const nextButton = button.cloneNode(true);
        nextButton.title = this.localizer.translate('wj.pagination.next');
        nextButton.innerHTML = `<wje-icon name="chevron-right" slot="icon-only"></wje-icon>`;
        if (this.page + 1 >= this.paginateObj.totalPages) nextButton.disabled = true;
        nextButton.addEventListener('wje-button:click', (e) => this.pageClickAction(e, this.page + 1));

        // Last button
        let lastButton = button.cloneNode(true);
        lastButton.title = this.localizer.translate('wj.pagination.last');
        lastButton.innerHTML = `<wje-icon name="chevron-right-pipe" slot="icon-only"></wje-icon>`;
        lastButton.disabled = this.paginateObj.endIndex + 1 >= this.totalItems;
        lastButton.addEventListener('wje-button:click', (e) =>
            this.pageClickAction(e, this.paginateObj.totalPages - 1)
        );

        select.append(...options);

        if (this.showFirstButton) pagination.appendChild(firstButton);
        pagination.appendChild(prevButton);
        pagination.appendChild(this.htmlStackButtons(this.paginateObj));
        pagination.appendChild(nextButton);
        if (this.showLastButton) pagination.appendChild(lastButton);

        if (this.showPageSizeOptions) fragment.append(select);
        if (this.showInfo) fragment.appendChild(info);
        fragment.appendChild(pagination);

        return fragment;
    }

    /**
     * Creates and returns a DocumentFragment containing a series of buttons for pagination purposes,
     * based on the provided pagination object.
     * @param {object} paginateObj An object containing pagination details.
     * @param {number} paginateObj.currentPage The current active page index (1-based).
     * @param {Array<number>} paginateObj.pages An array of page numbers to display in the pagination.
     * @param {number} paginateObj.totalPages Total number of pages available for pagination.
     * @returns {DocumentFragment} A DocumentFragment containing the buttons and additional pagination elements.
     */
    htmlStackButtons(paginateObj) {
        let fragment = document.createDocumentFragment();

        const button = document.createElement('wje-button');
        button.setAttribute('fill', 'link');
        if (this.round) button.setAttribute('round', '');

        let dots = document.createElement('span');
        dots.classList.add('dots');

        const first = button.cloneNode(true);
        first.textContent = '1';
        first.addEventListener('wje-button:click', (e) => this.pageClickAction(e, 0));

        const last = button.cloneNode(true);
        last.textContent = paginateObj.totalPages;
        last.addEventListener('wje-button:click', (e) => this.pageClickAction(e, paginateObj.totalPages - 1));

        if (paginateObj.currentPage >= this.maxPages + 1 && paginateObj.boundary < paginateObj.totalPages) {
            fragment.appendChild(first);
            fragment.appendChild(dots);
        }

        paginateObj.pages.forEach((page) => {
            let newButton = button.cloneNode(true);
            newButton.textContent = page;

            if (page - 1 === this.page) {
                newButton.removeAttribute('fill');
            } else {
                newButton.addEventListener('wje-button:click', (e) => this.pageClickAction(e, page - 1));
            }

            fragment.appendChild(newButton);
        });

        if (
            (paginateObj.pages.length === this.maxPages || paginateObj.currentPage < this.maxPages + 1) &&
            paginateObj.boundary < paginateObj.totalPages
        ) {
            fragment.appendChild(dots.cloneNode(true));
            fragment.appendChild(last);
        }

        return fragment;
    }

    /**
     * Handles the click action for pagination and updates the current page.
     * If the clicked page number is the same as the current page, no action is performed.
     * Otherwise, the current page is updated to the new page number, and a custom event
     * 'wje-pagination:page-change' is dispatched with the pagination object.
     * @param {Event} e The event triggered by the page click.
     * @param {number} page The page number that was clicked.
     */
    pageClickAction = (e, page) => {
        if (+page === this.page || this.page > this.paginateObj.totalPages) return;
        this.page = page;
        event.dispatchCustomEvent(this, 'wje-pagination:page-change', { page: page });
    };
}

Pagination.define('wje-pagination', Pagination);
