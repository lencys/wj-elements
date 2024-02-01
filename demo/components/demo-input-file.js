import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Input</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Default</h2>
    <div class="playground">
      <div class="content">
        <wj-input-file></wj-input-file>
      </div>
    </div>
  </div>`;

export default class DemoInputFile extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-input-file") || window.customElements.define("demo-input-file", DemoInputFile);