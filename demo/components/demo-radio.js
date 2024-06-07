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
<h1>Radio</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content" style="display: block;">
        <wje-radio-group value="dog">
          <wje-radio value="cat">Cat</wje-radio>
          <wje-radio value="dog">Dog</wje-radio>
          <wje-radio value="elephant" disabled="">Elephant</wje-radio>
          <wje-radio indeterminate value="rabbit" >Rabbit</wje-radio>
        </wje-radio-group>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- INLINE -->

    <h2>Inline</h2>
    <div class="playground">
      <div class="content" style="display: block;">
        <wje-radio-group inline>
          <wje-radio value="cat">Cat</wje-radio>
          <wje-radio value="dog">Dog</wje-radio>
          <wje-radio value="horse">Horse</wje-radio>
          <wje-radio value="rabbit" >Rabbit</wje-radio>
          <wje-radio value="hen">Hen</wje-radio>
          <wje-radio value="goose">Goose</wje-radio>
          <wje-radio value="duck">Duck</wje-radio>
          <wje-radio value="pig" >Pig</wje-radio>
        </wje-radio-group>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- COLORS -->

    <h2>Colors</h2>
    <div class="playground">
      <div class="content" style="display: block;">
        <wje-radio-group value="complete">
          <wje-radio value="default">Default</wje-radio>
          <wje-radio value="success" color="success">Success</wje-radio>
          <wje-radio value="primary" color="primary">Primary</wje-radio>
          <wje-radio value="complete" color="complete">Complete</wje-radio>
          <wje-radio value="warning" color="warning">Warning</wje-radio>
          <wje-radio value="danger" color="danger">Danger</wje-radio>
          <wje-radio value="neutral" color="neutral">Neutral</wje-radio>
        </wje-radio-group>
      </div>
    </div>

    <div class="html-snippet"></div>

    <h3>Javascript</h3>
    <pre>
      <code>
        inputEvent = (e) => {
          this.checked = e.target.checked;
        }

        disconnectedCallback() {
          event.removeElement(this);
        }
      </code>
    </pre>
    
  </div>`;

export default class DemoRadio extends WJElement {
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

customElements.get("demo-radio") || window.customElements.define("demo-radio", DemoRadio);