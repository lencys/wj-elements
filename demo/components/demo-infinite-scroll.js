import { WJElement } from "../../dist/wj-main.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Infinite Scroll</h1>
  <div class="container">

    <!-- BASIC -->

    <h3>Basic</h3>
    <div class="playground">
      <div class="content">
        <wj-infinite-scroll url="/api/users" placement="wj-list">
          <wj-list>
            <wj-item iterate>
              <wj-lable>
                <h4>{{fullName}}</h4>
                <p>{{jobTitle}}</p>
              </wj-lable>
            </wj-item>
          </wj-list>
        </wj-infinite-scroll>
      </div>
    </div>

    <!-- SIZE -->

    <h3>Size</h3>
    <div class="playground">
      <div class="content">
        <wj-infinite-scroll url="/api/users" placement="wj-list" size="20">
          <wj-list>
            <wj-item iterate>
              <wj-lable>
                <h4>{{fullName}}</h4>
                <p>{{jobTitle}}</p>
              </wj-lable>
            </wj-item>
          </wj-list>
        </wj-infinite-scroll>
      </div>
    </div>

    <!-- CARRD -->

    <h3>Card</h3>
    <div class="playground" style="padding: 1rem 0;">
      <div class="content" style="width: auto;">
        <wj-infinite-scroll url="/api/users" placement="wj-row" size="20" class="example" height="440px">
          <wj-grid>
            <wj-row wrap>
              <wj-col size="6" iterate>
                <wj-card>
                  <wj-img src="{{image}}"></wj-img>
                  <wj-card-header>
                    <wj-card-subtitle>{{jobTitle}}</wj-card-subtitle>
                    <wj-card-title>{{fullName}}</wj-card-title>
                  </wj-card-header>
                  <wj-card-content>
                    <p>{{description}}</p>
                  </wj-card-content>
                </wj-card>
              </wj-col>
            </wj-row>
          </wj-grid>
          <style>
            .example {
              padding: 0 1rem;
            }
          </style>
        </wj-infinite-scroll>
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