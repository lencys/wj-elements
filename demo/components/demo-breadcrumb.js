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
  <h1>Breadcrumb</h1>
  <div class="container">

    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wje-breadcrumbs>
          <wje-breadcrumb href="/house">Home</wje-breadcrumb>
          <wje-breadcrumb href="/electronics">Electronics</wje-breadcrumb>
          <wje-breadcrumb href="/cameras">Cameras</wje-breadcrumb>
          <wje-breadcrumb href="/film">Film</wje-breadcrumb>
        </wje-breadcrumbs>
      </div>
    </div>
        
    <div class="html-snippet"></div>
    
    <!-- ICONS -->

    <h2>Icons</h2>
    <div class="playground">
      <div class="content">
        <p>Ikony na začiatku</p>
        <wje-breadcrumbs>
          <wje-breadcrumb href="/house">
            <wje-icon slot="start" name="home"></wje-icon>
            Home
          </wje-breadcrumb>
          <wje-breadcrumb href="/electronics">
            <wje-icon slot="start" name="bolt"></wje-icon>
            Electronics
          </wje-breadcrumb>
          <wje-breadcrumb href="/cameras">
            <wje-icon slot="start" name="camera"></wje-icon>
            Cameras
          </wje-breadcrumb>
          <wje-breadcrumb href="/film">
            <wje-icon slot="start" name="video"></wje-icon>
            Film
          </wje-breadcrumb>
        </wje-breadcrumbs>
        
        <p>Ikony na konci</p>
        <wje-breadcrumbs>
          <wje-breadcrumb href="/house">
            Home
            <wje-icon slot="end" name="home"></wje-icon>
          </wje-breadcrumb>
          <wje-breadcrumb href="/electronics">
            Electronics
            <wje-icon slot="end" name="bolt"></wje-icon>
          </wje-breadcrumb>
          <wje-breadcrumb href="/cameras">
            Cameras
            <wje-icon slot="end" name="camera"></wje-icon>
          </wje-breadcrumb>
          <wje-breadcrumb href="/film">
            Film
            <wje-icon slot="end" name="video"></wje-icon>
          </wje-breadcrumb>
        </wje-breadcrumbs>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- CUSTOM SEPARATOR -->

    <h2>Custom Separator</h2>
    <div class="playground">
      <div class="content">
        <wje-breadcrumbs>
          <wje-breadcrumb href="/home">
            Home
            <wje-icon slot="separator" name="slash"></wje-icon>
          </wje-breadcrumb>
          <wje-breadcrumb href="/electronics">
            Electronics
            <wje-icon slot="separator" name="slash"></wje-icon>
          </wje-breadcrumb>
          <wje-breadcrumb href="/cameras">
            Cameras
            <wje-icon slot="separator" name="slash"></wje-icon>
          </wje-breadcrumb>
          <wje-breadcrumb href="/film">
            Film
            <wje-icon slot="separator" name="slash"></wje-icon>
          </wje-breadcrumb>
        </wje-breadcrumbs>
      </div>
    </div>

    <div class="html-snippet"></div>

    <!-- MAX ITEMS -->

    <h2>Max Items</h2>
    <div class="playground">
      <div class="content">
        <wje-breadcrumbs max-items="4" items-before-collapse="2">
          <wje-breadcrumb href="/home">Home</wje-breadcrumb>
          <wje-breadcrumb href="/electronics">Electronics</wje-breadcrumb>
          <wje-breadcrumb href="/photography">Photography</wje-breadcrumb>
          <wje-breadcrumb href="/cameras">Cameras</wje-breadcrumb>
          <wje-breadcrumb href="/film">Film</wje-breadcrumb>
          <wje-breadcrumb href="/35mm">35 mm</wje-breadcrumb>
          <wje-breadcrumb href="/a">A</wje-breadcrumb>
          <wje-breadcrumb href="/b">B</wje-breadcrumb>
          <wje-breadcrumb href="/c">C</wje-breadcrumb>
        </wje-breadcrumbs>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- MAX ITEMS - DROPDOWN -->

    <h2>Max Items</h2>
    <div class="playground">
      <div class="content">
        <wje-breadcrumbs max-items="4" items-before-collapse="2" collapsed-variant="dropdown">
          <wje-breadcrumb href="/home">Home</wje-breadcrumb>
          <wje-breadcrumb href="/electronics">Electronics</wje-breadcrumb>
          <wje-breadcrumb href="/photography">Photography</wje-breadcrumb>
          <wje-breadcrumb href="/cameras">Cameras</wje-breadcrumb>
          <wje-breadcrumb href="/film">Film</wje-breadcrumb>
          <wje-breadcrumb href="/35mm">35 mm</wje-breadcrumb>
          <wje-breadcrumb href="/a">A</wje-breadcrumb>
          <wje-breadcrumb href="/b">B</wje-breadcrumb>
          <wje-breadcrumb href="/c">C</wje-breadcrumb>
        </wje-breadcrumbs>
      </div>
    </div>

    <div class="html-snippet"></div>

    <h3>Javascript</h3>
    <pre>
      <code>
      collapseAll(exception) {
        this.getAccordions().forEach((accordion) => {
            if(accordion !== exception)
                accordion.collapse();
        });
      }
      </code>
    </pre>
  </div>`;

export default class DemoBreadcrumb extends WJElement {
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

customElements.get("demo-breadcrumb") || window.customElements.define("demo-breadcrumb", DemoBreadcrumb);