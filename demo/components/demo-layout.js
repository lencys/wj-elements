import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `
  <h1>Layout</h1>
  <div class="container">

    <!-- CONTAINER LAYOUT-->

    <h2>Container layouts</h2>
    <p class="description">
      Ukážky skladania layoutu pomocou kontajnerových komponentov:
      <span class="tok tag">&lt;wje-container&gt;</span>,
      <span class="tok tag">&lt;wje-header&gt;</span>,
      <span class="tok tag">&lt;wje-main&gt;</span>,
      <span class="tok tag">&lt;wje-footer&gt;</span> a
      <span class="tok tag">&lt;wje-aside&gt;</span>.
      Atribút <span class="tok attr">vertical</span> prepína smer layoutu (stĺpce vs. riadky)
      a <span class="tok attr">width</span> na <span class="tok tag">&lt;wje-aside&gt;</span>
      definuje pevnú šírku bočných panelov.
    </p>
    <div class="playground">
      <div class="content">
        <wje-container vertical>
          <wje-header>Header</wje-header>
          <wje-main>Main</wje-main>
        </wje-container>
        
        <wje-container vertical>
          <wje-header>Header</wje-header>
          <wje-main>Main</wje-main>
          <wje-footer>Footer</wje-footer>
        </wje-container>
        <wje-container>
          <wje-aside width="200px">Aside</wje-aside>
          <wje-main>Main</wje-main>
        </wje-container>
        
        <wje-container vertical>
          <wje-header>Header</wje-header>
          <wje-container>
            <wje-aside width="200px">Aside</wje-aside>
            <wje-main>Main</wje-main>
          </wje-container>
        </wje-container>
        
        <wje-container vertical>
          <wje-header>Header</wje-header>
          <wje-container>
            <wje-aside width="200px">Aside</wje-aside>
            <wje-container vertical>
              <wje-main>Main</wje-main>
              <wje-footer>Footer</wje-footer>
            </wje-container>
          </wje-container>
        </wje-container>
        
        <wje-container>
          <wje-aside width="200px">Aside</wje-aside>
          <wje-container vertical>
            <wje-header>Header</wje-header>
            <wje-main>Main</wje-main>
          </wje-container>
        </wje-container>
        
        <wje-container>
          <wje-aside width="200px">Aside</wje-aside>
          <wje-container vertical>
            
            <wje-header>Header</wje-header>
            <wje-container>
              <wje-aside width="200px">Aside</wje-aside>
              <wje-aside width="200px">Aside</wje-aside>
              <wje-main>Main</wje-main>
              
            </wje-container>
            
            <wje-footer>Footer</wje-footer>
          </wje-container>
        </wje-container>
        
        <style>
          .content {
            display: block; 
            width: 100%; 
            margin: auto 3rem;
          }
          
          .content wje-header, .content wje-footer {
            background-color: #B3C0D1;
            color: #333;
            text-align: center;
            line-height: 60px;
          }
          
          .content wje-aside {
            background-color: #D3DCE6;
            color: #333;
            text-align: center;
            line-height: 200px;
            width: 60px;
          }
          
          .content wje-main {
            background-color: #E9EEF3;
            color: #333;
            text-align: center;
          }
          
          /* Margin na spodok prveho containeru */
          .content > wje-container {
            margin-bottom: 40px;
          }
          
          .content wje-container:nth-child(5) wje-aside,
          .content wje-container:nth-child(6) wje-aside {
            line-height: 260px;
          }
          
          .content wje-container:nth-child(7) wje-aside {
            line-height: 320px;
          }
        </style>
      </div>
    </div>
  </div>`;

export default class DemoLayout extends WJElement {
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

customElements.get('demo-layout') || window.customElements.define('demo-layout', DemoLayout);
