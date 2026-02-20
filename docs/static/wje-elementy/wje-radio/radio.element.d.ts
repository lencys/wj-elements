import { default as WJElement } from '../wje-element/element.js';
/**
 * @summary This class represents a Radio button element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/radio
 * @status stable
 * @augments WJElement
 * @slot - Default slot for the radio button label content.
 * @csspart native-radio - The native wrapper for the radio button.
 * @cssproperty [--wje-radio-margin-inline=0] - Specifies the horizontal (left and right) margin for the radio button. Accepts any valid CSS length unit (e.g., `px`, `rem`, `%`) to control spacing on both sides of the component.
 * @cssproperty [--wje-radio-margin-top=0] - Defines the top margin for the radio button. Accepts any valid CSS length value to adjust vertical spacing above the component.
 * @cssproperty [--wje-radio-margin-bottom=0] - Sets the bottom margin for the radio button. Accepts any valid CSS length value to adjust vertical spacing below the component.
 * // @fires wje-radio:change - Dispatched when the radio button's state changes.
 * // @fires wje-radio:input - Dispatched when the radio button is interacted with.
 */
export default class Radio extends WJElement {
    /**
     * Returns the CSS styles for the component.
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Returns the list of attributes to observe for changes.
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes(): Array<string>;
    set value(value: string);
    get value(): string;
    /**
     * Sets the name of the radio button.
     * @param value
     */
    set checked(value: boolean);
    /**
     * Gets the checked property of the radio button.
     * @returns {boolean}
     */
    get checked(): boolean;
    /**
     * Set checked attribute.
     * @param {boolean} value true if the toggle is checked, false otherwise
     */
    set disabled(value: boolean);
    /**
     * Get disabled attribute value.
     * @returns {boolean} true if the toggle is disabled, false otherwise
     */
    get disabled(): boolean;
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    /**
     * Draws the radio button.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
    input: HTMLInputElement;
    /**
     * Sets up the event listeners for the component.
     */
    afterDraw(): void;
    /**
     * Syncs ARIA attributes on the host element.
     */
    syncAria(): void;
    /**
     * Called when an attribute changes.
     * @param {object} e
     */
    inputEvent: (e: object) => void;
}
