import { WJElement } from "../../website/static/wj-elements/wj-main.js";

const template = document.createElement('template');
template.innerHTML = ``;

export default class DemoButton extends WJElement {
  constructor() {
    super(template);
  }

  static get outlet() {
    return 'wj-router-outlet'
  }

  draw(){
    return `<h1>Button</h1>
    <div class="container">
    
      <wj-router-outlet animation="fade"></wj-router-outlet>
      <!--  BASIC-->
  
      <h2>Basic</h2>
      <div class="playground">
        <div class="content">
          <wj-button>Default</wj-button>
          <wj-button disabled>Disabled</wj-button>
        </div>
      </div>
  
      <!--  SHAPE -->
  
      <h2>Shape</h2>
      <div class="playground">
        <div class="content">
          <wj-button>Default</wj-button>
          <wj-button round>Round</wj-button>
        </div>
      </div>
  
      <!--  FILL -->
  
      <h2>Fill</h2>
      <div class="playground">
        <div class="content">
          <wj-button>Default</wj-button>
          <wj-button fill="link">Link</wj-button>
          <wj-button fill="outline">Outline</wj-button>
          <wj-button fill="solid">Solid</wj-button>
        </div>
      </div>
  
      <!--  SIZE -->
  
      <h2>Size</h2>
      <div class="playground">
        <div class="content">
          <wj-button size="small">Small</wj-button>
          <wj-button>Default</wj-button>
          <wj-button size="large">Large</wj-button>
        </div>
      </div>
  
      <!--  ICONS -->
  
      <h2>Icons</h2>
      <div class="playground">
        <div class="content">
          <wj-button>
            <wj-icon slot="start" name="star"></wj-icon>
            Left Icon
          </wj-button>
          <wj-button>
            Right Icon
            <wj-icon slot="end" name="star"></wj-icon>
          </wj-button>
          <wj-button>
            <wj-icon slot="icon-only" name="star"></wj-icon>
          </wj-button>
  
          <wj-button fill="outline">
            <wj-icon slot="start" name="star"></wj-icon>
            Left Icon
          </wj-button>
          <wj-button fill="outline">
            Right Icon
            <wj-icon slot="end" name="star"></wj-icon>
          </wj-button>
          <wj-button fill="outline">
            <wj-icon slot="icon-only" name="star"></wj-icon>
          </wj-button>
        </div>
      </div>
  
      <!-- COLORS -->
  
      <h2>Colors</h2>
      <div class="playground">
        <div class="content">
          <wj-button>Default</wj-button>
          <wj-button color="primary">Primary</wj-button>
          <wj-button color="complete">Complete</wj-button>
          <wj-button color="success">Success</wj-button>
          <wj-button color="warning">Warning</wj-button>
          <wj-button color="danger">Danger</wj-button>
          <wj-button color="dark">Dark</wj-button>
          <wj-button color="light">Light</wj-button>
        </div>
      </div>
  
      <!-- COLORS - OUTLINE -->
  
      <h2>Colors outline</h2>
      <div class="playground">
        <div class="content">
          <wj-button fill="outline">Default</wj-button>
          <wj-button color="primary" fill="outline">Primary</wj-button>
          <wj-button color="complete" fill="outline">Complete</wj-button>
          <wj-button color="success" fill="outline">Success</wj-button>
          <wj-button color="warning" fill="outline">Warning</wj-button>
          <wj-button color="danger" fill="outline">Danger</wj-button>
          <wj-button color="dark" fill="outline">Dark</wj-button>
          <wj-button color="light" fill="outline">Light</wj-button>
        </div>
      </div>
  
      <!-- CUSTOM CSS Attributes -->
  
      <h2>Custom CSS Vlastnosti</h2>
      <div class="playground">
        <div class="content">
          <wj-button id="custom">Custom</wj-button>
          <style>
            wj-button#custom {
              --wj-color-base: #000000;
              --wj-button-border-color: #0af4fc;
              --wj-button-border-radius: 0;
              --wj-color-contrast: #0af4fc;
              --wj-padding-top: 1rem;
              --wj-padding-start: .7rem;
              --wj-padding-end: .7rem;
              --wj-padding-bottom: 1rem;
            }
          </style>
        </div>
      </div>
    </div>`;
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-button") || window.customElements.define("demo-button", DemoButton);