import { default as WJElement } from '../wje-element/element.js';
/**
 * @summary This class represents a Breadcrumb element, extending the WJElement class. It provides a navigational aid in user interfaces, displaying the current location within a hierarchy.
 * @documentation https://elements.webjet.sk/components/breadcrumb
 * @status stable
 * @augments WJElement
 * @slot - The main content of the breadcrumb.
 * @slot start - Slot for content at the start of the breadcrumb.
 * @slot end - Slot for content at the end of the breadcrumb.
 * @slot separator - Slot for a custom separator between breadcrumb items.
 * @csspart native - The native wrapper of the breadcrumb component.
 * @csspart separator - The separator between breadcrumb items.
 * @cssproperty [--wje-breadcrumb-a=var(--wje-color-contrast-8)] - The color of the breadcrumb text.
 * @cssproperty [--wje-breadcrumb-a-hover=var(--wje-color-contrast-6)] - The color of the breadcrumb separator line.
 * @tag wje-breadcrumb
 */
export default class Breadcrumb extends WJElement {
    /**
     * Get CSS stylesheet for the Breadcrumb element.
     * @static
     * @returns {object} styles - The CSS styles
     */
    static get cssStyleSheet(): object;
    /**
     * Get observed attributes for the Breadcrumb element.
     * @static
     * @returns {Array<string>} - The observed attributes array for the Breadcrumb element.
     */
    static get observedAttributes(): Array<string>;
    _showSeparator: boolean;
    _showCollapsedIndicator: boolean;
    /**
     * Set show separator flag.
     * @param {boolean} value The value to set
     */
    set showSeparator(value: boolean);
    /**
     * Get show separator flag.
     * @returns {boolean} showSeparator - The show separator flag
     */
    get showSeparator(): boolean;
    /**
     * Set collapsed variant.
     * @param {string} value The value to set
     */
    set collapsedVariant(value: string);
    /**
     * Get collapsed variant.
     * @returns {string} The collapsed variant value in uppercase.
     */
    get collapsedVariant(): string;
    _collapsedVariant: string;
    /**
     * Handles attribute changes for the custom element and updates its behavior or appearance accordingly.
     * @param {string} name The name of the attribute that was changed.
     * @param {string|null} oldValue The previous value of the attribute before it was changed. Null if the attribute was not previously set.
     * @param {string|null} newValue The new value of the attribute after it was changed. Null if the attribute was removed.
     * @returns {boolean} Returns false to signal no default behavior is implemented.
     */
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): boolean;
    active: boolean;
    syncAria(): void;
    /**
     * Draw method for the Breadcrumb element.
     * @returns {object} fragment - The document fragment
     */
    draw(): object;
    native: HTMLAnchorElement;
    /**
     * Renders the collapsed indicator based on the current collapsed variant.
     * If the collapsed variant is 'DROPDOWN', it invokes the collapseDropdown method.
     * Otherwise, it invokes the collapseButton method.
     * @returns {any} The rendered collapsed indicator, either as a dropdown or a button.
     */
    drawCollapsedIndicator(): any;
    /**
     * Creates and returns a dropdown UI component for collapsed breadcrumbs.
     * This method generates a dropdown element with a button trigger and a menu populated with items corresponding
     * to the collapsed breadcrumbs. The dropdown is configured to handle specific interactions and ensure that
     * events are appropriately managed to avoid propagation issues. Menu items are linked to their corresponding
     * breadcrumbs, enabling the same functionality as clicking on the original breadcrumb.
     * @returns {HTMLElement} A configured dropdown element containing a button as trigger and a menu with breadcrumb items.
     */
    collapseDropdown(): HTMLElement;
    /**
     * Creates a button element that expands hidden breadcrumbs when clicked.
     * The button is set with appropriate attributes and event listeners to handle
     * the expanding of hidden breadcrumb elements. Clicking the button will remove
     * the button itself, reveal hidden breadcrumbs, and stop the current event
     * propagation.
     * @returns {HTMLButtonElement} The created button configured to expand breadcrumbs.
     */
    collapseButton(): HTMLButtonElement;
    /**
     * Retrieves the breadcrumb trail for the current element by returning its parent element.
     * @returns {Element} The parent element representing the breadcrumb trail.
     */
    getBreadcrumbs(): Element;
}
