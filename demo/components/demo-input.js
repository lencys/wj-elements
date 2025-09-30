import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `<h1>Input</h1>
  <div class="container">    
    <!-- VALIDATION IN FORM -->
    
    <h2>Validation in form</h2>
    <div class="playground">
      <div class="content">
        <form name="test-form-1" id="test-form-1">
          <!-- DEFAULT -->
          <h2>Default</h2>
          
          <!-- STANDARD -->
          <h2>Standard</h2>
          <wje-select name="single-select" variant="standard" label="Label" placeholder="Select option" value="option-2" clearable required multiple>
            <wje-option value="option-1">Option 1</wje-option>
            <wje-option value="option-2">
              Option 2
              <wje-icon name="heart" slot="end"></wje-icon>
            </wje-option>
            <wje-option value="option-3">Option 3</wje-option>
            <wje-option value="option-4">Option 4</wje-option>
          </wje-select>
          <wje-input variant="standard" label="Project URL" required validate-on-change><span slot="start"><wje-icon name="globe"></wje-icon></span><span slot="end">.com</span></wje-input>
          <wje-input variant="standard" label="Number" type="number" required validate-on-change></wje-input>
          <wje-textarea variant="standard" label="Label" name="dog" rows="4" max-length="24" required counter validate-on-change></wje-textarea>
          <wje-radio-group id="radio-group-animal" name="radio">
            <wje-radio value="cat">Cat</wje-radio>
            <wje-radio value="elephant" disabled="">Elephant</wje-radio>
            <wje-radio indeterminate value="rabbit" >Rabbit</wje-radio>
            <wje-radio value="dog">Dog</wje-radio>
          </wje-radio-group>
          <hr>
          <wje-checkbox name="checkbox" required>Default checked</wje-checkbox>
          <br>
          <div style="display: flex; gap: .5rem;">
            <wje-button type="reset">Reset</wje-button>
            <wje-button type="submit" color="primary">Submit</wje-button>
          </div>
        </form>
      </div>
    </div>
    
    <!-- DEFAULT -->

    <h2>Default</h2>
    <div class="playground">
      <div class="content">
        <wje-input label="Default input" id="nieco"></wje-input>
        <wje-input label="Input with placeholder" placeholder="Enter company name"></wje-input>
        <wje-input label="Input with value" value="Mlynské Nivy 71"></wje-input>
        <wje-input label="Readonly input" value="Bratislava" readonly></wje-input>
        <wje-input label="Disabled input" value="84103" disabled></wje-input>
        <wje-input label="Default input" type="number" minlength="5" message="Toto je moja hlaska" required validate-on-change custom-error-display ></wje-input>
        <wje-input type="hidden">Hidden input</wje-input>
      </div>
    </div>
    
    <!-- INPUT -->

    <h2>Form</h2>
    <div class="playground">
      <div class="content">
        <wje-grid>
          <wje-row class="gx-2">
            <wje-col size="6">
              <wje-input label="Project name"></wje-input>
            </wje-col>
            <wje-col size="6">
              <wje-input label="Project code" placeholder="6 digit code" minlength="6" maxlength="6" message="Toto je moja hlaska" validate-on-change custom-error-display></wje-input>
            </wje-col>
          </wje-row>
          <wje-row>
            <wje-col size="12">
              <wje-input label="Project URL">
                <span slot="start"><wje-icon name="globe"></wje-icon></span>
                <span slot="end">.com</span>
              </wje-input>
            </wje-col>
          </wje-row>
          <wje-row class="gx-2">
            <wje-col size="6">
              <wje-input label="Profit">
                <span slot="end">&euro;</span>
              </wje-input>
            </wje-col>
            <wje-col size="6">
              <wje-input label="Email"></wje-input>
            </wje-col>
          </wje-row>
        </wje-grid>
      </div>
    </div>
    
    <!-- STANDARD -->

    <h2>Standard</h2>
    <div class="playground">
      <div class="content">
        <wje-input variant="standard" label="Default input"></wje-input>
        <wje-input variant="standard" label="Input with placeholder" placeholder="Enter company name"></wje-input>
        <wje-input variant="standard" label="Input with value" value="Mlynské Nivy 71"></wje-input>
        <wje-input variant="standard" label="Readonly input" value="Bratislava" readonly></wje-input>
        <wje-input variant="standard" label="Disabled input" value="84103" disabled></wje-input>
        <wje-input variant="standard" label="Default input" type="number" minlength="5" message="Toto je moja hlaska" required validate-on-change custom-error-display ></wje-input>
        <wje-input variant="standard" type="hidden">Hidden input</wje-input>
      </div>
    </div>

    <!-- INPUT -->

    <h2>Form</h2>
    <div class="playground">
      <div class="content">
        <wje-grid>
          <wje-row class="gx-2">
            <wje-col size="6">
              <wje-input variant="standard" label="Project name"></wje-input>
            </wje-col>
            <wje-col size="6">
              <wje-input variant="standard" label="Project code" placeholder="6 digit code" minlength="6" maxlength="6" message="Toto je moja hlaska" validate-on-change custom-error-display></wje-input>
            </wje-col>
          </wje-row>
          <wje-row>
            <wje-col size="12">
              <wje-input variant="standard" label="Project URL">
                <span slot="start"><wje-icon name="globe"></wje-icon></span>
                <span slot="end">.com</span>
              </wje-input>
            </wje-col>
          </wje-row>
          <wje-row class="gx-2">
            <wje-col size="6">
              <wje-input variant="standard" label="Profit">
                <span slot="end">&euro;</span>
              </wje-input>
            </wje-col>
            <wje-col size="6">
              <wje-input variant="standard" label="Email"></wje-input>
            </wje-col>
          </wje-row>
        </wje-grid>
      </div>
    </div>

    <!-- SELECT -->

    <h2>Select</h2>
    <div class="playground">
      <div class="content">
        <wje-input variant="standard" label="Default input" class="example-select">
          <wje-select variant="standard" placeholder="Select option" slot="start">
            <wje-option value="option-1">
              Option 1
              <wje-icon name="sausage" slot="start"></wje-icon>
            </wje-option>
            <wje-option value="option-2">
              Option 2
              <wje-icon name="heart" slot="start"></wje-icon>
            </wje-option>
            <wje-option value="option-3" selected>
              Option 3
              <wje-icon name="star" slot="start"></wje-icon>
            </wje-option>
            <wje-option value="option-4">
              Option 4
              <wje-icon name="mushroom" slot="start"></wje-icon>
            </wje-option>
          </wje-select>
        </wje-input>
        <style>
          .example-select {
            --wje-input-slot-padding-inline: 0 !important;
          }
          
          .example-select wje-select {
            --wje-select-border-width: 0 !important;
            --wje-select-border-radius: var(--wje-border-radius-large) !important;
            &::part(input-wrapper) {
              min-height: 26px;
            }
            &::part(options-wrapper) {
              width: 100%;
              margin-left: -1px;
            }
          }
        </style>
      </div>
    </div>

    <!-- SEARCH -->

    <h2>Search</h2>
    <div class="playground">
      <div class="content">
        <wje-input variant="standard" label="Default input" class="example">
          <wje-button variant="link" slot="end"><wje-icon name="search"></wje-icon></wje-button>
        </wje-input>
        <style>
          .example {
            --wje-input-slot-padding-inline: 0 !important;
          }
          
          .example wje-button {
            --wje-button-border-width: 0 !important;
            --wje-button-border-radius: 0 !important;
            --wje-color-base: #000000 !important;
            margin: 0;
          }
        </style>
      </div>
    </div>
    
    <!-- PICKERS -->

    <h2>Pickers</h2>
    <div class="playground">
      <div class="content">
        <wje-input variant="standard" label="Default input" class="example-icon" clearable>
          <wje-icon-picker slot="start"></wje-icon-picker>
        </wje-input>
        
        <wje-input variant="standard" label="Default input" class="example-color" clearable>
          <wje-color-picker slot="start"></wje-color-picker>
        </wje-input>
        
        <style>
          .example-icon wje-icon-picker {
            --wje-icon-picker-border-width: 0 !important;
            --wje-icon-picker-padding: .15rem !important;
            --wje-input-slot-padding-inline: .25rem !important;
          }
          
          .example-color wje-color-picker::part(anchor) {
            border-radius: 50%;
          }
        </style>
      </div>
    </div>
    
    <!-- CLEARABLE -->

    <h2>Clearable</h2>
    <div class="playground">
      <div class="content">
        <wje-input variant="standard" label="Default input" class="example" clearable></wje-input>
      </div>
    </div>
    
    <!-- VALIDATION IN FORM -->
    
<!--    <h2>Validation in form</h2>-->
<!--    <div class="playground">-->
<!--      <div class="content">-->
<!--        <form name="test-form-2" id="test-form-2">-->
<!--         <wje-input name="default" label="Default input"></wje-input>-->
<!--          <wje-input name="withPlaceholder" label="Input with placeholder" placeholder="Enter company name" required >-->
<!--            <span slot="error" style="width: 500px;display: block;color: #0af4fc;">-->
<!--              <icon></icon>-->
<!--              <span>lorem</span>-->
<!--            </span>-->
<!--          </wje-input>-->
<!--          <wje-input name="withPlaceholderErrorInline" label="Input with placeholder error inline" placeholder="Enter company name" required error-inline><span slot="error"><icon></icon><span ></span></span></wje-input>-->
<!--          <wje-input name="withValue" label="Input with value" value="Mlynské Nivy 71"></wje-input>-->
<!--          <wje-input name="readonly" label="Readonly input" value="Bratislava" readonly></wje-input>-->
<!--          <wje-input name="disabled" label="Disabled input" value="84103" disabled></wje-input>-->
<!--          <wje-input name="defaultNumber" label="Default input" type="number" minlength="5" message="Toto je moja hlaska" required validate-on-change custom-error-display ></wje-input>-->
<!--          <div style="display: flex; gap: .5rem;">-->
<!--            <wje-button type="reset">Reset</wje-button>-->
<!--            <wje-button type="submit" color="primary">Submit</wje-button>-->
<!--          </div>-->
<!--        </form>-->
<!--      </div>-->
<!--    </div>-->
  </div>`;

export default class DemoInput extends WJElement {
  constructor() {
    super();
  }

  /**
   * Returns the template for the component.
   * @static
   * @returns {HTMLElement} The template element
   */
  static get customTemplate() {
    return template;
  }

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(this.context);

    // this.addEventListener('wje-icon-picker:select', (e) => {
    //   e.target.closest('wje-input').value = e.detail.name;
    //   e.target.onClose();
    // });
    //
    // this.addEventListener('wje-color-picker:select', (e) => {
    //   e.target.closest('wje-input').value = e.detail.hex8;
    //   // e.target.onClose();
    // });
    //
    // // FORM 1
    // let form1 = this.context.querySelector('#test-form-1');
    // form1.addEventListener('submit', (e) => {
    //   console.log('SUMBIT CLICK', e.target);
    //   e.preventDefault();
    //   if (!e.target.checkValidity()) {
    //     let formData = new FormData(e.target);
    //     console.log("FORM DATA:", formData, Object.fromEntries(formData.entries()));
    //     for (let pair of formData.entries()) {
    //       // console.log(pair[0] + ', ' + pair[1]);
    //     }
    //     // console.log('klikol som form submit', e);
    //   }
    // });
    //
    // form1.addEventListener('reset', (e) => {
    //   console.log('klikol som form reset', e);
    // });
    //
    // // FORM 2
    // let form2 = this.context.querySelector('#test-form-2');
    // form2.addEventListener('submit', (e) => {
    //   e.preventDefault();
    //   if (e.target.checkValidity()) {
    //     let formDate = new FormData(e.target);
    //     for (let pair of formDate.entries()) {
    //       console.log(pair[0] + ', ' + pair[1]);
    //     }
    //     console.log('klikol som form submit', e);
    //   }
    // });
    //
    // form2.addEventListener('reset', (e) => {
    //   console.log('klikol som form reset', e);
    // });
    //
    // // Ak chceme select v inpute
    // this.context.querySelector('.example-select wje-select').addEventListener('wje-popup:show', (e) => {
    //   this.context.querySelector('.example-select').classList.add('options-show');
    // });
    //
    // this.context.querySelector('.example-select wje-select').addEventListener('wje-popup:hide', (e) => {
    //   this.context.querySelector('.example-select').classList.remove('options-show');
    // });
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-input') || window.customElements.define('demo-input', DemoInput);
