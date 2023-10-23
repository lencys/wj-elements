import { WJElement, Radio, RadioGroup } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Radio</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content" style="display: block;">
        <wj-radio-group value="dog">
          <wj-radio value="cat">Cat</wj-radio>
          <wj-radio value="dog">Dog</wj-radio>
          <wj-radio value="elephant" disabled="">Elephant</wj-radio>
          <wj-radio value="rabbit" >Rabbit</wj-radio>
        </wj-radio-group>
      </div>
    </div>
    
    <!-- INLINE -->

    <h2>Inline</h2>
    <div class="playground">
      <div class="content" style="display: block;">
        <wj-radio-group inline>
          <wj-radio value="cat">Cat</wj-radio>
          <wj-radio value="dog">Dog</wj-radio>
          <wj-radio value="horse">Horse</wj-radio>
          <wj-radio value="rabbit" >Rabbit</wj-radio>
          <wj-radio value="hen">Hen</wj-radio>
          <wj-radio value="goose">Goose</wj-radio>
          <wj-radio value="duck">Duck</wj-radio>
          <wj-radio value="pig" >Pig</wj-radio>
        </wj-radio-group>
      </div>
    </div>
    
    <!-- COLORS -->

    <h2>Colors</h2>
    <div class="playground">
      <div class="content" style="display: block;">
        <wj-radio-group value="complete">
          <wj-radio value="default">Default</wj-radio>
          <wj-radio value="success" color="success">Success</wj-radio>
          <wj-radio value="primary" color="primary">Primary</wj-radio>
          <wj-radio value="complete" color="complete">Complete</wj-radio>
          <wj-radio value="warning" color="warning">Warning</wj-radio>
          <wj-radio value="danger" color="danger">Danger</wj-radio>
          <wj-radio value="neutral" color="neutral">Neutral</wj-radio>
        </wj-radio-group>
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