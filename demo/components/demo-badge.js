import { WJElement } from "../../dist/wj-master.js";

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
        <wj-list>
          <wj-item>
            <wj-badge slot="start">11</wj-badge>
            <wj-label>Badge in start slot</wj-label>
          </wj-item>
          <wj-item>
            <wj-badge slot="end">22</wj-badge>
            <wj-label>Badge in end slot</wj-label>
          </wj-item>
        </wj-list>
      </div>
    </div>

    <!--  COLORS -->

    <h2>Colors</h2>
    <div class="playground">
      <div class="content">
        <wj-list>
          <wj-item>
            <wj-label>Default</wj-label>
            <wj-badge>22k</wj-badge>
          </wj-item>
          <wj-item>
            <wj-label>Followers</wj-label>
            <wj-badge color="primary">22k</wj-badge>
          </wj-item>
          <wj-item>
            <wj-label>Likes</wj-label>
            <wj-badge color="complete">118k</wj-badge>
          </wj-item>
          <wj-item>
            <wj-label>Completed</wj-label>
            <wj-badge color="success">34k</wj-badge>
          </wj-item>
          <wj-item>
            <wj-label>Stars</wj-label>
            <wj-badge color="warning">80</wj-badge>
          </wj-item>
          <wj-item>
            <wj-label>Warnings</wj-label>
            <wj-badge color="danger">70</wj-badge>
          </wj-item>
          <wj-item>
            <wj-label>Notifications</wj-label>
            <wj-badge color="info">1000</wj-badge>
          </wj-item>
          <wj-item>
            <wj-label>Notifications</wj-label>
            <wj-badge color="menu">1000</wj-badge>
          </wj-item>
        </wj-list>
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