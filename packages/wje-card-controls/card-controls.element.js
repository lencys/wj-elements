import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * @summary This class represents an Card Controls element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/card-controls
 * @status stable
 *
 * @extends WJElement
 *
 * @slot - The card controls main content.
 *
 * @cssproperty [--wje-card-controls-font-size=11px] - Font size of the component;
 * @cssproperty [--wje-card-controls-font-family=--wje-font-family-secondary] - Font family of the component;
 */
export default class CardControls extends WJElement {
    /**
     * CardControls constructor
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Class name
     * @type {string}
     */
    className = "CardControls";

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
}