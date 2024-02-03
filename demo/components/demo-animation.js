import { WJElement, fetchAndParseCSS } from "../../dist/wj-master.js";

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
        
        <wj-select placeholder="Select options" variant="standard" max-options="1" variant="standard" max-height="200px"></wj-select>
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

  async afterDraw() {
    // let keyframes = await fetchAndParseCSS();

    const select = this.querySelector('wj-select');
    let keyframes = await this.querySelector('wj-animation').getAnimationsArray();
    console.log(keyframes);
    keyframes.map(obj => {
      console.log(obj.name);
      const option = Object.assign(document.createElement('wj-option'), {
        text: obj.name,
        value: obj.name,
        label: obj.name
      });
      console.log(option, select);
      select.appendChild(option);
    });

    select.addEventListener('wj:option-change', (e) => {
      console.log(e.detail.context.value);
      this.querySelector('wj-animation').setAttribute('name', e.detail.context.value);
    });


    this.querySelector('#stop').addEventListener('click', (e) => {
      this.querySelector('wj-animation').animation.cancel();

      console.log("ANIMATIONS", );
    });

    this.querySelector('#play').addEventListener('click', (e) => {
      this.querySelector('wj-animation').animation.play();
    });
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-animation") || window.customElements.define("demo-animation", DemoAnimation);