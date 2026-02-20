import { default as WJElement } from '../wje-element/element.js';
/**
 * Represents a slider component that extends the WJElement class.
 * This slider supports features such as min, max, step values, bubble display, and event handling.
 * It offers both getter and setter methods for its attributes and dynamically handles rendering and updates.
 */
export default class Slider extends WJElement {
    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Returns the list of attributes to observe for changes.
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes(): Array<string>;
    /**
     * Sets the value of the slider.
     * @param {number} value The value to set.
     */
    set value(value: number);
    /**
     * Returns the value of the slider.
     * @returns {number} The value of the slider input.
     */
    get value(): number;
    /**
     * Sets the minimum value of the slider.
     * @param {number} value The minimum value to set.
     */
    set min(value: number);
    /**
     * Returns the minimum value of the slider.
     * @returns {number} The minimum value of the slider.
     */
    get min(): number;
    /**
     * Sets the maximum value of the slider.
     * @param {number} value The maximum value to set.
     */
    set max(value: number);
    /**
     * Returns the maximum value of the slider.
     * @returns {number} The maximum value of the slider.
     */
    get max(): number;
    /**
     * Sets the step value of the slider.
     * @param {number} value The step value to set.
     */
    set step(value: number);
    /**
     * Returns the step value of the slider.
     * @returns {number} The step value of the slider.
     */
    get step(): number;
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    /**
     * Draws the component for the slider.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
    input: HTMLInputElement;
    output: HTMLOutputElement;
    /**
     * Handles the post-rendering logic for a custom slider component. This method performs the following tasks:
     * - Sets the position of the handle.
     * - Displays a bubble indicator with the current value, if the slider has a "bubble" attribute.
     * - Dispatches initialization, movement, and change custom events for the slider input element.
     * - Updates the bubble position and value dynamically on input changes.
     * @returns {void} This method does not return a value.
     */
    afterDraw(): void;
    /**
     * Sets the handle position of the slider.
     */
    setHandlePosition: () => void;
    /**
     * Syncs ARIA attributes on the host element.
     */
    syncAria(): void;
    /**
     * Updates the position and content of a bubble element based on the input value.
     *
     * This function calculates the position of the bubble using the percentage representation
     * of the input's current value relative to its minimum and maximum bounds. It then adjusts
     * the bubble's left position dynamically for aesthetic purposes and updates its displayed
     * content to reflect the current input value.
     *
     * The function relies on the following elements:
     * - `this.input`: Represents the input element with properties `min`, `max`, and `value`.
     * - `this.output`: Represents the bubble element to be positioned and updated.
     *
     * The left positioning of the bubble ensures precise alignment with the input value indicator.
     */
    setBubble: () => void;
    /**
     * Calculates the percentage of a value within a given range.
     * @param {number} min The minimum value of the range.
     * @param {number} max The maximum value of the range.
     * @param {number} [value] The current value within the range. Defaults to 0 if not provided.
     * @returns {number} The calculated percentage as a number between 0 and 100. Returns 0 if the range is invalid.
     */
    getPercentage(min: number, max: number, value?: number): number;
}
