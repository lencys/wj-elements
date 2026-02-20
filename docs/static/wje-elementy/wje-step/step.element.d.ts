import { default as WJElement } from '../wje-element/element.js';
/**
 * `Step` is a custom web component that represents a step.
 * @summary This element represents a step.
 * @documentation https://elements.webjet.sk/components/step
 * @status stable
 * @augments WJElement
 * @csspart native - The native part of the step.
 * @slot - The default slot for the step.
 * @tag wje-step
 */
export default class Step extends WJElement {
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
