import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `
  <h1>Breadcrumb</h1>
  <div class="container">

    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wj-breadcrumbs>
          <wj-breadcrumb href="/house">Home</wj-breadcrumb>
          <wj-breadcrumb href="/electronics">Electronics</wj-breadcrumb>
          <wj-breadcrumb href="/cameras">Cameras</wj-breadcrumb>
          <wj-breadcrumb href="/film">Film</wj-breadcrumb>
        </wj-breadcrumbs>
      </div>
    </div>
    
    <!-- ICONS -->

    <h2>Icons</h2>
    <div class="playground">
      <div class="content">
        <p>Ikony na začiatku</p>
        <wj-breadcrumbs>
          <wj-breadcrumb href="/house">
            <wj-icon slot="start" name="house"></wj-icon>
            Home
          </wj-breadcrumb>
          <wj-breadcrumb href="/electronics">
            <wj-icon slot="start" name="bolt"></wj-icon>
            Electronics
          </wj-breadcrumb>
          <wj-breadcrumb href="/cameras">
            <wj-icon slot="start" name="camera"></wj-icon>
            Cameras
          </wj-breadcrumb>
          <wj-breadcrumb href="/film">
            <wj-icon slot="start" name="film"></wj-icon>
            Film
          </wj-breadcrumb>
        </wj-breadcrumbs>
        
        <p>Ikony na konci</p>
        <wj-breadcrumbs>
          <wj-breadcrumb href="/house">
            Home
            <wj-icon slot="end" name="house"></wj-icon>
          </wj-breadcrumb>
          <wj-breadcrumb href="/electronics">
            Electronics
            <wj-icon slot="end" name="bolt"></wj-icon>
          </wj-breadcrumb>
          <wj-breadcrumb href="/cameras">
            Cameras
            <wj-icon slot="end" name="camera"></wj-icon>
          </wj-breadcrumb>
          <wj-breadcrumb href="/film">
            Film
            <wj-icon slot="end" name="film"></wj-icon>
          </wj-breadcrumb>
        </wj-breadcrumbs>
      </div>
    </div>
    
    <!-- CUSTOM SEPARATOR -->

    <h2>Custom Separator</h2>
    <div class="playground">
      <div class="content">
        <wj-breadcrumbs>
          <wj-breadcrumb href="/home">
            Home
            <wj-icon slot="separator" name="arrow-right-long"></wj-icon>
          </wj-breadcrumb>
          <wj-breadcrumb href="/electronics">
            Electronics
            <wj-icon slot="separator" name="arrow-right-long"></wj-icon>
          </wj-breadcrumb>
          <wj-breadcrumb href="/cameras">
            Cameras
            <wj-icon slot="separator" name="arrow-right-long"></wj-icon>
          </wj-breadcrumb>
          <wj-breadcrumb href="/film">
            Film
            <wj-icon slot="separator" name="arrow-right-long"></wj-icon>
          </wj-breadcrumb>
        </wj-breadcrumbs>
      </div>
    </div>

    <!-- MAX ITEMS -->

    <h2>Max Items</h2>
    <div class="playground">
      <div class="content">
        <wj-breadcrumbs max-items="4" items-before-collapse="2">
          <wj-breadcrumb href="/home">Home</wj-breadcrumb>
          <wj-breadcrumb href="/electronics">Electronics</wj-breadcrumb>
          <wj-breadcrumb href="/photography">Photography</wj-breadcrumb>
          <wj-breadcrumb href="/cameras">Cameras</wj-breadcrumb>
          <wj-breadcrumb href="/film">Film</wj-breadcrumb>
          <wj-breadcrumb href="/35mm">35 mm</wj-breadcrumb>
          <wj-breadcrumb href="/a">A</wj-breadcrumb>
          <wj-breadcrumb href="/b">B</wj-breadcrumb>
          <wj-breadcrumb href="/c">C</wj-breadcrumb>
        </wj-breadcrumbs>
      </div>
    </div>
    
    <!-- MAX ITEMS - DROPDOWN -->

    <h2>Max Items</h2>
    <div class="playground">
      <div class="content">
        <wj-breadcrumbs max-items="4" items-before-collapse="2" collapsed-variant="dropdown">
          <wj-breadcrumb href="/home">Home</wj-breadcrumb>
          <wj-breadcrumb href="/electronics">Electronics</wj-breadcrumb>
          <wj-breadcrumb href="/photography">Photography</wj-breadcrumb>
          <wj-breadcrumb href="/cameras">Cameras</wj-breadcrumb>
          <wj-breadcrumb href="/film">Film</wj-breadcrumb>
          <wj-breadcrumb href="/35mm">35 mm</wj-breadcrumb>
          <wj-breadcrumb href="/a">A</wj-breadcrumb>
          <wj-breadcrumb href="/b">B</wj-breadcrumb>
          <wj-breadcrumb href="/c">C</wj-breadcrumb>
        </wj-breadcrumbs>
      </div>
    </div>
  </div>`;

export default class DemoBreadcrumb extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-breadcrumb") || window.customElements.define("demo-breadcrumb", DemoBreadcrumb);