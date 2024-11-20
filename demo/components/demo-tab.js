import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

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
    
    <!-- OPEN TAB -->

    <h2>Open tab</h2>
    <div class="playground">
      <div class="content">
        <p><wje-button href="#open-custom">Open custom</wje-button></p>
        <wje-card>
          <wje-tab-group variant="top" id="custom">
            <wje-tab slot="nav" panel="open-general" active>General <wje-badge color="primary">3</wje-badge></wje-tab>
            <wje-tab slot="nav" panel="open-custom">Custom</wje-tab>
            <wje-tab slot="nav" panel="open-advanced">Advanced</wje-tab>
            <wje-tab slot="nav" panel="open-disabled" disabled>Disabled</wje-tab>
          
            <wje-tab-panel name="open-general">This is the <b>general</b> tab panel.</wje-tab-panel>
            <wje-tab-panel name="open-custom">This is the <b>custom</b> tab panel.</wje-tab-panel>
            <wje-tab-panel name="open-advanced">This is the <b>advanced</b> tab panel.</wje-tab-panel>
            <wje-tab-panel name="open-disabled">This is a disabled tab panel.</wje-tab-panel>
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
  </div>`;

export default class DemoTab extends WJElement {
   constructor() {
    super();
  }

  /**
   * Returns the template for the component.
   * @static
   * @returns {HTMLElement} The template element
   */
  static get customTemplate() {
    return template;
  }

  afterDraw(context, store, params) {
    window.addEventListener('hashchange', (e) => {
      let activeTabName = location.hash.replace('#', '');
      let tab = context.querySelector('#custom');

      if (tab.getPanelAllName().includes(activeTabName)) {
        tab.setActiveTab(activeTabName);
      }
    });

    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(this.context);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-tab') || window.customElements.define('demo-tab', DemoTab);
