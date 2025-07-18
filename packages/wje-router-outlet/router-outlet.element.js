import { AnimatedOutlet, GenericCSS, setDefaultAnimation } from 'slick-router/components/animated-outlet.js';

import styles from './styles/styles.css?inline';

setDefaultAnimation(GenericCSS);

/**
 * `Route` is a custom web component that represents a route in a routing system.
 * @summary This element represents a route in a routing system.
 * @documentation https://elements.webjet.sk/components/route
 * @status stable
 * @augments AnimatedOutlet
 * @tag wje-router-outlet
 */
export default class RouterOutlet extends AnimatedOutlet {
    /**
     * Creates an instance of Route.
     */
    constructor() {
        super();

        const styleEl = document.createElement('style');
        styleEl.textContent = styles;
        this.parentNode.insertBefore(styleEl, this);
    }

    /**
     * The class name for the component.
     * @type {string}
     */
    className = 'RouterOutlet';
}
