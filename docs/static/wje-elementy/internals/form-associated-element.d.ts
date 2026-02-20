import { default as WJElement } from '../wje-element/element.js';
export class FormAssociatedElement extends WJElement {
    static formAssociated: boolean;
    /**
     * Sets the 'name' attribute to the given value.
     * @param {string} value The new value for the 'name' attribute.
     */
    set name(value: string);
    /**
     * Getter for the name attribute.
     * @returns {string} The name of the input.
     */
    get name(): string;
    /**
     * Getter for the type attribute.
     * @returns {string} The type of the input.
     */
    get type(): string;
    /**
     * Sets or removes the 'required' attribute on the element.
     * @param {boolean} value If true, adds the 'required' attribute. If false, removes the 'required' attribute.
     */
    set required(value: boolean);
    /**
     * Checks if the 'required' attribute is present on the element.
     * @returns {boolean} `true` if the 'required' attribute is set, otherwise `false`.
     */
    get required(): boolean;
    /**
     * Setter for the invalid attribute.
     * @param {boolean} isInvalid Whether the input is invalid.
     */
    set invalid(isInvalid: boolean);
    /**
     * Getter for the invalid attribute.
     * @returns {boolean} Whether the attribute is present.
     */
    get invalid(): boolean;
    /**
     * Set checked attribute.
     * @param {boolean} value true if the toggle is checked, false otherwise
     */
    set disabled(value: boolean);
    /**
     * Get disabled attribute value.
     * @returns {boolean} true if the toggle is disabled, false otherwise
     */
    get disabled(): boolean;
    /**
     * Retrieves the form element associated with this object.
     * @returns {HTMLFormElement|null} The associated form element, or null if there isn't one.
     */
    get form(): HTMLFormElement | null;
    /**
     * Retrieves the validity state of the element by returning the validity object from the internal element.
     * The validity object provides information on whether the element satisfies its validation constraints.
     * @returns {ValidityState} The validity state object representing the element's validation constraints.
     */
    get validity(): ValidityState;
    /**
     * Retrieves the current validation message associated with the element.
     * @returns {string} The validation message that describes why the element's value fails validity checks.
     */
    get validationMessage(): string;
    /**
     * Indicates whether the element is a candidate for constraint validation.
     * @returns {boolean} Returns true if the element will be validated during constraint validation, false otherwise.
     */
    get willValidate(): boolean;
    /**
     * Validates the input element associated with the component and updates its validity state
     * and error messages based on the user's input and the current validation rules.
     * @returns {void} This method does not return a value. It modifies the validity state
     * internally and sets appropriate validation messages.
     */
    validate(): void;
    validationError: string;
    /**
     * Propagates a validation event based on the validity state of the component.
     *
     * This method checks the validity status of the component and emits a custom
     * event if the component is invalid. The event's name and additional details
     * can be specified.
     * @param {string} [eventName] The name of the event to dispatch when the component is invalid.
     * @param {object} [detail] Additional detail to include in the dispatched event.
     * @returns {void} This method does not return a value.
     */
    propagateValidation(eventName?: string, detail?: object): void;
    /**
     * Displays an invalid message for the current element.
     * If an error message element does not exist within the designated slot,
     * it creates one and appends it to the slot. Updates the text content
     * of the error message element with the validation message from the
     * element's internals.
     * @returns {void} This method does not return any value.
     */
    showInvalidMessage(): void;
    /**
     * Checks the validity of the input by invoking custom validation logic
     * and then verifying against internal validation rules.
     * @returns {boolean} Returns true if the input is valid according to both custom validation and internal validation rules, otherwise false.
     */
    checkValidity(): boolean;
    /**
     * Callback to handle the reset action for a form.
     * Resets the value of the form control to its default value, updates the form value, and clears any validity states.
     * @returns {void} Does not return a value.
     */
    formResetCallback(): void;
    value: any;
    /**
     * Restores the form state by assigning the provided state value
     * and updating the internal form value and validity.
     * @param {object} state The state object containing the value to restore the form.
     * @param {*} state.value The value to set for the form element.
     * @returns {void} This method does not return any value.
     */
    formStateRestoreCallback(state: {
        value: any;
    }): void;
    /**
     * Callback method to save the current state of a form.
     * This method captures and returns the form's value property.
     * @returns {object} An object containing the `value` property of the current form state.
     */
    formStateSaveCallback(): object;
    /**
     * Toggles the disabled state of the component and updates corresponding attributes.
     * @param {boolean} disabled Indicates whether the form should be marked as disabled.
     * If true, the 'disabled' class is added, and the 'disabled' attribute is set.
     * If false, both the class and attribute are removed.
     * @returns {void}
     */
    formDisabledCallback(disabled: boolean): void;
    /**
     * A lifecycle callback that is executed when the element is associated with a form.
     * It updates the form's value field with the element's value and sets up an event
     * listener to perform validation and propagate it whenever the form is submitted.
     * @returns {void} Does not return any value.
     */
    formAssociatedCallback(): void;
}
