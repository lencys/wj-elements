import { default as WJElement } from '../wje-element/element.js';
/**
 * `Rate` is a custom web component that represents a rating component.
 * @summary This element represents a rating component.
 * @documentation https://elements.webjet.sk/components/rate
 * @status stable
 * @augments {WJElement}
 * @attribute {number} precision - The precision of the rating component.
 * @attribute {number} max - The maximum value of the rating component.
 * @attribute {Array<string>} icons - The icons of the rating component.
 * @csspart native - The native part of the rating component.
 * @cssproperty [--wje-rate-gap=.25rem] - Defines the spacing (gap) between individual items in the rating component. Accepts any valid CSS length unit (e.g., `px`, `rem`, `em`) to adjust the distance between rating elements.
 * @cssproperty [--wje-rate-color=var(--wje-color-contrast-11)] - Specifies the default color of the rating items. Accepts any valid CSS color value, including named colors, hex values, RGB, or CSS variables.
 * @cssproperty [--wje-rate-selected-color=var(--wje-color-danger-9)] - Sets the color for selected or highlighted rating items. This property helps visually distinguish selected ratings. Accepts any valid CSS color value.
 * @tag wje-rate
 */
export default class Rate extends WJElement {
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
     * Sets the precision of the rating component.
     * @param {number} value The value to set.
     */
    set precision(value: number);
    /**
     * Gets the precision of the rating component.
     * @returns {number} The value of the precision.
     */
    get precision(): number;
    /**
     * Sets the maximum value of the rating component.
     * @param {number} value The value to set.
     */
    set max(value: number);
    /**
     * Gets the maximum value of the rating component.
     * @returns {number} The value of the maximum value.
     */
    get max(): number;
    /**
     * Sets the icons of the rating component.
     * @param {Array<string>} value The value to set.
     */
    set icons(value: Array<string>);
    /**
     * Gets the icons of the rating component.
     * @returns {Array<string>} The value of the icons.
     */
    get icons(): Array<string>;
    /**
     * Sets the value of the rating component.
     * @param {number} value The value to set.
     */
    set value(value: number);
    /**
     * Gets the value of the rating component.
     * @returns {number} The value of the rating component.
     */
    get value(): number;
    /**
     * Called when an attribute changes.
     * @param {string} name The name of the attribute that changed.
     * @param {string} old The old value of the attribute.
     * @param {string} newName The new value of the attribute.
     */
    attributeChangedCallback(name: string, old: string, newName: string): void;
    /**
     * Draws the component for the rating component.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
    native: HTMLDivElement;
    /**
     * Adds event listeners after the component is drawn.
     */
    afterDraw(): void;
    /**
     * Creates the icons for the rating component.
     * @param {number} i The index of the icon.
     * @returns {Element} The icon element.
     */
    createIcons(i: number): Element;
    /**
     * Changes the rate of the rating component.
     */
    changeRate(): void;
    /**
     * Sync ARIA attributes on host.
     */
    syncAria(): void;
    /**
     * Event handler for the mouse enter event.
     * @param {Event} e The event.
     */
    onMouseEnter: (e: Event) => void;
    hoverValue: any;
    /**
     * Event handler for the mouse leave event.
     * @param {Event} e The event.
     */
    onMouseLeave: (e: Event) => void;
    /**
     * Event handler for the mouse move event.
     * @param {Event} e The event.
     */
    onMouseMove: (e: Event) => void;
    /**
     * Event handler for the touch start event.
     * @param {Event} e The event.
     */
    onTouchStart: (e: Event) => void;
    /**
     * Event handler for the touch end event.
     * @param {Event} e The event.
     */
    onTouchEnd: (e: Event) => void;
    /**
     * Event handler for the touch move event.
     * @param {Event} e The event.
     */
    onTouchMove: (e: Event) => void;
    /**
     * Event handler for the click event.
     * @param {Event} e The event.
     */
    onClick: (e: Event) => void;
    /**
     * Returns the icons for the rating component.
     * @param {number} index The index of the icon.
     * @returns {Element} The icon element.
     */
    getIcons(index: number): Element;
    /**
     * Returns the value from the x position.
     * @param {number} coordinate The x coordinate.
     * @returns {number} The value from the x position.
     */
    getValueFromXPosition(coordinate: number): number;
    /**
     * Rounds a given number to the nearest specified precision.
     * @param {number} numberToRound The number to be rounded.
     * @param {number} [precision] The precision to which the number should be rounded.
     * @returns {number} - The rounded number.
     * @example
     * roundToPrecision(2.3); // Returns 2.5
     * roundToPrecision(2.3, 0.1); // Returns 2.3
     * roundToPrecision(2.6, 1); // Returns 3
     */
    roundToPrecision(numberToRound: number, precision?: number): number;
}
