import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "../assets/js/code-snippet-builder.js";
import { event } from "../../packages/index.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Kanban</h1>
  <div class="container">

    <!-- BASIC -->

    <h3>Basic</h3>
    <div class="playground">
      <div class="content" style="width: 100%; height: 600px; display: block;">
        <wje-kanban url="/api/applicants" placement="wje-list" id="basic"></wje-kanban>
      </div>
    </div>
    
    <!-- CUSTOM DATA -->
<!--              <wje-list>-->
<!--            <wje-item iterate>-->
<!--              <wje-label>-->
<!--                <h4>{{fullName}}</h4>-->
<!--                <p>{{jobTitle}}erjwjhr</p>-->
<!--              </wje-label>-->
<!--            </wje-item>-->
<!--          </wje-list>-->
<!--    <h3>Custom Data</h3>-->
<!--    <div class="playground">-->
<!--      <div class="content">-->
<!--        <wje-infinite-scroll placement="wje-list" id="custom-data">-->
<!--          <wje-list></wje-list>-->
<!--        </wje-infinite-scroll>-->
<!--      </div>-->
<!--    </div>-->
  </div>`;

export default class DemoInfinteScroll extends WJElement {
  constructor() {
    super(template);
  }

  beforeDraw() {


  }

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(template, this.context);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-infinite-scroll") || window.customElements.define("demo-infinite-scroll", DemoInfinteScroll);