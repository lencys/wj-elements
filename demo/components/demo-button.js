import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "./snippet/code-snippet-builder.js";

const template = document.createElement('template');
template.innerHTML = `<style>
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

    <div class="html-snippet"></div>
    
     <!--  EVENTS -->

    <h2>Events</h2>
    <div class="playground">
      <div class="content">
        <wje-button href="https://sme.sk">External link</wje-button>
        <wje-button><wje-router-link route="animation">Internal link</wje-router-link></wje-button>
        <wje-button type="submit" id="text-submit">Submit</wje-button>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    
    <!--  BUTTON IN FORM-->
    <h2>Form button</h2>
    <div class="playground">
      <div class="content">
        <form name="test-form" id="test-form">
           <wje-input name="default" label="Default input"></wje-input>
            <wje-input name="withPlaceholder" label="Input with placeholder" placeholder="Enter company name" required ><span slot="error" style="width: 500px;display: block;color: #0af4fc;"><icon></icon><span ></span></span></wje-input>
            <wje-input name="withPlaceholderErrorInline" label="Input with placeholder error inline" placeholder="Enter company name" required   error-inline><span slot="error"><icon></icon><span ></span></span></wje-input>
            <wje-input name="withValue" label="Input with value" value="Mlynské Nivy 71"></wje-input>
            <wje-input name="readonly" label="Readonly input" value="Bratislava" readonly></wje-input>
            <wje-input name="disabled" label="Disabled input" value="84103" disabled></wje-input>
            <wje-input name="defaultNumber" label="Default input" type="number" minlength="5" message="Toto je moja hlaska" required validate-on-change custom-error-display ></wje-input>
          <wje-button type="reset">Reset</wje-button>
          <wje-button type="submit" color="primary">Submit</wje-button>
        </form>
      </div>
    </div>

    <div class="html-snippet"></div>
    
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

    <div class="html-snippet"></div>

    <!--  SHAPE -->

    <h2>Shape</h2>
    <div class="playground">
      <div class="content">
        <wje-button>Default</wje-button>
        <wje-button round>Round</wje-button>
      </div>
    </div>

    <div class="html-snippet"></div>

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

    <div class="html-snippet"></div>

    <!--  SIZE -->

    <h2>Size</h2>
    <div class="playground">
      <div class="content">
        <wje-button size="small">Small</wje-button>
        <wje-button>Default</wje-button>
        <wje-button size="large">Large</wje-button>
      </div>
    </div>

    <div class="html-snippet"></div>
    
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

    <div class="html-snippet"></div>

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

    <div class="html-snippet"></div>
    
    <!-- LINK -->

    <h2>Link</h2>
    <div class="playground">
      <div class="content">
        <wje-button fill="link">Link</wje-button>
      </div>
    </div>

    <div class="html-snippet"></div>

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

    <div class="html-snippet"></div>

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

    <div class="html-snippet"></div>

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

    <div class="html-snippet"></div>

    <div class="content" style="display: none;">
      this.querySelector("#caret").refresh();

      this.context.querySelector('#text-submit').addEventListener('click', (e) => {
          console.log('klikol som submit')
      });

      this.context.querySelector('#text-submit').addEventListener('wje-button:submit', (e) => {
          console.log('klikol som submit')
      });

      let form = this.context.querySelector('#test-form');
      form.addEventListener('submit', (e) => {
          e.preventDefault()
          if(e.target.checkValidity()){
              let formDate = new FormData(e.target)
              for (var pair of formDate.entries()) {
                  console.log(pair[0]+ ', '+ pair[1]);
              }
              console.log('klikol som form submit', e)
          }
      })

      this.context.querySelector('#test-form').addEventListener('reset', (e) => {
          console.log('klikol som form reset', e)
      })
    </div>

    <div class="html-snippet"></div>
  </div>`;

export default class DemoButton extends WJElement {
    constructor() {
        super(template);
    }

    afterDraw() {
        const codeSnippet = new CodeSnippet();
        codeSnippet.generateSnippet(template, document);

        this.querySelector("#caret").refresh();

        this.context.querySelector('#text-submit').addEventListener('click', (e) => {
            console.log('klikol som submit')
        });

        this.context.querySelector('#text-submit').addEventListener('wje-button:submit', (e) => {
            console.log('klikol som submit')
        });

        let form = this.context.querySelector('#test-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            if(e.target.checkValidity()){
                let formDate = new FormData(e.target)
                for (var pair of formDate.entries()) {
                    console.log(pair[0]+ ', '+ pair[1]);
                }
                console.log('klikol som form submit', e)
            }
        })

        this.context.querySelector('#test-form').addEventListener('reset', (e) => {
            console.log('klikol som form reset', e)
        })
    }
}

let __esModule = 'true';
export {__esModule};

customElements.get("demo-button") || window.customElements.define("demo-button", DemoButton);

