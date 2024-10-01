import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "../assets/js/code-snippet-builder.js";

const template = document.createElement('template');

template.innerHTML = `
  <style>
    .content {
      display: block;
    }
  </style>
  
  <h1>Slider</h1>
  <div class="container">

    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
          <wje-slider></wje-slider>
      </div>
    </div>

    <!-- BUBBLE -->

    <h2>Bubble</h2>
    <div class="playground">
      <div class="content">
        <wje-slider bubble></wje-slider>
      </div>
    </div>

    <!-- MIN-MAX -->

    <h2>Label</h2>
    <div class="playground">
      <div class="content">
        <wje-slider min="20" max="80" value="50" bubble>
          <span size="large" slot="label">Lorem ipsum</span>
        </wje-slider>
      </div>
    </div>

    <!-- ICONS -->

    <h2>Icons</h2>
    <div class="playground">
      <div class="content">
        <wje-slider class="example" min="20" max="80" value="50" bubble>
          <wje-icon name="volume-3" size="large" slot="start"></wje-icon>
          <wje-icon name="volume" size="large" slot="end"></wje-icon>
          <style>
              .example wje-icon {
                  --wje-icon-size: 24px;
              }
          </style>
        </wje-slider>
      </div>
    </div>

    <!-- COLORS -->

    <h2>Colors</h2>
    <div class="playground">
      <div class="content">
        <wje-grid>
          <wje-row>
            <wje-col>
              <wje-slider color="primary" value="50"></wje-slider>
            </wje-col>
            <wje-col>
              <wje-slider color="complete" value="50"></wje-slider>
            </wje-col>
            <wje-col>
              <wje-slider color="success" value="50"></wje-slider>
            </wje-col>
            <wje-col>
              <wje-slider color="warning" value="50"></wje-slider>
            </wje-col>
            <wje-col>
              <wje-slider color="danger" value="50"></wje-slider>
            </wje-col>
            <wje-col>
              <wje-slider color="dark" value="50"></wje-slider>
            </wje-col>
            <wje-col>
              <wje-slider color="light" value="50"></wje-slider>
            </wje-col>
          </wje-row>
        </wje-grid>
      </div>
    </div>
  </div>`;

export default class DemoSlider extends WJElement {
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

customElements.get("demo-slider") || window.customElements.define("demo-slider", DemoSlider);