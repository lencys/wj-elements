import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "./snippet/code-snippet-builder.js";

const template = document.createElement('template');

template.innerHTML = `
<style>
    pre {
      overflow-x: auto;
      word-wrap: break-word;
      white-space: pre-wrap;
      padding: 10px;
      border: 1px solid hsla(240, 6%, 90%, 1);
      border-radius: 4px;
      background: #f9f9f9;
      max-width: 100%;
      font-size: 1em;
      line-height: 1.7rem;
      position: relative;
    }

    code {
      font-family: monospace;
      padding: 2px 4px;
      background: #f9f9f9;
      border-radius: 4px;
    }
  </style>
<h1>Textarea</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground" style="display: block;">
      <div class="content" style="display: block;">
        <wje-textarea label="Label" name="dog" rows="4"></wje-textarea>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- STANDARD -->

    <h2>Standard</h2>
    <div class="playground" style="display: block;">
      <div class="content" style="display: block;">
        <wje-textarea label="Label" name="dog"  variant="standard"></wje-textarea>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- COUNTER -->

    <h2>Counter</h2>
    <div class="playground" style="display: block;">
      <div class="content" style="display: block;">
        <wje-textarea label="Label" name="dog" rows="4" max-length="24" counter></wje-textarea>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- RESIZE - none -->

    <h2>Resize (none)</h2>
    <div class="playground" style="display: block;">
      <div class="content" style="display: block;">
        <wje-textarea label="Label" name="dog" rows="4" resize="none"></wje-textarea>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- AUTO HEIGHT -->

    <h2>Auto height</h2>
    <div class="playground" style="display: block;">
      <div class="content" style="display: block;">
        <wje-textarea label="Label" name="dog" rows="3" resize="auto" counter></wje-textarea>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- DISABLED -->

    <h2>Disabled</h2>
    <div class="playground">
      <div class="content" style="display: block;">
        <wje-textarea label="Label" disabled></wje-textarea>
      </div>
    </div>

    <div class="html-snippet"></div>

    <h3>Javascript</h3>
    <pre>
      <code>
        counter = (e) => {
          this.counterElement.innerText = e.target.value.length + "/" + this.input.maxLength;
        }
      </code>
    </pre>
    
  </div>`;

export default class DemoTextarea extends WJElement {
  constructor() {
    super(template);
  }

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(template, this.context);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-textarea") || window.customElements.define("demo-textarea", DemoTextarea);