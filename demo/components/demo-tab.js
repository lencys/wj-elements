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


    
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content" style="width: 100%; margin-inline: .5rem;">
        <wje-card>
          <wje-tab-group variant="top" >
            <wje-tab slot="nav" panel="basic-general">General <wje-badge color="primary">3</wje-badge></wje-tab>
            <wje-tab slot="nav" panel="basic-custom">Custom</wje-tab>
            <wje-tab slot="nav" panel="basic-advanced-1">Advanced 1</wje-tab>
            <wje-tab slot="nav" panel="basic-advanced-2">Advanced 2</wje-tab>
            <wje-tab slot="nav" panel="basic-advanced-3">Advanced 3</wje-tab>
            <wje-tab slot="nav" panel="basic-advanced-4">Advanced 4</wje-tab>
            <wje-tab-panel name="basic-general">This is the <b>general</b> tab panel.</wje-tab-panel>
            <wje-tab-panel name="basic-custom">This is the <b>custom</b> tab panel.</wje-tab-panel>
            <wje-tab-panel name="basic-advanced-1">This is the <b>advanced</b> tab panel 1.</wje-tab-panel>
            <wje-tab-panel name="basic-advanced-2">This is the <b>advanced</b> tab panel 2.</wje-tab-panel>
            <wje-tab-panel name="basic-advanced-3">This is the <b>advanced</b> tab panel 3.</wje-tab-panel>
            <wje-tab-panel name="basic-advanced-4">This is the <b>advanced</b> tab panel 4.</wje-tab-panel>
          </wje-tab-group>
        </wje-card>
      </div>
    </div>
    
    <!-- ROUTER -->

    <h2>Router</h2>
    <div class="playground">
      <div class="content" style="width: 100%; margin-inline: .5rem;">
        <wje-card>
          <wje-tab-group variant="top" type="route">
            <wje-tab slot="nav" route="example-accordion" class="active">Accordion</wje-tab>
            <wje-tab slot="nav" route="example-animation">Animation</wje-tab>
            <wje-tab slot="nav" route="example-avatar">Avatar</wje-tab>
            <wje-tab slot="nav" route="example-badge">Badge</wje-tab>
            <wje-router-outlet id="tab-group-outlet"></wje-router-outlet>
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

  static get outlet() {
    return '#tab-group-outlet'
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
