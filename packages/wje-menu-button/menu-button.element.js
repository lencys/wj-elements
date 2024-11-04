import { default as WJElement, event } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * `MenuButton` is a custom web component that represents a menu button.
 * @summary This element represents a menu button.
 * @documentation https://elements.webjet.sk/components/menu-button
 * @status stable
 *
 * @extends {WJElement}
 *
 * @slot - The default slot for the menu button.
 *
 * @fires click - Event fired when the menu button is clicked.
 *
 * @tag wje-menu-button
 */

export default class MenuButton extends WJElement {
    /**
     * Creates an instance of MenuButton.
     *
     * @constructor
     */
    constructor() {
        super();
    }

    className = "MenuButton";

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

        let slot = document.createElement("slot");

        fragment.appendChild(slot);

        return fragment;
    }

    /**
     * Refreshes the component after drawing.
     * Adds a click event listener that toggles the "open" class on the content element.
     * @params {Object} context - The context for drawing.
     * @params {Object} store - The store for drawing.
     * @params {Object} params - The parameters for drawing.
     */
    afterDraw() {
        event.addListener(this, "click", null, (e) => {
            document.querySelector(`#${this.contentId}`).classList.toggle("open");
        });
    }
}