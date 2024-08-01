import WJElement from "../../dist/wje-element.js";
// import CodeSnippet from "./snippet/code-snippet-builder.js";

const template = document.createElement("template");

template.innerHTML = `<h1>Orgchart</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content" style="width: auto;">
        <wje-orgchart>
          <wje-orgchart-item>
            Parent
            <wje-orgchart slot="child">
            <wje-orgchart-item>
              Child
              <wje-orgchart slot="child">
                <wje-orgchart-item>
                  A
                  <wje-orgchart slot="child">
                    <wje-orgchart-item>A1</wje-orgchart-item>
                    <wje-orgchart-item>A2</wje-orgchart-item>
                  </wje-orgchart>
                </wje-orgchart-item>
                <wje-orgchart-item>
                  B
                  <wje-orgchart slot="child">
                    <wje-orgchart-item>B1</wje-orgchart-item>
                    <wje-orgchart-item>B2</wje-orgchart-item>
                  </wje-orgchart>
                </wje-orgchart-item>
               
              </wje-orgchart>
            </wje-orgchart-item>
          </wje-orgchart>
          </wje-orgchart-item>
        </wje-orgchart>
      </div>
    </div>
    
    <!-- GROUP -->

    <h2>Group</h2>
    <div class="playground">
      <div class="content" style="width: auto;">
        <wje-orgchart>
          <wje-orgchart-item>
          Parent
          <wje-orgchart slot="child">
            <wje-orgchart-item>
              Child
              <wje-orgchart slot="child">
                <wje-orgchart-item>
                  A
                  <wje-orgchart slot="child">
                    <wje-orgchart-item>A1</wje-orgchart-item>
                    <wje-orgchart-item>A2</wje-orgchart-item>
                  </wje-orgchart>
                </wje-orgchart-item>
                <wje-orgchart-item>
                  B
                  <wje-orgchart slot="child">
                    <wje-orgchart-group>
                      <wje-orgchart-item>B1</wje-orgchart-item>
                      <wje-orgchart-item>B2</wje-orgchart-item>
                    </wje-orgchart-group>
                    <wje-orgchart-item>
                      B3
                      <wje-orgchart slot="child">
                        <wje-orgchart-item>
                          B3-1
                          <wje-orgchart slot="child">
                            <wje-orgchart-group>
                              <wje-orgchart-item>B3-1-1</wje-orgchart-item>
                              <wje-orgchart-item>B3-1-2</wje-orgchart-item>
                            </wje-orgchart-group>
                          </wje-orgchart>
                        </wje-orgchart-item>
                        <wje-orgchart-item>B3-2</wje-orgchart-item>
                      </wje-orgchart>
                    </wje-orgchart-item>
                  </wje-orgchart>
                </wje-orgchart-item>
               
              </wje-orgchart>
            </wje-orgchart-item>
          </wje-orgchart>
        </wje-orgchart-item>
        </wje-orgchart>
      </div>
    </div>
    
    <!-- LINE -->

    <h2>Line</h2>
    <div class="playground">
      <div class="content" style="width: auto;">
        <wje-orgchart>
          <wje-orgchart-item>
          Parent
          <wje-orgchart slot="child">
            <wje-orgchart-item>
              Child
              <wje-orgchart slot="child">
                <wje-orgchart-item>
                  A
                  <wje-orgchart slot="child">
                    <wje-orgchart-group title="Team">
                      <wje-orgchart-item>A1</wje-orgchart-item>
                      <wje-orgchart-item>A2</wje-orgchart-item>
                      <wje-orgchart-item>A3</wje-orgchart-item>
                      <wje-orgchart-item>A4</wje-orgchart-item>
                      <wje-orgchart-item>A5</wje-orgchart-item>
                      <wje-orgchart-item>A6</wje-orgchart-item>
                    </wje-orgchart-group>
                  </wje-orgchart>
                </wje-orgchart-item>
              </wje-orgchart>
            </wje-orgchart-item>
          </wje-orgchart>
        </wje-orgchart-item>
        </wje-orgchart>
      </div>
    </div>
    
    <!-- CONTROLS -->

    <h2>Controls</h2>
    <div class="playground" style="padding: 0;">
      <div class="content" style="width: 100%; height: calc(100% -50px); flex-direction: column;">
          <div class="orgchart-container">
              <div class="orgchart">
                  <wje-orgchart>
                      <wje-orgchart-item id="parent">
                        Parent
                        <wje-orgchart slot="child">
                          <wje-orgchart-item id="child">
                            Child
                            <wje-orgchart slot="child">
                              <wje-orgchart-item id="a">
                                A
                                <wje-orgchart slot="child">
                                  <wje-orgchart-item id="a1">A1</wje-orgchart-item>
                                  <wje-orgchart-item id="a2">A2</wje-orgchart-item>
                                  <wje-orgchart-item id="a3">A3</wje-orgchart-item>
                                </wje-orgchart>
                              </wje-orgchart-item>
                              <wje-orgchart-item id="b">
                                B
                                <wje-orgchart slot="child">
                                  <wje-orgchart-item id="b1">B1</wje-orgchart-item>
                                  <wje-orgchart-item id="b2">B2</wje-orgchart-item>
                                  <wje-orgchart-item id="b3">B3</wje-orgchart-item>
                                </wje-orgchart>
                              </wje-orgchart-item>
                              <wje-orgchart-item id="c">
                                C
                                <wje-orgchart slot="child">
                                  <wje-orgchart-item id="c1">
                                    C1
                                    <wje-orgchart slot="child">
                                      <wje-orgchart-group>
                                        <wje-orgchart-item id="c1-1">C1-1</wje-orgchart-item>
                                        <wje-orgchart-item id="c1-2">C1-2</wje-orgchart-item>
                                        <wje-orgchart-item id="c1-3">C1-3</wje-orgchart-item>
                                      </wje-orgchart-group>
                                    </wje-orgchart>
                                  </wje-orgchart-item>
                                  <wje-orgchart-item id="c2">C2</wje-orgchart-item>
                                  <wje-orgchart-item id="c3">C3</wje-orgchart-item>
                                </wje-orgchart>
                              </wje-orgchart-item>
                            </wje-orgchart>
                          </wje-orgchart-item>
                        </wje-orgchart>
                      </wje-orgchart-item>
                  </wje-orgchart>
              </div>
          </div>
          <div class="controls">
<!--              <input type="text" id="searchInput" placeholder="Search by ID">-->
<!--              <wje-button id="search">Search</wje-button>-->
              
              <wje-input variant="standard" id="search-input">
                <wje-button variant="link" slot="end" id="search"><wje-icon name="search"></wje-icon></wje-button>
              </wje-input>
              <wje-button fill="link" id="zoomOut" only-icon round><wje-icon name="zoom-out"></wje-icon></wje-button>
              <wje-button fill="link" id="zoomIn" only-icon round><wje-icon name="zoom-in"></wje-icon></wje-button>
              <wje-button fill="link" id="center" only-icon round><wje-icon name="focus-centered"></wje-icon></wje-button>
              <wje-button id="reset" color="danger">Reset</wje-button>
          </div>
          <style>
              .orgchart-container {
                  width: 100%;
                  height: 300px;
                  overflow: hidden;
                  position: relative;
                  border-bottom: 1px solid var(--wje-border-color);
                  cursor: grab;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  user-select: none;
              }
      
              .orgchart {
                  position: absolute;
                  transform-origin: top left;
              }
              
              .controls {
                  display: flex;
                  align-items: center;
              }
              
              #search-input {
                  --wje-input-slot-padding-inline: 0 !important;
                  margin: 0;
              }
              
              #search-input wje-button {
                  --wje-button-border-width: 0 !important;
                  --wje-button-border-radius: var(--wje-border-radius-large) !important;
                  --wje-color-base: #000000 !important;
                  margin: 0;
              }
          </style>
      </div>
    </div>
<!--    <div class="html-snippet"></div>-->
  </div>`;

export default class DemoOrgchart extends WJElement {
  constructor() {
    super(template);
  }

  afterDraw(context, store2, params) {
    // const codeSnippet = new CodeSnippet();
    const orgchartContainer = document.querySelector('.orgchart-container');
    const orgchart = document.querySelector('.orgchart');
    let isDragging = false;
    let startX, startY, startLeft, startTop;
    let scale = 1;

    const zoomSensitivity = 0.05; // Less sensitive zoom step

    const centerOrgChart = () => {
      const containerRect = orgchartContainer.getBoundingClientRect();
      const orgchartRect = orgchart.getBoundingClientRect();
      orgchart.style.left = `${(containerRect.width - orgchartRect.width) / 2}px`;
      orgchart.style.top = `${(containerRect.height - orgchartRect.height) / 2}px`;
    };

    const isCursorOnCard = (event) => {
      const path = event.composedPath();
      return path.some(element => element.nodeName === 'WJE-CARD');
    };

    const onMousedown = (e) => {
      if (isCursorOnCard(e)) return;
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      startLeft = orgchart.offsetLeft;
      startTop = orgchart.offsetTop;
      orgchartContainer.style.cursor = 'grabbing';
      e.preventDefault(); // Prevent text selection
    };

    const onMousemove = (e) => {
      if (!isDragging) {
        orgchartContainer.style.cursor = isCursorOnCard(e) ? 'default' : 'grab';
        return;
      }
      e.preventDefault();
      const x = e.clientX - startX;
      const y = e.clientY - startY;
      orgchart.style.left = `${startLeft + x}px`;
      orgchart.style.top = `${startTop + y}px`;
    };

    const onMouseup = () => {
      isDragging = false;
      orgchartContainer.style.cursor = 'grab';
    };

    const onWheel = (e) => {
      e.preventDefault();
      scale += e.deltaY < 0 ? zoomSensitivity : -zoomSensitivity;
      scale = Math.max(0.1, scale);
      orgchart.style.transform = `scale(${scale})`;
      centerOrgChart(); // Re-center after zoom
    };

    const zoomIn = () => {
      scale += 0.1;
      orgchart.style.transform = `scale(${scale})`;
      centerOrgChart(); // Re-center after zoom
    };

    const zoomOut = () => {
      scale = Math.max(0.1, scale - 0.1);
      orgchart.style.transform = `scale(${scale})`;
      centerOrgChart(); // Re-center after zoom
    };

    const resetZoom = () => {
      scale = 1;
      orgchart.style.transform = `scale(${scale})`;
      centerOrgChart();
    };

    const searchNode = () => {
      const id = document.getElementById('search-input').value.trim();
      const node = document.getElementById(id);
      if (node) {
        const highlighted = document.querySelector('.highlight');
        if (highlighted) {
          highlighted.classList.remove('highlight');
        }
        node.classList.add('highlight');
        centerNode(node);
      } else {
        alert(`Node with ID ${id} not found.`);
      }
    };

    const centerNode = (node) => {
      const nodeRect = node.getBoundingClientRect();
      const containerRect = orgchartContainer.getBoundingClientRect();
      const orgchartRect = orgchart.getBoundingClientRect();

      const offsetX = (containerRect.width / 2) - (nodeRect.width / 2);
      const offsetY = (containerRect.height / 2) - (nodeRect.height / 2);
      const newLeft = containerRect.left - nodeRect.left + offsetX + (orgchartRect.left - containerRect.left);
      const newTop = containerRect.top - nodeRect.top + offsetY + (orgchartRect.top - containerRect.top);

      orgchart.style.left = `${newLeft}px`;
      orgchart.style.top = `${newTop}px`;
    };

    document.getElementById('zoomIn').addEventListener('click', zoomIn);
    document.getElementById('zoomOut').addEventListener('click', zoomOut);
    document.getElementById('center').addEventListener('click', centerOrgChart);
    document.getElementById('reset').addEventListener('click', resetZoom);
    document.getElementById('search').addEventListener('click', searchNode);

    orgchartContainer.addEventListener('mousedown', onMousedown);
    orgchartContainer.addEventListener('mousemove', onMousemove);
    document.addEventListener('mouseup', onMouseup);
    orgchartContainer.addEventListener('wheel', onWheel);

    window.addEventListener('resize', centerOrgChart);

    // Initial centering
    centerOrgChart();
  }
}

let __esModule = "true";
export { __esModule };

customElements.get("demo-orgchart") || window.customElements.define("demo-orgchart", DemoOrgchart);
    