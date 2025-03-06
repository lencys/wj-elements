import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `<h1>Orgchart</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content" style="width: auto;">
        <wje-orgchart>
          <wje-orgchart-item boss>
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
    
    <!-- JSON -->

    <h2>JSON</h2>
    <div class="playground">
      <div class="content" style="width: auto;" id="json"></div>
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
        <wje-orgchart id="line">
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
  </div>`;

export default class DemoOrgchart extends WJElement {
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

  afterDraw(context, store2, params) {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(this.context);

    document.querySelector('#line wje-orgchart-group').addEventListener('wje-orgchart-group:click', (e) => {
      console.log('wje-orgchart-group', e.detail);
    });
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
      return path.some((element) => element.nodeName === 'WJE-CARD');
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

      const offsetX = containerRect.width / 2 - nodeRect.width / 2;
      const offsetY = containerRect.height / 2 - nodeRect.height / 2;
      const newLeft = containerRect.left - nodeRect.left + offsetX + (orgchartRect.left - containerRect.left);
      const newTop = containerRect.top - nodeRect.top + offsetY + (orgchartRect.top - containerRect.top);

      orgchart.style.left = `${newLeft}px`;
      orgchart.style.top = `${newTop}px`;
    };

    const orgData = {
      "company": {
        "id": "9bd82468-59b5-4bee-9b67-8e546608ed4f", "name": "Interway z wishu", "companies": [], "departments": [{
          "id": "66c482eb-179c-4d46-8ea2-cbc2200add8d",
          "name": "Vedenie spolocnosti",
          "departments": [{
            "id": "2f89186c-0a24-4f7f-b904-fb5a0a033bea",
            "name": "Department1",
            "departments": [],
            "users": [{
              "id": "15e9cacc-59fe-4562-9f33-512b3711bc6c",
              "fullName": "ING. Super Visor IDK.",
              "supervisor": true,
              "position": null,
              "type": "USER"
            }, {
              "id": "d65677a9-3acd-46f4-8ab4-c733846761cb",
              "fullName": "MGR. Jozef MAK",
              "supervisor": false,
              "position": null,
              "type": "USER"
            }, {
              "id": "b046ab0e-16e4-45e3-a44e-36a4416a1b03",
              "fullName": "MGR. Jozef MAK",
              "supervisor": false,
              "position": null,
              "type": "USER"
            }],
            "type": "DEPARTMENT"
          }, {
            "id": "9af85f54-6526-474d-94d6-6321e9025dd9",
            "name": "Department2",
            "departments": [],
            "users": [{
              "id": "aed5a3be-2831-4300-a486-c3fdf8945e76",
              "fullName": "Bc. Jerguš Lapin",
              "supervisor": false,
              "position": null,
              "type": "USER"
            }, {
              "id": "4d4bcdd7-c8ea-45a3-bbba-0bfa355c9eca",
              "fullName": "Bc. Adam Šangala",
              "supervisor": false,
              "position": null,
              "type": "USER"
            }, {
              "id": "627b89b1-4e83-49df-a2b6-b18e372f4046",
              "fullName": "ING. Super Visor++ IDK.",
              "supervisor": true,
              "position": null,
              "type": "USER"
            }],
            "type": "DEPARTMENT"
          }, {
            "id": "d2e6538d-edcf-43a0-84a1-12a4d89df0d9",
            "name": "Department3",
            "departments": [{
              "id": "de3a6eeb-4887-47be-a07b-8a0cbf8222c5",
              "name": "Department3.1",
              "departments": [],
              "users": [{
                "id": "19cfa2e3-e38e-49e3-a03e-55effd29e4b4",
                "fullName": "Anča Zmija",
                "supervisor": false,
                "position": null,
                "type": "USER"
              }, {
                "id": "fd4b1d49-9a88-48c1-807d-e9ffcfac03d2",
                "fullName": "MSc. Veducko Kapacita",
                "supervisor": true,
                "position": null,
                "type": "USER"
              }, {
                "id": "d25b66de-ba55-464a-9248-a22ab10373ff",
                "fullName": "Anča Užovka",
                "supervisor": false,
                "position": null,
                "type": "USER"
              }],
              "type": "DEPARTMENT"
            }],
            "users": [{
              "id": "1140a5a5-8d8c-4a4e-9704-4d3ea981809c",
              "fullName": "MSc. René Mládenec",
              "supervisor": false,
              "position": null,
              "type": "USER"
            }, {
              "id": "bb4045a8-c7af-419e-9fda-9fdaa4c44169",
              "fullName": "MSc. René Mládenec",
              "supervisor": false,
              "position": null,
              "type": "USER"
            }, {
              "id": "17bc9dd9-1c46-4cd0-ac56-c9ec2661c6c1",
              "fullName": "ING. Super++ Visor++ IDK.",
              "supervisor": true,
              "position": null,
              "type": "USER"
            }],
            "type": "DEPARTMENT"
          }],
          "users": [{
            "id": "7fdef90d-e753-40af-ba70-c7befa2272ba",
            "fullName": "ING. Big Boss IDK.",
            "supervisor": true,
            "position": null,
            "type": "USER"
          }],
          "type": "DEPARTMENT"
        }], "type": "COMPANY"
      }
    }

    const generateOrgChartHTML = (entity) => {
      if (!entity) return null;

      // Skontrolujeme, či oddelenie má supervisora
      let supervisorUser = null;

      if (entity.users && entity.users.length > 0) {
        supervisorUser = entity.users.find(user => user.supervisor === true);
      }

      // Hlavný uzol - zobrazenie názvu entity alebo supervisora
      const item = document.createElement("wje-orgchart-item");
      item.textContent = supervisorUser ? `👔 ${supervisorUser.fullName}` : entity.name;

      // Kontajner pre podriadené prvky (iba jeden slot na podriadené uzly)
      const childSlot = document.createElement("wje-orgchart");
      childSlot.setAttribute("slot", "child");

      // Spracovanie ostatných používateľov (ak existujú a nemajú flag `supervisor`)
      if (entity.users && entity.users.length > 0) {
        const nonSupervisors = entity.users.filter(user => !user.supervisor);

        if (nonSupervisors.length > 0) {
          const userGroup = document.createElement("wje-orgchart-group");

          nonSupervisors.forEach(user => {
            const userItem = document.createElement("wje-orgchart-item");
            userItem.textContent = "👤 " + user.fullName;
            userGroup.appendChild(userItem);
          });

          childSlot.appendChild(userGroup);
        }
      }

      // Spracovanie podriadených firiem
      if (entity.companies && entity.companies.length > 0) {
        entity.companies.forEach(company => {
          const companyItem = generateOrgChartHTML(company);
          if (companyItem) {
            childSlot.appendChild(companyItem);
          }
        });
      }

      // Spracovanie oddelení
      if (entity.departments && entity.departments.length > 0) {
        entity.departments.forEach(department => {
          const departmentItem = generateOrgChartHTML(department);
          if (departmentItem) {
            childSlot.appendChild(departmentItem);
          }
        });
      }

      // Pripojenie slotu pre podriadené prvky
      if (childSlot.children.length > 0) {
        item.appendChild(childSlot);
      }

      return item;
    }

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

    // const orgChartHTML = generateOrgChartHTML(orgData.company);
    // console.log(orgChartHTML.outerHTML);
    // this.querySelector('#json').innerHTML = orgChartHTML.outerHTML;

    const orgChartHTML = generateOrgChartHTML(orgData.company);
    if (orgChartHTML) {
      this.querySelector('#json').innerHTML = orgChartHTML.outerHTML;
      console.log("Organizačná štruktúra bola pridaná do DOM.");
    } else {
      console.error("❌ Niečo sa pokazilo, orgChartHTML je null.");
    }

    // Initial centering
    centerOrgChart();
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-orgchart') || window.customElements.define('demo-orgchart', DemoOrgchart);
