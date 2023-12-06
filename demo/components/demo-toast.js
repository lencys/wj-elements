import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Toast</h1>
  <div class="container">

    <!-- TOAST -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wj-button id="open-toast">Run</wj-button>

        <!-- SIMPLE -->

<!--        <wj-toast duration="5000" position="top-left" type="success" design="simple"></wj-toast>-->
<!--        <wj-toast duration="5000" position="top-right" type="warning" design="simple"></wj-toast>-->
<!--        <wj-toast duration="5000" position="bottom-left" type="danger" design="simple"></wj-toast>-->
<!--        <wj-toast duration="5000" position="bottom-right" type="info" design="simple"></wj-toast>-->

        <!-- BAR -->

<!--        <wj-toast duration="5000" position="top" type="success" design="bar"></wj-toast>-->
<!--        <wj-toast duration="5000" position="bottom" type="danger" design="bar"></wj-toast>-->

        <!-- FLIP -->

<!--        <wj-toast duration="5000" position="top-left" type="success" design="flip"></wj-toast>-->
<!--        <wj-toast duration="5000" position="top-right" type="warning" design="flip"></wj-toast>-->
<!--        <wj-toast duration="5000" position="bottom-left" type="danger" design="flip"></wj-toast>-->
<!--        <wj-toast duration="5000" position="bottom-right" type="info" design="flip"></wj-toast>-->

        <!-- CIRCLE -->

        <wj-toast duration="5000" position="top-left" type="success" design="circle"></wj-toast>
        <wj-toast duration="5000" position="top-right" type="warning" design="circle"></wj-toast>
        <wj-toast duration="5000" position="bottom-left" type="danger" design="circle"></wj-toast>
        <wj-toast duration="5000" position="bottom-right" type="info" design="circle"></wj-toast>

        <script>
          let toast = document.querySelector('wj-toast');
          toast.addEventListener('didDismiss', () => {
            toast.isOpen = false;
          });
        </script>
      </div>
    </div>
  </div>`;

export default class DemoToast extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-toast") || window.customElements.define("demo-toast", DemoToast);