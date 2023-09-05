import { WJElement } from "../../website/static/wj-elements/wj-main.js";

const template = document.createElement('template');

template.innerHTML = `<style>
    .content {
      display: block;
    }
  </style>
  
  <h1>Slider</h1>
  <div class="container">

    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
          <wj-slider></wj-slider>
      </div>
    </div>

    <!--  BUBBLE-->

    <h2>Bubble</h2>
    <div class="playground">
      <div class="content">
        <wj-slider bubble></wj-slider>
      </div>
    </div>

    <!--  MIN-MAX-->

    <h2>Label</h2>
    <div class="playground">
      <div class="content">
        <wj-slider min="20" max="80" value="50" bubble>
          <span size="large" slot="label">Lorem ipsum</span>
        </wj-slider>
      </div>
    </div>

    <!-- ICONS -->

    <h2>Icons</h2>
    <div class="playground">
      <div class="content">
        <wj-slider min="20" max="80" value="50" bubble>
          <wj-icon name="volume-low" size="large" slot="start"></wj-icon>
          <wj-icon name="volume-high" size="large" slot="end"></wj-icon>
          <style>
              wj-icon {
                  --wj-icon-size: 24px;
              }
          </style>
        </wj-slider>
      </div>
    </div>

    <!--  COLORS-->

    <h2>Colors</h2>
    <div class="playground">
      <div class="content">
        <wj-grid>
          <wj-row>
            <wj-col>
              <wj-slider color="primary" value="50"></wj-slider>
            </wj-col>
            <wj-col>
              <wj-slider color="complete" value="50"></wj-slider>
            </wj-col>
            <wj-col>
              <wj-slider color="success" value="50"></wj-slider>
            </wj-col>
            <wj-col>
              <wj-slider color="warning" value="50"></wj-slider>
            </wj-col>
            <wj-col>
              <wj-slider color="danger" value="50"></wj-slider>
            </wj-col>
            <wj-col>
              <wj-slider color="dark" value="50"></wj-slider>
            </wj-col>
            <wj-col>
              <wj-slider color="light" value="50"></wj-slider>
            </wj-col>
          </wj-row>
        </wj-grid>
      </div>
    </div>
  </div>`;

export default class DemoSlider extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-slider") || window.customElements.define("demo-slider", DemoSlider);