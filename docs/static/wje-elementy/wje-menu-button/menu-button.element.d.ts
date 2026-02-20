import { default as WJElement } from '../wje-element/element.js';
/**
 * `MenuButton` is a custom web component that represents a menu button.
 * @summary This element represents a menu button.
 * @documentation https://elements.webjet.sk/components/menu-button
 * @status stable
 * @augments {WJElement}
 * @slot - The default slot for the menu button.
 * // @fires click - Event fired when the menu button is clicked.
 * @tag wje-menu-button
 */
export default class MenuButton extends WJElement {
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
     * Draws the component for the menu button.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
    /**
     * Refreshes the component after drawing. Adds a click event listener that toggles the "open" class on the content element.
     */
    afterDraw(): void;
}
