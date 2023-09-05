import { WJElement } from "../../website/static/wj-elements/wj-main.js";

export default class DemoToolbar extends WJElement {
  constructor() {
    super();
  }

  beforeRouteEnter(transition) {
    this.breadcrumbs = transition.breadcrumbs;
  }

  draw(context, store2, params) {
    return `<h1>Toolbar</h1>
      <div class="container">
    
        <!--  BASIC-->
    
        <h2>Basic</h2>
        <div class="playground" style="background-color: rgba(0,0,0,.08);">
          <div class="content" style="width: 100%; margin: auto 1rem;">
            <wj-toolbar>
              <wj-breadcrumbs slot="start">
                ${this.breadcrumbs.map((breadcrumb) => {
                  return `<wj-breadcrumb>${breadcrumb.text}</wj-breadcrumb>`;
                }).join("")}       
              </wj-breadcrumbs>
              <wj-toolbar-action slot="end">
                <wj-button>New</wj-button>
                <wj-button>Delete</wj-button>
              </wj-toolbar-action>
            </wj-toolbar>
          </div>
        </div>
      </div>`;
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-toolbar") || window.customElements.define("demo-toolbar", DemoToolbar);