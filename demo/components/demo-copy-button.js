import WJElement from "../../dist/wje-element.js";

const template = document.createElement('template');
template.innerHTML = `<h1>Copy Button</h1>
    <div class="container">
      
      <!-- BASIC -->
  
      <h2>Basic</h2>
      <div class="playground">
        <div class="content">
          <wje-copy-button value="I am copy - Value"></wje-copy-button>
        </div>
      </div>
      
      <!-- CUSTOM LABEL -->
  
      <h2>Custom label</h2>
      <div class="playground">
        <div class="content">
          <wje-copy-button value="I am copy - Value" label="Kopírovať" label-success="Skopírované"></wje-copy-button>
        </div>
      </div>
      
      <!-- ELEMENT -->
  
      <h2>Element</h2>
      <div class="playground">
        <div class="content">
          <wje-label id="copy">I am copy - Element</wje-label>
          <wje-copy-button for="copy"></wje-copy-button>
        </div>
      </div>
      
      <!-- INPUT -->
  
      <h2>Input</h2>
      <div class="playground">
        <div class="content">
          <input id="copy-input" value="I am copy - Input">
          <wje-copy-button for="copy-input"></wje-copy-button>
        </div>
      </div>
      
      <!-- WJ INPUT -->
  
      <h2>WJ Input</h2>
      <div class="playground">
        <div class="content">
          <wje-input label="Label" id="copy-wje-input" value="I am copy - WJ Input">
            <wje-copy-button for="copy-wje-input" slot="end"></wje-copy-button>
          </wje-input>
        </div>
      </div>
      
      <!-- HYPERLINK -->
  
      <h2>Hyperlink</h2>
      <div class="playground">
        <div class="content">
          <a href="http://www.google.com" id="copy-href">I am copy - Href</a>
          <wje-copy-button for="copy-href"></wje-copy-button>
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