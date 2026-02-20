import { FormAssociatedElement } from '../internals/form-associated-element.js';
/**
 * `Toggle` is a custom web component that represents a toggle input.
 * @summary This element represents a toggle input.
 * @documentation https://elements.webjet.sk/components/toggle
 * @status stable
 * @augments {FormAssociatedElement}
 * @csspart native - The native toggle wrapper.
 * @csspart input - The toggle input.
 * @csspart toggle - The toggle part.
 * @slot - The default slot for the toggle.
 * @cssproperty [--wje-toggle-color-base=var(--wje-color-contrast-3)] - The base background color of the toggle. Defines the default background color when the toggle is in an unselected state.
 * @cssproperty [--wje-toggle-width=30px] - The overall width of the toggle switch. Determines how wide the toggle component appears.
 * @cssproperty [--wje-toggle-height=18px] - The overall height of the toggle switch. Specifies how tall the toggle component appears.
 * @cssproperty [--wje-toggle-border-radius=50px] - The border radius of the toggle. Controls how rounded the corners of the toggle are.
 * @cssproperty [--wje-toggle-handle-width=14px] - The width of the toggle handle (knob). Determines the size of the handle for user interaction.
 * @cssproperty [--wje-toggle-handle-height=14px] - The height of the toggle handle (knob). Specifies the vertical size of the handle.
 * @cssproperty [--wje-toggle-handle-border-radius=9px] - The border radius of the toggle handle. Controls how rounded the handle is.
 * @cssproperty [--wje-toggle-handle-color=#fff] - The color of the toggle handle. Accepts any valid CSS color, such as `hex`, `rgb`, or `css variable`.
 * @cssproperty [--wje-toggle-handle-shadow=1px 0 1px 0.5px rgba(0,0,0,0.12), 2px 4px 6px rgba(0,0,0,0.2)] - The shadow applied to the toggle handle. Adds a subtle shadow effect for better visual clarity.
 * @cssproperty [--wje-toggle-handle-shadow-checked=1px 1px 0 rgba(0,0,0,0.08), -3px 3px 6px rgba(0,0,0,0.3)] - The shadow applied to the toggle handle when it is in the checked (on) state. Provides visual feedback to indicate the toggle state.
 * @cssproperty [--wje-toggle-duration=250ms] - The duration of the toggle animation in milliseconds. Controls how long the toggle animation lasts during state changes.
 * @cssproperty [--wje-toggle-curve=cubic-bezier(.4,0,.2,1)] - The easing curve used for the toggle animation. Defines the speed curve for the animation, enhancing the user experience with smooth transitions.
 * @tag wje-toggle
 */
export default class Toggle extends FormAssociatedElement {
    static get cssStyleSheet(): any;
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
    draw(): DocumentFragment;
    input: HTMLInputElement;
    afterDraw(): void;
    indeterminate: boolean;
    /**
     * Syncs ARIA attributes on the host element.
     */
    syncAria(): void;
    #private;
}
