import { default as WJElement } from '../wje-element/element.js';
/**
 * @summary This class represents a Badge element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/badge
 * @status stable
 * @augments WJElement
 * @attribute {string} color - The color of the badge element. Accepts any valid string primary, secondary, success, danger, warning, info, default.
 * @slot - The badge's main content.
 * @csspart native - The component's native wrapper.
 * @cssproperty [--wje-badge-border-radius=var(--wje-border-radius-pill)] - Border radius of the badge element.
 * @tag wje-badge
 */
export default class Badge extends WJElement {
    /**
     * Retrieves the CSS stylesheet for the Badge element.
     * @static
     * @returns {CSSStyleSheet} The CSS styles associated with the Badge.
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Specifies the attributes to observe for changes.
     * @static
     * @returns {Array<string>} An array containing the names of attributes to observe.
     * @example
     * static get observedAttributes() {
     *   return ['color'];
     * }
     */
    static get observedAttributes(): Array<string>;
    /**
     * Creates the DOM structure for the Badge element.
     * @returns {DocumentFragment} A document fragment containing the Badge's structure.
     */
    draw(): DocumentFragment;
}
