import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * @summary CardHeader class that extends WJElement.
 * @documentation https://elements.webjet.sk/components/card-header
 * @status stable
 * @augments WJElement
 * @slot - The card header main content.
 * @cssproperty [--wje-card-header-padding=1rem 1rem 0.5rem] - Padding of the component;
 */
export default class CardHeader extends WJElement {

    /**
     * CardHeader constructor method.
     */
    constructor() {
        super();
    }

    /**
     * Class name for the CardHeader.
     * @type {string}
     */
    className = "CardHeader";

    /**
     * Getter for the CSS stylesheet.
     * @returns {object} The styles object.
     * @static
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Sets up the attributes for the CardHeader.
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Draws the CardHeader.
     * @returns {DocumentFragment} The created document fragment.
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let element = document.createElement("slot");

        if(this.hasAttribute("separator"))
            this.classList.add("wje-separator");

        fragment.appendChild(element);

        return fragment;
    }
}