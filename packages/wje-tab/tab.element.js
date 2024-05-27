import { default as WJElement, event } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * `Tab` is a custom web component that represents a tab.
 * @summary This element represents a tab.
 * @documentation https://elements.webjet.sk/components/tab
 * @status stable
 *
 * @extends {WJElement}
 *
 * @cssproperty [--wje-tab-text-transfrom=uppercase] - The background of the tab.
 * @cssproperty [--wje-tab-font-weight=500] - The color of the tab.
 * @cssproperty [--wje-tab-letter-spacing=0.06em] - The background of the tab.
 * @cssproperty [--wje-tab-padding-inline=1rem] - The color of the tab.
 * @cssproperty [--wje-tab-padding-top=.75rem] - The background of the tab.
 * @cssproperty [--wje-tab-padding-bottom=.75rem] - The color of the tab.
 * @cssproperty [--wje-tab-color-active=var(--wje-color-primary-11)] - The background of the tab.
 * @cssproperty [--wje-tab-color-hover=var(--wje-color-primary-1)] - The color of the tab.
 *
 * @fire wje:tab-change - Dispatched when the tab is changed.
 *
 * @tag wje-tab
 */
export default class Tab extends WJElement {
    /**
     * Creates an instance of Tab.
     *
     * @constructor
     */
    constructor() {
        super();

        /**
         * Indicates whether this is the last tab.
         * @type {boolean}
         */
        this.last = false;
    }

    /**
     * Returns the class name of the tab.
     *
     * @returns {string} The class name of the tab.
     */
    className = "Tab";

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
    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let slot = document.createElement("slot");

        let a = document.createElement("a");
        a.setAttribute("href", "#" + this.panel);
        a.setAttribute("part", "native");
        a.classList.add("native-tab");
        a.appendChild(slot);

        fragment.appendChild(a);

        return fragment;
    }

    /**
     * Sets up the event listeners after the component is drawn.
     */
    afterDraw() {
        event.addListener(this, "click", "wje:tab-change");
    }
}