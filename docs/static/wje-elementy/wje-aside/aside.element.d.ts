import { default as WJElement } from '../wje-element/element.js';
/**
 * @summary This class represents an Aside element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/aside
 * @status stable
 * @augments WJElement
 * @slot - The aside main content.
 * @cssproperty --wje-aside-width;
 * @cssproperty --wje-aside-top;
 * @cssproperty --wje-aside-border-color: var(--wje-border-color);
 * @cssproperty --wje-aside-border-width;
 * @cssproperty --wje-aside-border-style;
 * @tag wje-aside
 */
export default class Aside extends WJElement {
    /**
     * Getter for the CSS stylesheet.
     * @returns {object} The styles for the Aside element.
     */
    static get cssStyleSheet(): object;
    /**
     * Getter for the observed attributes.
     * @returns {Array} An empty array as there are no observed attributes.
     */
    static get observedAttributes(): any[];
    /**
     * Method to draw the Aside element.
     * @returns {object} The document fragment containing the drawn element.
     */
    draw(): object;
}
