import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `

  <h1>Tree</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground" style="display: block;">
      <div class="content" style="justify-content: start; width: 240px;">
        <wje-tree>
          <wje-tree-item expanded>
            Deciduous
            <wje-tree-item>Birch</wje-tree-item>
            <wje-tree-item expanded>
              Maple
              <wje-tree-item>Field maple</wje-tree-item>
              <wje-tree-item>Red maple</wje-tree-item>
              <wje-tree-item>Sugar maple</wje-tree-item>
            </wje-tree-item>
            <wje-tree-item>Oak</wje-tree-item>
          </wje-tree-item>
          <wje-tree-item>
            Coniferous
            <wje-tree-item>Cedar</wje-tree-item>
            <wje-tree-item>Pine</wje-tree-item>
            <wje-tree-item>Spruce</wje-tree-item>
          </wje-tree-item>
          <wje-tree-item>
            Non-trees
            <wje-tree-item>Bamboo</wje-tree-item>
            <wje-tree-item>Cactus</wje-tree-item>
            <wje-tree-item>Fern</wje-tree-item>
          </wje-tree-item>
        </wje-tree>
      </div>
    </div>
    
    <!-- MULITIPLE -->

    <h2>Multiple</h2>
    <div class="playground" style="display: block;">
      <div class="content" style="justify-content: start; width: 240px;">
        <wje-tree selection="multiple">
          <wje-tree-item>
            Deciduous
            <wje-tree-item>Birch</wje-tree-item>
            <wje-tree-item>
              Maple
              <wje-tree-item>Field maple</wje-tree-item>
              <wje-tree-item>Red maple</wje-tree-item>
              <wje-tree-item>Sugar maple</wje-tree-item>
            </wje-tree-item>
            <wje-tree-item>Oak</wje-tree-item>
          </wje-tree-item>
          <wje-tree-item>
            Coniferous
            <wje-tree-item>Cedar</wje-tree-item>
            <wje-tree-item>Pine</wje-tree-item>
            <wje-tree-item>Spruce</wje-tree-item>
          </wje-tree-item>
          <wje-tree-item>
            Non-trees
            <wje-tree-item>Bamboo</wje-tree-item>
            <wje-tree-item>Cactus</wje-tree-item>
            <wje-tree-item>Fern</wje-tree-item>
          </wje-tree-item>
        </wje-tree>
      </div>
    </div>
    
    <!-- INDENT -->

    <h2>Indent</h2>
    <div class="playground" style="display: block;">
      <div class="content" style="justify-content: start; width: 240px;">
        <wje-tree class="example-indent">
          <wje-tree-item>
            Deciduous
            <wje-tree-item>Birch</wje-tree-item>
            <wje-tree-item>
              Maple
              <wje-tree-item>Field maple</wje-tree-item>
              <wje-tree-item>Red maple</wje-tree-item>
              <wje-tree-item>Sugar maple</wje-tree-item>
            </wje-tree-item>
            <wje-tree-item>Oak</wje-tree-item>
          </wje-tree-item>
          <wje-tree-item>
            Coniferous
            <wje-tree-item>Cedar</wje-tree-item>
            <wje-tree-item>Pine</wje-tree-item>
            <wje-tree-item>Spruce</wje-tree-item>
          </wje-tree-item>
          <wje-tree-item>
            Non-trees
            <wje-tree-item>Bamboo</wje-tree-item>
            <wje-tree-item>Cactus</wje-tree-item>
            <wje-tree-item>Fern</wje-tree-item>
          </wje-tree-item>
        </wje-tree>
        <style>
          .example-indent {
            --wje-tree-item-indent-guid-width: 1px;
          }
        </style>
      </div>
    </div>
    
    <!-- BUTTON -->

    <h2>Button</h2>
    <div class="playground" style="display: block;">
      <div class="content" style="justify-content: start; width: 240px;">
        <wje-tree>
          <wje-icon name="plus" slot="expand"></wje-icon>
          <wje-icon name="minus" slot="collapse"></wje-icon>
          <wje-tree-item>
            Deciduous
            <wje-tree-item>Birch</wje-tree-item>
            <wje-tree-item>
              Maple
              <wje-tree-item>Field maple</wje-tree-item>
              <wje-tree-item>Red maple</wje-tree-item>
              <wje-tree-item>Sugar maple</wje-tree-item>
            </wje-tree-item>
            <wje-tree-item>Oak</wje-tree-item>
          </wje-tree-item>
          <wje-tree-item>
            Coniferous
            <wje-tree-item>Cedar</wje-tree-item>
            <wje-tree-item>Pine</wje-tree-item>
            <wje-tree-item>Spruce</wje-tree-item>
          </wje-tree-item>
          <wje-tree-item>
            Non-trees
            <wje-tree-item>Bamboo</wje-tree-item>
            <wje-tree-item>Cactus</wje-tree-item>
            <wje-tree-item>Fern</wje-tree-item>
          </wje-tree-item>
        </wje-tree>
      </div>
    </div>
    
    <!-- ICONS -->

    <h2>Icons</h2>
    <div class="playground" style="display: block;">
      <div class="content" style="justify-content: start; width: 240px;">
        <wje-tree>
          <wje-tree-item>
            <wje-icon name="folder" filled></wje-icon>
            Files
            <wje-tree-item>
              <wje-icon name="folder" filled></wje-icon>Images
              <wje-tree-item><wje-icon name="photo"></wje-icon>cat.jpg</wje-tree-item>
              <wje-tree-item><wje-icon name="photo"></wje-icon>dog.jpg</wje-tree-item>
              <wje-tree-item><wje-icon name="photo"></wje-icon>horse.jpg</wje-tree-item>
            </wje-tree-item>
            <wje-tree-item>
              <wje-icon name="folder" filled></wje-icon>Documents
              <wje-tree-item><wje-icon name="file"></wje-icon>guideline.docx</wje-tree-item>
              <wje-tree-item><wje-icon name="file"></wje-icon>law.docx</wje-tree-item>
              <wje-tree-item><wje-icon name="file"></wje-icon>table.xlsx</wje-tree-item>
            </wje-tree-item>
            <wje-tree-item>
              <wje-icon name="folder"></wje-icon>Applications
            </wje-tree-item>
          </wje-tree-item>
        </wje-tree>
      </div>
    </div>
  </div>`;

export default class DemoTree extends WJElement {
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

customElements.get('demo-tree') || window.customElements.define('demo-tree', DemoTree);
