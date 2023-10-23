import { WJElement, CopyButton } from "../../dist/wj-master.js";

const template = document.createElement('template');
template.innerHTML = `<h1>Copy Button</h1>
    <div class="container">
      
      <!-- BASIC -->
  
      <h2>Basic</h2>
      <div class="playground">
        <div class="content">
          <wj-copy-button value="I am copy - Value"></wj-copy-button>
        </div>
      </div>
      
      <!-- CUSTOM LABEL -->
  
      <h2>Custom</h2>
      <div class="playground">
        <div class="content">
          <wj-copy-button value="I am copy - Value" label="Kopírovať" label-success="Skopírované"></wj-copy-button>
        </div>
      </div>
      
      <!-- ELEMENT -->
  
      <h2>Element</h2>
      <div class="playground">
        <div class="content">
          <wj-label id="copy">I am copy - Element</wj-label>
          <wj-copy-button for="copy"></wj-copy-button>
        </div>
      </div>
      
      <!-- INPUT -->
  
      <h2>Input</h2>
      <div class="playground">
        <div class="content">
          <input id="copy-input" value="I am copy - Input">
          <wj-copy-button for="copy-input"></wj-copy-button>
        </div>
      </div>
      
      <!-- WJ INPUT -->
  
      <h2>WJ Input</h2>
      <div class="playground">
        <div class="content">
          <wj-input label="Label" id="copy-wj-input" value="I am copy - WJ Input">
            <wj-copy-button for="copy-wj-input" slot="end"></wj-copy-button>
          </wj-input>
        </div>
      </div>
      
      <!-- HYPERLINK -->
  
      <h2>Hyperlink</h2>
      <div class="playground">
        <div class="content">
          <a href="http://www.google.com" id="copy-href">I am copy - Href</a>
          <wj-copy-button for="copy-href"></wj-copy-button>
        </div>
      </div>
    </div>`;

export default class DemoCopyButton extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-copy-button") || window.customElements.define("demo-copy-button", DemoCopyButton);