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
  <h1>Select</h1>
  <div class="container">
    
    <!-- OPTIONS -->

    <h2>Options</h2>
    <div class="playground">
      <div class="content">
        <wje-select placeholder="Select options" variant="standard" max-options="1" variant="standard" max-height="200px" multiple clearable>
          <wje-options url="/api/options" item-value="tralala" item-text="label"></wje-options>
        </wje-select>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- DEFAULT -->

    <h2>Default</h2>
    <div class="playground">
      <div class="content">
        <wje-select label="Label test" placeholder="Select option">
          <wje-option value="option-1">Option 1</wje-option>
          <wje-option value="option-2">
            Option 2
            <wje-icon name="heart" slot="end"></wje-icon>
          </wje-option>
          <wje-option value="option-3">Option 3</wje-option>
          <wje-option value="option-4">Option 4</wje-option>
        </wje-select>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- STANDARD -->

    <h2>Standard</h2>
    <div class="playground">
      <div class="content">
        <wje-select label="Label test" placeholder="Select option" variant="standard">
          <wje-option value="option-1">Option 1</wje-option>
          <wje-option value="option-2">
            Option 2
            <wje-icon name="heart" slot="end"></wje-icon>
          </wje-option>
          <wje-option value="option-3" selected>Option 3</wje-option>
          <wje-option value="option-4">Option 4</wje-option>
        </wje-select>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- CLEARABLE -->

    <h2>Clearable</h2>
    <div class="playground">
      <div class="content">
        <wje-select label="Label" placeholder="Select option" clearable>
          <wje-option value="option-1">Option 1</wje-option>
          <wje-option value="option-2">Option 2</wje-option>
          <wje-option value="option-3">Option 3</wje-option>
          <wje-option value="option-4">Option 4</wje-option>
        </wje-select>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!--  DISABLED-->

    <h2>Disabled</h2>
    <div class="playground">
      <div class="content">
        <wje-select placeholder="Select option" label="Label" disabled style="margin-bottom: 1rem;">
          <wje-option value="option-1">Option 1</wje-option>
          <wje-option value="option-2" selected>Option 2</wje-option>
          <wje-option value="option-3">Option 3</wje-option>
          <wje-option value="option-4">Option 4</wje-option>
        </wje-select>

        <wje-select placeholder="Select option" variant="standard" disabled>
          <wje-option value="option-1">Option 1</wje-option>
          <wje-option value="option-2" selected>Option 2</wje-option>
          <wje-option value="option-3">Option 3</wje-option>
          <wje-option value="option-4">Option 4</wje-option>
        </wje-select>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- MULTIPLE -->

    <h2>Multiple</h2>
    <div class="playground">
      <div class="content">
        <wje-select placeholder="Select options" variant="standard" max-options="2" variant="standard" multiple clearable>
          <wje-option value="option-1">Option 1</wje-option>
          <wje-option value="option-2">
            Option 2
            <wje-icon name="heart" slot="end"></wje-icon>
          </wje-option>
          <wje-option value="option-3" selected>Option 3</wje-option>
          <wje-option value="option-4" selected>Option 4</wje-option>
          <wje-option value="option-5" selected>Option 5</wje-option>
          <wje-option value="option-6">Option 6</wje-option>
        </wje-select>
      </div>
    </div>

    <div class="html-snippet"></div>

    <h3>Javascript</h3>
    <pre>
      <code>
        optionChange = (e) => {
          let allOptions = this.getAllOptions();

          if(!this.hasAttribute("multiple")) {
              allOptions.forEach((option) => {
                  option.selected = false;
                  option.removeAttribute("selected");
              });
              this.popup.removeAttribute("active");
          }

          e.target.selected = !e.target.hasAttribute("selected");

          this.selections(e.target);
        }
      </code>
    </pre>
    <pre>
      <code>
        getAllOptions() {
          return this.querySelectorAll("wje-option");
        }
      </code>
    </pre>
    <pre>
      <code>
        getSelectedOptions() {
          return this.querySelectorAll("wje-option[selected]");
        }
      </code>
    </pre>
    <pre>
      <code>
        getSelected(option) {
          let selectedOptions = this.getSelectedOptions();

          selectedOptions = Array.isArray(selectedOptions) ? selectedOptions : Array.from(selectedOptions);

          selectedOptions = selectedOptions.map((option) => {
              return {
                  value: option.value,
                  text: option.textContent.trim()
              };
          });

          return selectedOptions;
        }
      </code>
    </pre>
    <pre>
      <code>
        selectionChanged(option = null, length = 0) {
          if (this.hasAttribute("multiple")) {
              this.value = this.selectedOptions.map(el => el).reverse();

              if (this.placeholder && length === 0) {
                  this.chips.innerHTML = this.placeholder;
                  this.input.value = '';
              } else {
                  if(this.counterEl instanceof HTMLElement || length > +this.maxOptions) {
                      this.counter();
                  } else {
                      if(option != null)
                          this.chips.appendChild(this.getChip(option));
                  }
              }
          } else {
              let value = option?.textContent.trim() || "";
              this.value = value;
              this.input.value = value;
          }
        }
      </code>
    </pre>
    <pre>
      <code>
        selections(option) {
          let options = this.getSelectedOptions();

          this.selectedOptions = Array.isArray(options) ? options : Array.from(options);

          if(this.selectedOptions.length >= +this.maxOptions) {
              this.counterEl = null;
          }

          this.chips.innerHTML = "";
          if(this.selectedOptions.length > 0) {
              this.selectedOptions.forEach((option, index) => {
                  this.selectionChanged(option, ++index);
              });
          } else {
              this.selectionChanged();
          }
        }
      </code>
    </pre>
    <pre>
      <code>
        getChip(option) {
          let chip = document.createElement("wje-chip");
          chip.setAttribute("removable", "");
          chip.addEventListener("wje:chip-remove", this.removeChip);
          chip.option = option;

          let label = document.createElement("wje-label");
          label.innerText = option.textContent.trim();

          chip.appendChild(label);

          return chip;
        }
      </code>
    </pre>
    <pre>
      <code>
        removeChip = (e) => {
          let option = e.target.option;
          option.selected = false;
          option.removeAttribute("selected");
          e.target.parentNode.removeChild(e.target);

          this.selections(null, 0);
        }
      </code>
    </pre>
    
  </div>`;

export default class DemoSelect extends WJElement {
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

customElements.get("demo-select") || window.customElements.define("demo-select", DemoSelect);