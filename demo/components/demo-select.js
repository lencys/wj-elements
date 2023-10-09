import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `
  <h1>Select</h1>
  <div class="container">

    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wj-select label="Label test" placeholder="Tralala">
          <wj-option>Option 1</wj-option>
          <wj-option selected><wj-icon name="house" slot="start"></wj-icon>Option 2</wj-option>
          <wj-option>Option 3</wj-option>
          <wj-option>Option 4</wj-option>
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