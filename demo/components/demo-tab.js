import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `
  <h1>Tab</h1>
  <div class="container">

    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wj-card>
          <wj-tab-group variant="top">
            <wj-tab slot="nav" panel="general">General</wj-tab>
            <wj-tab slot="nav" panel="custom" active>Custom</wj-tab>
            <wj-tab slot="nav" panel="advanced">Advanced</wj-tab>
            <wj-tab slot="nav" panel="disabled" disabled>Disabled</wj-tab>
          
            <wj-tab-panel name="general">This is the <b>general</b> tab panel.</wj-tab-panel>
            <wj-tab-panel name="custom">This is the <b>custom</b> tab panel.</wj-tab-panel>
            <wj-tab-panel name="advanced">This is the <b>advanced</b> tab panel.</wj-tab-panel>
            <wj-tab-panel name="disabled">This is a disabled tab panel.</wj-tab-panel>
          </wj-tab-group>
        </wj-card>
      </div>
    </div>
    
    <!-- START -->

    <h2>Start</h2>
    <div class="playground">
      <div class="content">
        <wj-card>
          <wj-tab-group variant="start">
            <wj-tab slot="nav" panel="general">General</wj-tab>
            <wj-tab slot="nav" panel="custom" active>Custom</wj-tab>
            <wj-tab slot="nav" panel="advanced">Advanced</wj-tab>
            <wj-tab slot="nav" panel="disabled" disabled>Disabled</wj-tab>
          
            <wj-tab-panel name="general">This is the general tab panel.</wj-tab-panel>
            <wj-tab-panel name="custom">This is the custom tab panel.</wj-tab-panel>
            <wj-tab-panel name="advanced">This is the advanced tab panel.</wj-tab-panel>
            <wj-tab-panel name="disabled">This is a disabled tab panel.</wj-tab-panel>
          </wj-tab-group>
        </wj-card>
      </div>
    </div>
    
    <!-- END -->

    <h2>End</h2>
    <div class="playground">
      <div class="content">
        <wj-card>
          <wj-tab-group variant="end">
            <wj-tab slot="nav" panel="general">General</wj-tab>
            <wj-tab slot="nav" panel="custom" active>Custom</wj-tab>
            <wj-tab slot="nav" panel="advanced">Advanced</wj-tab>
            <wj-tab slot="nav" panel="disabled" disabled>Disabled</wj-tab>
          
            <wj-tab-panel name="general">This is the general tab panel.</wj-tab-panel>
            <wj-tab-panel name="custom">This is the custom tab panel.</wj-tab-panel>
            <wj-tab-panel name="advanced">This is the advanced tab panel.</wj-tab-panel>
            <wj-tab-panel name="disabled">This is a disabled tab panel.</wj-tab-panel>
          </wj-tab-group>
        </wj-card>
      </div>
    </div>
    
    <!-- BOTTOM -->

    <h2>Bottom</h2>
    <div class="playground">
      <div class="content">
        <wj-card>
          <wj-tab-group variant="bottom">
            <wj-tab slot="nav" panel="general">General</wj-tab>
            <wj-tab slot="nav" panel="custom" active>Custom</wj-tab>
            <wj-tab slot="nav" panel="advanced">Advanced</wj-tab>
            <wj-tab slot="nav" panel="disabled" disabled>Disabled</wj-tab>
          
            <wj-tab-panel name="general">This is the general tab panel.</wj-tab-panel>
            <wj-tab-panel name="custom">This is the custom tab panel.</wj-tab-panel>
            <wj-tab-panel name="advanced">This is the advanced tab panel.</wj-tab-panel>
            <wj-tab-panel name="disabled">This is a disabled tab panel.</wj-tab-panel>
          </wj-tab-group>
        </wj-card>
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