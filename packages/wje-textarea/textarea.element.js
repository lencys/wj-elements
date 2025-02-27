import { default as WJElement, event } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * `Textarea` is a custom web component that represents a textarea input.
 * @summary This element represents a textarea input.
 * @documentation https://elements.webjet.sk/components/textarea
 * @status stable
 * @augments WJElement
 * @csspart native - The native textarea wrapper.
 * @csspart input - The textarea input.
 * @csspart wrapper - The textarea wrapper.
 * @cssproperty [--wje-textarea-font-family=var(--wje-font-family)] - Specifies the font family used for the textarea. Accepts any valid CSS font-family value.
 * @cssproperty [--wje-textarea-background-color=var(--wje-background)] - Sets the background color of the textarea. Accepts any valid CSS color value.
 * @cssproperty [--wje-textarea-color=var(--wje-color)] - Defines the text color within the textarea. Accepts any valid CSS color value.
 * @cssproperty [--wje-textarea-color-invalid=var(--wje-color-danger)] - Changes the text color of the textarea when it is invalid. Useful for highlighting validation errors.
 * @cssproperty [--wje-textarea-border-width=1px] - Specifies the width of the textarea's border. Accepts any valid CSS length unit.
 * @cssproperty [--wje-textarea-border-style=solid] - Sets the style of the textarea's border. Accepts standard CSS border styles such as `solid`, `dashed`, or `dotted`.
 * @cssproperty [--wje-textarea-border-color=var(--wje-border-color)] - Defines the border color of the textarea. Accepts any valid CSS color value.
 * @cssproperty [--wje-textarea-border-color-focus=var(--wje-color-primary)] - Specifies the border color of the textarea when it is focused. Enhances the user experience by providing visual feedback.
 * @cssproperty [--wje-textarea-border-radius=4px] - Determines the border radius of the textarea, defining how rounded its corners are. Accepts any valid CSS length unit.
 * @cssproperty [--wje-textarea-margin-bottom=.5rem] - Sets the bottom margin of the textarea. Ensures spacing between the textarea and other elements.
 * @cssproperty [--wje-textarea-line-height=20px] - Specifies the line height of the text within the textarea. Helps control the vertical spacing of the text.
 * @cssproperty [--wje-textarea-padding=0.5rem] - Defines the padding inside the textarea. Controls the spacing between the content and the border.
 * @tag wje-textarea
 */

export default class Textarea extends WJElement {
    /**
     * Creates an instance of Textarea.
     * @class
     */
    constructor() {
        super();

        this.invalid = false;
        this.pristine = true;
        this.internals = this.attachInternals();
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
     * @returns {string} The validation message of the input.
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

    className = 'Textarea';

    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet} The CSS stylesheet
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Whether the input is associated with a form.
     * @type {boolean}
     */
    static formAssociated = true;

    /**
     * Returns the list of attributes to observe for changes.
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes() {
        return [];
    }

    set placeholder(value) {
        this.setAttribute('placeholder', value);
    }

    get placeholder() {
        return this.getAttribute('placeholder');
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';

        // if some value was set via value setter then don't use default value
        if (this.pristine) {
            this.value = this.innerHTML;
            this.pristine = false;
        }
    }

    beforeDraw() {
        this.observer.disconnect();
    }

    /**
     * Draws the component for the textarea.
     * @returns {DocumentFragment}
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement('div');
        native.classList.add('native-textarea', this.variant || 'default');
        native.setAttribute('part', 'native');

        if (this.hasAttribute('invalid')) native.classList.add('has-error');

        let wrapper = document.createElement('div');
        wrapper.setAttribute('part', 'wrapper');
        wrapper.classList.add('wrapper');

        let inputWrapper = document.createElement('div');
        inputWrapper.classList.add('input-wrapper');

        let label = document.createElement('label');
        label.htmlFor = 'textarea';
        label.innerHTML = this.label || '';

        let input = document.createElement('textarea');
        input.id = 'textarea';
        input.name = this.name;
        input.disabled = this.hasAttribute('disabled');
        input.innerText = this.value;
        input.placeholder = this.placeholder || '';
        input.classList.add('form-control');
        input.setAttribute('part', 'input');
        input.setAttribute('rows', this.rows || 3);
        input.setAttribute('spellcheck', false);

        const attributes = Array.from(this.attributes).map((attr) => attr.name);

        attributes.forEach((attr) => {
            if (this.hasAttribute(attr)) {
                input.setAttribute(attr, this[attr] || '');
            }
        });

        if (this.resize === 'auto') input.addEventListener('input', this.setTextareaHeight);

        if (this.variant === 'standard') {
            if (this.label) native.appendChild(label);
        } else {
            inputWrapper.appendChild(label);
        }

        inputWrapper.appendChild(input);

        wrapper.appendChild(inputWrapper);

        native.appendChild(wrapper);

        fragment.appendChild(native);

        if (this.hasAttribute('counter')) {
            input.maxLength = this.maxLength || 1000;
            input.addEventListener('input', this.counterFn);

            let counter = document.createElement('div');
            counter.classList.add('counter');
            counter.innerText = `${input.value.length}/${input.maxLength}`;

            this.counterElement = counter;
            fragment.appendChild(counter);
        }

        this.native = native;
        this.labelElement = label;
        this.input = input;

        return fragment;
    }

    /**
     * Sets up the event listeners after the component is drawn.
     */
    afterDraw() {
        this.resizeObserver = new ResizeObserver(() => this.setTextareaHeight);

        if (!this.hasAttribute('disabled')) {
            event.addListener(this, 'click', 'wje:textarea:change');
            event.addListener(this, 'click', 'wje:textarea:input');
        }

        this.input.addEventListener('focus', (e) => {
            this.labelElement.classList.add('fade');
            this.native.classList.add('focused');
        });

        this.input.addEventListener('blur', (e) => {
            this.native.classList.remove('focused');
            if (!e.target.value) this.labelElement.classList.remove('fade');
        });

        this.addEventListener('invalid', (e) => {
            this.invalid = true;
            this.pristine = false;

            this.showInvalidMessage();

            if (this.customErrorDisplay) {
                e.preventDefault();
            }
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

            event.dispatchCustomEvent(this, 'wje-textarea:input', {
                value: this.input.value,
            });

            this.value = this.input.value;
        });

        this.validateInput();

        this.observer.observe(this, {
            attributes: true, // Watch for attribute changes
            attributeOldValue: true, // Keep track of the old value of attributes
        });
    }

    componentCleanup() {
        this.observer.disconnect();
        this.resizeObserver?.unobserve(this.input);
    }

    /**
     * Disconnects the component.
     */
    beforeDisconnect() {
        this.resizeObserver?.unobserve(this.input);
    }

    /**
     * Sets the height of the textarea.
     */
    setTextareaHeight = () => {
        if (this.getAttribute('resize') === 'auto') {
            this.input.style.height = 'auto';
            this.input.style.height = this.input.scrollHeight + 'px';
        }
    };

    /**
     * Updates the counter for the textarea.
     * @param {Event} e The event object.
     */
    counterFn = (e) => {
        this.counterElement.innerText = e.target.value.length + '/' + this.input.maxLength;
    };

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
     * @summary Callback function that is called when the custom element is associated with a form.
     * This function adds an event listener to the form's submit event, which validates the input and propagates the validation.
     * @param {HTMLFormElement} form The form the custom element is associated with.
     */
    formAssociatedCallback(form) {
        this.internals.setFormValue(this.value);
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
}
