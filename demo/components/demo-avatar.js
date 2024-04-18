import WJElement from "../../dist/wje-element.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Avatar</h1>
  <div class="container">

    <!-- BASIC SKUSKA 12 -->

    <h3>Basic</h3>
    <div class="playground">
      <div class="content">
        <wje-avatar>
          <wje-img src="/assets/img/avatar.svg"></wje-img>
        </wje-avatar>
      </div>
    </div>
    
    <!-- SIZE -->

    <h3>Size</h3>
    <div class="playground">
      <div class="content">
        <wje-avatar size="small">
          <wje-img src="/assets/img/avatar.svg"></wje-img>
        </wje-avatar>
        <wje-avatar>
          <wje-img src="/assets/img/avatar.svg"></wje-img>
        </wje-avatar>
        <wje-avatar size="large">
          <wje-img src="/assets/img/avatar.svg"></wje-img>
        </wje-avatar>
      </div>
    </div>
    
    <!-- ICON -->

    <h3>Icon</h3>
    <div class="playground">
      <div class="content">
        <wje-avatar size="small">
          <wje-icon name="photo" slot="icon"></wje-icon>
        </wje-avatar>
        <wje-avatar>
          <wje-icon name="photo" slot="icon"></wje-icon>
        </wje-avatar>
        <wje-avatar size="large">
          <wje-icon name="photo" slot="icon"></wje-icon>
        </wje-avatar>
      </div>
    </div>
    
    <!-- INITIALS -->

    <h3>Initials</h3>
    <div class="playground">
      <div class="content">
        <wje-avatar label="Lukáš Ondrejček" initials></wje-avatar>
      </div>
    </div>
    
    <!-- STATUS -->

    <h3>Status</h3>
    <div class="playground">
      <div class="content">
        <wje-avatar label="Lukáš Ondrejček" initials>
         <span slot="status">
          <wje-icon name="check"></wje-icon>
         </span>
        </wje-avatar>
        <style>
          span[slot="status"] {
            background: var(--wje-color-contrast-lower);
            border-radius: var(--wje-border-radius-circle);
            border: 1px solid var(--wje-color-contrast-low);
          }
        </style>
      </div>
    </div>
    
    <!-- DROPDOWN -->

    <h3>Dropdown</h3>
    <div class="playground">
      <div class="content">
        <wje-dropdown id="custom-dropdown" placement="right-start" trigger="hover" offset="5">
          <wje-avatar label="Petr Rahman" initials slot="trigger"></wje-avatar>
          <wje-menu class="custom-menu" active>
            <h5 style="margin: 0;">Petr Rahman</h5>
            <p class="hint-text">Frontend Developer</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
          </wje-menu>
        </wje-dropdown>
        
        <wje-dropdown id="custom-dropdown" placement="right-start" offset="5">
          <wje-avatar label="Petr Rahman" initials slot="trigger"></wje-avatar>
          <wje-menu class="custom-menu" active>
            <h5 style="margin: 0;">Petr Rahman</h5>
            <p class="hint-text">Frontend Developer</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
            <wje-divider></wje-divider>
            <wje-menu-item>Link A</wje-menu-item>
            <wje-menu-item>Link B</wje-menu-item>
          </wje-menu>
        </wje-dropdown>
        <style>
          .custom-menu {
            width: 200px;
            padding: 1rem 1rem 1rem;
          }
        </style>
      </div>
    </div>
    
    <!-- TOOLTIP -->

    <h3>Tooltip</h3>
    <div class="playground">
      <div class="content">
        <wje-tooltip content="Lukáš Ondrejček">
          <wje-avatar label="Lukáš Ondrejček" initials></wje-avatar>
        </wje-tooltip>
      </div>
    </div>
    
    <!-- GROUP -->

    <h3>Group</h3>
    <div class="playground">
      <div class="content">
        <div class="wje-avatar-group">
          <wje-avatar size="large">
            <wje-img src="/assets/img/avatar.svg"></wje-img>
          </wje-avatar>
          <wje-avatar size="large">
            <wje-img src="/assets/img/avatar.svg"></wje-img>
          </wje-avatar>
          <wje-avatar size="large">
            <wje-img src="/assets/img/avatar.svg"></wje-img>
          </wje-avatar>
          <style>
            .wje-avatar-group wje-avatar:not(:first-of-type) {
              margin-left: -1rem;      
            }
            
            .wje-avatar-group wje-avatar::part(native) {
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
        <wje-avatar id="custom" label="Lukáš Ondrejček" initials></wje-avatar>
        <style>
          wje-avatar#custom {
            --wje-avatar-width: 100px;
            --wje-avatar-height: 100px;
            --wje-avatar-font-size: 2rem;
            --wje-avatar-font-weight: 700;
            --wje-avatar-color: #000 !important;
            --wje-avatar-background-color: #ff0000 !important;
          }
        </style>
      </div>
    </div>
  </div>`;

export default class DemoAvatar extends WJElement {
  constructor() {
    super(template);
  }

  beforeRouteEnter(transition) {
    this.breadcrumbs = transition.breadcrumbs;
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-avatar") || window.customElements.define("demo-avatar", DemoAvatar);