import { WJElement } from "../../website/static/wj-elements/wj-main.js";

const template = document.createElement('template');

template.innerHTML = `
  <h1>Tab</h1>
  <div class="container">

    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wj-tab-group>
          <wj-tab slot="nav" panel="general">General</wj-tab>
          <wj-tab slot="nav" panel="custom">Custom</wj-tab>
          <wj-tab slot="nav" panel="advanced">Advanced</wj-tab>
          <wj-tab slot="nav" panel="disabled" disabled>Disabled</wj-tab>
        
          <wj-tab-panel name="general">This is the general tab panel.</wj-tab-panel>
          <wj-tab-panel name="custom">This is the custom tab panel.</wj-tab-panel>
          <wj-tab-panel name="advanced">This is the advanced tab panel.</wj-tab-panel>
          <wj-tab-panel name="disabled">This is a disabled tab panel.</wj-tab-panel>
        </wj-tab-group>
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