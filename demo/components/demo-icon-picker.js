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
<h1>Icon Picker</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wje-icon-picker></wje-icon-picker>
      </div>
    </div>

    <div class="html-snippet"></div>

    <h3>Javascript</h3>
    <pre>
      <code>
        getCategory(tags) {
          let category = [...new Set(tags.map(obj => obj.category))];
          return category;
        }
      </code>
    </pre>
    <pre>
      <code>
        async getTags() {
          const response = await fetch(this.getTagsUrl('/assets/tags.json'));
          return response.json();
        }
      </code>
    </pre>
    <pre>
      <code>
        searchIcon = (e) => {
          this.infiniteScroll.unScrollEvent(); // unbind scroll event
          this.infiniteScroll.setCustomData = (page = 0) => {
              let data = this.tags.filter(i => i.tags.includes(e.detail.value));
              let result = {
                  data: data,
                  page: page,
                  size: this.size,
                  totalPages: Math.round(data.length / this.size)
              }

              return result;
          };

          this.clearIconsContainer(); // clear icons container
          this.infiniteScroll.loadPages(); // load only
        }
      </code>
    </pre>
    <pre>
      <code>
        clearIconsContainer() {
          this.context.querySelector(".icon-items").innerHTML = "";
        }
      </code>
    </pre>
    <pre>
      <code>
        onClose = () => {
          this.popup.onHide();
        }
      </code>
    </pre>
  </div>`;

export default class DemoIconPicker extends WJElement {
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

customElements.get("demo-icon-picker") || window.customElements.define("demo-icon-picker", DemoIconPicker);