import { default as WJElement } from '../wje-element/element.js';
/**
 * @summary OrgchartItem is a custom web component that extends WJElement.
 * @documentation https://elements.webjet.sk/components/OrgchartItem
 * @status stable
 * @augments WJElement
 * @attribute {boolean} boss - The boss of the orgchart item (default: false).
 * @slot - The default slot for the orgchart item.
 * @slot child - The child slot for the orgchart item.
 * @csspart - Styles the element.
 * @csspart native - Styles the native element.
 * @csspart expander - Styles the expander element.
 * @tag wje-orgchart-item
 */
export default class OrgchartItem extends WJElement {
    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Sets the boss of the orgchart item.
     * @param value
     */
    set boss(value: boolean);
    /**
     * Gets the boss of the orgchart item.
     * @returns {boolean}
     */
    get boss(): boolean;
    beforeDraw(): void;
    /**
     * Draws the component for the org chart item.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
    expander: HTMLDivElement;
    /**
     * After Draws the component for the org chart item.
     */
    afterDraw(): void;
    /**
     * Toggles the children of the orgchart item.
     * @param e The event object.
     */
    toggleChildren: (e: any) => void;
    dispatchEvent(e: any): boolean;
}
