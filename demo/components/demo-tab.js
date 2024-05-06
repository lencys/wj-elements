import WJElement from "../../dist/wje-element.js";

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
            <wje-tab slot="nav" panel="general">General <wje-badge color="primary">3</wje-badge></wje-tab>
            <wje-tab slot="nav" panel="custom" active>Custom</wje-tab>
            <wje-tab slot="nav" panel="advanced">Advanced</wje-tab>
            <wje-tab slot="nav" panel="disabled" disabled>Disabled</wje-tab>
          
            <wje-tab-panel name="general">This is the <b>general</b> tab panel.</wje-tab-panel>
            <wje-tab-panel name="custom">This is the <b>custom</b> tab panel.</wje-tab-panel>
            <wje-tab-panel name="advanced">This is the <b>advanced</b> tab panel.</wje-tab-panel>
            <wje-tab-panel name="disabled">This is a disabled tab panel.</wje-tab-panel>
          </wje-tab-group>
        </wje-card>
      </div>
    </div>
    
    <!-- START -->

    <h2>Start</h2>
    <div class="playground">
      <div class="content">
        <wje-card>
          <wje-tab-group variant="start">
            <wje-tab slot="nav" panel="general">General</wje-tab>
            <wje-tab slot="nav" panel="custom" active>Custom</wje-tab>
            <wje-tab slot="nav" panel="advanced">Advanced</wje-tab>
            <wje-tab slot="nav" panel="disabled" disabled>Disabled</wje-tab>
          
            <wje-tab-panel name="general">This is the general tab panel.</wje-tab-panel>
            <wje-tab-panel name="custom">This is the custom tab panel.</wje-tab-panel>
            <wje-tab-panel name="advanced">This is the advanced tab panel.</wje-tab-panel>
            <wje-tab-panel name="disabled">This is a disabled tab panel.</wje-tab-panel>
          </wje-tab-group>
        </wje-card>
      </div>
    </div>
    
    <!-- END -->

    <h2>End</h2>
    <div class="playground">
      <div class="content">
        <wje-card>
          <wje-tab-group variant="end">
            <wje-tab slot="nav" panel="general">General</wje-tab>
            <wje-tab slot="nav" panel="custom" active>Custom</wje-tab>
            <wje-tab slot="nav" panel="advanced">Advanced</wje-tab>
            <wje-tab slot="nav" panel="disabled" disabled>Disabled</wje-tab>
          
            <wje-tab-panel name="general">This is the general tab panel.</wje-tab-panel>
            <wje-tab-panel name="custom">This is the custom tab panel.</wje-tab-panel>
            <wje-tab-panel name="advanced">This is the advanced tab panel.</wje-tab-panel>
            <wje-tab-panel name="disabled">This is a disabled tab panel.</wje-tab-panel>
          </wje-tab-group>
        </wje-card>
      </div>
    </div>
    
    <!-- BOTTOM -->

    <h2>Bottom</h2>
    <div class="playground">
      <div class="content">
        <wje-card>
          <wje-tab-group variant="bottom">
            <wje-tab slot="nav" panel="general">General</wje-tab>
            <wje-tab slot="nav" panel="custom" active>Custom</wje-tab>
            <wje-tab slot="nav" panel="advanced">Advanced</wje-tab>
            <wje-tab slot="nav" panel="disabled" disabled>Disabled</wje-tab>
          
            <wje-tab-panel name="general">This is the general tab panel.</wje-tab-panel>
            <wje-tab-panel name="custom">This is the custom tab panel.</wje-tab-panel>
            <wje-tab-panel name="advanced">This is the advanced tab panel.</wje-tab-panel>
            <wje-tab-panel name="disabled">This is a disabled tab panel.</wje-tab-panel>
          </wje-tab-group>
        </wje-card>
      </div>
    </div>
  </div>`;

export default class DemoTab extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-tab") || window.customElements.define("demo-tab", DemoTab);