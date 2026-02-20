import { default as WJElement } from '../wje-element/element.js';
import { default as Checkbox } from '../wje-checkbox/checkbox.js';
import { default as MenuItem } from '../wje-menu-item/menu-item.js';
/**
 * `Kanban` is a custom web component that represents a Kanban board with draggable columns and cards.
 * @summary This element represents a Kanban board.
 * @documentation https://elements.webjet.sk/components/kanban
 * @status stable
 * @augments {WJElement}
 * @slot - The default slot for the Kanban board.
 * @csspart native-infinite-scroll - Styles the native part of the Kanban board.
 * @tag wje-kanban
 */
export default class Kanban extends WJElement {
    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Returns the list of attributes to observe for changes.
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes(): Array<string>;
    totalPages: number;
    isLoading: any[];
    _response: {};
    isDragging: boolean;
    selectedCards: any[];
    /**
     * Dependencies of the Option component.
     */
    dependencies: {
        'wje-checkbox': typeof Checkbox;
        'wje-menu-item': typeof MenuItem;
    };
    /**
     * Sets the URL for fetching data.
     * @param value {string}
     */
    set response(value: string);
    /**
     * Gets the URL for fetching data.
     * @returns {*|{}|{}}
     */
    get response(): any | {} | {};
    /**
     * Sets the URL for fetching data.
     * @param value {array}
     */
    set selectedItems(value: any[]);
    /**
     * Gets the URL for fetching data.
     * @returns {Array}
     */
    get selectedItems(): any[];
    _selectedItems: any[];
    /**
     * Prepares the component before drawing.
     * @param {object} context The context for drawing.
     * @param {object} store The store for drawing.
     * @param {object} params The parameters for drawing.
     */
    beforeDraw(context: object, store: object, params: object): Promise<void>;
    /**
     * Draws the component after it has been prepared.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
    /**
     * Sync ARIA attributes on host.
     */
    syncAria(): void;
    /**
     * Called after the component has been drawn.
     */
    afterDraw(): void;
    ui: {
        elBoard: HTMLElement;
        elTotalCardCount: HTMLElement;
        elCardPlaceholder: any;
    };
    /**
     * Iterates over a list of items, generates an HTML card for each, and appends it to the specified pool's content area.
     * @param {HTMLElement} pool The container element where the cards will be appended. It should contain an element with the class `.pool-content`.
     * @param {Array} items An array of items used to generate HTML cards.
     */
    customForeach: (pool: HTMLElement, items: any[]) => void;
    /**
     * Sets up the drag and drop events for the component.
     */
    setupDragAndDropEvents(): void;
    draggedElementWidth: any;
    draggedElementHeight: any;
    /**
     * Sets up the select all cards event for the component.
     */
    setupSelectAllCardsEvent(): void;
    /**
     * Sets up the menu item click events for the component.
     */
    setupMenuItemClickEvents(): void;
    /**
     * Handles the menu item click event.
     * @param e
     */
    menuItemClickHandler: (e: any) => void;
    /**
     * Updates the selected cards in the pool.
     * @param pool {HTMLElement}
     * @param isChecked {boolean}
     */
    updateSelectedCards(pool: HTMLElement, isChecked: boolean): void;
    /**
     * Updates the column item count.
     */
    updateColumnItemCount: () => void;
    /**
     * Handles the pool action.
     * @param action {string}
     * @param pool {HTMLElement}
     */
    handlePoolAction(action: string, pool: HTMLElement): void;
    /**
     * Moves the pool in the specified direction.
     * @param pool {HTMLElement}
     * @param direction {string}
     */
    movePool(pool: HTMLElement, direction: string): void;
    /**
     * Renames the pool.
     * @param pool {HTMLElement}
     */
    renamePool(pool: HTMLElement): void;
    /**
     * Gets the card placeholder.
     * @returns {null|*}
     */
    getCardPlaceholder(): null | any;
    /**
     * Adds a live event listener to the component.
     * @param eventType {string}
     * @param selector {string}
     * @param callback {function}
     */
    live(eventType: string, selector: string, callback: Function): void;
    /**
     * Sets the selected cards.
     * @param isChecked {boolean}
     * @param card {HTMLElement}
     */
    setSelectedCards(isChecked: boolean, card: HTMLElement): void;
    /**
     * Sets the selected items.
     */
    setSelectedItems(): void;
    /**
     * Fetches the pages.
     * @param page
     * @returns {Promise<any>}
     */
    getPages(page?: number): Promise<any>;
    /**
     * Gets the pool.
     * @param data {Array}
     * @param poolName {string}
     * @returns {*}
     */
    getPool: (data: any[], poolName: string) => any;
    /**
     * Returns the HTML for the pool.
     * @param title {string}
     * @param countItems {number}
     * @returns {Element}
     */
    htmlPool: (title: string, countItems: number) => Element;
    /**
     * Returns the HTML for the card.
     * @param item {Object}
     * @returns {Element}
     */
    htmlCard: (item: any) => Element;
    dispatchEvent(event: any): boolean;
}
