import { default as WJElement } from '../wje-element/element.js';
/**
 * @summary This class represents Button element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/button
 * @status stable
 * @augments WJElement
 * @dependency wje-icon
 * @slot - The button main content.
 * @slot icon - The button icon.
 * @slot caret - The button caret.
 * @slot start - The button start slot.
 * @slot end - The button end slot.
 * @slot toggle - The button toggle slot.
 * @csspart native - The component's native wrapper.
 * @cssproperty [--wje-button-background-color=transparent] - Background color of the component;
 * @cssproperty [--wje-button-border-color=--wje-color-contrast-4] - Border color of the component;
 * @cssproperty [--wje-button-color=--wje-color-contrast-11] - Color of the component;
 * @cssproperty [--wje-button-border-radius=--wje-border-radius-medium] - Border radius of the component;
 * @cssproperty [--wje-button-border-width=1px] - Border width of the component;
 * @cssproperty [--wje-button-border-style=solid] - Border style of the component;
 * @cssproperty [--wje-button-border-color=--wje-color-contrast-1] - Border color of the component;
 * @cssproperty [--wje-button-margin-inline=0] - Margin inline of the component;
 */
export default class Button extends WJElement {
    /**
     * Get CSS stylesheet for the Button element.
     * @static
     * @returns {CSSStyleSheet} styles - The CSS stylesheet for the Button element.
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Get observed attributes for the Button element.
     * @static
     * @returns {Array<string>} observedAttributes - The observed attributes array for the Button element.
     */
    static get observedAttributes(): Array<string>;
    /**
     * @summary A static property that indicates whether the custom element is form-associated or not.
     * Form-associated custom elements are elements that can participate in form submission.
     * @type {boolean}
     */
    static formAssociated: boolean;
    /**
     * Dependencies of the Button element.
     * @type {object}
     */
    dependencies: object;
    /**
     * Properties of the element Button.
     * @param value
     */
    set color(value: string | string);
    /**
     * Get color of the Button element.
     * @returns {string|string}
     */
    get color(): string | string;
    /**
     * Set variant of the Button element.
     * @param value
     */
    set caret(value: boolean);
    /**
     * Get variant of the Button element.
     * @returns {boolean}
     */
    get caret(): boolean;
    /**
     * Sets the 'round' attribute on the element. If the value is true, the attribute is added;
     * otherwise, it is removed from the element.
     * @param {boolean} value A boolean indicating whether to set or remove the 'round' attribute.
     */
    set round(value: boolean);
    /**
     * Retrieves the value of the 'round' attribute as a boolean.
     * Checks if the 'round' attribute is present on the element.
     * @returns {boolean} True if the 'round' attribute exists, otherwise false.
     */
    get round(): boolean;
    /**
     * Set variant of the Button element.
     * @param value
     */
    set tooltip(value: boolean);
    /**
     * Get variant of the Button element.
     * @returns {boolean}
     */
    get tooltip(): boolean;
    /**
     * Set variant of the Button element.
     * @param value
     */
    set dialog(value: string | object);
    /**
     * Get variant of the Button element.
     * @returns {string|object}
     */
    get dialog(): string | object;
    /**
     * Set active state of the Button element.
     * @param {boolean} value The value to set
     */
    set active(value: boolean);
    /**
     * Get active state of the Button element.
     * @returns {boolean} active - The active state
     */
    get active(): boolean;
    /**
     * Set disabled state of the Button element.
     * @param {boolean} value The value to set
     */
    set disabled(value: boolean);
    /**
     * Get disabled state of the Button element.
     * @returns {boolean} disabled - The disabled state
     */
    get disabled(): boolean;
    /**
     * Set fill of the Button element.
     * @param {string} value The value to set
     */
    set fill(value: string);
    /**
     * Get fill of the Button element.
     * @returns {string} fill - The fill value
     */
    get fill(): string;
    /**
     * Set outline state of the Button element.
     * @param {boolean} value The value to set
     */
    set outline(value: boolean);
    /**
     * Get outline state of the Button element.
     * @returns {boolean} outline - The outline state
     */
    get outline(): boolean;
    /**
     * Set stop propagation state of the Button element.
     * @param {boolean} value The value to set
     */
    set stopPropagation(value: boolean);
    /**
     * Get stop propagation state of the Button element.
     * @returns {boolean} stopPropagation - The stop propagation state
     */
    get stopPropagation(): boolean;
    /**
     * Sets the value of the custom event attribute.
     * @param {string} value The value to be assigned to the custom event attribute.
     */
    set customEvent(value: string);
    /**
     * Retrieves the value of the 'custom-event' attribute from the element.
     * @returns {string | null} The value of the 'custom-event' attribute, or null if the attribute is not set.
     */
    get customEvent(): string | null;
    /**
     * Retrieves a mapped object containing custom event parameters extracted from the element's attributes.
     * Attributes considered are those that begin with 'custom-event-'.
     * The mapped object's keys are derived by removing the 'custom-event-' prefix from the attribute names,
     * and the values are the corresponding attribute values.
     * @returns {object} An object containing key-value pairs of custom event parameters.
     */
    get customEventParameters(): object;
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    /**
     * @summary Callback function that is called when the custom element is associated with a form.
     * This function sets the internal `_form` property to the associated form.
     * @param {HTMLFormElement} form The form the custom element is associated with.
     */
    formAssociatedCallback(form: HTMLFormElement): void;
    _form: HTMLFormElement;
    /**
     * @summary Callback function that is called when the form-associated state of the custom element changes.
     * This function updates the 'disabled' attribute of the element based on the new state.
     * @param {boolean} disabled The new form-associated state.
     */
    formDisabledCallback(disabled: boolean): void;
    /**
     * Draw method for the Button element.
     * @returns {object} fragment - The document fragment containing the drawn element.
     */
    draw(): object;
    hasToggle: boolean;
    slotToggle: HTMLSlotElement;
    /**
     * After draw method for the Button element.
     */
    afterDraw(): void;
    unbindRouterLinks: any;
    /**
     * Event dialog open method for the Button element.
     * @param {Event} e The event object
     */
    eventDialogOpen: (e: Event) => void;
    /**
     * Toggle states method for the Button element.
     */
    toggleStates: () => void;
    /**
     * Syncs ARIA attributes on the host element.
     */
    syncAria(): void;
    #private;
}
