import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "../assets/js/code-snippet-builder.js";

const template = document.createElement('template');

template.innerHTML = `
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