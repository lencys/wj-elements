import { WJElement } from "../../website/static/wj-elements/wj-main.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Media</h1>
  <div class="container">

    <!--  AVATAR-->

    <h2>Avatar</h2>
    <h3>Basic</h3>
    <div class="playground">
      <div class="content">
        <wj-avatar>
          <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </wj-avatar>
      </div>
    </div>

    <h3>Chip</h3>
    <div class="playground">
      <div class="content">
        <wj-chip>
          <wj-avatar>
            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </wj-avatar>
          <wj-label>Chip Avatar</wj-label>
        </wj-chip>
      </div>
    </div>

    <h3>Item</h3>
    <div class="playground">
      <div class="content">
        <wj-item>
          <wj-avatar slot="start">
            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </wj-avatar>
          <wj-label>Item Avatar</wj-label>
        </wj-item>
      </div>
    </div>

    <!--  THUMBNAIL BASIC-->

    <h2>Thumbnail</h2>
    <h3>Basic</h3>
    <div class="playground">
      <div class="content">
        <wj-thumbnail>
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </wj-thumbnail>
      </div>
    </div>

    <!--  ITEM THUMBNAIL -->

    <h3>Item thumbnail</h3>
    <div class="playground">
      <div class="content">
        <wj-item>
          <wj-thumbnail slot="start">
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
          </wj-thumbnail>
          <wj-label>Item</wj-label>
        </wj-item>
      </div>
    </div>

    <!--  CUSTOM -->

    <h3>Custom</h3>
    <div class="playground">
      <div class="content">
        <wj-thumbnail class="example-thumbnail">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </wj-thumbnail>

        <style>
          .example-thumbnail {
            --wj-thumbnail-width: 80px !important;
            --wj-thumbnail-height: 80px !important;
            --wj-border-radius: 24px !important;
          }
        </style>
      </div>
    </div>

    <!-- IMAGE-->

    <h2>Image</h2>
    <h3>Basic</h3>
    <div class="playground">
      <div class="content">
        <wj-img src="/demo/assets/img/img.png" alt="Sometimes it feels like we go in circles…"></wj-img>
      </div>
    </div>
  </div>`;

export class DemoMedia extends WJElement {
  constructor() {
    super(template);
  }
}

customElements.get("demo-media") || window.customElements.define("demo-media", DemoMedia);