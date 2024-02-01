import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Format byte</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground" style="padding-inline: 1rem;">
      <div class="content" style="justify-content: start;">
        <wj-input type="number" variant="standard" placeholder="Typing number" value="1000000"></wj-input>
        <wj-format-digital value="1000000" class="example"></wj-format-digital>
        <style>
          wj-input {
            width: 200px;
            margin-inline: 0 .5rem;
            --wj-input-margin-bottom: 0;
          }
        </style>
      </div>
    </div>
    
    <!-- BYTES -->

    <h2>Formatting display</h2>
    <div class="playground" style="padding-inline: 1rem;">
      <div class="content" style="display: block;">
        <wj-format-digital value="9900"></wj-format-digital><br/>
        short<wj-format-digital value="9900" unit-display="short"></wj-format-digital><br/>
        narrow<wj-format-digital value="9900" unit-display="narrow"></wj-format-digital><br/>
        long<wj-format-digital value="9900" unit-display="long"></wj-format-digital>
      </div>
    </div>
    
    <!-- BYTES -->

    <h2>Formatting Bytes</h2>
    <div class="playground" style="padding-inline: 1rem;">
      <div class="content" style="display: block;">
        <wj-format-digital value="99"></wj-format-digital><br/>
        <wj-format-digital value="9900"></wj-format-digital><br/>
        <wj-format-digital value="9900000"></wj-format-digital><br/>
        <wj-format-digital value="9900000000"></wj-format-digital>
      </div>
    </div>
    
    <!-- BIT -->

    <h2>Formatting Bits</h2>
    <div class="playground" style="padding-inline: 1rem;">
      <div class="content" style="display: block;">
        <wj-format-digital value="99" unit="bit"></wj-format-digital><br/>
        <wj-format-digital value="9900" unit="bit"></wj-format-digital><br/>
        <wj-format-digital value="9900000" unit="bit"></wj-format-digital><br/>
        <wj-format-digital value="9900000000" unit="bit"></wj-format-digital>
      </div>
    </div>
    
    <!-- SLOTS -->

    <h2>Slots</h2>
    <div class="playground" style="padding-inline: 1rem;">
      <div class="content" style="display: flex;">
        <wj-format-digital value="900000"><span slot="start">Nahraných: </span></wj-format-digital>
        <wj-format-digital value="9900000"><span slot="start">&nbsp;z </span></wj-format-digital>
      </div>
    </div>
    
  </div>`;

export default class DemoFormatDigital extends WJElement {
  constructor() {
    super(template);
  }

  afterDraw() {
    this.addEventListener('wj-input:input', (e) => {
      document.querySelector('.example').setAttribute('value', e.detail.value);
    });
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-format-digital") || window.customElements.define("demo-format-digital", DemoFormatDigital);