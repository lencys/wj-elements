import { default as WJElement, WjElementUtils } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * @summary This element represents a footer. `Footer` is a custom web component that represents a footer.
 * @documentation https://elements.webjet.sk/components/footer
 * @status stable
 *
 * @extends WJElement
 *
 * @slot default - Default slot for the footer content
 *
 * @cssprop --primary-color - The primary color of the footer
 */

export default class Footer extends WJElement {
    /**
     * Creates an instance of Footer.
     *
     * @constructor
     */
    constructor() {
        super();
    }

    className = "Footer";

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
     * Returns the list of attributes to observe for changes.
     *
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes() {
        return [];
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
}