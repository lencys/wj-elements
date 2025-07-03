import { FormAssociatedElement } from '../internals/form-associated-element.js';
import { event } from '../utils/event.js';
import Radio from '../wje-radio/radio.js';
import styles from './styles/styles.css?inline';

/**
 * `RadioGroup` is a custom web component that represents a group of radio buttons.
 * @summary This element represents a group of radio buttons.
 * @documentation https://elements.webjet.sk/components/radio-group
 * @status stable
 * @augments {FormAssociatedElement}
 * @slot - The default slot for the radio group.
 * @tag wje-radio-group
 */

export default class RadioGroup extends FormAssociatedElement {
    #internalValue = '';

    /**
     * Creates an instance of RadioGroup.
     * @class
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
        this.#internalValue = value;
        this.pristine = false;
        this.internals.setFormValue(value);
        this.setAttribute('value', value);
    }

    /**
     * Getter for the value attribute.
     * @returns {string} The value of the attribute.
     */
    get value() {
        return this.getAttribute('value');
    }

    className = 'RadioGroup';

    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet() {
        return styles;
    }

    static get observedAttributes() {
        return [];
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
        if (this.pristine) {
            this.pristine = false;
        }
    }

    /**
     * Draws the component for the radio group.
     * @returns {DocumentFragment}
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement('div');
        native.classList.add('native-radio-group', this.hasAttribute('inline') ? 'wje-inline' : 'ddd');

        let input = document.createElement('input');
        input.type =  'text';
        input.name = this.name;
        input.disabled = this.disabled;
        input.required = true;
        input.value = this.value || '';
        input.classList.add('input-hidden');

        let slot = document.createElement('slot');

        let label = document.createElement('label');
        label.innerText = this.label;
        if (this.value && !this.hasAttribute('error')) label.classList.add('fade');

        if (this.label) {
            native.append(label);
        }

        // Error
        let errorSlot = document.createElement('slot');
        errorSlot.setAttribute('name', 'error');

        let error = document.createElement('div');
        error.setAttribute('slot', 'error');

        native.append(input);
        native.append(slot);
        native.append(errorSlot);

        this.append(error);

        fragment.append(native);

        this.input = input;

        return fragment;
    }

    /**
     * Adds event listeners after the component is drawn. Handles the selection of radio buttons.
     */
    afterDraw() {
        if(this.value)
            this.checkRadio(this.getRadioByValue(this.value));

        // this.addEventListener('wje-radio:input', (e) => {
        //     this.value = e.detail.context.value;
        // });

        this.validate();

        if (this.invalid) {
            this.showInvalidMessage();
        }

        this.addEventListener('wje-radio:change', (e) => {
            this.checkRadio(e.target);

            this.validate();

            this.pristine = false;
            this.propagateValidation();

        });

        this.input.addEventListener('input', (e) => {
            this.validate();

            this.pristine = false;
            this.propagateValidation();

            this.value = this.checkRadio(this.value);

            event.dispatchCustomEvent(this, 'wje-toggle:input');
        });

        this.addEventListener('wje-radio-group:invalid', (e) => {
            this.invalid = true;
            this.pristine = false;

            this.showInvalidMessage();
        });

    }

    /**
     * Returns the radio button with the given value.
     * @param {string} value The value of the radio button.
     * @returns {Radio} The radio button.
     */
    getRadioByValue(value) {
        return this.getAllElements().find((el) => el instanceof Radio && el.value === value);
    }

    /**
     * Removes the check from all radio buttons.
     */
    removeCheck() {
        this.getAllElements().forEach((el) => {
            if (el instanceof Radio) el.checked = false;
        });
    }

    /**
     * Sets the given radio button to checked.
     */
    checkRadio(radio) {
        this.removeCheck();

        if (radio) {
            radio.checked = true;
            this.value = radio.value;
            this.input.value = radio.value;
            return true;
        }

        console.error(`Radio with value ${radio.value} not found`);
        return false;
    }

    /**
     * Retrieves all direct child elements of the current element.
     * @returns {HTMLElement[]} An array of child elements.
     */
    getAllElements() {
        return Array.from(this.children);
    }
}
