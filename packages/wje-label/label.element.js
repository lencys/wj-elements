import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * `Label` is a custom web component that represents a label.
 * It extends from `WJElement`.
 * @summary This element represents a label.
 * @documentation https://elements.webjet.sk/components/label
 * @status stable
 *
 * @extends {WJElement}
 *
 * @csspart label - The label part of the component.
 *
 * @slot - The default slot for the label.
 *
 * @cssprop [--wje-label-color=black] - The color of the label.
 * @cssprop [--wje-label-font-size=16px] - The font size of the label.
 *
 * @fires wje-label:change - Event fired when the label is changed.
 *
 * @tag wje-label
 */
export default class Label extends WJElement {
    /**
     * Creates an instance of Label.
     *
     * @constructor
     */
    constructor() {
        super();
    }

    className = "Label";

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
     * Returns the list of attributes to observe for changes.
     *
     * @static
     * @returns {Array<string>}
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
     * Draws the component.
     *
     * @param {Object} context - The context for drawing.
     * @param {Object} store - The store for drawing.
     * @param {Object} params - The parameters for drawing.
     * @returns {DocumentFragment}
     */
    draw() {
        let fragment = document.createDocumentFragment();

        if(this.color)
            this.classList.add("wje-color-" + params.color, "wje-color");

        let element = document.createElement("slot");

        fragment.appendChild(element);

        return fragment;
    }
}