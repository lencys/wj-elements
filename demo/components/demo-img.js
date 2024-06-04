import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "./snippet/code-snippet-builder.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Image</h1>
    <div class="container">

        <!-- BASIC -->

        <h3>Basic</h3>
        <div class="playground">
            <div class="content">
                <wje-img src="/demo/assets/img/img.png" alt="Niekedy máme pocit, že chodíme v kruhoch..."></wje-img>
            </div>
        </div>

        <!-- HTML Snippet -->

        <h3>HTML Snippet</h3>
        <div class="html-snippet"></div>

        

        <div class="content" style="display: none;">
            afterDraw() {
                const codeSnippet = new CodeSnippet();
                codeSnippet.generateSnippet(template, document);
            }
        </div>

        <h3>JS Snippet</h3>
        <div class="html-snippet"></div>
    </div>`;

export default class DemoImg extends WJElement {
    constructor() {
        super(template);
    }

    afterDraw() {
      const codeSnippet = new CodeSnippet();
      codeSnippet.generateSnippet(template, document);
    }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-img") || window.customElements.define("demo-img", DemoImg);