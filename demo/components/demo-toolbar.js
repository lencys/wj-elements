import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `<h1>Toolbar</h1>
<div class="container">

  <style>
    .custom {
      --wje-icon-size: 10px;
    }
  </style> 
  
  <!-- BASIC -->

  <h2>Default</h2>
  <p class="description">
    Základné použitie <span class="tok tag">&lt;wje-toolbar&gt;</span> s navigáciou
    <span class="tok tag">&lt;wje-breadcrumbs&gt;</span> v slote
    <span class="tok attr">start</span> a akciami
    <span class="tok tag">&lt;wje-toolbar-action&gt;</span> v slote
    <span class="tok attr">end</span>. Vhodné pre hlavičku obrazovky s cestou a
    najčastejšími tlačidlami (Create/Delete).
  </p>
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
  <p class="description">
    Dynamicky generované breadcrumb položky na základe routeru. Komponent
    <span class="tok tag">&lt;wje-breadcrumbs&gt;</span> používa atribúty
    <span class="tok attr">max-items</span> a
    <span class="tok attr">items-before-collapse</span> na skrátenie cesty
    a atribút <span class="tok attr">routerlinks</span> pre spoluprácu s routerom.
    JavaScript v metóde <span class="tok method">afterRouteEnter()</span> a
    <span class="tok method">afterDraw()</span> pridáva položky podľa
    <span class="tok attr">transition.breadcrumbs</span> a dopĺňa vlastný
    separator cez <span class="tok tag">&lt;wje-icon&gt;</span>.
  </p>
  <p><b>TODO:</b><br/>  
  Dokončiť automatické zbaľovanie</p>
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
  <p class="description">
    Toolbar s dynamickým skracovaním akčných tlačidiel. Atribút
    <span class="tok attr">max-items="3"</span> na
    <span class="tok tag">&lt;wje-toolbar-action&gt;</span> zabezpečí, že pri
    menšej šírke sa prebytočné tlačidlá môžu zobraziť v rozšírenej akcii
    (napr. v 3-bodkovom menu). Breadcrumbs využívajú
    <span class="tok attr">collapsed-variant="dropdown"</span> na zbalenie
    stredných položiek do dropdownu.
  </p>
  <p><b>TODO:</b><br/>  
  Dokončiť automatické zbaľovanie</p>
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
    super();
  }

  /**
   * Returns the template for the component.
   * @static
   * @returns {HTMLElement} The template element
   */
  static get customTemplate() {
    return template;
  }

  afterRouteEnter(transition) {
    this.objs = transition.breadcrumbs;

    this.objs?.unshift({
      name: 'home',
      text: '<wje-icon slot="start" name="home"></wje-icon>',
      params: {},
      path: '/',
    });
  }

  afterDraw(context, store2, params) {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(this.context);

    const breadcrumbs = this.querySelector('#custom-dynamic');
    this.objs?.forEach((obj) => {
      let breadcrumb = document.createElement('wje-breadcrumb');
      breadcrumb.setAttribute('route', obj.name);
      breadcrumb.innerHTML = `${obj.text}<wje-icon slot="separator" name="minus" size="small" class="custom"></wje-icon>`;

      breadcrumbs.appendChild(breadcrumb);
    });
    breadcrumbs.refresh();
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-toolbar') || window.customElements.define('demo-toolbar', DemoToolbar);
