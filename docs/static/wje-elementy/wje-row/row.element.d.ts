import { default as WJElement } from '../wje-element/element.js';
/**
 * `Row` is a custom web component that represents a row in a layout system.
 * @summary This element represents a row in a layout system.
 * @documentation https://elements.webjet.sk/components/row
 * @status stable
 * @augments WJElement
 * @slot - The default slot for the row.
 * @tag wje-row
 */
export default class Row extends WJElement {
    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Draws the component for the row.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
}
