import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `
  <h1>Card</h1>
  <div class="container">
    <!--  BASIC-->

    <h2>Default</h2>
    <p class="description">
      Základná karta <span class="tok tag">&lt;wje-card&gt;</span> s hlavičkou cez
      <span class="tok tag">&lt;wje-card-header&gt;</span> (obsahuje
      <span class="tok tag">&lt;wje-card-subtitle&gt;</span> a
      <span class="tok tag">&lt;wje-card-title&gt;</span>), a tela cez
      <span class="tok tag">&lt;wje-card-content&gt;</span>. Vhodné pre bežné informačné bloky.
    </p>
    <div class="playground">
      <div class="content">
        <wje-card>
          <wje-card-header>
            <wje-card-subtitle>Subtitle</wje-card-subtitle>
            <wje-card-title>Title</wje-card-title>
          </wje-card-header>
          <wje-card-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </wje-card-content>
        </wje-card>
      </div>
    </div>

    <!-- SEPARATOR -->

    <h2>Separator</h2>
    <p class="description">
      Aktivácia separátora pod hlavičkou pomocou boolean atribútu
      <span class="tok attr">separator</span>. Do
      <span class="tok tag">&lt;wje-card-controls&gt;</span> je možné umiestniť akcie ako
      <span class="tok tag">&lt;wje-tooltip&gt;</span> s ikonovým tlačidlom.
    </p>
    <div class="playground">
      <div class="content">
        <wje-card>
          <wje-card-header separator>
            <wje-card-subtitle>Subtitle</wje-card-subtitle>
            <wje-card-title>Title</wje-card-title>
            <wje-card-controls>
              <wje-tooltip label="Tooltip" placement="top">
                <wje-button fill="link" size="small">
                  <wje-icon name="arrows-diagonal" slot="icon-only"></wje-icon>
                </wje-button>
              </wje-tooltip>
             
            </wje-card-controls>
          </wje-card-header>
          <wje-card-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </wje-card-content>
        </wje-card>
      </div>
    </div>
    
    <!-- SEPARATOR -->

    <h2>Dropdown</h2>
    <p class="description">
      Karta s kontextovým menu pomocou
      <span class="tok tag">&lt;wje-dropdown&gt;</span>. Trigger je
      <span class="tok tag">&lt;wje-button&gt;</span> so šípkou (atribút
      <span class="tok attr">caret</span>) a jednotlivé položky sú vo
      <span class="tok tag">&lt;wje-menu&gt;</span> a
      <span class="tok tag">&lt;wje-menu-item&gt;</span> so slotom
      <span class="tok attr">start</span> pre ikony.
    </p>
    <div class="playground">
      <div class="content">
        <wje-card>
          <wje-card-header>
            <wje-card-subtitle>Subtitle</wje-card-subtitle>
            <wje-card-title>Title</wje-card-title>
            <wje-card-controls>
              <wje-dropdown label="Start" placement="bottom-start" offset="5">
                <wje-button size="large" slot="trigger" stop-propagation="true" caret>Large</wje-button>
                <wje-menu variant="context">
                  <wje-menu-item>
                    <wje-icon name="plane" slot="start"></wje-icon>
                    <wje-label>Menu item</wje-label>
                  </wje-menu-item>
                  <wje-menu-item>
                    <wje-icon name="book" slot="start"></wje-icon>
                    <wje-label>Menu item</wje-label>
                  </wje-menu-item>
                  <wje-menu-item>
                    <wje-icon name="music" slot="start"></wje-icon>
                    <wje-label>Menu item</wje-label>
                  </wje-menu-item>
                  <wje-menu-item>
                    <wje-icon name="video" slot="start"></wje-icon>
                    <wje-label>Menu item</wje-label>
                  </wje-menu-item>
                </wje-menu>
              </wje-dropdown>
            </wje-card-controls>
          </wje-card-header>
          <wje-card-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </wje-card-content>
        </wje-card>
      </div>
    </div>

    <!--  IMAGE-->

    <h2>Image</h2>
    <p class="description">
      Médium môže byť umiestnené priamo na začiatok karty ako natívny
      <span class="tok tag">&lt;img&gt;</span> element. Ostatná štruktúra zostáva rovnaká.
    </p>
    <div class="playground">
      <div class="content">
        <wje-card>
          <img
            alt="Lorem ipsum"
            src="https://ionicframework.com/docs/img/demos/card-media.png"
          />
          <wje-card-header>
            <wje-card-subtitle>Subtitle</wje-card-subtitle>
            <wje-card-title>Title</wje-card-title>
          </wje-card-header>
          <wje-card-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </wje-card-content>
        </wje-card>
      </div>
    </div>

    <!-- LIST CARD -->

    <h2>List card</h2>
    <p class="description">
      Karta s vnoreným zoznamom
      <span class="tok tag">&lt;wje-list&gt;</span>. Položky sú
      <span class="tok tag">&lt;wje-item&gt;</span> so slotom
      <span class="tok attr">start</span> pre
      <span class="tok tag">&lt;wje-thumbnail&gt;</span>. Hodí sa ako prehľad položiek,
      nastavení alebo kontaktov.
    </p>
    <div class="playground">
      <div class="content">
        <wje-card>
          <wje-card-header>
            <wje-card-subtitle>Subtitle</wje-card-subtitle>
            <wje-card-title>Title</wje-card-title>
          </wje-card-header>
          <wje-card-content>
            <wje-list>
              <wje-item>
                <wje-thumbnail slot="start">
                  <img
                    alt="Silhouette of mountains"
                    src="/assets/img/thumbnail.svg"
                  />
                </wje-thumbnail>
                <wje-label>Item</wje-label>
              </wje-item>

              <wje-item>
                <wje-thumbnail slot="start">
                  <img
                    alt="Silhouette of mountains"
                    src="/assets/img/thumbnail.svg"
                  />
                </wje-thumbnail>
                <wje-label>Item</wje-label>
              </wje-item>

              <wje-item>
                <wje-thumbnail slot="start">
                  <img
                    alt="Silhouette of mountains"
                    src="/assets/img/thumbnail.svg"
                  />
                </wje-thumbnail>
                <wje-label>Item</wje-label>
              </wje-item>

              <wje-item lines="none">
                <wje-thumbnail slot="start">
                  <img
                    alt="Silhouette of mountains"
                    src="/assets/img/thumbnail.svg"
                  />
                </wje-thumbnail>
                <wje-label>Item</wje-label>
              </wje-item>
            </wje-list>
          </wje-card-content>
        </wje-card>
      </div>
    </div>

    <!--COLORS-->

    <h2>Colors</h2>
    <p class="description">
      Farebné varianty karty pomocou atribútu
      <span class="tok attr">color</span>. Podporované sú napríklad:
      <span class="tok attr">primary</span>,
      <span class="tok attr">complete</span>,
      <span class="tok attr">success</span>,
      <span class="tok attr">warning</span>,
      <span class="tok attr">danger</span>,
      <span class="tok attr">info</span> a
      <span class="tok attr">menu</span>.
    </p>
    <div class="playground">
      <div class="content d-flex col-4">
        <style>
          .content {
            gap: 1rem;
          }
        </style>
        <wje-card color="primary">
          <wje-card-header>
            <wje-card-subtitle>Primary</wje-card-subtitle>
            <wje-card-title>Title</wje-card-title>
          </wje-card-header>
          <wje-card-content> Content </wje-card-content>
        </wje-card>

        <wje-card color="complete">
          <wje-card-header>
            <wje-card-subtitle>Complete</wje-card-subtitle>
            <wje-card-title>Title</wje-card-title>
          </wje-card-header>
          <wje-card-content> Content </wje-card-content>
        </wje-card>

        <wje-card color="success">
          <wje-card-header>
            <wje-card-subtitle>Success</wje-card-subtitle>
            <wje-card-title>Title</wje-card-title>
          </wje-card-header>
          <wje-card-content> Content </wje-card-content>
        </wje-card>

        <wje-card color="warning">
          <wje-card-header>
            <wje-card-subtitle>Warning</wje-card-subtitle>
            <wje-card-title>Title</wje-card-title>
          </wje-card-header>
          <wje-card-content> Content </wje-card-content>
        </wje-card>

        <wje-card color="danger">
          <wje-card-header>
            <wje-card-subtitle>Danger</wje-card-subtitle>
            <wje-card-title>Title</wje-card-title>
          </wje-card-header>
          <wje-card-content> Content </wje-card-content>
        </wje-card>

        <wje-card color="info">
          <wje-card-header>
            <wje-card-subtitle>Info</wje-card-subtitle>
            <wje-card-title>Title</wje-card-title>
          </wje-card-header>
          <wje-card-content> Content </wje-card-content>
        </wje-card>

        <wje-card color="menu">
          <wje-card-header>
            <wje-card-subtitle>Menu</wje-card-subtitle>
            <wje-card-title>Title</wje-card-title>
          </wje-card-header>
          <wje-card-content> Content </wje-card-content>
        </wje-card>
      </div>
    </div>

    <!--  Custom CSS-->

    <h2>CSS Custom Vlastnosti</h2>
    <p class="description">
      Štýlovanie jednotlivých častí karty pomocou CSS premenných alebo priamych
      deklarácií. Ukážka mení farby, hrúbku a farbu okraja, pozadie,
      veľkosť fontu a zaoblenie rohov pomocou selektora
      <span class="tok attr">#custom</span>.
    </p>
    <div class="playground">
      <div class="content">
        <wje-card id="custom">
          <wje-card-header>
            <wje-card-subtitle>Subtitle</wje-card-subtitle>
            <wje-card-title>Title</wje-card-title>
          </wje-card-header>
          <wje-card-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </wje-card-content>
        </wje-card>
        <style>
          #custom {
            color: #f0f;
            border-color: #000;
            border-width: 2px;
            background-color: #000!important;
            font-size: .8rem;
            border-radius: 0;
          }
        </style>
      </div>
    </div>

  </div>`;

export default class DemoCard extends WJElement {
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

customElements.get('demo-card') || window.customElements.define('demo-card', DemoCard);
