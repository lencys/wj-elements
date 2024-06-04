import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "./snippet/code-snippet-builder.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Rating</h1>
  <div class="container">

    <!-- BASIC -->

    <h3>Basic</h3>
    <div class="playground">
      <div class="content">
        <wje-rate max="5"></wje-rate>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- VALUE -->

    <h3>Value</h3>
    <div class="playground">
      <div class="content">
        <wje-rate value="3" icons="['heart', 'heart', 'heart', 'heart', 'heart']"></wje-rate>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- PRECISION -->

    <h3>Precision</h3>
    <div class="playground">
      <div class="content">
        <wje-rate value="3.5" max="5" precision="0.1"></wje-rate>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- READONLY -->

    <h3>Readonly</h3>
    <div class="playground">
      <div class="content">
        <wje-rate max="5" value="4" readonly></wje-rate>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- DISABLED -->

    <h3>Disabled</h3>
    <div class="playground">
      <div class="content">
        <wje-rate max="5" value="2" disabled></wje-rate>
      </div>
    </div>

    <div class="html-snippet"></div>
  </div>`;

export default class DemoRate extends WJElement {
  constructor() {
    super(template);
  }

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(template, document);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-rating") || window.customElements.define("demo-rating", DemoRate);