import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * `ToolbarAction` is a custom web component that represents a toolbar action.
 * @summary This element represents a toolbar action.
 * @documentation https://elements.webjet.sk/components/toolbar-action
 * @status stable
 *
 * @extends {WJElement}
 *
 * @csspart native - The native toolbar action wrapper.
 *
 * @slot - The default slot for the toolbar action.
 *
 * @tag wje-toolbar-action
 */
export default class ToolbarAction extends WJElement {
    /**
     * @constructor
     * @summary ToolbarAction constructor
     */
    constructor() {
        super();
    }

    /**
     * @summary Class name
     * @type {string}
     */
    className = "ToolbarAction";

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

        let maxItems = +this.maxItems || 0;
        let actions = this.getActions();

        let slot = document.createElement("slot");

        let element = document.createElement("div");
        element.setAttribute("part", "native");
        element.classList.add("native-toolbar-action");

        const shouldCollapse = maxItems !== 0 && actions.length > maxItems;
        if (shouldCollapse) {
            element = document.createElement("wje-dropdown");
        }

        element.appendChild(slot);

        fragment.appendChild(element);

        return fragment;
    }

    /**
     * @summary Get actions
     * @returns {Array} An array of wje-button elements
     */
    getActions() {
        return Array.from(this.querySelectorAll('wje-button'));
    }
}