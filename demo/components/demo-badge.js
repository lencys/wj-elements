import WJElement from "../../dist/wje-element.js";

const template = document.createElement('template');

template.innerHTML = `<style>
    .content {
      display: block;
    }
  </style>
  <h1>Badge</h1>
  <div class="container">

    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wje-list>
          <wje-item>
            <wje-badge slot="start">11</wje-badge>
            <wje-label>Badge in start slot</wje-label>
          </wje-item>
          <wje-item>
            <wje-badge slot="end">22</wje-badge>
            <wje-label>Badge in end slot</wje-label>
          </wje-item>
        </wje-list>
      </div>
    </div>

    <!--  COLORS -->

    <h2>Colors</h2>
    <div class="playground">
      <div class="content">
        <wje-list>
          <wje-item>
            <wje-label>Default</wje-label>
            <wje-badge>22k</wje-badge>
          </wje-item>
          <wje-item>
            <wje-label>Followers</wje-label>
            <wje-badge color="primary">22k</wje-badge>
          </wje-item>
          <wje-item>
            <wje-label>Likes</wje-label>
            <wje-badge color="complete">118k</wje-badge>
          </wje-item>
          <wje-item>
            <wje-label>Completed</wje-label>
            <wje-badge color="success">34k</wje-badge>
          </wje-item>
          <wje-item>
            <wje-label>Stars</wje-label>
            <wje-badge color="warning">80</wje-badge>
          </wje-item>
          <wje-item>
            <wje-label>Warnings</wje-label>
            <wje-badge color="danger">70</wje-badge>
          </wje-item>
          <wje-item>
            <wje-label>Notifications</wje-label>
            <wje-badge color="info">1000</wje-badge>
          </wje-item>
          <wje-item>
            <wje-label>Notifications</wje-label>
            <wje-badge color="menu">1000</wje-badge>
          </wje-item>
        </wje-list>
      </div>
    </div>
    
    <!--  BACUSTOMSIC-->

    <h2>Custom</h2>
    <div class="playground">
      <div class="content">
       <wje-badge slot="start" id="custom-badge">1</wje-badge>
       <style>
         #custom-badge {
            --wje-badge-padding-block-start: 8px !important;
            --wje-badge-padding-block-end: 8px !important;
            &::part(native) {
              background: red;
              color: white;
              border: 1px dashed blue;
            }
         }
       </style>
      </div>
    </div>
  </div>`;

export default class DemoBadge extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-badge") || window.customElements.define("demo-badge", DemoBadge);