import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Icons</h1>
  <div class="container">

    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wj-icon name="check"></wj-icon>
        <wj-icon name="check" size="large"></wj-icon>
        <wj-icon name="check" color="primary"></wj-icon>
        <wj-icon name="check" size="large" color="danger"></wj-icon>
      </div>
    </div>

    <!-- CUSTOM -->

    <h2>Custom</h2>
    <div class="playground">
      <div class="content">
        <wj-icon class="custom" name="check"></wj-icon>
        <style>
          .custom {
            --wj-icon-size: 60px;
            color: #ff0000;
          }
        </style>
      </div>
    </div>
  </div>`;

export default class DemoIcons extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-icons") || window.customElements.define("demo-icons", DemoIcons);