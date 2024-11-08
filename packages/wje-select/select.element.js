import { default as WJElement, event } from "../wje-element/element.js";
import Button from "../wje-button/button.js";
import Popup from "../wje-popup/popup.js";
import Icon from "../wje-icon/icon.js";
import Label from "../wje-label/label.js";
import Chip from "../wje-chip/chip.js";
import Input from "../wje-input/input.js";
import Option from "../wje-option/option.js";
import Options from "../wje-options/options.js";

import styles from "./styles/styles.css?inline";

/**
 * `Select` is a custom web component that represents a select input.
 * @summary This element represents a select input.
 * @documentation https://elements.webjet.sk/components/select
 * @status stable
 *
 * @extends {WJElement}
 *
 * @slot - The default slot for the select.
 * @slot anchor - The slot for the anchor.
 * @slot arrow - The slot for the arrow.
 *
 * @csspart native - The native select wrapper.
 * @csspart input - The input field.
 * @csspart clear - The clear button.
 *
 * @cssprop [--wje-select-border-width=1px;] - The border width of the select component.
 * @cssprop [--wje-select-border-style=solid;] - The border style of the select component.
 * @cssprop [--wje-select-border-color=var(--wje-border-color);] - The border color of the select component.
 * @cssprop [--wje-select-options-border-width=1px;] - The border width of the select options.
 * @cssprop [--wje-select-options-border-style=var(--wje-border-style);] - The border style of the select options.
 * @cssprop [--wje-select-options-border-color=var(--wje-border-color);] - The border color of the select options.
 * @cssprop [--wje-select-background=var(--wje-background);] - The background of the select component.
 * @cssprop [--wje-select-line-height=20px;] - The line height of the select component.
 * @cssprop [--wje-select-color=var(--wje-color);] - The color of the select component.
 * @cssprop [--wje-select-border-radius=var(--wje-border-radius-medium);] - The border radius of the select component.
 *
 * @tag wje-select
 */
export default class Select extends WJElement {
    /**
     * Creates an instance of Select.
     *
     * @constructor
     */
    constructor() {
        super();

        this._selected = [];
        this.counterEl = null;
        this.internals = this.attachInternals();
    }

    dependencies = {
        "wje-button": Button,
        "wje-popup": Popup,
        "wje-icon": Icon,
        "wje-label": Label,
        "wje-chip": Chip,
        "wje-input": Input,
        "wje-option": Option,
        "wje-options": Options
    }

    /**
     * Setter for the value attribute.
     * @param {string} value - The value to set.
     */
    set value(value) {
        if (Array.isArray(value)) {
            this.internals.setFormValue(JSON.stringify(value));
        } else {
            this.internals.setFormValue(value);
        }
    }

    /**
     * Getter for the value attribute.
     * @returns {string} The value of the attribute.
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
     * @param {boolean} isInvalid - Whether the input is invalid.
     */
    set invalid(isInvalid) {
        if(isInvalid)
            this.setAttribute('invalid', '')
        else
            this.removeAttribute('invalid');
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
     * @param {string} value - The value to set as the default value.
     */
    set defaultValue(value) {
        this.setAttribute('value', value);
    }



    /**
     * Sets the selected value.
     *
     * @param {Array} value - The selected value.
     */
    set selected(value) {
        this._selected = value;
    }

    /**
     * Returns the selected value.
     *
     * @returns {Array} The selected value.
     */
    get selected() {
        return this.getSelected();
    }

    /**
     * Sets the trigger value.
     *
     * @param {string} value - The trigger value.
     */
    set trigger(value) {
        this.setAttribute("trigger", value);
    }

    /**
     * Returns the trigger value.
     *
     * @returns {string} The trigger value.
     */
    get trigger() {
        return this.getAttribute("trigger") || "click";
    }

    className = "Select";

    /**
     * Returns the CSS styles for the component.
     *
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Returns the list of attributes to observe for changes.
     *
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes() {
        return ["active", "value"];
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
        this.isShadowRoot = "open";
    }

    /**
     * Draws the component.
     *
     * @param {Object} context - The context for drawing.
     * @param {Object} store - The store for drawing.
     * @param {Object} params - The parameters for drawing.
     * @returns {DocumentFragment}
     */
    draw() {
        let fragment = document.createDocumentFragment();

        this.classList.add("wje-placement", "wje-" + this.placement || "wje-start");

        // zakladny obalovac
        let native = document.createElement("div");
        native.setAttribute("part", "native");
        native.classList.add("native-select", this.variant || "default");

        // wrapper pre label a inputWrapper
        let wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        wrapper.setAttribute("slot", "anchor");

        // label
        let label = document.createElement("wje-label");
        label.innerText = this.label || "";

        // obalovac pre input
        let inputWrapper = document.createElement("div");
        inputWrapper.setAttribute("part", "input-wrapper");
        inputWrapper.classList.add("input-wrapper");

        let slotStart = document.createElement("div");
        slotStart.classList.add("slot-start");

        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("part", "input");
        input.setAttribute("autocomplete", "off");
        input.setAttribute("readonly", "");
        input.setAttribute("placeholder", this.placeholder || "");

        let slotEnd = document.createElement("div");
        slotEnd.classList.add("slot-end");

        let arrow = document.createElement("wje-icon");
        arrow.setAttribute("name", "chevron-down");
        arrow.setAttribute("slot", "arrow");

        let chips = document.createElement("div");
        chips.classList.add("chips");
        chips.innerText = this.placeholder || "";

        // obalovac pre option a find
        let optionsWrapper = document.createElement("div");
        optionsWrapper.setAttribute("part", "options-wrapper");
        optionsWrapper.classList.add("options-wrapper");
        optionsWrapper.style.setProperty("height", this.maxHeight || "auto");

        let list = document.createElement("div");
        list.classList.add("list");

        let slot = document.createElement("slot");

        let clear = document.createElement("wje-button");
        clear.setAttribute("fill", "link")
        clear.setAttribute("part", "clear");

        let clearIcon = document.createElement("wje-icon");
        clearIcon.setAttribute("name", "x");

        clear.appendChild(clearIcon);

        // vytvorime popup
        let popup = document.createElement("wje-popup");
        popup.setAttribute("placement", "bottom-start");
        popup.setAttribute("manual", "");
        popup.setAttribute("size", "");

        if (this.hasAttribute("disabled"))
            popup.setAttribute("disabled", "");

        if (this.variant === "standard") {
            if (this.hasAttribute("label"))
                native.appendChild(label);
        } else {
            wrapper.appendChild(label);
        }

        inputWrapper.appendChild(slotStart);
        inputWrapper.appendChild(input);
        if (this.hasAttribute("multiple"))
            inputWrapper.appendChild(chips);

        if (this.hasAttribute("clearable"))
            inputWrapper.appendChild(clear);

        inputWrapper.appendChild(slotEnd);
        inputWrapper.appendChild(arrow);

        list.appendChild(slot);

        if (this.hasAttribute("find")) {
            let find = document.createElement("wje-input");
            find.setAttribute("variant", "standard");
            find.setAttribute("placeholder", "Hľadať");
            find.classList.add("find");

            optionsWrapper.appendChild(find);

            this.findEl = find;
        }

        optionsWrapper.appendChild(list);

        wrapper.appendChild(inputWrapper);

        popup.appendChild(wrapper);
        popup.appendChild(optionsWrapper);

        if (this.trigger === "click")
            popup.setAttribute("manual", "");

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
     * Sets up the event listeners after the component is drawn.
     * @param {Object} context - The context for drawing.
     * @param {Object} store - The store for drawing.
     * @param {Object} params - The parameters for drawing.
     */
    afterDraw() {
        this.input.addEventListener("focus", (e) => {
            this.labelElement.classList.add("fade");
            this.native.classList.add("focused");
        });

        this.input.addEventListener("blur", (e) => {
            this.native.classList.remove("focused");
            if (!e.target.value)
                this.labelElement.classList.remove("fade")
        });

        this.addEventListener("wje-option:change", this.optionChange);

        this.clear.addEventListener("wje-button:click", (e) => {
            this.getAllOptions().forEach((option) => {
                option.selected = false;
                option.removeAttribute("selected");
            });
            this.selections();

            e.stopPropagation();
        });

        this.selections(true);

        this.list.addEventListener("wje-options:load", (e) => {
            this.list.scrollTo(0, 0);
        });

        // skontrolujeme ci ma select atribut find
        if (this.hasAttribute("find") && this.findEl instanceof HTMLElement) {
            event.addListener(this.findEl, "keyup", "", (e) => {
                // contains wj-options element with options
                const optionsElement = this.querySelector("wje-options");
                if (optionsElement && optionsElement.hasAttribute("lazy")) {
                    // pass search value to wj-options element and infinite scroll will handle the rest
                    optionsElement.setAttribute("search", e.target.value);
                } else {
                    let value = e.target.value.trim().toLowerCase();

                    this.getAllOptions().forEach((option) => {
                        if (option.textContent.trim().toLowerCase().includes(value))
                            option.style.display = "block";
                        else
                            option.style.display = "none";
                    });
                }
            });
        }
    }

    /**
     * Handles the option change event.
     *
     * @param {Event} e - The event.
     */
    optionChange = (e) => {
        let allOptions = this.getAllOptions();

        if (!this.hasAttribute("multiple")) {
            allOptions.forEach((option) => {
                option.selected = false;
                option.removeAttribute("selected");
            });
            this.popup.removeAttribute("active");
        }

        e.target.selected = !e.target.hasAttribute("selected");

        this.selections();
    }

    /**
     * Returns all the options as HTML.
     *
     * @returns {NodeList} The options.
     */
    getAllOptions() {
        return this.querySelectorAll("wje-option");
    }

    /**
     * Returns the selected options as HTML.
     *
     * @returns {NodeList} The selected options.
     */
    getSelectedOptions() {
        return this.querySelectorAll("wje-option[selected]");
    }

    /**
     * Returns the selected options.
     *
     * @param {Element} option - The option to get.
     * @returns {Array} The selected options.
     */
    getSelected() {
        let selectedOptions = this.getSelectedOptions();

        selectedOptions = Array.isArray(selectedOptions) ? selectedOptions : Array.from(selectedOptions);

        selectedOptions = selectedOptions.map((option) => {
            return {
                value: option.value,
                text: option.textContent.trim()
            };
        });

        return selectedOptions;
    }

    /**
     * Handles the selection change.
     *
     * @param {Element} option - The option that changed.
     * @param {number} length - The length of the selected options.
     */
    selectionChanged(option = null, length = 0) {
        if (this.hasAttribute("multiple")) {
            this.value = this.selectedOptions.map(el => el.value).reverse();

            if (this.placeholder && length === 0) {
                this.chips.innerHTML = this.placeholder;
                this.input.value = '';
            } else {
                if (this.counterEl instanceof HTMLElement || length > +this.maxOptions) {
                    this.counter();
                } else {
                    if (option !== null)
                        this.chips.appendChild(this.getChip(option));
                }
            }
        } else {
            let value = option?.textContent.trim() || "";
            this.value = this.selectedOptions?.map(el => el.value)?.at(0)
            this.input.value = value;

            if (option && option instanceof HTMLElement) {
                this.slotStart.innerHTML = "";

                if (option?.querySelector('[slot=start]')) {
                    this.slotStart.appendChild(option?.querySelector('[slot=start]').cloneNode(true));
                }

                this.slotEnd.innerHTML = "";

                if (option?.querySelector('[slot=end]')) {
                    this.slotEnd.appendChild(option?.querySelector('[slot=end]').cloneNode(true));
                }
            }
        }

    }

    /**
     * Handles the selections.
     *
     * @param {Element} option - The option to select.
     */
    selections(silence = false) {
        let options = this.getSelectedOptions();

        this.selectedOptions = Array.isArray(options) ? options : Array.from(options);

        if (this.selectedOptions.length >= +this.maxOptions) {
            this.counterEl = null;
        }

        this.chips.innerHTML = "";
        if (this.selectedOptions.length > 0) {
            this.selectedOptions.forEach((option, index) => {
                this.selectionChanged(option, ++index);
            });
        } else {
            this.selectionChanged();
        }

        if (silence) return;
        event.dispatchCustomEvent(this, "wje-select:change");

    }

    /**
     * Handles the counter.
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
            this.counterEl = document.createElement("span");
            this.counterEl.classList.add("counter");

            this.chips.appendChild(this.counterEl);
        }

        // nastavime hodnotu counter
        this.counterEl.innerText = `+${this.value.length - +this.maxOptions}`;
    }

    /**
     * Returns a chip element.
     *
     * @param {Element} option - The option to get the chip for.
     * @returns {Element} The chip element.
     */
    getChip(option) {
        let chip = document.createElement("wje-chip");
        chip.setAttribute("removable", "");
        chip.addEventListener("wje:chip-remove", this.removeChip);
        chip.option = option;

        let label = document.createElement("wje-label");
        label.innerText = option.textContent.trim();

        chip.appendChild(label);

        return chip;
    }

    /**
     * Handles the chip remove event.
     *
     * @param {Event} e - The event.
     */
    removeChip = (e) => {
        let option = e.target.option;
        option.selected = false;
        option.removeAttribute("selected");
        e.target.parentNode.removeChild(e.target);

        this.selections();
    }

    /**
     * Generates an HTML option element based on the provided item and mapping.
     * 
     * @param {Object} item - The item to generate the option for.
     * @param {Object} [map] - The mapping object that specifies the properties of the item to use for the option's value and text.
     * @param {string} [map.value="value"] - The property of the item to use for the option's value.
     * @param {string} [map.text="text"] - The property of the item to use for the option's text.
     * @returns {HTMLElement} The generated HTML option element.
     */
    htmlOption(item, map = { value: "value", text: "text" }) {
        let option = document.createElement("wje-option");

        if (item[map.value] === null) {
            console.warn(`The item ${JSON.stringify(item)} does not have the property ${map.value}`);
        }

        if (item[map.text] === null) {
            console.warn(`The item ${JSON.stringify(item)} does not have the property ${map.text}`);
        }

        option.setAttribute("value", item[map.value] ?? '');
        option.innerText = item[map.text] ?? '';
        return option;
    }

    /**
     * Adds an option to the select element.
     * 
     * @param {any} optionData - The data for the option to be added.
     * @param {boolean} [silent=false] - Whether to suppress any events triggered by the addition of the option.
     * @param {object} [map={ value: "value", text: "text" }] - The mapping object specifying the properties of the option data to be used for the value and text of the option.
     */
    addOption(optionData, silent = false, map = { value: "value", text: "text" }) {
        if (!optionData) return;

        const optionsElement = this.querySelector("wje-options");
        if (optionsElement) {
            optionsElement.addOption(optionData, silent, map);
            return;
        }

        let option = this.htmlOption(optionData, map);
        this.appendChild(option);
    }

    /**
     * Adds options to the select element.
     * 
     * @param {Array|Object} optionsData - The options data to be added. Can be an array of objects or a single object.
     * @param {boolean} [silent=false] - Indicates whether to trigger events when adding options. Default is false.
     * @param {Object} [map] - The mapping object that specifies the properties of the options data object. Default is { value: "value", text: "text" }.
     */
    addOptions(optionsData, silent = false, map = { value: "value", text: "text" }) {
        if (!Array.isArray(optionsData)) {
            this.addOption(optionsData, silent, map);
        } else {
            const optionsElement = this.querySelector("wje-options");
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
     * 
     * @param {string} value - The value of the option to be selected.
     * @param {boolean} [silent=false] - Whether to suppress firing events.
     */
    selectOption(value, silent = false) {
        if (!value) return;

        let option = this.querySelector(`wje-option[value="${value}"]`);
        if (option) {
            option.selected = true;
        }

        this.selections(silent)
    }

    /**
     * Selects one or multiple options in the select element.
     *
     * @param {Array|any} values - The value(s) of the option(s) to be selected.
     * @param {boolean} [silent=false] - Whether to trigger the change event or not.
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
     * @summary Callback function that is called when the custom element is associated with a form.
     * This function adds an event listener to the form's submit event, which validates the input and propagates the validation.
     * @param {HTMLFormElement} form - The form the custom element is associated with.
     */
    formAssociatedCallback(form) {
        form?.addEventListener('submit', () => {
            // this.validateInput();
            // this.propagateValidation();
        });
    }

    /**
     * The formResetCallback method is a built-in lifecycle callback that gets called when a form gets reset.
     * This method is responsible for resetting the value of the custom input element to its default value.
     * It also resets the form value and validity state in the form internals.
     *
     * @method
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
     *
     * @param {Object} state - The saved state of the custom input element.
     * @method
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
     *
     * @returns {Object} The saved state of the custom input element.
     * @method
     */
    formStateSaveCallback() {
        return {
            value: this.value
        };
    }

    /**
     * The formDisabledCallback method is a built-in lifecycle callback that gets called when the disabled state of a form-associated custom element changes.
     * This method is not implemented yet.
     *
     * @param {boolean} disabled - The new disabled state of the custom input element.
     * @method
     */
    formDisabledCallback(disabled) {
        console.warn('formDisabledCallback not implemented yet')
    }
}