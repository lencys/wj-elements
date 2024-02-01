import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Animation</h1>
  <div class="container">

    <!-- BASIC -->

    <h3>Basic</h3>
    <div class="playground">
      <div class="content" style="flex-direction: column;">
        <wj-animation name="heartBeat">
          <wj-avatar>
            <wj-img src="/assets/img/avatar.svg"></wj-img>
          </wj-avatar>
        </wj-animation>
        <div style="margin-top: 1rem">
          <wj-button id="stop">Stop</wj-button>
          <wj-button id="play">Play</wj-button>
        </div>
      </div>
    </div>
  </div>`;

export default class DemoAnimation extends WJElement {
  constructor() {
    super(template);
  }

  beforeRouteEnter(transition) {
    this.breadcrumbs = transition.breadcrumbs;
  }

  afterDraw() {
    console.log("ANIMATIONS", this.querySelector('wj-animation').then((tralala) => {
      console.log("ANIMATIONS", tralala);
    }));
    this.querySelector('#stop').addEventListener('click', (e) => {
      this.querySelector('wj-animation').animation.cancel();

      console.log("ANIMATIONS", this.querySelector('wj-animation').animations);
    });

    this.querySelector('#play').addEventListener('click', (e) => {
      this.querySelector('wj-animation').animation.play();
    });
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-animation") || window.customElements.define("demo-animation", DemoAnimation);