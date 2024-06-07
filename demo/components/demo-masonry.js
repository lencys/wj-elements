import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "./snippet/code-snippet-builder.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Masonry</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground" style="padding-inline: 1rem;">
      <div class="content">
        <wje-masonry cols="2" class="example">
          <div style="height: 300px">1</div>
          <div style="height: 375px">2</div>
          <div style="height: 250px">3</div>
          <div style="height: 390px">4</div>
          <div style="height: 200px">5</div>
        </wje-masonry>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- MAXCOLWIDTH -->

    <h2>Max col width</h2>
    <div class="playground" style="padding-inline: 1rem;">
      <div class="content">
        <wje-masonry max-col-width="150">
          <wje-img src="https://picsum.photos/400/500?i=1"></wje-img>
          <wje-img src="https://picsum.photos/400/375?i=2"></wje-img>
          <wje-img src="https://picsum.photos/400/200?i=3"></wje-img>
          <wje-img src="https://picsum.photos/400?/400i=4"></wje-img>
          <wje-img src="https://picsum.photos/400/375?i=5"></wje-img>
          <wje-img src="https://picsum.photos/400/500?i=6"></wje-img>
          <wje-img src="https://picsum.photos/400/200?i=7"></wje-img>
        </wje-masonry>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- GAP -->

    <h2>Gap</h2>
    <div class="playground" style="padding-inline: 1rem;">
      <div class="content">
        <wje-masonry cols="2" gap="2" class="example" id="example-gap">
          <div style="height: 300px">1</div>
          <div style="height: 375px">2</div>
          <div style="height: 250px">3</div>
          <div style="height: 377px">4</div>
          <div style="height: 200px">5</div>
        </wje-masonry>
        <style>
          #example-gap div {
            color: var(--wje-color-white);
            background: var(--wje-color-danger);
          }
        </style>
      </div>
    </div>

    <div class="html-snippet"></div>

    <h3>Javascript</h3>
    <pre>
      <code>
        onSlotChange = () => {
          const $unsetElements = (this.unsetSlot.assignedNodes() || []).filter(node => node.nodeType === ELEMENT_NODE_TYPE);
          if ($unsetElements.length > 0) {
              this.layout();
          }
        }

        onResize = (entries) => {
            const { width } = entries != null && Array.isArray(entries) && entries.length > 0 ? entries[0].contentRect : { width: this.offsetWidth };
            const colCount = getColCount(width, this.cols, this.maxColWidth);

            if (colCount !== this.columns.length) {
                this.scheduleLayout();
            }
        }

        renderCols (colCount) {
            const columns = this.columns;

            if (columns.length === colCount) {
                return;
            }

            for (const column of columns) {
                column.parentNode && column.parentNode.removeChild(column);
            }

            for (let i = 0; i < colCount; i++) {
                const column = document.createElement("div");
                column.classList.add('column');

                const slot = document.createElement("slot");
                slot.setAttribute('name', i);

                column.appendChild(slot);

                this.context.appendChild(column);
            }

            this.style.setProperty(COL_COUNT_CSS_VAR_NAME, colCount);
        }
        
        scheduleLayout (ms = this.debounce) {
            debounce(this.layout, ms, this.debounceId);
        }

        layout = () => {
            if (this.currentRequestAnimationFrameCallback != null) {
                window.cancelAnimationFrame(this.currentRequestAnimationFrameCallback);
            }

            this.currentRequestAnimationFrameCallback = requestAnimationFrame(() => {
                const gap = this.gap;
                const $elements = Array.from(this.children).filter(node => node.nodeType === ELEMENT_NODE_TYPE);
                const colCount = getColCount(this.offsetWidth, this.cols, this.maxColWidth);
                const colHeights = Array(colCount).fill(0);
                const writes = [];

                for (const elem of $elements) {
                    const height = elem.getBoundingClientRect().height;
                    let smallestColIndex = findSmallestColIndex(colHeights);

                    colHeights[smallestColIndex] += height + +gap;

                    const newSlot = smallestColIndex;

                    if (elem.slot !== newSlot) {
                        writes.push(() => (elem.slot = newSlot));
                    }
                }

                for (const write of writes) {
                    write();
                }

                this.renderCols(colCount);
            });
        }
      </code>
    </pre>

  </div>
<style>
  .example div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: var(--wje-color-black);
    background: var(--wje-color-warning);
  }

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
`;

export default class DemoMasonry extends WJElement {
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

customElements.get("demo-masonry") || window.customElements.define("demo-masonry", DemoMasonry);