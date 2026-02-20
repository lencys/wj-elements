import { FormAssociatedElement } from '../internals/form-associated-element.js';
/**
 * @summary This class represents a custom input element. It extends the WJElement class and provides additional functionality for handling input.
 * @documentation https://elements.webjet.sk/components/input
 * @status stable
 * @augments {FormAssociatedElement}
 * @csspart native - The native part.
 * @csspart wrapper - The wrapper part.
 * @csspart input - The input part.
 * @csspart clear - The clear part.
 * @slot start - Slot for content at the start of the input.
 * @slot end - Slot for content at the end of the input.
 * @cssproperty [--wje-input-font-family=var(--wje-font-family)] - Defines the font family for the input text.
 * @cssproperty [--wje-input-background-color=var(--wje-background)] - Specifies the background color of the input field.
 * @cssproperty [--wje-input-color=var(--wje-color)] - Sets the text color within the input field.
 * @cssproperty [--wje-input-color-invalid=var(--wje-color-danger)] - Changes the text color when the input value is invalid.
 * @cssproperty [--wje-input-border-color=var(--wje-border-color)] - Defines the border color of the input field.
 * @cssproperty [--wje-input-border-color-focus=var(--wje-color-primary)] - Specifies the border color when the input is focused.
 * @cssproperty [--wje-input-border-width=1px] - Sets the width of the input border.
 * @cssproperty [--wje-input-border-style=solid] - Defines the border style of the input (e.g., solid, dashed).
 * @cssproperty [--wje-input-border-radius=4px] - Specifies the border radius, creating rounded corners.
 * @cssproperty [--wje-input-margin-bottom=.5rem] - Adds spacing below the input field.
 * @cssproperty [--wje-input-line-height=20px] - Sets the line height of the text within the input field.
 * @cssproperty [--wje-input-slot-padding-inline=.5rem] - Controls the padding on the left and right of the input slot content.
 * // @fires wje-input:input - Dispatched when the input value changes.
 * // @fires wje-input:clear - Dispatched when the input is cleared.
 */
export default class Input extends FormAssociatedElement {
    static _instanceId: number;
    /**
     * Getter for the cssStyleSheet attribute.
     * @returns {CSSStyleSheet} The CSS style sheet of the input element.
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Getter for the observedAttributes attribute of the input element.
     * @returns {Array} The attributes to observe for changes.
     */
    static get observedAttributes(): any[];
    pristine: boolean;
    _instanceId: number;
    /**
     * Setter for the value attribute.
     * @param {string} value The value to set.
     */
    set value(value: string);
    /**
     * Retrieves the value from the input element if available; otherwise,
     * returns the internal _value property or an empty string as the default.
     * @returns {string} The current value from the input element, the internal _value, or an empty string.
     */
    get value(): string;
    _value: any;
    /**
     * Sets the label attribute of the element.
     * @param {string} value The value to set as the label attribute.
     */
    set label(value: string);
    /**
     * Retrieves the value of the 'label' attribute if it exists.
     * If the 'label' attribute is not set, it returns false.
     * @returns {string|boolean} The value of the 'label' attribute as a string, or false if the attribute is not set.
     */
    get label(): string | boolean;
    /**
     * Sets the custom error display attribute for an element.
     * @param {boolean} value If true, adds the 'custom-error-display' attribute to the element. If false, removes the attribute from the element.
     */
    set customErrorDisplay(value: boolean);
    /**
     * Getter for the customErrorDisplay attribute.
     * @returns {boolean} Whether the attribute is present.
     */
    get customErrorDisplay(): boolean;
    /**
     * Sets the `validateOnChange` property. If set to a truthy value, it adds the
     * `validate-on-change` attribute to the element. If set to a falsy value, it
     * removes the `validate-on-change` attribute from the element.
     * @param {boolean} value Determines whether to add or remove the
     * `validate-on-change` attribute. A truthy value adds the attribute, whereas a
     * falsy value removes it.
     */
    set validateOnChange(value: boolean);
    /**
     * Getter for the validateOnChange attribute.
     * @returns {boolean} Whether the attribute is present.
     */
    get validateOnChange(): boolean;
    /**
     * @summary Setter for the defaultValue attribute.
     * This method sets the 'value' attribute of the custom input element to the provided value.
     * The 'value' attribute represents the default value of the input element.
     * @param {string} value The value to set as the default value.
     */
    set defaultValue(value: string);
    /**
     * @summary Getter for the defaultValue attribute.
     * This method retrieves the 'value' attribute of the custom input element.
     * The 'value' attribute represents the default value of the input element.
     * If the 'value' attribute is not set, it returns an empty string.
     * @returns {string} The default value of the input element.
     */
    get defaultValue(): string;
    /**
     * Sets or removes the 'clearable' attribute on the element.
     * When set to a truthy value, the 'clearable' attribute is added; when falsy, the attribute is removed.
     * @param {boolean} value Determines whether to set or remove the 'clearable' attribute. If true, the 'clearable' attribute is added. If false, it is removed.
     */
    set clearable(value: boolean);
    /**
     * Checks if the 'clearable' attribute is present on the element.
     * @returns {boolean} True if the 'clearable' attribute is set, otherwise false.
     */
    get clearable(): boolean;
    /**
     * Sets the placeholder value for an element. If the provided value is non-empty,
     * it assigns the value to the "placeholder" attribute. Otherwise, it removes
     * the "placeholder" attribute from the element.
     * @param {string} value The placeholder text to set or null/undefined to remove the attribute.
     */
    set placeholder(value: string);
    /**
     * Retrieves the value of the 'placeholder' attribute from the element.
     * If the attribute is not set, it returns an empty string.
     * @returns {string} The value of the 'placeholder' attribute or an empty string if not set.
     */
    get placeholder(): string;
    /**
     * Sets the `variant` attribute on the element. If a value is provided, it will set the attribute to the given value.
     * If no value is provided, it removes the `variant` attribute from the element.
     * @param {string} value The value to set for the `variant` attribute. If falsy, the attribute is removed.
     */
    set variant(value: string);
    /**
     * Retrieves the value of the 'variant' attribute from the element.
     * If the attribute is not set, it defaults to 'default'.
     * @returns {string} The value of the 'variant' attribute or 'default' if not set.
     */
    get variant(): string;
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    /**
     * Draws the input element.
     * @returns {DocumentFragment} The drawn input.
     */
    draw(): DocumentFragment;
    _ariaErrorId: string;
    clear: HTMLElement;
    native: HTMLDivElement;
    labelElement: HTMLLabelElement;
    input: HTMLInputElement;
    errorMessage: HTMLDivElement;
    /**
     * Runs after the input is drawn to the DOM.
     */
    afterDraw(): void;
    /**
     * Syncs ARIA attributes on the host element.
     */
    syncAria(): void;
    /**
     * Checks whether the input has a slot.
     * @param {HTMLElement} el The element to check.
     * @param {string} slotName The name of the slot to check for.
     * @returns {boolean} Whether the input has the slot.
     */
    hasSlot(el: HTMLElement, slotName?: string): boolean;
}
