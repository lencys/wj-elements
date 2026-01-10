import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');
template.innerHTML = `<style>
  .content { gap: .5rem; }
  .description {
    margin: 0 0 .5rem;
    max-width: 72ch;
    opacity: .8;
  }
  </style>
  <h1>Button</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <p class="description">
      Základné použitie bez špeciálnych atribútov – ukážka default a <code>disabled</code> stavu.
    </p>
    <div class="playground">
      <div class="content">
        <wje-button>Default</wje-button>
        <wje-button disabled>Disabled</wje-button>
      </div>
    </div>
    
    <!-- TOOLTIP -->

    <h2>Tooltip</h2>
    <p class="description">
      Tooltip cez atribúty <code>tooltip</code> a <code>tooltip-placement</code> (napr. <code>left</code>) bez potreby extra JavaScriptu.
    </p>
    <div class="playground">
      <div class="content">
        <wje-button tooltip="Button tooltip" tooltip-placement="left">Default</wje-button>
      </div>
    </div>
    
    <!-- EVENTS -->

    <h2>Events</h2>
    <p class="description">
      Ukážka správania ako link (<code>href</code>), interný link cez <code>&lt;wje-router-link&gt;</code> a formulárový submit (<code>type="submit"</code>). V <code>afterDraw()</code> sú pridané listenery na <code>click</code> a vlastný event <code>wje-button:submit</code>.
    </p>
    <div class="playground">
      <div class="content">
        <wje-button href="https://sme.sk">External link</wje-button>
        <wje-button><wje-router-link route="animation">Internal link</wje-router-link></wje-button>
        <wje-button type="submit" id="text-submit">Submit</wje-button>
      </div>
    </div>

    <!-- CUSTOM EVENTS -->

    <h2>Custom events</h2>
    <p class="description">
      Trigger vlastného eventu cez atribút <code>custom-event</code> a doplnkové dáta cez prefixované atribúty (napr. <code>custom-event-userId</code>, <code>custom-event-route</code>). V <code>afterDraw()</code> je ukážka odchytu eventu <code>single-spa-route</code>.
    </p>
    <div class="playground">
      <div class="content">
        <wje-button id="custom-event-button" custom-event="single-spa-route" custom-event-userId="1" custom-event-departmentId="2">Trigger custom event</wje-button>
        <wje-button id="custom-event-button-2" custom-event="single-spa-route" custom-event-route="user.detail">Trigger custom event</wje-button>
      </div>
    </div>
    
    <!-- BUTTON IN FORM -->
    
    <h2>Form button</h2>
    <p class="description">
      Použitie v rámci <code>&lt;form&gt;</code> s <code>type="reset"</code> a <code>type="submit"</code>. JavaScript ukazuje <code>submit</code>/<code>reset</code> handlery, <code>checkValidity()</code> a výpis hodnot cez <code>FormData</code>.
    </p>
    <div class="playground">
      <div class="content">
        <form name="test-form" id="test-form">
          <wje-input name="default" label="Default input"></wje-input>
          <wje-input name="withValue" label="Input with value" value="Mlynské Nivy 71"></wje-input>
          <wje-input name="readonly" label="Readonly input" value="Bratislava" readonly></wje-input>
          <wje-input name="disabled" label="Disabled input" value="84103" disabled></wje-input>
          <wje-input name="defaultNumber" label="Default input" type="number" minlength="5" message="Toto je moja hlaska" required validate-on-change custom-error-display ></wje-input>
          <wje-button type="reset">Reset</wje-button>
          <wje-button type="submit" color="primary">Submit</wje-button>
        </form>
      </div>
    </div>

    <!-- TOGGLE -->

    <h2>Toggle</h2>
    <p class="description">
      Toggle režim cez atribút <code>toggle</code> (napr. <code>off</code>) a obsah prepínania cez viacnásobný slot <code>toggle</code> (ikony alebo text). Bez custom JS – prepínanie rieši komponent.
    </p>
    <div class="playground">
      <div class="content">
        <wje-button fill="link" toggle="off">
          <wje-icon name="sun" slot="toggle"></wje-icon>
          <wje-icon name="moon" slot="toggle"></wje-icon>
        </wje-button>
        
        <wje-button fill="link" toggle="off">
          <span slot="toggle">On</span>
          <span slot="toggle">Off</span>
        </wje-button>
      </div>
    </div>

    <!-- SHAPE -->

    <h2>Shape</h2>
    <p class="description">
      Tvar tlačidla cez boolean atribúty <code>round</code> a <code>circle</code>. Pre ikonové tlačidlo je použitý slot <code>icon-only</code>.
    </p>
    <div class="playground">
      <div class="content">
        <wje-button>Default</wje-button>
        <wje-button round>Round</wje-button>
        <wje-button circle><wje-icon name="clock" slot="icon-only"></wje-icon></wje-button>
      </div>
    </div>

    <!-- FILL -->

    <h2>Fill</h2>
    <p class="description">
      Variant výplne cez atribút <code>fill</code>: <code>link</code>, <code>outline</code>, <code>solid</code>. Ukážka kombinuje aj <code>circle</code> a <code>size</code> pre kompaktné ikonové tlačidlo.
    </p>
    <div class="playground">
      <div class="content">
        <wje-button>Default</wje-button>
        <wje-button fill="link">Link</wje-button>
        <wje-button fill="link" circle size="small"><wje-icon name="x" size="small"></wje-icon></wje-button>
        <wje-button fill="outline">Outline</wje-button>
        <wje-button fill="solid">Solid</wje-button>
      </div>
    </div>

    <!-- SIZE -->

    <h2>Size</h2>
    <p class="description">
      Veľkosť cez atribút <code>size</code> (<code>small</code>/<code>large</code>). Druhý riadok ukazuje kombináciu s ikonou cez slot <code>start</code>.
    </p>
    <div class="playground">
      <div class="content">
        <wje-button size="small">Small</wje-button>
        <wje-button>Default</wje-button>
        <wje-button size="large">Large</wje-button>
      </div>
      <div class="content">
        <wje-button size="small"><wje-icon slot="start" name="star"></wje-icon>Small</wje-button>
        <wje-button><wje-icon slot="start" name="star"></wje-icon>Default</wje-button>
        <wje-button size="large"><wje-icon slot="start" name="star"></wje-icon>Large</wje-button>
      </div>
    </div>
    
    <!-- SIZE - CIRCLE -->

    <h2>Size</h2>
    <p class="description">
      Veľkosť pre ikonové tlačidlo v tvare kruhu – kombinácia <code>circle</code> + <code>size</code>. Obsah je len ikona bez textu.
    </p>
    <div class="playground">
      <div class="content">
        <wje-button circle size="small"><wje-icon name="clock"></wje-icon></wje-button>
        <wje-button circle><wje-icon name="clock"></wje-icon></wje-button>
        <wje-button circle size="large"><wje-icon name="clock"></wje-icon></wje-button>
      </div>
    </div>
    
    <!-- CARET -->

    <h2>Caret</h2>
    <p class="description">
      Zobrazenie caret indikátora cez boolean atribút <code>caret</code>. Ukážka obsahuje aj lokálne CSS, ktoré upravuje odsadenie elementu v slote <code>caret</code> (<code>wje-button [slot=caret]</code>).
    </p>
    <div class="playground">
      <div class="content">
        <wje-button color="default" fill="outline" size="small" caret>Small</wje-button>
        <wje-button color="default" fill="outline" caret id="caret">Default</wje-button>
        <wje-button color="default" fill="outline" size="large" caret>Large</wje-button>
        <style>
          wje-button [slot=caret] {
            margin-inline: .5rem 0;
          }
        </style>
      </div>
    </div>

    <!-- ICONS -->

    <h2>Icons</h2>
    <p class="description">
      Ikony cez sloty <code>start</code>, <code>end</code> a <code>icon-only</code>. Ukážka porovnáva default a <code>fill="outline"</code> variant pri rovnakom obsahu.
    </p>
    <div class="playground">
      <div class="content">
        <wje-button>
          <wje-icon slot="start" name="star"></wje-icon>
          Left Icon
        </wje-button>
        <wje-button>
          Right Icon
          <wje-icon slot="end" name="star"></wje-icon>
        </wje-button>
        <wje-button>
          <wje-icon slot="icon-only" name="star"></wje-icon>
        </wje-button>
        <wje-button fill="outline">
          <wje-icon slot="start" name="star"></wje-icon>
          Left Icon
        </wje-button>
        <wje-button fill="outline">
          Right Icon
          <wje-icon slot="end" name="star"></wje-icon>
        </wje-button>
        <wje-button fill="outline">
          <wje-icon slot="icon-only" name="star"></wje-icon>
        </wje-button>
      </div>
    </div>
    
    <!-- LINK -->

    <h2>Link</h2>
    <p class="description">
      “Link” vzhľad cez <code>fill="link"</code> – vizuálne tlačidlo bez výplne, vhodné pre inline akcie alebo navigáciu.
    </p>
    <div class="playground">
      <div class="content">
        <wje-button fill="link">Link</wje-button>
      </div>
    </div>

    <!-- COLORS -->

    <h2>Colors</h2>
    <p class="description">
      Farebné varianty cez atribút <code>color</code> (napr. <code>primary</code>, <code>success</code>, <code>danger</code>…). Bez dodatočného CSS – mapovanie rieši komponent.
    </p>
    <div class="playground">
      <div class="content">
        <wje-button>Default</wje-button>
        <wje-button color="primary">Primary</wje-button>
        <wje-button color="complete">Complete</wje-button>
        <wje-button color="success">Success</wje-button>
        <wje-button color="warning">Warning</wje-button>
        <wje-button color="danger">Danger</wje-button>
        <wje-button color="info">Info</wje-button>
      </div>
    </div>

    <!-- COLORS - OUTLINE -->

    <h2>Colors outline</h2>
    <p class="description">
      Kombinácia <code>fill="outline"</code> + <code>color</code> – farba ovplyvní border a text, výplň ostáva transparentná.
    </p>
    <div class="playground">
      <div class="content">
        <wje-button fill="outline">Default</wje-button>
        <wje-button color="primary" fill="outline">Primary</wje-button>
        <wje-button color="complete" fill="outline">Complete</wje-button>
        <wje-button color="success" fill="outline">Success</wje-button>
        <wje-button color="warning" fill="outline">Warning</wje-button>
        <wje-button color="danger" fill="outline">Danger</wje-button>
        <wje-button color="info" fill="outline">Info</wje-button>
      </div>
    </div>
    
    <!-- COLORS - LINK -->

    <h2>Colors link</h2>
    <p class="description">
      Kombinácia <code>fill="link"</code> + <code>color</code> – link štýl s farebným textom podľa zvoleného variantu.
    </p>
    <div class="playground">
      <div class="content">
        <wje-button fill="link">Default</wje-button>
        <wje-button color="primary" fill="link">Primary</wje-button>
        <wje-button color="complete" fill="link">Complete</wje-button>
        <wje-button color="success" fill="link">Success</wje-button>
        <wje-button color="warning" fill="link">Warning</wje-button>
        <wje-button color="danger" fill="link">Danger</wje-button>
        <wje-button color="info" fill="link">Info</wje-button>
      </div>
    </div>

    <!-- CUSTOM CSS Attributes -->

    <h2>Custom CSS Vlastnosti</h2>
    <p class="description">
      Override štýlov cez <code>::part(native)</code> a CSS premenné (napr. <code>--wje-padding-*</code>). Ukážka mení farby, border, radius a definuje <code>:hover</code> správanie pre tlačidlo s <code>id="custom"</code>.
    </p>
    <div class="playground">
      <div class="content">
        <wje-button id="custom" fill="link">Custom</wje-button>
        <style>
          #custom {
            &::part(native) {
              background-color: #000000;
              border-color: #0af4fc;
              border-radius: 0;
              color: #0af4fc;
              --wje-padding-top: 1rem;
              --wje-padding-start: .7rem;
              --wje-padding-end: .7rem;
              --wje-padding-bottom: 1rem;
            }
          }
          #custom:hover {
            &::part(native) {
              background-color: #0af4fc;
              color: #000000;
            }
          }
        </style>
      </div>
    </div>
  </div>`;

export default class DemoButton extends WJElement {
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

    this.querySelector('#caret').refresh();

    this.context.querySelector('#text-submit').addEventListener('click', (e) => {
      console.log('klikol som submit');
    });

    this.context.querySelector('#text-submit').addEventListener('wje-button:submit', (e) => {
      console.log('klikol som submit');
    });

    let form = this.context.querySelector('#test-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (e.target.checkValidity()) {
        let formDate = new FormData(e.target);
        for (let pair of formDate.entries()) {
          console.log(pair[0] + ', ' + pair[1]);
        }
        console.log('klikol som form submit', e);
      }
    });

    this.context.querySelector('#test-form').addEventListener('reset', (e) => {
      console.log('klikol som form reset', e);
    });

    this.context.querySelector('#custom-event-button').addEventListener('single-spa-route', (e) => {
      console.log('klikol som custom event', e.detail);
    });

    this.context.querySelector('#custom-event-button-2').addEventListener('single-spa-route', (e) => {
      console.log('klikol som custom event 2', e.detail);
    });
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-button') || window.customElements.define('demo-button', DemoButton);
