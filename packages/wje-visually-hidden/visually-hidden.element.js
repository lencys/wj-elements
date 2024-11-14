import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * `VisuallyHidden` is a custom web component that represents a visually hidden element.
 * @summary This element represents a visually hidden element.
 * @documentation https://elements.webjet.sk/components/visually-hidden
 * @status stable
 *
 * @extends {WJElement}
 *
 * @slot - The default slot for the visually hidden element.
 *
 * @tag wje-visually-hidden
 */
export default class VisuallyHidden extends WJElement {
    /**
     * @constructor
     * @summary VisuallyHidden constructor
     */
    constructor() {
        super();
    }

    /**
     * @summary Class name
     * @type {string}
     */
    className = "VisuallyHidden";

    /**
     * @summary Get CSS stylesheet
     * @static
     * @returns {Object} styles
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * @summary Get observed attributes
     * @static
     * @returns {Array} An empty array
     */
    static get observedAttributes() {
        return [];
    }

    /**
     * @summary Setup attributes
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * @summary Draw method
     * @param {Object} context - The context
     * @param {Object} store - The store
     * @param {Object} params - The parameters
     * @returns {Object} Document fragment
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let slot = document.createElement("slot");

        fragment.appendChild(slot);

        return fragment;
    }
}