import { default as WJElement } from '../wje-element/element.js';
/**
 * @summary This class represents an Accordion element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/accordion
 * @status stable
 * @augments WJElement
 * @attribute {boolean} multiple - The multiple attribute for the accordion.
 * @attribute {number} index - The index attribute for the accordion.
 * @attribute {boolean} disabled - The disabled attribute for the accordion.
 * @attribute {boolean} expanded - The expanded attribute for the accordion.
 * @slot - The accordion main content.
 * //@fires [wje-accordion-item:open] The event fired when the accordion item is opened.
 * @tag wje-accordion
 */
export default class Accordion extends WJElement {
    /**
     * Getter for the CSS stylesheet.
     * @returns {object} The styles for the Accordion element.
     */
    static get cssStyleSheet(): object;
    /**
     * Getter for the observed attributes.
     * @returns {Array} An array containing the name of the observed attribute.
     */
    static get observedAttributes(): any[];
    /**
     * Sets the `multiple` attribute on the element.
     * If `true`, the `multiple` attribute is added.
     * If `false`, the `multiple` attribute is removed.
     * @param {boolean} value A boolean value indicating whether the element should support multiple selections.
     */
    set multiple(value: boolean);
    /**
     * Determines whether the element has the `multiple` attribute.
     * @returns {boolean} `true` if the `multiple` attribute is present, otherwise `false`.
     */
    get multiple(): boolean;
    /**
     * Sets the value of the `index` attribute.
     * @param {number|string} value The value to set for the `index` attribute.
     */
    set index(value: number | string);
    /**
     * Retrieves the value of the `index` attribute as a number.
     * @returns {number} The numerical value of the `index` attribute, or `0` if the attribute is not set.
     */
    get index(): number;
    /**
     * Method to run before the element is drawn.
     */
    beforeDraw(): void;
    /**
     * Method to draw the Accordion element.
     * @returns {object} The document fragment containing the drawn element.
     */
    draw(): object;
    slotEl: HTMLSlotElement;
    /**
     * Method to run after the element is drawn.
     */
    afterDraw(): void;
    /**
     * Method to run after the element is drawn.
     * @param exception
     */
    collapseAll(exception: any): void;
    /**
     * Method to get the accordions.
     * @returns {Array} An array containing the accordions.
     */
    getAccordions(): any[];
}
