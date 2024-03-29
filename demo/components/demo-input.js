import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Input</h1>
  <div class="container">
    
    <!-- INPUT -->

    <h2>Default</h2>
    <div class="playground">
      <div class="content">
        <wj-input label="Default input"></wj-input>
        <wj-input label="Input with placeholder" placeholder="Enter company name"></wj-input>
        <wj-input label="Input with value" value="Mlynské Nivy 71"></wj-input>
        <wj-input label="Readonly input" value="Bratislava" readonly></wj-input>
        <wj-input label="Disabled input" value="84103" disabled></wj-input>
        <wj-input label="Default input" type="number" minlength="5" message="Toto je moja hlaska" required validate-on-change custom-error-display ></wj-input>
      </div>
    </div>
    
    <!-- INPUT -->

    <h2>Form</h2>
    <div class="playground">
      <div class="content">
        <wj-grid>
          <wj-row class="gx-2">
            <wj-col size="6">
              <wj-input label="Project name"></wj-input>
            </wj-col>
            <wj-col size="6">
              <wj-input label="Project code" placeholder="6 digit code" minlength="6" maxlength="6" message="Toto je moja hlaska" validate-on-change custom-error-display></wj-input>
            </wj-col>
          </wj-row>
          <wj-row>
            <wj-col size="12">
              <wj-input label="Project URL">
                <span slot="start"><wj-icon name="globe"></wj-icon></span>
                <span slot="end">.com</span>
              </wj-input>
            </wj-col>
          </wj-row>
          <wj-row class="gx-2">
            <wj-col size="6">
              <wj-input label="Profit">
                <span slot="end">&euro;</span>
              </wj-input>
            </wj-col>
            <wj-col size="6">
              <wj-input label="Email"></wj-input>
            </wj-col>
          </wj-row>
        </wj-grid>
      </div>
    </div>
    
    <!-- INPUT -->

    <h2>Standard</h2>
    <div class="playground">
      <div class="content">
        <wj-input variant="standard" label="Default input"></wj-input>
        <wj-input variant="standard" label="Input with placeholder" placeholder="Enter company name"></wj-input>
        <wj-input variant="standard" label="Input with value" value="Mlynské Nivy 71"></wj-input>
        <wj-input variant="standard" label="Readonly input" value="Bratislava" readonly></wj-input>
        <wj-input variant="standard" label="Disabled input" value="84103" disabled></wj-input>
        <wj-input variant="standard" label="Default input" type="number" minlength="5" message="Toto je moja hlaska" required validate-on-change custom-error-display ></wj-input>
      </div>
    </div>

    <!-- INPUT -->

    <h2>Form</h2>
    <div class="playground">
      <div class="content">
        <wj-grid>
          <wj-row class="gx-2">
            <wj-col size="6">
              <wj-input variant="standard" label="Project name"></wj-input>
            </wj-col>
            <wj-col size="6">
              <wj-input variant="standard" label="Project code" placeholder="6 digit code" minlength="6" maxlength="6" message="Toto je moja hlaska" validate-on-change custom-error-display></wj-input>
            </wj-col>
          </wj-row>
          <wj-row>
            <wj-col size="12">
              <wj-input variant="standard" label="Project URL">
                <span slot="start"><wj-icon name="globe"></wj-icon></span>
                <span slot="end">.com</span>
              </wj-input>
            </wj-col>
          </wj-row>
          <wj-row class="gx-2">
            <wj-col size="6">
              <wj-input variant="standard" label="Profit">
                <span slot="end">&euro;</span>
              </wj-input>
            </wj-col>
            <wj-col size="6">
              <wj-input variant="standard" label="Email"></wj-input>
            </wj-col>
          </wj-row>
        </wj-grid>
      </div>
    </div>
    
    <!-- SEARCH -->

    <h2>Search</h2>
    <div class="playground">
      <div class="content">
        <wj-input variant="standard" label="Default input" class="example">
          <wj-button variant="link" slot="end"><wj-icon name="search"></wj-icon></wj-button>
        </wj-input>
        <style>
          .example {
            --wj-input-slot-padding-inline: 0 !important;
          }
          
          .example wj-button {
            --wj-button-border-width: 0 !important;
            --wj-button-border-radius: 0 !important;
            --wj-color-base: #000000 !important;
            margin: 0;
          }
        </style>
      </div>
    </div>
    
    <!-- PICKERS -->

    <h2>Pickers</h2>
    <div class="playground">
      <div class="content">
        <wj-input variant="standard" label="Default input" class="example-icon" clearable>
          <wj-icon-picker slot="start"></wj-icon-picker>
        </wj-input>
        
        <wj-input variant="standard" label="Default input" class="example-color" clearable>
          <wj-color-picker slot="start"></wj-color-picker>
        </wj-input>
        
        <style>
          .example-icon wj-icon-picker {
            --wj-icon-picker-border-width: 0 !important;
            --wj-icon-picker-padding: .15rem !important;
            --wj-input-slot-padding-inline: .25rem !important;
          }
          
          .example-color wj-color-picker::part(anchor) {
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
        <wj-input variant="standard" label="Default input" class="example" clearable></wj-input>
      </div>
    </div>
    
  </div>`;

export default class DemoInput extends WJElement {
  constructor() {
    super(template);
  }

  afterDraw() {
    this.addEventListener('wj-icon-picker:select', (e) => {
      e.target.closest("wj-input").value = e.detail.name;
      e.target.onClose();
    });

    this.addEventListener('wj-color-picker:select', (e) => {
      e.target.closest("wj-input").value = e.detail.hex8;
      // e.target.onClose();
    });
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-input") || window.customElements.define("demo-input", DemoInput);