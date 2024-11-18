import { default as WJElement, WjElementUtils } from "../wje-element/element.js";

import styles from "./scss/styles.scss?inline";

/**
 * @summary The Grid class is a custom web component that extends WJElement. It is a simple grid that can hold other elements or components.
 * It provides a slot for adding child elements or components.
 * @documentation https://elements.webjet.sk/components/grid
 * @status stable
 * @augments WJElement
 * @slot - The slot for adding child elements or components.
 */
export default class Grid extends WJElement {

    /**
     * Constructor for the Grid class.
     */
    constructor() {
        super();
    }

    /**
     * The class name for the Grid class.
     * @type {string}
     */
    className = "Grid";

    /**
     * Getter for the CSS stylesheet.
     * @returns {*}
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Getter for the observed attributes.
     * @returns {*[]}
     */
    static get observedAttributes() {
        return [];
    }

    /**
     * Sets up the attributes for the Grid.
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Draws the Grid element.
     * @returns {DocumentFragment}
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let element = document.createElement("slot");

        if(this.color)
            this.classList.add("wje-color-" + this.color, "wje-color");

        fragment.appendChild(element);

        return fragment;
    }
}