import { default as WJElement } from '../wje-element/element.js';
/**
 * @summary OrgchartItem is a custom web component that extends WJElement.
 * @documentation https://elements.webjet.sk/components/OrgchartItem
 * @status stable
 * @augments WJElement
 * @csspart - Styles the element.
 * @tag wje-orgchart-item
 * @example
 */
export default class OrgchartGroup extends WJElement {
    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Draws the component for the org chart group.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
    card: HTMLElement;
    /**
     * After Draws the component for the org chart group.
     */
    afterDraw(): void;
}
