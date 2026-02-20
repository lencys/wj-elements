import { default as WJElement } from '../wje-element/element.js';
/**
 * @summary This method dispatches a custom event named "wje-chip:remove".
 * It is triggered when the remove button is clicked, which happens when the chip is removed.
 * The event is dispatched on the current instance of the Chip class.
 * @documentation https://elements.webjet.sk/components/chip
 * @status stable
 * @augments WJElement
 * @slot - The chip main content.
 * @csspart native - The component's native wrapper.
 * //@fires wje-chip:remove - Dispatched when the chip is removed;
 */
export default class Chip extends WJElement {
    /**
     * Getter for the CSS stylesheet.
     * @returns {*}
     */
    static get cssStyleSheet(): any;
    static get observedAttributes(): string[];
    /**
     * Sets or removes the "round" attribute on the element based on the provided value.
     * @param {boolean} value Determines whether the "round" attribute should be set or removed.
     * If true, the "round" attribute is added. If false, the "round"
     * attribute is removed.
     */
    set round(value: boolean);
    /**
     * Checks if the 'round' attribute is present on the element.
     * @returns {boolean} Returns true if the 'round' attribute exists, otherwise false.
     */
    get round(): boolean;
    /**
     * Sets the size attribute of the element.
     * @param {string} value The value to set for the size attribute.
     */
    set size(value: string);
    /**
     * Retrieves the 'size' attribute of the current element.
     * @returns {string | null} The value of the 'size' attribute, or null if the attribute is not set.
     */
    get size(): string | null;
    /**
     * Sets or removes the "removable" attribute on the element.
     * @param {boolean} value A boolean indicating whether the element should have the "removable" attribute.
     * If true, the "removable" attribute is added;
     * if false, the "removable" attribute is removed.
     */
    set removable(value: boolean);
    /**
     * Determines if the element has the 'removable' attribute.
     * @returns {boolean} True if the element has the 'removable' attribute, otherwise false.
     */
    get removable(): boolean;
    /**
     * Sets the disabled state of the element.
     * If true, the 'disabled' attribute is added to the element.
     * If false, the 'disabled' attribute is removed from the element.
     * @param {boolean} value Specifies whether the element should be disabled.
     */
    set disabled(value: boolean);
    /**
     * Determines if the element has the 'disabled' attribute.
     * @returns {boolean} True if the element has the 'disabled' attribute, otherwise false.
     */
    get disabled(): boolean;
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    /**
     * Draws the Chip element.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
    removeElement: HTMLElement;
    slotEnd: HTMLSlotElement;
    /**
     * Syncs ARIA attributes on the host element.
     */
    syncAria(): void;
    /**
     * Getter for the observed attributes.
     */
    afterDraw(): void;
}
