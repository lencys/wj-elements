import WJElement from "../../dist/wje-element.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Toolbar</h1>
<div class="container">

  <style>
    .custom {
      --wje-icon-size: 10px;
    }
  </style> 
  <!-- BASIC -->

  <h2>Basic</h2>
  <div class="playground" style="background-color: rgba(0,0,0,.08);">
    <div class="content" style="width: 100%; margin: auto 1rem;">
      <wje-toolbar>
        <wje-breadcrumbs slot="start">
          <wje-breadcrumb href="/home"><wje-icon slot="start" name="home"></wje-icon></wje-breadcrumb>
          <wje-breadcrumb href="/photography">Photography</wje-breadcrumb>
          <wje-breadcrumb href="/cameras">Cameras</wje-breadcrumb>
          <wje-breadcrumb href="/film">Film</wje-breadcrumb>
          <wje-breadcrumb href="/35mm">35 mm</wje-breadcrumb>
        </wje-breadcrumbs>
        <wje-toolbar-action slot="end">
          <wje-button>Create</wje-button>
          <wje-button>Delete</wje-button>
        </wje-toolbar-action>
      </wje-toolbar>
    </div>
  </div>
  
  <!--  DYNAMIC BRADCRUMB -->

  <h2>Dynamic Breadcrumb</h2>
  <p><b>TODO:</b><br/>  
  Pridat dropdown na tri bodky</p>
  <div class="playground" style="background-color: rgba(0,0,0,.08);">
    <div class="content" style="width: 100%; margin: auto 1rem;">
      <wje-toolbar>
        <wje-breadcrumbs slot="start" max-items="3" items-before-collapse="1" routerlinks id="custom-dynamic"></wje-breadcrumbs>
        <wje-toolbar-action slot="end">
          <wje-button>Create</wje-button>
          <wje-button>Read</wje-button>
          <wje-button>Update</wje-button>
          <wje-button>Delete</wje-button>
        </wje-toolbar-action>
      </wje-toolbar>
    </div>
  </div>
  
  <!--  DYNAMIC ACTION -->

  <h2>Dynamic Action</h2>
  <p><b>TODO:</b><br/>  
  Action buttons zabalit do 3 bodiek</p>
  <div class="playground" style="background-color: rgba(0,0,0,.08);">
    <div class="content" style="width: 100%; margin: auto 1rem;">
      <wje-toolbar>
        <wje-breadcrumbs slot="start" max-items="3" items-before-collapse="1" collapsed-variant="dropdown">
          <wje-breadcrumb href="/home"><wje-icon slot="start" name="home"></wje-icon></wje-breadcrumb>
          <wje-breadcrumb href="/photography">Photography</wje-breadcrumb>
          <wje-breadcrumb href="/cameras">Cameras</wje-breadcrumb>
          <wje-breadcrumb href="/film">Film</wje-breadcrumb>
          <wje-breadcrumb href="/35mm">35 mm</wje-breadcrumb>  
        </wje-breadcrumbs>
        <wje-toolbar-action slot="end" max-items="3">
          <wje-button>Create</wje-button>
          <wje-button>Read</wje-button>
          <wje-button>Update</wje-button>
          <wje-button>Delete</wje-button>
        </wje-toolbar-action>
      </wje-toolbar>
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
      "text": '<wje-icon slot="start" name="home"></wje-icon>',
      "params": {},
      "path": "/"
    });
  }

  beforeDraw() {
    console.log("TRALALA")
  }

  afterDraw(context, store2, params) {
    const breadcrumbs = this.querySelector("#custom-dynamic");
    this.objs.forEach((obj) => {
      let breadcrumb = document.createElement("wje-breadcrumb");
      breadcrumb.setAttribute("route", obj.name);
      breadcrumb.innerHTML = `${obj.text}<wje-icon slot="separator" name="minus" size="small" class="custom"></wje-icon>`;

      breadcrumbs.appendChild(breadcrumb);
    });
    breadcrumbs.refresh();
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-toolbar") || window.customElements.define("demo-toolbar", DemoToolbar);