import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `<h1>Input</h1>
  <div class="container">    
    
    <!-- VALIDATION IN FORM -->
    
    <h2>Validation in form</h2>
    <p class="description">
      Validácia komponentov v rámci <span class="tok tag">&lt;form&gt;</span> pomocou natívneho
      <span class="tok method">checkValidity()</span>. Ukážka kombinuje viac vstupov
      (<span class="tok tag">&lt;wje-input&gt;</span>, <span class="tok tag">&lt;wje-select&gt;</span>,
      <span class="tok tag">&lt;wje-textarea&gt;</span>, <span class="tok tag">&lt;wje-radio-group&gt;</span>,
      <span class="tok tag">&lt;wje-checkbox&gt;</span>, <span class="tok tag">&lt;wje-toggle&gt;</span>)
      s atribútom <span class="tok attr">required</span> a ukazuje submit mimo formu cez event
      <span class="tok event">wje-button:click</span>.
    </p>
    <div class="playground">
      <div class="content">
        <form name="test-form-1" id="test-form-1">
          <!-- DEFAULT -->
          <h2>Default</h2>
          <p class="description">
            Default varianta vstupov (bez <span class="tok attr">variant="standard"</span>) – slúži na porovnanie správania validácie v rovnakom formulári.
          </p>
          <!-- STANDARD -->
          <h2>Standard</h2>
          <p class="description">
            Rovnaké prvky vo variante <span class="tok attr">variant="standard"</span> (napr. <span class="tok tag">&lt;wje-input&gt;</span>, <span class="tok tag">&lt;wje-select&gt;</span>, <span class="tok tag">&lt;wje-textarea&gt;</span>).
            <span class="tok attr">required</span> a multi-select (<span class="tok attr">multiple</span>) ukazujú validáciu na reálnych kombináciách.
          </p>
          <wje-select name="single-select" variant="standard" label="Label" placeholder="Select option"  clearable required multiple>
            <wje-option value="option-1">Option 1</wje-option>
            <wje-option value="option-2">
              Option 2
              <wje-icon name="heart" slot="end"></wje-icon>
            </wje-option>
            <wje-option value="option-3">Option 3</wje-option>
            <wje-option value="option-4">Option 4</wje-option>
          </wje-select>
          <wje-input variant="standard" label="Project URL" required><span slot="start"><wje-icon name="globe"></wje-icon></span><span slot="end">.com</span></wje-input>
          <wje-input variant="standard" label="Number" type="number" required></wje-input>
          <wje-textarea variant="standard" label="Label" name="dog" rows="4" max-length="24" required counter></wje-textarea>
          <wje-radio-group id="radio-group-animal" name="radio" required>
            <wje-radio value="cat">Cat</wje-radio>
            <wje-radio value="elephant" disabled="">Elephant</wje-radio>
            <wje-radio indeterminate value="rabbit" >Rabbit</wje-radio>
            <wje-radio value="dog">Dog</wje-radio>
          </wje-radio-group>
          <hr>
          <wje-checkbox name="checkbox" required>Default checked</wje-checkbox>
          <br>
          <wje-toggle name="toggle" color="primary" required>Default toggle</wje-toggle>
          <br>
          <button type="submit" hidden></button>
        </form>
        <div style="display: flex; gap: .5rem;">
            <wje-button type="reset">Reset</wje-button>
            <wje-button color="primary" id="submit-test-form-1">Submit</wje-button>
          </div>
      </div>
    </div>
    
    <!-- DEFAULT -->

    <h2>Default</h2>
    <p class="description">
      Základné stavy <span class="tok tag">&lt;wje-input&gt;</span>: <span class="tok attr">placeholder</span>,
      predvolená <span class="tok attr">value</span>, <span class="tok attr">readonly</span>,
      <span class="tok attr">disabled</span> a validácia cez <span class="tok attr">required</span>,
      <span class="tok attr">minlength</span> + vlastná hláška cez <span class="tok attr">message</span>.
      Atribúty <span class="tok attr">validate-on-change</span> a <span class="tok attr">custom-error-display</span>
      ukazujú okamžité hlásenie chyby.
    </p>
    <div class="playground">
      <div class="content">
        <wje-input label="Default input" id="nieco"></wje-input>
        <wje-input label="Input with placeholder" placeholder="Enter company name"></wje-input>
        <wje-input label="Input with value" value="Mlynské Nivy 71"></wje-input>
        <wje-input label="Readonly input" value="Bratislava" readonly></wje-input>
        <wje-input label="Disabled input" value="84103" disabled></wje-input>
        <wje-input label="Default input" type="number" minlength="5" message="Toto je moja hlaska" required validate-on-change custom-error-display ></wje-input>
        <wje-input type="hidden">Hidden input</wje-input>
      </div>
    </div>
    
    <!-- INPUT -->

    <h2>Form</h2>
    <p class="description">
      Príklad formulárového layoutu cez <span class="tok tag">&lt;wje-grid&gt;</span> / <span class="tok tag">&lt;wje-row&gt;</span> / <span class="tok tag">&lt;wje-col&gt;</span>.
      Sloty <span class="tok attr">start</span> a <span class="tok attr">end</span> v <span class="tok tag">&lt;wje-input&gt;</span>
      ukazujú prefix/sufix (ikona, <span class="tok attr">.com</span>, <span class="tok attr">&euro;</span>).
    </p>
    <div class="playground">
      <div class="content">
        <wje-grid>
          <wje-row class="gx-2">
            <wje-col size="6">
              <wje-input label="Project name"></wje-input>
            </wje-col>
            <wje-col size="6">
              <wje-input label="Project code" placeholder="6 digit code" minlength="6" maxlength="6" message="Toto je moja hlaska" validate-on-change custom-error-display></wje-input>
            </wje-col>
          </wje-row>
          <wje-row>
            <wje-col size="12">
              <wje-input label="Project URL">
                <span slot="start"><wje-icon name="globe"></wje-icon></span>
                <span slot="end">.com</span>
              </wje-input>
            </wje-col>
          </wje-row>
          <wje-row class="gx-2">
            <wje-col size="6">
              <wje-input label="Profit">
                <span slot="end">&euro;</span>
              </wje-input>
            </wje-col>
            <wje-col size="6">
              <wje-input label="Email"></wje-input>
            </wje-col>
          </wje-row>
        </wje-grid>
      </div>
    </div>
    
    <!-- STANDARD -->

    <h2>Standard</h2>
    <p class="description">
      Varianta <span class="tok attr">variant="standard"</span> pre rovnaké stavy ako v Default sekcii.
      Ukážka porovnáva vizuál a validáciu pri identickom nastavení atribútov.
    </p>
    <div class="playground">
      <div class="content">
        <wje-input variant="standard" label="Default input"></wje-input>
        <wje-input variant="standard" label="Input with placeholder" placeholder="Enter company name"></wje-input>
        <wje-input variant="standard" label="Input with value" value="Mlynské Nivy 71"></wje-input>
        <wje-input variant="standard" label="Readonly input" value="Bratislava" readonly></wje-input>
        <wje-input variant="standard" label="Disabled input" value="84103" disabled></wje-input>
        <wje-input variant="standard" label="Default input" type="number" minlength="5" message="Toto je moja hlaska" required validate-on-change custom-error-display ></wje-input>
        <wje-input variant="standard" type="hidden">Hidden input</wje-input>
      </div>
    </div>

    <!-- INPUT -->

    <h2>Form (standard)</h2>
    <p class="description">
      Rovnaký grid layout ako vyššie, ale pre <span class="tok attr">variant="standard"</span>.
      Vhodné ako referenčný „form pattern“ pre standard inputs.
    </p>
    <div class="playground">
      <div class="content">
        <wje-grid>
          <wje-row class="gx-2">
            <wje-col size="6">
              <wje-input variant="standard" label="Project name"></wje-input>
            </wje-col>
            <wje-col size="6">
              <wje-input variant="standard" label="Project code" placeholder="6 digit code" minlength="6" maxlength="6" message="Toto je moja hlaska" validate-on-change custom-error-display></wje-input>
            </wje-col>
          </wje-row>
          <wje-row>
            <wje-col size="12">
              <wje-input variant="standard" label="Project URL">
                <span slot="start"><wje-icon name="globe"></wje-icon></span>
                <span slot="end">.com</span>
              </wje-input>
            </wje-col>
          </wje-row>
          <wje-row class="gx-2">
            <wje-col size="6">
              <wje-input variant="standard" label="Profit">
                <span slot="end">&euro;</span>
              </wje-input>
            </wje-col>
            <wje-col size="6">
              <wje-input variant="standard" label="Email"></wje-input>
            </wje-col>
          </wje-row>
        </wje-grid>
      </div>
    </div>

    <!-- SELECT -->

    <h2>Select</h2>
    <p class="description">
      Kombinácia <span class="tok tag">&lt;wje-select&gt;</span> vloženého do slotu <span class="tok attr">start</span> v <span class="tok tag">&lt;wje-input&gt;</span>.
      Lokálne CSS upravuje padding a border cez premenné <span class="tok css">--wje-input-slot-padding-inline</span>,
      <span class="tok css">--wje-select-border-width</span> a <span class="tok css">--wje-select-border-radius</span>.
      JS počúva <span class="tok event">wje-popup:show</span>/<span class="tok event">wje-popup:hide</span> na prepínanie triedy.
    </p>
    <div class="playground">
      <div class="content">
        <wje-input variant="standard" label="Default input" class="example-select">
          <wje-select variant="standard" placeholder="Select option" slot="start">
            <wje-option value="option-1">
              Option 1
              <wje-icon name="sausage" slot="start"></wje-icon>
            </wje-option>
            <wje-option value="option-2">
              Option 2
              <wje-icon name="heart" slot="start"></wje-icon>
            </wje-option>
            <wje-option value="option-3" selected>
              Option 3
              <wje-icon name="star" slot="start"></wje-icon>
            </wje-option>
            <wje-option value="option-4">
              Option 4
              <wje-icon name="mushroom" slot="start"></wje-icon>
            </wje-option>
          </wje-select>
        </wje-input>
        <style>
          .example-select {
            --wje-input-slot-padding-inline: 0 !important;
          }
          
          .example-select wje-select {
            --wje-select-border-width: 0 !important;
            --wje-select-border-radius: var(--wje-border-radius-large) !important;
            &::part(input-wrapper) {
              min-height: 26px;
            }
            &::part(options-wrapper) {
              width: 100%;
              margin-left: -1px;
            }
          }
        </style>
      </div>
    </div>

    <!-- SEARCH -->

    <h2>Search</h2>
    <p class="description">
      Search pattern: ikonové tlačidlo v slote <span class="tok attr">end</span> (tu <span class="tok tag">&lt;wje-button variant="link"&gt;</span>).
      Lokálne CSS resetuje border a radius cez <span class="tok css">--wje-button-border-width</span> a <span class="tok css">--wje-button-border-radius</span>.
    </p>
    <div class="playground">
      <div class="content">
        <wje-input variant="standard" label="Default input" class="example">
          <wje-button variant="link" slot="end"><wje-icon name="search"></wje-icon></wje-button>
        </wje-input>
        <style>
          .example {
            --wje-input-slot-padding-inline: 0 !important;
          }
          
          .example wje-button {
            --wje-button-border-width: 0 !important;
            --wje-button-border-radius: 0 !important;
            --wje-color-base: #000000 !important;
            margin: 0;
          }
        </style>
      </div>
    </div>
    
    <!-- PICKERS -->

    <h2>Pickers</h2>
    <p class="description">
      Picker inputy: <span class="tok tag">&lt;wje-icon-picker&gt;</span> a <span class="tok tag">&lt;wje-color-picker&gt;</span> v slote <span class="tok attr">start</span>.
      Eventy <span class="tok event">wje-icon-picker:select</span> a <span class="tok event">wje-color-picker:select</span>
      v <span class="tok method">afterDraw()</span> nastavujú hodnotu rodičovského <span class="tok tag">&lt;wje-input&gt;</span>.
    </p>
    <div class="playground">
      <div class="content">
        <wje-input variant="standard" label="Default input" class="example-icon" clearable>
          <wje-icon-picker slot="start"></wje-icon-picker>
        </wje-input>
        
        <wje-input variant="standard" label="Default input" class="example-color" clearable>
          <wje-color-picker slot="start"></wje-color-picker>
        </wje-input>
        
        <style>
          .example-icon wje-icon-picker {
            --wje-icon-picker-border-width: 0 !important;
            --wje-icon-picker-padding: .15rem !important;
            --wje-input-slot-padding-inline: .25rem !important;
          }
          
          .example-color wje-color-picker::part(anchor) {
            border-radius: 50%;
          }
        </style>
      </div>
    </div>
    
    <!-- CLEARABLE -->

    <h2>Clearable</h2>
    <p class="description">
      Atribút <span class="tok attr">clearable</span> pridá do <span class="tok tag">&lt;wje-input&gt;</span> reset ikonku na rýchle vymazanie hodnoty.
    </p>
    <div class="playground">
      <div class="content">
        <wje-input variant="standard" label="Default input" class="example" clearable></wje-input>
      </div>
    </div>
    
    <!-- VALIDATION IN FORM -->
    
    <h2>Validation in form (custom error slot)</h2>
    <p class="description">
      Druhý formulár ukazuje validáciu spolu s vlastným obsahom chyby v slote <span class="tok attr">error</span>
      a aj inline režim cez <span class="tok attr">error-inline</span>. Submit/Reset používajú natívne
      eventy <span class="tok event">submit</span>/<span class="tok event">reset</span> na <span class="tok tag">&lt;form&gt;</span>.
    </p>
    <div class="playground">
      <div class="content">
        <form name="test-form-2" id="test-form-2">
         <wje-input name="default" label="Default input"></wje-input>
          <wje-input name="withPlaceholder" label="Input with placeholder" placeholder="Enter company name" required >
            <span slot="error" style="width: 500px;display: block;color: #0af4fc;">
              <icon></icon>
              <span>lorem</span>
            </span>
          </wje-input>
          <wje-input name="withPlaceholderErrorInline" label="Input with placeholder error inline" placeholder="Enter company name" required error-inline><span slot="error"><icon></icon><span ></span></span></wje-input>
          <wje-input name="withValue" label="Input with value" value="Mlynské Nivy 71"></wje-input>
          <wje-input name="readonly" label="Readonly input" value="Bratislava" readonly></wje-input>
          <wje-input name="disabled" label="Disabled input" value="84103" disabled></wje-input>
          <wje-input name="defaultNumber" label="Default input" type="number" minlength="5" message="Toto je moja hlaska" required validate-on-change custom-error-display ></wje-input>
          <div style="display: flex; gap: .5rem;">
            <wje-button type="reset">Reset</wje-button>
            <wje-button type="submit" color="primary">Submit</wje-button>
          </div>
        </form>
      </div>
    </div>
  </div>`;

export default class DemoInput extends WJElement {
  constructor() {
    super();
  }

  /**
   * Returns the template for the component.
   * @static
   * @returns {HTMLElement} The template element
   */
  static get customTemplate() {
    return template;
  }

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(this.context);

    this.addEventListener('wje-icon-picker:select', (e) => {
      e.target.closest('wje-input').value = e.detail.name;
      e.target.onClose();
    });

    this.addEventListener('wje-color-picker:select', (e) => {
      e.target.closest('wje-input').value = e.detail.hex8;
      // e.target.onClose();
    });

    // FORM 1

    let form1 = this.context.querySelector('#test-form-1');

    // Submit button outside of form
    this.context.querySelector('#submit-test-form-1').addEventListener('wje-button:click', (e) => {
      let formDate = new FormData(form1);
      for (let pair of formDate.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
      console.log('VALID FORM 1:', form1.checkValidity());
      form1.checkValidity();
    });

    form1.addEventListener('submit', (e) => {
      console.log('SUMBIT CLICK', e.target);
      e.preventDefault();
      e.target.checkValidity();
    });

    form1.addEventListener('reset', (e) => {
      console.log('klikol som form reset', e);
    });

    // FORM 2
    let form2 = this.context.querySelector('#test-form-2');
    form2.addEventListener('submit', (e) => {
      e.preventDefault();
      if (e.target.checkValidity()) {
        let formDate = new FormData(e.target);
        for (let pair of formDate.entries()) {
          console.log(pair[0] + ', ' + pair[1]);
        }
        console.log('klikol som form submit', e);
      }
    });

    form2.addEventListener('reset', (e) => {
      console.log('klikol som form reset', e);
    });

    // Ak chceme select v inpute
    this.context.querySelector('.example-select wje-select').addEventListener('wje-popup:show', (e) => {
      this.context.querySelector('.example-select').classList.add('options-show');
    });

    this.context.querySelector('.example-select wje-select').addEventListener('wje-popup:hide', (e) => {
      this.context.querySelector('.example-select').classList.remove('options-show');
    });
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-input') || window.customElements.define('demo-input', DemoInput);
