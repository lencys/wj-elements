import { default as WJElement } from '../wje-element/element.js';
/**
 * @summary ButtonGroup class
 * @class
 * @augments WJElement
 * @csspart native - The component's native wrapper.
 * @slot - The button group main content.
 * @csspart native - The component's native wrapper.
 */
export default class ButtonGroup extends WJElement {
    /**
     * Get CSS stylesheet for the ButtonGroup element.
     * @static
     * @returns {object} styles - The CSS styles
     */
    static get cssStyleSheet(): object;
    /**
     * Get observed attributes for the ButtonGroup element.
     * @static
     * @returns {Array<string>} observedAttributes - The observed attributes array
     */
    static get observedAttributes(): Array<string>;
    /**
     * Sets the "active" attribute to indicate the active state.
     * @param {boolean|string|number} value The value to set for the "active" attribute, indicating the active state.
     */
    set active(value: boolean | string | number);
    /**
     * Retrieves the value of the 'active' attribute.
     * If the attribute is not set, it returns false.
     * @returns {string|boolean} The value of the 'active' attribute or false if it is not set.
     */
    get active(): string | boolean;
    /**
     * Sets the color attribute of the element.
     * @param {string} value The value to set for the color attribute.
     */
    set color(value: string);
    /**
     * Retrieves the current value of the 'color' attribute.
     * If the 'color' attribute is not set, it defaults to 'primary'.
     * @returns {string} The value of the 'color' attribute or the default value 'primary'.
     */
    get color(): string;
    /**
     * Sets the round attribute for the element.
     * @param {string} value The value to set for the round attribute.
     */
    set round(value: string);
    /**
     * Returns whether the element has the 'round' attribute.
     * @returns {boolean} True if the 'round' attribute is present, otherwise false.
     */
    get round(): boolean;
    /**
     * Sets the 'fill' attribute of the element.
     * @param {string} value The value to assign to the 'fill' attribute.
     */
    set fill(value: string);
    /**
     * Retrieves the 'fill' attribute of the element. If the 'fill' attribute is not set,
     * it returns the default value 'link'.
     * @returns {string} The value of the 'fill' attribute, or 'link' if the attribute is not present.
     */
    get fill(): string;
    /**
     * Draw method for the ButtonGroup element.
     * @returns {object} fragment - The document fragment
     */
    draw(): object;
    slotElement: HTMLSlotElement;
    /**
     * After draw method for the ButtonGroup element.
     */
    afterDraw(): void;
    /**
     * Sync ARIA attributes on host.
     */
    syncAria(): void;
    /**
     * Find button method to find the button element.
     * @param {object} el The element
     * @returns {object} button - The button element
     */
    findButton(el: object): object;
    /**
     * Toggles the state of a group of buttons based on the active button.
     * @param {object} activeButton The button that is currently active.
     * @param {Array<object>} buttons An array of button objects to be toggled.
     * @returns {void} This method does not return a value.
     */
    toggle(activeButton: object, buttons: Array<object>, index: any): void;
    /**
     * Updates the state of a button by removing one mode attribute and setting another mode attribute.
     * @param {HTMLElement} button The button element whose state is to be updated.
     * @param {string} modeToRemove The mode attribute to be removed from the button. Expected values are 'color' or 'fill'.
     * @returns {void}
     */
    updateButtonState(button: HTMLElement, modeToRemove: string): void;
}
