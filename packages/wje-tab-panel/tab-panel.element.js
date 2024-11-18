import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * `TabPanel` is a custom web component that represents a tab panel.
 * @summary This element represents a tab panel.
 * @documentation https://elements.webjet.sk/components/tab-panel
 * @status stable
 * @augments {WJElement}
 * @slot - The default slot for the tab panel.
 * @tag wje-tab-panel
 */
export default class TabPanel extends WJElement {

    /**
     * Creates an instance of TabPanel.
     */
    constructor() {
        super();
    }

    /**
     * The class name for the component.
     */
    className = "TabPanel";

    /**
     * Returns the CSS styles for the component.
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
     * Draws the component for the tab panel.
     * @returns {DocumentFragment}
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let element = document.createElement("slot");

        fragment.appendChild(element);

        return fragment;
    }
}