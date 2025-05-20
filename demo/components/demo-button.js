import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');
template.innerHTML = `
  <h1>Button</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wje-button>Default</wje-button>
        <wje-button disabled>Disabled</wje-button>
      </div>
    </div>
    
    <!-- TOOLTIP -->

    <h2>Tooltip</h2>
    <div class="playground">
      <div class="content">
        <wje-button tooltip="Button tooltip" tooltip-placement="left">Default</wje-button>
      </div>
    </div>
    
    <!-- EVENTS -->

    <h2>Events</h2>
    <div class="playground">
      <div class="content">
        <wje-button href="https://sme.sk">External link</wje-button>
        <wje-button><wje-router-link route="animation">Internal link</wje-router-link></wje-button>
        <wje-button type="submit" id="text-submit">Submit</wje-button>
      </div>
    </div>

    <!-- CUSTOM EVENTS -->

    <h2>Custom events</h2>
    <div class="playground">
      <div class="content">
        <wje-button id="custom-event-button" custom-event="single-spa-route" custom-event-userId="1" custom-event-departmentId="2">Trigger custom event</wje-button>
        <wje-button id="custom-event-button-2" custom-event="single-spa-route" custom-event-route="user.detail">Trigger custom event</wje-button>
      </div>
    </div>
    
    <!-- BUTTON IN FORM -->
    
    <h2>Form button</h2>
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
    <div class="playground">
      <div class="content">
        <wje-button>Default</wje-button>
        <wje-button round>Round</wje-button>
        <wje-button circle><wje-icon name="clock" slot="icon-only"></wje-icon></wje-button>
      </div>
    </div>

    <!-- FILL -->

    <h2>Fill</h2>
    <div class="playground">
      <div class="content">
        <wje-button>Default</wje-button>
        <wje-button fill="link">Link</wje-button>
        <wje-button fill="outline">Outline</wje-button>
        <wje-button fill="solid">Solid</wje-button>
      </div>
    </div>

    <!-- SIZE -->

    <h2>Size</h2>
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
    <div class="playground">
      <div class="content">
        <wje-button circle size="small"><wje-icon name="clock"></wje-icon></wje-button>
        <wje-button circle><wje-icon name="clock"></wje-icon></wje-button>
        <wje-button circle size="large"><wje-icon name="clock"></wje-icon></wje-button>
      </div>
    </div>
    
    <!-- CARET -->

    <h2>Caret</h2>
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
    <div class="playground">
      <div class="content">
        <wje-button fill="link">Link</wje-button>
      </div>
    </div>

    <!-- COLORS -->

    <h2>Colors</h2>
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
      console.log('klikol som custom event 22', e.detail);
    });
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-button') || window.customElements.define('demo-button', DemoButton);
