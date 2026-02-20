import { default as WJElement } from '../wje-element/element.js';
/**
 * @summary This class represents an Card Content element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/card-content
 * @status stable
 * @augments WJElement
 * @slot - The card content main content.
 * @cssproperty [--wje-card-padding=0] - Padding of the component;
 */
export default class CardContent extends WJElement {
    /**
     * Get CSS stylesheet for the CardContent element.
     * @static
     * @returns {object} styles - The CSS styles for the CardContent element.
     */
    static get cssStyleSheet(): object;
    /**
     * Draw method for the CardContent element.
     * @returns {object} fragment - The document fragment containing the drawn element.
     */
    draw(): object;
}
