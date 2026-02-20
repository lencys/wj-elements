import { default as WJElement } from '../wje-element/element.js';
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
    iterate: Element;
    placementObj: this;
    /**
     * Dependencies of the InfiniteScroll component.
     * @param value
     */
    set infiniteScrollTemplate(value: null);
    /**
     * Getter for the infiniteScrollTemplate property.
     * @returns {null}
     */
    get infiniteScrollTemplate(): null;
    /**
     * Dependencies of the InfiniteScroll component.
     * @param value
     */
    set response(value: any | {});
    /**
     * Getter for the response property.
     * @returns {*|{}}
     */
    get response(): any | {};
    /**
     * Dependencies of the InfiniteScroll component.
     * @param value
     */
    set objectName(value: string);
    get objectName(): string;
    /**
     * Prepares the component for updates before it is drawn.
     * This method handles the removal of templates for iteration, adjusts the height styling of the component,
     * and manages abort signals for loading operations.
     * @returns {void} No return value.
     */
    beforeDraw(): void;
    /**
     * Creates and returns a document fragment containing the structure for an infinite scroll component.
     * The structure includes native elements, slots for customization, and optional loading content.
     * @returns {DocumentFragment} The document fragment containing the component's DOM structure.
     */
    draw(): DocumentFragment;
    loadingEl: HTMLDivElement;
    endingEl: HTMLSlotElement;
    /**
     * Called after the component has been drawn.
     */
    afterDraw(): Promise<void>;
    queryParams: any;
    size: any;
    currentPage: number;
    /**
     * Sync ARIA attributes on host.
     */
    syncAria(): void;
    /**
     * Attaches a scroll event listener to the current object.
     * The `scrollEvent` function binds the `onScroll` method to the 'scroll' event
     * of the current object. This enables handling of scroll events for
     * specific functionality such as updating UI elements, loading content dynamically,
     * or tracking user interaction with scrollable content.
     */
    scrollEvent: () => void;
    /**
     * A function that removes the scroll event listener from the current context.
     * This function is used to unbind the `onScroll` event listener
     * from the `scroll` event of the current object. It ensures that
     * the scroll event no longer triggers the `onScroll` handler.
     * @function
     */
    unScrollEvent: () => void;
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
    onScroll: (e: Event) => void;
    /**
     * Fetches the pages from the server.
     * @param {number} page The page number.
     * @returns {Promise<object>} The response from the server.
     */
    getPages(page: number): Promise<object>;
    /**
     * Hides the loader.
     */
    hideLoader(): void;
    /**
     * Displays the loader element by adding the 'show' class to its class list.
     * This method is useful for indicating a loading or processing state in the UI.
     * @returns {void} No return value.
     */
    showLoader(): void;
    /**
     * Checks if there are more pages to load.
     * @param {number} page The page number.
     * @returns {boolean} Whether there are more pages to load.
     */
    hasMorePages(page: number): boolean;
    /**
     * Loads the pages.
     * @param {number} page The page number.
     */
    loadPages(page: number): Promise<void>;
    parser: DOMParser;
    compareFunction: (i: any, item: any) => boolean;
    /**
     * Converts a data item into an HTML element based on a template.
     * This function takes a data item, interpolates it into a predefined template,
     * parses the resulting HTML string, and returns the first child element of the parsed HTML content.
     * @param {object} item The data object to interpolate into the HTML template.
     * @returns {Element} The first child element generated from the interpolated HTML string.
     */
    dataToHtml: (item: object) => Element;
    /**
     * A custom implementation of the forEach method designed to iterate over an array of data,
     * transform each item into an HTML element, and append the element to a specified placement object.
     * Additionally, it adds an event listener to each generated element for handling click events.
     * @param {Array} data An array of items to process. Each item is transformed into an HTML element
     * and appended to the placement object specified in the context of `this`.
     */
    customForeach: (data: any[]) => void;
    /**
     * Interpolates a string template with values from the provided parameters object.
     * The template contains placeholders in the format `{{key}}` or `{{key.subkey}}`,
     * which are replaced with the corresponding values from the `params` object.
     * Placeholders support dot notation for accessing nested properties within the `params` object.
     * @param {string} template The string template containing placeholders to be replaced.
     * @param {object} params The object containing key-value pairs used for substitution in the template.
     * @returns {string} A string with all placeholders replaced by their respective values from the `params` object.
     */
    interpolate: (template: string, params: object) => string;
    addItem(item: any, place?: string): void;
    removeItem(item: any): void;
    reset(): void;
    #private;
}
