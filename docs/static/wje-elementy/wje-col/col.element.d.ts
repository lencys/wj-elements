import { default as WJElement } from '../wje-element/element.js';
/**
 * @summary Col class that extends WJElement.
 * @documentation https://elements.webjet.sk/components/col
 * @status stable
 * @augments WJElement
 * @slot - The col main content.
 */
export default class Col extends WJElement {
    static get cssStyleSheet(): any;
    /**
     * Draws the component element.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
}
