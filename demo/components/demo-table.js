import WJElement from '../../dist/wje-element.js';

export default class DemoTable extends WJElement {
  constructor() {
    super();
  }

  beforeRouteEnter(transition) {
    this.breadcrumbs = transition.breadcrumbs;
  }

  draw(context, store2, params) {
    return `<h1>Table</h1>
      <div class="container">
    
        <!-- BASIC -->
    
        <h2>Basic</h2>
        <div class="playground" style="background-color: rgba(0,0,0,.08); padding-inline: 1rem;">
          <div class="content" style="width: 100%; margin: 0; display: block;">
            <wje-table style="width: 100%;" dataUrl="/demo/assets/data/simple.json" table-id="people-tasks-list" filterable="simple" bulk sortable layout="fitColumns" responsiveLayout="collapse">
              <div slot="row-activities">
                <wje-button>Akcia 1</wje-button>
                <wje-button>Akcia 2</wje-button>
              </div>
            </wje-table>
          </div>
        </div>
        
        <!-- ADVANCED -->
    
        <h2>Advanced</h2>
        <div class="playground" style="background-color: rgba(0,0,0,.08); padding-inline: 1rem;">
          <div class="content" style="width: 100%; margin: 0; display: block;">
            <wje-table style="width: 100%;" dataUrl="/demo/assets/data/advanced.json" table-id="people-tasks-list" filterable="advanced" bulk sortable layout="fitColumns" responsiveLayout="collapse">
              <div slot="row-activities">
                <wje-button>Akcia 1</wje-button>
                <wje-button>Akcia 2</wje-button>
              </div>
            </wje-table>
          </div>
        </div>
      </div>`;
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-table') || window.customElements.define('demo-table', DemoTable);
