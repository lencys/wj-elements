import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `  <style>
    .content {
      display: block;
    }
  </style>
  
  <h1>List</h1>
  <div class="container">

    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wj-list>
          <wj-item>
            <wj-label>Pokémon Yellow</wj-label>
          </wj-item>
          <wj-item>
            <wj-label>Mega Man X</wj-label>
          </wj-item>
          <wj-item>
            <wj-label>The Legend of Zelda</wj-label>
          </wj-item>
          <wj-item>
            <wj-label>Pac-Man</wj-label>
          </wj-item>
          <wj-item>
            <wj-label>Super Mario World</wj-label>
          </wj-item>
        </wj-list>
      </div>
    </div>

    <!--  INSET -->

    <h2>Inset list</h2>
    <div class="playground" style="background-color: rgba(0,0,0,.08);">
      <div class="content">
        <wj-list inset>
          <wj-item>
            <wj-label>Pokémon Yellow</wj-label>
          </wj-item>
          <wj-item>
            <wj-label>Mega Man X</wj-label>
          </wj-item>
          <wj-item>
            <wj-label>The Legend of Zelda</wj-label>
          </wj-item>
          <wj-item>
            <wj-label>Pac-Man</wj-label>
          </wj-item>
          <wj-item>
            <wj-label>Super Mario World</wj-label>
          </wj-item>
        </wj-list>
      </div>
    </div>
    
    <!--  LINES -->
    
    <h2>Lines</h2>
    <div class="playground">
      <div class="content">
        <wj-list lines="full">
          <wj-item>
            <wj-label>Full Lines</wj-label>
          </wj-item>
          <wj-item>
            <wj-label>Full Lines</wj-label>
          </wj-item>
          <wj-item>
            <wj-label>Full Lines</wj-label>
          </wj-item>
        </wj-list>

        <wj-list lines="inset">
          <wj-item>
            <wj-label>Inset Lines</wj-label>
          </wj-item>
          <wj-item>
            <wj-label>Inset Lines</wj-label>
          </wj-item>
          <wj-item>
            <wj-label>Inset Lines</wj-label>
          </wj-item>
        </wj-list>

        <wj-list lines="none">
          <wj-item>
            <wj-label>No Lines</wj-label>
          </wj-item>
          <wj-item>
            <wj-label>No Lines</wj-label>
          </wj-item>
          <wj-item>
            <wj-label>No Lines</wj-label>
          </wj-item>
        </wj-list>
      </div>
    </div>
  </div>`;

export default class DemoList extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-list") || window.customElements.define("demo-list", DemoList);