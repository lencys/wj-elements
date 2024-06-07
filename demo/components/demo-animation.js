import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "./snippet/code-snippet-builder.js";

const template = document.createElement('template');

template.innerHTML = `
<style>
  pre {
      overflow-x: auto;
      word-wrap: break-word;
      white-space: pre-wrap;
      padding: 10px;
      border: 1px solid hsla(240, 6%, 90%, 1);
      border-radius: 4px;
      background: #f9f9f9;
      max-width: 100%;
      font-size: 1em;
      line-height: 1.7rem;
      position: relative;
    }

    code {
      font-family: monospace;
      padding: 2px 4px;
      background: #f9f9f9;
      border-radius: 4px;
    }
</style>
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

    <div class="html-snippet"></div>

    <h3>Javascript</h3>
    <pre>
      <code>
      async getAnimationsArray() {
        return fetchAndParseCSS(animations);
      }
      </code>
    </pre>
    <pre>
      <code>
      destroyAnimation() {
        if (this.animation) {
            this.cancel();
        }
      }
      </code>
    </pre>
    <pre>
      <code>
      play() {
        if (this.animation) {
            this.animation.play();
        }
      }
      </code>
    </pre>
    <pre>
      <code>
      cancel() {
        if (this.animation) {
            this.animation.cancel();
        }
      }
      </code>
    </pre>
  </div>`;

export default class DemoAnimation extends WJElement {
  constructor() {
    super(template);
  }

  beforeRouteEnter(transition) {
    this.breadcrumbs = transition.breadcrumbs;
  }

  async afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(template, this.context);
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
      animationElement.setAttribute('name', e.detail.context.value);
    });


    this.querySelector('#stop').addEventListener('click', (e) => {
      animationElement.cancel();
    });

    this.querySelector('#play').addEventListener('click', (e) => {
      animationElement.play();
    });
    // breadcrumb.cssStyleSheet
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-animation") || window.customElements.define("demo-animation", DemoAnimation);