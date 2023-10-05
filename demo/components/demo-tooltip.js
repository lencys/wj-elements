import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `
  <h1>Dropdown</h1>
  <div class="container">

    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content" style="display: flex; gap: 1rem;">
        <wj-tooltip content="Som najkrajsi tooltip hore" placement="top" offset="10">
          <wj-button size="large">Top</wj-button>
        </wj-tooltip>
        
        <wj-tooltip content="Som najkrajsi tooltip dole" placement="bottom" offset="10">
          <wj-button size="large">Bottom</wj-button>
        </wj-tooltip>
        
        <wj-tooltip content="Som najkrajsi tooltip vlavo" placement="left" offset="10">
          <wj-button size="large">Left</wj-button>
        </wj-tooltip>
        
        <wj-tooltip content="Som najkrajsi tooltip vpravo" placement="right" offset="10">
          <wj-button size="large">Right</wj-button>
        </wj-tooltip>
      </div>
    </div>
  </div>`;

export default class DemoTooltip extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-tooltip") || window.customElements.define("demo-tooltip", DemoTooltip);