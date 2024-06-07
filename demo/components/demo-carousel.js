import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "./snippet/code-snippet-builder.js";

const template = document.createElement('template');

template.innerHTML = `
  <style>
    pre {
      overflow-x: auto;
      word-wrap: break-word;
      white-space: pre-wrap;
      padding: 10px;
      border: 1px solid hsla(240, 6%, 90%, 1);
      border-radius: 4px;
      background: #f9f9f9;
      max-width: 100%;
      font-size: 1em;
      line-height: 1.7rem;
      position: relative;
    }

    code {
      font-family: monospace;
      padding: 2px 4px;
      background: #f9f9f9;
      border-radius: 4px;
    }
  </style>

  <h1>Carousel</h1>
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

    <div class="html-snippet"></div>
    
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

    <div class="html-snippet"></div>
    
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

    <div class="html-snippet"></div>
    
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

    <div class="html-snippet"></div>
    
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

    <div class="html-snippet"></div>
    
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

    <div class="html-snippet"></div>
    
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

    <div class="html-snippet"></div>

    <h3>Javascript</h3>

    <pre>
      <code>
      nextSlide() {
        this.goToSlide(this.activeSlide + this.slidePerPage);
      }

      previousSlide() {
          this.goToSlide(this.activeSlide - this.slidePerPage);
      }

      getSlides() {
          return Array.from(this.querySelectorAll("wje-carousel-item:not(.clone)"));
      }

      getSlidesWithClones() {
          return Array.from(this.querySelectorAll("wje-carousel-item"));
      }

      canGoNext() {
          return this.querySelector(".native-carousel").scrollLeft < this.querySelector(".native-carousel").scrollWidth;
      }

      canGoPrevious() {
          return this.querySelector(".native-carousel").scrollLeft > 0;
      }
      </code>
    </pre>
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
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(template, document);

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