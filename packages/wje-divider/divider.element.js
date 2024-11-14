import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * @summary Divider is a custom web component that extends WJElement.
 * It provides a simple divider line that can be used to separate content.
 * @documentation https://elements.webjet.sk/components/divider
 * @status stable
 *
 * @extends WJElement
 *
 * @slot - This is a default/unnamed slot.
 *
 * @cssproperty [--wje-border-width=1px] - The size of the border.
 * @cssproperty [--wje-divider-border-color=var(--wje-border-color)] - The color of the divider border.
 * @cssproperty [--wje-divider-border-width=var(--wje-border-width, 1px)] - The width of the divider border.
 * @cssproperty [--wje-divider-spacing=0] - The spacing for the divider.
 *
 * @tag wje-divider
 * @tagname wje-divider
 */
export default class Divider extends WJElement {
    /**
     * Constructor for the Divider class.
     */
    constructor() {
        super();
    }

    /**
     * The class name for the Divider class.
     * @type {string}
     */
    className = "Divider";

    /**
     * Getter for the CSS stylesheet.
     * @returns {string} The CSS stylesheet.
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Getter for the observed attributes.
     * @returns {Array} An empty array as there are no observed attributes.
     */
    static get observedAttributes() {
        return [];
    }

    /**
     * Sets up the attributes for the Divider.
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Draws the Divider.
     * @param {Object} context - The context for drawing.
     * @param {Object} store - The store for drawing.
     * @param {Object} params - The parameters for drawing.
     * @returns {DocumentFragment} The created document fragment.
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement("div");
        let slot = document.createElement("slot");

        native.appendChild(slot);
        fragment.appendChild(native);

        return fragment;
    }
}