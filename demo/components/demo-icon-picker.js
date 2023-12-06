import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Icon Picker</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wj-icon-picker></wj-icon-picker>
      </div>
    </div>
    
  </div>`;

export default class DemoIconPicker extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-icon-picker") || window.customElements.define("demo-icon-picker", DemoIconPicker);