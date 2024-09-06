import { default as WJElement, event } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * @summary This method dispatches a custom event named "wje-checkbox:change".
 * It is triggered when the input event is fired, which happens when the state of the checkbox changes.
 * The event is dispatched on the current instance of the Checkbox class.
 *
 * @documentation https://elements.webjet.sk/components/checkbox
 * @status stable
 *
 * @extends WJElement
 *
 * @slot - The checkbox main content.
 *
 * @part native - The component's native wrapper.
 *
 * --wje-button-border-radius: var(--wje-border-radius-medium);
 *   --wje-button-border-width: 1px;
 *   --wje-button-border-style: solid;
 *   --wje-button-border-color: var(--wje-color-contrast-1);
 *   --wje-button-margin-inline: 0;
 *
 * @cssproperty [--wje-checkbox-border-radius=--wje-border-radius-medium] - Border radius of the component;
 * @cssproperty [--wje-checkbox-border-width=1px] - Border width of the component;
 * @cssproperty [--wje-checkbox-border-style=solid] - Border style of the component;
 * @cssproperty [--wje-checkbox-border-color=--wje-color-contrast-1] - Border color of the component;
 * @cssproperty [--wje-checkbox-margin-inline=0] - Margin inline of the component;
 *
 * @fires wje-checkbox:change - Dispatched when the checkbox state changes.
 */
export default class Checkbox extends WJElement {
    /**
     * Checkbox constructor.
     */
    constructor() {
        super();
        this.internals = this.attachInternals();
    }

    /**
     * Setter for the value attribute.
     * @param {string} value - The value to set.
     */
    set value(value) {
        debugger
        this.internals.setFormValue(value);

        if (this.input)
            this.input.value = value;
    }

    /**
     * Getter for the value attribute.
     * @returns {string} The value of the attribute.
     */
    get value() {
        debugger
        return this.input?.value || "";
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
        isInvalid ? this.setAttribute('invalid', '') : this.removeAttribute('invalid');
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
     * @summary Set checked attribute
     * @returns {boolean} true if the toggle is checked, false otherwise
     */
    set disabled(value) {
        if (value)
            this.setAttribute("disabled", "");
        else
            this.removeAttribute("disabled");
    }

    /**
     * @summary Get disabled attribute
     * @returns {boolean} true if the toggle is disabled, false otherwise
     */
    get disabled() {
        return this.hasAttribute("disabled");
    }

    /**
    * @summary Set checked attribute
    * @returns {boolean} true if the toggle is checked, false otherwise
    */
    set checked(value) {
        if (value)
            this.setAttribute("checked", "");
        else
            this.removeAttribute("checked");
    }

    /**
     * @summary Get checked attribute
     * @returns {boolean} true if the toggle is checked, false otherwise
     */
    get checked() {
        return this.hasAttribute("checked");
    }

    /**
     * The class name.
     */
    className = "Checkbox";

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
     * Whether the input is associated with a form.
     * @type {boolean}
     */
    static formAssociated = true;


    /**
     * Sets up the attributes for the checkbox.
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Draws the checkbox.
     * @param {object} context - The context.
     * @param {object} store - The store.
     * @param {object} params - The parameters.
     * @returns {DocumentFragment} The created fragment.
     */
    draw(context, store, params) {
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
    disconnectedCallback() {
        event.removeElement(this.input);
    }

    /**
     * @summary Callback function that is called when the custom element is associated with a form.
     * This function adds an event listener to the form's submit event, which validates the input and propagates the validation.
     * @param {HTMLFormElement} form - The form the custom element is associated with.
     */
    formAssociatedCallback(form) {
        form.addEventListener('submit', () => {
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