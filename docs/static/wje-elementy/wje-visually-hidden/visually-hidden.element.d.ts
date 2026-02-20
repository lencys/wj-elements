import { default as WJElement } from '../wje-element/element.js';
/**
 * `VisuallyHidden` is a custom web component that represents a visually hidden element.
 * @summary This element represents a visually hidden element.
 * @documentation https://elements.webjet.sk/components/visually-hidden
 * @status stable
 * @augments {WJElement}
 * @slot - The default slot for the visually hidden element.
 * @tag wje-visually-hidden
 */
export default class VisuallyHidden extends WJElement {
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
     * Draws the component for the visually hidden element.
     * @returns {object} Document fragment
     */
    draw(): object;
}
