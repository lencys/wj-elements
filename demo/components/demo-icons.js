import WJElement from "../../dist/wje-element.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Icons</h1>
  <div class="container">

    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wje-icon name="check"></wje-icon>
        <wje-icon name="check" size="large"></wje-icon>
        <wje-icon name="check" color="primary"></wje-icon>
        <wje-icon name="check" size="large" color="danger"></wje-icon>
      </div>
    </div>

    <!-- STYLE -->

    <h2>Style</h2>
    <div class="playground">
      <div class="content style">
        <wje-icon name="alarm" size="large"></wje-icon>
        <wje-icon name="alarm" size="large" filled></wje-icon>
        <style>
          .style wje-icon:not([filled])::part(svg) {
            color: yellow;
          }
          .style wje-icon[filled]::part(svg) {
            fill: red;
          }
        </style>
      </div>
    </div>
    
    <!-- CUSTOM -->

    <h2>Custom</h2>
    <div class="playground">
      <div class="content">
        <wje-icon class="custom" name="check"></wje-icon>
        <style>
          wje-icon.custom {
            --wje-icon-size: 60px;
            color: blue;
          }
          
          wje-icon::part(svg) {
            stroke-width: 1;
          }
        </style>
      </div>
    </div>
  </div>`;

export default class DemoIcons extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-icons") || window.customElements.define("demo-icons", DemoIcons);