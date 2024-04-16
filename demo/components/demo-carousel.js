import WJElement from "../../dist/wje-element.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Carousel</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground" style="padding-inline: 2rem;">
      <div class="content">
        <wje-carousel pagination loop navigation>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=1"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=2"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=3"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=4"></wje-img>
          </wje-carousel-item>
        </wje-carousel>
      </div>
    </div>
    
    <!-- NO LOOP -->

    <h2>No Loop</h2>
    <div class="playground" style="padding-inline: 2rem;">
      <div class="content">
        <wje-carousel pagination navigation>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=1"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=2"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=3"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=4"></wje-img>
          </wje-carousel-item>
        </wje-carousel>
      </div>
    </div>
    
    <!-- DIALOG -->

    <h2>Dialog</h2>
    <div class="playground" style="padding-inline: 2rem;">
      <div class="content">
        <wje-button dialog="open-modal">Open</wje-button>
        <wje-dialog trigger="open-modal" title="Title" size="large">
          <wje-carousel pagination loop>
            <wje-carousel-item>
              <wje-img src="https://picsum.photos/500/375?i=1"></wje-img>
            </wje-carousel-item>
            <wje-carousel-item>
              <wje-img src="https://picsum.photos/500/375?i=2"></wje-img>
            </wje-carousel-item>
            <wje-carousel-item>
              <wje-img src="https://picsum.photos/500/375?i=3"></wje-img>
            </wje-carousel-item>
            <wje-carousel-item>
              <wje-img src="https://picsum.photos/500/375?i=4"></wje-img>
            </wje-carousel-item>
          </wje-carousel>
        </wje-dialog>
      </div>
    </div>
    
    <!-- PAGINATION -->
    
    <h2>Pagination</h2>
    <div class="playground" style="padding-inline: 2rem;">
      <div class="content">
        <wje-carousel pagination>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=1"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=2"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=3"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=4"></wje-img>
          </wje-carousel-item>
        </wje-carousel>
      </div>
    </div>
    
    <!-- THUMBNAIL -->

    <h2>Thumbnail</h2>
    <div class="playground" style="padding-inline: 2rem;">
      <div class="content">
        <wje-carousel thumbnails loop navigation>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=1"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=2"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=3"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=4"></wje-img>
          </wje-carousel-item>
        </wje-carousel>
      </div>
    </div>
    
    <!-- SPACING -->
    
    <h2>Spacing</h2>
    <div class="playground" style="padding-inline: 2rem;">
      <div class="content">
        <wje-carousel pagination loop navigation class="example-spacing">
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=1"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=2"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=3"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=4"></wje-img>
          </wje-carousel-item>
        </wje-carousel>
        <style>
          .example-spacing {
            --wje-spacing-inline: 3rem;
          }
        </style>
      </div>
    </div>
    
    <!-- SPLIT -->
    
    <h2>Split</h2>
    <div class="playground" style="padding-inline: 2rem;">
      <div class="content">
        <wje-carousel pagination class="example-content">
          <wje-carousel-item>
            <div>A</div>
            <div>B</div>
          </wje-carousel-item>
          <wje-carousel-item>
            <div>C</div>
            <div>D</div>
          </wje-carousel-item>
          <wje-carousel-item>
            <div>E</div>
            <div>F</div>
          </wje-carousel-item>
          <wje-carousel-item>
            <div>G</div>
            <div>H</div>
          </wje-carousel-item>
        </wje-carousel>
        <style>
          .example-content {
            --wje-carousel-width: 400px;
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

export default class DemoCarousel extends WJElement {
  constructor() {
    super(template);
  }

  fetchCarousel = () => {
    return `<wje-carousel pagination loop>
      <wje-carousel-item>
        <wje-img src="https://picsum.photos/500/375?i=1"></wje-img>
      </wje-carousel-item>
      <wje-carousel-item>
        <wje-img src="https://picsum.photos/500/375?i=2"></wje-img>
      </wje-carousel-item>
      <wje-carousel-item>
        <wje-img src="https://picsum.photos/500/375?i=3"></wje-img>
      </wje-carousel-item>
      <wje-carousel-item>
        <wje-img src="https://picsum.photos/500/375?i=4"></wje-img>
      </wje-carousel-item>
    </wje-carousel>`;
  }
  afterDraw() {
    this.querySelectorAll("wje-carousel-item").forEach((carousel) => {
      carousel.addEventListener("wje-carousel-item:click", (event) => {
        console.log("Clicked", event.target);
      });
    });

    this.querySelector("wje-dialog").addEventListener("wje-dialog:opened", (e) => {
      e.target.querySelector("wje-carousel").goToSlide(0, "auto");
    });
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-carousel") || window.customElements.define("demo-carousel", DemoCarousel);