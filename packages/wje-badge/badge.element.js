import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * @summary This class represents an Badge element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/avatar
 * @status stable
 *
 * @extends WJElement
 *
 * @slot - The badge main content.
 */
export default class Badge extends WJElement {
    /**
     * Badge constructor
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Class name
     * @type {string}
     */
    className = "Badge";

    /**
     * Get CSS stylesheet
     * @static
     * @returns {Object} styles - The CSS styles
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Getter for the observed attributes.
     * @return {Array} An array containing the name of the observed attribute.
     */
    static get observedAttributes() {
        return ['color'];
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

        let native = document.createElement('div');
        native.setAttribute('part', 'native');
        native.classList.add('native-badge');

        // Add color
        if (this.hasAttribute("color"))
            native.classList.add("wje-color-" + this.color, "wje-color");
        else
            native.classList.add("wje-color-default", "wje-color");

        let slot = document.createElement("slot");

        native.appendChild(slot);

        fragment.appendChild(native);

        return fragment;
    }
}