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
<h1>Split View</h1>
  <div class="container">
    
    <style>
      wje-split-view {
        height: 300px;
        width: 100%;
        border-color: var(--wje-border-color); 
        border-style: solid;
        border-width: 1px;
      }
    </style>
        
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wje-split-view initial="250">
          <div slot="start">Start</div>
          <div slot="end">End</div>
        </wje-split-view>
      </div>
    </div>   
    
    <div class="html-snippet"></div>
    
    <!-- VERTICAL -->

    <h2>Vertical</h2>
    <div class="playground">
      <div class="content">
        <wje-split-view vertical>
          <div slot="start">Top</div>
          <div slot="end">Bottom</div>
        </wje-split-view>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- MIN/MAX -->

    <h2>Min/Max</h2>
    <div class="playground">
      <div class="content">
        <wje-split-view min="50" max="50" initial="75">
          <div slot="start">Start</div>
          <div slot="end">End</div>
        </wje-split-view>
      </div>
    </div> 

    <div class="html-snippet"></div>
    
    <!-- DISABLED -->

    <h2>Disabled</h2>
    <div class="playground">
      <div class="content">
        <wje-split-view disabled>
          <div slot="start">Start</div>
          <div slot="end">End</div>
        </wje-split-view>
      </div>
    </div> 

    <div class="html-snippet"></div>
    
    <!-- SPLIT -->

    <h2>Split</h2>
    <div class="playground">
      <div class="content">
        <wje-split-view initial="50">
          <div slot="start">Start</div>
          <div slot="end">
            <wje-split-view vertical id="custom-vertical-2">
              <div slot="start">Top</div>
              <div slot="end">Bottom</div>
            </wje-split-view>
          </div>
        </wje-split-view>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- CUSTOM -->

    <h2>Custom</h2>
    <div class="playground">
      <div class="content">
        <wje-split-view id="custom">
          <div slot="start">Start</div>
          <wje-icon name="grip-vertical" slot="divider"></wje-icon>
          <div slot="end">End</div>
        </wje-split-view>
        <style>
          #custom {
            --wje-split-view-divider-background: mediumvioletred !important;
            --wje-split-view-divider-size: 1px !important;
          }
          #custom wje-icon {
            position: absolute;
            background-color: mediumvioletred;
            padding: .5rem 0.25rem;
            color: white;
            border-radius: 4px;
          }
        </style>  
      </div>
    </div>

    <div class="html-snippet"></div>

    <h3>Javascript</h3>
    <pre>
      <code>
        handleDrag = (e) => {
          if(this.hasAttribute("disabled"))
              return false;

          drag(this, {
              onMove: (x, y) => {
                  let newPositionInPixels = this.hasAttribute("vertical") ? y : x;
                  let sizeA = this.pixelsToPercentage(newPositionInPixels);
                  let sizeB = 100 - this.pixelsToPercentage(newPositionInPixels);

                  this.style.setProperty("--wje-split-view-calc-a", sizeA + "%");
                  this.style.setProperty("--wje-split-view-calc-b", sizeB + "%");
              },
              initialEvent: e
          });
        }
      </code>
    </pre>
    <pre>
      <code>
        detectSize() {
          const { width, height } = this.getBoundingClientRect();
          this.size = this.hasAttribute("vertical") ? height : width;
        }
      </code>
    </pre>
    <pre>
      <code>
        pixelsToPercentage(value) {
          return (value / this.size) * 100;
        }
      </code>
    </pre>
  </div>`;

export default class DemoSplitView extends WJElement {
  constructor() {
    super(template);
  }

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(template, document);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-split-view") || window.customElements.define("demo-split-view", DemoSplitView);