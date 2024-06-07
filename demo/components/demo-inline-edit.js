import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "./snippet/code-snippet-builder.js";

const template = document.createElement('template');

template.innerHTML = `
<style>
    pre {
      overflow-x: auto;
      word-wrap: break-word;
      white-space: pre-wrap;
      padding: 10px;
      border: 1px solid hsla(240, 6%, 90%, 1);
      border-radius: 4px;
      background: #f9f9f9;
      max-width: 100%;
      font-size: 1em;
      line-height: 1.7rem;
      position: relative;
    }

    code {
      font-family: monospace;
      padding: 2px 4px;
      background: #f9f9f9;
      border-radius: 4px;
    }
  </style>
<h1>Inline edit</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Default</h2>
    <div class="playground">
      <div class="content">
        <wje-inline-edit>Tralala</wje-inline-edit>
      </div>
    </div>

    <div class="html-snippet"></div>

    <h3>Javascript</h3>
    <pre>
      <code>
        inputElement(){
            let input = document.createElement("input");
            input.type = "text";
            input.placeholder = this.title;
            input.value = this.title;
            input.classList.add("form-control", "input-sm");

            return input;
        }

        save(data){
            return fetch(this.endpoint, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: data
            }).then(res =>{
                if(res.ok){
                    return res.json();
                } else {
                    return res.text;
                }
            }).then(res =>{
                this.title = res.data
                this.refresh();

                intranet.notification(res);

                this.dispatchResponse(res.data);
            }).catch(res => {
                intranet.notification(res);

                this.dispatchError(res);
            })
        }

        dispatchEdit(value){
            document.dispatchEvent(
                new CustomEvent("wje-inline-edit-save", {
                    bubbles: true,
                    detail: {
                        value: value,
                        element: this
                    }
                })
            );
        }

        dispatchResponse(value){
            document.dispatchEvent(
                new CustomEvent("wje-inline-edit-response", {
                    bubbles: true,
                    detail: {
                        value: value,
                        element: this
                    }
                })
            );
        }

        dispatchError(value){
            document.dispatchEvent(
                new CustomEvent("wje-inline-edit-error", {
                    bubbles: true,
                    detail: {
                        value: value,
                        element: this
                    }
                })
            );
        }
      </code>
    </pre>
  </div>`;

export default class DemoInlineEdit extends WJElement {
  constructor() {
    super(template);
  }

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(template, this.context);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-inline-edit") || window.customElements.define("demo-inline-edit", DemoInlineEdit);