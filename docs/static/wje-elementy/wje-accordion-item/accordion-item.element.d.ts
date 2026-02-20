import { default as WJElement } from '../wje-element/element.js';
/**
 * @summary This class represents an Accordion Item element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/accordion-item
 * @status stable
 * @augments WJElement
 * @slot - The accordion item main content.
 * @tag wje-accordion
 */
export default class AccordionItem extends WJElement {
    static _instanceId: number;
    /**
     * Getter for the CSS stylesheet.
     * @returns {object} The styles for the Accordion Item element.
     */
    static get cssStyleSheet(): object;
    /**
     * Getter for the observed attributes.
     * @returns {Array} An array containing the name of the observed attribute.
     */
    static get observedAttributes(): any[];
    _instanceId: number;
    /**
     * Method to draw the Accordion Item element. This method returns a document fragment containing the drawn element.
     * @returns {object} The document fragment containing the drawn element.
     */
    draw(): object;
    headline: HTMLDivElement;
    toggle: HTMLSlotElement;
    content: HTMLDivElement;
    /**
     * Method to execute after the Accordion Item element is drawn.
     */
    afterDraw(): void;
    /**
     * Method to handle the attribute changes.
     */
    collapse: () => void;
    /**
     * Method to handle the attribute changes.
     */
    expand: () => void;
}
