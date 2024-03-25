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
}