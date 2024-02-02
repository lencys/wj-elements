import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `
  <h1>Select</h1>
  <div class="container">
    
    <!-- OPTIONS -->

    <h2>Options</h2>
    <div class="playground">
      <div class="content">
        <wj-select placeholder="Select options" variant="standard" max-options="1" variant="standard" max-height="200px" multiple clearable>
          <wj-options url="/api/options" item-value="tralala" item-text="label"></wj-options>
        </wj-select>
      </div>
    </div>
    
    <!-- DEFAULT -->

    <h2>Default</h2>
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
    
    <!-- STANDARD -->

    <h2>Standard</h2>
    <div class="playground">
      <div class="content">
        <wj-select label="Label test" placeholder="Select option" variant="standard">
          <wj-option value="option-1">Option 1</wj-option>
          <wj-option value="option-2">
            Option 2
            <wj-icon name="heart" slot="end"></wj-icon>
          </wj-option>
          <wj-option value="option-3" selected>Option 3</wj-option>
          <wj-option value="option-4">Option 4</wj-option>
        </wj-select>
      </div>
    </div>
    
    <!-- CLEARABLE -->

    <h2>Clearable</h2>
    <div class="playground">
      <div class="content">
        <wj-select label="Label" placeholder="Select option" clearable>
          <wj-option value="option-1">Option 1</wj-option>
          <wj-option value="option-2">Option 2</wj-option>
          <wj-option value="option-3">Option 3</wj-option>
          <wj-option value="option-4">Option 4</wj-option>
        </wj-select>
      </div>
    </div>
    
    <!--  DISABLED-->

    <h2>Disabled</h2>
    <div class="playground">
      <div class="content">
        <wj-select placeholder="Select option" label="Label" disabled style="margin-bottom: 1rem;">
          <wj-option value="option-1">Option 1</wj-option>
          <wj-option value="option-2" selected>Option 2</wj-option>
          <wj-option value="option-3">Option 3</wj-option>
          <wj-option value="option-4">Option 4</wj-option>
        </wj-select>

        <wj-select placeholder="Select option" variant="standard" disabled>
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
        <wj-select placeholder="Select options" variant="standard" max-options="2" variant="standard" multiple clearable>
          <wj-option value="option-1">Option 1</wj-option>
          <wj-option value="option-2">
            Option 2
            <wj-icon name="heart" slot="end"></wj-icon>
          </wj-option>
          <wj-option value="option-3" selected>Option 3</wj-option>
          <wj-option value="option-4" selected>Option 4</wj-option>
          <wj-option value="option-5" selected>Option 5</wj-option>
          <wj-option value="option-6">Option 6</wj-option>
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