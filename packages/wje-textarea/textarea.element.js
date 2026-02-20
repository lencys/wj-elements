import { FormAssociatedElement } from '../internals/form-associated-element.js';
import { event } from '../utils/event.js';
import styles from './styles/styles.css?inline';

/**
 * `Textarea` is a custom web component that represents a textarea input.
 * @summary This element represents a textarea input.
 * @documentation https://elements.webjet.sk/components/textarea
 * @status stable
 * @augments {FormAssociatedElement}
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

export default class Textarea extends FormAssociatedElement {
    static _instanceId = 0;
    /**
     * Creates an instance of Textarea.
     * @class
     */
    constructor() {
        super();

        this.invalid = false;
        this.pristine = true;
        this._instanceId = ++Textarea._instanceId;
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
        this.syncAria();
    }

    /**
     * Getter for the value attribute.
     * @returns {string} The value of the attribute.
     */
    get value() {
        return this.input?.value ?? this._value ?? '';
    }

    /**
     * Sets the label attribute of the element.
     * @param {string} value The value to set as the label attribute.
     */
    set label(value) {
        if (value === null || value === undefined) {
            this.removeAttribute('label');
        } else {
            this.setAttribute('label', value);
        }
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

    set placeholder(value) {
        this.setAttribute('placeholder', value);
    }

    get placeholder() {
        return this.getAttribute('placeholder');
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
     * Returns the list of attributes to observe for changes.
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes() {
        return ['value', 'name', 'disabled', 'placeholder', 'label', 'required', 'readonly', 'invalid', 'rows'];
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';

        // if some value was set via value setter then don't use default value
        if (this.pristine) {
            const attrValue = this.getAttribute('value');
            this.value = attrValue !== null ? attrValue : this.innerHTML;
            this.pristine = false;
        }
        this.syncAria();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return;

        if (name === 'label') {
            this.refresh();
            return;
        }

        if (!this.input) {
            this.syncAria();
            return;
        }

        if (name === 'value') {
            this._value = newValue ?? '';
            this.input.value = this.value;
            this.internals.setFormValue(this.value);
        } else if (name === 'name') {
            this.input.name = this.name;
        } else if (name === 'disabled') {
            this.input.disabled = this.hasAttribute('disabled');
        } else if (name === 'required') {
            this.input.required = this.required;
        } else if (name === 'readonly') {
            this.input.readOnly = this.hasAttribute('readonly');
        } else if (name === 'placeholder') {
            this.input.placeholder = this.placeholder || '';
        } else if (name === 'rows') {
            this.input.rows = Number(newValue || 3);
        }

        this.syncAria();
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
        label.setAttribute('part', 'label');
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
        input.rows = Number(this.getAttribute('rows') || 3);
        input.setAttribute('spellcheck', false);

        const attributes = Array.from(this.attributes).map((attr) => attr.name);

        attributes.forEach((attr) => {
            if (this.hasAttribute(attr)) {
                input.setAttribute(attr, this[attr] || '');
            }
        });

        let error = document.createElement('div');
        error.setAttribute('slot', 'error');

        let errorSlot = document.createElement('slot');
        errorSlot.setAttribute('name', 'error');
        this._ariaErrorId = this.id ? `${this.id}-error` : `wje-textarea-${this._instanceId}-error`;
        errorSlot.id = this._ariaErrorId;

        if (this.getAttribute('resize') === 'auto') input.addEventListener('input', this.setTextareaHeight);

        if (this.label) {
            if (this.variant === 'standard') {
                native.appendChild(label);
            } else {
                inputWrapper.appendChild(label);
            }
        }

        inputWrapper.appendChild(input);

        wrapper.appendChild(inputWrapper);

        native.appendChild(wrapper);
        native.append(errorSlot);

        this.append(error);

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

        this.syncAria();
        return fragment;
    }

    /**
     * Sets up the event listeners after the component is drawn.
     */
    afterDraw() {
        if (this.getAttribute('resize') === 'auto' && typeof ResizeObserver === 'function') {
            this.resizeObserver = new ResizeObserver(() => this.setTextareaHeight());
            this.resizeObserver.observe(this.input);
        }

        if (!this.hasAttribute('disabled')) {
            event.addListener(this, 'click', 'wje-textarea:change');
            event.addListener(this, 'click', 'wje-textarea:input');
        }

        this.input.addEventListener('focus', (e) => {
            this.labelElement.classList.add('fade');
            this.native.classList.add('focused');
        });

        this.input.addEventListener('blur', (e) => {
            this.native.classList.remove('focused');
            if (!e.target.value) this.labelElement.classList.remove('fade');
        });

        this.input.addEventListener('input', (e) => {
            this.validate();

            if (this.validateOnChange) {
                this.pristine = false;
                this.propagateValidation();
            }

            if (this.invalid) {
                this.invalid = false;
                this.internals.setValidity({}, '');
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

        this.addEventListener('invalid', (e) => {
            this.invalid = true;
            this.pristine = false;

            this.showInvalidMessage();

            if (this.customErrorDisplay) {
                e.preventDefault();
            }
        });

        this.validate();

        this.syncAria();
    }

    /**
     * Syncs ARIA attributes on the host element.
     */
    syncAria() {
        const requiredInvalid = this.required && !this.value;
        const invalid = this.invalid || requiredInvalid;
        const label = this.label && this.label !== false ? this.label.trim() : '';
        this.setAriaState({
            role: 'textbox',
            disabled: this.disabled,
            required: this.required,
            readonly: this.hasAttribute('readonly'),
            invalid,
            describedBy: this._ariaErrorId,
            ...(label ? { label } : {}),
        });
    }

    componentCleanup() {
        this.resizeObserver?.unobserve(this.input);
        this.resizeObserver?.disconnect();
    }

    /**
     * Disconnects the component.
     */
    beforeDisconnect() {
        this.resizeObserver?.unobserve(this.input);
        this.resizeObserver?.disconnect();
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
    }
}
