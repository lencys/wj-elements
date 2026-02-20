import { default as WJElement, event } from "../wje-element/element.js";

export class FormAssociatedElement extends WJElement {
  static formAssociated = true;

  constructor() {
    super();
  }

  /**
   * Sets the 'name' attribute to the given value.
   * @param {string} value The new value for the 'name' attribute.
   */
  set name(value) {
    this.setAttribute('name', value);
  }

  /**
   * Getter for the name attribute.
   * @returns {string} The name of the input.
   */
  get name() {
    return this.getAttribute('name');
  }

  /**
   * Getter for the type attribute.
   * @returns {string} The type of the input.
   */
  get type() {
    return this.getAttribute("type");
  }

  /**
   * Sets or removes the 'required' attribute on the element.
   * @param {boolean} value If true, adds the 'required' attribute. If false, removes the 'required' attribute.
   */
  set required(value) {
    if (value) {
      this.setAttribute('required', '');
    } else {
      this.removeAttribute('required');
    }
  }

  /**
   * Checks if the 'required' attribute is present on the element.
   * @returns {boolean} `true` if the 'required' attribute is set, otherwise `false`.
   */
  get required() {
    return this.hasAttribute('required');
  }

  /**
   * Setter for the invalid attribute.
   * @param {boolean} isInvalid Whether the input is invalid.
   */
  set invalid(isInvalid) {
    if (isInvalid) this.setAttribute('invalid', '');
    else this.removeAttribute('invalid');
  }

  /**
   * Getter for the invalid attribute.
   * @returns {boolean} Whether the attribute is present.
   */
  get invalid() {
    return this.hasAttribute('invalid');
  }

  /**
   * Set checked attribute.
   * @param {boolean} value true if the toggle is checked, false otherwise
   */
  set disabled(value) {
    if (value) {
      this.setAttribute('disabled', '');
    } else {
      this.removeAttribute('disabled');
    }
  }

  /**
   * Get disabled attribute value.
   * @returns {boolean} true if the toggle is disabled, false otherwise
   */
  get disabled() {
    return this.hasAttribute('disabled');
  }

  /**
   * Retrieves the form element associated with this object.
   * @returns {HTMLFormElement|null} The associated form element, or null if there isn't one.
   */
  get form() {
    return this.internals.form;
  }

  /**
   * Retrieves the validity state of the element by returning the validity object from the internal element.
   * The validity object provides information on whether the element satisfies its validation constraints.
   * @returns {ValidityState} The validity state object representing the element's validation constraints.
   */
  get validity() {
    return this.internals.validity;
  }

  /**
   * Retrieves the current validation message associated with the element.
   * @returns {string} The validation message that describes why the element's value fails validity checks.
   */
  get validationMessage() {
    return this.internals.validationMessage;
  }

  /**
   * Indicates whether the element is a candidate for constraint validation.
   * @returns {boolean} Returns true if the element will be validated during constraint validation, false otherwise.
   */
  get willValidate() {
    return this.internals.willValidate;
  }

  /**
   * Validates the input element associated with the component and updates its validity state
   * and error messages based on the user's input and the current validation rules.
   * @returns {void} This method does not return a value. It modifies the validity state
   * internally and sets appropriate validation messages.
   */
  validate() {
    const validState = this.input.validity;

    if (!validState.valid) {
      for (let state in validState) {
        const attr = `message-${state.toString()}`;

        if (validState[state]) {
          this.validationError = state.toString();
          let errorMessage = this.message;

          // TODO this take error messages based on lang from operating system of user  should we implement custom translations based on app language ?
          if (!this.hasAttribute('message'))
            errorMessage = this.hasAttribute(attr) ? this.getAttribute(attr) : this.input.validationMessage;

          this.internals.setValidity({ [this.validationError]: true }, errorMessage, this.input);
        }
      }
    } else {
      this.internals.setValidity({});
    }
  }

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
  propagateValidation(eventName = 'invalid', detail = {}) {
    const internals = this.internals;

    this.invalid = !this.pristine && !internals.validity.valid;

    if (this.invalid) {
      event.dispatchCustomEvent(this, this.tagName.toLocaleLowerCase() + ':' + eventName, detail);
    }
  }

  /**
   * Displays an invalid message for the current element.
   * If an error message element does not exist within the designated slot,
   * it creates one and appends it to the slot. Updates the text content
   * of the error message element with the validation message from the
   * element's internals.
   * @returns {void} This method does not return any value.
   */
  showInvalidMessage() {
    const internals = this.internals;
    const slot = this.querySelector("[slot='error']");
    let errorMessageEl = slot?.querySelector('[error-message]');

    if (!errorMessageEl) {
      const error = document.createElement('div');
      error.setAttribute('error-message', '');
      slot?.append(error);
      errorMessageEl = error;
    }

    errorMessageEl.textContent = internals.validationMessage;
  }

  /**
   * Checks the validity of the input by invoking custom validation logic
   * and then verifying against internal validation rules.
   * @returns {boolean} Returns true if the input is valid according to both custom validation and internal validation rules, otherwise false.
   */
  checkValidity() {
    // zavolá tvoju vlastnú validáciu pred kontrolou internals
    this.validate();
    return this.internals.checkValidity();
  }

  /**
   * Callback to handle the reset action for a form.
   * Resets the value of the form control to its default value, updates the form value, and clears any validity states.
   * @returns {void} Does not return a value.
   */
  formResetCallback() {
    this.value = this.defaultValue;
    this.internals.setFormValue(this.defaultValue);
    this.internals.setValidity({});
  }

  /**
   * Restores the form state by assigning the provided state value
   * and updating the internal form value and validity.
   * @param {object} state The state object containing the value to restore the form.
   * @param {*} state.value The value to set for the form element.
   * @returns {void} This method does not return any value.
   */
  formStateRestoreCallback(state) {
    this.value = state.value;
    this.internals.setFormValue(state.value);
    this.internals.setValidity({});
  }

  /**
   * Callback method to save the current state of a form.
   * This method captures and returns the form's value property.
   * @returns {object} An object containing the `value` property of the current form state.
   */
  formStateSaveCallback() {
    return {
      value: this.value
    };
  }

  /**
   * Toggles the disabled state of the component and updates corresponding attributes.
   * @param {boolean} disabled Indicates whether the form should be marked as disabled.
   * If true, the 'disabled' class is added, and the 'disabled' attribute is set.
   * If false, both the class and attribute are removed.
   * @returns {void}
   */
  formDisabledCallback(disabled) {
    this.native?.classList.toggle('disabled', disabled);
    this.toggleAttribute('disabled', disabled);
  }

  /**
   * A lifecycle callback that is executed when the element is associated with a form.
   * It updates the form's value field with the element's value and sets up an event
   * listener to perform validation and propagate it whenever the form is submitted.
   * @returns {void} Does not return any value.
   */
  formAssociatedCallback() {
    if (this.form) {
      this.internals.setFormValue(this.value);
      this.form?.addEventListener('submit', () => {
        this.validate();
        this.propagateValidation();
      });
    }
  }
}
