class FormInput extends HTMLElement {
static formAssociated = true;

constructor() {
super();

    this.invalid = false;
    this.pristine = true;
    this.internals = this.attachInternals();
console.log("INTERNALS", this.internals.form)
const shadowRoot = this.attachShadow({mode: 'open'});

    shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
        }
        input {
          display: block;
          padding: 5px;
        }
      </style>
      <input type="text">
    `;
}

connectedCallback() {
this.input = this.shadowRoot.querySelector('input');
// set the required properties (constraints) on the internal
// <input>
[
'type',
'value',
'placeholder',
'required',
'min',
'max',
'minLength',  // <-- camelCase!
'maxLength',  // <-- camelCase!
'pattern'
].forEach((attr) => {
const attrValue = attr === 'required' ? this.hasAttribute(attr) : this.getAttribute(attr);

      if(attrValue !== null && attrValue !== undefined) {
        this.input[attr] = attrValue;
      }
    });

    this.input.addEventListener('change', (e) => {
      if(this.validateOnChange) {
        this.pristine = false;
      }

      // we also want to dispatch a `change` event from
      // our custom element
      const clone = new e.constructor(e.type, e);
      this.dispatchEvent(clone);

      // set the element's validity whenever the value of the
      // <input> changes
      this.validateInput();
    });

    this.addEventListener('invalid', (e) => {
      this.invalid = true;
      this.pristine = false;

      // when a custom error needs to be displayed, 
      // prevent the native error from showing
      if(this.customErrorDisplay) {
        e.preventDefault();
      }
    });

    this.addEventListener('focus', () => this.input.focus());

    if (!this.hasAttribute('tabindex')) {
      this.setAttribute('tabindex', '0');
    }

    // set the initial validity of the component
    this.validateInput();
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

get value() {
return this.input.value;
}

set value(value) {
this.input.value = value;
this.internals.setFormValue(value);
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

validateInput() {
// get the validity of the internal <input>
const validState = this.input.validity;

    // reset this.invalid before validating again
    this.invalid = false;

    // if the input is invalid, show the correct error
    if(!validState.valid) {
      // loop through the error reasons
      for(let state in validState) {
        // get the name of the data attribute that holds the
        //error message
        const attr = `data-${state.toString()}`;
        // if there is an error and corresponding attribute holding
        // the message
        if(validState[state]) {
          this.validationError = state.toString();
          this.invalid = !this.pristine && !validState.valid;

          // get the correct error message
          const errorMessage = this.hasAttribute(attr) ?
            this.getAttribute(attr) : this.input.validationMessage;
          // set the validity error reason and the corresponding
          // message
          this.internals.setValidity(
            {[this.validationError]: true},
            errorMessage
          );

          // when a custom error needs to be displayed, 
          // dispatch the 'invalid' event manually so consuming code
          // can use this as a hook to get the correct error message 
          // and display it
          if(this.invalid && this.customErrorDisplay) {
            this.dispatchEvent(new Event('invalid'));
          }
        }
      }
    }
    else {
      this.internals.setValidity({});
    }
}
}

customElements.define('form-input', FormInput)

const form = document.querySelector('form');
const input = document.querySelector('form-input');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', (e) => {
e.preventDefault();
});

input.addEventListener('invalid', (e) => {
errorMessage.textContent = input.validationMessage;
});