import { default as WJElement } from '../wje-element/element.js';
/**
 * `Dialog` is a custom web component that represents a dialog.
 * @summary This element represents a dialog.
 * @documentation https://elements.webjet.sk/components/dialog
 * @status stable
 * @augments {WJElement}
 * @slot header - Slot for the header content.
 * @slot body - Slot for the body content.
 * @slot footer - Slot for the footer content.
 * @csspart dialog - The dialog wrapper.
 * @csspart header - The header of the dialog.
 * @csspart body - The body of the dialog.
 * @csspart footer - The footer of the dialog.
 * @csspart close - The close button of the dialog.
 * @cssproperty [--wje-dialog-background=var(--wje-background-color)] - Specifies the background color of the dialog.
 * @cssproperty [--wje-dialog-color=var(--wje-text-color)] - Defines the text color within the dialog.
 * @cssproperty [--wje-dialog-padding=1rem] - Controls the padding inside the dialog.
 * @cssproperty [--wje-dialog-border-radius=0.5rem] - Sets the border radius for the dialog's corners.
 * @cssproperty [--wje-dialog-box-shadow=0 2px 10px rgba(0, 0, 0, 0.1)] - Applies a shadow effect to the dialog.
 * @tag wje-dialog
 */
export default class Dialog extends WJElement {
    static _instanceId: number;
    /**
     * Returns the CSS styles for the component.
     * @returns {*}
     */
    static get cssStyleSheet(): any;
    /**
     * Returns the list of attributes to observe for changes.
     * @returns {*[]}
     */
    static get observedAttributes(): any[];
    _instanceId: number;
    /**
     * Sets the value of the 'headline' attribute.
     * @param {string} value The new value for the 'headline' attribute.
     */
    set headline(value: string);
    /**
     * Retrieves the value of the "headline" attribute from the element.
     * If the "headline" attribute is not present, returns an empty string.
     * @returns {string} The headline attribute value or an empty string if not set.
     */
    get headline(): string;
    /**
     * Sets the headline of the dialog.
     * @param value
     */
    set placement(value: string | string);
    /**
     * Gets the headline of the dialog.
     * @returns {string|string}
     */
    get placement(): string | string;
    /**
     * Sets the headline of the dialog.
     * @param value
     */
    set async(value: boolean);
    /**
     * Gets the headline of the dialog.
     * @returns {boolean}
     */
    get async(): boolean;
    /**
     * Sets the headline of the dialog.
     * @param value
     */
    set closeHidden(value: boolean);
    /**
     * Gets the headline of the dialog.
     * @returns {boolean}
     */
    get closeHidden(): boolean;
    set hiddenHeader(value: boolean);
    get hiddenHeader(): boolean;
    set hiddenFooter(value: boolean);
    get hiddenFooter(): boolean;
    /**
     * Draws the component.
     * @param {object} context The context for drawing.
     * @param {object} store The store for drawing.
     * @param {object} params The parameters for drawing.
     * @returns {DocumentFragment}
     */
    draw(context: object, store: object, params: object): DocumentFragment;
    dialog: HTMLDialogElement;
    /**
     * Creates the dialog body.
     * @param dialog
     */
    htmlDialogBody(dialog: any): void;
    /**
     * Closes the dialog.
     * @param e
     */
    close(e: any): void;
    /**
     * Before the dialog opens.
     */
    beforeOpen(dialog: any, trigger: any): void;
    /**
     * After the dialog opens.
     */
    afterOpen(dialog: any, trigger: any): void;
    /**
     * Before the dialog closes.
     */
    beforeClose(dialog: any, trigger: any): void;
    /**
     * After the dialog closes.
     */
    afterClose(dialog: any, trigger: any): void;
    /**
     * Opens the dialog.
     * @param e
     */
    onOpen: (e: any) => void;
    /**
     * Closes the dialog.
     * @param {object} e
     */
    onClose: (e: object) => void;
    /**
     * Registers an event listener on the provided button that triggers a blocking UI element
     * and executes a given promise when the button is clicked.
     * @param {HTMLElement} button The button element to attach the event listener to.
     * @param {Function} promise A function that returns a promise to be executed when the button is clicked.
     */
    registerBlockingEvent(button: HTMLElement, promise: Function): void;
    updateHasFooter(): void;
}
