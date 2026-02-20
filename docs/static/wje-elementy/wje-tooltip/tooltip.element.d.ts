import { default as WJElement } from '../wje-element/element.js';
/**
 * `Tooltip` is a custom web component that represents a tooltip.
 * @summary This element represents a tooltip.
 * @documentation https://elements.webjet.sk/components/tooltip
 * @status stable
 * @augments {WJElement}
 * @attribute {string} content - The content of the tooltip element. Accepts any valid string value.
 * @slot arrow - The arrow slot for the tooltip.
 * @slot anchor - The anchor slot for the tooltip.
 * @csspart native - The native tooltip wrapper.
 * @cssproperty [--wje-tooltip-arrow-color=var(--wje-color-contrast-11)] - Specifies the color of the tooltip's arrow. This property determines the visual color of the arrow that points to the element the tooltip is attached to. Accepts any valid CSS color value such as `hex`, `rgb`, or `CSS variable`.
 * @tag wje-tooltip
 */
export default class Tooltip extends WJElement {
    static _instanceId: number;
    /**
     * Returns the CSS stylesheet for the component.
     * @static
     * @returns {CSSStyleSheet} The CSS stylesheet
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Returns the list of observed attributes.
     * @static
     * @returns {Array} An array of observed attributes
     */
    static get observedAttributes(): any[];
    _instanceId: number;
    /**
     * Dependencies of the Button element.
     * @type {object}
     */
    dependencies: object;
    /**
     * Set active attribute for the tooltip element.
     * @param value
     */
    set content(value: string);
    /**
     * Get active attribute for the tooltip element.
     * @returns {string}
     */
    get content(): string;
    /**
     * Draws the component for the tooltip.
     * @returns {object} Document fragment
     */
    draw(): object;
    mySlot: HTMLSlotElement;
    popup: HTMLElement;
    native: HTMLDivElement;
    /**
     * Draws the component for the tooltip.
     */
    afterDraw(): void;
    onSlotChange: () => void;
    dispatch(customEvent: any): Promise<any>;
    beforeShow(): string;
    afterShow(): boolean;
    popupHideCallback: () => void;
    /**
     * Handles the logic for showing the component's popup or tooltip.
     * Adds the `active` class, invokes lifecycle hooks, and manages the popup visibility.
     * @throws {Error} If the `beforeShow` method returns a non-string value or `false`.
     */
    onShow: () => void;
    /**
     * Hides the component's popup or tooltip.
     * Removes the `active` class from the component and hides the popup element.
     */
    onHide: () => void;
    /**
     * Validates if the specified selector exists within the provided element.
     * Logs an error if the selector is not found and returns the found element or `null`.
     * @param {HTMLElement} anchorEl The root element to search within.
     * @returns {HTMLElement|null} The first element matching the selector, or `null` if not found.
     */
    checkSelector(anchorEl: HTMLElement): HTMLElement | null;
}
