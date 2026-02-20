import { FormAssociatedElement } from '../internals/form-associated-element.js';
import { default as Radio } from '../wje-radio/radio.js';
/**
 * `RadioGroup` is a custom web component that represents a group of radio buttons.
 * @summary This element represents a group of radio buttons.
 * @documentation https://elements.webjet.sk/components/radio-group
 * @status stable
 * @augments {FormAssociatedElement}
 * @slot - The default slot for the radio group.
 * @tag wje-radio-group
 */
export default class RadioGroup extends FormAssociatedElement {
    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet(): CSSStyleSheet;
    static get observedAttributes(): string[];
    pristine: boolean;
    /**
     * Setter for the value attribute.
     * @param {string} value The value to set.
     */
    set value(value: string);
    /**
     * Getter for the value attribute.
     * @returns {string} The value of the attribute.
     */
    get value(): string;
    /**
     * Setter for the label attribute.
     * @param {string} value The label to set.
     */
    set label(value: string);
    /**
     * Getter for the label attribute.
     * @returns {string|null}
     */
    get label(): string | null;
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    /**
     * Draws the component for the radio group.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
    input: HTMLInputElement;
    /**
     * Adds event listeners after the component is drawn. Handles the selection of radio buttons.
     */
    afterDraw(): void;
    /**
     * Syncs ARIA attributes on the host element.
     */
    syncAria(): void;
    /**
     * Returns the radio button with the given value.
     * @param {string} value The value of the radio button.
     * @returns {Radio} The radio button.
     */
    getRadioByValue(value: string): Radio;
    /**
     * Removes the check from all radio buttons.
     */
    removeCheck(): void;
    /**
     * Sets the given radio button to checked.
     */
    checkRadio(radio: any): boolean;
    /**
     * Retrieves all direct child elements of the current element.
     * @returns {HTMLElement[]} An array of child elements.
     */
    getAllElements(): HTMLElement[];
    #private;
}
