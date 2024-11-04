import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * `TabPanel` is a custom web component that represents a tab panel.
 * @summary This element represents a tab panel.
 * @documentation https://elements.webjet.sk/components/tab-panel
 * @status stable
 *
 * @extends {WJElement}
 *
 * @slot - The default slot for the tab panel.
 *
 * @tag wje-tab-panel
 */
export default class TabPanel extends WJElement {
    /**
     * Creates an instance of TabPanel.
     *
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Returns the class name of the tab panel.
     *
     * @returns {string} The class name of the tab panel.
     */
    className = "TabPanel";

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
}