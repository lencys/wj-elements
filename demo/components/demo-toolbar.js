import { WJElement } from "../../dist/wj-master.js";

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
    
        <!-- BASIC -->
    
        <h2>Basic</h2>
        <div class="playground" style="background-color: rgba(0,0,0,.08);">
          <div class="content" style="width: 100%; margin: auto 1rem;">
            <wj-toolbar>
              <wj-breadcrumbs slot="start">
                <wj-breadcrumb href="/home"><wj-icon slot="start" name="house"></wj-icon></wj-breadcrumb>
                <wj-breadcrumb href="/photography">Photography</wj-breadcrumb>
                <wj-breadcrumb href="/cameras">Cameras</wj-breadcrumb>
                <wj-breadcrumb href="/film">Film</wj-breadcrumb>
                <wj-breadcrumb href="/35mm">35 mm</wj-breadcrumb>
              </wj-breadcrumbs>
              <wj-toolbar-action slot="end">
                <wj-button>Create</wj-button>
                <wj-button>Delete</wj-button>
              </wj-toolbar-action>
            </wj-toolbar>
          </div>
        </div>
        
        <!--  DYNAMIC BRADCRUMB -->
    
        <h2>Dynamic Breadcrumb</h2>
        <p><b>TODO:</b><br/>  
        Pridat dropdown na tri bodky</p>
        <div class="playground" style="background-color: rgba(0,0,0,.08);">
          <div class="content" style="width: 100%; margin: auto 1rem;">
            <wj-toolbar>
              <wj-breadcrumbs slot="start" max-items="3" items-before-collapse="1" routerlinks>
                <wj-breadcrumb route="">
                  <wj-icon slot="start" name="house"></wj-icon>
                  <wj-icon slot="separator" name="minus" size="small" class="custom"></wj-icon>
                </wj-breadcrumb>
                ${this.breadcrumbs.map((breadcrumb) => {
                  return `<wj-breadcrumb route="${breadcrumb.name}">
                    ${breadcrumb.text}
                    <wj-icon slot="separator" name="minus" size="small" class="custom"></wj-icon>
                  </wj-breadcrumb>`;
                }).join("")}
                <style>
                  .custom {
                    --wj-icon-size: 10px;
                  }
                </style>     
              </wj-breadcrumbs>
              <wj-toolbar-action slot="end">
                <wj-button>Create</wj-button>
                <wj-button>Read</wj-button>
                <wj-button>Update</wj-button>
                <wj-button>Delete</wj-button>
              </wj-toolbar-action>
            </wj-toolbar>
          </div>
        </div>
        
        <!--  DYNAMIC ACTION -->
    
        <h2>Dynamic Action</h2>
        <p><b>TODO:</b><br/>  
        Action buttons zabalit do 3 bodiek</p>
        <div class="playground" style="background-color: rgba(0,0,0,.08);">
          <div class="content" style="width: 100%; margin: auto 1rem;">
            <wj-toolbar>
              <wj-breadcrumbs slot="start" max-items="3" items-before-collapse="1" collapsed-variant="dropdown">
                <wj-breadcrumb href="/home"><wj-icon slot="start" name="house"></wj-icon></wj-breadcrumb>
                <wj-breadcrumb href="/photography">Photography</wj-breadcrumb>
                <wj-breadcrumb href="/cameras">Cameras</wj-breadcrumb>
                <wj-breadcrumb href="/film">Film</wj-breadcrumb>
                <wj-breadcrumb href="/35mm">35 mm</wj-breadcrumb>  
              </wj-breadcrumbs>
              <wj-toolbar-action slot="end" max-items="3">
                <wj-button>Create</wj-button>
                <wj-button>Read</wj-button>
                <wj-button>Update</wj-button>
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