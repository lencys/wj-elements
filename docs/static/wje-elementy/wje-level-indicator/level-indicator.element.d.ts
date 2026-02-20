import { default as WJElement } from '../wje-element/element.js';
/**
 * @summary LevelIndicator is a custom web component that extends WJElement.
 * @documentation https://elements.webjet.sk/components/LevelIndicator
 * @status stable
 * @augments WJElement
 * @csspart - Styles the element.
 * @tag wje-level-indicator
 * @example
 * <wje-level-indicator></wje-level-indicator>
 */
export default class LevelIndicator extends WJElement {
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
     * Sets the level attribute for an instance.
     * @param {string} value The value to set for the 'level' attribute.
     */
    set level(value: string);
    /**
     * Retrieves the level attribute of an element, with validation to ensure
     * it is within the range of 0 to 3. If the level attribute is not present,
     * the default value is 1. The result is parsed as an integer and constrained
     * to the valid range.
     * @returns {number} The normalized level value, which is an integer between 0 and 3.
     */
    get level(): number;
    /**
     * Sets the value of the "bars" attribute.
     * @param {string} value The value to set for the "bars" attribute.
     */
    set bars(value: string);
    /**
     * Retrieves the value of the "bars" attribute, parses it as an integer,
     * and ensures it is at least 1. If the attribute is not set, defaults to 3.
     * @returns {number} The parsed integer value of the "bars" attribute or the default value of 3, constrained to a minimum of 1.
     */
    get bars(): number;
    /**
     * Sets the 'colorize' attribute on the element. If the provided value is truthy,
     * the attribute will be set. If the value is falsy, the attribute will be removed.
     * @param {boolean} value A boolean determining whether to set or remove the 'colorize' attribute.
     */
    set colorize(value: boolean);
    /**
     * Determines whether the element has the "colorize" attribute set.
     * @returns {boolean} Returns true if the "colorize" attribute is present, otherwise false.
     */
    get colorize(): boolean;
    /**
     * Sets the 'reverse' attribute on the element. If the provided value is truthy, the attribute is added;
     * otherwise, the attribute is removed.
     * @param {boolean} value The value determining whether to set or remove the 'reverse' attribute.
     */
    set reverse(value: boolean);
    /**
     * Getter method to check if the "reverse" attribute is present on the element.
     * @returns {boolean} Returns true if the "reverse" attribute is set; otherwise, returns false.
     */
    get reverse(): boolean;
    /**
     * Creates a document fragment, appends a new slot element to it, and returns the fragment.
     * @returns {DocumentFragment} A document fragment containing a slot element.
     */
    draw(): DocumentFragment;
    barsArray: any[];
    native: HTMLDivElement;
    /**
     * Executes any additional operations or updates required after the drawing process is completed.
     * @returns {void} This method does not return any value.
     */
    afterDraw(): void;
    /**
     * Handles attribute changes for ARIA sync.
     * @param {string} name
     * @param {string|null} oldValue
     * @param {string|null} newValue
     */
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    /**
     * Sync ARIA attributes on host.
     */
    syncAria(): void;
    /**
     * Updates the class of each bar element based on the specified level.
     * @param {number} level The threshold level determining how many bars should be active.
     * @param {Array} bars An array of bar elements to be updated.
     * @returns {void} This method does not return a value.
     */
    updateBars(level: number, bars: any[]): void;
    /**
     * Determines the color indicator based on the given level and bars.
     * @param {number} level The current value level used to calculate the ratio.
     * @param {number} bars The maximum value that level can reach.
     * @returns {string | undefined} A string representing the color code based on the ratio, or undefined if colorize is disabled.
     */
    getColor(level: number, bars: number): string | undefined;
}
