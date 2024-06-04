import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "./snippet/code-snippet-builder.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Toggle</h1>
  <div class="container">

    <!--  BASIC-->

    <h3>Basic</h3>
    <div class="playground">
      <div class="content">
        <wje-item>
          <wje-toggle id="default">Default Toggle</wje-toggle>
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

    <div class="html-snippet"></div>
    
    <!-- PLACEMENT -->

    <h3>Placement</h3>
    <div class="playground">
      <div class="content">
        <wje-toggle id="placement" placement="end" color="success">
          <wje-icon name="list"></wje-icon>Placement Toggle
        </wje-toggle>
        <style>
          #placement {
            width: 100%;
            wje-icon {
              margin-inline: 0 .5rem;
            }
          }
        </style>
      </div>
    </div>

    <div class="html-snippet"></div>

    <!-- COLORS -->

    <h3>Colors</h3>
    <div class="playground">
      <div class="content">
        <wje-item>
          <wje-toggle checked>Default Toggle</wje-toggle>
        </wje-item>
        <wje-item>
          <wje-toggle color="primary">Primary Toggle</wje-toggle>
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

    <div class="html-snippet"></div>

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

    <div class="html-snippet"></div>
  </div>`;

export default class DemoToggle extends WJElement {
  constructor() {
    super(template);
  }

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(template, document);

    let defaultInput = this.querySelector("#default");

    this.querySelector("#default").addEventListener("wje-toggle:input", (e) => {
      console.log("Default Toggle: ", e.target.checked);
    });
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-toggle") || window.customElements.define("demo-toggle", DemoToggle);