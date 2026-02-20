import { default as WJElement } from '../wje-element/element.js';
/**
 * @summary Thumbnail class
 * @documentation https://elements.webjet.sk/components/thumbnail
 * @status stable
 * @augments WJElement
 * @slot thumbnail-slot - The slot for the thumbnail content.
 * @cssproperty [--wje-thumbnail-width=48px] - Defines the width of the thumbnail. Accepts any valid CSS length unit such as `px`, `rem`, or `%`.
 * @cssproperty [--wje-thumbnail-height=48px] - Specifies the height of the thumbnail. Accepts any valid CSS length unit.
 * @cssproperty [--wje-thumbnail-border-radius=var(--wje-border-radius-medium)] - Sets the border radius of the thumbnail, determining how rounded its corners appear. Accepts any valid CSS length unit or CSS variable.
 * @tag thumbnail-element
 */
export default class Thumbnail extends WJElement {
    /**
     * Returns the CSS stylesheet for the component.
     * @static
     * @returns {CSSStyleSheet} The CSS stylesheet
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Returns the list of observed attributes.
     * @static
     * @returns {Array} An empty array
     */
    static get observedAttributes(): any[];
    /**
     * Draws the component for the thumbnail.
     * @returns {object} Document fragment
     */
    draw(): object;
    /**
     * Sync ARIA attributes on host.
     */
    syncAria(): void;
}
