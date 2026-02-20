import { default as WJElement } from '../wje-element/element.js';
/**
 * @summary `Header` is a custom web component that represents a header. It extends from `WJElement`.
 * @documentation https://elements.webjet.sk/components/header
 * @status stable
 * @augments {WJElement}
 * @csspart native - The native part
 * @slot default - Default slot for the header content
 * @cssproperty [--wje-header-background=var(--wje-background)] - The background of the header element.
 * @cssproperty [--wje-header-border-color=var(--wje-border-color)] - The border color of the header element.
 * @cssproperty [--wje-header-border-width=0 0 1px 0] - The border width of the header element.
 * @cssproperty [--wje-header-border-style=solid] - The border styles of the header
 * @cssproperty [--wje-header-top=0] - The position top of the header
 * @cssproperty [--wje-header-height=60px] - The height of the header element.
 * @tag wje-header
 */
export default class Header extends WJElement {
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
