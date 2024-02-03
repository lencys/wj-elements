import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Masonry</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground" style="padding-inline: 1rem;">
      <div class="content">
        <wj-masonry cols="2" class="example">
          <div style="height: 300px">1</div>
          <div style="height: 375px">2</div>
          <div style="height: 250px">3</div>
          <div style="height: 390px">4</div>
          <div style="height: 200px">5</div>
        </wj-masonry>
      </div>
    </div>
    
    <!-- MAXCOLWIDTH -->

    <h2>Max col width</h2>
    <div class="playground" style="padding-inline: 1rem;">
      <div class="content">
        <wj-masonry max-col-width="150">
          <wj-img src="https://picsum.photos/400/500?i=1"></wj-img>
          <wj-img src="https://picsum.photos/400/375?i=2"></wj-img>
          <wj-img src="https://picsum.photos/400/200?i=3"></wj-img>
          <wj-img src="https://picsum.photos/400?/400i=4"></wj-img>
          <wj-img src="https://picsum.photos/400/375?i=5"></wj-img>
          <wj-img src="https://picsum.photos/400/500?i=6"></wj-img>
          <wj-img src="https://picsum.photos/400/200?i=7"></wj-img>
        </wj-masonry>
      </div>
    </div>
    
    <!-- GAP -->

    <h2>Gap</h2>
    <div class="playground" style="padding-inline: 1rem;">
      <div class="content">
        <wj-masonry cols="2" gap="2" class="example" id="example-gap">
          <div style="height: 300px">1</div>
          <div style="height: 375px">2</div>
          <div style="height: 250px">3</div>
          <div style="height: 377px">4</div>
          <div style="height: 200px">5</div>
        </wj-masonry>
        <style>
          #example-gap div {
            color: var(--wj-color-white);
            background: var(--wj-color-danger);
          }
        </style>
      </div>
    </div>
  </div>
<style>
  .example div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: var(--wj-color-black);
    background: var(--wj-color-warning);
  }
</style>
`;

export default class DemoMasonry extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-masonry") || window.customElements.define("demo-masonry", DemoMasonry);