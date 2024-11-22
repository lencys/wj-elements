import { default as WJElement, event } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * @summary This class represents a custom input element. It extends the WJElement class and provides additional functionality for handling input.
 * @documentation https://elements.webjet.sk/components/input
 * @status stable
 * @augments WJElement
 * @csspart native - The native part.
 * @csspart wrapper - The wrapper part.
 * @csspart input - The input part.
 * @csspart clear - The clear part.
 * @slot start - Slot for content at the start of the input.
 * @slot end - Slot for content at the end of the input.
 * @cssproperty [--wje-input-font-family=var(--wje-font-family)] - Defines the font family for the input text.
 * @cssproperty [--wje-input-background-color=var(--wje-background)] - Specifies the background color of the input field.
 * @cssproperty [--wje-input-color=var(--wje-color)] - Sets the text color within the input field.
 * @cssproperty [--wje-input-color-invalid=var(--wje-color-danger)] - Changes the text color when the input value is invalid.
 * @cssproperty [--wje-input-border-color=var(--wje-border-color)] - Defines the border color of the input field.
 * @cssproperty [--wje-input-border-color-focus=var(--wje-color-primary)] - Specifies the border color when the input is focused.
 * @cssproperty [--wje-input-border-width=1px] - Sets the width of the input border.
 * @cssproperty [--wje-input-border-style=solid] - Defines the border style of the input (e.g., solid, dashed).
 * @cssproperty [--wje-input-border-radius=4px] - Specifies the border radius, creating rounded corners.
 * @cssproperty [--wje-input-margin-bottom=.5rem] - Adds spacing below the input field.
 * @cssproperty [--wje-input-line-height=20px] - Sets the line height of the text within the input field.
 * @cssproperty [--wje-input-slot-padding-inline=.5rem] - Controls the padding on the left and right of the input slot content.
 * // @fires wje-input:input - Dispatched when the input value changes.
 * // @fires wje-input:clear - Dispatched when the input is cleared.
 */
export default class Input extends WJElement {
    /**
     * Creates an instance of Input.
     */
    constructor() {
        super();

        this.invalid = false;
        this.pristine = true;
        this.internals = this.attachInternals();

        // Create a mutation observer instance to watch for changes in attributes
        this.observer = new MutationObserver(this.observeFunction);
    }

    observeFunction = (mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes') {
                const attributeName = mutation.attributeName;
                const oldValue = mutation.oldValue;
                const newValue = this.getAttribute(attributeName);

                console.log(`Attribute ${attributeName} changed from ${oldValue} to ${newValue}`);
            }
        });

        this.refresh();
    };

    /**
     * Setter for the value attribute.
     * @param {string} value The value to set.
     */
    set value(value) {
        this.internals.setFormValue(value);

        if (this.input) this.input.value = value;

        this.pristine = false;
        this._value = value;
    }

    /**
     * Getter for the value attribute.
     * @returns {string} The value of the attribute.
     */
    get value() {
        return this.input?.value ?? this._value ?? '';
    }

    /**
     * Getter for the customErrorDisplay attribute.
     * @returns {boolean} Whether the attribute is present.
     */
    get customErrorDisplay() {
        return this.hasAttribute('custom-error-display');
    }

    /**
     * Getter for the validateOnChange attribute.
     * @returns {boolean} Whether the attribute is present.
     */
    get validateOnChange() {
        return this.hasAttribute('validate-on-change');
    }

    /**
     * Getter for the invalid attribute.
     * @returns {boolean} Whether the attribute is present.
     */
    get invalid() {
        return this.hasAttribute('invalid');
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
     * Getter for the form attribute.
     * @returns {HTMLFormElement} The form the input is associated with.
     */
    get form() {
        return this.internals.form;
    }

    /**
     * Getter for the name attribute.
     * @returns {string} The name of the input element.
     */
    get name() {
        return this.getAttribute('name');
    }

    /**
     * Getter for the type attribute.
     * @returns {string} The type of the input element.
     */
    get type() {
        return this.localName;
    }

    /**
     * Getter for the validity attribute.
     * @returns {ValidityState} The validity state of the input.
     */
    get validity() {
        return this.internals.validity;
    }

    /**
     * Getter for the validationMessage attribute.
     * @returns {string} The validation message of the input element.
     */
    get validationMessage() {
        return this.internals.validationMessage;
    }

    /**
     * Getter for the willValidate attribute.
     * @returns {boolean} Whether the input will be validated.
     */
    get willValidate() {
        return this.internals.willValidate;
    }

    /**
     * @summary Getter for the defaultValue attribute.
     * This method retrieves the 'value' attribute of the custom input element.
     * The 'value' attribute represents the default value of the input element.
     * If the 'value' attribute is not set, it returns an empty string.
     * @returns {string} The default value of the input element.
     */
    get defaultValue() {
        return this.getAttribute('value') ?? '';
    }

    /**
     * @summary Setter for the defaultValue attribute.
     * This method sets the 'value' attribute of the custom input element to the provided value.
     * The 'value' attribute represents the default value of the input element.
     * @param {string} value The value to set as the default value.
     */
    set defaultValue(value) {
        this.setAttribute('value', value);
    }

    /**
     * The class name of the input element.
     * @type {string}
     */
    className = 'Input';

    /**
     * Getter for the cssStyleSheet attribute.
     * @returns {CSSStyleSheet} The CSS style sheet of the input element.
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Getter for the observedAttributes attribute of the input element.
     * @returns {Array} The attributes to observe for changes.
     */
    static get observedAttributes() {
        return [];
    }

    /**
     * Whether the input is associated with a form.
     * @type {boolean}
     */
    static formAssociated = true;

    /**
     * Sets up the attributes for the input.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
        // if some value was set via value setter then dont use default value
        if (this.pristine) {
            this.value = this.defaultValue;
            this.pristine = false;
        }
    }

    beforeDraw() {
        this.observer.disconnect();
    }

    /**
     * Draws the input element.
     * @returns {DocumentFragment} The drawn input.
     */
    draw() {
        let hasSlotStart = this.hasSlot(this, 'start');
        let hasSlotEnd = this.hasSlot(this, 'end');
        let hasSlotError = this.hasSlot(this, 'error');
        let fragment = document.createDocumentFragment();

        // Wrapper
        let native = document.createElement('div');
        native.setAttribute('part', 'native');
        native.classList.add('native-input', this.variant || 'default');

        if (this.hasAttribute('invalid')) native.classList.add('has-error');

        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

        let inputWrapper = document.createElement('div');
        inputWrapper.setAttribute('part', 'wrapper');
        inputWrapper.classList.add('input-wrapper');

        // Label
        let label = document.createElement('label');
        label.innerText = this.label;
        if (this.value && !this.hasAttribute('error')) label.classList.add('fade');

        // Input
        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('part', 'input');
        input.setAttribute('value', this.value || '');
        input.classList.add('form-control');

        const attributes = Array.from(this.attributes).map((attr) => attr.name);

        attributes.forEach((attr) => {
            if (this.hasAttribute(attr)) {
                input.setAttribute(attr, this[attr] || '');
            }
        });

        // Error
        let error = document.createElement('div');
        error.classList.add('error-message');
        error.setAttribute('part', 'error');

        let errorSlot = null;
        if (hasSlotError) {
            errorSlot = document.createElement('slot');
            errorSlot.setAttribute('name', 'error');

            if (this.hasAttribute('error-inline')) {
                // inline version of error message
                native.appendChild(errorSlot);
            } else {
                // tooltip version of error message
                error.appendChild(errorSlot);
                wrapper.appendChild(error);
            }
        } else {
            wrapper.appendChild(error);
        }

        let start = null;
        if (hasSlotStart) {
            start = document.createElement('slot');
            start.setAttribute('name', 'start');
            start.setAttribute('part', 'start');
        }

        let end = null;
        if (hasSlotEnd) {
            end = document.createElement('slot');
            end.setAttribute('name', 'end');
            end.setAttribute('part', 'end');
        }

        if (hasSlotStart) {
            inputWrapper.appendChild(start);
            native.classList.add('has-start');
        }

        if (this.variant === 'standard') {
            if (this.label) native.appendChild(label);
        } else {
            inputWrapper.appendChild(label);
        }

        inputWrapper.appendChild(input);
        wrapper.appendChild(inputWrapper);

        native.appendChild(wrapper);

        if (this.hasAttribute('clearable')) {
            this.clear = document.createElement('wje-button');
            this.clear.classList.add('clear');
            this.clear.setAttribute('fill', 'link');
            this.clear.setAttribute('part', 'clear');

            let clearIcon = document.createElement('wje-icon');
            clearIcon.setAttribute('name', 'x');
            this.clear.appendChild(clearIcon);
            inputWrapper.appendChild(this.clear);
        }

        if (hasSlotEnd) {
            inputWrapper.appendChild(end);
            native.classList.add('has-end');
        }

        fragment.appendChild(native);

        this.native = native;
        this.labelElement = label;
        this.input = input;
        this.errorMessage = error;

        return fragment;
    }

    /**
     * Runs after the input is drawn to the DOM.
     */
    afterDraw() {
        this.input.addEventListener('focus', (e) => {
            this.labelElement.classList.add('fade');
            this.native.classList.add('focused');
        });

        this.input.addEventListener('blur', (e) => {
            this.native.classList.remove('focused');
            if (!e.target.value) this.labelElement.classList.remove('fade');
        });

        this.input.addEventListener('input', (e) => {
            this.validateInput();

            if (this.validateOnChange) {
                this.pristine = false;
                this.propagateValidation();
            }

            this.input.classList.remove('pristine');
            this.labelElement.classList.add('fade');

            const clone = new e.constructor(e.type, e);
            this.dispatchEvent(clone);

            event.dispatchCustomEvent(this, 'wje-input:input', {
                value: this.input.value,
            });

            this.value = this.input.value;
        });

        this.addEventListener('invalid', (e) => {
            this.invalid = true;
            this.pristine = false;

            this.showInvalidMessage();

            if (this.customErrorDisplay) {
                e.preventDefault();
            }
        });

        this.addEventListener('focus', () => this.input.focus());

        if (this.clear) {
            this.clear.addEventListener('wje-button:click', (e) => {
                this.input.value = '';
                event.dispatchCustomEvent(this.clear, 'wje-input:clear');
            });
        }

        this.validateInput();

        if (this.hasAttribute('invalid')) {
            this.showInvalidMessage();
        }

        this.observer.observe(this, {
            attributes: true, // Watch for attribute changes
            attributeOldValue: true, // Keep track of the old value of attributes
        });
    }

    componentCleanup() {
        this.observer.disconnect();
    }

    /**
     * @summary Displays the validation message for the input.
     * If the input has a slot named 'error', it sets the text content of the element with attribute 'error-message' inside the slot to the validation message.
     * If the input does not have an 'error' slot, it sets the text content of the errorMessage property to the validation message.
     */
    showInvalidMessage() {
        let hasSlotError = this.hasSlot(this, 'error');

        if (hasSlotError) {
            const slot = this.querySelector("[slot='error']");
            let errorMessage = slot.querySelector('[error-message]');

            if (!errorMessage) {
                const error = document.createElement('div');
                error.setAttribute('error-message', '');
                slot.appendChild(error);
                errorMessage = error;
            }

            errorMessage.textContent = this.internals.validationMessage;
        } else {
            this.errorMessage.textContent = this.internals.validationMessage;
        }
    }

    /**
     * @summary Validates the input.
     * This method checks the validity state of the input. If the input is not valid, it iterates over the validity state object.
     * For each invalid state, it constructs an attribute name and checks if the input has this attribute.
     * If the input has the attribute, it sets the validation error to the state and the error message to the attribute value.
     * If the input does not have the attribute, it sets the error message to the default validation message of the input.
     * It then sets the validity in the form internals to an object with the validation error as key and true as value, and the error message.
     * If the input is valid, it sets the validity in the form internals to an empty object.
     */
    validateInput() {
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

                    this.internals.setValidity({ [this.validationError]: true }, errorMessage);
                }
            }
        } else {
            this.internals.setValidity({});
        }
    }

    /**
     * @summary Propagates the validation state of the input.
     * This method sets the 'invalid' property of the input based on its 'pristine' state and its internal validity state.
     * If the input is invalid and the 'customErrorDisplay' property is true, it dispatches an 'invalid' event.
     */
    propagateValidation() {
        this.invalid = !this.pristine && !this.internals.validity.valid;

        if (this.invalid && this.customErrorDisplay) {
            this.dispatchEvent(new Event('invalid'));
        }
    }

    /**
     * Checks whether the input has a slot.
     * @param {HTMLElement} el The element to check.
     * @param {string} slotName The name of the slot to check for.
     * @returns {boolean} Whether the input has the slot.
     */
    hasSlot(el, slotName = null) {
        let selector = slotName ? `[slot="${slotName}"]` : '[slot]';

        return el.querySelectorAll(selector).length > 0 ? true : false;
    }

    /**
     * @summary Callback function that is called when the custom element is associated with a form.
     * This function adds an event listener to the form's submit event, which validates the input and propagates the validation.
     * @param {HTMLFormElement} form The form the custom element is associated with.
     */
    formAssociatedCallback(form) {
        form?.addEventListener('submit', () => {
            this.validateInput();
            this.propagateValidation();
        });
    }

    /**
     * The formResetCallback method is a built-in lifecycle callback that gets called when a form gets reset.
     * This method is responsible for resetting the value of the custom input element to its default value.
     * It also resets the form value and validity state in the form internals.
     * @function
     */
    formResetCallback() {
        // Set the value of the custom input element to its default value
        this.value = this.defaultValue;
        // Reset the form value in the form internals to the default value
        this.internals.setFormValue(this.defaultValue);
        // Reset the validity state in the form internals
        this.internals.setValidity({});
    }

    /**
     * The formStateRestoreCallback method is a built-in lifecycle callback that gets called when the state of a form-associated custom element is restored.
     * This method is responsible for restoring the value of the custom input element to its saved state.
     * It also restores the form value and validity state in the form internals to their saved states.
     * @param {object} state The saved state of the custom input element.
     * @function
     */
    formStateRestoreCallback(state) {
        // Set the value of the custom input element to its saved value
        this.value = state.value;
        // Restore the form value in the form internals to the saved value
        this.internals.setFormValue(state.value);
        // Restore the validity state in the form internals to the saved state
        this.internals.setValidity({});
    }

    /**
     * The formStateSaveCallback method is a built-in lifecycle callback that gets called when the state of a form-associated custom element is saved.
     * This method is responsible for saving the value of the custom input element.
     * @returns {object} The saved state of the custom input element.
     * @function
     */
    formStateSaveCallback() {
        return {
            value: this.value,
        };
    }

    /**
     * The formDisabledCallback method is a built-in lifecycle callback that gets called when the disabled state of a form-associated custom element changes.
     * This method is not implemented yet.
     * @param {boolean} disabled The new disabled state of the custom input element.
     * @function
     */
    formDisabledCallback(disabled) {
        console.warn('formDisabledCallback not implemented yet');
    }

    // dispatchEvent(e) {
    //     return false;
    // }
}
