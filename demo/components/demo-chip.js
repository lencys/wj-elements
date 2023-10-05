import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Chip</h1>
  <div class="container">

    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wj-chip>Default</wj-chip>
        <wj-chip active>Default</wj-chip>
        <wj-chip disabled>Disabled</wj-chip>
      </div>
    </div>

    <!--  SLOTTING -->

    <h2>Slottings</h2>
    <div class="playground">
      <div class="content">
        <wj-chip>
          <wj-avatar>
            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </wj-avatar>
          <wj-label>Avatar Chip</wj-label>
          <wj-icon name="circle-xmark"></wj-icon>
        </wj-chip>

        <wj-chip>
          <wj-icon name="location-pin" color="complete"></wj-icon>
          <wj-label>Icon Chip</wj-label>
          <wj-icon name="xmark"></wj-icon>
        </wj-chip>
      </div>
    </div>

    <!-- COLORS -->

    <h2>Colors</h2>
    <div class="playground">
      <div class="content">
        <wj-chip>Default</wj-chip>
        <wj-chip color="primary">Primary</wj-chip>
        <wj-chip color="complete">Complete</wj-chip>
        <wj-chip color="success">Success</wj-chip>
        <wj-chip color="warning">Warning</wj-chip>
        <wj-chip color="danger">Danger</wj-chip>
        <wj-chip color="info">Info</wj-chip>
        <wj-chip color="menu">Menu</wj-chip>
      </div>
    </div>
    
    <!-- COLORS -->

    <h2>Custom</h2>
    <div class="playground">
      <div class="content">
        <style>
          wj-chip#custom {
            --wj-chip-background: #00213f;
            --wj-chip-color: #adefd1;
          }
        </style>
        
        <wj-chip id="custom">Default</wj-chip>
      </div>
    </div>
  </div>`;

export default class DemoChip extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-chip") || window.customElements.define("demo-chip", DemoChip);