import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * @summary Orgchart is a custom web component that extends WJElement.
 * @documentation https://elements.webjet.sk/components/Orgchart
 * @status stable
 *
 * @extends WJElement
 *
 * @csspart - Styles the element.
 *
 * @tag wje-orgchart
 *
 * @example
 * <wje-orgchart></wje-orgchart>
 */
export default class Orgchart extends WJElement {
    /**
     * Creates an instance of Orgchart.
     *
     * @constructor
     */
    constructor() {
        super();
    }

    className = "Orgchart";


    /**
     * Returns the CSS styles for the component.
     *
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Draws the component.
     *
     * @param {Object} context - The context for drawing.
     * @param {Object} store - The store for drawing.
     * @param {Object} params - The parameters for drawing.
     * @returns {DocumentFragment}
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement("div");
        native.setAttribute("part", "native");
        native.classList.add("native-orgchart");

        let slot = document.createElement("slot");

        native.appendChild(slot);

        fragment.appendChild(native);

        this.native = native;

        return fragment;
    }
}
