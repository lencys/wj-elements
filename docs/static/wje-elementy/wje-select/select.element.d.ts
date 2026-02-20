import { FormAssociatedElement } from '../internals/form-associated-element.js';
import { default as Button } from '../wje-button/button.js';
import { default as Popup } from '../wje-popup/popup.js';
import { default as Icon } from '../wje-icon/icon.js';
import { default as Label } from '../wje-label/label.js';
import { default as Chip } from '../wje-chip/chip.js';
import { default as Input } from '../wje-input/input.js';
import { default as Option } from '../wje-option/option.js';
import { default as Options } from '../wje-options/options.js';
import { default as Checkbox } from '../wje-checkbox/checkbox.js';
export class Select extends FormAssociatedElement {
    static _instanceId: number;
    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Returns the list of attributes to observe for changes.
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes(): Array<string>;
    /**
     * @type {HTMLElement|null}
     * @description A reference to the counter element, initially null.
     * @private
     */
    private counterEl;
    /**
     * @type {boolean}
     * @description Tracks whether the select element was previously opened, initially false.
     * @private
     * @default {boolean} false
     */
    private _wasOppened;
    /**
     * @type {HTMLElement|null}
     * @description A reference to the native select element, initially null.
     */
    native: HTMLElement | null;
    /**
     * @type {HTMLElement|null}
     * @description A reference to the popup element, initially null.
     */
    popup: HTMLElement | null;
    /**
     * @type {HTMLElement|null}
     * @description A reference to the label element, initially null.
     */
    labelElement: HTMLElement | null;
    /**
     * @type {HTMLElement|null}
     * @description A reference to the slot start element, initially null.
     */
    slotStart: HTMLElement | null;
    /**
     * @type {HTMLElement|null}
     * @description A reference to the slot end element, initially null.
     */
    slotEnd: HTMLElement | null;
    /**
     * @type {HTMLElement|null}
     * @description A reference to the input element, initially null.
     */
    input: HTMLElement | null;
    /**
     * @type {HTMLElement|null}
     * @description A reference to the chips element, initially null.
     */
    chips: HTMLElement | null;
    /**
     * @type {HTMLElement|null}
     * @description A reference to the clear button element, initially null.
     */
    clear: HTMLElement | null;
    /**
     * @type {HTMLElement|null}
     * @description A reference to the list element, initially null.
     */
    list: HTMLElement | null;
    _value: any[];
    _selectedOptions: any[];
    _instanceId: number;
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
    dependencies: {
        'wje-button': typeof Button;
        'wje-popup': typeof Popup;
        'wje-icon': typeof Icon;
        'wje-label': typeof Label;
        'wje-chip': typeof Chip;
        'wje-input': typeof Input;
        'wje-option': typeof Option;
        'wje-options': typeof Options;
        'wje-checkbox': typeof Checkbox;
    };
    /**
     * Sets the maximum number of options allowed.
     * @param { number | object} value The value to set as the maximum number of options.
     * If null, the 'max-options' attribute will be removed.
     */
    set maxOptions(value: number | object);
    /**
     * Retrieves the maximum number of options allowed.
     * Parses the value of the 'max-options' attribute from the element and converts it to a number.
     * If the attribute is not present or cannot be converted to a valid number, defaults to 1.
     * @returns {number} The maximum number of options, or 0 if the attribute is not set or invalid.
     */
    get maxOptions(): number;
    /**
     * @summary Setter for the defaultValue attribute.
     * This method sets the 'value' attribute of the custom input element to the provided value.
     * The 'value' attribute represents the default value of the input element.
     * @param {string} value The value to set as the default value.
     */
    set defaultValue(value: string);
    /**
     * @summary Getter for the defaultValue attribute.
     * This method retrieves the 'value' attribute of the custom input element.
     * The 'value' attribute represents the default value of the input element.
     * If the 'value' attribute is not set, it returns an empty string.
     * @returns {string} The default value of the input element.
     */
    get defaultValue(): string;
    /**
     * Sets the trigger value.
     * @param {string} value The trigger value to set.
     */
    set trigger(value: string);
    /**
     * Returns the trigger value.
     * @returns {string} The trigger value.
     */
    get trigger(): string;
    /**
     * Sets the readonly state of the element. When set to true,
     * the element and its associated inputs are marked as readonly or disabled.
     * When set to false, the readonly and disabled attributes are removed,
     * allowing user interaction.
     * @param {boolean} value A boolean value indicating whether to set the
     * element and its associated inputs to readonly (true) or not (false).
     */
    set readonly(value: boolean);
    /**
     * Checks if the 'readonly' attribute is present on the element.
     * @returns {boolean} Returns true if the 'readonly' attribute is set, otherwise false.
     */
    get readonly(): boolean;
    /**
     * Sets the maximum height value for the element.
     * If a value is provided, it sets the 'max-height' attribute on the element.
     * If no value is provided, it removes the 'max-height' attribute from the element.
     * @param {string|null} value The maximum height to be set. If null or undefined, the attribute is removed.
     */
    set maxHeight(value: string | null);
    /**
     * Retrieves the maximum height value, which is determined by the 'max-height' attribute.
     * If the attribute is not set, a default value of '200px' is returned.
     * @returns {string} The maximum height value as a string.
     */
    get maxHeight(): string;
    /**
     * Sets the offset attribute for the element.
     * @param {string} value The value to assign to the offset attribute.
     */
    set offset(value: string);
    /**
     * Gets the value of the offset attribute of the current element.
     * If the offset attribute is not present, returns a default value of '0'.
     * @returns {string} The value of the offset attribute or the default value '0'.
     */
    get offset(): string;
    /**
     * Sets the selected options for the object.
     * @param {Array|object} value The new value for the selected options. It can be an array or object containing the selected options.
     */
    set selectedOptions(value: any[] | object);
    /**
     * Retrieves the selected options.
     * @returns {Array} An array containing the currently selected options. If no options are selected, an empty array is returned.
     */
    get selectedOptions(): any[];
    /**
     * Sets the `lazy` attribute on the element. If the provided value is truthy, the `lazy` attribute is added. If the value is falsy, the `lazy` attribute is removed.
     * @param {boolean} value A boolean value indicating whether to add or remove the `lazy` attribute. If `true`, the attribute is added; if `false`, it is removed.
     */
    set lazy(value: boolean);
    /**
     * Getter for the 'lazy' property.
     * @returns {boolean} Returns true if the 'lazy' attribute is present on the element, otherwise false.
     */
    get lazy(): boolean;
    /**
     * Sets or removes the 'no-size' attribute on an element.
     * @param {boolean} value A boolean indicating whether to add or remove the 'no-size' attribute. If true, the attribute is added; if false, the attribute is removed.
     */
    set noSize(value: boolean);
    /**
     * Gets the value of the 'no-size' attribute for the element.
     * @returns {boolean} True if the 'no-size' attribute is present, otherwise false.
     */
    get noSize(): boolean;
    /**
     * Getter for the customErrorDisplay attribute.
     * @returns {boolean} Whether the attribute is present.
     */
    get customErrorDisplay(): boolean;
    /**
     * Retrieves the complete list of options available for the component.
     * The options are determined by combining elements from various sources, including loaded options, added options, and HTML-sourced options.
     * If a `wje-options` element is present within the component, its loaded options are included in the merged list.
     * In the absence of a `wje-options` element, duplicates among the added and HTML options are removed, retaining their order.
     * @returns {Array<object>} An array containing all the available options, combining the loaded, added, and HTML-based options, with duplicates removed where applicable.
     */
    get options(): Array<object>;
    beforeDraw(): void;
    /**
     * Draws the component for the select.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
    _ariaListId: string;
    findEl: HTMLElement;
    displayInput: HTMLInputElement;
    slotFooter: HTMLSlotElement;
    /**
     * Executes post-render logic for the custom element.
     * This includes validation, event listener registration, managing custom attributes, and
     * handling options initialization for the component.
     * @returns {void} This method does not return any value.
     */
    afterDraw(): void;
    pristine: boolean;
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
    optionChange: (e: Event) => void;
    /**
     * Handles the logic for processing the selection state of a clicked option element.
     * @function processClickedOption
     * @param {Element} option The option element that is clicked.
     * @param {boolean} [multiple] A Boolean indicating whether multiple options can be selected. Defaults to false.
     * Changes the selected state of the passed option and updates the selected options list.
     * Checks if the option already has a "selected" attribute, toggles its state,
     * and updates the internal selected options.
     */
    processClickedOption: (option: Element, multiple?: boolean) => void;
    /**
     * Returns all the options as HTML.
     * @returns {NodeList} The options as HTML.
     */
    getAllOptions(): NodeList;
    /**
     * Handles changes in the selection for a component, updating internal values, input fields,
     * and visual presentation (like chips or slots) as per the given selection options.
     * @param {Array|null} options The collection of selected option elements. If null, no options are selected.
     * @param {number} length The total number of selected options.
     * @returns {void}
     */
    selectionChanged(options?: any[] | null, length?: number): void;
    /**
     * Handles the logic for updating selections based on the current selected options,
     * updating chips content, and dispatching change events if necessary.
     * @param {boolean} [silence] If true, suppresses the dispatch of a custom change event.
     * @returns {void} This method does not return a value.
     */
    selections(silence?: boolean): void;
    /**
     * Updates the counter element to reflect the current state of selected values relative to the maximum allowed options.
     * If the maximum options are selected, the counter element is removed. If it does not already exist and needs to be displayed, it is created.
     * @returns {void} Does not return a value.
     */
    counter(): void;
    /**
     * Creates and returns a chip element with specified properties and a label.
     * @param {object} option The configuration object for the chip. Typically includes properties such as value and textContent to set up the chip's label and data.
     * @returns {HTMLElement} The newly created chip element with a label and default properties.
     */
    getChip(option: object): HTMLElement;
    /**
     * Handles the removal of a chip element from the DOM and updates the related state.
     * @param {Event} e The event object triggered by the chip removal action.
     * The target of the event is expected to be the chip element itself.
     */
    removeChip: (e: Event) => void;
    /**
     * Generates an HTML option element based on the provided item and mapping.
     * @param {object} item The item to generate the option for.
     * @param {object} [map] The mapping object that specifies the properties of the item to use for the option's value and text.
     * @param {string} [map.value] The property of the item to use for the option's value.
     * @param {string} [map.text] The property of the item to use for the option's text.
     * @returns {HTMLElement} The generated HTML option element.
     */
    htmlOption(item: object, map?: {
        value?: string;
        text?: string;
    }): HTMLElement;
    /**
     * Returns the provided item.
     * @param {any} item The item to be returned.
     * @returns {any} The same item that was passed as input.
     */
    htmlSelectedItem(item: any): any;
    /**
     * Adds a new option to the component.
     * @param {object} optionData The data used to create the new option.
     * @param {boolean} [silent] Whether the addition should trigger events or not.
     * @param {object} [map] Mapping of keys to identify value and text in the optionData.
     * @param {string} [map.value] The key in optionData that represents the value of the option.
     * @param {string} [map.text] The key in optionData that represents the text of the option.
     * @returns {void}
     */
    addOption(optionData: object, silent?: boolean, map?: {
        value?: string;
        text?: string;
    }): void;
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
    addOptions(optionsData: any[] | object, silent?: boolean, map?: {
        value?: string;
        text?: string;
    }): void;
    /**
     * Selects an option from the available options within the component.
     * @param {string} value The value of the option to be selected.
     * @param {boolean} [silent] Determines whether the selection should trigger notification or updates. Defaults to false.
     * @returns {void} Does not return a value.
     */
    selectOption(value: string, silent?: boolean): void;
    /**
     * Selects multiple options based on the provided values. If a single value is provided, it selects that option.
     * If an array of values is provided, it iterates through the array and selects each option.
     * @param {any|any[]} values A single value or an array of values to be selected.
     * @param {boolean} [silent] Determines whether the selection action should occur silently without triggering other side effects or events.
     * @returns {void} This method does not return a value.
     */
    selectOptions(values: any | any[], silent?: boolean): void;
    /**
     * Clones and appends an icon with the "check" slot to the specified option element.
     * If the option already contains a custom element with slot="check" (e.g. <wje-status slot="check">),
     * it is left untouched and no template icon is added.
     * @param {HTMLElement} option The target HTML element to which the cloned "check" icon will be appended.
     * @returns {void} This method does not return a value, but it modifies the DOM by appending a cloned "check" icon to the provided option element.
     */
    optionCheckSlot(option: HTMLElement): void;
    /**
     * Clears all selected options and resets selections.
     * The method ensures that all options are deselected, updates the internal state, validates the selections,
     * propagates the validation status, and indicates invalid state if necessary.
     * @returns {void} No value is returned by this method.
     */
    clearSelections(): void;
    /**
     * Syncs ARIA attributes on the host element.
     */
    syncAria(): void;
    #private;
}
