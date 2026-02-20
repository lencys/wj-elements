import { FormAssociatedElement } from '../internals/form-associated-element.js';
/**
 * @summary This method dispatches a custom event named "wje-toggle:change".
 * It is triggered when the input event is fired, which happens when the state of the checkbox changes.
 * The event is dispatched on the current instance of the Checkbox class.
 * @documentation https://elements.webjet.sk/components/checkbox
 * @status stable
 * @augments {FormAssociatedElement}
 * @slot - The checkbox main content.
 * @csspart native - The component's native wrapper.
 * @cssproperty [--wje-checkbox-border-radius=--wje-border-radius-medium] - Border radius of the component;
 * @cssproperty [--wje-checkbox-border-width=1px] - Border width of the component;
 * @cssproperty [--wje-checkbox-border-style=solid] - Border style of the component;
 * @cssproperty [--wje-checkbox-border-color=--wje-color-contrast-1] - Border color of the component;
 * @cssproperty [--wje-checkbox-margin-inline=0] - Margin inline of the component;
 */
export default class Checkbox extends FormAssociatedElement {
    /**
     * Getter for the CSS stylesheet.
     * @returns {string} The CSS stylesheet.
     */
    static get cssStyleSheet(): string;
    static get observedAttributes(): string[];
    pristine: boolean;
    _valueOff: string;
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
     * Getter for the customErrorDisplay attribute.
     * @returns {boolean} Whether the attribute is present.
     */
    get customErrorDisplay(): boolean;
    /**
     * Getter for the validateOnChange attribute.
     * @returns {boolean} Whether the attribute is present.
     */
    get validateOnChange(): boolean;
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
    /**
     * Setter for the defaultValue attribute.
     * This method sets the 'value' attribute of the custom input element to the provided value.
     * The 'value' attribute represents the default value of the input element.
     * @param {string} value The value to set as the default value.
     */
    set defaultValue(value: string);
    /**
     * Getter for the defaultValue attribute.
     * This method retrieves the 'value' attribute of the custom input element.
     * The 'value' attribute represents the default value of the input element.
     * If the 'value' attribute is not set, it returns an empty string.
     * @returns {string} The default value of the input element.
     */
    get defaultValue(): string;
    /**
     * Sets or removes the 'indeterminate' attribute for the object.
     * This property typically reflects the visual or functional state where
     * the component is neither fully active nor inactive.
     * @param {boolean} value A boolean where `true` indicates the 'indeterminate'
     * state should be set, and `false` removes it.
     */
    set indeterminate(value: boolean);
    /**
     * Retrieves the current state of the 'indeterminate' attribute.
     *
     * The 'indeterminate' attribute is typically used to signify a state
     * where a checkbox is neither checked nor unchecked, such as a partially
     * selected state.
     * @returns {boolean} Returns true if the 'indeterminate' attribute is present; otherwise, false.
     */
    get indeterminate(): boolean;
    /**
     * Set checked attribute.
     * @param {boolean} value true if the toggle is checked, false otherwise
     */
    set checked(value: boolean);
    /**
     * Get checked attribute.
     * @returns {boolean} true if the toggle is checked, false otherwise
     */
    get checked(): boolean;
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    /**
     * Draws the checkbox element.
     * @returns {DocumentFragment} The created fragment.
     */
    draw(): DocumentFragment;
    input: HTMLInputElement;
    /**
     * Adds an event listener after drawing the checkbox.
     */
    afterDraw(): void;
    /**
     * Syncs ARIA attributes on the host element.
     */
    syncAria(): void;
    #private;
}
