import { default as WJElement } from '../wje-element/element.js';
/**
 * @summary The Form class is a custom
 * web component that extends WJElement. It is a simple form that can hold other elements or components.
 * It provides a slot for adding child elements or components.
 * @documentation https://elements.webjet.sk/components/form
 * @status stable
 * @augments WJElement
 * @slot - The slot for adding child elements or components.
 * @tag wje-form
 */
export default class Form extends WJElement {
    /**
     * Getter for the CSS stylesheet.
     * @returns {*}
     */
    static get cssStyleSheet(): any;
    /**
     * Getter for the observed attributes.
     * @returns {*[]}
     */
    static get observedAttributes(): any[];
    /**
     * Draws the Form.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
}
