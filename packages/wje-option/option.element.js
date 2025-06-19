import { default as WJElement, event } from '../wje-element/element.js';
import Icon from '../wje-icon/icon.js';
import Checkbox from '../wje-checkbox/checkbox.js';
import styles from './styles/styles.css?inline';

/**
 * `Option` is a custom web component that represents an option.
 * @summary This element represents an option.
 * @documentation https://elements.webjet.sk/components/option
 * @status stable
 * @augments {WJElement}
 * @csspart native - The native part of the option.
 * @slot start - The slot for the start of the option.
 * @slot - The default slot for the option.
 * @slot end - The slot for the end of the option.
 * // @fires wje-option:change - Event fired when the option is clicked.
 * @tag wje-option
 */
export default class Option extends WJElement {
	/**
	 * Creates an instance of Option.
	 * @class
	 */
	constructor() {
		super();
	}

	/**
	 * Dependencies of the Option component.
	 */
	dependencies = {
		'wje-icon': Icon,
		'wje-checkbox': Checkbox,
	};

	/**
	 * Sets the selected attribute of the option.
	 * @param {boolean} value The value to set.
	 */
	set selected(value) {
		if (value) {
			this.setAttribute('selected', '');
		} else {
			this.removeAttribute('selected');
		}
	}

	/**
	 * Retrieves the 'selected' attribute status of the element.
	 * @returns {boolean} Returns true if the 'selected' attribute is set on the element; otherwise, false.
	 */
	get selected() {
		return this.hasAttribute('selected');
	}

	/**
	 * Retrieves the value indicating whether the closest 'wje-select' element has a 'checkbox' attribute.
	 * @returns {boolean} True if the closest 'wje-select' element has a 'checkbox' attribute; otherwise, false.
	 */
	get checkbox() {
		return this.closest('wje-select').hasAttribute('checkbox');
	}

	/**
	 * Determines whether the closest 'wje-select' element has the 'multiple' attribute.
	 * @returns {boolean} Returns true if the 'wje-select' element has the 'multiple' attribute, otherwise false.
	 */
	get multiple() {
		return this.closest('wje-select').hasAttribute('multiple');
	}

	/**
	 * Sets the value attribute of the option.
	 * @param {string} value The value to set.
	 */
	set value(value) {
		this.setAttribute('value', value);
	}

	get value() {
		return this.getAttribute('value');
	}

	/**
	 * Sets the text content of the option.
	 * @param {string} value The text to set.
	 */
	set text(value) {
		this.innerText = value;
	}

	className = 'Option';

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
		return [];
	}

	/**
	 * This method is called whenever an observed attribute is added, removed, or changed.
	 * @param {string} name The name of the attribute that was changed.
	 * @param {*} old The previous value of the attribute before the change.
	 * @param {*} newName The new value of the attribute after the change.
	 * @returns {void} This method does not return a value.
	 */
	attributeChangedCallback(name, old, newName) {
		if (this.checkbox) {
			if (name === 'selected' && newName !== null) {
				this.#setCheckbox(true);
			} else {
				this.#setCheckbox(false);
			}
		}
	}

	/**
	 * Sets up the attributes for the component.
	 */
	setupAttributes() {
		this.isShadowRoot = 'open';
	}

	/**
	 * Draws the component for the option.
	 * @returns {DocumentFragment}
	 */
	draw() {
		let fragment = document.createDocumentFragment();

		let native = document.createElement('div');
		native.classList.add('native-option');
		native.setAttribute('part', 'native');

		let icon = document.createElement('wje-icon');
		icon.setAttribute('name', 'check');
		icon.setAttribute('slot', 'check');

		let checkboxEl = document.createElement('wje-checkbox');
		checkboxEl.setAttribute('slot', 'check');

		let check = document.createElement('slot');
		check.setAttribute('name', 'check');
		check.setAttribute('part', 'check');

		let start = document.createElement('slot');
		start.setAttribute('name', 'start');

		let slot = document.createElement('slot');

		let end = document.createElement('slot');
		end.setAttribute('name', 'end');

		const hasCheckSlot = this.querySelector('[slot="check"]') !== null;

		if (!hasCheckSlot) {
			if (this.checkbox && this.multiple) {
				this.append(checkboxEl);
			} else {
				this.append(icon);
			}
		}

		native.append(check);
		native.append(start);
		native.append(slot);
		native.append(end);

		fragment.append(native);

		this.check = check;

		return fragment;
	}

	/**
	 * Method executed after the drawing process is completed.
	 * Sets up an event listener for 'click' events, linking them to the specified callback function.
	 * @returns {void} Does not return a value.
	 */
	afterDraw() {
		event.addListener(this, 'click', null, this.optionClickCallback);
	}

	/**
	 * Handles operations or cleanup tasks that need to occur before disconnecting.
	 * Removes an event listener associated with the 'click' event and a specified callback function.
	 * @returns {void} This method does not return a value.
	 */
	beforeDisconnect() {
		event.removeListener(this, 'click', null, this.optionClickCallback);
	}

	/**
	 * Handles the click event on an option element and dispatches a custom event when triggered.
	 * @param {Event} e The click event object that triggered the callback.
	 * @returns {void} No return value.
	 */
	optionClickCallback(e) {
		e.preventDefault();
		e.stopPropagation();
		e.stopImmediatePropagation();

		if (this.hasAttribute('disabled')) return;

		event.dispatchCustomEvent(this, 'wje-option:change', {
			value: this.value,
			text: this.textContent,
			option: this,
		});
	}

	/**
	 * Checks if the given DOM node represents a checkbox element.
	 * @param {Node} node The DOM node to be checked.
	 * @returns {boolean} Returns true if the node is an element with a class name of 'Checkbox', otherwise false.
	 */
	#isCheckbox(node) {
		return node instanceof Element && node.className === 'Checkbox';
	}

	/**
	 * Updates the checked status of the first checkbox element found within the assigned elements of the specified container.
	 * @param {boolean} checked The desired checked state to be applied to the checkbox.
	 * @returns {void}
	 */
	#setCheckbox(checked) {
		let arr = [...this.check?.assignedElements({ flatten: true })]?.filter(item=> this.#isCheckbox(item));
		if(arr.length > 0)
			arr[0].checked = checked;
	}
}