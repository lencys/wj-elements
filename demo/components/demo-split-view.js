import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Split View</h1>
  <div class="container">
    
    <style>
      wj-split-view {
        height: 300px;
        width: 100%;
        border-color: var(--wj-border-color); 
        border-style: solid;
        border-width: 1px;
      }
    </style>
        
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wj-split-view initial="250">
          <div slot="start">Start</div>
          <div slot="end">End</div>
        </wj-split-view>
      </div>
    </div>    
    
    <!-- VERTICAL -->

    <h2>Verical</h2>
    <div class="playground">
      <div class="content">
        <wj-split-view vertical>
          <div slot="start">Top</div>
          <div slot="end">Bottom</div>
        </wj-split-view>
      </div>
    </div>
    
    <!-- MIN/MAX -->

    <h2>Min/Max</h2>
    <div class="playground">
      <div class="content">
        <wj-split-view min="50" max="50" initial="75">
          <div slot="start">Start</div>
          <div slot="end">End</div>
        </wj-split-view>
      </div>
    </div> 
    
    <!-- DISABLED -->

    <h2>Disabled</h2>
    <div class="playground">
      <div class="content">
        <wj-split-view disabled>
          <div slot="start">Start</div>
          <div slot="end">End</div>
        </wj-split-view>
      </div>
    </div> 
    
    <!-- SPLIT -->

    <h2>Split</h2>
    <div class="playground">
      <div class="content">
        <wj-split-view initial="50">
          <div slot="start">Start</div>
          <div slot="end">
            <wj-split-view vertical id="custom-vertical-2">
              <div slot="start">Top</div>
              <div slot="end">Bottom</div>
            </wj-split-view>
          </div>
        </wj-split-view>
      </div>
    </div>
    
    <!-- CUSTOM -->

    <h2>Custom</h2>
    <div class="playground">
      <div class="content">
        <wj-split-view id="custom">
          <div slot="start">Start</div>
          <wj-icon name="grip-vertical" slot="divider"></wj-icon>
          <div slot="end">End</div>
        </wj-split-view>
        <style>
          #custom {
            --wj-split-view-divider-background: mediumvioletred !important;
            --wj-split-view-divider-size: 1px !important;
          }
          #custom wj-icon {
            position: absolute;
            background-color: mediumvioletred;
            padding: .5rem 0.25rem;
            color: white;
            border-radius: 4px;
          }
        </style>  
      </div>
    </div>
  </div>`;

export default class DemoSplitView extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-split-view") || window.customElements.define("demo-split-view", DemoSplitView);