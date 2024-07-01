import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "./snippet/code-snippet-builder.js";

const template = document.createElement('template');

template.innerHTML = `<style>
    wje-badge {
      --wje-badge-padding-top: 4px;
      --wje-badge-padding-bottom: 4px;
    }
  </style>
  <h1>Tab</h1>
  <div class="container">

    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wje-card>
          <wje-tab-group variant="top">
            <wje-tab slot="nav" panel="basic-general">General <wje-badge color="primary">3</wje-badge></wje-tab>
            <wje-tab slot="nav" panel="basic-custom" active>Custom</wje-tab>
            <wje-tab slot="nav" panel="basic-advanced">Advanced</wje-tab>
            <wje-tab slot="nav" panel="basic-disabled" disabled>Disabled</wje-tab>
          
            <wje-tab-panel name="basic-general">This is the <b>general</b> tab panel.</wje-tab-panel>
            <wje-tab-panel name="basic-custom">This is the <b>custom</b> tab panel.</wje-tab-panel>
            <wje-tab-panel name="basic-advanced">This is the <b>advanced</b> tab panel.</wje-tab-panel>
            <wje-tab-panel name="basic-disabled">This is a disabled tab panel.</wje-tab-panel>
          </wje-tab-group>
        </wje-card>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- START -->

    <h2>Start</h2>
    <div class="playground">
      <div class="content">
        <wje-card>
          <wje-tab-group variant="start">
            <wje-tab slot="nav" panel="start-general">General</wje-tab>
            <wje-tab slot="nav" panel="start-custom" active>Custom</wje-tab>
            <wje-tab slot="nav" panel="start-advanced">Advanced</wje-tab>
            <wje-tab slot="nav" panel="start-disabled" disabled>Disabled</wje-tab>
          
            <wje-tab-panel name="start-general">This is the general tab panel.</wje-tab-panel>
            <wje-tab-panel name="start-custom">This is the custom tab panel.</wje-tab-panel>
            <wje-tab-panel name="start-advanced">This is the advanced tab panel.</wje-tab-panel>
            <wje-tab-panel name="start-disabled">This is a disabled tab panel.</wje-tab-panel>
          </wje-tab-group>
        </wje-card>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- END -->

    <h2>End</h2>
    <div class="playground">
      <div class="content">
        <wje-card>
          <wje-tab-group variant="end">
            <wje-tab slot="nav" panel="end-general">General</wje-tab>
            <wje-tab slot="nav" panel="end-custom" active>Custom</wje-tab>
            <wje-tab slot="nav" panel="end-advanced">Advanced</wje-tab>
            <wje-tab slot="nav" panel="end-disabled" disabled>Disabled</wje-tab>
          
            <wje-tab-panel name="end-general">This is the general tab panel.</wje-tab-panel>
            <wje-tab-panel name="end-custom">This is the custom tab panel.</wje-tab-panel>
            <wje-tab-panel name="end-advanced">This is the advanced tab panel.</wje-tab-panel>
            <wje-tab-panel name="end-disabled">This is a disabled tab panel.</wje-tab-panel>
          </wje-tab-group>
        </wje-card>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- BOTTOM -->

    <h2>Bottom</h2>
    <div class="playground">
      <div class="content">
        <wje-card>
          <wje-tab-group variant="bottom">
            <wje-tab slot="nav" panel="bottom-general">General</wje-tab>
            <wje-tab slot="nav" panel="bottom-custom" active>Custom</wje-tab>
            <wje-tab slot="nav" panel="bottom-advanced">Advanced</wje-tab>
            <wje-tab slot="nav" panel="bottom-disabled" disabled>Disabled</wje-tab>
          
            <wje-tab-panel name="bottom-general">This is the general tab panel.</wje-tab-panel>
            <wje-tab-panel name="bottom-custom">This is the custom tab panel.</wje-tab-panel>
            <wje-tab-panel name="bottom-advanced">This is the advanced tab panel.</wje-tab-panel>
            <wje-tab-panel name="bottom-disabled">This is a disabled tab panel.</wje-tab-panel>
          </wje-tab-group>
        </wje-card>
      </div>
    </div>

    <div class="html-snippet"></div>
  </div>`;

export default class DemoTab extends WJElement {
  constructor() {
    super(template);
  }

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(template, this.context);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-tab") || window.customElements.define("demo-tab", DemoTab);