import { default as WJElement } from '../wje-element/element.js';
/**
 * @summary Orgchart is a custom web component that extends WJElement.
 * @documentation https://elements.webjet.sk/components/Orgchart
 * @status stable
 * @augments WJElement
 * @csspart - Styles the element.
 * @tag wje-orgchart
 * @example
 */
export default class Orgchart extends WJElement {
    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Draws the component for the org chart.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
    native: HTMLDivElement;
    /**
     * Sync ARIA attributes on host.
     */
    syncAria(): void;
}
