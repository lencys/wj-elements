import { default as WJElement } from '../wje-element/element.js';
/**
 * `Masonry` is a custom web component that represents a masonry layout.
 * It extends from `WJElement`.
 * @summary This element represents a masonry layout.
 * @documentation https://elements.webjet.sk/components/masonry
 * @status stable
 * @augments {WJElement}
 * @csspart native - The native part of the masonry layout.
 * @csspart column - The individual columns in the masonry layout.
 * @slot - The default slot for the masonry layout.
 * @cssproperty [--wje-masonry-layout-gap=1rem] - The gap between items in the masonry layout. Accepts any valid CSS length. Default is 1rem.
 * @cssproperty [--wje-masonry-layout-col-count=1] - The count column in the masonry layout. Accepts any valid CSS length.
 * @tag wje-masonry
 */
export default class Masonry extends WJElement {
    /**
     * Getter for the cssStyleSheet property.
     * @static
     * @returns {CSSStyleSheet} The CSS style sheet for the masonry layout.
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Getter for the observedAttributes property.
     * @returns {Array} An array of the observed attributes.
     */
    static get observedAttributes(): any[];
    debounceId: string;
    ro: any;
    currentRequestAnimationFrameCallback: number;
    unsetSlot: HTMLSlotElement;
    /**
     * Setter for the maxColWidth property.
     * @param {number} value The maximum column width.
     */
    set maxColWidth(value: number);
    /**
     * Getter for the maxColWidth property.
     * @returns {number} The maximum column width.
     */
    get maxColWidth(): number;
    /**
     * Setter for the cols property.
     * @param {number} value The number of columns.
     */
    set cols(value: number);
    /**
     * Getter for the cols property.
     * @returns {number} The number of columns.
     */
    get cols(): number;
    /**
     * Setter for the gap property.
     * @param {number} value The gap between columns.
     */
    set gap(value: number);
    /**
     * Getter for the gap property.
     * @returns {number} The gap between columns.
     */
    get gap(): number;
    /**
     * Setter for the debounce property.
     * @param {number} value The debounce time.
     */
    set debounce(value: number);
    /**
     * Getter for the debounce property.
     * @returns {number} The debounce time.
     */
    get debounce(): number;
    /**
     * Getter for the columns property.
     * @returns {Array} An array of all the columns.
     */
    get columns(): any[];
    /**
     * Callback for when an attribute changes.
     */
    attributeChangedCallback(name: any, old: any, newName: any): void;
    /**
     * Draws the element for the masonry layout.
     * @returns {DocumentFragment} The drawn element.
     */
    draw(): DocumentFragment;
    native: HTMLDivElement;
    /**
     * Called after the element is drawn.
     */
    afterDraw(): void;
    /**
     * Called when the slot changes.
     */
    onSlotChange: () => void;
    /**
     * Called when the window resizes.
     * @param {Array} entries The entries to use.
     */
    onResize: (entries: any[]) => void;
    /**
     * Renders the columns.
     * @param {number} colCount The number of columns to render.
     */
    renderCols(colCount: number): void;
    /**
     * Schedules a layout.
     * @param {number} ms The number of milliseconds to wait before laying out.
     */
    scheduleLayout(ms?: number): void;
    /**
     * Lays out the element.
     */
    layout: () => void;
}
