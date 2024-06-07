import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "./snippet/code-snippet-builder.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Card</h1>
  <div class="container">
    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wje-card>
          <wje-card-header>
            <wje-card-subtitle>Subtitle</wje-card-subtitle>
            <wje-card-title>Title</wje-card-title>

          </wje-card-header>
          <wje-card-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </wje-card-content>
        </wje-card>
      </div>
    </div>

    <div class="html-snippet"></div>

    <!-- SEPARATOR -->

    <h2>Separator</h2>
    <div class="playground">
      <div class="content">
        <wje-card>
          <wje-card-header separator>
            <wje-card-subtitle>Subtitle</wje-card-subtitle>
            <wje-card-title>Title</wje-card-title>
            <wje-card-controls>
              <wje-tooltip label="Tooltip" placement="top">
                <wje-button fill="link" size="small">
                  <wje-icon name="arrows-diagonal" slot="icon-only"></wje-icon>
                </wje-button>
              </wje-tooltip>
             
            </wje-card-controls>
          </wje-card-header>
          <wje-card-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </wje-card-content>
        </wje-card>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- SEPARATOR -->

    <h2>Dropdown</h2>
    <div class="playground">
      <div class="content">
        <wje-card>
          <wje-card-header>
            <wje-card-subtitle>Subtitle</wje-card-subtitle>
            <wje-card-title>Title</wje-card-title>
            <wje-card-controls>
              <wje-dropdown label="Start" placement="bottom-start" offset="5">
                <wje-button size="large" slot="trigger" stop-propagation="true" caret>Large</wje-button>
                <wje-menu variant="context">
                  <wje-menu-item>
                    <wje-icon name="plane" slot="start"></wje-icon>
                    <wje-label>Menu item</wje-label>
                  </wje-menu-item>
                  <wje-menu-item>
                    <wje-icon name="book" slot="start"></wje-icon>
                    <wje-label>Menu item</wje-label>
                  </wje-menu-item>
                  <wje-menu-item>
                    <wje-icon name="music" slot="start"></wje-icon>
                    <wje-label>Menu item</wje-label>
                  </wje-menu-item>
                  <wje-menu-item>
                    <wje-icon name="video" slot="start"></wje-icon>
                    <wje-label>Menu item</wje-label>
                  </wje-menu-item>
                </wje-menu>
              </wje-dropdown>
            </wje-card-controls>
          </wje-card-header>
          <wje-card-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </wje-card-content>
        </wje-card>
      </div>
    </div>

    <div class="html-snippet"></div>

    <!--  IMAGE-->

    <h2>Image</h2>
    <div class="playground">
      <div class="content">
        <wje-card>
          <img
            alt="Lorem ipsum"
            src="https://ionicframework.com/docs/img/demos/card-media.png"
          />
          <wje-card-header>
            <wje-card-subtitle>Subtitle</wje-card-subtitle>
            <wje-card-title>Title</wje-card-title>
          </wje-card-header>
          <wje-card-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </wje-card-content>
        </wje-card>
      </div>
    </div>

    <div class="html-snippet"></div>

    <!-- LIST CARD -->

    <h2>List card</h2>
    <div class="playground">
      <div class="content">
        <wje-card>
          <wje-card-header>
            <wje-card-subtitle>Subtitle</wje-card-subtitle>
            <wje-card-title>Title</wje-card-title>
          </wje-card-header>
          <wje-card-content>
            <wje-list>
              <wje-item>
                <wje-thumbnail slot="start">
                  <img
                    alt="Silhouette of mountains"
                    src="/assets/img/thumbnail.svg"
                  />
                </wje-thumbnail>
                <wje-label>Item</wje-label>
              </wje-item>

              <wje-item>
                <wje-thumbnail slot="start">
                  <img
                    alt="Silhouette of mountains"
                    src="/assets/img/thumbnail.svg"
                  />
                </wje-thumbnail>
                <wje-label>Item</wje-label>
              </wje-item>

              <wje-item>
                <wje-thumbnail slot="start">
                  <img
                    alt="Silhouette of mountains"
                    src="/assets/img/thumbnail.svg"
                  />
                </wje-thumbnail>
                <wje-label>Item</wje-label>
              </wje-item>

              <wje-item lines="none">
                <wje-thumbnail slot="start">
                  <img
                    alt="Silhouette of mountains"
                    src="/assets/img/thumbnail.svg"
                  />
                </wje-thumbnail>
                <wje-label>Item</wje-label>
              </wje-item>
            </wje-list>
          </wje-card-content>
        </wje-card>
      </div>
    </div>

    <div class="html-snippet"></div>

    <!--COLORS-->

    <h2>Colors</h2>
    <div class="playground">
      <div class="content d-flex col-4">
        <style>
          .content {
            gap: 1rem;
          }
        </style>
        <wje-card color="primary">
          <wje-card-header>
            <wje-card-subtitle>Primary</wje-card-subtitle>
            <wje-card-title>Title</wje-card-title>
          </wje-card-header>
          <wje-card-content> Content </wje-card-content>
        </wje-card>

        <wje-card color="complete">
          <wje-card-header>
            <wje-card-subtitle>Complete</wje-card-subtitle>
            <wje-card-title>Title</wje-card-title>
          </wje-card-header>
          <wje-card-content> Content </wje-card-content>
        </wje-card>

        <wje-card color="success">
          <wje-card-header>
            <wje-card-subtitle>Success</wje-card-subtitle>
            <wje-card-title>Title</wje-card-title>
          </wje-card-header>
          <wje-card-content> Content </wje-card-content>
        </wje-card>

        <wje-card color="warning">
          <wje-card-header>
            <wje-card-subtitle>Warning</wje-card-subtitle>
            <wje-card-title>Title</wje-card-title>
          </wje-card-header>
          <wje-card-content> Content </wje-card-content>
        </wje-card>

        <wje-card color="danger">
          <wje-card-header>
            <wje-card-subtitle>Danger</wje-card-subtitle>
            <wje-card-title>Title</wje-card-title>
          </wje-card-header>
          <wje-card-content> Content </wje-card-content>
        </wje-card>

        <wje-card color="info">
          <wje-card-header>
            <wje-card-subtitle>Info</wje-card-subtitle>
            <wje-card-title>Title</wje-card-title>
          </wje-card-header>
          <wje-card-content> Content </wje-card-content>
        </wje-card>

        <wje-card color="menu">
          <wje-card-header>
            <wje-card-subtitle>Menu</wje-card-subtitle>
            <wje-card-title>Title</wje-card-title>
          </wje-card-header>
          <wje-card-content> Content </wje-card-content>
        </wje-card>
      </div>
    </div>

    <div class="html-snippet"></div>

    <!--  Custom CSS-->

    <h2>CSS Custom Vlastnosti</h2>
    <div class="playground">
      <div class="content">
        <wje-card id="custom">
          <wje-card-header>
            <wje-card-subtitle>Subtitle</wje-card-subtitle>
            <wje-card-title>Title</wje-card-title>
          </wje-card-header>
          <wje-card-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </wje-card-content>
        </wje-card>
        <style>
          #custom {
            color: #f0f;
            border-color: #000;
            border-width: 2px;
            background-color: #000!important;
            font-size: .8rem;
            border-radius: 0;
          }
        </style>
      </div>
    </div>

    <div class="html-snippet"></div>
  </div>`;

export default class DemoCard extends WJElement {
  constructor() {
    super(template);
  }

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(template, this.context);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-card") || window.customElements.define("demo-card", DemoCard);