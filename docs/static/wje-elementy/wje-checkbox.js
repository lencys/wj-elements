var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement, { event } from "./wje-element.js";
const styles = `/*
[ Checkbox ]
*/

:host {
    display: block;
    margin-top: var(--wje-checkbox-margin-top);
    margin-bottom: var(--wje-checkbox-margin-bottom);
    margin-inline: var(--wje-checkbox-margin-inline);
    line-height: 100%;
    padding-left: 0;

    label {
        display: flex;
        align-items: center;
        cursor: pointer;
        position: relative;
        padding-left: calc(var(--wje-checkbox-size) + 0.5rem);
        /*min-width: var(--wje-checkbox-size);*/
        min-height: var(--wje-checkbox-size);
        margin-bottom: 0;
        &:before {
            content: '';
            position: absolute;
            width: var(--wje-checkbox-size);
            height: var(--wje-checkbox-size);
            left: 0;
            -webkit-box-sizing: inherit;
            box-sizing: border-box;
            background-color: var(--wje-color-contrast-0);
            border-width: 1px;
            border-style: solid;
            border-color: var(--wje-color-contrast-3);
        }
    }
}

.native-checkbox {
    label {
        &:hover {
            color: var(--wje-color-contrast-11);
        }

        &:before {
            border-radius: var(--wje-checkbox-border-radius);
        }
    }

    input[type='checkbox'] {
        position: absolute;
        margin: 0;
        z-index: -1;
        width: 16px;
        height: 16px;
        opacity: 0;
        display: none;
        & + label {
            &::after {
                content: '';
                position: absolute;
                left: 0;
                border-right: 0 solid transparent;
                border-bottom: 0 solid transparent;
                width: var(--wje-checkbox-size);
                height: var(--wje-checkbox-size);
                overflow: hidden;
            }
        }
    }

    input[type='checkbox']:checked + label::after {
        content: '';
        mask-image: var(--wje-checkbox-checkmark);
        mask-size: var(--wje-checkbox-size);
        background-color: var(--wje-color-primary-9);
    }

    /* Disabled */
    input[type='checkbox'][disabled] {
        & + label {
            cursor: not-allowed !important;
            color: var(--wje-color-contrast-8);
            opacity: 0.58;

            &:before {
                background: var(--wje-color-contrast-2);
            }
            &:after {
                background: transparent;
            }
        }
    }

    input[type='checkbox']:checked[disabled] {
        & + label {
            cursor: not-allowed !important;
            color: var(--wje-color-contrast-8);
            opacity: 0.58;

            &:before {
                background: var(--wje-color-contrast-2);
            }
            &:after {
                background: var(--wje-color-contrast-5);
            }
        }
    }

    /* Indeterminate */
    input[type='checkbox']:not(:checked):indeterminate {
        & + label {
            &:after {
                content: '';
                mask-image: var(--wje-checkbox-interminate);
                mask-size: var(--wje-checkbox-size);
                background-color: var(--wje-color-primary-9);
            }
        }
    }
}

:host([variant='circle']) {
    label {
        &:after {
            border-radius: 99px;
        }

        &:before {
            border-radius: 99px;
        }
    }
}

:host([placement='end']) {
    label {
        padding-left: 0;
        padding-right: 26px;

        &:before {
            right: 0;
            left: auto;
        }
    }

    input[type='checkbox']:checked {
        & + label {
            position: relative;

            &::after {
                position: absolute;
                right: 0;
                left: auto;
            }
        }
    }
}

/*Colors*/

:host([color='primary']) {
    input[type='checkbox']:checked + label::after,
    input[type='checkbox']:indeterminate + label:after {
        background-color: var(--wje-color-contrast-0);
    }
    :is(input[type='checkbox']:checked + label)::before,
    :is(input[type='checkbox']:indeterminate + label)::before {
        border-color: var(--wje-color-primary-9);
        background-color: var(--wje-color-primary-9);
    }
}

:host([color='complete']) {
    input[type='checkbox']:checked + label::after,
    input[type='checkbox']:indeterminate + label:after {
        background-color: var(--wje-color-contrast-0);
    }
    :is(input[type='checkbox']:checked + label)::before,
    :is(input[type='checkbox']:indeterminate + label)::before {
        border-color: var(--wje-color-complete-9);
        background-color: var(--wje-color-complete-9);
    }
}

:host([color='success']) {
    input[type='checkbox']:checked + label::after,
    input[type='checkbox']:indeterminate + label:after {
        background-color: var(--wje-color-contrast-0);
    }
    :is(input[type='checkbox']:checked + label)::before,
    :is(input[type='checkbox']:indeterminate + label)::before {
        border-color: var(--wje-color-success-9);
        background-color: var(--wje-color-success-9);
    }
}

:host([color='warning']) {
    input[type='checkbox']:checked + label::after,
    input[type='checkbox']:indeterminate + label:after {
        background-color: var(--wje-color-contrast-0);
    }
    :is(input[type='checkbox']:checked + label)::before,
    :is(input[type='checkbox']:indeterminate + label)::before {
        border-color: var(--wje-color-warning-9);
        background-color: var(--wje-color-warning-9);
    }
}

:host([color='danger']) {
    input[type='checkbox']:checked + label::after,
    input[type='checkbox']:indeterminate + label:after {
        background-color: var(--wje-color-contrast-0);
    }
    :is(input[type='checkbox']:checked + label)::before,
    :is(input[type='checkbox']:indeterminate + label)::before {
        border-color: var(--wje-color-danger-9);
        background-color: var(--wje-color-danger-9);
    }
}

:host([color='info']) {
    input[type='checkbox']:checked + label::after,
    input[type='checkbox']:indeterminate + label:after {
        background-color: var(--wje-color-contrast-0);
    }
    :is(input[type='checkbox']:checked + label)::before,
    :is(input[type='checkbox']:indeterminate + label)::before {
        border-color: var(--wje-color-info-9);
        background-color: var(--wje-color-info-9);
    }
}

/*input[type="checkbox"]:checked + label {*/
/*  .info > *::after,*/
/*  .danger > *::after,*/
/*  .complete > *::after,*/
/*  .primary > *::after,*/
/*  .success > *::after {*/
/*    background: var(--wje-white-check-icon);*/
/*  }*/
/*}*/

/*input[type="checkbox"]:indeterminate + label {*/
/*  .info > *::after,*/
/*  .danger > *::after,*/
/*  .complete > *::after,*/
/*  .primary > *::after,*/
/*  .success > *::after {*/
/*    background-color: var(--wje-color-contrast-0);*/
/*  }*/
/*}*/

/* hide focus style if not from keyboard navigation */
/*.js-focus-visible .native-checkbox input[type="checkbox"]:focus:not(.focus-visible) + label:before {*/
/*  box-shadow: none;*/
/*}*/

/*input[type="checkbox"] {*/
/*  accent-color: var(--wje-color-primary) !important;*/
/*  font-size: 50px;*/
/*}*/
`;
class Checkbox extends WJElement {
  /**
   * Checkbox constructor method.
   */
  constructor() {
    super();
    /**
     * The class name for the Checkbox.
     */
    __publicField(this, "className", "Checkbox");
    this.internals = this.attachInternals();
  }
  /**
   * Setter for the value attribute.
   * @param {string} value The value to set.
   */
  set value(value) {
    this.internals.setFormValue(value);
    if (this.input) this.input.value = value;
  }
  /**
   * Getter for the value attribute.
   * @returns {string} The value of the attribute.
   */
  get value() {
    var _a;
    return ((_a = this.input) == null ? void 0 : _a.value) || "";
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
   * Setter for the invalid attribute.
   * @param {boolean} isInvalid Whether the input is invalid.
   */
  set invalid(isInvalid) {
    if (isInvalid) this.setAttribute("invalid", "");
    else this.removeAttribute("invalid");
  }
  /**
   * Getter for the invalid attribute.
   * @returns {boolean} Whether the attribute is present.
   */
  get invalid() {
    return this.hasAttribute("invalid");
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
   * Getter for the defaultValue attribute.
   * This method retrieves the 'value' attribute of the custom input element.
   * The 'value' attribute represents the default value of the input element.
   * If the 'value' attribute is not set, it returns an empty string.
   * @returns {string} The default value of the input element.
   */
  get defaultValue() {
    return this.getAttribute("value") ?? "";
  }
  /**
   * Setter for the defaultValue attribute.
   * This method sets the 'value' attribute of the custom input element to the provided value.
   * The 'value' attribute represents the default value of the input element.
   * @param {string} value The value to set as the default value.
   */
  set defaultValue(value) {
    this.setAttribute("value", value);
  }
  /**
   * Set checked attribute.
   * @param {boolean} value true if the toggle is checked, false otherwise
   */
  set disabled(value) {
    if (value) this.setAttribute("disabled", "");
    else this.removeAttribute("disabled");
  }
  /**
   * Get disabled attribute value.
   * @returns {boolean} true if the toggle is disabled, false otherwise
   */
  get disabled() {
    return this.hasAttribute("disabled");
  }
  /**
   * Set checked attribute.
   * @param {boolean} value true if the toggle is checked, false otherwise
   */
  set checked(value) {
    if (value) this.setAttribute("checked", "");
    else this.removeAttribute("checked");
  }
  /**
   * Get checked attribute.
   * @returns {boolean} true if the toggle is checked, false otherwise
   */
  get checked() {
    return this.hasAttribute("checked");
  }
  /**
   * Getter for the CSS stylesheet.
   * @returns {string} The CSS stylesheet.
   */
  static get cssStyleSheet() {
    return styles;
  }
  static get observedAttributes() {
    return ["checked", "disabled", "value"];
  }
  /**
   * Sets up the attributes for the checkbox.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draws the checkbox element.
   * @returns {DocumentFragment} The created fragment.
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.setAttribute("part", "native");
    native.classList.add("native-checkbox");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.id = "checkbox";
    input.name = this.name || "checkbox";
    input.checked = this.hasAttribute("checked");
    input.disabled = this.hasAttribute("disabled");
    input.indeterminate = this.hasAttribute("indeterminate");
    let label = document.createElement("label");
    label.htmlFor = "checkbox";
    label.innerHTML = "<slot></slot>";
    native.appendChild(input);
    native.appendChild(label);
    this.input = input;
    fragment.appendChild(native);
    return fragment;
  }
  /**
   * Adds an event listener after drawing the checkbox.
   */
  afterDraw() {
    if (!this.disabled) {
      this.input.addEventListener("input", (e) => {
        this.value = e.target.checked;
        this.checked = e.target.checked;
        event.dispatchCustomEvent(this, "wje-toggle:input");
      });
      this.input.addEventListener("change", (e) => {
        this.value = e.target.checked;
        this.checked = e.target.checked;
        event.dispatchCustomEvent(this, "wje-toggle:change");
      });
    }
  }
  /**
   * Removes the event listener when the checkbox is disconnected.
   */
  beforeDisconnect() {
    event.removeElement(this.input);
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
__publicField(Checkbox, "formAssociated", true);
WJElement.define("wje-checkbox", Checkbox);
export {
  Checkbox as default
};
