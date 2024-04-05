import WJElement from "../../dist/wje-element.js";

const template = document.createElement('template');

template.innerHTML = `
  <h1>Tooltip</h1>
  <div class="container">

    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content" style="display: flex; gap: 1rem;">
        <wje-tooltip content="Som najkrajsi tooltip hore"  offset="2">
          <wje-button size="large">Top</wje-button>
        </wje-tooltip>
        
        <wje-tooltip content="Som najkrajsi tooltip dole" placement="bottom" offset="10">
          <wje-button size="large">Bottom</wje-button>
        </wje-tooltip>
        
        <wje-tooltip content="Som najkrajsi tooltip vlavo" placement="left" offset="10">
          <wje-button size="large">Left</wje-button>
        </wje-tooltip>
        
        <wje-tooltip content="Som najkrajsi tooltip vpravo" placement="right" offset="10">
          <wje-button size="large">Right</wje-button>
        </wje-tooltip>
      </div>
    </div>
    
    <!-- EVENTS -->

    <h2>Events</h2>
    <div class="playground">
      <div class="content" style="display: flex; gap: 1rem;">
        <wje-tooltip id="events">
          <wje-avatar>
            <wje-img src="/assets/img/avatar.svg"></wje-img>
          </wje-avatar>
        </wje-tooltip>
      </div>
    </div>
  </div>`;

export default class DemoTooltip extends WJElement {
  constructor() {
    super(template);
  }

  async afterDraw() {
    this.querySelector("#events").beforeShow = async (e) => {
      // const response = await fetch("./demo/assets/persons.json");
      // const data = await response.json();
      // const result = data.map((item) => {
      //   return `<div>${item.name}</div>`;
      // }).join('');
      return 'Changed tooltip content';
      // return result;
    }
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-tooltip") || window.customElements.define("demo-tooltip", DemoTooltip);