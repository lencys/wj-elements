import { FormAssociatedElement } from '../internals/form-associated-element.js';
import { event } from '../utils/event.js';

import styles from './styles/styles.css?inline';

/**
 * `Toggle` is a custom web component that represents a toggle input.
 * @summary This element represents a toggle input.
 * @documentation https://elements.webjet.sk/components/toggle
 * @status stable
 * @augments {FormAssociatedElement}
 * @csspart native - The native toggle wrapper.
 * @csspart input - The toggle input.
 * @csspart toggle - The toggle part.
 * @slot - The default slot for the toggle.
 * @cssproperty [--wje-toggle-color-base=var(--wje-color-contrast-3)] - The base background color of the toggle. Defines the default background color when the toggle is in an unselected state.
 * @cssproperty [--wje-toggle-width=30px] - The overall width of the toggle switch. Determines how wide the toggle component appears.
 * @cssproperty [--wje-toggle-height=18px] - The overall height of the toggle switch. Specifies how tall the toggle component appears.
 * @cssproperty [--wje-toggle-border-radius=50px] - The border radius of the toggle. Controls how rounded the corners of the toggle are.
 * @cssproperty [--wje-toggle-handle-width=14px] - The width of the toggle handle (knob). Determines the size of the handle for user interaction.
 * @cssproperty [--wje-toggle-handle-height=14px] - The height of the toggle handle (knob). Specifies the vertical size of the handle.
 * @cssproperty [--wje-toggle-handle-border-radius=9px] - The border radius of the toggle handle. Controls how rounded the handle is.
 * @cssproperty [--wje-toggle-handle-color=#fff] - The color of the toggle handle. Accepts any valid CSS color, such as `hex`, `rgb`, or `css variable`.
 * @cssproperty [--wje-toggle-handle-shadow=1px 0 1px 0.5px rgba(0,0,0,0.12), 2px 4px 6px rgba(0,0,0,0.2)] - The shadow applied to the toggle handle. Adds a subtle shadow effect for better visual clarity.
 * @cssproperty [--wje-toggle-handle-shadow-checked=1px 1px 0 rgba(0,0,0,0.08), -3px 3px 6px rgba(0,0,0,0.3)] - The shadow applied to the toggle handle when it is in the checked (on) state. Provides visual feedback to indicate the toggle state.
 * @cssproperty [--wje-toggle-duration=250ms] - The duration of the toggle animation in milliseconds. Controls how long the toggle animation lasts during state changes.
 * @cssproperty [--wje-toggle-curve=cubic-bezier(.4,0,.2,1)] - The easing curve used for the toggle animation. Defines the speed curve for the animation, enhancing the user experience with smooth transitions.
 * @tag wje-toggle
 */

export default class Toggle extends FormAssociatedElement {
    #internalValue;

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
        this.#internalValue = value;
        if (this.input) {
            this.input.value = value;
        }
    }

    /**
     * Getter for the value attribute.
     * @returns {string} The value of the attribute.
     */
    get value() {
        return this.#internalValue ?? this.getAttribute('value') ?? 'on';
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
     * Setter for the defaultValue attribute.
     * This method sets the 'value' attribute of the custom input element to the provided value.
     * The 'value' attribute represents the default value of the input element.
     * @param {string} value The value to set as the default value.
     */
    set defaultValue(value) {
        this.setAttribute('value', value);
    }

    /**
     * Getter for the defaultValue attribute.
     * This method retrieves the 'value' attribute of the custom input element.
     * The 'value' attribute represents the default value of the input element.
     * If the 'value' attribute is not set, it returns an empty string.
     * @returns {string} The default value of the input element.
     */
    get defaultValue() {
        return this.getAttribute('value') ?? '';
    }

    /**
     * Set checked attribute.
     * @param {boolean} value true if the toggle is checked, false otherwise
     */
    set checked(value) {
        if (value) {
            this.setAttribute('checked', '');
            this.internals.setFormValue(this.value); // len ak je checked
        } else {
            this.removeAttribute('checked');
            this.internals.setFormValue(null); // ak nie je checked, nič sa neposiela
        }
        if (this.input) {
            this.input.checked = value;
        }
    }

    /**
     * Get checked attribute.
     * @returns {boolean} true if the toggle is checked, false otherwise
     */
    get checked() {
        return this.hasAttribute('checked');
    }

    static get cssStyleSheet() {
        return styles;
    }

    static get observedAttributes() {
        return ['checked', 'disabled', 'required'];
    }

    setupAttributes() {
        this.isShadowRoot = 'open';
        // if some value was set via value setter then dont use default value
        if (this.pristine) {
            this.value = this.#internalValue;
            this.pristine = false;
        }
        this.syncAria();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.input) return;
        if (name === 'checked') {
            const isChecked = this.hasAttribute('checked');
            this.input.checked = isChecked;
            // Reflect into form value
            if (isChecked) {
                this.internals.setFormValue(this.value);
            } else {
                this.internals.setFormValue(null);
            }
        } else if (name === 'disabled') {
            this.input.disabled = this.hasAttribute('disabled');
        } else if (name === 'indeterminate') {
            this.input.indeterminate = this.hasAttribute('indeterminate');
        } else if (name === 'value') {
            // keep payload in sync; do not toggle checked here
            this.#internalValue = newValue ?? undefined;
            this.input.value = this.value;
            // If currently checked, update the submitted payload
            if (this.input.checked) {
                this.internals.setFormValue(this.value);
            }
        }
        this.syncAria();
    }

    draw() {
        const fragment = document.createDocumentFragment();

        const native = document.createElement('div');
        native.setAttribute('part', 'native');
        native.classList.add('native-toggle');

        const input = document.createElement('input');
        input.setAttribute('part', 'input');
        input.type = 'checkbox';
        input.name = this.name;
        input.id = 'input';
        input.checked = this.hasAttribute('checked');
        input.disabled = this.hasAttribute('disabled');
        if (this.hasAttribute('required')) input.required = true;

        const label = document.createElement('label');
        label.setAttribute('for', 'input');

        const toggle = document.createElement('div');
        toggle.setAttribute('part', 'toggle');
        toggle.classList.add('label-wrapper');

        const text = document.createElement('div');
        text.classList.add('text');
        text.innerHTML = '<slot></slot>';

        // Error
        let errorSlot = document.createElement('slot');
        errorSlot.setAttribute('name', 'error');

        let error = document.createElement('div');
        error.setAttribute('slot', 'error');

        // APPEND
        if (this.placement === 'end') {
            native.classList.add('end');
            label.appendChild(text);
            label.appendChild(toggle);
        } else {
            label.appendChild(toggle);
            label.appendChild(text);
        }

        native.appendChild(input);
        native.appendChild(label);
        native.append(errorSlot);

        this.append(error);

        fragment.appendChild(native);

        this.input = input;

        return fragment;
    }

    afterDraw() {
        this.internals.setFormValue(this.checked ? this.value : null); // Set initial form value based on checked state
        this.syncAria();

        if (!this.disabled) {
            this.input.addEventListener('input', (e) => {
                this.validate();

                this.pristine = false;
                this.propagateValidation();

                this.indeterminate = false;
                this.checked = e.target.checked;
                this.syncAria();

                event.dispatchCustomEvent(this, 'wje-toggle:input');
            });

            this.input.addEventListener('change', (e) => {
                event.dispatchCustomEvent(this, 'wje-toggle:change');
            });

            this.addEventListener('invalid', (e) => {
                this.invalid = true;
                this.pristine = false;

                this.showInvalidMessage();
            });

            this.validate();

            if (this.invalid) {
                this.showInvalidMessage();
            }
        }
    }

    /**
     * Syncs ARIA attributes on the host element.
     */
    syncAria() {
        this.setAriaState({
            role: 'switch',
            checked: this.checked,
            disabled: this.disabled,
            required: this.required,
            invalid: this.invalid,
        });
    }

    /**
     * Removes the event listener when the checkbox is disconnected.
     */
    beforeDisconnect() {
        event.removeElement(this.input);
    }
}
