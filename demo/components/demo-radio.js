import WJElement from "../../dist/wje-element.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Radio</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content" style="display: block;">
        <wje-radio-group value="dog">
          <wje-radio value="cat">Cat</wje-radio>
          <wje-radio value="dog">Dog</wje-radio>
          <wje-radio value="elephant" disabled="">Elephant</wje-radio>
          <wje-radio indeterminate value="rabbit" >Rabbit</wje-radio>
        </wje-radio-group>
      </div>
    </div>
    
    <!-- INLINE -->

    <h2>Inline</h2>
    <div class="playground">
      <div class="content" style="display: block;">
        <wje-radio-group inline>
          <wje-radio value="cat">Cat</wje-radio>
          <wje-radio value="dog">Dog</wje-radio>
          <wje-radio value="horse">Horse</wje-radio>
          <wje-radio value="rabbit" >Rabbit</wje-radio>
          <wje-radio value="hen">Hen</wje-radio>
          <wje-radio value="goose">Goose</wje-radio>
          <wje-radio value="duck">Duck</wje-radio>
          <wje-radio value="pig" >Pig</wje-radio>
        </wje-radio-group>
      </div>
    </div>
    
    <!-- COLORS -->

    <h2>Colors</h2>
    <div class="playground">
      <div class="content" style="display: block;">
        <wje-radio-group value="complete">
          <wje-radio value="default">Default</wje-radio>
          <wje-radio value="success" color="success">Success</wje-radio>
          <wje-radio value="primary" color="primary">Primary</wje-radio>
          <wje-radio value="complete" color="complete">Complete</wje-radio>
          <wje-radio value="warning" color="warning">Warning</wje-radio>
          <wje-radio value="danger" color="danger">Danger</wje-radio>
          <wje-radio value="neutral" color="neutral">Neutral</wje-radio>
        </wje-radio-group>
      </div>
    </div>
    
  </div>`;

export default class DemoRadio extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-radio") || window.customElements.define("demo-radio", DemoRadio);