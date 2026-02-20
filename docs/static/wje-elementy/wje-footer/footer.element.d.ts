import { default as WJElement } from '../wje-element/element.js';
/**
 * @summary This element represents a footer. `Footer` is a custom web component that represents a footer.
 * @documentation https://elements.webjet.sk/components/footer
 * @status stable
 * @augments WJElement
 * @slot default - Default slot for the footer content
 * @cssproperty --primary-color - The primary color of the footer
 */
export default class Footer extends WJElement {
    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Returns the list of attributes to observe for changes.
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes(): Array<string>;
    /**
     * Draws the component.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
}
