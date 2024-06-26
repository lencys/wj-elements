
import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "./snippet/code-snippet-builder.js";

const template = document.createElement('template');

template.innerHTML = /*html */`
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
            min-width: 60px;
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

          wje-card::part(native) {
            height: 100%;
          }

          wje-aside {
            display: flex;flex-direction: column;
          }
        </style>

<div class="container">
    <h2>Default</h2>
    <div class="playground">
        <div class="content">
            <wje-container>
                <wje-aside width="200px">Aside</wje-aside>
                <wje-container vertical="">
                    <wje-header>Header</wje-header>
                    <wje-container>
                        <wje-main>
                            <div style="display: flex; justify-content: center; align-items: center; height: 100%">
                                <wje-sliding-container trigger="test-resize-container-event-a" id="left-in-place" direction="right" max-width="100px" max-height="100%">
                                    <wje-card>
                                        <wje-card-header>
                                            <wje-card-subtitle>CONTENT Subtitle</wje-card-subtitle>
                                            <wje-card-title>CONTENT Title</wje-card-title>
                                        </wje-card-header>
                                        <wje-card-content>
                                        CONTENT Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </wje-card-content>
                                    </wje-card>
                                </wje-sliding-container>
                                <div style="width: 100%; height:100%;background: purple;color:white;">
                                    <wje-card>
                                        <wje-card-header>
                                            <wje-card-subtitle>Subtitle</wje-card-subtitle>
                                            <wje-card-title>Title</wje-card-title>
                                        </wje-card-header>
                                        <wje-card-content>
                                            <wje-button dialog="test-resize-container-event-right">Open 1</wje-button>
                                            <wje-button dialog="test-resize-container-event-right">Open 2</wje-button>
                                            <wje-button dialog="test-resize-container-event-a">Open 3</wje-button>
                                        </wje-card-content>
                                    </wje-card>
                                </div>
                                <wje-sliding-container trigger="test-resize-container-event-right" id="left-in-place" direction="left" max-width="100px" max-height="100%">
                                    <wje-card>
                                        <wje-card-header>
                                            <wje-card-subtitle>CONTENT Subtitle</wje-card-subtitle>
                                            <wje-card-title>CONTENT Title</wje-card-title>
                                        </wje-card-header>
                                        <wje-card-content>
                                        CONTENT Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </wje-card-content>
                                    </wje-card>
                                </wje-sliding-container>
                            </div>
                        </wje-main>
                        <wje-aside width="200px">
                            <div style="display:flex;">
                                <wje-sliding-container trigger="test-resize-container-event-left" id="right-in-place" variant="over" direction="left" max-width="100px" max-height="100%" has-opacity animation-easing="ease-in-out" animation-duration="200">
                                    <wje-card>
                                        <wje-card-header>
                                            <wje-card-subtitle>ASIDE Subtitle</wje-card-subtitle>
                                            <wje-card-title>ASIDE Title</wje-card-title>
                                        </wje-card-header>
                                        <wje-card-content>
                                        ASIDE Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </wje-card-content>
                                    </wje-card>
                                </wje-sliding-container>    
                                <div style="display:flex;flex-direction: column;">
                                    Aside
                                    <wje-button dialog="test-resize-container-event-left">Open 1</wje-button>
                                </div>
                            </div>
                        </wje-aside>
                    </wje-container>
                    <wje-footer>Footer</wje-footer>
                </wje-container>
            </wje-container>
        </div>
    </div>
    <div class="html-snippet"></div>`;

export default class DemoSlidingContainer extends WJElement {
    constructor() {
        super(template);
    }

    afterDraw(context, store2, params) {
        const codeSnippet = new CodeSnippet();
        codeSnippet.generateSnippet(template, this.context);
    }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-sliding-container") || window.customElements.define("demo-sliding-container", DemoSlidingContainer);
