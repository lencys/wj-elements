import { default as WJElement } from '../wje-element/element.js';
import { Localizer } from '../utils/localize.js';
/**
 * `RelativeTime` is a custom web component that represents a relative time component.
 * @summary This element represents a relative time component.
 * @documentation https://elements.webjet.sk/components/relative-time
 * @status stable
 * @augments WJElement
 * @csspart native - The native part of the relative time component.
 * @tag wje-relative-time
 */
export default class RelativeTime extends WJElement {
    /**
     * Returns the list of attributes to observe for changes.
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes(): Array<string>;
    localizer: Localizer;
    /**
     * Sets the date of the relative time component.
     * @param value
     */
    set date(value: string);
    /**
     * Gets the date of the relative time component.
     * @returns {string}
     */
    get date(): string;
    /**
     * Sets the object date of the relative time component.
     * @param value
     */
    set objectDate(value: Date);
    /**
     * Gets the object date of the relative time component.
     * @returns {Date}
     */
    get objectDate(): Date;
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    /**
     * Draws the component for the relative time.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
    native: HTMLDivElement;
    /**
     * Returns the relative time string for the given date.
     */
    getRelativeTimeString(lang?: string): string;
    /**
     * Checks if the given string is an ISO date.
     * @param {string} str The string to check.
     * @returns {boolean} True if the string is an ISO date, false otherwise.
     */
    isISODate(str: string): boolean;
}
