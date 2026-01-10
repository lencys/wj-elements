import { default as WJElement } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

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
     * Breadcrumbs constructor method.
     * @class
     */
    constructor() {
        super();

        /**
         * Last breadcrumb flag
         * @type {boolean}
         */
        this.last = false;
    }

    /**
     * Set variant attribute for the Breadcrumbs element.
     * @param value
     */
    set variant(value) {
        this.setAttribute('variant', value);
    }

    /**
     * Get variant attribute for the Breadcrumbs element.
     * @returns {string}
     */
    get variant() {
        return this.getAttribute('variant') || 'button';
    }

    /**
     * Get items before collapse attribute.
     * @param {string} value
     */
    set maxItems(value) {
        this.setAttribute('max-items', value || 0);
    }

    /**
     * Get items before collapse attribute.
     * @returns {number}
     */
    get maxItems() {
        return +this.getAttribute('max-items' || 0);
    }

    /**
     * Get items before collapse attribute.
     * @param value
     */
    set itemsBeforeCollapse(value) {
        this.setAttribute('items-before-collapse', value || 1);
    }

    /**
     * Get items before collapse attribute.
     * @returns {number}
     */
    get itemsBeforeCollapse() {
        return +this.getAttribute('items-before-collapse') || 1;
    }

    /**
     * Get items after collapse attribute.
     * @param value
     */
    set itemsAfterCollapse(value) {
        this.setAttribute('items-after-collapse', value || 1);
    }

    /**
     * Get items after collapse attribute.
     * @returns {number}
     */
    get itemsAfterCollapse() {
        return +this.getAttribute('items-after-collapse') || 1;
    }

    /**
     * Class name for the Breadcrumbs element.
     * @type {string}
     */
    className = 'Breadcrumbs';

    /**
     * Get CSS stylesheet for the Breadcrumbs element.
     * @static
     * @returns {object} styles - The CSS styles
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Get observed attributes for the Breadcrumb element.
     * @static
     * @returns {Array<string>} - The observed attributes array for the Breadcrumb element.
     */
    static get observedAttributes() {
        return [];
    }

    /**
     * Setup attributes for the Breadcrumbs element.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
    }

    /**
     * Draw method for the Breadcrumbs element.
     * @returns {object} fragment - The document fragment
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let element = document.createElement('slot');

        fragment.appendChild(element);

        return fragment;
    }

    /**
     * Updates the breadcrumb elements after they are drawn on the page.
     * It manages attributes on breadcrumb items and handles the logic for collapsing breadcrumbs
     * if the total exceeds the specified maximum items.
     * @returns {void} This method does not return a value.
     */
    afterDraw() {
        let breadcrumbs = this.getBreadcrumbs();

        if (breadcrumbs.length === 0) return;

        let breadcrumb = breadcrumbs.findLast((e) => e);

        breadcrumb.setAttribute('last', true);

        const shouldCollapse =
            this.maxItems !== undefined &&
            breadcrumbs.length > this.maxItems &&
            this.itemsBeforeCollapse + this.itemsAfterCollapse <= this.maxItems;

        if (shouldCollapse) {
            breadcrumbs.forEach((b, index) => {
                if (index === this.itemsBeforeCollapse) {
                    b.setAttribute('show-collapsed-indicator', true);
                }

                if (index >= this.itemsBeforeCollapse && index < breadcrumbs.length - this.itemsAfterCollapse) {
                    b.setAttribute('collapsed', true);
                }
            });
        }
    }

    /**
     * Retrieves all breadcrumb elements within the current instance.
     * @returns {Array<Element>} An array of breadcrumb elements (`wje-breadcrumb`) found within the instance. Returns an empty array if no breadcrumbs are found.
     */
    getBreadcrumbs() {
        return Array.from(this.querySelectorAll('wje-breadcrumb')) || [];
    }

    /**
     * Retrieves all breadcrumb elements that have the 'collapsed' attribute.
     * @returns {Array<Element>} An array of DOM elements representing breadcrumbs with the 'collapsed' attribute.
     */
    getBreadcrumbsCollapsed() {
        return Array.from(this.querySelectorAll('wje-breadcrumb[collapsed]')) || [];
    }
}
