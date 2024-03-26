import { default as WJElement, event } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * @summary This class represents a custom input element. It extends the WJElement class and provides additional functionality for handling input.
 * @documentation https://elements.webjet.sk/components/input
 * @status stable
 *
 * @extends WJElement
 *
 * @csspart native - The native part.
 * @csspart input - The input part.
 * @csspart clear - The clear part.
 *
 *
 * @slot start - Slot for content at the start of the input.
 * @slot end - Slot for content at the end of the input.
 *
 * @cssproperty [--wje-input-font-family=var(--wje-font-family)] - The font family of the input.
 * @cssproperty [--wje-input-background-color=var(--wje-background)] - The background color of the input.
 * @cssproperty [--wje-input-color=var(--wje-color)] - The color of the input text.
 * @cssproperty [--wje-input-color-invalid=var(--wje-color-danger)] - The color of the input text when invalid.
 * @cssproperty [--wje-input-border-color=var(--wje-border-color)] - The border color of the input.
 * @cssproperty [--wje-input-border-color-focus=var(--wje-color-primary)] - The border color of the input when focused.
 * @cssproperty [--wje-input-border-width=1px] - The border width of the input.
 * @cssproperty [--wje-input-border-style=solid] - The border style of the input.
 * @cssproperty [--wje-input-border-radius=4px] - The border radius of the input.
 * @cssproperty [--wje-input-margin-bottom=.5rem] - The margin bottom of the input.
 * @cssproperty [--wje-input-line-height=20px] - The line height of the input.
 * @cssproperty [--wje-input-slot-padding-inline=.5rem] - The padding inline of the input slot.
 *
 * @fires wje-input:input - Dispatched when the input value changes.
 * @fires wje-input:clear - Dispatched when the input is cleared.
 */
export default class Input extends WJElement {
    /**
     * Constructor for the Input class.
     * @param {Object} options - The options for the Input class.
     */
    constructor(options = {}) {
        super();

        this.invalid = false;
        this.pristine = true;
        this.internals = this.attachInternals();
    }

    /**
     * Setter for the value attribute.
     * @param {string} value - The value to set.
     */
    set value(value) {
        this.setAttribute("value", value);
    }

    /**
     * Getter for the value attribute.
     * @returns {string} The value of the attribute.
     */
    get value() {
        return this.getAttribute("value") || "";
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
        isInvalid && this.customErrorDisplay ? this.setAttribute('invalid', '') : this.removeAttribute('invalid');
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
     * Checks the validity of the input.
     * @returns {boolean} Whether the input is valid.
     */
    checkValidity() {
        return this.internals.checkValidity();
    }

    /**
     * Reports the validity of the input.
     * @returns {boolean} Whether the input is valid.
     */
    reportValidity() {
        return this.internals.reportValidity();
    }

    /**
     * Whether the input is associated with a form.
     * @type {boolean}
     */
    static formAssociated = true;

    /**
     * The class name of the input.
     * @type {string}
     */
    className = "Input";

    /**
     * Getter for the cssStyleSheet attribute.
     * @returns {CSSStyleSheet} The CSS style sheet of the input.
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Getter for the observedAttributes attribute.
     * @returns {Array} The attributes to observe for changes.
     */
    static get observedAttributes() {
        return ["value"];
    }

    /**
     * Sets up the attributes for the input.
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Draws the input.
     * @param {CanvasRenderingContext2D} context - The context to draw on.
     * @param {Object} store - The store to use.
     * @param {Object} params - The parameters to use.
     * @returns {DocumentFragment} The drawn input.
     */
    draw(context, store, params) {
        let hasSlotStart = this.hasSlot(this, "start");
        let hasSlotEnd = this.hasSlot(this, "end");
        let fragment = document.createDocumentFragment();

        // Wrapper
        let native = document.createElement("div");
        native.setAttribute("part", "native");
        native.classList.add("native-input", this.variant || "default");

        if(this.hasAttribute("invalid"))
            native.classList.add("has-error");

        let wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");

        let inputWrapper = document.createElement("div");
        inputWrapper.classList.add("input-wrapper");

        // Label
        let label = document.createElement("label");
        label.innerText = this.label;
        if(this.value && !this.hasAttribute("error"))
            label.classList.add("fade");

        // Input
        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("part", "input");
        input.setAttribute("value", this.value || "");
        input.classList.add("form-control");

        if(this.hasAttribute("placeholder"))
            input.setAttribute("placeholder", this.placeholder);

        if(this.hasAttribute("multiple"))
            input.setAttribute("multiple", this.multiple);

        if(this.hasAttribute("disabled"))
            input.setAttribute("disabled", "");

        if(this.hasAttribute("readonly"))
            input.setAttribute("readonly", "");

        if(this.hasAttribute("maxlength"))
            input.setAttribute("maxlength", this.maxlength);

        if(this.hasAttribute("max"))
            input.setAttribute("max", this.max);

        if(this.hasAttribute("min"))
            input.setAttribute("min", this.min);

        // Error
        let error = document.createElement("div");
        error.classList.add("error-message");

        let start = null;
        if(hasSlotStart) {
            start = document.createElement("slot");
            start.setAttribute("name", "start");
        }

        let end = null;
        if(hasSlotEnd) {
            end = document.createElement("slot");
            end.setAttribute("name", "end");
        }

        if(hasSlotStart) {
            wrapper.appendChild(start);
            native.classList.add("has-start");
        }

        if(this.variant === "standard") {
            if(this.label)
                native.appendChild(label);
        } else {
            inputWrapper.appendChild(label);
        }

        inputWrapper.appendChild(input);

        wrapper.appendChild(inputWrapper);

        native.appendChild(wrapper);

        if(this.hasAttribute("clearable")) {
            this.clear = document.createElement("wje-button");
            this.clear.classList.add("clear");
            this.clear.setAttribute("fill", "link")
            this.clear.setAttribute("part", "clear");

            let clearIcon = document.createElement("wje-icon");
            clearIcon.setAttribute("name", "x");

            this.clear.appendChild(clearIcon);

            inputWrapper.appendChild(this.clear);
        }

        if(hasSlotEnd) {
            wrapper.appendChild(end);
            native.classList.add("has-end");
        }

        native.appendChild(error);

        fragment.appendChild(native);

        this.native = native;
        this.labelElement = label;
        this.input = input;
        this.errorMessage = error;

        return fragment;
    }

    /**
     * Runs after the input is drawn.
     */
    afterDraw() {
        [
            'type',
            'value',
            'placeholder',
            'required',
            'min',
            'max',
            'minLength',
            'maxLength',
            'pattern'
        ].forEach((attr) => {
            const attrValue = attr === 'required' ? this.hasAttribute(attr) : this.getAttribute(attr);
            if(attrValue !== null && attrValue !== undefined) {
                this.input[attr] = attrValue;
            }
        });

        this.input.addEventListener("focus", (e) => {
            this.labelElement.classList.add("fade");
            this.native.classList.add("focused");
        });

        this.input.addEventListener("blur", (e) => {
            this.native.classList.remove("focused");
            if(!e.target.value)
                this.labelElement.classList.remove("fade")
        });

        this.input.addEventListener('input', (e) => {
            if(this.validateOnChange) {
                this.pristine = false;
            }
            this.input.classList.remove("pristine");

            this.labelElement.classList.add("fade");

            const clone = new e.constructor(e.type, e);
            this.dispatchEvent(clone);

            this.validateInput();

            event.dispatchCustomEvent(this, "wje-input:input", {
                value: this.input.value
            });
        });

        this.addEventListener('invalid', (e) => {
            this.invalid = true;
            this.pristine = false;

            this.errorMessage.textContent = this.internals.validationMessage;

            if(this.customErrorDisplay) {
                e.preventDefault();
            }
        });

        this.addEventListener('focus', () => this.input.focus());

        if(this.clear) {
            this.clear.addEventListener("wje-button:click", (e) => {
                this.input.value = "";
                event.dispatchCustomEvent(this.clear, "wje-input:clear");
            });
        }
    }

    /**
     * Validates the input.
     */
    validateInput() {
        const validState = this.input.validity;
        this.invalid = false;

        if(!validState.valid) {
            for(let state in validState) {
                const attr = `message-${state.toString()}`;

                if(validState[state]) {
                    this.validationError = state.toString();
                    this.invalid = !this.pristine && !validState.valid;

                    let errorMessage = this.message;

                    if(!this.hasAttribute("message"))
                        errorMessage = this.hasAttribute(attr) ? this.getAttribute(attr) : this.input.validationMessage;

                    this.internals.setValidity(
                      {[this.validationError]: true},
                      errorMessage
                    );

                    if(this.invalid && this.customErrorDisplay) {
                        this.dispatchEvent(new Event('invalid'));
                    }
                }
            }
        }
        else {
            this.internals.setValidity({});
            this.pristine = false;
            this.errorMessage.textContent = this.input.validationMessage;
        }
    }

    /**
     * Checks whether the input has a slot.
     * @param {HTMLElement} el - The element to check.
     * @param {string} slotName - The name of the slot to check for.
     * @returns {boolean} Whether the input has the slot.
     */
    hasSlot(el, slotName = null) {
        let selector = slotName ? `[slot="${slotName}"]` : "[slot]";

        return el.querySelectorAll(selector).length > 0 ? true : false;
    }
}