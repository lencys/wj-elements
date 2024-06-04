import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "./snippet/code-snippet-builder.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Textarea</h1>
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
    
  </div>`;

export default class DemoTextarea extends WJElement {
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

customElements.get("demo-textarea") || window.customElements.define("demo-textarea", DemoTextarea);