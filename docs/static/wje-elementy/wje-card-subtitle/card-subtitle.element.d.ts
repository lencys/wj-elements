import { default as WJElement } from '../wje-element/element.js';
/**
 * @summary CardSubtitle class that extends WJElement.
 * @documentation https://elements.webjet.sk/components/card-subtitle
 * @status stable
 * @augments WJElement
 * @slot - The card subtitle main content.
 * @cssproperty [--wje-card-subtitle-font-size=11px] - Font size of the component;
 * @cssproperty [--wje-card-subtitle-font-family=var(--wje-font-family-secondary)] - Font family of the component;
 * @cssproperty [--wje-card-subtitle-padding=0] - Padding of the component;
 */
export default class CardSubtitle extends WJElement {
    /**
     * Getter for the CSS stylesheet.
     * @returns {object} The styles object.
     * @static
     */
    static get cssStyleSheet(): object;
    /**
     * Getter for the observed attributes.
     * @returns {Array} An empty array.
     * @static
     */
    static get observedAttributes(): any[];
    /**
     * Draws the CardSubtitle element.
     * @returns {DocumentFragment} The created document fragment.
     */
    draw(): DocumentFragment;
}
