import WJElement from "../../dist/wje-element.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Toggle</h1>
  <div class="container">

    <!--  BASIC-->

    <h3>Basic</h3>
    <div class="playground">
      <div class="content">
        <wje-item>
          <wje-toggle>Default Toggle</wje-toggle>
        </wje-item>
        <wje-item>
          <wje-toggle checked>Checked Toggle</wje-toggle>
        </wje-item>
        <wje-item>
          <wje-toggle disabled>Disabled Toggle</wje-toggle>
        </wje-item>
        <wje-item>
          <wje-toggle checked disabled>Disabled Checked Toggle</wje-toggle>
        </wje-item>
        <wje-item>
          <wje-toggle color="success" checked disabled>Disabled Checked Toggle</wje-toggle>
        </wje-item>
      </div>
    </div>

    <!-- COLORS -->

    <h3>Colors</h3>
    <div class="playground">
      <div class="content">
        <wje-item>
          <wje-toggle checked>Default Toggle</wje-toggle>
        </wje-item>
        <wje-item>
          <wje-toggle color="primary" checked>Primary Toggle</wje-toggle>
        </wje-item>
        <wje-item>
          <wje-toggle color="complete" checked>Complete Toggle</wje-toggle>
        </wje-item>
        <wje-item>
          <wje-toggle color="success" checked>Success Toggle</wje-toggle>
        </wje-item>
        <wje-item>
          <wje-toggle color="warning" checked>Warning Toggle</wje-toggle>
        </wje-item>
        <wje-item>
          <wje-toggle color="danger" checked>Danger Toggle</wje-toggle>
        </wje-item>
        <wje-item>
          <wje-toggle color="info" checked>Info Toggle</wje-toggle>
        </wje-item>
      </div>
    </div>

    <!--  CUSTOM-->

    <h3>Custom</h3>
    <div class="playground">
      <div class="content">
        <wje-toggle id="custom-toggle" checked>Default Toggle
          <style>
            #custom-toggle {
              --wje-toggle-color-base: #ff0000;
              --wje-toggle-width: 60px;
              --wje-toggle-height: 8px;
              --wje-toggle-border-radius: 0;
              --wje-toggle-handle-width: 20px;
              --wje-toggle-handle-height: 20px;
              --wje-toggle-handle-border-radius: 0;
              --wje-toggle-handle-color: #996633;
              --wje-toggle-handle-shadow: none !important;
              --wje-toggle-handle-shadow-checked: none !important;
            }
          </style>
        </wje-toggle>
      </div>
    </div>
  </div>`;

export default class DemoToggle extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-toggle") || window.customElements.define("demo-toggle", DemoToggle);