import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "./snippet/code-snippet-builder.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Item</h1>
  <div class="container">

    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wje-item>
          <wje-label>Basic Item</wje-label>
        </wje-item>

        <wje-item>
          <wje-label>
            Multi-line text that should ellipsis when it is too long to fit on
            one line. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </wje-label>
        </wje-item>

        <wje-item>
          <wje-label class="wje-text-wrap">
            Multi-line text that should wrap when it is too long to fit on one
            line. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </wje-label>
        </wje-item>

        <wje-item>
          <wje-label>
            <h1>H1 Heading</h1>
            <p>Paragraph</p>
          </wje-label>
        </wje-item>

        <wje-item>
          <wje-label>
            <h2>H2 Heading</h2>
            <p>Paragraph</p>
          </wje-label>
        </wje-item>

        <wje-item>
          <wje-label>
            <h3>H3 Heading</h3>
            <p>Paragraph</p>
          </wje-label>
        </wje-item>
      </div>
    </div>

    <h3>HTML Snippet</h3>
        <div class="html-snippet"></div>

    <!--  ICONS IN ITEM -->

    <h2>Icons in items</h2>
    <div class="playground">
      <div class="content">
        <wje-item>
          <wje-label>Default Icon</wje-label>
          <wje-icon name="info-circle" slot="end"></wje-icon>
        </wje-item>

        <wje-item>
          <wje-label>Large Icon</wje-label>
          <wje-icon name="info-circle" size="large" slot="end"></wje-icon>
        </wje-item>

        <wje-item>
          <wje-label>Small Icon</wje-label>
          <wje-icon name="info-circle" size="small" slot="end"></wje-icon>
        </wje-item>

        <wje-item>
          <wje-icon name="star" slot="start"></wje-icon>
          <wje-label>Default Icon</wje-label>
        </wje-item>
      </div>
    </div>

    <h3>HTML Snippet</h3>
        <div class="html-snippet"></div>

    <!-- ITEM LINES -->

    <h2>Item lines</h2>
    <div class="playground">
      <div class="content">
        <wje-item>
          <wje-label> Default Item Lines </wje-label>
        </wje-item>

        <wje-item lines="inset">
          <wje-label>Item Lines Inset</wje-label>
        </wje-item>

        <wje-item lines="full">
          <wje-label>Item Lines Full</wje-label>
        </wje-item>

        <wje-item lines="none">
          <wje-label>Item Lines None</wje-label>
        </wje-item>

        <wje-item>
          <wje-icon name="star" slot="start"></wje-icon>
          <wje-label>Default Item Lines</wje-label>
          <wje-icon name="info-circle" slot="end"></wje-icon>
        </wje-item>

        <wje-item lines="inset">
          <wje-icon name="star" slot="start"></wje-icon>
          <wje-label>Item Lines Inset</wje-label>
          <wje-icon name="info-circle" slot="end"></wje-icon>
        </wje-item>

        <wje-item lines="full">
          <wje-icon name="star" slot="start"></wje-icon>
          <wje-label>Item Lines Full</wje-label>
          <wje-icon name="info-circle" slot="end"></wje-icon>
        </wje-item>

        <wje-item lines="none">
          <wje-icon name="star" slot="start"></wje-icon>
          <wje-label>Item Lines None</wje-label>
          <wje-icon name="info-circle" slot="end"></wje-icon>
        </wje-item>
      </div>
    </div>

    <h3>HTML Snippet</h3>
        <div class="html-snippet"></div>

    <!-- MEDIA -->

    <h2>Media Items</h2>
    <div class="playground">
      <div class="content">
        <wje-item>
          <wje-avatar slot="start">
            <wje-img alt="Silhouette of a person's head" src="/assets/img/avatar.svg"></wje-img>
          </wje-avatar>
          <wje-label> Avatar Item </wje-label>
        </wje-item>

        <wje-item>
          <wje-thumbnail slot="start">
            <wje-img alt="Silhouette of mountains" src="/assets/img/thumbnail.svg"></wje-img>
          </wje-thumbnail>
          <wje-label> Thumbnail Item </wje-label>
        </wje-item>
      </div>
    </div>

    <h3>HTML Snippet</h3>
        <div class="html-snippet"></div>

    <!-- BUTTONS -->

    <h2>Buttons in Items</h2>
    <div class="playground">
      <div class="content">
        <wje-item>
          <wje-button slot="start"> Start </wje-button>
          <wje-label>Default Buttons</wje-label>
          <wje-button slot="end"> End </wje-button>
        </wje-item>

        <wje-item>
          <wje-button slot="start">
            Start
            <wje-icon name="home" slot="end"></wje-icon>
          </wje-button>
          <wje-label>Buttons with Icons</wje-label>
          <wje-button slot="end">
            <wje-icon name="star" slot="end"></wje-icon>
            End
          </wje-button>
        </wje-item>

        <wje-item>
          <wje-button slot="start">
            <wje-icon slot="icon-only" name="user"></wje-icon>
          </wje-button>
          <wje-label>Icon only Buttons</wje-label>
          <wje-button slot="end">
            <wje-icon slot="icon-only" name="star"></wje-icon>
          </wje-button>
        </wje-item>

        <wje-item>
          <wje-label>Button Sizes</wje-label>
          <wje-button slot="end" size="small"> Small </wje-button>
          <wje-button slot="end" size="default"> Default </wje-button>
          <wje-button slot="end" size="large"> Large </wje-button>
        </wje-item>
      </div>
    </div>

    <h3>HTML Snippet</h3>
        <div class="html-snippet"></div>
  </div>`;

export default class DemoItem extends WJElement {
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

customElements.get("demo-item") || window.customElements.define("demo-item", DemoItem);