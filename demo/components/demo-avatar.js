import { WJElement } from "../../dist/wj-main.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Avatar</h1>
  <div class="container">

    <!-- BASIC SKUSKA 12 -->

    <h3>Basic</h3>
    <div class="playground">
      <div class="content">
        <wj-avatar>
          <wj-img src="https://ionicframework.com/docs/img/demos/avatar.svg"></wj-img>
        </wj-avatar>
      </div>
    </div>
    
    <!-- SIZE -->

    <h3>Size</h3>
    <div class="playground">
      <div class="content">
        <wj-avatar size="small">
          <wj-img src="https://ionicframework.com/docs/img/demos/avatar.svg"></wj-img>
        </wj-avatar>
        <wj-avatar>
          <wj-img src="https://ionicframework.com/docs/img/demos/avatar.svg"></wj-img>
        </wj-avatar>
        <wj-avatar size="large">
          <wj-img src="https://ionicframework.com/docs/img/demos/avatar.svg"></wj-img>
        </wj-avatar>
      </div>
    </div>
    
    <!-- ICON -->

    <h3>Icon</h3>
    <div class="playground">
      <div class="content">
        <wj-avatar size="small">
          <wj-icon name="image" slot="icon"></wj-icon>
        </wj-avatar>
        <wj-avatar>
          <wj-icon name="image" slot="icon"></wj-icon>
        </wj-avatar>
        <wj-avatar size="large">
          <wj-icon name="image" slot="icon"></wj-icon>
        </wj-avatar>
      </div>
    </div>
    
    <!-- INITIALS -->

    <h3>Initials</h3>
    <div class="playground">
      <div class="content">
        <wj-avatar label="Lukáš Ondrejček" initials></wj-avatar>
      </div>
    </div>
    
    <!-- DROPDOWN -->

    <h3>Dropdown</h3>
    <div class="playground">
      <div class="content">
        <wj-dropdown id="custom-dropdown" placement="right-start" trigger="hover" offset="5">
          <wj-avatar label="Lukáš Ondrejček" initials slot="trigger"></wj-avatar>
          <wj-menu>
            <h5 style="margin: 0;">Petr Rahman</h5>
            <p class="hint-text">Frontend Developer</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
          </wj-menu>
        </wj-dropdown>
        <style>
          wj-menu {
            width: 200px;
            padding: 1rem 1rem 0;
          }
        </style>
      </div>
    </div>
    
    <!-- TOOLTIP -->

    <h3>Tooltip</h3>
    <div class="playground">
      <div class="content">
        <wj-tooltip content="Lukáš Ondrejček">
          <wj-avatar label="Lukáš Ondrejček" initials></wj-avatar>
        </wj-tooltip>
      </div>
    </div>
    
    <!-- GROUP -->

    <h3>Group</h3>
    <div class="playground">
      <div class="content">
        <div class="wj-avatar-group">
          <wj-avatar size="large">
            <wj-img src="https://ionicframework.com/docs/img/demos/avatar.svg"></wj-img>
          </wj-avatar>
          <wj-avatar size="large">
            <wj-img src="https://ionicframework.com/docs/img/demos/avatar.svg"></wj-img>
          </wj-avatar>
          <wj-avatar size="large">
            <wj-img src="https://ionicframework.com/docs/img/demos/avatar.svg"></wj-img>
          </wj-avatar>
          <style>
            .wj-avatar-group wj-avatar:not(:first-of-type) {
              margin-left: -1rem;      
            }
            
            .wj-avatar-group wj-avatar::part(native) {
              border: solid 2px #fff;
            }
          </style>
        </div>
      </div>
    </div>
    
    <!-- CUSTOM -->

    <h3>Custom</h3>
    <div class="playground">
      <div class="content">
        <wj-avatar id="custom" label="Lukáš Ondrejček" initials></wj-avatar>
        <style>
          wj-avatar#custom {
            --wj-avatar-width: 100px;
            --wj-avatar-height: 100px;
            --wj-avatar-font-size: 2rem;
            --wj-avatar-font-weight: 700;
            --wj-avatar-color: #000 !important;
            --wj-avatar-background-color: #ff0000 !important;
          }
        </style>
      </div>
    </div>
  </div>`;

export default class DemoMedia extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-media") || window.customElements.define("demo-media", DemoMedia);