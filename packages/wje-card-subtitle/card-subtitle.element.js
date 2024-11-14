import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * @summary CardSubtitle class that extends WJElement.
 * @documentation https://elements.webjet.sk/components/card-subtitle
 * @status stable
 *
 * @extends WJElement
 *
 * @slot - The card subtitle main content.
 *
 * @cssproperty [--wje-card-subtitle-font-size=11px] - Font size of the component;
 * @cssproperty [--wje-card-subtitle-font-family=var(--wje-font-family-secondary)] - Font family of the component;
 * @cssproperty [--wje-card-subtitle-padding=0] - Padding of the component;
 */
export default class CardSubtitle extends WJElement {
    /**
     * CardSubtitle constructor.
     */
    constructor() {
        super();
    }

    /**
     * Class name for the CardSubtitle.
     * @type {string}
     */
    className = "CardTitle";

    /**
     * Getter for the CSS stylesheet.
     * @returns {Object} The styles object.
     * @static
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Getter for the observed attributes.
     * @returns {Array} An empty array.
     * @static
     */
    static get observedAttributes() {
        return [];
    }

    /**
     * Sets up the attributes for the CardSubtitle.
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Draws the CardSubtitle.
     * @param {Object} context - The context to draw in.
     * @param {Object} store - The store to use.
     * @param {Object} params - The parameters to use.
     * @returns {DocumentFragment} The created document fragment.
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let element = document.createElement("slot");
        fragment.appendChild(element);

        return fragment;
    }
}