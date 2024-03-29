import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');
template.innerHTML = ``;

export default class DemoButton extends WJElement {
  constructor() {
    super(template);
  }

  draw(){
    return `<style>
      wj-button {
        margin: .25rem;
      }
    </style>
    <h1>Button</h1>
    <div class="container">
      
      <!--  BASIC-->
  
      <h2>Basic</h2>
      <div class="playground">
        <div class="content">
          <wj-button>Default</wj-button>
          <wj-button disabled>Disabled</wj-button>
        </div>
      </div>
      
       <!--  TOGGLE-->
  
      <h2>Toggle</h2>
      <div class="playground">
        <div class="content">
          <wj-button fill="link" toggle="off">
            <wj-icon name="sun" slot="toggle"></wj-icon>
            <wj-icon name="moon" slot="toggle"></wj-icon>
          </wj-button>
          
          <wj-button fill="link" toggle="off">
            <span slot="toggle">On</span>
            <span slot="toggle">Off</span>
          </wj-button>
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
      
       <!-- CARET -->
  
      <h2>Caret</h2>
      <div class="playground">
        <div class="content">
          <wj-button color="default" fill="outline" size="small" caret>Small</wj-button>
          <wj-button color="default" fill="outline" caret>Default</wj-button>
          <wj-button color="default" fill="outline" size="large" caret>Large</wj-button>
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
      
      <!-- LINK -->
  
      <h2>Link</h2>
      <div class="playground">
        <div class="content">
          <wj-button fill="link">Link</wj-button>
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
          <wj-button color="neutral">Neutral</wj-button>
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
          <wj-button color="neutral" fill="outline">Neutral</wj-button>
        </div>
      </div>
  
      <!-- CUSTOM CSS Attributes -->
  
      <h2>Custom CSS Vlastnosti</h2>
      <div class="playground">
        <div class="content">
          <wj-button id="custom">Custom</wj-button>
          <style>
            wj-button#custom {
              --wj-button-background-color: #000000;
              --wj-button-border-color: #0af4fc;
              --wj-button-border-radius: 0;
              --wj-button-color: #0af4fc;
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