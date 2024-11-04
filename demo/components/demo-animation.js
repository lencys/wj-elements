import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "../assets/js/code-snippet-builder.js";

const template = document.createElement('template');

template.innerHTML = `
  <h1>Animation</h1>
  <div class="container">

    <!-- BASIC -->

    <h3>Basic</h3>
    <div class="playground">
      <div class="content" style="flex-direction: column;">
      
        <wje-animation name="heartBeat" delay="1000" duration="1000">
          <wje-avatar>
            <wje-img src="/assets/img/avatar.svg"></wje-img>
          </wje-avatar>
        </wje-animation>
        
        <div style="margin-top: 1rem">
          <wje-button id="stop">Stop</wje-button>
          <wje-button id="play">Play</wje-button>
        </div>
        
        <wje-select placeholder="Select options" variant="standard" max-options="1" variant="standard" max-height="200px"></wje-select>
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
    const animationElement = this.querySelector('wje-animation');
    const select = this.querySelector('wje-select');
    let keyframes = await this.querySelector('wje-animation').getAnimationsArray();
    keyframes.map(obj => {
      const option = Object.assign(document.createElement('wje-option'), {
        text: obj.name,
        value: obj.name,
        label: obj.name
      });
      select.appendChild(option);
    });

    select.addEventListener('wje:option-change', (e) => {
      console.log("wje:option-change", e.detail.context.value);
      animationElement.setAttribute('name', e.detail.context.value);
    });

    this.querySelector('#stop').addEventListener('click', (e) => {
      animationElement.cancel();
    });

    this.querySelector('#play').addEventListener('click', (e) => {
      animationElement.play();
    });
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-animation") || window.customElements.define("demo-animation", DemoAnimation);