import WJElement from "../wje-element/element.js";
import styles from "./styles/styles.scss?inline";

/**
 * `List` is a custom web component that represents a list.
 * It extends from `WJElement`.
 * @summary This element represents a list.
 * @documentation https://elements.webjet.sk/components/list
 * @status stable
 *
 * @extends {WJElement}
 *
 * @slot - The default slot for the list.
 *
 * @cssprop [--wje-list-inset-padding=1rem] - The padding of the list when it is inset.
 * @cssprop [--wje-list-border-radius=8px] - The border radius of the list.
 * @cssprop [--wje-list-background=var(--wje-background)] - The background of the list.
 *
 * @tag wje-list
 */
export default class List extends WJElement {
    /**
     * Creates an instance of List.
     *
     * @constructor
     */
    constructor() {
        super();
    }

    className = "List";

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

        let element = document.createElement("slot");
        fragment.appendChild(element);

        return fragment;
    }

    /**
     * Called after the component has been drawn.
     * @params {Object} context - The context for drawing.
     * @params {Object} store - The store for drawing.
     * @params {Object} params - The parameters for drawing.
     */
    afterDraw() {
        this.classList.toggle("wje-lines-" + this.lines, this.hasAttribute("lines"));
        this.classList.toggle("wje-inset", this.hasAttribute("inset"));
    }
}