import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * @summary The Container class is a custom web component that extends WJElement. It is a simple container that can hold other elements or components.
 * It provides a slot for adding child elements or components. The Container class also supports indentation through the `indent` property.
 * The indentation is applied as a CSS variable (`--wje-container-indent`) which can be used in the styles of child elements or components.
 * @documentation https://elements.webjet.sk/components/card-header
 * @status stable
 *
 * @extends WJElement
 *
 * @slot - The slot for adding child elements or components.
 *
 * @cssproperty [--wje-container-indent] - The indentation of the container.
 *
 * @tag wje-container
 */
export default class Container extends WJElement {
    /**
     * Container constructor.
     */
    constructor() {
        super();
    }

    /**
     * Class name for the Container.
     * @type {string}
     */
    className = "Container";

    /**
     * Getter for the CSS stylesheet.
     * @returns {Object} The styles object.
     * @static
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Getter for the observed attributes.
     * @returns {Array} An empty array.
     * @static
     */
    static get observedAttributes() {
        return [];
    }

    /**
     * Sets up the attributes for the Container.
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Draws the Container.
     * @param {Object} context - The context to draw in.
     * @param {Object} store - The store to use.
     * @param {Object} params - The parameters to use.
     * @returns {DocumentFragment} The created document fragment.
     */
    draw() {
        let fragment = document.createDocumentFragment();

        if(this.indent)
            this.style.setProperty("--wje-container-indent", this.indent);

        let element = document.createElement("slot");

        fragment.appendChild(element);

        return fragment;
    }
}