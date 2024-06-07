import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "./snippet/code-snippet-builder.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Progress bar</h1>
  <div class="container">

    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wje-progress-bar progress="60"></wje-progress-bar>
      </div>
    </div>

    <div class="html-snippet"></div>

    <!-- TYPE -->

    <h2>Type</h2>
    <div class="playground">
      <div class="content" style="flex-direction: column;">
        <p>
          <wje-progress-bar progress="60"></wje-progress-bar>
        </p>
        <p>
          <wje-progress-bar progress="60" type="circle" radius="30"></wje-progress-bar>
        </p>
      </div>
    </div>

    <div class="html-snippet"></div>

    <!-- LABEL -->

    <h2>Label</h2>
    <div class="playground">
      <div class="content">
        <wje-progress-bar progress="60" type="circle" radius="30">
          <wje-label slot="start">Slot Start</wje-label>
          <wje-label slot="end">Slot End</wje-label>
        </wje-progress-bar>
      </div>
    </div>

    <div class="html-snippet"></div>

    <!-- LINECAP -->

    <h2>Linecap</h2>
    <div class="playground">
      <div class="content" style="flex-direction: column;">
        <wje-progress-bar progress="80" stroke="12" linecap="round"></wje-progress-bar>
      </div>
    </div>

    <div class="html-snippet"></div>

    <!-- RADIUS-->

    <h2>Radius</h2>
    <div class="playground">
      <div class="content">
        <wje-progress-bar progress="60" radius="70" type="circle"></wje-progress-bar>
      </div>
    </div>

    <div class="html-snippet"></div>

    <!--  STROKE-->

    <h2>Stroke</h2>
    <div class="playground">
      <div class="content">
        <wje-progress-bar progress="60" radius="20" stroke="1"></wje-progress-bar>
      </div>
    </div>

    <div class="html-snippet"></div>

    <!--  IMAGE-->

    <h2>Progress bar with image</h2>
    <div class="playground">
      <div class="content">
        <wje-progress-bar progress="60" radius="20" stroke="3" color="danger" type="circle" class="example">
          <wje-thumbnail circle>
            <img alt="Silhouette of mountains" src="/assets/img/thumbnail.svg" />
          </wje-thumbnail>
          <style>
            wje-thumbnail {
              --wje-border-radius: 50%;
              --wje-thumbnail-width: 38px;
              --wje-thumbnail-height: 38px;
            }
            
            wje-progress-bar.example {
              --wje-progress-bar-text-color: #fff !important;
              font-weight: bold;
            }
          </style>
        </wje-progress-bar>
      </div>
    </div>

    <div class="html-snippet"></div>

    <!--  COLORS-->

    <h2>Colors</h2>
    <div class="playground">
      <div class="content">
        <p>
          <wje-progress-bar progress="60" radius="20"></wje-progress-bar>
        </p>
        <p>
          <wje-progress-bar progress="60" radius="20" color="primary"></wje-progress-bar>
        </p>
        <p>
          <wje-progress-bar progress="60" radius="20" color="complete"></wje-progress-bar>
        </p>
        <p>
          <wje-progress-bar progress="60" radius="20" color="success"></wje-progress-bar>
        </p>
        <p>
          <wje-progress-bar progress="60" radius="20" color="warning"></wje-progress-bar>
        </p>
        <p>
          <wje-progress-bar progress="60" radius="20" color="danger"></wje-progress-bar>
        </p>
        <p>
          <wje-progress-bar progress="60" radius="20" color="dark"></wje-progress-bar>
        </p>
        <p>
          <wje-progress-bar progress="60" radius="20" color="light"></wje-progress-bar>
        </p>
      </div>
    </div>

    <div class="html-snippet"></div>
  </div>`;

export default class DemoProgressBar extends WJElement {
  constructor() {
    super(template);
  }

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(template, this.context);

    let currentNumber = 0;
    const totalTime = 20000; // Celkový čas v milisekundách (20s)
    const intervalTime = totalTime / 100; // Časový interval pre každé číslo

    const interval = setInterval(() => {
      currentNumber++;

      this.querySelector(".example").setAttribute("progress", currentNumber);
      if (currentNumber >= 100) {
        clearInterval(interval);
      }
    }, intervalTime);

  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-progress-bar") || window.customElements.define("demo-progress-bar", DemoProgressBar);