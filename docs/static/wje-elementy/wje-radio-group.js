var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
import Radio from "./wje-radio.js";
const styles = "/*\n[ WJ Radio Group ]\n*/\n\n.wje-inline {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 0.5rem;\n}\n";
class RadioGroup extends WJElement {
  /**
   * Creates an instance of RadioGroup.
   * @class
   */
  constructor() {
    super();
    __publicField(this, "className", "RadioGroup");
    this.internals = this.attachInternals();
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
   * Setter for the value attribute.
   * @param {string} value The value to set.
   */
  set value(value) {
    if (this.checkRadio(value)) {
      this.setAttribute("value", value);
      this.internals.setFormValue(value);
    }
  }
  /**
   * Getter for the value attribute.
   * @returns {string} The value of the attribute.
   */
  get value() {
    return this.getAttribute("value");
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
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draws the component for the radio group.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.classList.add("native-radio-group", this.hasAttribute("inline") ? "wje-inline" : "ddd");
    let slot = document.createElement("slot");
    let label = document.createElement("label");
    label.innerText = this.label;
    if (this.value && !this.hasAttribute("error")) label.classList.add("fade");
    if (this.label) {
      native.appendChild(label);
    }
    native.appendChild(slot);
    fragment.appendChild(native);
    return fragment;
  }
  /**
   * Adds event listeners after the component is drawn. Handles the selection of radio buttons.
   */
  afterDraw() {
    this.checkRadio(this.value);
    this.addEventListener("wje-radio:input", (e) => {
      if (this.checkRadio(e.detail.context.value)) {
        this.value = e.detail.context.value;
      }
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
  checkRadio(value) {
    this.removeCheck();
    const radio = this.getRadioByValue(value);
    if (radio) {
      radio.checked = true;
      return true;
    }
    console.error(`Radio with value ${value} not found`);
    return false;
  }
  /**
   * Retrieves all direct child elements of the current element.
   * @returns {HTMLElement[]} An array of child elements.
   */
  getAllElements() {
    return Array.from(this.children);
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
__publicField(RadioGroup, "formAssociated", true);
RadioGroup.define("wje-radio-group", RadioGroup);
export {
  RadioGroup as default
};
