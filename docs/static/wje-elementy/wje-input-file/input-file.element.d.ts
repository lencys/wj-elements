import { default as WJElement } from '../wje-element/element.js';
/**
 * `InputFile` is a custom web component that represents a file input.
 * @summary This element represents a file input.
 * @documentation https://elements.webjet.sk/components/input-file
 * @status stable
 * @augments {WJElement}
 * @csspart native - The native file input wrapper.
 * @csspart input - The text input.
 * @csspart file-input - The file input element.
 * // @fires wje-input-file:change - Event fired when the file input changes.
 * @tag wje-input-file
 */
export default class InputFile extends WJElement {
    /**
     * Returns the CSS stylesheet.
     * @static
     * @returns {object} styles
     */
    static get cssStyleSheet(): object;
    /**
     * Returns the observed attributes.
     * @static
     * @returns {Array} An empty array
     */
    static get observedAttributes(): any[];
    _value: string;
    /**
     * @summary Sets the value of the input file.
     * @param {string} value The value to set for the input file.
     */
    set value(value: string);
    /**
     * Gets the value of the input file.
     * @returns {string}
     */
    get value(): string;
    /**
     * Draws the component.
     * @returns {object} Document fragment
     */
    draw(): object;
    native: HTMLDivElement;
    input: HTMLElement;
    fileInput: HTMLInputElement;
    /**
     * After draw method for the InputFile class.
     */
    afterDraw(): void;
}
