import { default as WJElement } from '../wje-element/element.js';
/**
 * @summary This element represents an icon. `IconElement` is a custom web component that represents an icon.
 * @documentation https://elements.webjet.sk/components/icon
 * @status stable
 * @augments WJElement
 * @csspart svg - The SVG part of the icon
 * @cssproperty [--wje-icon-size=1rem] - The size of the icon element
 * @cssproperty [--wje-icon-width=var(--wje-icon-size, 100%)] - The width of the icon element
 * @cssproperty [--wje-icon-height=var(--wje-icon-size, 100%)] - The height of the icon element
 * @tag wje-icon
 */
export default class Icon extends WJElement {
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
     * @param {object} context The context for drawing.
     * @param {object} store The store for drawing.
     * @param {object} params The parameters for drawing.
     * @returns {DocumentFragment}
     */
    draw(context: object, store: object, params: object): DocumentFragment;
    url: string;
    native: HTMLDivElement;
    /**
     * Called after the component has been drawn.
     */
    afterDraw(): void;
    /**
     * Sync ARIA attributes on host.
     */
    syncAria(): void;
    /**
     * Handles attribute changes for ARIA sync.
     * @param {string} name
     * @param {string|null} oldValue
     * @param {string|null} newValue
     */
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
}
