import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `
  <h1>Dropdown</h1>
  <div class="container">

    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wj-container vertical>
          <wj-header>Header</wj-header>
          <wj-main>Main</wj-main>
        </wj-container>
        
        <wj-container vertical>
          <wj-header>Header</wj-header>
          <wj-main>Main</wj-main>
          <wj-footer>Footer</wj-footer>
        </wj-container>
        
        <wj-container>
          <wj-aside width="200px">Aside</wj-aside>
          <wj-main>Main</wj-main>
        </wj-container>
        
        <wj-container vertical>
          <wj-header>Header</wj-header>
          <wj-container>
            <wj-aside width="200px">Aside</wj-aside>
            <wj-main>Main</wj-main>
          </wj-container>
        </wj-container>
        
        <wj-container vertical>
          <wj-header>Header</wj-header>
          <wj-container>
            <wj-aside width="200px">Aside</wj-aside>
            <wj-container vertical>
              <wj-main>Main</wj-main>
              <wj-footer>Footer</wj-footer>
            </wj-container>
          </wj-container>
        </wj-container>
        
        <wj-container>
          <wj-aside width="200px">Aside</wj-aside>
          <wj-container vertical>
            <wj-header>Header</wj-header>
            <wj-main>Main</wj-main>
          </wj-container>
        </wj-container>
        
        <wj-container>
          <wj-aside width="200px">Aside</wj-aside>
          <wj-container vertical>
            
            <wj-header>Header</wj-header>
            <wj-container>
              <wj-aside width="200px">Aside</wj-aside>
              <wj-aside width="200px">Aside</wj-aside>
              <wj-main>Main</wj-main>
              
            </wj-container>
            
            <wj-footer>Footer</wj-footer>
          </wj-container>
        </wj-container>
        
        <style>
          .content {
            display: block; 
            width: 100%; 
            margin: auto 3rem;
          }
          
          .content wj-header, .content wj-footer {
            background-color: #B3C0D1;
            color: #333;
            text-align: center;
            line-height: 60px;
          }
          
          .content wj-aside {
            background-color: #D3DCE6;
            color: #333;
            text-align: center;
            line-height: 200px;
            width: 60px;
          }
          
          .content wj-main {
            background-color: #E9EEF3;
            color: #333;
            text-align: center;
          }
          
          /* Margin na spodok prveho containeru */
          .content > wj-container {
            margin-bottom: 40px;
          }
          
          .content wj-container:nth-child(5) wj-aside,
          .content wj-container:nth-child(6) wj-aside {
            line-height: 260px;
          }
          
          .content wj-container:nth-child(7) wj-aside {
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