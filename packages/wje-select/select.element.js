import { FormAssociatedElement } from '../internals/form-associated-element.js';
import { event } from '../utils/event.js';
import Button from '../wje-button/button.js';
import Popup from '../wje-popup/popup.js';
import Icon from '../wje-icon/icon.js';
import Label from '../wje-label/label.js';
import Chip from '../wje-chip/chip.js';
import Input from '../wje-input/input.js';
import Option from '../wje-option/option.js';
import Options from '../wje-options/options.js';
import Checkbox from '../wje-checkbox/checkbox.js';
import styles from './styles/styles.css?inline';

export class Select extends FormAssociatedElement {
	constructor() {
		super();
		/**
		 * @type {HTMLElement|null}
		 * @description A reference to the counter element, initially null.
		 * @private
		 */
		this.counterEl = null;

		/**
		 * @type {boolean}
		 * @description Tracks whether the select element was previously opened, initially false.
		 * @private
		 * @default {boolean} false
		 */
		this._wasOppened = false;

		/**
		 * @type {HTMLElement|null}
		 * @description A reference to the native select element, initially null.
		 */
		this.native = null;

		/**
		 * @type {HTMLElement|null}
		 * @description A reference to the popup element, initially null.
		 */
		this.popup = null;

		/**
		 * @type {HTMLElement|null}
		 * @description A reference to the label element, initially null.
		 */
		this.labelElement = null;

		/**
		 * @type {HTMLElement|null}
		 * @description A reference to the slot start element, initially null.
		 */
		this.slotStart = null;

		/**
		 * @type {HTMLElement|null}
		 * @description A reference to the slot end element, initially null.
		 */
		this.slotEnd = null;

		/**
		 * @type {HTMLElement|null}
		 * @description A reference to the input element, initially null.
		 */
		this.input = null;

		/**
		 * @type {HTMLElement|null}
		 * @description A reference to the chips element, initially null.
		 */
		this.chips = null;

		/**
		 * @type {HTMLElement|null}
		 * @description A reference to the clear button element, initially null.
		 */
		this.clear = null;

		/**
		 * @type {HTMLElement|null}
		 * @description A reference to the list element, initially null.
		 */
		this.list = null;

		this._value = [];
		this._selectedOptions = [];
	}

	#addedOptions = [];

	#htmlOptions = [];

	/**
	 * An object representing component dependencies with their respective classes.
	 * Each property in the object maps a custom component name (as a string key)
	 * to its corresponding class or constructor.
	 * @typedef {{[key: string]: Function}} Dependencies
	 * @property {Function} 'wje-button' Represents the Button component class.
	 * @property {Function} 'wje-popup' Represents the Popup component class.
	 * @property {Function} 'wje-icon' Represents the Icon component class.
	 * @property {Function} 'wje-label' Represents the Label component class.
	 * @property {Function} 'wje-chip' Represents the Chip component class.
	 * @property {Function} 'wje-input' Represents the Input component class.
	 * @property {Function} 'wje-option' Represents the Option component class.
	 * @property {Function} 'wje-checkbox' Represents the Checkbox component class.
	 */
	dependencies = {
		'wje-button': Button,
		'wje-popup': Popup,
		'wje-icon': Icon,
		'wje-label': Label,
		'wje-chip': Chip,
		'wje-input': Input,
		'wje-option': Option,
		'wje-options': Options,
		'wje-checkbox': Checkbox,
	};

	/**
	 * Sets the value for the form field. Converts the input value into a FormData object
	 * if it is not already an array, splitting by spaces if necessary, and sets the
	 * internal form value as well as the selected values.
	 * @param {string|Array} value The value to be set. Can be a string (which will be
	 * split into an array by spaces) or an array of values.
	 */
	set value(value) {
		const formData = new FormData();

		if (value) {
			let data = value;

			if (!Array.isArray(data)) {
				data = data.split(' ');
			}
			data.forEach(v => {
				formData.append(this.name, v)
			});
			value = formData;

			this._value = data;
		} else {
			formData.delete(this.name);
			value = formData;
			this._value = [];
		}
		this.internals.setFormValue(value);
	}

	/**
	 * Retrieves the current value.
	 * @returns {any} The value of the `_value` property.
	 */
	get value() {
		return this._value;
	}

	/**
	 * Sets the maximum number of options allowed.
	 * @param { number | object} value The value to set as the maximum number of options.
	 * If null, the 'max-options' attribute will be removed.
	 */
	set maxOptions(value) {
		if (value) {
			this.setAttribute('max-options', value);
		} else {
			this.removeAttribute('max-options');
		}
	}

	/**
	 * Retrieves the maximum number of options allowed.
	 * Parses the value of the 'max-options' attribute from the element and converts it to a number.
	 * If the attribute is not present or cannot be converted to a valid number, defaults to 1.
	 * @returns {number} The maximum number of options, or 0 if the attribute is not set or invalid.
	 */
	get maxOptions() {
		return +this.getAttribute('max-options') || 1;
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
	 * Sets the trigger value.
	 * @param {string} value The trigger value to set.
	 */
	set trigger(value) {
		this.setAttribute('trigger', value);
	}

	/**
	 * Returns the trigger value.
	 * @returns {string} The trigger value.
	 */
	get trigger() {
		return this.getAttribute('trigger') || 'click';
	}

	set disabled(value) {
		if (value) {
			this.setAttribute('disabled', '');
			this.input.setAttribute('disabled', '');
			this.displayInput.setAttribute('disabled', '');
		} else {
			this.removeAttribute('disabled');
			this.input.removeAttribute('disabled');
			this.displayInput.removeAttribute('disabled');
		}
	}

	get disabled() {
		return this.hasAttribute('disabled');
	}

	set readonly(value) {
		if (value) {
			this.setAttribute('disabled', '');
			this.input.setAttribute('readonly', '');
			this.displayInput.setAttribute('disabled', '');
		} else {
			this.removeAttribute('disabled');
			this.input.removeAttribute('readonly');
			this.displayInput.removeAttribute('disabled');
		}
	}

	get readonly() {
		return this.hasAttribute('readonly');
	}

	/**
	 * Sets the offset attribute for the element.
	 * @param {string} value The value to assign to the offset attribute.
	 */
	set offset(value) {
		this.setAttribute('offset', value);
	}

	/**
	 * Gets the value of the offset attribute of the current element.
	 * If the offset attribute is not present, returns a default value of '0'.
	 * @returns {string} The value of the offset attribute or the default value '0'.
	 */
	get offset() {
		return this.getAttribute('offset') || '5';
	}

	/**
	 * Sets the selected options for the object.
	 * @param {Array|object} value The new value for the selected options. It can be an array or object containing the selected options.
	 */
	set selectedOptions(value) {
		this._selectedOptions = value;
	}

	/**
	 * Retrieves the selected options.
	 * @returns {Array} An array containing the currently selected options. If no options are selected, an empty array is returned.
	 */
	get selectedOptions() {
		return this._selectedOptions || [];
	}

	/**
	 * Sets the `lazy` attribute on the element. If the provided value is truthy, the `lazy` attribute is added. If the value is falsy, the `lazy` attribute is removed.
	 * @param {boolean} value A boolean value indicating whether to add or remove the `lazy` attribute. If `true`, the attribute is added; if `false`, it is removed.
	 */
	set lazy(value) {
		if (value) {
			this.setAttribute('lazy', '');
		} else {
			this.removeAttribute('lazy');
		}
	}

	/**
	 * Getter for the 'lazy' property.
	 * @returns {boolean} Returns true if the 'lazy' attribute is present on the element, otherwise false.
	 */
	get lazy() {
		return this.hasAttribute('lazy');
	}

	/**
	 * Sets or removes the 'no-size' attribute on an element.
	 * @param {boolean} value A boolean indicating whether to add or remove the 'no-size' attribute. If true, the attribute is added; if false, the attribute is removed.
	 */
	set noSize(value) {
		if (value) {
			this.setAttribute('no-size', '');
		} else {
			this.removeAttribute('no-size');
		}
	}

	/**
	 * Gets the value of the 'no-size' attribute for the element.
	 * @returns {boolean} True if the 'no-size' attribute is present, otherwise false.
	 */
	get noSize() {
		return this.hasAttribute('no-size');
	}

	/**
	 * Getter for the customErrorDisplay attribute.
	 * @returns {boolean} Whether the attribute is present.
	 */
	get customErrorDisplay() {
		return this.hasAttribute('custom-error-display');
	}

	/**
	 * Retrieves the complete list of options available for the component.
	 * The options are determined by combining elements from various sources, including loaded options, added options, and HTML-sourced options.
	 * If a `wje-options` element is present within the component, its loaded options are included in the merged list.
	 * In the absence of a `wje-options` element, duplicates among the added and HTML options are removed, retaining their order.
	 * @returns {Array<object>} An array containing all the available options, combining the loaded, added, and HTML-based options, with duplicates removed where applicable.
	 */
	get options() {
		if (this.querySelector('wje-options')) {
			const allOptions = [...this.querySelector('wje-options').loadedOptions, ...this.#addedOptions, ...this.#htmlOptions]

			return allOptions
		} else {
			const allOptions = [...this.#addedOptions, ...this.#htmlOptions]

			return Array.from(
				new Map(allOptions.reverse().map(obj => [obj.value, obj])).values()
			).reverse();
		}
	}

	className = 'Select';

	/**
	 * Returns the CSS styles for the component.
	 * @static
	 * @returns {CSSStyleSheet}
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
		return ['active', 'value', 'disabled', 'readonly', 'multiple', 'label', 'placeholder', 'max-height', 'max-options', 'variant', 'placement'];
	}

	/**
	 * Sets up the attributes for the component.
	 */
	setupAttributes() {
		this.isShadowRoot = 'open';
	}

	beforeDraw() {
		if(this.hasAttribute('value')) {
			this.value = this.getAttribute('value');
		}
	}

	/**
	 * Draws the component for the select.
	 * @returns {DocumentFragment}
	 */
	draw() {
		let fragment = document.createDocumentFragment();

		this.classList.add('wje-placement', this.placement ? 'wje-' + this.placement : 'wje-start');

		// zakladny obalovac
		let native = document.createElement('div');
		native.setAttribute('part', 'native');
		native.classList.add('native-select', this.variant || 'default');

		// wrapper pre label a inputWrapper
		let wrapper = document.createElement('div');
		wrapper.classList.add('wrapper');
		wrapper.setAttribute('slot', 'anchor');

		// label
		let label = document.createElement('wje-label');
		label.setAttribute('part', 'label');
		label.innerText = this.label || '';

		// obalovac pre input
		let inputWrapper = document.createElement('div');
		inputWrapper.setAttribute('part', 'input-wrapper');
		inputWrapper.classList.add('input-wrapper');

		let slotStart = document.createElement('div');
		slotStart.classList.add('slot-start');

		let input = document.createElement('input');
		input.setAttribute('type', 'text');
		input.value = this.value.join(' ').trim();
		input.classList.add('input-hidden');

		let display = document.createElement('input');
		display.setAttribute('type', 'text');
		display.setAttribute('part', 'input');
		display.setAttribute('autocomplete', 'off');
		display.setAttribute('readonly', '');
		display.setAttribute('placeholder', this.placeholder || '');

		if (this.required) {
			input.setAttribute('required', '');
			display.setAttribute('required', '');
		}

		let slotEnd = document.createElement('div');
		slotEnd.classList.add('slot-end');

		let arrow = document.createElement('wje-icon');
		arrow.setAttribute('name', 'chevron-down');
		arrow.setAttribute('slot', 'arrow');

		let chips = document.createElement('div');
		chips.classList.add('chips');
		chips.innerText = this.placeholder || '';

		// obalovac pre option a find
		let optionsWrapper = document.createElement('div');
		optionsWrapper.setAttribute('part', 'options-wrapper');
		optionsWrapper.classList.add('options-wrapper');
		optionsWrapper.style.setProperty('height', this.maxHeight || 'auto');

		let list = document.createElement('div');
		list.classList.add('list');

		let slot = document.createElement('slot');

		let clear = document.createElement('wje-button');
		clear.setAttribute('fill', 'link');
		clear.setAttribute('part', 'clear');
		clear.setAttribute('stop-propagation', '');

		let clearIcon = document.createElement('wje-icon');
		clearIcon.setAttribute('name', 'x');

		let error = document.createElement('div');
		error.setAttribute('slot', 'error');

		let errorSlot = document.createElement('slot');
		errorSlot.setAttribute('name', 'error');

		// vytvorime popup
		let popup = document.createElement('wje-popup');
		popup.setAttribute('placement', 'bottom-start');
		if (!this.noSize)
			popup.setAttribute('size', '');
		popup.setAttribute('part', 'popup');
		popup.setAttribute('offset', this.offset);

		if(this.lazy || this.querySelector('wje-options')) {
			popup.setAttribute('loader', '');
		}

		if (this.disabled || this.readonly) {
			popup.setAttribute('disabled', '');
		} else {
			popup.removeAttribute('loader');
		}

		if (this.variant === 'standard') {
			if (this.hasAttribute('label')) native.appendChild(label);
		} else {
			wrapper.appendChild(label);
		}

		inputWrapper.append(slotStart);
		inputWrapper.append(display);
		inputWrapper.append(input);

		clear.append(clearIcon);

		if (this.hasAttribute('multiple')) inputWrapper.append(chips);

		if (this.hasAttribute('clearable')) inputWrapper.append(clear);

		inputWrapper.appendChild(slotEnd);
		inputWrapper.appendChild(arrow);

		list.appendChild(slot);

		if (this.hasAttribute('find')) {
			let find = document.createElement('wje-input');
			find.setAttribute('variant', 'standard');
			find.setAttribute('placeholder', 'Hľadať');
			find.setAttribute('part', 'find');
			find.clearable = true;
			find.classList.add('find');

			optionsWrapper.appendChild(find);

			this.findEl = find;
		}

		optionsWrapper.append(list);

		wrapper.append(inputWrapper);

		popup.append(wrapper);
		popup.append(optionsWrapper);

		if (this.trigger === 'click') popup.setAttribute('manual', '');

		this.append(error);

		native.append(popup);
		native.append(errorSlot);

		fragment.appendChild(native);

		this.native = native;
		this.popup = popup;
		this.labelElement = label;
		this.slotStart = slotStart;
		this.slotEnd = slotEnd;
		this.input = input;
		this.displayInput = display;
		this.chips = chips;
		this.clear = clear;
		this.list = list;

		return fragment;
	}

	/**
	 * Executes post-render logic for the custom element.
	 * This includes validation, event listener registration, managing custom attributes, and
	 * handling options initialization for the component.
	 * @returns {void} This method does not return any value.
	 */
	afterDraw() {

		this.validate();

		if (this.hasAttribute('invalid')) {
			this.showInvalidMessage();
		}

		this.getAllOptions()?.forEach((option) => {
			this.optionCheckSlot(option);
		});

		this.selectedOptions = this.#getSelectedOptions();
		this.selectOptions(this.value);

		if (this.lazy) {
			event.addListener(this.popup, 'wje-popup:show', null, (e) => {
				if (this._wasOppened) return;
				this._wasOppened = true;

				const optionsElement = this.querySelector('wje-options');
				optionsElement.setAttribute('lazy', '');
				optionsElement.setAttribute('attached', '');
			});
		}

		this.#htmlOptions = Array.from(this.querySelectorAll(':scope > wje-option')).map((option) => {
			return {
				value: option.value,
				text: option.textContent.trim(),
			};
		})

		this.input.addEventListener('focus', (e) => {
			this.labelElement?.classList.add('fade');
			this.native.classList.add('focused');
		});

		this.input.addEventListener('blur', (e) => {
			this.native.classList.remove('focused');
			if (!e.target.value) this.labelElement?.classList.remove('fade');
		});

		this.input.addEventListener('input', (e) => {
			this.propagateValidation();
		});

		this.addEventListener('wje-option:change', this.optionChange);

		this.addEventListener('wje-select:invalid', (e) => {
			this.invalid = true;
			this.pristine = false;

			this.showInvalidMessage();

			if (this.customErrorDisplay) {
				e.preventDefault();
			}
		});

		this.clear?.addEventListener('wje-button:click', (e) => {
			e.preventDefault();
			e.stopPropagation();
			this.clearSelections();
		});

		this.list.addEventListener('wje-options:load', (e) => {
			this.selectedOptions.forEach((option) => {
				this.getAllOptions().forEach((el) => {
					if (el.value === option.value) {
						el.selected = true;
					}
				});
			});

			// Ensure values from the value attribute are (re)selected after lazy-loaded pages
			const attrValue = this.getAttribute('value')?.split(' ') || [];

			attrValue.forEach(val => {
				const existingOption = Array.from(this.getAllOptions()).find(el => el.value === val);
				if (existingOption) {
					existingOption.selected = true;
				}
			});

			this.selectedOptions = this.#getSelectedOptions();
			this.selections(true);

			this.list.scrollTo(0, 0);
			event.dispatchCustomEvent(this.popup, 'wje-popup:content-ready'); // Notify that the content is ready
		});

		// skontrolujeme ci ma select atribut find
		if (this.hasAttribute('find') && this.findEl instanceof HTMLElement) {
			event.addListener(this.findEl, 'keyup', '', this.#applySearchFilter);
			event.addListener(this.findEl, 'wje-input:clear', '', this.#applySearchFilter);
		}
	}

	/**
	 * Handles the change event for an option element within a select-like component.
	 * This method processes user interactions with options and updates the state of the component,
	 * including selection management, validation, and UI updates. Behavior differs based on
	 * whether the component supports multiple selections.
	 * Key functionality:
	 * - Prevents the default behavior, event propagation, and immediate propagation of the event.
	 * - Retrieves all options within the component.
	 * - If the component doesn't support multiple selection:
	 *   - Marks only the clicked option as selected and deselects others.
	 *   - Hides the option popup.
	 * - If the component supports multiple selection:
	 *   - Processes the clicked option without deselecting others.
	 * - Updates the selected options and triggers validation.
	 * - Marks the form state as non-pristine.
	 * - Propagates the validation state to other relevant parts of the component or system.
	 * @param {Event} e The event object representing the option change interaction.
	 */
	optionChange = (e) => {
		e.preventDefault();
		e.stopPropagation();
		e.stopImmediatePropagation();

		let allOptions = this.getAllOptions();

		if (!this.hasAttribute('multiple')) {
			allOptions.forEach((option) => {
				if (option.value === e.target.value) {
					this.processClickedOption(option);
				} else {
					option.selected = false;
				}
			});
			this.popup.hide(false);
		} else {
			this.processClickedOption(e.target, true);
		}

		this.selections();

		this.validate(this.selectedOptions);

		this.pristine = false;
		this.propagateValidation();
	}

	/**
	 * Handles the logic for processing the selection state of a clicked option element.
	 * @function processClickedOption
	 * @param {Element} option The option element that is clicked.
	 * @param {boolean} [multiple] A Boolean indicating whether multiple options can be selected. Defaults to false.
	 * Changes the selected state of the passed option and updates the selected options list.
	 * Checks if the option already has a "selected" attribute, toggles its state,
	 * and updates the internal selected options.
	 */
	processClickedOption = (option, multiple = false) => {
		const isSelected = option.hasAttribute('selected');
		option.selected = !isSelected;

		this.selectedOptions = this.#getSelectedOptions();
	}

	/**
	 * Returns all the options as HTML.
	 * @returns {NodeList} The options as HTML.
	 */
	getAllOptions() {
		return this.querySelectorAll('wje-option');
	}

	/**
	 * Handles changes in the selection for a component, updating internal values, input fields,
	 * and visual presentation (like chips or slots) as per the given selection options.
	 * @param {Array|null} options The collection of selected option elements. If null, no options are selected.
	 * @param {number} length The total number of selected options.
	 * @returns {void}
	 */
	selectionChanged(options = null, length = 0) {
		if (this.hasAttribute('multiple')) {
			this.value = options.map((el) => el.value).reverse();
			this.input.value = this.value.map(a => a).join(" ").trim();

			if (this.placeholder && length === 0) {
				this.chips.innerHTML = this.placeholder;
			} else {
				if (options !== null) Array.from(options).slice(0, +this.maxOptions).forEach(option => this.chips.appendChild(this.getChip(option)));
				if (this.counterEl instanceof HTMLElement || !this.maxOptions || length > +this.maxOptions) {
					this.counter();
				}
			}
		} else {
			const option = options?.at(0);

			this.value = options?.map((el) => el.value)?.at(0) || '';
			this.input.value = this.value[0] || '';
			this.displayInput.value = options[0]?.textContent?.trim() || '';

			this.slotStart.innerHTML = '';
			this.slotEnd.innerHTML = '';

			if (option && option instanceof HTMLElement) {
				let optionSlotStart = option?.querySelector('wje-option > [slot=start]');
				if (optionSlotStart) {
					setTimeout(() => {
						this.slotStart.append(optionSlotStart.cloneNode(true));
					},0)
				}

				let optionSlotEnd = option?.querySelector('wje-option > [slot=end]');
				if (optionSlotEnd) {
					setTimeout(() => {
						this.slotEnd.append(optionSlotEnd.cloneNode(true));
					},0)
				}
			}
		}
	}

	/**
	 * Handles the logic for updating selections based on the current selected options,
	 * updating chips content, and dispatching change events if necessary.
	 * @param {boolean} [silence] If true, suppresses the dispatch of a custom change event.
	 * @returns {void} This method does not return a value.
	 */
	selections(silence = false) {
		if (this.selectedOptions.length >= +this.maxOptions) {
			this.counterEl = null;
		}

		if (this.chips) {
			this.chips.innerHTML = '';
		}

		if (this.selectedOptions.length > 0) {
			this.selectionChanged(this.selectedOptions, this.selectedOptions.length);
		} else {
			this.selectionChanged(this.selectedOptions);
		}

		if (silence) return;
		event.dispatchCustomEvent(this, 'wje-select:change');
	}

	/**
	 * Updates the counter element to reflect the current state of selected values relative to the maximum allowed options.
	 * If the maximum options are selected, the counter element is removed. If it does not already exist and needs to be displayed, it is created.
	 * @returns {void} Does not return a value.
	 */
	counter() {
		// zmazanie counter (span)
		if (this.counterEl && this.value.length === +this.maxOptions) {
			this.counterEl.remove();
			this.counterEl = null;
			return;
		}

		// ak counter nie je, tak ho vytvorime
		if (!this.counterEl) {
			this.counterEl = document.createElement('span');
			this.counterEl.classList.add('counter');

			this.chips.appendChild(this.counterEl);
		}

		// nastavime hodnotu counter
		this.counterEl.innerText = `+${this.value.length - +this.maxOptions}`;
	}

	/**
	 * Creates and returns a chip element with specified properties and a label.
	 * @param {object} option The configuration object for the chip. Typically includes properties such as value and textContent to set up the chip's label and data.
	 * @returns {HTMLElement} The newly created chip element with a label and default properties.
	 */
	getChip(option) {
		let chip = document.createElement('wje-chip');
		chip.size = 'small';
		chip.removable = true;
		chip.round = true;
		chip.addEventListener('wje:chip-remove', this.removeChip);
		chip.option = option;

		let label = document.createElement('wje-label');
		label.innerText = this.#htmlSelectedItem(option.value) // option.textContent.trim();

		chip.appendChild(label);

		return chip;
	}

	/**
	 * Handles the removal of a chip element from the DOM and updates the related state.
	 * @param {Event} e The event object triggered by the chip removal action.
	 * The target of the event is expected to be the chip element itself.
	 */
	removeChip = (e) => {
		e.target.parentNode.removeChild(e.target);
		this.processClickedOption(e.target.option, true);
		this.selections();
	};

	/**
	 * Generates an HTML option element based on the provided item and mapping.
	 * @param {object} item The item to generate the option for.
	 * @param {object} [map] The mapping object that specifies the properties of the item to use for the option's value and text.
	 * @param {string} [map.value] The property of the item to use for the option's value.
	 * @param {string} [map.text] The property of the item to use for the option's text.
	 * @returns {HTMLElement} The generated HTML option element.
	 */
	htmlOption(item, map = { value: 'value', text: 'text' }) {
		let option = document.createElement('wje-option');

		if (item[map.value] === null) {
			console.warn(`The item ${JSON.stringify(item)} does not have the property ${map.value}`);
		}

		if (item[map.text] === null) {
			console.warn(`The item ${JSON.stringify(item)} does not have the property ${map.text}`);
		}

		option.setAttribute('value', item[map.value] ?? '');
		option.innerText = item[map.text] ?? '';

		this.#addedOptions.push({ [map.value]: item[map.value], [map.text]: item[map.text] });
		return option;
	}

	/**
	 * Returns the provided item.
	 * @param {any} item The item to be returned.
	 * @returns {any} The same item that was passed as input.
	 */
	htmlSelectedItem(item) {
		return item;
	}

	/**
	 * Adds a new option to the component.
	 * @param {object} optionData The data used to create the new option.
	 * @param {boolean} [silent] Whether the addition should trigger events or not.
	 * @param {object} [map] Mapping of keys to identify value and text in the optionData.
	 * @param {string} [map.value] The key in optionData that represents the value of the option.
	 * @param {string} [map.text] The key in optionData that represents the text of the option.
	 * @returns {void}
	 */
	addOption(optionData, silent = false, map = { value: 'value', text: 'text' }) {
		if (!optionData) return;

		const optionsElement = this.querySelector('wje-options');
		if (optionsElement) {
			optionsElement.addOption(optionData, silent, map);
			return;
		}
		let option = this.htmlOption(optionData, map);
		this.appendChild(option);
	}

	/**
	 * Adds one or more options to a collection. If the input is an array, it adds each option within the array.
	 * Otherwise, it adds a single option.
	 * @param {Array | object} optionsData The data representing the options to be added. It can be a single object or an array of objects.
	 * @param {boolean} [silent] Optional flag to determine if events or notifications should be suppressed while adding options.
	 * @param {object} [map] An optional mapping object specifying how to map data properties to value and text for the options.
	 * @param {string} [map.value] The property in the optionsData that represents the value of the option.
	 * @param {string} [map.text] The property in the optionsData that represents the text of the option.
	 * @returns {void}
	 */
	addOptions(optionsData, silent = false, map = { value: 'value', text: 'text' }) {
		if (!Array.isArray(optionsData)) {
			this.addOption(optionsData, silent, map);
		} else {
			optionsData.forEach((item) => {
				this.addOption(item, silent, map);
			});
		}
	}

	/**
	 * Selects an option from the available options within the component.
	 * @param {string} value The value of the option to be selected.
	 * @param {boolean} [silent] Determines whether the selection should trigger notification or updates. Defaults to false.
	 * @returns {void} Does not return a value.
	 */
	selectOption(value, silent = false) {
		if (!value) return;

		let option = this.querySelector(`wje-option[value="${value}"]`);

		if (option) {
			this.processClickedOption(option, this.hasAttribute('multiple'));
		}

		if (this.drawingStatus > this.drawingStatuses.START) this.selections(silent);
	}

	/**
	 * Selects multiple options based on the provided values. If a single value is provided, it selects that option.
	 * If an array of values is provided, it iterates through the array and selects each option.
	 * @param {any|any[]} values A single value or an array of values to be selected.
	 * @param {boolean} [silent] Determines whether the selection action should occur silently without triggering other side effects or events.
	 * @returns {void} This method does not return a value.
	 */
	selectOptions(values, silent = false) {
		if (!Array.isArray(values)) {
			this.selectOption(values, silent);
		} else {
			values.forEach((value) => {
				this.selectOption(value, silent);
			});
		}
	}

	/**
	 * Clones and appends an icon with the "check" slot to the specified option element.
	 * @param {HTMLElement} option The target HTML element to which the cloned "check" icon will be appended.
	 * @returns {void} This method does not return a value, but it modifies the DOM by appending a cloned "check" icon to the provided option element.
	 */
	optionCheckSlot(option) {
		let icon = this.querySelector('template')?.content.querySelector(`[slot="check"]`);
		if (!icon) {
			console.warn(`Icon with slot "check" was not found.`);
			return;
		}

		let iconClone = icon.cloneNode(true);
		option.append(iconClone);
	}

	/**
	 * Clears all selected options and resets selections.
	 * The method ensures that all options are deselected, updates the internal state, validates the selections,
	 * propagates the validation status, and indicates invalid state if necessary.
	 * @returns {void} No value is returned by this method.
	 */
	clearSelections() {
		this.selectedOptions = [];

		this.getAllOptions().forEach((option) => {
			option.selected = false;
		});
		this.selections();

		this.validate();
		this.propagateValidation();

		if (this.hasAttribute('invalid')) {
			this.showInvalidMessage();
		}
	}

	/**
	 * Processes the given item and retrieves the corresponding value from the selected options.
	 * @param {string} item The key to search for in the selected options.
	 * @returns {string} The text content associated with the selected item, or an empty string if not found.
	 */
	#htmlSelectedItem(item) {
		const keyValue = "value"
		const textValue = "textContent";

		const value = this.selectedOptions.find((option) => option[keyValue] === item)?.[textValue] ?? "";

		return this.htmlSelectedItem(value);
	}

	/**
	 * Retrieves the list of selected options within the component.
	 * @returns {Array<Element>} An array of elements representing the options that are currently selected.
	 */
	#getSelectedOptions() {
		return Array.from(this.querySelectorAll('wje-option[selected]'));
	}

	/**
	 * Filters option elements based on the search input value.
	 * This function applies a search filter to a list of options. If a `wj-options` element exists and has
	 * the `lazy` attribute, the search value is passed to the `wj-options` element, enabling infinite scroll
	 * functionality to handle the filtering. If the `lazy` attribute is not present, it performs a local
	 * search to show or hide options depending on whether their text content matches the search input.
	 * @param {Event} e The input event containing the search input value from the user.
	 */
	#applySearchFilter = (e) => {
		// contains wj-options element with options
		const optionsElement = this.querySelector('wje-options');

		if (optionsElement && optionsElement.hasAttribute('lazy')) {
			// pass search value to wj-options element and infinite scroll will handle the rest
			optionsElement.setAttribute('search', e.target.value);
		} else {
			let value = e.target.value.trim().toLowerCase();

			this.getAllOptions().forEach((option) => {
				if (option.textContent.trim().toLowerCase().includes(value)) {
					option.style.display = 'block';
				} else {
					option.style.display = 'none';
				}
			});
		}
	}
}
