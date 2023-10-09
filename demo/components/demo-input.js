import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Input</h1>
  <div class="container">

    <!-- INPUT -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wj-input label="Default input"></wj-input>
<!--        <wj-input label="Input with placeholder" placeholder="Enter company name"></wj-input>-->
<!--        <wj-input label="Input with value" value="121 S Pinckney St #300"></wj-input>-->
<!--        <wj-input label="Readonly input" value="Madison" readonly></wj-input>-->
<!--        <wj-input label="Disabled input" value="53703" disabled></wj-input>-->
          <wj-input label="Default input" type="text" minlength="5" message="Toto je moja hlaska" required validate-on-change custom-error-display ></wj-input>
<!--          message-tooShort="Príliš krátky text" message-valueMissing="Toto pole je povinné"-->
      </div>
    </div>

    <!-- INPUT -->

    <h2>Slot</h2>
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
  </div>`;

export default class DemoInput extends WJElement {
  constructor() {
    super(template);
  }

  afterDraw() {
    let test = this.context.querySelector('wj-checkbox');

    test.addEventListener('wj:checkbox:change', (e) => {
      console.log('ccccccchange');
    });

    test.addEventListener('wj:checkbox:input', (e) => {
      // debugger
      console.log('iiiiiiiinput');
    });
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-input") || window.customElements.define("demo-input", DemoInput);