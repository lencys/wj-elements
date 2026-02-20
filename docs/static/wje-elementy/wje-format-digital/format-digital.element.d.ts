import { default as WJElement } from '../wje-element/element.js';
import { Localizer } from '../utils/localize.js';
/**
 * @summary This element formats and displays digital values such as file sizes or data transfer rates.
 * `FormatDigital` is a custom web component that represents a formatted digital value with units like
 * bytes or bits. It extends from `WJElement` and utilizes the `Localizer` class for locale-aware formatting.
 * @documentation https://elements.webjet.sk/components/format-digital
 * @status stable
 * @augments {WJElement}
 * @attribute {number} value - The numeric value to format (e.g., 1024 for 1 KB).
 * @attribute {string} unit - The unit of the value (`byte` or `bit`). Defaults to `byte`.
 * @attribute {string} unitDisplay - The display style of the unit (`short`, `long`, or `narrow`). Defaults to `short`.
 * @csspart native - The native part of the component.
 * @csspart formatted - The part representing the formatted value.
 * @csspart start - Slot for content before the formatted value.
 * @csspart end - Slot for content after the formatted value.
 * @tag wje-format-digital
 */
export default class FormatDigital extends WJElement {
    /**
     * Returns the CSS styles for the component.
     * Encapsulated using shadow DOM.
     * @static
     * @returns {CSSStyleSheet} - The CSS styles for the component.
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Returns the list of attributes to observe for changes.
     * Observes `value` and `unit-display` for re-rendering.
     * @static
     * @returns {Array<string>} - The attributes to observe.
     */
    static get observedAttributes(): Array<string>;
    localizer: Localizer;
    /**
     * Sets the value of the digital format.
     * This value determines the size in bytes or bits to be displayed.
     * @param {number} value The value to set.
     */
    set value(value: number);
    /**
     * Returns the value of the digital format.
     * @returns {number} The current value of the component.
     */
    get value(): number;
    /**
     * Sets the unit of the digital format.
     * Valid values are `bit` or `byte`.
     * @param {string} value The unit to set.
     */
    set unit(value: string);
    /**
     * Returns the unit of the digital format.
     * Defaults to `byte` if no unit is set.
     * @returns {string} The current unit (`bit` or `byte`).
     */
    get unit(): string;
    /**
     * Sets the unit display style for the digital format.
     * Valid values are `short`, `long`, or `narrow`.
     * @param {string} value The unit display style to set.
     */
    set unitDisplay(value: string);
    /**
     * Returns the unit display style for the digital format.
     * Defaults to `short` if not set.
     * @returns {string} - The current unit display style.
     */
    get unitDisplay(): string;
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    /**
     * Prepares the component before rendering.
     * Computes the formatted value based on the input value and unit.
     */
    beforeDraw(): void;
    formattedValue: string;
    /**
     * Renders the component and returns a document fragment.
     * The rendered structure includes a formatted value wrapped in a container
     * with slots for additional customization.
     * @returns {DocumentFragment} - The DOM structure for the component.
     */
    draw(): DocumentFragment;
    formatted: HTMLSpanElement;
}
