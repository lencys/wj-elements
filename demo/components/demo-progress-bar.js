import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Progress bar</h1>
  <div class="container">

    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wj-progress-bar progress="60"></wj-progress-bar>
      </div>
    </div>

    <!-- TYPE -->

    <h2>Type</h2>
    <div class="playground">
      <div class="content" style="flex-direction: column;">
        <p>
          <wj-progress-bar progress="60"></wj-progress-bar>
        </p>
        <p>
          <wj-progress-bar progress="60" type="circle" radius="30"></wj-progress-bar>
        </p>
      </div>
    </div>

    <!-- LABEL -->

    <h2>Label</h2>
    <div class="playground">
      <div class="content">
        <wj-progress-bar progress="60" type="circle" radius="30">
          <wj-label slot="start">Slot Start</wj-label>
          <wj-label slot="end">Slot End</wj-label>
        </wj-progress-bar>
      </div>
    </div>

    <!-- LINECAP -->

    <h2>Linecap</h2>
    <div class="playground">
      <div class="content" style="flex-direction: column;">
        <wj-progress-bar progress="80" stroke="12" linecap="round"></wj-progress-bar>
      </div>
    </div>

    <!-- RADIUS-->

    <h2>Radius</h2>
    <div class="playground">
      <div class="content">
        <wj-progress-bar progress="60" radius="70" type="circle"></wj-progress-bar>
      </div>
    </div>

    <!--  STROKE-->

    <h2>Stroke</h2>
    <div class="playground">
      <div class="content">
        <wj-progress-bar progress="60" radius="20" stroke="1"></wj-progress-bar>
      </div>
    </div>

    <!--  IMAGE-->

    <h2>Progress bar with image</h2>
    <div class="playground">
      <div class="content">
        <wj-progress-bar progress="60" radius="20" stroke="3" color="danger" type="circle">
          <wj-thumbnail>
            <img alt="Silhouette of mountains" src="/assets/img/thumbnail.svg" />
          </wj-thumbnail>
          <style>
            wj-thumbnail {
              --wj-border-radius: 50%;
              --wj-thumbnail-width: 38px;
              --wj-thumbnail-height: 38px;
            }
          </style>
        </wj-progress-bar>
      </div>
    </div>

    <!--  COLORS-->

    <h2>Colors</h2>
    <div class="playground">
      <div class="content">
        <p>
          <wj-progress-bar progress="60" radius="20"></wj-progress-bar>
        </p>
        <p>
          <wj-progress-bar progress="60" radius="20" color="primary"></wj-progress-bar>
        </p>
        <p>
          <wj-progress-bar progress="60" radius="20" color="complete"></wj-progress-bar>
        </p>
        <p>
          <wj-progress-bar progress="60" radius="20" color="success"></wj-progress-bar>
        </p>
        <p>
          <wj-progress-bar progress="60" radius="20" color="warning"></wj-progress-bar>
        </p>
        <p>
          <wj-progress-bar progress="60" radius="20" color="danger"></wj-progress-bar>
        </p>
        <p>
          <wj-progress-bar progress="60" radius="20" color="dark"></wj-progress-bar>
        </p>
        <p>
          <wj-progress-bar progress="60" radius="20" color="light"></wj-progress-bar>
        </p>
      </div>
    </div>
  </div>`;

export default class DemoProgressBar extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-progress-bar") || window.customElements.define("demo-progress-bar", DemoProgressBar);