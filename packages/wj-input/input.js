import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

// import styles from './scss/styles.scss?' assert { type: 'css' };
import styles from "./scss/styles.scss?inline";

const template = document.createElement('template');

export class Input extends WJElement {
    constructor(options = {}) {
        super(template);

        this.invalid = false;
        this.pristine = true;
        this.internals = this.attachInternals();
    }

    get customErrorDisplay() {
        return this.hasAttribute('custom-error-display');
    }

    get validateOnChange() {
        return this.hasAttribute('validate-on-change');
    }

    get invalid() {
        return this.hasAttribute('invalid');
    }

    set invalid(isInvalid) {
        isInvalid && this.customErrorDisplay ? this.setAttribute('invalid', '') : this.removeAttribute('invalid');
    }

    get form() {
        return this.internals.form;
    }

    get name() {
        return this.getAttribute('name');
    }

    get type() {
        return this.localName;
    }

    get validity() {
        return this.internals.validity;
    }

    get validationMessage() {
        return this.internals.validationMessage;
    }

    get willValidate() {
        return this.internals.willValidate;
    }

    checkValidity() {
        return this.internals.checkValidity();
    }

    reportValidity() {
        return this.internals.reportValidity();
    }

    static formAssociated = true;

    className = "Input";

    static get myCSSStyleSheet() {
        return styles;
    }

    static get observedAttributes() {
        return [];
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        let hasSlotStart = this.hasSlot(this, "start");
        let hasSlotEnd = this.hasSlot(this, "end");
        let fragment = document.createDocumentFragment();

        // Wrapper
        let div = document.createElement("div");
        div.classList.add("native-input", "default");

        if(this.hasAttribute("invalid"))
            div.classList.add("has-error");

        let wrapper = document.createElement("div");
        wrapper.classList.add("input-wrapper");

        // Label
        let label = document.createElement("label");
        label.innerText = this.label;
        if(this.value && !this.hasAttribute("error"))
            label.classList.add("fade");

        // Input
        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("value", this.value || "");
        input.classList.add("form-control", "pristine");

        if(this.hasAttribute("placeholder"))
            input.setAttribute("placeholder", this.placeholder);

        if(this.hasAttribute("disabled"))
            input.setAttribute("disabled", "");

        if(this.hasAttribute("readonly"))
            input.setAttribute("readonly", "");

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

        // Append elements
        if(hasSlotStart)
            div.appendChild(start);

        wrapper.appendChild(label);
        wrapper.appendChild(input);

        div.appendChild(wrapper);

        if(hasSlotEnd)
            div.appendChild(end);

        div.appendChild(error);

        fragment.appendChild(div);

        this.native = div;
        this.labelElement = label;
        this.input = input;
        this.errorMessage = error;

        return fragment;
    }

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

        // this.validateInput();
    }

    validateInput() {
        const validState = this.input.validity;
        this.invalid = false;

        if(!validState.valid) {
            for(let state in validState) {
                const attr = `message-${state.toString()}`;

                if(validState[state]) {
                    this.validationError = state.toString();
                    this.invalid = !this.pristine && !validState.valid;

                    console.log("validationError:", this.validationError);

                    let errorMessage = this.message;

                    if(!this.hasAttribute("message"))
                        errorMessage = this.hasAttribute(attr) ? this.getAttribute(attr) : this.input.validationMessage;

                    // console.log("errorMessage:", this.hasAttribute(attr), errorMessage, this.validationError);

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

    hasSlot(el, slotName = null) {
        let selector = slotName ? `[slot="${slotName}"]` : "[slot]";

        return el.querySelectorAll(selector).length > 0 ? true : false;
    }
}

customElements.get("wj-input") || window.customElements.define("wj-input", Input);