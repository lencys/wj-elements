import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `
  <h1>Breadcrumb</h1>
  <div class="container">

    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wje-breadcrumbs>
          <wje-breadcrumb>Home</wje-breadcrumb>
          <wje-breadcrumb>Electronics</wje-breadcrumb>
          <wje-breadcrumb>Cameras</wje-breadcrumb>
          <wje-breadcrumb>Film</wje-breadcrumb>
        </wje-breadcrumbs>
      </div>
    </div>
    
    <!-- ICONS -->

    <h2>Icons</h2>
    <div class="playground">
      <div class="content">
        <p>Ikony na začiatku</p>
        <wje-breadcrumbs>
          <wje-breadcrumb>
            <wje-icon slot="start" name="home"></wje-icon>
            Home
          </wje-breadcrumb>
          <wje-breadcrumb>
            <wje-icon slot="start" name="bolt"></wje-icon>
            Electronics
          </wje-breadcrumb>
          <wje-breadcrumb>
            <wje-icon slot="start" name="camera"></wje-icon>
            Cameras
          </wje-breadcrumb>
          <wje-breadcrumb>
            <wje-icon slot="start" name="video"></wje-icon>
            Film
          </wje-breadcrumb>
        </wje-breadcrumbs>
        
        <p>Ikony na konci</p>
        <wje-breadcrumbs>
          <wje-breadcrumb>
            Home
            <wje-icon slot="end" name="home"></wje-icon>
          </wje-breadcrumb>
          <wje-breadcrumb>
            Electronics
            <wje-icon slot="end" name="bolt"></wje-icon>
          </wje-breadcrumb>
          <wje-breadcrumb>
            Cameras
            <wje-icon slot="end" name="camera"></wje-icon>
          </wje-breadcrumb>
          <wje-breadcrumb>
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
          <wje-breadcrumb>
            Home
            <wje-icon slot="separator" name="slash"></wje-icon>
          </wje-breadcrumb>
          <wje-breadcrumb>
            Electronics
            <wje-icon slot="separator" name="slash"></wje-icon>
          </wje-breadcrumb>
          <wje-breadcrumb>
            Cameras
            <wje-icon slot="separator" name="slash"></wje-icon>
          </wje-breadcrumb>
          <wje-breadcrumb>
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
          <wje-breadcrumb>Home</wje-breadcrumb>
          <wje-breadcrumb>Electronics</wje-breadcrumb>
          <wje-breadcrumb>Photography</wje-breadcrumb>
          <wje-breadcrumb>Cameras</wje-breadcrumb>
          <wje-breadcrumb>Film</wje-breadcrumb>
          <wje-breadcrumb>35 mm</wje-breadcrumb>
          <wje-breadcrumb>A</wje-breadcrumb>
          <wje-breadcrumb>B</wje-breadcrumb>
          <wje-breadcrumb>C</wje-breadcrumb>
        </wje-breadcrumbs>
      </div>
    </div>
    
    <!-- MAX ITEMS - DROPDOWN -->

    <h2>Max Items</h2>
    <div class="playground">
      <div class="content">
        <wje-breadcrumbs max-items="4" items-before-collapse="2" variant="dropdown">
          <wje-breadcrumb>Home</wje-breadcrumb>
          <wje-breadcrumb>Electronics</wje-breadcrumb>
          <wje-breadcrumb>Photography</wje-breadcrumb>
          <wje-breadcrumb>Cameras</wje-breadcrumb>
          <wje-breadcrumb>Film</wje-breadcrumb>
          <wje-breadcrumb>35 mm</wje-breadcrumb>
          <wje-breadcrumb>A</wje-breadcrumb>
          <wje-breadcrumb>B</wje-breadcrumb>
          <wje-breadcrumb>C</wje-breadcrumb>
        </wje-breadcrumbs>
      </div>
    </div>
  </div>`;

export default class DemoBreadcrumb extends WJElement {
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
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-breadcrumb') || window.customElements.define('demo-breadcrumb', DemoBreadcrumb);
