import { default as WJElement } from '../wje-element/element.js';
/**
 * `ReorderItem` is a custom web component that represents a reorder item.
 * @summary This element represents a reorder item.
 * @documentation https://elements.webjet.sk/components/reorder-item
 * @status stable
 * @augments WJElement
 * @csspart native-reorder-item - The native part of the reorder item.
 * @csspart handle-part - The handle part of the reorder item when the handle slot is present.
 * @slot - The default slot for the reorder item.
 * @tag wje-reorder-item
 */
export default class ReorderItem extends WJElement {
    /**
     * Returns the CSS stylesheet for the component.
     * @returns {CSSStyleSheet} The CSS stylesheet.
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Returns the list of observed attributes.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
}
