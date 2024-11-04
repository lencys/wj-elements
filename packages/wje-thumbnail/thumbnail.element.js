import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * @summary Thumbnail class
 * @documentation https://elements.webjet.sk/components/thumbnail
 * @status stable
 *
 * @extends WJElement
 *
 * @slot thumbnail-slot - The slot for the thumbnail content.
 *
 * @cssproperty [--wje-thumbnail-width=48px] - The width of the thumbnail.
 * @cssproperty [--wje-thumbnail-height=48px] - The height of the thumbnail.
 * @cssproperty [--wje-thumbnail-border-radius=var(--wje-border-radius-medium)] - The border radius of the thumbnail.
 *
 * @tag thumbnail-element
 */
export default class Thumbnail extends WJElement {
    /**
     * Thumbnail constructor
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Class name
     * @type {string}
     */
    className = "Thumbnail";

    /**
     * Get CSS stylesheet
     * @static
     * @returns {Object} styles
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Get observed attributes
     * @static
     * @returns {Array} An empty array
     */
    static get observedAttributes() {
        return [];
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
     * @returns {Object} Document fragment
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let element = document.createElement("slot");

        fragment.appendChild(element);

        return fragment;
    }
}