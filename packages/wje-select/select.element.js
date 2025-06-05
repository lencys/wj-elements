import { default as WJElement, event } from '../wje-element/element.js';
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

/**
 * `Select` is a custom web component that represents a select input.
 * @summary This element represents a select input.
 * @documentation https://elements.webjet.sk/components/select
 * @status stable
 * @augments {WJElement}
 * @slot - The default slot for the select.
 * @slot anchor - The slot for the anchor.
 * @slot arrow - The slot for the arrow.
 * @csspart native - The native select wrapper.
 * @csspart input - The input field.
 * @csspart clear - The clear button.
 * @property {Array} _selected - An array to store selected items.
 * @property {HTMLElement|null} counterEl - A reference to the counter element, initially null.
 * @property {ElementInternals} internals - The internal element API for managing state and attributes.
 * @property {number} maxOptions - The maximum number of options allowed.
 * @property {boolean} _wasOppened - Tracks whether the select element was previously opened, initially false.
 * @cssproperty [--wje-select-border-width=1px] - Specifies the width of the border around the select component. Accepts any valid CSS length unit (e.g., `px`, `rem`, `em`).
 * @cssproperty [--wje-select-border-style=solid] - Defines the style of the border for the select component. Accepts standard CSS border styles, such as `solid`, `dashed`, or `dotted`.
 * @cssproperty [--wje-select-border-color=var(--wje-border-color)] - Sets the color of the border for the select component. Accepts any valid CSS color value, including color variables, named colors, and hex values.
 * @cssproperty [--wje-select-options-border-width=1px] - Specifies the width of the border for the select options dropdown. Accepts any valid CSS length unit.
 * @cssproperty [--wje-select-options-border-style=var(--wje-border-style)] - Defines the border style for the select options dropdown. Inherits from a defined CSS variable for consistency.
 * @cssproperty [--wje-select-options-border-color=var(--wje-border-color)] - Sets the border color for the select options dropdown. Accepts any valid CSS color value.
 * @cssproperty [--wje-select-background=var(--wje-background)] - Specifies the background color of the select component. Accepts any valid CSS color value.
 * @cssproperty [--wje-select-line-height=20px] - Defines the line height for the text within the select component. Accepts any valid CSS length value, ensuring consistent vertical alignment.
 * @cssproperty [--wje-select-color=var(--wje-color)] - Sets the text color for the select component. Accepts any valid CSS color value.
 * @cssproperty [--wje-select-border-radius=var(--wje-border-radius-medium)] - Specifies the border radius for the select component.Determines the roundness of the corners and accepts any valid CSS length unit or variable.
 * @tag wje-select
 */

export default class Select extends WJElement {
	#addedOptions = []
	#htmlOptions = []
	/**
	 * Constructor for the Select class.
	 * @class
	 * @description Initializes the Select component.
	 * This constructor sets up the initial state of the component, including selected items, counter element, and internal element API.
	 * It also tracks whether the select element was previously opened.
	 * @class
	 * @augments {WJElement}
	 * @memberof Select
	 */
	constructor() {
		super();

		/**
		 * @type {Array}
		 * @description An array to store selected items.
		 */
		this._selected = [];

		/**
		 * @type {HTMLElement|null}
		 * @description A reference to the counter element, initially null.
		 * @private
		 */
		this.counterEl = null;

		/**
		 * @type {ElementInternals}
		 * @description The internal element API for managing state and attributes.
		 * @private
		 * @readonly
		 * @constant
		 * @default {ElementInternals} this.attachInternals()
		 * @description Attaches the internals to the element.
		 */
		this.internals = this.attachInternals();

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
		 * @description A reference to the options wrapper element, initially null.
		 */
		this.optionsWrapper = null;

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

		this.selectedOptions = []
	}

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
	 * @property {Function} 'wje-options' Represents the Options component class.
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
	 * Setter for the value attribute.
	 * @param {string} value The value to set.
	 */
	set value(value) {
		if (this.hasAttribute('multiple')) {
			const formData = new FormData();
			value.forEach(v => formData.append(this.name, v));
			this.internals.setFormValue(formData);
		} else {
			this.internals.setFormValue(value);
		}
	}

	/**
	 * Getter for the value attribute.
	 * @returns {object} The value of the attribute.
	 */
	get value() {
		return this.selected;
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
	 * Sets the maximum number of options allowed.
	 * @param {string | number | null} value The value to set as the maximum number of options.
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
	 * Sets the label value.
	 * @param {Array} value The selected value to set.
	 */
	set selected(value) {
		this._selected = value;
	}

	/**
	 * Returns the selected value.
	 * @returns {Array} The selected value.
	 */
	get selected() {
		return this.getSelected();
	}

	/**
	 * Retrieves the complete list of options available for the component.
	 * The options are determined by combining elements from various sources, including loaded options, added options, and HTML-sourced options.
	 * If a `wje-options` element is present within the component, its loaded options are included in the merged list.
	 * In the absence of a `wje-options` element, duplicates among the added and HTML options are removed, retaining their order.
	 * @returns {Array<Object>} An array containing all the available options, combining the loaded, added, and HTML-based options, with duplicates removed where applicable.
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
		return ['active', 'value', 'disabled', 'multiple', 'label', 'placeholder', 'max-height', 'max-options', 'variant', 'placement'];
	}

	/**
	 * Whether the input is associated with a form.
	 * @type {boolean}
	 */
	static formAssociated = true;

	/**
	 * Sets up the attributes for the component.
	 */
	setupAttributes() {
		this.isShadowRoot = 'open';
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
		input.setAttribute('part', 'input');
		input.setAttribute('autocomplete', 'off');
		input.setAttribute('readonly', '');
		input.setAttribute('placeholder', this.placeholder || '');

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

		clear.appendChild(clearIcon);

		// vytvorime popup
		let popup = document.createElement('wje-popup');
		popup.setAttribute('placement', 'bottom-start');
		popup.setAttribute('manual', '');
		popup.setAttribute('size', '');
		popup.setAttribute('part', 'popup');

		if (this.hasAttribute('disabled')) popup.setAttribute('disabled', '');

		if (this.variant === 'standard') {
			if (this.hasAttribute('label')) native.appendChild(label);
		} else {
			wrapper.appendChild(label);
		}

		inputWrapper.appendChild(slotStart);
		inputWrapper.appendChild(input);

		if (this.hasAttribute('multiple')) inputWrapper.appendChild(chips);

		if (this.hasAttribute('clearable')) inputWrapper.appendChild(clear);

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

		if (this.hasAttribute('lazy')) {
			event.addListener(popup, 'wje-popup:show', null, (e) => {
				if (this._wasOppened) return;
				this._wasOppened = true;

				const optionsElement = this.querySelector('wje-options');
				optionsElement.setAttribute('lazy', '');
				optionsElement.setAttribute('attached', '');
			});
		} else {
			const optionsElement = this.querySelector('wje-options');
			optionsElement?.setAttribute('attached', '');
		}

		optionsWrapper.appendChild(list);

		wrapper.appendChild(inputWrapper);

		popup.appendChild(wrapper);
		popup.appendChild(optionsWrapper);

		if (this.trigger === 'click') popup.setAttribute('manual', '');

		native.appendChild(popup);

		this.native = native;
		this.popup = popup;
		this.labelElement = label;
		this.slotStart = slotStart;
		this.slotEnd = slotEnd;
		this.input = input;
		this.optionsWrapper = optionsWrapper;
		this.chips = chips;
		this.clear = clear;
		this.list = list;

		fragment.appendChild(native);

		return fragment;
	}

	/**
	 * Performs actions and binds events after the component's markup and state are initialized.
	 * Actions include setting up event listeners, managing option elements, handling focus and blur behaviors,
	 * synchronizing the selected options, and managing a find functionality for filtering options.
	 * @returns {void} Does not return a value. The method operates by updating the state and behavior of the component.
	 */
	afterDraw() {
		this.getAllOptions()?.forEach((option) => {
			this.optionCheckSlot(option);
		});

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

		this.addEventListener('wje-option:change', this.optionChange);

		// pridame event listener na kliknutie na button clear
		this.clear?.addEventListener('wje-button:click', (e) => {
			e.preventDefault();
			e.stopPropagation();
			this.selectedOptions = [];

			this.getAllOptions().forEach((option) => {
				option.selected = false;
			});
			this.selections();

			e.stopPropagation();
		});

		this.selectedOptions = this.getSelectedOptions();
		this.selections(true);

		this.list.addEventListener('wje-options:load', (e) => {
			// todo select options from this.selectedOptions
			this.selectedOptions.forEach((option) => {
				this.getAllOptions().forEach((el) => {
					if (el.value === option.value) {
						el.selected = true;
					}
				});
			})

			this.list.scrollTo(0, 0);
		});

		// skontrolujeme ci ma select atribut find
		if (this.hasAttribute('find') && this.findEl instanceof HTMLElement) {
			event.addListener(this.findEl, 'keyup', '', (e) => {
				// contains wj-options element with options
				const optionsElement = this.querySelector('wje-options');
				if (optionsElement && optionsElement.hasAttribute('lazy')) {
					// pass search value to wj-options element and infinite scroll will handle the rest
					optionsElement.setAttribute('search', e.target.value);
				} else {
					let value = e.target.value.trim().toLowerCase();

					this.getAllOptions().forEach((option) => {
						if (option.textContent.trim().toLowerCase().includes(value)) option.style.display = 'block';
						else option.style.display = 'none';
					});
				}
			});
		}
	}

	/**
	 * Handles the option change event.
	 * @param {Event} e The event.
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
	};

	/**
	 * Handles the selection and deselection of an option element.
	 * @param {HTMLElement} option The option element that was clicked.
	 * @param {boolean} [multiple] Indicates whether multiple selection is allowed.
	 */
	processClickedOption = (option, multiple = false) => {
		const isSelected = option.hasAttribute('selected');
		option.selected = !isSelected;

		if (isSelected) {
			this.filterOutOption(option);
		} else {
			this.selectedOptions = multiple ? [...this.selectedOptions, option] : [option];
		}
	}

	/**
	 * Filters out a specified option from the `selectedOptions` array.
	 * This function removes an option from the `selectedOptions` array if its value
	 * matches the value of the option provided as an argument. It allows for dynamically
	 * updating the selected options by excluding the specified option.
	 * @param {object} option The option to be removed from the `selectedOptions` array.
	 * Should be an object containing a `value` property that is compared to the
	 * `value` property of objects in the `selectedOptions` array.
	 */
	filterOutOption = (option) => {
		this.selectedOptions = this.selectedOptions.filter((sOption) => {
			return sOption.value !== option.value;
		});
	}

	/**
	 * Returns all the options as HTML.
	 * @returns {NodeList} The options as HTML.
	 */
	getAllOptions() {
		return this.querySelectorAll('wje-option');
	}

	/**
	 * Returns the selected options as HTML.
	 * @returns {NodeList} The selected options as HTML.
	 */
	getSelectedOptions() {
		return Array.from(this.querySelectorAll('wje-option[selected]'));
	}

	/**
	 * Returns the selected options.
	 * @returns {Array} The selected options.
	 */
	getSelected() {
		return this.selectedOptions.map((option) => {
			return {
				value: option.value,
				text: this.#htmlSelectedItem(option.value) // option.textContent.trim(),
			};
		});
	}

	/**
	 * Handles the selection change.
	 * @param {Element[]} options The option that changed.
	 * @param {number} length The length of the selected options.
	 */
	selectionChanged(options = null, length = 0) {
		if (this.hasAttribute('multiple')) {

			this.value = this.selectedOptions.map((el) => el.value).reverse();

			if (this.placeholder && length === 0) {
				this.chips.innerHTML = this.placeholder;
				this.input.value = '';
			} else {
				if (options !== null) Array.from(options).slice(0, +this.maxOptions).forEach(option => this.chips.appendChild(this.getChip(option)));
				if (this.counterEl instanceof HTMLElement || !this.maxOptions || length > +this.maxOptions) {
					this.counter();
				}
			}
		} else {
			let option = options?.at(0);
			let value = (option && this.#htmlSelectedItem(option.value)) ?? ""  // option?.textContent.trim() || '';
			this.value = this.selectedOptions?.map((el) => el.value)?.at(0);
			this.input.value = value;

			if (option && option instanceof HTMLElement) {
				this.slotStart.innerHTML = '';

				let optionSlotStart = option?.querySelector('wje-option > [slot=start]');
				if (optionSlotStart) {
					this.slotStart.appendChild(optionSlotStart.cloneNode(true));
				}

				this.slotEnd.innerHTML = '';

				let optionSlotEnd = option?.querySelector('wje-option > [slot=end]');
				if (optionSlotEnd) {
					this.slotEnd.appendChild(optionSlotEnd.cloneNode(true));
				}
			}
		}
	}

	/**
	 * Updates the selected options and their corresponding chips.
	 * @param {boolean} [silence] Determines whether to suppress the "wje-select:change" event.
	 * @returns {void}
	 * @description
	 * This method fetches the currently selected options and updates the `selectedOptions` array.
	 * It clears and rebuilds the chips representing the selected items in the UI.
	 * If the number of selected options reaches the maximum allowed (`maxOptions`), it stops updating the counter.
	 * Optionally, it dispatches a custom event when the selection changes unless `silence` is set to `true`.
	 * //@fires wje-select:change - Dispatched when the selection changes, unless `silence` is `true`.
	 * @example
	 * // Call the method and allow event dispatch
	 * selections();
	 * @example
	 * // Call the method without dispatching the event
	 * selections(true);
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
			this.selectionChanged();
		}

		if (silence) return;
		event.dispatchCustomEvent(this, 'wje-select:change');
	}

	/**
	 * Manages the display of a counter element to indicate the number of items exceeding the maximum allowed options.
	 * - If the number of selected items equals the maximum allowed, the counter element is removed.
	 * - If the counter element doesn't exist and the number of items exceeds the maximum, it is created and updated.
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
	 * Returns a chip element.
	 * @param {Element} option The option to get the chip for.
	 * @returns {Element} The chip element.
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
	 * Handles the chip remove event.
	 * @param {Event} e The event.
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
	 * Adds an option to the select element.
	 * @param {any} optionData The data for the option to be added.
	 * @param {boolean} [silent] Whether to suppress any events triggered by the addition of the option.
	 * @param {object} [map] The mapping object specifying the properties of the option data to be used for the value and text of the option.
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
	 * Adds options to the select element.
	 * @param {Array | object} optionsData The options data to be added. Can be an array of objects or a single object.
	 * @param {boolean} [silent] Indicates whether to trigger events when adding options. Default is false.
	 * @param {object} [map] The mapping object that specifies the properties of the options data object. Default is { value: "value", text: "text" }.
	 */
	addOptions(optionsData, silent = false, map = { value: 'value', text: 'text' }) {
		if (!Array.isArray(optionsData)) {
			this.addOption(optionsData, silent, map);
		} else {
			const optionsElement = this.querySelector('wje-options');
			if (optionsElement) {
				optionsElement.addOptions(optionsData, silent, map);
				return;
			}

			optionsData.forEach((item) => {
				this.addOption(item, silent, map);
			});
		}
	}

	/**
	 * Selects an option with the specified value.
	 * @param {string} value The value of the option to be selected.
	 * @param {boolean} [silent] Whether to suppress firing events.
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
	 * Selects one or multiple options in the select element.
	 * @param {Array|any} values The value(s) of the option(s) to be selected.
	 * @param {boolean} [silent] Whether to trigger the change event or not.
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
	 * Processes the provided item to retrieve its corresponding value and text
	 * based on the configuration of `wje-options`, then updates and returns
	 * the selected item's HTML representation.
	 * @param {any} item The input item for which the value and text are determined.
	 * @returns {string} The HTML representation of the selected item's value.
	 */
	#htmlSelectedItem(item) {
		const keyValue = this.querySelector("wje-options")?.itemValue ?? "value"
		const textValue = this.querySelector("wje-options")?.itemText ?? "text"

		const value = this.options
			.find((option) => option[keyValue] === item)?.[textValue] ?? "";

		return this.htmlSelectedItem(value);
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
	 * @summary Callback function that is called when the custom element is associated with a form.
	 * This function adds an event listener to the form's submit event, which validates the input and propagates the validation.
	 * @param {HTMLFormElement} form The form the custom element is associated with.
	 */
	formAssociatedCallback(form) {
		if (form) {
			this.internals.setFormValue(this.value);
		}
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
		this.native?.classList.toggle('disabled', disabled);
		this.toggleAttribute('disabled', disabled);
	}

	/**
	 * Checks if all elements in the `elements` array are present in the `options` array based on their `option` property.
	 * @param {Array} elements The array of elements to check. Each element should have an `option` property.
	 * @param {Array} options The array of options to verify against.
	 * @returns {boolean} Returns true if all elements in the `elements` array are found within the `options` array, otherwise returns false.
	 */
	areAllElementsInOptions(elements, options) {
		if (elements.length === 0) return false;

		return elements.every(el =>
			options.some(opt => JSON.stringify(opt) === JSON.stringify(el.option))
		);
	}

	/**
	 * Clones and appends an icon from a template with slot "check" to the given option element.
	 * @param {HTMLElement} option The target option element where the "check" icon will be added.
	 * @returns {void}
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
}
