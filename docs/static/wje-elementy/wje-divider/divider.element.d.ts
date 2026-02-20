import { default as WJElement } from '../wje-element/element.js';
/**
 * @summary Divider is a custom web component that extends WJElement.
 * It provides a simple divider line that can be used to separate content.
 * @documentation https://elements.webjet.sk/components/divider
 * @status stable
 * @augments WJElement
 * @slot - This is a default/unnamed slot.
 * @cssproperty [--wje-border-width=1px] - The size of the border.
 * @cssproperty [--wje-divider-border-color=var(--wje-border-color)] - The color of the divider borderline.
 * @cssproperty [--wje-divider-border-width=var(--wje-border-width, 1px)] - The width of the divider borderline.
 * @cssproperty [--wje-divider-spacing=0] - The spacing for the divider.
 * @tag wje-divider
 * @tag wje-divider
 */
export default class Divider extends WJElement {
    /**
     * Getter for the CSS stylesheet.
     * @returns {string} The CSS stylesheet.
     */
    static get cssStyleSheet(): string;
    /**
     * Getter for the observed attributes.
     * @returns {Array} An empty array as there are no observed attributes.
     */
    static get observedAttributes(): any[];
    /**
     * Draws the Divider.
     * @returns {DocumentFragment} The created document fragment.
     */
    draw(): DocumentFragment;
}
