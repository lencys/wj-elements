import { WJElement } from "../../website/static/wj-elements/wj-main.js";

const template = document.createElement('template');

template.innerHTML = `
  <h1>Dropdown</h1>
  <div class="container">

    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <p style="overflow: hidden; height: 50px;">
          <wj-dropdown label="Start" placement="bottom-start" offset="5">
            <wj-button size="large" slot="trigger" caret>Large</wj-button>
            <wj-menu>
              <wj-menu-item>
                <wj-icon name="plane" slot="start"></wj-icon>
                <wj-label>Menu item</wj-label>
              </wj-menu-item>
              <wj-menu-item>
                <wj-icon name="book" slot="start"></wj-icon>
                <wj-label>Menu item</wj-label>
              </wj-menu-item>
              <wj-menu-item>
                <wj-icon name="music" slot="start"></wj-icon>
                <wj-label>Menu item</wj-label>
              </wj-menu-item>
              <wj-menu-item>
                <wj-icon name="film" slot="start"></wj-icon>
                <wj-label>Menu item</wj-label>
              </wj-menu-item>
            </wj-menu>
          </wj-dropdown>
        </p>
<!--        <p>-->
<!--          <wj-dropdown label="End" placement="end">-->
<!--            <wj-list inset>-->
<!--              <wj-item>-->
<!--                <wj-icon name="plane" slot="start"></wj-icon>-->
<!--                <wj-label>Travel</wj-label>-->
<!--              </wj-item>-->
<!--              <wj-item>-->
<!--                <wj-icon name="book" slot="start"></wj-icon>-->
<!--                <wj-label>Book</wj-label>-->
<!--              </wj-item>-->
<!--              <wj-item>-->
<!--                <wj-icon name="music" slot="start"></wj-icon>-->
<!--                <wj-label>Music</wj-label>-->
<!--              </wj-item>-->
<!--              <wj-item>-->
<!--                <wj-icon name="film" slot="start"></wj-icon>-->
<!--                <wj-label>Movie</wj-label>-->
<!--              </wj-item>-->
<!--            </wj-list>-->
<!--          </wj-dropdown>-->
<!--        </p>-->
<!--        <p>     -->
<!--          <wj-dropdown label="Top start" placement="top-start">-->
<!--            <wj-list inset>-->
<!--              <wj-item>-->
<!--                <wj-icon name="plane" slot="start"></wj-icon>-->
<!--                <wj-label>Travel</wj-label>-->
<!--              </wj-item>-->
<!--              <wj-item>-->
<!--                <wj-icon name="book" slot="start"></wj-icon>-->
<!--                <wj-label>Book</wj-label>-->
<!--              </wj-item>-->
<!--              <wj-item>-->
<!--                <wj-icon name="music" slot="start"></wj-icon>-->
<!--                <wj-label>Music</wj-label>-->
<!--              </wj-item>-->
<!--              <wj-item>-->
<!--                <wj-icon name="film" slot="start"></wj-icon>-->
<!--                <wj-label>Movie</wj-label>-->
<!--              </wj-item>-->
<!--            </wj-list>-->
<!--          </wj-dropdown>-->
<!--        </p>-->
<!--        <p>-->
<!--          <wj-dropdown label="Top end" placement="top-end">-->
<!--            <wj-button slot="button">Tralala</wj-button>-->
<!--            <wj-list inset>-->
<!--              <wj-item>-->
<!--                <wj-icon name="plane" slot="start"></wj-icon>-->
<!--                <wj-label>Travel</wj-label>-->
<!--              </wj-item>-->
<!--              <wj-item>-->
<!--                <wj-icon name="book" slot="start"></wj-icon>-->
<!--                <wj-label>Book</wj-label>-->
<!--              </wj-item>-->
<!--              <wj-item>-->
<!--                <wj-icon name="music" slot="start"></wj-icon>-->
<!--                <wj-label>Music</wj-label>-->
<!--              </wj-item>-->
<!--              <wj-item>-->
<!--                <wj-icon name="film" slot="start"></wj-icon>-->
<!--                <wj-label>Movie</wj-label>-->
<!--              </wj-item>-->
<!--            </wj-list>-->
<!--          </wj-dropdown>-->
<!--        </p>-->



    
      </div>
    </div>
  </div>`;

export default class DemoDropdown extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-dropdown") || window.customElements.define("demo-dropdown", DemoDropdown);