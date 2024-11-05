import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * `Panel` is a custom web component that represents a panel.
 * @summary This element represents a panel.
 * @documentation https://elements.webjet.sk/components/panel
 * @status stable
 *
 * @extends {WJElement}
 *
 * @slot - The default slot for the panel.
 *
 * @tag wje-panel
 */
export default class Panel extends WJElement {
    /**
     * Creates an instance of Panel.
     *
     * @constructor
     */
    constructor() {
        super();

        this.last = false;
    }

    className = "Panel";

    /**
     * Returns the CSS styles for the component.
     *
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Draws the component.
     *
     * @param {Object} context - The context for drawing.
     * @param {Object} store - The store for drawing.
     * @param {Object} params - The parameters for drawing.
     * @returns {DocumentFragment}
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let element = document.createElement("slot");

        fragment.appendChild(element);

        return fragment;
    }

    /**
     * Adds event listeners after the component is drawn.
     * Handles the collapsing of breadcrumbs.
     */
    afterDraw() {
        let maxItems = +this.maxItems || 0;
        let itemsBeforeCollapse = +this.itemsBeforeCollapse || 1;
        let itemsAfterCollapse = +this.itemsAfterCollapse || 1;

        let breadcrumbs = this.getBreadcrumbs();

        let breadcrumb = breadcrumbs.findLast(e => e);
        breadcrumb.setAttribute("last", true);

        const shouldCollapse = maxItems !== undefined && breadcrumbs.length > maxItems && itemsBeforeCollapse + itemsAfterCollapse <= maxItems;

        if (shouldCollapse) {
            breadcrumbs.forEach((b, index) => {
                if (index === itemsBeforeCollapse) {
                    b.setAttribute("show-collapsed-indicator", true);
                }

                if (index >= itemsBeforeCollapse && index < breadcrumbs.length - itemsAfterCollapse) {
                    b.setAttribute("collapsed", true);
                }
            });
        }
    }

    /**
     * Returns all the breadcrumb elements in the panel.
     *
     * @returns {Array<Element>} The breadcrumb elements.
     */
    getBreadcrumbs() {
        return Array.from(this.querySelectorAll('wje-breadcrumb'));
    }
}