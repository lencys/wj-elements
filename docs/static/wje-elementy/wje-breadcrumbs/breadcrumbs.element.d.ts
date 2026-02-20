import { default as WJElement } from '../wje-element/element.js';
/**
 * @summary This class represents a Breadcrumbs container, extending the WJElement class. It acts as a wrapper for individual breadcrumb elements and manages their behavior, such as collapsing and marking the last breadcrumb.
 * @documentation https://elements.webjet.sk/components/breadcrumbs
 * @status stable
 * @augments WJElement
 * @slot - The container for breadcrumb elements.
 * @csspart container - The component's container wrapper.
 * @attribute {number} max-items - The maximum number of visible breadcrumbs before collapsing.
 * @attribute {number} items-before-collapse - The number of breadcrumbs to show before the collapsed indicator.
 * @attribute {number} items-after-collapse - The number of breadcrumbs to show after the collapsed indicator.
 * @tag wje-breadcrumbs
 * @example
 * <!-- Example usage -->
 * <wje-breadcrumbs max-items="5" items-before-collapse="2" items-after-collapse="2">
 *   <wje-breadcrumb>Home</wje-breadcrumb>
 *   <wje-breadcrumb>About</wje-breadcrumb>
 *   <wje-breadcrumb>Services</wje-breadcrumb>
 *   <wje-breadcrumb>Portfolio</wje-breadcrumb>
 *   <wje-breadcrumb>Contact</wje-breadcrumb>
 * </wje-breadcrumbs>
 *
 * <!-- Output: Only the first two and last two breadcrumbs will be visible, with a collapsed indicator in the middle -->
 */
export default class Breadcrumbs extends WJElement {
    /**
     * Get CSS stylesheet for the Breadcrumbs element.
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
    /**
     * Last breadcrumb flag
     * @type {boolean}
     */
    last: boolean;
    /**
     * Set variant attribute for the Breadcrumbs element.
     * @param value
     */
    set variant(value: string);
    /**
     * Get variant attribute for the Breadcrumbs element.
     * @returns {string}
     */
    get variant(): string;
    /**
     * Get items before collapse attribute.
     * @param {string} value
     */
    set maxItems(value: string);
    /**
     * Get items before collapse attribute.
     * @returns {number}
     */
    get maxItems(): number;
    /**
     * Get items before collapse attribute.
     * @param value
     */
    set itemsBeforeCollapse(value: number);
    /**
     * Get items before collapse attribute.
     * @returns {number}
     */
    get itemsBeforeCollapse(): number;
    /**
     * Get items after collapse attribute.
     * @param value
     */
    set itemsAfterCollapse(value: number);
    /**
     * Get items after collapse attribute.
     * @returns {number}
     */
    get itemsAfterCollapse(): number;
    /**
     * Draw method for the Breadcrumbs element.
     * @returns {object} fragment - The document fragment
     */
    draw(): object;
    /**
     * Updates the breadcrumb elements after they are drawn on the page.
     * It manages attributes on breadcrumb items and handles the logic for collapsing breadcrumbs
     * if the total exceeds the specified maximum items.
     * @returns {void} This method does not return a value.
     */
    afterDraw(): void;
    /**
     * Retrieves all breadcrumb elements within the current instance.
     * @returns {Array<Element>} An array of breadcrumb elements (`wje-breadcrumb`) found within the instance. Returns an empty array if no breadcrumbs are found.
     */
    getBreadcrumbs(): Array<Element>;
    /**
     * Retrieves all breadcrumb elements that have the 'collapsed' attribute.
     * @returns {Array<Element>} An array of DOM elements representing breadcrumbs with the 'collapsed' attribute.
     */
    getBreadcrumbsCollapsed(): Array<Element>;
}
