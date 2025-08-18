import { FormAssociatedElement } from '../internals/form-associated-element.js';
import { event } from '../utils/event.js';
import styles from './styles/styles.css?inline';

/**
 * @summary This class represents a custom input element. It extends the WJElement class and provides additional functionality for handling input.
 * @documentation https://elements.webjet.sk/components/input
 * @status stable
 * @augments {FormAssociatedElement}
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
export default class Input extends FormAssociatedElement {
    /**
     * Creates an instance of Input.
     */
    constructor() {
        super();

        this.invalid = false;
        this.pristine = true;
    }

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
     * Retrieves the value from the input element if available; otherwise,
     * returns the internal _value property or an empty string as the default.
     * @returns {string} The current value from the input element, the internal _value, or an empty string.
     */
    get value() {
        return this.input?.value ?? this._value ?? '';
    }

    /**
     * Sets the label attribute of the element.
     * @param {string} value The value to set as the label attribute.
     */
    set label(value) {
        this.setAttribute('label', value);
    }

    /**
     * Retrieves the value of the 'label' attribute if it exists.
     * If the 'label' attribute is not set, it returns false.
     * @returns {string|boolean} The value of the 'label' attribute as a string, or false if the attribute is not set.
     */
    get label() {
        return this.getAttribute('label') || false;
    }

    /**
     * Sets the custom error display attribute for an element.
     * @param {boolean} value If true, adds the 'custom-error-display' attribute to the element. If false, removes the attribute from the element.
     */
    set customErrorDisplay(value) {
        if (value) {
            this.setAttribute('custom-error-display', '');
        } else {
            this.removeAttribute('custom-error-display');
        }
    }

    /**
     * Getter for the customErrorDisplay attribute.
     * @returns {boolean} Whether the attribute is present.
     */
    get customErrorDisplay() {
        return this.hasAttribute('custom-error-display');
    }

    /**
     * Sets the `validateOnChange` property. If set to a truthy value, it adds the
     * `validate-on-change` attribute to the element. If set to a falsy value, it
     * removes the `validate-on-change` attribute from the element.
     * @param {boolean} value Determines whether to add or remove the
     * `validate-on-change` attribute. A truthy value adds the attribute, whereas a
     * falsy value removes it.
     */
    set validateOnChange(value) {
        if (value) {
            this.setAttribute('validate-on-change', '');
        } else {
            this.removeAttribute('validate-on-change');
        }
    }

    /**
     * Getter for the validateOnChange attribute.
     * @returns {boolean} Whether the attribute is present.
     */
    get validateOnChange() {
        return this.hasAttribute('validate-on-change');
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
     * Sets or removes the 'clearable' attribute on the element.
     * When set to a truthy value, the 'clearable' attribute is added; when falsy, the attribute is removed.
     * @param {boolean} value Determines whether to set or remove the 'clearable' attribute. If true, the 'clearable' attribute is added. If false, it is removed.
     */
    set clearable(value) {
        if (value) {
            this.setAttribute('clearable', '');
        } else {
            this.removeAttribute('clearable');
        }
    }

    /**
     * Checks if the 'clearable' attribute is present on the element.
     * @returns {boolean} True if the 'clearable' attribute is set, otherwise false.
     */
    get clearable() {
        return this.hasAttribute('clearable');
    }

    /**
     * Sets the placeholder value for an element. If the provided value is non-empty,
     * it assigns the value to the "placeholder" attribute. Otherwise, it removes
     * the "placeholder" attribute from the element.
     * @param {string} value The placeholder text to set or null/undefined to remove the attribute.
     */
    set placeholder(value) {
        if (value) {
            this.setAttribute('placeholder', value);
        } else {
            this.removeAttribute('placeholder');
        }
    }

    /**
     * Retrieves the value of the 'placeholder' attribute from the element.
     * If the attribute is not set, it returns an empty string.
     * @returns {string} The value of the 'placeholder' attribute or an empty string if not set.
     */
    get placeholder() {
        return this.getAttribute('placeholder') || '';
    }

    /**
     * Sets the `variant` attribute on the element. If a value is provided, it will set the attribute to the given value.
     * If no value is provided, it removes the `variant` attribute from the element.
     * @param {string} value The value to set for the `variant` attribute. If falsy, the attribute is removed.
     */
    set variant(value) {
        if (value) {
            this.setAttribute('variant', value);
        } else {
            this.removeAttribute('variant');
        }
    }

    /**
     * Retrieves the value of the 'variant' attribute from the element.
     * If the attribute is not set, it defaults to 'default'.
     * @returns {string} The value of the 'variant' attribute or 'default' if not set.
     */
    get variant() {
        return this.getAttribute('variant') || 'default';
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
        return ['value', 'name', 'disabled', 'placeholder', 'label', 'message', 'error-inline'];
    }

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
        native.classList.add('native-input', this.variant);

        if (this.invalid) native.classList.add('has-error');

        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

        let inputWrapper = document.createElement('div');
        inputWrapper.setAttribute('part', 'wrapper');
        inputWrapper.classList.add('input-wrapper');

        // Label
        let label = document.createElement('label');
        label.setAttribute('part', 'label');
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
        let errorSlot = document.createElement('slot');
        errorSlot.setAttribute('name', 'error');

        let error = document.createElement('div');
        error.setAttribute('slot', 'error');

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
            wrapper.appendChild(start); // zmenene
            native.classList.add('has-start');
        }

        if (this.label) {
            if (this.variant === 'standard') {
                native.append(label);
            } else {
                inputWrapper.appendChild(label);
            }
        }

        inputWrapper.appendChild(input);
        wrapper.appendChild(inputWrapper);

        native.appendChild(wrapper);
        native.append(errorSlot);

        this.append(error);

        if (this.clearable) {
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
            wrapper.appendChild(end);// zmenene
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
            console.log("Input blur event", e);
            this.native.classList.remove('focused');
            if (!e.target.value) this.labelElement.classList.remove('fade');
        });

        this.input.addEventListener('input', (e) => {
            this.validate();

            if (this.validateOnChange) {
                this.pristine = false;
                this.propagateValidation();
            }

            this.input.classList.remove('pristine');
            this.labelElement.classList.add('fade');

            // const clone = new e.constructor(e.type, e);
            // this.dispatchEvent(clone);

            event.dispatchCustomEvent(this, 'wje-input:input', {
                value: this.input.value,
            });

            this.value = this.input.value;
        });

        this.addEventListener('wje-input:invalid', (e) => {
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

        this.validate();

        if (this.invalid) {
            this.showInvalidMessage();
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
}
