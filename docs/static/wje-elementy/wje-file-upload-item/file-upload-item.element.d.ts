import { default as WJElement } from '../wje-element/element.js';
import { Localizer } from '../utils/localize.js';
/**
 * @summary This element allows users to upload files.
 * `FileUploadItem` is a custom web component that represents a file upload item.
 * It extends from `WJElement` and uses the `Localizer` utility for localization.
 * @documentation https://elements.webjet.sk/components/file-upload
 * @status stable
 * @augments WJElement
 * @csspart button - The delete button part
 * @csspart image - The image part
 * @csspart name - The name part
 * @csspart size - The size part
 * @slot img - Slot for the image
 * @slot action - Slot for the action buttons
 * @cssproperty --primary-color - The primary color of the file upload item.
 * //@fires wje-button:click - Dispatches when the delete button is clicked
 * @tag wje-file-upload
 */
export default class FileUploadItem extends WJElement {
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
    localizer: Localizer;
    /**
     * Sets the 'is-uploaded' attribute to indicate the uploaded status.
     * @param {boolean} value The value to determine if the element is uploaded.
     */
    set isUploaded(value: boolean);
    /**
     * Checks if the 'is-uploaded' attribute is present on the element.
     * @returns {boolean} True if the 'is-uploaded' attribute exists, otherwise false.
     */
    get isUploaded(): boolean;
    /**
     * Sets the size attribute of the element.
     * @param {string | number} value The value to set for the size attribute.
     */
    set size(value: string | number);
    /**
     * Retrieves the value of the 'size' attribute.
     * @returns {string|null} The value of the 'size' attribute, or null if the attribute is not present.
     */
    get size(): string | null;
    /**
     * Dependencies for the component.
     * @type {object}
     */
    dependencies: object;
    /**
     * A lifecycle method that is called when one of the observed attributes of the custom element is added, removed, or changed.
     * This method is used to react to changes in the specified attributes.
     * @param {string} name The name of the attribute that was changed.
     * @param {string|null} oldValue The previous value of the attribute before the change, or null if the attribute was not previously set.
     * @param {string|null} newValue The new value of the attribute after the change, or null if the attribute has been removed.
     * @returns {void} This method does not return a value.
     */
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    progress: number;
    /**
     * Method to draw the component on the screen.
     * @returns {DocumentFragment} The fragment containing the component.
     */
    draw(): DocumentFragment;
    button: HTMLElement;
    uploadedEl: HTMLElement;
    sliderEl: HTMLElement;
    nameEl: HTMLSpanElement;
    /**
     * Called after the component has been drawn.
     */
    afterDraw(): void;
    /**
     * Sync ARIA attributes on host and actions.
     */
    syncAria(): void;
    /**
     * Handles the delete action.
     */
    onDelete: () => void;
}
