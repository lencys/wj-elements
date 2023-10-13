import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `
  <h1>Select</h1>
  <div class="container">

    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wj-select label="Label test" placeholder="Select option">
          <wj-option value="option-1">Option 1</wj-option>
          <wj-option value="option-2">
            Option 2
            <wj-icon name="heart" slot="end"></wj-icon>
          </wj-option>
          <wj-option value="option-3">Option 3</wj-option>
          <wj-option value="option-4">Option 4</wj-option>
        </wj-select>
      </div>
    </div>
    
    <!--  DISABLED-->

    <h2>Disabled</h2>
    <div class="playground">
      <div class="content">
        <wj-select placeholder="Select option" disabled>
          <wj-option value="option-1">Option 1</wj-option>
          <wj-option value="option-2" selected>Option 2</wj-option>
          <wj-option value="option-3">Option 3</wj-option>
          <wj-option value="option-4">Option 4</wj-option>
        </wj-select>
      </div>
    </div>
    
    <!-- MULTIPLE -->

    <h2>Multiple</h2>
    <div class="playground">
      <div class="content">
        <wj-select placeholder="Select options" multiple>
          <wj-option value="option-1">Option 1</wj-option>
          <wj-option value="option-2">
            Option 2
            <wj-icon name="heart" slot="end"></wj-icon>
          </wj-option>
          <wj-option value="option-3">Option 3</wj-option>
          <wj-option value="option-4">Option 4</wj-option>
        </wj-select>
      </div>
    </div>
    
  </div>`;

export default class DemoSelect extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-select") || window.customElements.define("demo-select", DemoSelect);