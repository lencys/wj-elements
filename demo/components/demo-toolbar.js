import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Toolbar</h1>
<div class="container">

  <style>
    .custom {
      --wj-icon-size: 10px;
    }
  </style> 
  <!-- BASIC -->

  <h2>Basic</h2>
  <div class="playground" style="background-color: rgba(0,0,0,.08);">
    <div class="content" style="width: 100%; margin: auto 1rem;">
      <wj-toolbar>
        <wj-breadcrumbs slot="start">
          <wj-breadcrumb href="/home"><wj-icon slot="start" name="home"></wj-icon></wj-breadcrumb>
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
        <wj-breadcrumbs slot="start" max-items="3" items-before-collapse="1" routerlinks id="custom-dynamic"></wj-breadcrumbs>
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
          <wj-breadcrumb href="/home"><wj-icon slot="start" name="home"></wj-icon></wj-breadcrumb>
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

export default class DemoToolbar extends WJElement {
  constructor() {
    super(template);
  }

  beforeRouteEnter(transition) {
    this.objs = transition.breadcrumbs;

    this.objs.unshift({
      "name": "home",
      "text": '<wj-icon slot="start" name="home"></wj-icon>',
      "params": {},
      "path": "/"
    });
  }

  afterDraw(context, store2, params) {
    const breadcrumbs = this.querySelector("#custom-dynamic");
    this.objs.forEach((obj) => {
      let breadcrumb = document.createElement("wj-breadcrumb");
      breadcrumb.setAttribute("route", obj.name);
      breadcrumb.innerHTML = `${obj.text}<wj-icon slot="separator" name="minus" size="small" class="custom"></wj-icon>`;

      breadcrumbs.appendChild(breadcrumb);
    });
    breadcrumbs.refresh();
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-toolbar") || window.customElements.define("demo-toolbar", DemoToolbar);