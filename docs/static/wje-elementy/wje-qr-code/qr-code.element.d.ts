import { default as WJElement } from '../wje-element/element.js';
/**
 * `QrCode` is a custom web component that generates a QR code.
 * @summary This element represents a QR code generator.
 * @documentation https://elements.webjet.sk/components/qr-code
 * @status stable
 * @augments {WJElement}
 * @csspart native - The native part of the QR code.
 * @slot top - The slot for the top content of the QR code.
 * @slot bottom - The slot for the bottom content of the QR code.
 * @tag wje-qr-code
 */
export default class QrCode extends WJElement {
    /**
     * Returns the CSS stylesheet for the component.
     * @returns {CSSStyleSheet} The CSS stylesheet.
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Returns the list of observed attributes.
     * @returns {string[]} The list of observed attributes.
     */
    static get observedAttributes(): string[];
    /**
     * Content encoded into the QR code.
     * @type {string}
     */
    set value(value: string);
    get value(): string;
    /**
     * Background color of the QR code.
     * @type {string|null}
     */
    set background(value: string);
    get background(): string;
    /**
     * Background alpha channel in range 0-1.
     * Supports aliases: background-alpha, backgroundalpha, backgroundAlpha.
     * @type {number|null}
     */
    set backgroundAlpha(value: number);
    get backgroundAlpha(): number;
    /**
     * Foreground color of the QR code.
     * @type {string|null}
     */
    set foreground(value: string);
    get foreground(): string;
    /**
     * Foreground alpha channel in range 0-1.
     * Supports aliases: foreground-alpha, foregroundalpha, foregroundAlpha.
     * @type {number|null}
     */
    set foregroundAlpha(value: number);
    get foregroundAlpha(): number;
    /**
     * Error correction level. Accepted values: L, M, Q, H.
     * @type {string|null}
     */
    set level(value: string);
    get level(): string;
    /**
     * Padding around the QR code in pixels.
     * @type {number|null}
     */
    set padding(value: number);
    get padding(): number;
    /**
     * Output QR code size in pixels.
     * @type {number|null}
     */
    set size(value: number);
    get size(): number;
    /**
     * Draws the QR code component.
     * @returns {DocumentFragment} The document fragment containing the QR code component.
     */
    draw(): DocumentFragment;
    /**
     * Called after the component is drawn to generate the QR code.
     */
    afterDraw(): void;
    qr: any;
    /**
     * Returns first defined attribute value from alias list.
     * @param {string[]} aliases
     * @returns {string|null}
     */
    getAttributeFromAliases(aliases?: string[]): string | null;
    /**
     * Writes value to the canonical attribute and clears alternate aliases.
     * @param {string} optionName
     * @param {string|number|null|undefined} value
     */
    setAliasedAttribute(optionName: string, value: string | number | null | undefined): void;
}
