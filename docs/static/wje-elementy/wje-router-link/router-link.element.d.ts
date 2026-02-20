import { default as WJElement } from '../wje-element/element.js';
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
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Returns the list of attributes to observe for changes.
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes(): Array<string>;
    /**
     * Draws the component for the router link.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
    afterDraw(context: any, appStore: any, attributes: any): void;
    unbindRouterLinks: any;
}
