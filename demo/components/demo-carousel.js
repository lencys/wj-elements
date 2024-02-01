import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Carousel</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground" style="padding-inline: 2rem;">
      <div class="content">
        <wj-carousel pagination loop navigation>
          <wj-carousel-item>
            <wj-img src="https://picsum.photos/500/375?i=1"></wj-img>
          </wj-carousel-item>
          <wj-carousel-item>
            <wj-img src="https://picsum.photos/500/375?i=2"></wj-img>
          </wj-carousel-item>
          <wj-carousel-item>
            <wj-img src="https://picsum.photos/500/375?i=3"></wj-img>
          </wj-carousel-item>
          <wj-carousel-item>
            <wj-img src="https://picsum.photos/500/375?i=4"></wj-img>
          </wj-carousel-item>
        </wj-carousel>
      </div>
    </div>
    
    <!-- PAGINATION -->
    
    <h2>Pagination</h2>
    <div class="playground" style="padding-inline: 2rem;">
      <div class="content">
        <wj-carousel pagination>
          <wj-carousel-item>
            <wj-img src="https://picsum.photos/500/375?i=1"></wj-img>
          </wj-carousel-item>
          <wj-carousel-item>
            <wj-img src="https://picsum.photos/500/375?i=2"></wj-img>
          </wj-carousel-item>
          <wj-carousel-item>
            <wj-img src="https://picsum.photos/500/375?i=3"></wj-img>
          </wj-carousel-item>
          <wj-carousel-item>
            <wj-img src="https://picsum.photos/500/375?i=4"></wj-img>
          </wj-carousel-item>
        </wj-carousel>
      </div>
    </div>
    
    <!-- THUMBNAIL -->

    <h2>Thumbnail</h2>
    <div class="playground" style="padding-inline: 2rem;">
      <div class="content">
        <wj-carousel thumbnails loop navigation>
          <wj-carousel-item>
            <wj-img src="https://picsum.photos/500/375?i=1"></wj-img>
          </wj-carousel-item>
          <wj-carousel-item>
            <wj-img src="https://picsum.photos/500/375?i=2"></wj-img>
          </wj-carousel-item>
          <wj-carousel-item>
            <wj-img src="https://picsum.photos/500/375?i=3"></wj-img>
          </wj-carousel-item>
          <wj-carousel-item>
            <wj-img src="https://picsum.photos/500/375?i=4"></wj-img>
          </wj-carousel-item>
        </wj-carousel>
      </div>
    </div>
    
    <!-- SPACING -->
    
    <h2>Spacing</h2>
    <div class="playground" style="padding-inline: 2rem;">
      <div class="content">
        <wj-carousel pagination loop navigation class="example-spacing">
          <wj-carousel-item>
            <wj-img src="https://picsum.photos/500/375?i=1"></wj-img>
          </wj-carousel-item>
          <wj-carousel-item>
            <wj-img src="https://picsum.photos/500/375?i=2"></wj-img>
          </wj-carousel-item>
          <wj-carousel-item>
            <wj-img src="https://picsum.photos/500/375?i=3"></wj-img>
          </wj-carousel-item>
          <wj-carousel-item>
            <wj-img src="https://picsum.photos/500/375?i=4"></wj-img>
          </wj-carousel-item>
        </wj-carousel>
        <style>
          .example-spacing {
            --wj-spacing-inline: 3rem;
          }
        </style>
      </div>
    </div>
    
    <!-- PAGINATION -->
    
    <h2>Pagination</h2>
    <div class="playground" style="padding-inline: 2rem;">
      <div class="content">
        <wj-carousel pagination class="example-content">
          <wj-carousel-item>
            <div>A</div>
            <div>B</div>
          </wj-carousel-item>
          <wj-carousel-item>
            <div>C</div>
            <div>D</div>
          </wj-carousel-item>
          <wj-carousel-item>
            <div>E</div>
            <div>F</div>
          </wj-carousel-item>
          <wj-carousel-item>
            <div>G</div>
            <div>H</div>
          </wj-carousel-item>
        </wj-carousel>
        <style>
          .example-content {
            --wj-carousel-width: 400px;
          }
          
          .example-content div {
            width: 200px;
            height: 300px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .example-content div:first-child {
            background-color: #f00;
          }
          
          .example-content div:last-child {
            background-color: #00f;
          }
        </style>
      </div>
    </div>
  </div>`;

export default class DemoCard extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-card") || window.customElements.define("demo-card", DemoCard);