import { bindRouterLinks } from 'slick-router/middlewares/router-links.js';

import { default as WJElement } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * `RouterLink` is a custom web component that represents a router link in a routing system.
 * @summary This element represents a router link in a routing system.
 * @documentation https://elements.webjet.sk/components/router-link
 * @status stable
 * @augments {WJElement}
 * @slot - The default slot for the router link.
 * @tag wje-router-link
 */
export default class RouterLink extends WJElement {
    /**
     * Creates an instance of RouterLink.
     * @class
     */
    constructor() {
        super();
    }

    className = 'RouterLink';

    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Returns the list of attributes to observe for changes.
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
        this.isShadowRoot = 'open';
        this.setAttribute('active-class', 'active');
    }

    /**
     * Draws the component for the router link.
     * @returns {DocumentFragment}
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let element = document.createElement('slot');

        fragment.appendChild(element);

        return fragment;
    }

    afterDraw(context, appStore, attributes) {
        this.unbindRouterLinks = bindRouterLinks(this.parentElement, { selector: false });
    }

    /**
     * Cleans up before the component is disconnected.
     */
    beforeDisconnect() {
        this.unbindRouterLinks?.();
    }
}
