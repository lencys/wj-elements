import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * `VisuallyHidden` is a custom web component that represents a visually hidden element.
 * @summary This element represents a visually hidden element.
 * @documentation https://elements.webjet.sk/components/visually-hidden
 * @status stable
 * @augments {WJElement}
 * @slot - The default slot for the visually hidden element.
 * @tag wje-visually-hidden
 */
export default class VisuallyHidden extends WJElement {

    /**
     * Creates an instance of VisuallyHidden.
     */
    constructor() {
        super();
    }

    /**
     * The class name for the component.
     * @type {string}
     */
    className = "VisuallyHidden";

    /**
     * Returns the CSS stylesheet for the component.
     * @static
     * @returns {CSSStyleSheet} The CSS stylesheet
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Returns the list of observed attributes.
     * @static
     * @returns {Array} An empty array
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
     * Draws the component for the visually hidden element.
     * @returns {object} Document fragment
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let slot = document.createElement("slot");

        fragment.appendChild(slot);

        return fragment;
    }
}