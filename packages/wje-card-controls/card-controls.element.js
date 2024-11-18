import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * @summary This class represents Card Controls element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/card-controls
 * @status stable
 * @augments WJElement
 * @slot - The card controls main content.
 * @cssproperty [--wje-card-controls-font-size=11px] - Font size of the component;
 * @cssproperty [--wje-card-controls-font-family=--wje-font-family-secondary] - Font family of the component;
 */
export default class CardControls extends WJElement {

    /**
     * CardControls constructor method.
     * @class
     */
    constructor() {
        super();
    }

    /**
     * Class name for the CardControls element.
     * @type {string}
     */
    className = "CardControls";

    /**
     * Get CSS stylesheet for the CardControls element.
     * @static
     * @returns {object} styles - The CSS styles
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Setup attributes for the CardControls element.
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Draw method for the CardControls element.
     * @returns {object} fragment - The document fragment
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let element = document.createElement("slot");

        fragment.appendChild(element);

        return fragment;
    }
}