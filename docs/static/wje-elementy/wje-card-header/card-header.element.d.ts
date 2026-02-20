import { default as WJElement } from '../wje-element/element.js';
/**
 * @summary CardHeader class that extends WJElement.
 * @documentation https://elements.webjet.sk/components/card-header
 * @status stable
 * @augments WJElement
 * @slot - The card header main content.
 * @cssproperty [--wje-card-header-padding=1rem 1rem 0.5rem] - Padding of the component;
 */
export default class CardHeader extends WJElement {
    /**
     * Getter for the CSS stylesheet.
     * @returns {object} The styles object.
     * @static
     */
    static get cssStyleSheet(): object;
    /**
     * Draws the CardHeader.
     * @returns {DocumentFragment} The created document fragment.
     */
    draw(): DocumentFragment;
}
