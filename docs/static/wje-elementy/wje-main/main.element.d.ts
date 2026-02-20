import { default as WJElement } from '../wje-element/element.js';
/**
 * `Main` is a custom web component that represents a main section.
 * It extends from `WJElement`.
 * @summary This element represents a main section.
 * @documentation https://elements.webjet.sk/components/main
 * @status stable
 * @augments {WJElement}
 * @slot - The default slot for the main section.
 * @tag wje-main
 */
export default class Main extends WJElement {
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
     * Draws the component for the main section.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
}
