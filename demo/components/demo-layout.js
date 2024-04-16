import WJElement from "../../dist/wje-element.js";

const template = document.createElement('template');

template.innerHTML = `
  <h1>Dropdown</h1>
  <div class="container">

    <!--  BASIC-->

    <h2>Basic</h2>
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
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-layout") || window.customElements.define("demo-layout", DemoLayout);