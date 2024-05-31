import WJElement from "../../dist/wje-element.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Input</h1>
  <div class="container">
    
    <!-- INPUT -->

    <h2>Default</h2>
    <div class="playground">
      <div class="content">
        <wje-input label="Default input"></wje-input>
        <wje-input label="Input with placeholder" placeholder="Enter company name"></wje-input>
        <wje-input label="Input with value" value="Mlynské Nivy 71"></wje-input>
        <wje-input label="Readonly input" value="Bratislava" readonly></wje-input>
        <wje-input label="Disabled input" value="84103" disabled></wje-input>
        <wje-input label="Default input" type="number" minlength="5" message="Toto je moja hlaska" required validate-on-change custom-error-display ></wje-input>
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
    
    <!-- INPUT -->

    <h2>Standard</h2>
    <div class="playground">
      <div class="content">
        <wje-input variant="standard" label="Default input"></wje-input>
        <wje-input variant="standard" label="Input with placeholder" placeholder="Enter company name"></wje-input>
        <wje-input variant="standard" label="Input with value" value="Mlynské Nivy 71"></wje-input>
        <wje-input variant="standard" label="Readonly input" value="Bratislava" readonly></wje-input>
        <wje-input variant="standard" label="Disabled input" value="84103" disabled></wje-input>
        <wje-input variant="standard" label="Default input" type="number" minlength="5" message="Toto je moja hlaska" required validate-on-change custom-error-display ></wje-input>
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
            /*border-radius: 3px 0 0 3px !important;*/
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
    
    
        <!--  VALIDATION IN FORM-->
    <h2>Validation in form</h2>
    <div class="playground">
      <div class="content">
        <form name="test-form" id="test-form">
           <wje-input name="default" label="Default input"></wje-input>
            <wje-input name="withPlaceholder" label="Input with placeholder" placeholder="Enter company name" required ><span slot="error" style="width: 500px;display: block;color: #0af4fc;"><icon></icon><span ></span></span></wje-input>
            <wje-input name="withPlaceholderErrorInline" label="Input with placeholder error inline" placeholder="Enter company name" required   error-inline><span slot="error"><icon></icon><span ></span></span></wje-input>
            <wje-input name="withValue" label="Input with value" value="Mlynské Nivy 71"></wje-input>
            <wje-input name="readonly" label="Readonly input" value="Bratislava" readonly></wje-input>
            <wje-input name="disabled" label="Disabled input" value="84103" disabled></wje-input>
            <wje-input name="defaultNumber" label="Default input" type="number" minlength="5" message="Toto je moja hlaska" required validate-on-change custom-error-display ></wje-input>
          <wje-button type="reset">Reset</wje-button>
          <wje-button type="submit" color="primary">Submit</wje-button>
        </form>
      </div>
    </div>
  </div>`;

export default class DemoInput extends WJElement {
  constructor() {
    super(template);
  }

  afterDraw() {
    this.addEventListener('wje-icon-picker:select', (e) => {
      e.target.closest("wje-input").value = e.detail.name;
      e.target.onClose();
    });

    this.addEventListener('wje-color-picker:select', (e) => {
      e.target.closest("wje-input").value = e.detail.hex8;
      // e.target.onClose();
    });

    let form = this.context.querySelector('#test-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      if(e.target.checkValidity()){
        let formDate = new FormData(e.target)
        for (var pair of formDate.entries()) {
          console.log(pair[0]+ ', '+ pair[1]);
        }
        console.log('klikol som form submit', e)
      }
    })

    this.context.querySelector('#test-form').addEventListener('reset', (e) => {
      console.log('klikol som form reset', e)
    })
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-input") || window.customElements.define("demo-input", DemoInput);