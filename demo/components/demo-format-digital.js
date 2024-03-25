import WJElement from "../../dist/wje-element.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Format byte</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground" style="padding-inline: 1rem;">
      <div class="content" style="justify-content: start;">
        <wje-input type="number" variant="standard" placeholder="Typing number" value="1000000"></wje-input>
        <wje-format-digital value="1000000" class="example"></wje-format-digital>
        <style>
          wje-input {
            width: 200px;
            margin-inline: 0 .5rem;
            --wje-input-margin-bottom: 0;
          }
        </style>
      </div>
    </div>
    
    <!-- BYTES -->

    <h2>Formatting display</h2>
    <div class="playground" style="padding-inline: 1rem;">
      <div class="content" style="display: block;">
        <wje-format-digital value="9900"></wje-format-digital><br/>
        short<wje-format-digital value="9900" unit-display="short"></wje-format-digital><br/>
        narrow<wje-format-digital value="9900" unit-display="narrow"></wje-format-digital><br/>
        long<wje-format-digital value="9900" unit-display="long"></wje-format-digital>
      </div>
    </div>
    
    <!-- BYTES -->

    <h2>Formatting Bytes</h2>
    <div class="playground" style="padding-inline: 1rem;">
      <div class="content" style="display: block;">
        <wje-format-digital value="99"></wje-format-digital><br/>
        <wje-format-digital value="9900"></wje-format-digital><br/>
        <wje-format-digital value="9900000"></wje-format-digital><br/>
        <wje-format-digital value="9900000000"></wje-format-digital>
      </div>
    </div>
    
    <!-- BIT -->

    <h2>Formatting Bits</h2>
    <div class="playground" style="padding-inline: 1rem;">
      <div class="content" style="display: block;">
        <wje-format-digital value="99" unit="bit"></wje-format-digital><br/>
        <wje-format-digital value="9900" unit="bit"></wje-format-digital><br/>
        <wje-format-digital value="9900000" unit="bit"></wje-format-digital><br/>
        <wje-format-digital value="9900000000" unit="bit"></wje-format-digital>
      </div>
    </div>
    
    <!-- SLOTS -->

    <h2>Slots</h2>
    <div class="playground" style="padding-inline: 1rem;">
      <div class="content" style="display: flex;">
        <wje-format-digital value="900000"><span slot="start">Nahraných: </span></wje-format-digital>
        <wje-format-digital value="9900000"><span slot="start">&nbsp;z </span></wje-format-digital>
      </div>
    </div>
    
  </div>`;

export default class DemoFormatDigital extends WJElement {
  constructor() {
    super(template);
  }

  afterDraw() {
    this.addEventListener('wje-input:input', (e) => {
      document.querySelector('.example').setAttribute('value', e.detail.value);
    });
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-format-digital") || window.customElements.define("demo-format-digital", DemoFormatDigital);