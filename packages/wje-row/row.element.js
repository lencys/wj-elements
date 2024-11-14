import { default as WJElement, WjElementUtils } from "../wje-element/element.js";
import styles from "./scss/styles.scss?inline";

/**
 * `Row` is a custom web component that represents a row in a layout system.
 * @summary This element represents a row in a layout system.
 * @documentation https://elements.webjet.sk/components/row
 * @status stable
 *
 * @extends {WJElement}
 *
 * @slot - The default slot for the row.
 *
 * @tag wje-row
 */
export default class Row extends WJElement {
    /**
     * Creates an instance of Row.
     *
     * @constructor
     */
    constructor() {
        super();
    }

    className = "Row";

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
     * @param {Object} context - The context for drawing.
     * @param {Object} store - The store for drawing.
     * @param {Object} params - The parameters for drawing.
     * @returns {DocumentFragment}
     */
    draw() {
        let fragment = document.createDocumentFragment();

        if(this.hasAttribute("wrap"))
            this.classList.add("wje-wrap");

        let element = document.createElement("slot");

        fragment.appendChild(element);

        return fragment;
    }
}