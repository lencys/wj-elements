import { FormAssociatedElement } from '../internals/form-associated-element.js';
import { event } from '../utils/event.js';
import styles from './styles/styles.css?inline';

/**
 * @summary This method dispatches a custom event named "wje-toggle:change".
 * It is triggered when the input event is fired, which happens when the state of the checkbox changes.
 * The event is dispatched on the current instance of the Checkbox class.
 * @documentation https://elements.webjet.sk/components/checkbox
 * @status stable
 * @augments {FormAssociatedElement}
 * @slot - The checkbox main content.
 * @csspart native - The component's native wrapper.
 * @cssproperty [--wje-checkbox-border-radius=--wje-border-radius-medium] - Border radius of the component;
 * @cssproperty [--wje-checkbox-border-width=1px] - Border width of the component;
 * @cssproperty [--wje-checkbox-border-style=solid] - Border style of the component;
 * @cssproperty [--wje-checkbox-border-color=--wje-color-contrast-1] - Border color of the component;
 * @cssproperty [--wje-checkbox-margin-inline=0] - Margin inline of the component;
 */
export default class Checkbox extends FormAssociatedElement {
	#internalValue;
	/**
	 * Checkbox constructor method.
	 */
	constructor() {
		super();

		this.invalid = false;
		this.pristine = true;
		this._valueOff = 'off';
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
	 * Sets or removes the 'indeterminate' attribute for the object.
	 * This property typically reflects the visual or functional state where
	 * the component is neither fully active nor inactive.
	 * @param {boolean} value A boolean where `true` indicates the 'indeterminate'
	 * state should be set, and `false` removes it.
	 */
	set indeterminate(value) {
		if (value) {
			this.setAttribute('indeterminate', '');
		} else {
			this.removeAttribute('indeterminate');
		}
	}

	/**
	 * Retrieves the current state of the 'indeterminate' attribute.
	 *
	 * The 'indeterminate' attribute is typically used to signify a state
	 * where a checkbox is neither checked nor unchecked, such as a partially
	 * selected state.
	 * @returns {boolean} Returns true if the 'indeterminate' attribute is present; otherwise, false.
	 */
	get indeterminate() {
		return this.hasAttribute('indeterminate');
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
			this.internals.setFormValue(this._valueOff); // ak nie je checked, nič sa neposiela
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

	/**
	 * The class name for the Checkbox.
	 */
	className = 'Checkbox';

	/**
	 * Getter for the CSS stylesheet.
	 * @returns {string} The CSS stylesheet.
	 */
	static get cssStyleSheet() {
		return styles;
	}

	static get observedAttributes() {
		return ['checked', 'disabled', 'value', 'indeterminate'];
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
				this.internals.setFormValue(this._valueOff);
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
	}

	/**
	 * Sets up the attributes for the checkbox.
	 */
	setupAttributes() {
		this.isShadowRoot = 'open';
		// if some value was set via value setter then dont use default value
		if (this.pristine) {
			this.value = this.#internalValue;
			this.pristine = false;
		}
	}

	/**
	 * Draws the checkbox element.
	 * @returns {DocumentFragment} The created fragment.
	 */
	draw() {
		let fragment = document.createDocumentFragment();

		let native = document.createElement('div');
		native.setAttribute('part', 'native');
		native.classList.add('native-checkbox');

		let input = document.createElement('input');
		input.type = 'checkbox';
		input.id = 'checkbox';
		input.name = this.name || 'checkbox';
		input.checked = this.checked;
		input.disabled = this.disabled;
		input.indeterminate = this.indeterminate;
		input.required = this.required;
		input.value = this.value;

		let label = document.createElement('label');
		label.htmlFor = 'checkbox';
		label.innerHTML = '<slot></slot>';

		// Error
		let errorSlot = document.createElement('slot');
		errorSlot.setAttribute('name', 'error');

		let error = document.createElement('div');
		error.setAttribute('slot', 'error');

		// APPEND
		native.append(input);
		native.append(label);
		native.append(errorSlot);

		this.append(error);

		this.input = input;

		fragment.appendChild(native);

		return fragment;
	}

	/**
	 * Adds an event listener after drawing the checkbox.
	 */
	afterDraw() {
		this.internals.setFormValue(this.checked ? this.value : this._valueOff); // Set initial form value based on checked state

		if (!this.disabled) {
			this.input.addEventListener('input', (e) => {
				this.validate();

				this.pristine = false;
				this.propagateValidation();

				// User interaction decides the checked state; value stays as payload
				this.indeterminate = false;
				this.checked = e.target.checked;

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
	 * Removes the event listener when the checkbox is disconnected.
	 */
	beforeDisconnect() {
		event.removeElement(this.input);
	}
}
