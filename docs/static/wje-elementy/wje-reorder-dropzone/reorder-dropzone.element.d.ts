import { default as WJElement } from '../wje-element/element.js';
/**
 * `ReorderDropzone` is a custom web component that represents a reorder dropzone.
 * @summary This element represents a reorder dropzone.
 * @documentation https://elements.webjet.sk/components/reorder-dropzone
 * @status stable
 * @augments WJElement
 * @csspart native - The native part of the reorder dropzone.
 * @slot - The default slot for the reorder dropzone.
 * @tag wje-reorder-dropzone
 */
export default class ReorderDropzone extends WJElement {
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
