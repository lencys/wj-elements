import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Item</h1>
  <div class="container">

    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wj-item>
          <wj-label>Basic Item</wj-label>
        </wj-item>

        <wj-item>
          <wj-label>
            Multi-line text that should ellipsis when it is too long to fit on
            one line. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </wj-label>
        </wj-item>

        <wj-item>
          <wj-label class="wj-text-wrap">
            Multi-line text that should wrap when it is too long to fit on one
            line. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </wj-label>
        </wj-item>

        <wj-item>
          <wj-label>
            <h1>H1 Heading</h1>
            <p>Paragraph</p>
          </wj-label>
        </wj-item>

        <wj-item>
          <wj-label>
            <h2>H2 Heading</h2>
            <p>Paragraph</p>
          </wj-label>
        </wj-item>

        <wj-item>
          <wj-label>
            <h3>H3 Heading</h3>
            <p>Paragraph</p>
          </wj-label>
        </wj-item>
      </div>
    </div>

    <!--  ICONS IN ITEM -->

    <h2>Icons in items</h2>
    <div class="playground">
      <div class="content">
        <wj-item>
          <wj-label>Default Icon</wj-label>
          <wj-icon name="info-circle" slot="end"></wj-icon>
        </wj-item>

        <wj-item>
          <wj-label>Large Icon</wj-label>
          <wj-icon name="info-circle" size="large" slot="end"></wj-icon>
        </wj-item>

        <wj-item>
          <wj-label>Small Icon</wj-label>
          <wj-icon name="info-circle" size="small" slot="end"></wj-icon>
        </wj-item>

        <wj-item>
          <wj-icon name="star" slot="start"></wj-icon>
          <wj-label>Default Icon</wj-label>
        </wj-item>
      </div>
    </div>

    <!-- ITEM LINES -->

    <h2>Item lines</h2>
    <div class="playground">
      <div class="content">
        <wj-item>
          <wj-label> Default Item Lines </wj-label>
        </wj-item>

        <wj-item lines="inset">
          <wj-label>Item Lines Inset</wj-label>
        </wj-item>

        <wj-item lines="full">
          <wj-label>Item Lines Full</wj-label>
        </wj-item>

        <wj-item lines="none">
          <wj-label>Item Lines None</wj-label>
        </wj-item>

        <wj-item>
          <wj-icon name="star" slot="start"></wj-icon>
          <wj-label>Default Item Lines</wj-label>
          <wj-icon name="info-circle" slot="end"></wj-icon>
        </wj-item>

        <wj-item lines="inset">
          <wj-icon name="star" slot="start"></wj-icon>
          <wj-label>Item Lines Inset</wj-label>
          <wj-icon name="info-circle" slot="end"></wj-icon>
        </wj-item>

        <wj-item lines="full">
          <wj-icon name="star" slot="start"></wj-icon>
          <wj-label>Item Lines Full</wj-label>
          <wj-icon name="info-circle" slot="end"></wj-icon>
        </wj-item>

        <wj-item lines="none">
          <wj-icon name="star" slot="start"></wj-icon>
          <wj-label>Item Lines None</wj-label>
          <wj-icon name="info-circle" slot="end"></wj-icon>
        </wj-item>
      </div>
    </div>

    <!-- MEDIA -->

    <h2>Media Items</h2>
    <div class="playground">
      <div class="content">
        <wj-item>
          <wj-avatar slot="start">
            <wj-img alt="Silhouette of a person's head" src="/assets/img/avatar.svg"></wj-img>
          </wj-avatar>
          <wj-label> Avatar Item </wj-label>
        </wj-item>

        <wj-item>
          <wj-thumbnail slot="start">
            <wj-img alt="Silhouette of mountains" src="/assets/img/thumbnail.svg"></wj-img>
          </wj-thumbnail>
          <wj-label> Thumbnail Item </wj-label>
        </wj-item>
      </div>
    </div>

    <!-- BUTTONS -->

    <h2>Buttons in Items</h2>
    <div class="playground">
      <div class="content">
        <wj-item>
          <wj-button slot="start"> Start </wj-button>
          <wj-label>Default Buttons</wj-label>
          <wj-button slot="end"> End </wj-button>
        </wj-item>

        <wj-item>
          <wj-button slot="start">
            Start
            <wj-icon name="home" slot="end"></wj-icon>
          </wj-button>
          <wj-label>Buttons with Icons</wj-label>
          <wj-button slot="end">
            <wj-icon name="star" slot="end"></wj-icon>
            End
          </wj-button>
        </wj-item>

        <wj-item>
          <wj-button slot="start">
            <wj-icon slot="icon-only" name="user"></wj-icon>
          </wj-button>
          <wj-label>Icon only Buttons</wj-label>
          <wj-button slot="end">
            <wj-icon slot="icon-only" name="star"></wj-icon>
          </wj-button>
        </wj-item>

        <wj-item>
          <wj-label>Button Sizes</wj-label>
          <wj-button slot="end" size="small"> Small </wj-button>
          <wj-button slot="end" size="default"> Default </wj-button>
          <wj-button slot="end" size="large"> Large </wj-button>
        </wj-item>
      </div>
    </div>
  </div>`;

export default class DemoItem extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-item") || window.customElements.define("demo-item", DemoItem);