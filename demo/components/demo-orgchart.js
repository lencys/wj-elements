import WJElement from "../../dist/wje-element.js";
// import CodeSnippet from "./snippet/code-snippet-builder.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Orgchart</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Default</h2>
    <div class="playground">
      <div class="content">
        <wje-orgchart></wje-orgchart>
      </div>
    </div>

<!--    <div class="html-snippet"></div>-->
  </div>`

export default class DemoOrgchart extends WJElement {
    constructor() {
        super(template);
    }

    afterDraw(context, store2, params) {
        // const codeSnippet = new CodeSnippet();
        // codeSnippet.generateSnippet(template, this.context);
    }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-orgchart") || window.customElements.define("demo-orgchart", DemoOrgchart);
    