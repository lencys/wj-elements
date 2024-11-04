import { default as WJElement } from "../wje-element/element.js";
import { bindRouterLinks } from "../wje-router/plugins/slick-router/middlewares/router-links.js";
import styles from "./styles/styles.css?inline";

/**
 * `RouterLink` is a custom web component that represents a router link in a routing system.
 * @summary This element represents a router link in a routing system.
 * @documentation https://elements.webjet.sk/components/router-link
 * @status stable
 *
 * @extends {WJElement}
 *
 * @slot - The default slot for the router link.
 *
 * @tag wje-router-link
 */
export default class RouterLink extends WJElement {
    /**
     * Creates an instance of RouterLink.
     *
     * @constructor
     */
    constructor() {
        super();
        this.unbindRouterLinks = bindRouterLinks(this, { selector: false });
    }

    className = "RouterLink";

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
        this.setAttribute("active-class", "active");
    }

    /**
     * Draws the component.
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
     * Cleans up before the component is disconnected.
     */
    beforeDisconnect() {
        this.unbindRouterLinks();
    }
}