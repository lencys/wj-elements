import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * @summary This class represents an Card Content element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/card-content
 * @status stable
 *
 * @extends WJElement
 *
 * @slot - The card content main content.
 *
 * @cssproperty [--wje-card-padding=0] - Padding of the component;
 */
export default class CardContent extends WJElement {
    /**
     * CardContent constructor
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Class name
     * @type {string}
     */
    className = "CardContent";

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
    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let element = document.createElement("slot");
        fragment.appendChild(element);

        return fragment;
    }
}