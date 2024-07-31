import { AnimatedOutlet } from 'slick-router/components/animated-outlet.js';

/**
 * `Route` is a custom web component that represents a route in a routing system.
 * @summary This element represents a route in a routing system.
 * @documentation https://elements.webjet.sk/components/route
 * @status stable
 *
 * @class RouterOutlet
 * @extends {WJElement}
 *
 * @tag wje-router-outlet
 */
export default class RouterOutlet extends AnimatedOutlet {
    /**
     * Creates an instance of Route.
     *
     * @constructor
     */
    constructor() {
        super();
    }

    className = "RouterOutlet";
}