import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `
  <h1>Chip</h1>
  <div class="container">

    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wje-chip>Default</wje-chip>
        <wje-chip active>Default</wje-chip>
        <wje-chip disabled>Disabled</wje-chip>
      </div>
    </div>
    
    <!-- Shape -->

    <h2>Shape</h2>
    <div class="playground">
      <div class="content">
        <wje-chip round>Round</wje-chip>
        <wje-chip>Circle</wje-chip>
      </div>
    </div>
    
    <!-- Size -->

    <h2>Size</h2>
    <div class="playground">
      <div class="content">
        <div>
          <wje-chip size="small" round>Small</wje-chip>
          <wje-chip round>Default</wje-chip>
          <wje-chip size="large" round>Large</wje-chip>
        </div>
        <div>
          <wje-chip size="small">Small</wje-chip>
          <wje-chip>Default</wje-chip>
          <wje-chip size="large">Large</wje-chip>
        </div>
        <div>
          <wje-chip size="small" round removable>Small</wje-chip>
          <wje-chip round removable>Default</wje-chip>
          <wje-chip size="large" round removable>Large</wje-chip>
        </div>
        <div>
          <wje-chip size="small" removable>Small</wje-chip>
          <wje-chip removable>Default</wje-chip>
          <wje-chip size="large" removable>Large</wje-chip>
        </div>
      </div>
    </div>
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wje-chip>
          Default
          <wje-level-indicator level="2" slot="end"></wje-level-indicator>
        </wje-chip>
      </div>
    </div>

    <!--  SLOTTING -->

    <h2>Slottings</h2>
    <div class="playground">
      <div class="content">
        <wje-chip>
          <wje-avatar>
            <wje-img src="/assets/img/avatar.svg"></wje-img>
          </wje-avatar>
          <wje-label>Avatar Chip</wje-label>
          <wje-icon name="circle-xmark"></wje-icon>
        </wje-chip>

        <wje-chip removable>
          <wje-icon name="location-pin" color="complete"></wje-icon>
          <wje-label>Icon Chip</wje-label>
        </wje-chip>
      </div>
    </div>

    <!-- COLORS -->

    <h2>Colors</h2>
    <div class="playground">
      <div class="content">
        <wje-chip>Default</wje-chip>
        <wje-chip color="primary">Primary</wje-chip>
        <wje-chip color="complete">Complete</wje-chip>
        <wje-chip color="success">Success</wje-chip>
        <wje-chip color="warning">Warning</wje-chip>
        <wje-chip color="danger">Danger</wje-chip>
        <wje-chip color="info">Info</wje-chip>
        <wje-chip color="default">Menu</wje-chip>
      </div>
    </div>

    <!-- COLORS WITH REMOVABLE -->

    <h2>Colors with remove button</h2>
    <div class="playground">
      <div class="content">
        <wje-chip color="primary" removable>Remove Chip</wje-chip>
        <wje-chip color="complete" removable>Remove Chip</wje-chip>
        <wje-chip color="success" removable>Remove Chip</wje-chip>
        <wje-chip color="warning" removable>Remove Chip</wje-chip>
        <wje-chip color="danger" removable>Remove Chip</wje-chip>
        <wje-chip color="info" removable>Remove Chip</wje-chip>
        <wje-chip color="default" removable>Remove Chip</wje-chip>
      </div>
    </div>
    
    <!-- COLORS -->

    <h2>Custom</h2>
    <div class="playground">
      <div class="content">
        <style>
          wje-chip#custom {
            --wje-chip-background: #00213f;
            --wje-chip-color: #adefd1;
          }
        </style>
        
        <wje-chip id="custom">Default</wje-chip>
      </div>
    </div>
  </div>`;

export default class DemoChip extends WJElement {
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

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(this.context);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-chip') || window.customElements.define('demo-chip', DemoChip);
