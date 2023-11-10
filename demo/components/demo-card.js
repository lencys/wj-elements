import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Card</h1>
  <div class="container">
    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wj-card>
          <wj-card-header>
            <wj-card-subtitle>Subtitle</wj-card-subtitle>
            <wj-card-title>Title</wj-card-title>
          </wj-card-header>
          <wj-card-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </wj-card-content>
        </wj-card>
      </div>
    </div>

    <!-- SEPARATOR -->

    <h2>Separator</h2>
    <div class="playground">
      <div class="content">
        <wj-card>
          <wj-card-header separator>
            <wj-card-subtitle>Subtitle</wj-card-subtitle>
            <wj-card-title>Title</wj-card-title>
            <wj-card-controls>
              <wj-button fill="link" size="small">
                <wj-icon name="arrows-diagonal" slot="icon-only"></wj-icon>
              </wj-button>
              <wj-button fill="link" size="small">
                <wj-icon name="chevron-up" slot="icon-only"></wj-icon>
              </wj-button>
              <wj-button fill="link" size="small">
                <wj-icon name="rotate-clockwise" slot="icon-only"></wj-icon>
              </wj-button>
              <wj-button fill="link" size="small">
                <wj-icon name="dots" slot="icon-only"></wj-icon>
              </wj-button>
              <wj-button fill="link" size="small">
                <wj-icon name="x" slot="icon-only"></wj-icon>
              </wj-button>
            </wj-card-controls>
          </wj-card-header>
          <wj-card-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </wj-card-content>
        </wj-card>
      </div>
    </div>

    <!--  IMAGE-->

    <h2>Image</h2>
    <div class="playground">
      <div class="content">
        <wj-card>
          <img
            alt="Lorem ipsum"
            src="https://ionicframework.com/docs/img/demos/card-media.png"
          />
          <wj-card-header>
            <wj-card-subtitle>Subtitle</wj-card-subtitle>
            <wj-card-title>Title</wj-card-title>
          </wj-card-header>
          <wj-card-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </wj-card-content>
        </wj-card>
      </div>
    </div>

    <!-- BASIC -->

    <h2>List card</h2>
    <div class="playground">
      <div class="content">
        <wj-card>
          <wj-card-header>
            <wj-card-subtitle>Subtitle</wj-card-subtitle>
            <wj-card-title>Title</wj-card-title>
          </wj-card-header>
          <wj-card-content>
            <wj-list>
              <wj-item>
                <wj-thumbnail slot="start">
                  <img
                    alt="Silhouette of mountains"
                    src="/assets/img/thumbnail.svg"
                  />
                </wj-thumbnail>
                <wj-label>Item</wj-label>
              </wj-item>

              <wj-item>
                <wj-thumbnail slot="start">
                  <img
                    alt="Silhouette of mountains"
                    src="/assets/img/thumbnail.svg"
                  />
                </wj-thumbnail>
                <wj-label>Item</wj-label>
              </wj-item>

              <wj-item>
                <wj-thumbnail slot="start">
                  <img
                    alt="Silhouette of mountains"
                    src="/assets/img/thumbnail.svg"
                  />
                </wj-thumbnail>
                <wj-label>Item</wj-label>
              </wj-item>

              <wj-item lines="none">
                <wj-thumbnail slot="start">
                  <img
                    alt="Silhouette of mountains"
                    src="/assets/img/thumbnail.svg"
                  />
                </wj-thumbnail>
                <wj-label>Item</wj-label>
              </wj-item>
            </wj-list>
          </wj-card-content>
        </wj-card>
      </div>
    </div>

    <!--COLORS-->

    <h2>Colors</h2>
    <div class="playground">
      <div class="content d-flex col-4">
        <style>
          .container wj-card {
            --wj-card-margin-top: 1rem;
            --wj-card-margin-bottom: 1rem;
            --wj-card-margin-inline: 1rem;
          }
        </style>
        <wj-card color="primary">
          <wj-card-header>
            <wj-card-subtitle>Primary</wj-card-subtitle>
            <wj-card-title>Title</wj-card-title>
          </wj-card-header>
          <wj-card-content> Content </wj-card-content>
        </wj-card>

        <wj-card color="complete">
          <wj-card-header>
            <wj-card-subtitle>Complete</wj-card-subtitle>
            <wj-card-title>Title</wj-card-title>
          </wj-card-header>
          <wj-card-content> Content </wj-card-content>
        </wj-card>

        <wj-card color="success">
          <wj-card-header>
            <wj-card-subtitle>Success</wj-card-subtitle>
            <wj-card-title>Title</wj-card-title>
          </wj-card-header>
          <wj-card-content> Content </wj-card-content>
        </wj-card>

        <wj-card color="warning">
          <wj-card-header>
            <wj-card-subtitle>Warning</wj-card-subtitle>
            <wj-card-title>Title</wj-card-title>
          </wj-card-header>
          <wj-card-content> Content </wj-card-content>
        </wj-card>

        <wj-card color="danger">
          <wj-card-header>
            <wj-card-subtitle>Danger</wj-card-subtitle>
            <wj-card-title>Title</wj-card-title>
          </wj-card-header>
          <wj-card-content> Content </wj-card-content>
        </wj-card>

        <wj-card color="info">
          <wj-card-header>
            <wj-card-subtitle>Info</wj-card-subtitle>
            <wj-card-title>Title</wj-card-title>
          </wj-card-header>
          <wj-card-content> Content </wj-card-content>
        </wj-card>

        <wj-card color="menu">
          <wj-card-header>
            <wj-card-subtitle>Menu</wj-card-subtitle>
            <wj-card-title>Title</wj-card-title>
          </wj-card-header>
          <wj-card-content> Content </wj-card-content>
        </wj-card>
      </div>
    </div>

    <!--  Custom CSS-->

    <h2>CSS Custom Vlastnosti</h2>
    <div class="playground">
      <div class="content">
        <wj-card id="custom">
          <wj-card-header>
            <wj-card-subtitle>Subtitle</wj-card-subtitle>
            <wj-card-title>Title</wj-card-title>
          </wj-card-header>
          <wj-card-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </wj-card-content>
        </wj-card>
        <style>
          #custom {
            --wj-card-margin-top: 1rem;
            --wj-card-margin-bottom: 1rem;
            --wj-card-margin-inline: 1rem;
            --wj-color-contrast: #f0f;
            --wj-card-border-color: #000;
            --wj-border-size: 2px;
            --background-color: #000!important;
            --wj-font-size: .8rem;
            --wj-border-radius: 0;
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