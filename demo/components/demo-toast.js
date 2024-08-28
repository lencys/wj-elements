import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "../assets/js/code-snippet-builder.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Toast</h1>
  <div class="container">

    <!-- TOAST -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content" style="width: 200px;">
        <wje-select id="position" label="Position" value="top" variant="standard">
          <wje-option value="top" selected>Top</wje-option>
          <wje-option value="bottom">Bottom</wje-option>
          <wje-option value="top-start">Top Start</wje-option>
          <wje-option value="top-end">Top End</wje-option>
          <wje-option value="bottom-start">Bottom Start</wje-option>
          <wje-option value="bottom-end">Bottom End</wje-option>
        </wje-select>
        
        <wje-select id="type" label="Type" value="success" variant="standard">
          <wje-option value="contrast" selected>Contrast</wje-option>
          <wje-option value="primary">Primary</wje-option>
          <wje-option value="complete">Complete</wje-option>
          <wje-option value="success">Success</wje-option>
          <wje-option value="warning">Warning</wje-option>
          <wje-option value="danger">Danger</wje-option>
          <wje-option value="info">Info</wje-option>
        </wje-select>

        <wje-toast duration="15000" title="Title" position="top" type="contrast" close>
          <wje-avatar label="Petr Rahman" slot="avatar" size="2x-large">
            <wje-img src="/assets/img/avatar.svg"></wje-img>
          </wje-avatar>
          <div>Lorem ipsum dolor sit amet</div>
        </wje-toast>
        
        <wje-toast duration="15000" title="Title" position="bottom" type="contrast">
          <div>Lorem ipsum dolor sit amet</div>
        </wje-toast>
      </div>
    </div>
  </div>`;

export default class DemoToast extends WJElement {
  constructor() {
    super(template);
  }

  afterDraw() {
    // Toast element
    const toast = this.context.querySelector('wje-toast');

    // Set the toast attributes position
    this.context.querySelector("#position").addEventListener("wje-select:change", (e) => {
      toast.setAttribute("position", e.detail.context.selected[0].value);
    });

    // Set the toast attributes type
    this.context.querySelector("#type").addEventListener("wje-select:change", (e) => {
      toast.setAttribute("type", e.detail.context.selected[0].value);
    });

    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(template, this.context);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-toast") || window.customElements.define("demo-toast", DemoToast);