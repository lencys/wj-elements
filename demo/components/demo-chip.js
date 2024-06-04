import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "./snippet/code-snippet-builder.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Chip</h1>
  <div class="container">

    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wje-chip>Default</wje-chip>
        <wje-chip active>Default</wje-chip>
        <wje-chip disabled>Disabled</wje-chip>
      </div>
    </div>

    <div class="html-snippet"></div>

    <!--  SLOTTING -->

    <h2>Slottings</h2>
    <div class="playground">
      <div class="content">
        <wje-chip>
          <wje-avatar>
            <wje-img src="/assets/img/avatar.svg"></wje-img>
          </wje-avatar>
          <wje-label>Avatar Chip</wje-label>
          <wje-icon name="circle-xmark"></wje-icon>
        </wje-chip>

        <wje-chip removable>
          <wje-icon name="location-pin" color="complete"></wje-icon>
          <wje-label>Icon Chip</wje-label>
        </wje-chip>
      </div>
    </div>

    <div class="html-snippet"></div>

    <!-- COLORS -->

    <h2>Colors</h2>
    <div class="playground">
      <div class="content">
        <wje-chip>Default</wje-chip>
        <wje-chip color="primary">Primary</wje-chip>
        <wje-chip color="complete">Complete</wje-chip>
        <wje-chip color="success">Success</wje-chip>
        <wje-chip color="warning">Warning</wje-chip>
        <wje-chip color="danger">Danger</wje-chip>
        <wje-chip color="info">Info</wje-chip>
        <wje-chip color="menu">Menu</wje-chip>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- COLORS -->

    <h2>Custom</h2>
    <div class="playground">
      <div class="content">
        <style>
          wje-chip#custom {
            --wje-chip-background: #00213f;
            --wje-chip-color: #adefd1;
          }
        </style>
        
        <wje-chip id="custom">Default</wje-chip>
      </div>
    </div>

    <div class="html-snippet"></div>
  </div>`;

export default class DemoChip extends WJElement {
  constructor() {
    super(template);
  }

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(template, document);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-chip") || window.customElements.define("demo-chip", DemoChip);