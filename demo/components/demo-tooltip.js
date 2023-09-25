import { WJElement } from "../../dist/wj-main.js";

const template = document.createElement('template');

template.innerHTML = `
  <h1>Dropdown</h1>
  <div class="container">

    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content" style="display: flex; gap: 1rem;">
        <wj-tooltip content="Som najkrajsi tooltip" placement="top">
          <wj-button size="large">Top</wj-button>
        </wj-tooltip>
        
        <wj-tooltip content="Som najkrajsi tooltip" placement="bottom">
          <wj-button size="large">Bottom</wj-button>
        </wj-tooltip>
        
        <wj-tooltip content="Som najkrajsi tooltip" placement="left">
          <wj-button size="large">Left</wj-button>
        </wj-tooltip>
        
        <wj-tooltip content="Som najkrajsi tooltip" placement="right">
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