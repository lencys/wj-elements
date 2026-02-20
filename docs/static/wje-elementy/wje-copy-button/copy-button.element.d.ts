import { default as WJElement } from '../wje-element/element.js';
/**
 * @summary CopyButton is a custom web component that extends WJElement.
 * It provides a button that, when clicked, copies a specified text to the clipboard.
 * The text to be copied can be specified through the `value` attribute.
 * The CopyButton also supports keyboard interaction, copying the text when the space or enter key is pressed.
 * @documentation https://elements.webjet.sk/components/copy-button
 * @status stable
 * @augments WJElement
 * @attribute {string} for - The id of the element to copy content from.
 * @attribute {string} value - The text to be copied.
 * @slot - This is a default/unnamed slot.
 * @csspart button - Styles the button element.
 * @cssproperty --text-color - Controls the color of the text.
 * @cssproperty --background-color - Controls the background color of the button.
 * //@fires wje:copy-button - Dispatched when the button is clicked and the text is copied.
 * @tag wje-copy-button
 */
export default class CopyButton extends WJElement {
    /**
     * Getter for the cssStyleSheet property.
     * @returns {string} The CSS styles.
     */
    static get cssStyleSheet(): string;
    /**
     * Getter for the observedAttributes property.
     * @returns {Array} An empty array.
     */
    static get observedAttributes(): any[];
    timeout: number;
    /**
     * Setter for the value property.
     * @param {string} value The value to be set.
     */
    set value(value: string);
    /**
     * Getter for the value property.
     * @returns {string} The value of the value property.
     */
    get value(): string;
    /**
     * Draws the ColorPicker element.
     * @returns {DocumentFragment} The created document fragment.
     */
    draw(): DocumentFragment;
    icon: HTMLElement;
    tooltip: HTMLElement;
    /**
     * Adds event listeners for the click, focus, and blur events.
     */
    afterDraw(): void;
    /**
     * Sync ARIA attributes on host.
     */
    syncAria(): void;
    /**
     * Handles the click event.
     * @param {Event} e The event object.
     */
    clicked: (e: Event) => void;
    /**
     * Handles the keydown event.
     * @param {Event} e The event object.
     */
    keydown: (e: Event) => void;
    /**
     * Handles the focus event.
     * @param {Event} e The event object.
     */
    focused: (e: Event) => void;
    /**
     * Handles the blur event.
     * @param {Event} e The event object.
     */
    blurred: (e: Event) => void;
    /**
     * Handles the copied event.
     * You can override this method to customize the behavior when the text is copied.
     * @param {Event} e The event object.
     */
    copied: (e: Event) => void;
    /**
     * Copies the specified text or node.
     * @param {HTMLElement} button The button element.
     */
    copy(button: HTMLElement): Promise<void>;
    /**
     * Copies the target content.
     * @param {HTMLElement} content The content to be copied.
     * @returns {Promise} A promise that resolves when the content is copied.
     */
    copyTarget(content: HTMLElement): Promise<any>;
}
