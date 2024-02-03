import { WJElement, Textarea, RadioGroup } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Textarea</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground" style="display: block;">
      <div class="content" style="display: block;">
        <wj-textarea label="Label" name="dog" rows="4"></wj-textarea>
      </div>
    </div>
    
    <!-- STANDARD -->

    <h2>Standard</h2>
    <div class="playground" style="display: block;">
      <div class="content" style="display: block;">
        <wj-textarea label="Label" name="dog"  variant="standard"></wj-textarea>
      </div>
    </div>
    
    <!-- COUNTER -->

    <h2>Counter</h2>
    <div class="playground" style="display: block;">
      <div class="content" style="display: block;">
        <wj-textarea label="Label" name="dog" rows="4" max-length="24" counter></wj-textarea>
      </div>
    </div>
    
    <!-- RESIZE - none -->

    <h2>Resize (none)</h2>
    <div class="playground" style="display: block;">
      <div class="content" style="display: block;">
        <wj-textarea label="Label" name="dog" rows="4" resize="none"></wj-textarea>
      </div>
    </div>
    
    <!-- AUTO HEIGHT -->

    <h2>Auto height</h2>
    <div class="playground" style="display: block;">
      <div class="content" style="display: block;">
        <wj-textarea label="Label" name="dog" rows="3" resize="auto" counter></wj-textarea>
      </div>
    </div>
    
    <!-- DISABLED -->

    <h2>Disabled</h2>
    <div class="playground">
      <div class="content" style="display: block;">
        <wj-textarea label="Label" disabled></wj-textarea>
      </div>
    </div>
    
  </div>`;

export default class DemoTextarea extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-textarea") || window.customElements.define("demo-textarea", DemoTextarea);