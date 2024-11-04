import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * @summary Breadcrumbs class.
 * @documentation https://elements.webjet.sk/components/breadcrumbs
 * @status stable
 *
 * @extends WJElement
 *
 * @slot - The breadcrumb main content.
 */
export default class Breadcrumbs extends WJElement {
    /**
     * Breadcrumbs constructor
     * @constructor
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
     * Class name
     * @type {string}
     */
    className = "Breadcrumbs";

    /**
     * Get CSS stylesheet
     * @static
     * @returns {Object} styles - The CSS styles
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Setup attributes
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Draw method
     * @param {Object} context - The context
     * @param {Object} store - The store
     * @param {Object} params - The parameters
     * @returns {Object} fragment - The document fragment
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let element = document.createElement("slot");

        fragment.appendChild(element);

        return fragment;
    }

    /**
     * After draw method
     */
    afterDraw() {
        let maxItems = +this.maxItems || 0;
        let itemsBeforeCollapse = +this.itemsBeforeCollapse || 1;
        let itemsAfterCollapse = +this.itemsAfterCollapse || 1;

        let breadcrumbs = this.getBreadcrumbs();

        if(breadcrumbs.length === 0)
            return;

        let breadcrumb = breadcrumbs.findLast(e => e);

        breadcrumb.setAttribute("last", true);

        const shouldCollapse = maxItems !== undefined && breadcrumbs.length > maxItems && itemsBeforeCollapse + itemsAfterCollapse <= maxItems;

        if (shouldCollapse) {
            breadcrumbs.forEach((breadcrumb, index) => {
                if (index === itemsBeforeCollapse) {
                    breadcrumb.setAttribute("show-collapsed-indicator", true);
                }

                if (index >= itemsBeforeCollapse && index < breadcrumbs.length - itemsAfterCollapse) {
                    breadcrumb.setAttribute("collapsed", true);
                }
            });
        }
    }

    /**
     * Get breadcrumbs
     * @returns {Array} breadcrumbs - The breadcrumbs
     */
    getBreadcrumbs() {
        return Array.from(this.querySelectorAll('wje-breadcrumb')) || [];
    }
}