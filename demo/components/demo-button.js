import WJElement from "../../dist/wje-element.js";

const template = document.createElement('template');
template.innerHTML = ``;

export default class DemoButton extends WJElement {
  constructor() {
    super(template);
  }

  draw(){
    return `<style>
      wje-button {
        margin: .25rem;
      }
    </style>
    <h1>Button</h1>
    <div class="container">
      
      <!--  BASIC-->
  
      <h2>Basic</h2>
      <div class="playground">
        <div class="content">
          <wje-button>Default</wje-button>
          <wje-button disabled>Disabled</wje-button>
        </div>
      </div>
      
       <!--  TOGGLE-->
  
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
  
      <!--  SHAPE -->
  
      <h2>Shape</h2>
      <div class="playground">
        <div class="content">
          <wje-button>Default</wje-button>
          <wje-button round>Round</wje-button>
        </div>
      </div>
  
      <!--  FILL -->
  
      <h2>Fill</h2>
      <div class="playground">
        <div class="content">
          <wje-button>Default</wje-button>
          <wje-button fill="link">Link</wje-button>
          <wje-button fill="outline">Outline</wje-button>
          <wje-button fill="solid">Solid</wje-button>
        </div>
      </div>
  
      <!--  SIZE -->
  
      <h2>Size</h2>
      <div class="playground">
        <div class="content">
          <wje-button size="small">Small</wje-button>
          <wje-button>Default</wje-button>
          <wje-button size="large">Large</wje-button>
        </div>
      </div>
      
       <!-- CARET -->
  
      <h2>Caret</h2>
      <div class="playground">
        <div class="content">
          <wje-button color="default" fill="outline" size="small" caret>Small</wje-button>
          <wje-button color="default" fill="outline" caret>Default</wje-button>
          <wje-button color="default" fill="outline" size="large" caret>Large</wje-button>
        </div>
      </div>
  
      <!--  ICONS -->
  
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
          <wje-button color="neutral">Neutral</wje-button>
          
          <wje-button fill="outline">Default</wje-button>
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
          <wje-button color="neutral" fill="outline">Neutral</wje-button>
        </div>
      </div>
  
      <!-- CUSTOM CSS Attributes -->
  
      <h2>Custom CSS Vlastnosti</h2>
      <div class="playground">
        <div class="content">
          <wje-button id="custom">Custom</wje-button>
          <style>
            #custom {
              --wje-button-background-color: #000000;
              --wje-button-border-color: #0af4fc;
              --wje-button-border-radius: 0;
              --wje-button-color: #0af4fc;
              --wje-padding-top: 1rem;
              --wje-padding-start: .7rem;
              --wje-padding-end: .7rem;
              --wje-padding-bottom: 1rem;
            }
            
            #custom:hover {
              --wje-button-background-color: #0af4fc;
              --wje-button-color: #000000;
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

