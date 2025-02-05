var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement, { event } from "./wje-element.js";
import Button from "./wje-button.js";
import "./wje-popup.js";
import Icon from "./wje-icon.js";
import Label from "./wje-label.js";
import Chip from "./wje-chip.js";
import Input from "./wje-input.js";
import Option from "./wje-option.js";
import Options from "./wje-options.js";
import { P as Popup } from "./popup.element-4DNn6DjX.js";
const styles = "/*\n[ WJ Select ]\n*/\n\n:host {\n    --wje-select-border-width: 1px;\n    --wje-select-border-style: solid;\n    --wje-select-border-color: var(--wje-border-color);\n\n    --wje-select-options-border-width: 1px;\n    --wje-select-options-border-style: var(--wje-border-style);\n    --wje-select-options-border-color: var(--wje-border-color);\n\n    --wje-select-background: var(--wje-background);\n    --wje-select-line-height: 20px;\n    --wje-select-color: var(--wje-color);\n    --wje-select-border-radius: var(--wje-border-radius-medium);\n\n    --wje-select-margin-bottom: 0.5rem;\n    margin-bottom: var(--wje-select-margin-bottom);\n\n    width: 100%;\n    display: block;\n    [slot='arrow'] {\n        transform: rotate(0deg);\n        transition: all 0.2s ease-in;\n    }\n}\n\n.native-select {\n    &.default {\n        .wrapper {\n            display: block;\n            border-width: var(--wje-select-border-width);\n            border-style: var(--wje-select-border-style);\n            border-color: var(--wje-select-border-color);\n            border-radius: var(--wje-select-border-radius);\n            padding-inline: 0.5rem;\n            padding-top: 0.125rem;\n            padding-bottom: 0.125rem;\n        }\n        .input-wrapper {\n            padding: 0;\n            min-height: 28px;\n            margin-top: -4px;\n        }\n        &.focused {\n            wje-label {\n                opacity: 0.67;\n                font-size: 12px;\n                letter-spacing: normal;\n            }\n        }\n        wje-label {\n            margin: 0;\n            display: block;\n            opacity: 1;\n            cursor: text;\n            transition: opacity 0.2s ease 0s;\n            line-height: var(--wje-select-line-height);\n            &.fade {\n                opacity: 0.5;\n                font-size: 12px;\n                letter-spacing: normal;\n            }\n        }\n    }\n    &.standard {\n        .wrapper {\n            background-color: var(--wje-select-background);\n            border-width: var(--wje-select-border-width);\n            border-style: var(--wje-select-border-style);\n            border-color: var(--wje-select-border-color);\n            border-radius: var(--wje-select-border-radius);\n        }\n        .input-wrapper {\n            background: transparent;\n            width: 100%;\n        }\n    }\n}\n\n.wrapper {\n    display: flex;\n    width: 100%;\n}\n\n.input-wrapper {\n    display: grid;\n    grid-template-columns: auto 1fr auto auto auto;\n    align-items: center;\n    background-color: var(--wje-select-background);\n    min-height: 28px;\n    color: var(--wje-select-color);\n    line-height: var(--wje-select-line-height);\n    appearance: none;\n    padding: 2px 0.5rem;\n    font-size: 14px !important;\n    font-weight: normal;\n    vertical-align: middle;\n}\n\ninput {\n    color: var(--wje-select-color);\n    line-height: var(--wje-select-line-height);\n    font-size: 14px !important;\n    font-weight: 400;\n    letter-spacing: 0.01em;\n    border: medium;\n    height: 25px;\n    min-height: 25px;\n    padding: 0;\n    background: none;\n    box-shadow: none;\n    width: 100%;\n    outline: 0;\n    font-size: 14px !important;\n}\n\n::placeholder {\n    opacity: 1;\n}\n\n:host [active] {\n    .wrapper {\n        border-radius: var(--wje-select-border-radius) var(--wje-select-border-radius) 0 0;\n    }\n    [slot='arrow'] {\n        transform: rotate(180deg);\n        transition: all 0.2s ease-in;\n    }\n}\n\n.options-wrapper {\n    border-width: var(--wje-select-options-border-width);\n    border-style: var(--wje-select-options-border-style);\n    border-color: var(--wje-select-options-border-color);\n    border-radius: 0 0 var(--wje-select-border-radius) var(--wje-select-border-radius);\n    margin-top: calc(0px - var(--wje-select-border-width));\n    background: var(--wje-select-background);\n    overflow: hidden;\n}\n\n.find {\n    --wje-input-border-radius: 0;\n    --wje-input-border-width: 0 0 1px 0;\n}\n\n.list {\n    overflow: auto;\n    height: 100%;\n}\n\n.options-wrapper:has(.find) .list {\n    height: calc(100% - 32px - 0.5rem);\n}\n\n:host([multiple]) input {\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 0;\n    width: 0;\n    height: 0;\n    opacity: 0;\n}\n\n:host([multiple]) .chips {\n    display: flex;\n    flex: 1;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n:host([disabled]) .input-wrapper {\n    opacity: 0.5;\n    pointer-events: none;\n    cursor: not-allowed;\n}\n\n.counter {\n    padding-inline: 0.5rem;\n}\n\nwje-chip {\n    --wje-chip-margin: 0 0.25rem 0 0;\n}\n\nwje-button {\n    --wje-padding-top: 0.25rem;\n    --wje-padding-start: 0.25rem;\n    --wje-padding-end: 0.25rem;\n    --wje-padding-bottom: 0.25rem;\n    --wje-button-margin-inline: 0 0.25rem;\n}\n\n.slot-start,\n.slot-end {\n    &:not(:empty) {\n        margin-right: 0.5rem;\n    }\n}\n";
class Select extends WJElement {
  /**
   * Creates an instance of Select.
   */
  constructor() {
    super();
    __publicField(this, "dependencies", {
      "wje-button": Button,
      "wje-popup": Popup,
      "wje-icon": Icon,
      "wje-label": Label,
      "wje-chip": Chip,
      "wje-input": Input,
      "wje-option": Option,
      "wje-options": Options
    });
    __publicField(this, "className", "Select");
    /**
     * Handles the option change event.
     * @param {Event} e The event.
     */
    __publicField(this, "optionChange", (e) => {
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
    });
    /**
     * Handles the chip remove event.
     * @param {Event} e The event.
     */
    __publicField(this, "removeChip", (e) => {
      let option = e.target.option;
      option.selected = false;
      option.removeAttribute("selected");
      e.target.parentNode.removeChild(e.target);
      this.selections();
    });
    this._selected = [];
    this.counterEl = null;
    this.internals = this.attachInternals();
  }
  /**
   * Setter for the value attribute.
   * @param {string} value The value to set.
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
    return this.hasAttribute("custom-error-display");
  }
  /**
   * Getter for the validateOnChange attribute.
   * @returns {boolean} Whether the attribute is present.
   */
  get validateOnChange() {
    return this.hasAttribute("validate-on-change");
  }
  /**
   * Getter for the invalid attribute.
   * @returns {boolean} Whether the attribute is present.
   */
  get invalid() {
    return this.hasAttribute("invalid");
  }
  /**
   * Setter for the invalid attribute.
   * @param {boolean} isInvalid Whether the input is invalid.
   */
  set invalid(isInvalid) {
    if (isInvalid) this.setAttribute("invalid", "");
    else this.removeAttribute("invalid");
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
    return this.getAttribute("name");
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
    return this.getAttribute("value") ?? "";
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
    return ["active", "value"];
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
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
    let label = document.createElement("wje-label");
    label.innerText = this.label || "";
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
    let optionsWrapper = document.createElement("div");
    optionsWrapper.setAttribute("part", "options-wrapper");
    optionsWrapper.classList.add("options-wrapper");
    optionsWrapper.style.setProperty("height", this.maxHeight || "auto");
    let list = document.createElement("div");
    list.classList.add("list");
    let slot = document.createElement("slot");
    let clear = document.createElement("wje-button");
    clear.setAttribute("fill", "link");
    clear.setAttribute("part", "clear");
    let clearIcon = document.createElement("wje-icon");
    clearIcon.setAttribute("name", "x");
    clear.appendChild(clearIcon);
    let popup = document.createElement("wje-popup");
    popup.setAttribute("placement", "bottom-start");
    popup.setAttribute("manual", "");
    popup.setAttribute("size", "");
    if (this.hasAttribute("disabled")) popup.setAttribute("disabled", "");
    if (this.variant === "standard") {
      if (this.hasAttribute("label")) native.appendChild(label);
    } else {
      wrapper.appendChild(label);
    }
    inputWrapper.appendChild(slotStart);
    inputWrapper.appendChild(input);
    if (this.hasAttribute("multiple")) inputWrapper.appendChild(chips);
    if (this.hasAttribute("clearable")) inputWrapper.appendChild(clear);
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
    if (this.trigger === "click") popup.setAttribute("manual", "");
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
   */
  afterDraw() {
    this.input.addEventListener("focus", (e) => {
      this.labelElement.classList.add("fade");
      this.native.classList.add("focused");
    });
    this.input.addEventListener("blur", (e) => {
      this.native.classList.remove("focused");
      if (!e.target.value) this.labelElement.classList.remove("fade");
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
    if (this.hasAttribute("find") && this.findEl instanceof HTMLElement) {
      event.addListener(this.findEl, "keyup", "", (e) => {
        const optionsElement = this.querySelector("wje-options");
        if (optionsElement && optionsElement.hasAttribute("lazy")) {
          optionsElement.setAttribute("search", e.target.value);
        } else {
          let value = e.target.value.trim().toLowerCase();
          this.getAllOptions().forEach((option) => {
            if (option.textContent.trim().toLowerCase().includes(value)) option.style.display = "block";
            else option.style.display = "none";
          });
        }
      });
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
   * Returns the selected options as HTML.
   * @returns {NodeList} The selected options as HTML.
   */
  getSelectedOptions() {
    return this.querySelectorAll("wje-option[selected]");
  }
  /**
   * Returns the selected options.
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
   * @param {Element} option The option that changed.
   * @param {number} length The length of the selected options.
   */
  selectionChanged(option = null, length = 0) {
    var _a, _b;
    if (this.hasAttribute("multiple")) {
      this.value = this.selectedOptions.map((el) => el.value).reverse();
      if (this.placeholder && length === 0) {
        this.chips.innerHTML = this.placeholder;
        this.input.value = "";
      } else {
        if (this.counterEl instanceof HTMLElement || length > +this.maxOptions) {
          this.counter();
        } else {
          if (option !== null) this.chips.appendChild(this.getChip(option));
        }
      }
    } else {
      let value = (option == null ? void 0 : option.textContent.trim()) || "";
      this.value = (_b = (_a = this.selectedOptions) == null ? void 0 : _a.map((el) => el.value)) == null ? void 0 : _b.at(0);
      this.input.value = value;
      if (option && option instanceof HTMLElement) {
        this.slotStart.innerHTML = "";
        if (option == null ? void 0 : option.querySelector("[slot=start]")) {
          this.slotStart.appendChild(option == null ? void 0 : option.querySelector("[slot=start]").cloneNode(true));
        }
        this.slotEnd.innerHTML = "";
        if (option == null ? void 0 : option.querySelector("[slot=end]")) {
          this.slotEnd.appendChild(option == null ? void 0 : option.querySelector("[slot=end]").cloneNode(true));
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
    let options = this.getSelectedOptions();
    this.selectedOptions = Array.isArray(options) ? options : Array.from(options);
    if (this.selectedOptions.length >= +this.maxOptions) {
      this.counterEl = null;
    }
    if (this.chips) {
      this.chips.innerHTML = "";
    }
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
   * Manages the display of a counter element to indicate the number of items exceeding the maximum allowed options.
   * - If the number of selected items equals the maximum allowed, the counter element is removed.
   * - If the counter element doesn't exist and the number of items exceeds the maximum, it is created and updated.
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
   * Returns a chip element.
   * @param {Element} option The option to get the chip for.
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
    return option;
  }
  /**
   * Adds an option to the select element.
   * @param {any} optionData The data for the option to be added.
   * @param {boolean} [silent] Whether to suppress any events triggered by the addition of the option.
   * @param {object} [map] The mapping object specifying the properties of the option data to be used for the value and text of the option.
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
   * @param {Array | object} optionsData The options data to be added. Can be an array of objects or a single object.
   * @param {boolean} [silent] Indicates whether to trigger events when adding options. Default is false.
   * @param {object} [map] The mapping object that specifies the properties of the options data object. Default is { value: "value", text: "text" }.
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
   * @param {string} value The value of the option to be selected.
   * @param {boolean} [silent] Whether to suppress firing events.
   */
  selectOption(value, silent = false) {
    if (!value) return;
    let option = this.querySelector(`wje-option[value="${value}"]`);
    if (option) {
      option.selected = true;
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
   * @summary Callback function that is called when the custom element is associated with a form.
   * This function adds an event listener to the form's submit event, which validates the input and propagates the validation.
   * @param {HTMLFormElement} form The form the custom element is associated with.
   */
  formAssociatedCallback(form) {
    form == null ? void 0 : form.addEventListener("submit", () => {
    });
  }
  /**
   * The formResetCallback method is a built-in lifecycle callback that gets called when a form gets reset.
   * This method is responsible for resetting the value of the custom input element to its default value.
   * It also resets the form value and validity state in the form internals.
   * @function
   */
  formResetCallback() {
    this.value = this.defaultValue;
    this.internals.setFormValue(this.defaultValue);
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
    this.value = state.value;
    this.internals.setFormValue(state.value);
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
      value: this.value
    };
  }
  /**
   * The formDisabledCallback method is a built-in lifecycle callback that gets called when the disabled state of a form-associated custom element changes.
   * This method is not implemented yet.
   * @param {boolean} disabled The new disabled state of the custom input element.
   * @function
   */
  formDisabledCallback(disabled) {
    console.warn("formDisabledCallback not implemented yet");
  }
}
/**
 * Whether the input is associated with a form.
 * @type {boolean}
 */
__publicField(Select, "formAssociated", true);
Select.define("wje-select", Select);
export {
  Select as default
};
