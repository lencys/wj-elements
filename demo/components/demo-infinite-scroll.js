import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "../assets/js/code-snippet-builder.js";
import { event } from "../../packages/index.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Infinite Scroll</h1>
  <div class="container">

    <!-- BASIC -->

    <h3>Basic</h3>
    <div class="playground">
      <div class="content">
        <wje-infinite-scroll url="/api/users" placement="wje-list" id="basic">
          <wje-list>
            <wje-item iterate>
              <wje-label>
                <h4>{{fullName}}</h4>
                <p>{{jobTitle}}</p>
              </wje-label>
            </wje-item>
          </wje-list>
          <wje-icon name="arrow-bar-to-down" size="large" slot="ending"></wje-icon>
          <wje-icon name="loader" size="large" slot="loader"></wje-icon>
        </wje-infinite-scroll>
      </div>
    </div>
    
    <!-- CUSTOM DATA - FOREACH -->

    <h3>Custom Data</h3>
    <div class="playground">
      <div class="content">
        <wje-infinite-scroll placement="wje-list" id="custom-data">
          <wje-list></wje-list>
          <wje-icon name="arrow-bar-to-down" size="large" slot="ending"></wje-icon>
          <wje-icon name="loader" size="large" slot="loader"></wje-icon>
        </wje-infinite-scroll>
      </div>
    </div>

    <!-- SIZE -->

    <h3>Size</h3>
    <div class="playground">
      <div class="content">
        <wje-infinite-scroll url="/api/users" placement="wje-list" size="6">
          <wje-list>
          <wje-tooltip content="{{fullName}}" iterate>
            <wje-item >
              
                <wje-label>
                  <h4>{{fullName}}</h4>
                  <p>{{jobTitle}}</p>
                </wje-label>
                </wje-item>
              </wje-tooltip>
            
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
          <wje-icon name="arrow-bar-to-down" size="large" slot="ending"></wje-icon>
          <wje-icon name="loader" size="large" slot="loader"></wje-icon>
        </wje-infinite-scroll>
      </div>
    </div>
  </div>`;

export default class DemoInfinteScroll extends WJElement {
  constructor() {
    super(template);
  }

  beforeDraw() {

    const infiniteScroll = this.querySelector("#custom-data");

    infiniteScroll.setCustomData = async () => {
      infiniteScroll.infiniteScrollTemplate = `<wje-item">
        <wje-label>
          <h4>{{title}}</h4>
          <p>{{description}}</p>
        </wje-label>
      </wje-item>`;

      return {
        "page": 0,
        "size": 1,
        "totalPages": 1,
        "data": [
          {
            "id": "1",
            "title": "Lorem ipsum dolor sit amet",
            "description": "Quasi cervus sordeo deprimo tunc curriculum verbum vox beatae turpis.",
            "time": "2024-06-24T10:00:00Z"
          },{
            "id": "2",
            "title": "Lorem ipsum dolor sit amet",
            "description": "Quasi cervus sordeo deprimo tunc curriculum verbum vox beatae turpis.",
            "time": "2024-06-23T12:00:00Z"
          }, {
            "id": "3",
            "title": "Lorem ipsum dolor sit amet",
            "description": "Quasi cervus sordeo deprimo tunc curriculum verbum vox beatae turpis.",
            "time": "2024-06-24T14:00:00Z"
          }
        ]
      };
    }

    infiniteScroll.customForeach = (data) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      let addedTodayHeader = false;
      let addedOlderHeader = false;

      data.forEach((item) => {
        let itemDate = new Date(item.time);
        itemDate.setHours(0, 0, 0, 0);

        if (itemDate.getTime() === today.getTime() && !addedTodayHeader) {
          let todayHeader = document.createElement('h5');
          todayHeader.textContent = "Dnes";
          infiniteScroll.placementObj.insertAdjacentElement("beforeend", todayHeader);
          addedTodayHeader = true;
        }

        if (itemDate.getTime() !== today.getTime() && !addedOlderHeader) {
          let olderHeader = document.createElement('h5');
          olderHeader.textContent = "Staršie";
          infiniteScroll.placementObj.insertAdjacentElement("beforeend", olderHeader);
          addedOlderHeader = true;
        }

        let element = infiniteScroll.dataToHtml(item);
        infiniteScroll.placementObj.insertAdjacentElement("beforeend", element);
      });
    }
  }

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(template, this.context);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-infinite-scroll") || window.customElements.define("demo-infinite-scroll", DemoInfinteScroll);