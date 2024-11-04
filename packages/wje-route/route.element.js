import { default as WJElement } from "../wje-element/element.js";

/**
 * `Route` is a custom web component that represents a route in a routing system.
 * @summary This element represents a route in a routing system.
 * @documentation https://elements.webjet.sk/components/route
 * @status stable
 *
 * @class Route
 * @extends {WJElement}
 *
 * @tag wje-route
 */
export default class Route extends WJElement {
    /**
     * Creates an instance of Route.
     *
     * @constructor
     */
    constructor() {
        super();
    }

    className = "Route";

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
}