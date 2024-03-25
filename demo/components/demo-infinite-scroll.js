import WJElement from "../../dist/wje-element.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Infinite Scroll</h1>
  <div class="container">

    <!-- BASIC -->

    <h3>Basic</h3>
    <div class="playground">
      <div class="content">
        <wje-infinite-scroll url="/api/users" placement="wje-list">
          <wje-list>
            <wje-item iterate>
              <wje-label>
                <h4>{{fullName}}</h4>
                <p>{{jobTitle}}</p>
              </wje-label>
            </wje-item>
          </wje-list>
        </wje-infinite-scroll>
      </div>
    </div>

    <!-- SIZE -->

    <h3>Size</h3>
    <div class="playground">
      <div class="content">
        <wje-infinite-scroll url="/api/users" placement="wje-list" size="6">
          <wje-list>
            <wje-item iterate>
              <wje-label>
                <h4>{{fullName}}</h4>
                <p>{{jobTitle}}</p>
              </wje-label>
            </wje-item>
          </wje-list>
        </wje-infinite-scroll>
      </div>
    </div>

    <!-- CARRD -->

    <h3>Card</h3>
    <div class="playground" style="padding: 1rem 0;">
      <div class="content" style="width: auto;">
        <wje-infinite-scroll url="/api/users" placement="wje-row" size="20" class="example" height="440px">
          <wje-grid>
            <wje-row wrap>
              <wje-col size="6" iterate>
                <wje-card>
                  <wje-img src="{{image}}"></wje-img>
                  <wje-card-header>
                    <wje-card-subtitle>{{jobTitle}}</wje-card-subtitle>
                    <wje-card-title>{{fullName}}</wje-card-title>
                  </wje-card-header>
                  <wje-card-content>
                    <p>{{description}}</p>
                  </wje-card-content>
                </wje-card>
              </wje-col>
            </wje-row>
          </wje-grid>
          <style>
            .example {
              padding: 0 1rem;
            }
          </style>
        </wje-infinite-scroll>
      </div>
    </div>
  </div>`;

export default class DemoInfinteScroll extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-infinite-scroll") || window.customElements.define("demo-infinite-scroll", DemoInfinteScroll);