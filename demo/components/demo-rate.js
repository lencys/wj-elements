import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Rating</h1>
  <div class="container">

    <!-- BASIC -->

    <h3>Basic</h3>
    <div class="playground">
      <div class="content">
        <wj-rate max="5"></wj-rate>
      </div>
    </div>
    
    <!-- VALUE -->

    <h3>Value</h3>
    <div class="playground">
      <div class="content">
        <wj-rate value="3" icons="['heart-filled', 'heart-filled', 'heart-filled', 'heart-filled', 'heart-filled']"></wj-rate>
      </div>
    </div>
    
    <!-- PRECISION -->

    <h3>Precision</h3>
    <div class="playground">
      <div class="content">
        <wj-rate value="3.5" max="5" precision="0.5"></wj-rate>
      </div>
    </div>
    
    <!-- READONLY -->

    <h3>Readonly</h3>
    <div class="playground">
      <div class="content">
        <wj-rate max="5" value="4" readonly></wj-rate>
      </div>
    </div>
    
    <!-- DISABLED -->

    <h3>Disabled</h3>
    <div class="playground">
      <div class="content">
        <wj-rate max="5" value="2" disabled></wj-rate>
      </div>
    </div>
  </div>`;

export default class DemoRate extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-rating") || window.customElements.define("demo-rating", DemoRate);