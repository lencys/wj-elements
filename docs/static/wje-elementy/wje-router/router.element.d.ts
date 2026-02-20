import { default as WJElement } from '../wje-element/element.js';
/**
 * `Routerx` is a custom web component that represents a router in a routing system.
 * @summary This element represents a router in a routing system.
 * @documentation https://elements.webjet.sk/components/router
 * @status stable
 * @augments {WJElement}
 * @tag wje-router
 */
export default class Routerx extends WJElement {
    /**
     * Returns the list of attributes to observe for changes.
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes(): Array<string>;
    set routes(value: any);
    get routes(): any;
    get rootElement(): Element;
    /**
     * Sets up the router after the component is drawn.
     */
    beforeDraw(): void;
    router: any;
    unbindIntercept: any;
    /**
     * Parses an element and returns an object representation.
     * @param {Element} element The element to parse.
     * @returns {object} The object representation of the element.
     */
    parseElement(element: Element): object;
    /**
     * Sets the breadcrumb for the transition.
     * @param {object} transition The transition object.
     */
    setBreadcrumb: (transition: object) => void;
    /**
     * Resets the scroll position.
     * @param {object} transition The transition object.
     */
    resetScrollPosition: (transition: object) => void;
    #private;
}
