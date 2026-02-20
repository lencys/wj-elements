var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _addedOptions, _htmlOptions, _Select_instances, htmlSelectedItem_fn, getSelectedOptions_fn, _applySearchFilter, _onMenuItemClickCapture, syncOptionCheckbox_fn;
import { F as FormAssociatedElement } from "./form-associated-element-DEQ4y-jn.js";
import { event } from "./event.js";
import Button from "./wje-button.js";
import "./wje-popup.js";
import { I as Icon } from "./icon-DVyMc4Wv.js";
import Label from "./wje-label.js";
import Chip from "./wje-chip.js";
import Input from "./wje-input.js";
import Option from "./wje-option.js";
import Options from "./wje-options.js";
import Checkbox from "./wje-checkbox.js";
import { P as Popup } from "./popup.element-Cl6QeG8M.js";
const styles = "/*\n[ WJ Select ]\n*/\n\n:host {\n    margin-bottom: var(--wje-select-margin-bottom);\n    width: 100%;\n    display: block;\n    [slot='arrow'] {\n        transform: rotate(0deg);\n        transition: all 0.2s ease-in;\n    }\n    label {\n        margin: var(--wje-select-label-margin);\n        padding: var(--wje-select-label-padding);\n        display: var(--wje-select-label-display);\n        opacity: 1;\n        cursor: text;\n        transition: opacity 0.2s ease;\n        line-height: var(--wje-select-label-line-height);\n        font-size: var(--wje-select-label-font-size);\n    }\n}\n\n.native-select {\n    position: relative;\n    &.default {\n        .wrapper {\n            display: block;\n						background-color: var(--wje-select-background);\n            border-width: var(--wje-select-border-width);\n            border-style: var(--wje-select-border-style);\n            border-color: var(--wje-select-border-color);\n            border-radius: var(--wje-select-border-radius);\n            padding-inline: 0.5rem;\n            padding-top: 0.125rem;\n            padding-bottom: 0.125rem;\n        }\n        .input-wrapper {\n            padding: 0;\n            min-height: 28px;\n            margin-top: -4px;\n        }\n        &.focused {\n            wje-label {\n                opacity: 0.67;\n                font-size: 12px;\n                letter-spacing: normal;\n            }\n        }\n        label {\n            &.fade {\n                opacity: 0.5;\n                font-size: 12px;\n                letter-spacing: normal;\n            }\n        }\n    }\n    &.standard {\n        .wrapper {\n            height: var(--wje-select-height);\n            box-sizing: border-box;\n            background-color: var(--wje-select-background);\n            border-width: var(--wje-select-border-width);\n            border-style: var(--wje-select-border-style);\n            border-color: var(--wje-select-border-color);\n            border-radius: var(--wje-select-border-radius);\n        }\n        .input-wrapper {\n            background: transparent;\n            width: 100%;\n        }\n        slot[name='error'] {\n            position: static;\n\n            background: transparent;\n            padding: 0.25rem 0;\n            left: auto;\n            transform: none;\n            color: var(--wje-input-color-invalid);\n            font-size: 12px;\n            line-height: normal;\n        }\n    }\n}\n\n.wrapper {\n    display: flex;\n    width: 100%;\n}\n\n.input-wrapper {\n    display: grid;\n    grid-template-columns: auto 1fr auto auto auto;\n    align-items: center;\n    background-color: var(--wje-select-background);\n    /*min-height: 28px;*/\n    color: var(--wje-select-color);\n    line-height: var(--wje-select-line-height);\n    appearance: none;\n    padding: 2px 0.5rem;\n    font-size: 14px !important;\n    font-weight: normal;\n    vertical-align: middle;\n    input[readonly] {\n        pointer-events: none;\n        caret-color: transparent;\n    }\n}\n\ninput {\n    color: var(--wje-select-color);\n    line-height: var(--wje-select-line-height);\n    font-size: 14px !important;\n    font-weight: 400;\n    letter-spacing: 0.01em;\n    border: medium;\n    height: 25px;\n    min-height: 25px;\n    padding: 0;\n    background: none;\n    box-shadow: none;\n    width: 100%;\n    outline: 0;\n    font-size: 14px !important;\n}\n\n::placeholder {\n    opacity: 1;\n}\n\n:host [active] {\n    .wrapper {\n        border-radius: var(--wje-select-border-radius);\n    }\n    [slot='arrow'] {\n        transform: rotate(180deg);\n        transition: all 0.2s ease-in;\n    }\n}\n\n.options-wrapper {\n    border-width: var(--wje-select-options-border-width);\n    border-style: var(--wje-select-options-border-style);\n    border-color: var(--wje-select-options-border-color);\n    border-radius: var(--wje-select-options-border-radius);\n    margin-top: calc(0px - var(--wje-select-border-width));\n    background-color: var(--wje-select-options-background-color);\n    overflow: hidden;\n}\n\n.find {\n    margin-block: var(--wje-select-find-margin-block);\n    margin-inline: var(--wje-select-find-margin-inline);\n    width: var(--wje-select-find-width);\n}\n\n.list {\n    overflow: auto;\n    height: 100%;\n}\n\n.options-wrapper:has(.find) .list {\n    height: calc(100% - 32px - 2 * var(--wje-select-find-margin-block));\n}\n\n:host([multiple]) input {\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 0;\n    width: 0;\n    height: 0;\n    opacity: 0;\n}\n\n:host([multiple]) .chips {\n    display: flex;\n    flex: 1;\n    align-items: center;\n    flex-wrap: wrap;\n    gap: var(--wje-spacing-3x-small);\n}\n\n:host([disabled]) .input-wrapper {\n    opacity: 0.5;\n    pointer-events: none;\n    cursor: not-allowed;\n}\n\n.counter {\n    padding-inline: 0.5rem;\n}\n\nwje-chip {\n    --wje-chip-margin: 0 0.25rem 0 0;\n}\n\nwje-button {\n    --wje-padding-top: 0.25rem;\n    --wje-padding-start: 0.25rem;\n    --wje-padding-end: 0.25rem;\n    --wje-padding-bottom: 0.25rem;\n    --wje-button-margin-inline: 0 0.25rem;\n}\n\n.slot-start,\n.slot-end {\n    &:not(:empty) {\n        margin-right: 0.5rem;\n    }\n}\n\nslot[name='error'] {\n    display: none;\n}\n\n:host([invalid]) slot[name='error'] {\n    display: block;\n}\n\nslot[name='error'] {\n    display: none;\n    position: absolute;\n    max-width: 100%;\n    min-width: auto;\n    border-radius: 50px;\n    background: black;\n    padding: 0.25rem 0.5rem;\n    top: 0;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: white;\n    font-size: var(--wje-font-size-small);\n    width: max-content;\n    line-height: normal;\n}\n\n.input-hidden{\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    margin: 0;\n    opacity: 0;\n    z-index: -1;\n}\n\n:host([required]) .wrapper::after {\n    color: var(--wje-input-color-invalid);\n    content: var(--wje-input-required-symbol);\n    font-size: 24px;\n    position: absolute;\n    right: 12px;\n    top: 0;\n}\n\n:host([required]) .standard .input-wrapper::after {\n    right: 13px;\n    top: -20px;\n}";
const _Select = class _Select extends FormAssociatedElement {
  constructor() {
    super();
    __privateAdd(this, _Select_instances);
    __privateAdd(this, _addedOptions, []);
    __privateAdd(this, _htmlOptions, []);
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
    __publicField(this, "dependencies", {
      "wje-button": Button,
      "wje-popup": Popup,
      "wje-icon": Icon,
      "wje-label": Label,
      "wje-chip": Chip,
      "wje-input": Input,
      "wje-option": Option,
      "wje-options": Options,
      "wje-checkbox": Checkbox
    });
    __publicField(this, "className", "Select");
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
    __publicField(this, "optionChange", (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      if (this.readonly || this.disabled) return;
      let allOptions = this.getAllOptions();
      if (!this.hasAttribute("multiple")) {
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
    });
    /**
     * Handles the logic for processing the selection state of a clicked option element.
     * @function processClickedOption
     * @param {Element} option The option element that is clicked.
     * @param {boolean} [multiple] A Boolean indicating whether multiple options can be selected. Defaults to false.
     * Changes the selected state of the passed option and updates the selected options list.
     * Checks if the option already has a "selected" attribute, toggles its state,
     * and updates the internal selected options.
     */
    __publicField(this, "processClickedOption", (option, multiple = false) => {
      const isSelected = option.hasAttribute("selected");
      option.selected = !isSelected;
      this.selectedOptions = __privateMethod(this, _Select_instances, getSelectedOptions_fn).call(this);
      this.syncAria();
    });
    /**
     * Handles the removal of a chip element from the DOM and updates the related state.
     * @param {Event} e The event object triggered by the chip removal action.
     * The target of the event is expected to be the chip element itself.
     */
    __publicField(this, "removeChip", (e) => {
      e.target.parentNode.removeChild(e.target);
      this.processClickedOption(e.target.option, true);
      this.selections();
    });
    /**
     * Filters option elements based on the search input value.
     * This function applies a search filter to a list of options. If a `wj-options` element exists and has
     * the `lazy` attribute, the search value is passed to the `wj-options` element, enabling infinite scroll
     * functionality to handle the filtering. If the `lazy` attribute is not present, it performs a local
     * search to show or hide options depending on whether their text content matches the search input.
     * @param {Event} e The input event containing the search input value from the user.
     */
    __privateAdd(this, _applySearchFilter, (e) => {
      const optionsElement = this.querySelector("wje-options");
      if (optionsElement && optionsElement.hasAttribute("lazy")) {
        optionsElement.setAttribute("search", e.target.value);
      } else {
        let value = e.target.value.trim().toLowerCase();
        this.getAllOptions().forEach((option) => {
          if (option.textContent.trim().toLowerCase().includes(value)) {
            option.style.display = "block";
          } else {
            option.style.display = "none";
          }
        });
      }
    });
    /**
     * Prevent closing the parent <wje-select>'s popup when a nested <wje-dropdown>
     * menu item is clicked. Closes only the dropdown that owns the clicked item.
     * This captures the event at the document level (useCapture=true) so it can
     * stop the global outside-click logic that would otherwise hide the select's popup.
     */
    __privateAdd(this, _onMenuItemClickCapture, (e) => {
      const target = e.target;
      if (!target || !target.closest) return;
      const menuItem = target.closest("wje-menu-item");
      if (!menuItem) return;
      const dropdown = target.closest("wje-dropdown");
      if (dropdown && typeof dropdown.hide === "function") {
        dropdown.hide();
      }
      e.stopPropagation();
    });
    this.counterEl = null;
    this._wasOppened = false;
    this.native = null;
    this.popup = null;
    this.labelElement = null;
    this.slotStart = null;
    this.slotEnd = null;
    this.input = null;
    this.chips = null;
    this.clear = null;
    this.list = null;
    this._value = [];
    this._selectedOptions = [];
    this._instanceId = ++_Select._instanceId;
  }
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
      let dataString = value;
      if (!Array.isArray(data)) {
        data = data.split(" ");
      } else {
        dataString = data.join(" ");
      }
      data.forEach((v) => {
        formData.append(this.name, v);
      });
      value = formData;
      this._value = data;
      this.setAttribute("value", dataString);
    } else {
      formData.delete(this.name);
      value = formData;
      this._value = [];
      this.removeAttribute("value");
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
      this.setAttribute("max-options", value);
    } else {
      this.removeAttribute("max-options");
    }
  }
  /**
   * Retrieves the maximum number of options allowed.
   * Parses the value of the 'max-options' attribute from the element and converts it to a number.
   * If the attribute is not present or cannot be converted to a valid number, defaults to 1.
   * @returns {number} The maximum number of options, or 0 if the attribute is not set or invalid.
   */
  get maxOptions() {
    return +this.getAttribute("max-options") || 1;
  }
  /**
   * @summary Setter for the defaultValue attribute.
   * This method sets the 'value' attribute of the custom input element to the provided value.
   * The 'value' attribute represents the default value of the input element.
   * @param {string} value The value to set as the default value.
   */
  set defaultValue(value) {
    this.setAttribute("value", value);
  }
  /**
   * @summary Getter for the defaultValue attribute.
   * This method retrieves the 'value' attribute of the custom input element.
   * The 'value' attribute represents the default value of the input element.
   * If the 'value' attribute is not set, it returns an empty string.
   * @returns {string} The default value of the input element.
   */
  get defaultValue() {
    return this.getAttribute("value") ?? "";
  }
  /**
   * Sets the trigger value.
   * @param {string} value The trigger value to set.
   */
  set trigger(value) {
    this.setAttribute("trigger", value);
  }
  /**
   * Returns the trigger value.
   * @returns {string} The trigger value.
   */
  get trigger() {
    return this.getAttribute("trigger") || "click";
  }
  /**
   * Sets or removes the disabled state for the associated elements.
   * @param {boolean} value A boolean indicating whether the elements should be disabled.
   * If true, the disabled attribute is added to the elements. If false, the disabled attribute is removed.
   */
  set disabled(value) {
    var _a, _b, _c, _d, _e, _f;
    if (value) {
      this.setAttribute("disabled", "");
      (_a = this.input) == null ? void 0 : _a.setAttribute("disabled", "");
      (_b = this.displayInput) == null ? void 0 : _b.setAttribute("disabled", "");
      (_c = this.popup) == null ? void 0 : _c.setAttribute("disabled", "");
    } else {
      this.removeAttribute("disabled");
      (_d = this.input) == null ? void 0 : _d.removeAttribute("disabled");
      (_e = this.displayInput) == null ? void 0 : _e.removeAttribute("disabled");
      (_f = this.popup) == null ? void 0 : _f.removeAttribute("disabled");
    }
  }
  /**
   * Retrieves the current state of the 'disabled' attribute.
   * @returns {boolean} Returns true if the 'disabled' attribute is present, otherwise false.
   */
  get disabled() {
    return this.hasAttribute("disabled");
  }
  /**
   * Sets the readonly state of the element. When set to true,
   * the element and its associated inputs are marked as readonly or disabled.
   * When set to false, the readonly and disabled attributes are removed,
   * allowing user interaction.
   * @param {boolean} value A boolean value indicating whether to set the
   * element and its associated inputs to readonly (true) or not (false).
   */
  set readonly(value) {
    var _a, _b, _c, _d, _e, _f;
    if (value) {
      this.setAttribute("readonly", "");
      (_a = this.input) == null ? void 0 : _a.setAttribute("readonly", "");
      (_b = this.displayInput) == null ? void 0 : _b.setAttribute("readonly", "");
      (_c = this.popup) == null ? void 0 : _c.setAttribute("disabled", "");
    } else {
      this.removeAttribute("readonly");
      (_d = this.input) == null ? void 0 : _d.removeAttribute("readonly");
      (_e = this.displayInput) == null ? void 0 : _e.removeAttribute("readonly");
      (_f = this.popup) == null ? void 0 : _f.removeAttribute("disabled");
    }
  }
  /**
   * Checks if the 'readonly' attribute is present on the element.
   * @returns {boolean} Returns true if the 'readonly' attribute is set, otherwise false.
   */
  get readonly() {
    return this.hasAttribute("readonly");
  }
  /**
   * Sets the maximum height value for the element.
   * If a value is provided, it sets the 'max-height' attribute on the element.
   * If no value is provided, it removes the 'max-height' attribute from the element.
   * @param {string|null} value The maximum height to be set. If null or undefined, the attribute is removed.
   */
  set maxHeight(value) {
    if (value) {
      this.setAttribute("max-height", value);
    } else {
      this.removeAttribute("max-height");
    }
  }
  /**
   * Retrieves the maximum height value, which is determined by the 'max-height' attribute.
   * If the attribute is not set, a default value of '200px' is returned.
   * @returns {string} The maximum height value as a string.
   */
  get maxHeight() {
    return this.getAttribute("max-height") || "auto";
  }
  /**
   * Sets the offset attribute for the element.
   * @param {string} value The value to assign to the offset attribute.
   */
  set offset(value) {
    this.setAttribute("offset", value);
  }
  /**
   * Gets the value of the offset attribute of the current element.
   * If the offset attribute is not present, returns a default value of '0'.
   * @returns {string} The value of the offset attribute or the default value '0'.
   */
  get offset() {
    return this.getAttribute("offset") || "5";
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
      this.setAttribute("lazy", "");
    } else {
      this.removeAttribute("lazy");
    }
  }
  /**
   * Getter for the 'lazy' property.
   * @returns {boolean} Returns true if the 'lazy' attribute is present on the element, otherwise false.
   */
  get lazy() {
    return this.hasAttribute("lazy");
  }
  /**
   * Sets or removes the 'no-size' attribute on an element.
   * @param {boolean} value A boolean indicating whether to add or remove the 'no-size' attribute. If true, the attribute is added; if false, the attribute is removed.
   */
  set noSize(value) {
    if (value) {
      this.setAttribute("no-size", "");
    } else {
      this.removeAttribute("no-size");
    }
  }
  /**
   * Gets the value of the 'no-size' attribute for the element.
   * @returns {boolean} True if the 'no-size' attribute is present, otherwise false.
   */
  get noSize() {
    return this.hasAttribute("no-size");
  }
  /**
   * Getter for the customErrorDisplay attribute.
   * @returns {boolean} Whether the attribute is present.
   */
  get customErrorDisplay() {
    return this.hasAttribute("custom-error-display");
  }
  /**
   * Retrieves the complete list of options available for the component.
   * The options are determined by combining elements from various sources, including loaded options, added options, and HTML-sourced options.
   * If a `wje-options` element is present within the component, its loaded options are included in the merged list.
   * In the absence of a `wje-options` element, duplicates among the added and HTML options are removed, retaining their order.
   * @returns {Array<object>} An array containing all the available options, combining the loaded, added, and HTML-based options, with duplicates removed where applicable.
   */
  get options() {
    if (this.querySelector("wje-options")) {
      const allOptions = [...this.querySelector("wje-options").loadedOptions, ...__privateGet(this, _addedOptions), ...__privateGet(this, _htmlOptions)];
      return allOptions;
    } else {
      const allOptions = [...__privateGet(this, _addedOptions), ...__privateGet(this, _htmlOptions)];
      return Array.from(
        new Map(allOptions.reverse().map((obj) => [obj.value, obj])).values()
      ).reverse();
    }
  }
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
    return ["active", "disabled", "readonly"];
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
    this.syncAria();
  }
  beforeDraw() {
    if (this.hasAttribute("value")) {
      this.value = this.getAttribute("value");
    } else {
      const selectedOptions = __privateMethod(this, _Select_instances, getSelectedOptions_fn).call(this);
      if (selectedOptions.length > 0) {
        const values = selectedOptions.map((opt) => opt.value);
        this.value = this.hasAttribute("multiple") ? values : values[0];
      }
    }
  }
  /**
   * Draws the component for the select.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    this.classList.add("wje-placement", this.placement ? "wje-" + this.placement : "wje-start");
    let native = document.createElement("div");
    native.setAttribute("part", "native");
    native.classList.add("native-select", this.variant || "default");
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    wrapper.setAttribute("slot", "anchor");
    let label = document.createElement("label");
    label.setAttribute("part", "label");
    label.innerText = this.label || "";
    let inputWrapper = document.createElement("div");
    inputWrapper.setAttribute("part", "input-wrapper");
    inputWrapper.classList.add("input-wrapper");
    let slotStart = document.createElement("div");
    slotStart.classList.add("slot-start");
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.value = this.value.join(" ").trim();
    input.classList.add("input-hidden");
    let display = document.createElement("input");
    display.setAttribute("type", "text");
    display.setAttribute("part", "input");
    display.setAttribute("autocomplete", "off");
    display.setAttribute("readonly", "");
    display.setAttribute("placeholder", this.placeholder || "");
    if (this.required) {
      input.setAttribute("required", "");
      display.setAttribute("required", "");
    }
    if (this.disabled) {
      input.setAttribute("disabled", "");
      display.setAttribute("disabled", "");
    }
    if (this.readonly) {
      input.setAttribute("readonly", "");
      display.setAttribute("readonly", "");
    }
    let slotEnd = document.createElement("div");
    slotEnd.classList.add("slot-end");
    let arrow = document.createElement("wje-icon");
    arrow.setAttribute("name", "chevron-down");
    arrow.setAttribute("slot", "arrow");
    let chips = document.createElement("div");
    chips.classList.add("chips");
    chips.innerText = this.placeholder || "";
    let optionsWrapper = document.createElement("div");
    optionsWrapper.setAttribute("part", "options-wrapper");
    optionsWrapper.classList.add("options-wrapper");
    optionsWrapper.style.setProperty("height", this.maxHeight);
    let list = document.createElement("div");
    list.classList.add("list");
    this._ariaListId = this.id ? `${this.id}-listbox` : `wje-select-${this._instanceId}-listbox`;
    list.id = this._ariaListId;
    list.setAttribute("role", "listbox");
    if (this.hasAttribute("multiple")) list.setAttribute("aria-multiselectable", "true");
    let slot = document.createElement("slot");
    let clear = document.createElement("wje-button");
    clear.setAttribute("fill", "link");
    clear.setAttribute("part", "clear");
    clear.setAttribute("stop-propagation", "");
    let clearIcon = document.createElement("wje-icon");
    clearIcon.setAttribute("name", "x");
    let error = document.createElement("div");
    error.setAttribute("slot", "error");
    let errorSlot = document.createElement("slot");
    errorSlot.setAttribute("name", "error");
    let popup = document.createElement("wje-popup");
    popup.setAttribute("placement", "bottom-start");
    if (!this.noSize)
      popup.setAttribute("size", "");
    popup.setAttribute("part", "popup");
    popup.setAttribute("offset", this.offset);
    if ((this.lazy || this.querySelector("wje-options")) && !this._wasOppened) {
      popup.setAttribute("loader", "");
    } else {
      popup.removeAttribute("loader");
    }
    if (this.disabled) {
      popup.setAttribute("disabled", "");
    } else {
      popup.removeAttribute("disabled");
    }
    if (this.variant === "standard") {
      if (this.hasAttribute("label")) native.appendChild(label);
    } else {
      wrapper.appendChild(label);
    }
    inputWrapper.append(slotStart);
    inputWrapper.append(display);
    inputWrapper.append(input);
    clear.append(clearIcon);
    if (this.hasAttribute("multiple")) inputWrapper.append(chips);
    if (this.hasAttribute("clearable")) inputWrapper.append(clear);
    inputWrapper.appendChild(slotEnd);
    inputWrapper.appendChild(arrow);
    list.appendChild(slot);
    if (this.hasAttribute("find")) {
      let find = document.createElement("wje-input");
      find.setAttribute("variant", "standard");
      find.setAttribute("placeholder", "Hľadať");
      find.setAttribute("part", "find");
      find.clearable = true;
      find.classList.add("find");
      optionsWrapper.appendChild(find);
      this.findEl = find;
    }
    let slotFooter = document.createElement("slot");
    slotFooter.setAttribute("name", "footer");
    optionsWrapper.append(list);
    optionsWrapper.append(slotFooter);
    wrapper.append(inputWrapper);
    popup.append(wrapper);
    popup.append(optionsWrapper);
    if (this.trigger === "click") popup.setAttribute("manual", "");
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
    this.slotFooter = slotFooter;
    this.syncAria();
    return fragment;
  }
  /**
   * Executes post-render logic for the custom element.
   * This includes validation, event listener registration, managing custom attributes, and
   * handling options initialization for the component.
   * @returns {void} This method does not return any value.
   */
  afterDraw() {
    var _a, _b;
    document.addEventListener("mousedown", __privateGet(this, _onMenuItemClickCapture), true);
    this.validate();
    if (this.hasAttribute("invalid")) {
      this.showInvalidMessage();
    }
    this.syncAria();
    (_a = this.getAllOptions()) == null ? void 0 : _a.forEach((option) => {
      this.optionCheckSlot(option);
    });
    this.selectedOptions = __privateMethod(this, _Select_instances, getSelectedOptions_fn).call(this);
    this.selectOptions(this.value, true);
    if (this.lazy) {
      event.addListener(this.popup, "wje-popup:show", null, (e) => {
        if (this._wasOppened) return;
        this._wasOppened = true;
        const optionsElement = this.querySelector("wje-options");
        optionsElement.setAttribute("lazy", "");
        optionsElement.setAttribute("attached", "");
      });
    }
    event.addListener(this.popup, "wje-popup:aftershow", null, () => {
      const assignedElements = this.slotFooter.assignedElements();
      if (assignedElements.length > 0) {
        const el = assignedElements[0];
        const rect = el.getBoundingClientRect();
        let totalHeight = 0;
        if (this.hasAttribute("find")) {
          let style = getComputedStyle(this.findEl);
          let height = this.findEl.offsetHeight;
          let marginTop = parseFloat(style.marginTop);
          let marginBottom = parseFloat(style.marginBottom);
          totalHeight = height + marginTop + marginBottom;
        }
        let subtractHeight = rect.height + totalHeight;
        this.list.style.height = `calc(100% - ${subtractHeight}px)`;
      }
    });
    __privateSet(this, _htmlOptions, Array.from(this.querySelectorAll(":scope > wje-option")).map((option) => {
      return {
        value: option.value,
        text: option.textContent.trim()
      };
    }));
    this.input.addEventListener("focus", (e) => {
      var _a2;
      (_a2 = this.labelElement) == null ? void 0 : _a2.classList.add("fade");
      this.native.classList.add("focused");
    });
    this.input.addEventListener("blur", (e) => {
      var _a2;
      this.native.classList.remove("focused");
      if (!e.target.value) (_a2 = this.labelElement) == null ? void 0 : _a2.classList.remove("fade");
    });
    this.input.addEventListener("input", (e) => {
      this.propagateValidation();
    });
    this.addEventListener("wje-option:change", this.optionChange);
    event.addListener(this.popup, "wje-popup:show", null, () => this.syncAria());
    event.addListener(this.popup, "wje-popup:hide", null, () => this.syncAria());
    this.addEventListener("invalid", (e) => {
      this.invalid = true;
      this.pristine = false;
      this.showInvalidMessage();
      if (this.customErrorDisplay) {
        e.preventDefault();
      }
    });
    (_b = this.clear) == null ? void 0 : _b.addEventListener("wje-button:click", (e) => {
      if (this.readonly || this.disabled) return;
      e.preventDefault();
      e.stopPropagation();
      this.clearSelections();
    });
    this.list.addEventListener("wje-options:load", (e) => {
      var _a2;
      this.selectedOptions.forEach((option) => {
        this.getAllOptions().forEach((el) => {
          if (el.value === option.value) {
            el.selected = true;
          }
        });
      });
      const attrValue = ((_a2 = this.getAttribute("value")) == null ? void 0 : _a2.split(" ")) || [];
      attrValue.forEach((val) => {
        const existingOption = Array.from(this.getAllOptions()).find((el) => el.value === val);
        if (existingOption) {
          existingOption.selected = true;
        }
      });
      this.selectedOptions = __privateMethod(this, _Select_instances, getSelectedOptions_fn).call(this);
      this.selections(true);
      this.list.scrollTo(0, 0);
      event.dispatchCustomEvent(this.popup, "wje-popup:content-ready");
    });
    if (this.hasAttribute("find") && this.findEl instanceof HTMLElement) {
      event.addListener(this.findEl, "keyup", "", __privateGet(this, _applySearchFilter));
      event.addListener(this.findEl, "wje-input:clear", "", __privateGet(this, _applySearchFilter));
    }
  }
  /**
   * Returns all the options as HTML.
   * @returns {NodeList} The options as HTML.
   */
  getAllOptions() {
    return this.querySelectorAll("wje-option");
  }
  /**
   * Handles changes in the selection for a component, updating internal values, input fields,
   * and visual presentation (like chips or slots) as per the given selection options.
   * @param {Array|null} options The collection of selected option elements. If null, no options are selected.
   * @param {number} length The total number of selected options.
   * @returns {void}
   */
  selectionChanged(options = null, length = 0) {
    var _a, _b, _c;
    if (this.hasAttribute("multiple")) {
      this.value = options.map((el) => el.value).reverse();
      this.input.value = this.value.map((a) => a).join(" ").trim();
      if (this.placeholder && length === 0) {
        this.chips.innerHTML = this.placeholder;
      } else {
        if (options !== null) Array.from(options).slice(0, +this.maxOptions).forEach((option) => this.chips.appendChild(this.getChip(option)));
        if (this.counterEl instanceof HTMLElement || !this.maxOptions || length > +this.maxOptions) {
          this.counter();
        }
      }
      this.getAllOptions().forEach((o) => __privateMethod(this, _Select_instances, syncOptionCheckbox_fn).call(this, o));
    } else {
      const option = options == null ? void 0 : options.at(0);
      this.value = ((_a = options == null ? void 0 : options.map((el) => el.value)) == null ? void 0 : _a.at(0)) || "";
      this.input.value = this.value[0] || "";
      this.displayInput.value = ((_c = (_b = options[0]) == null ? void 0 : _b.textContent) == null ? void 0 : _c.trim()) || "";
      this.slotStart.innerHTML = "";
      this.slotEnd.innerHTML = "";
      if (option && option instanceof HTMLElement) {
        let optionSlotStart = option == null ? void 0 : option.querySelector("wje-option > [slot=start]");
        if (optionSlotStart) {
          setTimeout(() => {
            this.slotStart.append(optionSlotStart.cloneNode(true));
          }, 0);
        }
        let optionSlotEnd = option == null ? void 0 : option.querySelector("wje-option > [slot=end]");
        if (optionSlotEnd && optionSlotEnd instanceof HTMLElement && optionSlotEnd.tagName !== "WJE-DROPDOWN" && optionSlotEnd.tagName !== "WJE-BUTTON") {
          setTimeout(() => {
            this.slotEnd.append(optionSlotEnd.cloneNode(true));
          }, 0);
        }
      }
    }
    this.syncAria();
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
      this.chips.innerHTML = "";
    }
    if (this.selectedOptions.length > 0) {
      this.selectionChanged(this.selectedOptions, this.selectedOptions.length);
    } else {
      this.selectionChanged(this.selectedOptions);
    }
    if (silence) return;
    event.dispatchCustomEvent(this, "wje-select:change");
  }
  /**
   * Updates the counter element to reflect the current state of selected values relative to the maximum allowed options.
   * If the maximum options are selected, the counter element is removed. If it does not already exist and needs to be displayed, it is created.
   * @returns {void} Does not return a value.
   */
  counter() {
    if (this.counterEl && this.value.length === +this.maxOptions) {
      this.counterEl.remove();
      this.counterEl = null;
      return;
    }
    if (!this.counterEl) {
      this.counterEl = document.createElement("span");
      this.counterEl.classList.add("counter");
      this.chips.appendChild(this.counterEl);
    }
    this.counterEl.innerText = `+${this.value.length - +this.maxOptions}`;
  }
  /**
   * Creates and returns a chip element with specified properties and a label.
   * @param {object} option The configuration object for the chip. Typically includes properties such as value and textContent to set up the chip's label and data.
   * @returns {HTMLElement} The newly created chip element with a label and default properties.
   */
  getChip(option) {
    let chip = document.createElement("wje-chip");
    chip.size = "small";
    chip.removable = !this.readonly;
    chip.round = true;
    chip.addEventListener("wje:chip-remove", this.removeChip);
    chip.option = option;
    let label = document.createElement("wje-label");
    label.innerText = __privateMethod(this, _Select_instances, htmlSelectedItem_fn).call(this, option.value);
    chip.appendChild(label);
    return chip;
  }
  /**
   * Generates an HTML option element based on the provided item and mapping.
   * @param {object} item The item to generate the option for.
   * @param {object} [map] The mapping object that specifies the properties of the item to use for the option's value and text.
   * @param {string} [map.value] The property of the item to use for the option's value.
   * @param {string} [map.text] The property of the item to use for the option's text.
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
    option.setAttribute("value", item[map.value] ?? "");
    option.innerText = item[map.text] ?? "";
    __privateGet(this, _addedOptions).push({ [map.value]: item[map.value], [map.text]: item[map.text] });
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
   * Adds one or more options to a collection. If the input is an array, it adds each option within the array.
   * Otherwise, it adds a single option.
   * @param {Array | object} optionsData The data representing the options to be added. It can be a single object or an array of objects.
   * @param {boolean} [silent] Optional flag to determine if events or notifications should be suppressed while adding options.
   * @param {object} [map] An optional mapping object specifying how to map data properties to value and text for the options.
   * @param {string} [map.value] The property in the optionsData that represents the value of the option.
   * @param {string} [map.text] The property in the optionsData that represents the text of the option.
   * @returns {void}
   */
  addOptions(optionsData, silent = false, map = { value: "value", text: "text" }) {
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
    const option = this.querySelector(`wje-option[value="${value}"]`);
    if (!option) return;
    if (silent) {
      if (!option.hasAttribute("selected")) {
        option.selected = true;
      }
      this.selectedOptions = __privateMethod(this, _Select_instances, getSelectedOptions_fn).call(this);
    } else {
      this.processClickedOption(option, this.hasAttribute("multiple"));
    }
    if (this.drawingStatus > this.drawingStatuses.START) {
      this.selections(silent);
    }
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
   * If the option already contains a custom element with slot="check" (e.g. <wje-status slot="check">),
   * it is left untouched and no template icon is added.
   * @param {HTMLElement} option The target HTML element to which the cloned "check" icon will be appended.
   * @returns {void} This method does not return a value, but it modifies the DOM by appending a cloned "check" icon to the provided option element.
   */
  optionCheckSlot(option) {
    var _a;
    let existingCheckSlot = option.querySelector('[slot="check"]');
    if (existingCheckSlot && existingCheckSlot.tagName !== "WJE-CHECKBOX") {
      return;
    }
    if (existingCheckSlot && existingCheckSlot.tagName === "WJE-CHECKBOX") {
      const isSelectedExisting = option.hasAttribute("selected");
      existingCheckSlot.checked = isSelectedExisting;
      if (isSelectedExisting) {
        existingCheckSlot.setAttribute("checked", "");
      } else {
        existingCheckSlot.removeAttribute("checked");
      }
      return;
    }
    let icon = (_a = this.querySelector("template")) == null ? void 0 : _a.content.querySelector('[slot="check"]');
    if (!icon) {
      console.warn('Icon with slot "check" was not found.');
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
    if (this.hasAttribute("invalid")) {
      this.showInvalidMessage();
    }
  }
  disconnectedCallback() {
    document.removeEventListener("mousedown", __privateGet(this, _onMenuItemClickCapture), true);
  }
  /**
   * Syncs ARIA attributes on the host element.
   */
  syncAria() {
    var _a;
    const expanded = ((_a = this.popup) == null ? void 0 : _a.hasAttribute("active")) || this.classList.contains("active");
    this.setAriaState({
      role: "combobox",
      haspopup: "listbox",
      expanded,
      controls: this._ariaListId,
      disabled: this.disabled,
      required: this.required,
      invalid: this.invalid || this.hasAttribute("invalid")
    });
  }
};
_addedOptions = new WeakMap();
_htmlOptions = new WeakMap();
_Select_instances = new WeakSet();
/**
 * Processes the given item and retrieves the corresponding value from the selected options.
 * @param {string} item The key to search for in the selected options.
 * @returns {string} The text content associated with the selected item, or an empty string if not found.
 */
htmlSelectedItem_fn = function(item) {
  var _a;
  const keyValue = "value";
  const textValue = "textContent";
  const value = ((_a = this.selectedOptions.find((option) => option[keyValue] === item)) == null ? void 0 : _a[textValue]) ?? "";
  return this.htmlSelectedItem(value);
};
/**
 * Retrieves the list of selected options within the component.
 * @returns {Array<Element>} An array of elements representing the options that are currently selected.
 */
getSelectedOptions_fn = function() {
  return Array.from(this.querySelectorAll("wje-option[selected]"));
};
_applySearchFilter = new WeakMap();
_onMenuItemClickCapture = new WeakMap();
syncOptionCheckbox_fn = function(option) {
  const checkbox = option.querySelector('wje-checkbox[slot="check"]');
  if (!checkbox) return;
  const isSelected = option.hasAttribute("selected");
  checkbox.checked = isSelected;
  if (isSelected) {
    checkbox.setAttribute("checked", "");
  } else {
    checkbox.removeAttribute("checked");
  }
};
__publicField(_Select, "_instanceId", 0);
let Select = _Select;
Select.define("wje-select", Select);
export {
  Select as default
};
//# sourceMappingURL=wje-select.js.map
