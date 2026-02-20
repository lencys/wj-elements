import { default as WJElement } from '../wje-element/element.js';
import { default as Popup } from '../wje-popup/popup.element.js';
/**
 * `Dropdown` is a custom element that displays a dropdown menu.
 * @summary This element represents a dropdown menu.
 * @documentation https://elements.webjet.sk/components/dropdown
 * @status stable
 * @augments {WJElement}
 * @csspart native - The native part of the dropdown.
 * @slot trigger - The slot for the trigger of the dropdown.
 * @slot - The default slot for the dropdown.
 * // @fires wje-dropdown:open - Event fired when the dropdown is opened.
 * // @fires wje-dropdown:close - Event fired when the dropdown is closed.
 * @tag wje-dropdown
 */
export default class Dropdown extends WJElement {
    static _instanceId: number;
    /**
     * Getter for the CSS stylesheet.
     * @returns {string[]}
     */
    static get observedAttributes(): string[];
    _instanceId: number;
    /**
     * The placement of the dropdown.
     * @type {{"wje-popup": Popup}}
     */
    dependencies: {
        "wje-popup": Popup;
    };
    /**
     * Sets or removes the 'portaled' attribute on the element.
     * When the value is truthy, the attribute 'portaled' is added to the element.
     * When the value is falsy, the attribute 'portaled' is removed from the element.
     * @param {boolean} value Determines whether to add or remove the 'portaled' attribute.
     */
    set portaled(value: boolean);
    /**
     * Getter method for the `portaled` property.
     * Checks if the `portaled` attribute is present on the element.
     * @returns {boolean} Returns `true` if the `portaled` attribute exists, otherwise `false`.
     */
    get portaled(): boolean;
    /**
     * Checks whether the element has the 'portaled' attribute.
     * @returns {boolean} True if the element has the 'portaled' attribute, otherwise false.
     */
    get isPortaled(): boolean;
    /**
     * Sets the placement of the dropdown.
     * @param value
     */
    set trigger(value: string | string);
    /**
     * Gets the placement of the dropdown.
     * @returns {string|string}
     */
    get trigger(): string | string;
    /**
     * Callback function to handle other dropdowns being opened. Close the dropdown if it is not the target and collapse is enabled.
     * @param {Event} e The event object.
     */
    otherDropdownOpennedCallback: (e: Event) => void;
    /**
     * Removes the popup element.
     */
    beforeDraw(): void;
    popup: HTMLElement;
    /**
     * Draws the dropdown element and returns the created document fragment.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
    anchorSlot: HTMLSlotElement;
    /**
     * Adds event listeners for the mouseenter and mouseleave events.
     */
    afterDraw(): void;
    onSlotChange: () => void;
    popupHideCallback: (e: any) => void;
    /**
     * Handles delegated clicks from inside the popup and closes the dropdown when a leaf menu item is selected.
     * This works even when the menu is portaled, because we rely on the composed path.
     */
    onMenuItemClick: (e: any) => void;
    /**
     * @summary Toggles the dropdown element between active and inactive states.
     * Calls the `onOpen` method if the element is currently inactive,
     * and calls the `onClose` method if the element is currently active.
     * @param {Event} e The event object.
     */
    toggleCallback: (e: Event) => void;
    /**
     * @summary Returns the content to be displayed before showing the dropdown.
     * @returns {any} The content to be displayed.
     */
    beforeShow(): any;
    /**
     * This method is called after the dropdown is shown.
     */
    afterShow(): void;
    /**
     * Open the popup element.
     * @param {object} e
     */
    onOpen: (e: object) => void;
    beforeClose: () => void;
    afterClose: () => void;
    onClose: () => void;
    /**
     * Syncs ARIA attributes for the trigger element.
     */
    syncAria(): void;
    #private;
}
