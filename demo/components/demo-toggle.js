import { WJElement } from "../../website/static/wj-elements/wj-main.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Toggle</h1>
  <div class="container">

    <!--  BASIC-->

    <h3>Basic</h3>
    <div class="playground">
      <div class="content">
        <wj-item>
          <wj-toggle>Default Toggle</wj-toggle>
        </wj-item>
        <wj-item>
          <wj-toggle checked>Checked Toggle</wj-toggle>
        </wj-item>
        <wj-item>
          <wj-toggle disabled>Disabled Toggle</wj-toggle>
        </wj-item>
        <wj-item>
          <wj-toggle checked disabled>Disabled Checked Toggle</wj-toggle>
        </wj-item>
        <wj-item>
          <wj-toggle color="success" checked disabled>Disabled Checked Toggle</wj-toggle>
        </wj-item>
      </div>
    </div>

    <!-- COLORS -->

    <h3>Colors</h3>
    <div class="playground">
      <div class="content">
        <wj-item>
          <wj-toggle checked>Default Toggle</wj-toggle>
        </wj-item>
        <wj-item>
          <wj-toggle color="primary" checked>Primary Toggle</wj-toggle>
        </wj-item>
        <wj-item>
          <wj-toggle color="complete" checked>Complete Toggle</wj-toggle>
        </wj-item>
        <wj-item>
          <wj-toggle color="success" checked>Success Toggle</wj-toggle>
        </wj-item>
        <wj-item>
          <wj-toggle color="warning" checked>Warning Toggle</wj-toggle>
        </wj-item>
        <wj-item>
          <wj-toggle color="danger" checked>Danger Toggle</wj-toggle>
        </wj-item>
        <wj-item>
          <wj-toggle color="dark" checked>Dark Toggle</wj-toggle>
        </wj-item>
      </div>
    </div>

    <!--  CUSTOM-->

    <h3>Custom</h3>
    <div class="playground">
      <div class="content">
        <wj-toggle id="custom-toggle" checked>Default Toggle
          <style>
            #custom-toggle {
              --wj-toggle-color-base: #ff0000;
              --wj-toggle-width: 60px;
              --wj-toggle-height: 8px;
              --wj-toggle-border-radius: 0;
              --wj-toggle-handle-width: 20px;
              --wj-toggle-handle-height: 20px;
              --wj-toggle-handle-border-radius: 0;
              --wj-toggle-handle-color: #996633;
              --wj-toggle-handle-shadow: none !important;
              --wj-toggle-handle-shadow-checked: none !important;
            }
          </style>
        </wj-toggle>
      </div>
    </div>
  </div>`;

export class DemoToggle extends WJElement {
  constructor() {
    super(template);
  }
}

customElements.get("demo-toggle") || window.customElements.define("demo-toggle", DemoToggle);