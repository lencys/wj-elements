import WJElement from "../../dist/wje-element.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Toast</h1>
  <div class="container">

    <!-- TOAST -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wje-button id="open-toast">Run</wje-button>

        <!-- SIMPLE -->

<!--        <wje-toast duration="5000" position="top-left" type="success" design="simple"></wje-toast>-->
<!--        <wje-toast duration="5000" position="top-right" type="warning" design="simple"></wje-toast>-->
<!--        <wje-toast duration="5000" position="bottom-left" type="danger" design="simple"></wje-toast>-->
<!--        <wje-toast duration="5000" position="bottom-right" type="info" design="simple"></wje-toast>-->

        <!-- BAR -->

<!--        <wje-toast duration="5000" position="top" type="success" design="bar"></wje-toast>-->
<!--        <wje-toast duration="5000" position="bottom" type="danger" design="bar"></wje-toast>-->

        <!-- FLIP -->

<!--        <wje-toast duration="5000" position="top-left" type="success" design="flip"></wje-toast>-->
<!--        <wje-toast duration="5000" position="top-right" type="warning" design="flip"></wje-toast>-->
<!--        <wje-toast duration="5000" position="bottom-left" type="danger" design="flip"></wje-toast>-->
<!--        <wje-toast duration="5000" position="bottom-right" type="info" design="flip"></wje-toast>-->

        <!-- CIRCLE -->

        <wje-toast duration="5000" position="top-left" type="success" design="circle"></wje-toast>
        <wje-toast duration="5000" position="top-right" type="warning" design="circle"></wje-toast>
        <wje-toast duration="5000" position="bottom-left" type="danger" design="circle"></wje-toast>
        <wje-toast duration="5000" position="bottom-right" type="info" design="circle"></wje-toast>

        <script>
          let toast = document.querySelector('wje-toast');
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