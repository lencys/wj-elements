import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `<h1>Icons</h1>
  <div class="container">

    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wje-icon library="default" name="check" size="4x-large"></wje-icon>
      </div>
    </div>
    
<!--    &lt;!&ndash; STROKE &ndash;&gt;-->

<!--    <h2>Stroke</h2>-->
<!--    <div class="playground">-->
<!--      <div class="content">-->
<!--        <wje-icon name="check" size="4x-large" stroke="1"></wje-icon>-->
<!--        <wje-icon name="check" size="4x-large" stroke="1.25"></wje-icon>-->
<!--        <wje-icon name="check" size="4x-large" stroke="1.5"></wje-icon>-->
<!--        <wje-icon name="check" size="4x-large" stroke="1.75"></wje-icon>-->
<!--        <wje-icon name="check" size="4x-large" stroke="2"></wje-icon>-->
<!--      </div>-->
<!--    </div>-->

<!--    &lt;!&ndash; SIZE &ndash;&gt;-->

<!--    <h2>Size</h2>-->
<!--    <div class="playground">-->
<!--      <div class="content">-->
<!--        <wje-icon name="check" size="x-small"></wje-icon>-->
<!--        <wje-icon name="check" size="small"></wje-icon>-->
<!--        <wje-icon name="check"></wje-icon>-->
<!--        <wje-icon name="check" size="medium"></wje-icon>-->
<!--        <wje-icon name="check" size="large"></wje-icon>-->
<!--        <wje-icon name="check" size="x-large"></wje-icon>-->
<!--        <wje-icon name="check" size="2x-large"></wje-icon>-->
<!--        <wje-icon name="check" size="3x-large"></wje-icon>-->
<!--        <wje-icon name="check" size="4x-large"></wje-icon>-->
<!--      </div>-->
<!--    </div>-->

<!--    &lt;!&ndash; COLOR &ndash;&gt;-->
<!--    -->
<!--    <h2>Color</h2>-->
<!--    <div class="playground">-->
<!--      <div class="content">-->
<!--        <wje-icon name="check" size="x-large"></wje-icon>-->
<!--        <wje-icon name="check" size="x-large" color="primary"></wje-icon>-->
<!--        <wje-icon name="check" size="x-large" color="complete"></wje-icon>-->
<!--        <wje-icon name="check" size="x-large" color="success"></wje-icon>-->
<!--        <wje-icon name="check" size="x-large" color="warning"></wje-icon>-->
<!--        <wje-icon name="check" size="x-large" color="danger"></wje-icon>-->
<!--        <wje-icon name="check" size="x-large" color="info"></wje-icon>-->
<!--        <wje-icon name="check" size="x-large" color="menu"></wje-icon>-->
<!--      </div>-->
<!--    </div>-->

<!--    &lt;!&ndash; STYLE &ndash;&gt;-->

<!--    <h2>Style</h2>-->
<!--    <div class="playground">-->
<!--      <div class="content style">-->
<!--        <wje-icon name="alarm" size="large"></wje-icon>-->
<!--        <wje-icon name="alarm" size="large" filled></wje-icon>-->
<!--        <style>-->
<!--          .style wje-icon:not([filled])::part(svg) {-->
<!--            color: yellow;-->
<!--          }-->
<!--          .style wje-icon[filled]::part(svg) {-->
<!--            fill: red;-->
<!--          }-->
<!--        </style>-->
<!--      </div>-->
<!--    </div>-->
<!--    -->
<!--    &lt;!&ndash; CUSTOM &ndash;&gt;-->

<!--    <h2>Custom</h2>-->
<!--    <div class="playground">-->
<!--      <div class="content">-->
<!--        <wje-icon class="custom" name="check"></wje-icon>-->
<!--        <style>-->
<!--          wje-icon.custom {-->
<!--            &#45;&#45;wje-icon-size: 60px;-->
<!--            color: blue;-->
<!--          }-->
<!--          -->
<!--          wje-icon.custom::part(svg) {-->
<!--            &#45;&#45;wje-icon-stroke: 3;-->
<!--          }-->
<!--        </style>-->
<!--      </div>-->
<!--    </div>-->
  </div>`;

export default class DemoIcons extends WJElement {
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

customElements.get('demo-icons') || window.customElements.define('demo-icons', DemoIcons);
