import { WJElement, Radio, RadioGroup } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Color Picker</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wj-color-picker></wj-color-picker>
      </div>
    </div>
    
  </div>`;

export default class DemoColorPicker extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-color-picker") || window.customElements.define("demo-color-picker", DemoColorPicker);