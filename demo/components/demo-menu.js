import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `
  <h1>Menu</h1>
  <div class="container">

    <!-- BASIC -->

    <h2>Default</h2>
    <p class="description">
      Základné menu pomocou <span class="tok tag">&lt;wje-menu&gt;</span> a položiek
      <span class="tok tag">&lt;wje-menu-item&gt;</span>. Ikony sú v slotoch
      <span class="tok attr">start</span>/<span class="tok attr">end</span> cez
      <span class="tok tag">&lt;wje-icon&gt;</span> a deliace čiary cez
      <span class="tok tag">&lt;wje-divider&gt;</span> (tu s CSS premennou
      <span class="tok css">--wje-divider-spacing</span>).
      Submenu je ďalšie <span class="tok tag">&lt;wje-menu&gt;</span> vložené do slotu
      <span class="tok attr">submenu</span> na <span class="tok tag">&lt;wje-menu-item&gt;</span>.
      Položka môže dispatchovať vlastný event cez atribút <span class="tok attr">custom-event</span>
      a doplnkové parametre (napr. <span class="tok attr">custom-event-userId</span>).
    </p>
    <div class="playground">
      <div class="content" style="display: block;">
        <wje-menu active style="max-width: 200px;">
          <wje-menu-item>
            Menu item
            <wje-icon slot="start" name="home"></wje-icon>
          </wje-menu-item>
          <wje-menu-item>
            Menu item
            <wje-icon slot="start" name="check"></wje-icon>
            <wje-icon slot="end" name="heart"></wje-icon>
          </wje-menu-item>
          <wje-divider style="--wje-divider-spacing: .5rem;"></wje-divider>
          <wje-menu-item>
            Menu item
            <wje-icon slot="start" name="point"></wje-icon>
          </wje-menu-item>
          <wje-menu-item id="custom-event-menu-item" custom-event="single-spa-route" custom-event-userId="1" custom-event-departmentId="2">Menu item CE</wje-menu-item>
          <wje-menu-item>Menu item</wje-menu-item>
          <wje-divider style="--wje-divider-spacing: .5rem;"></wje-divider>
          <wje-menu-label>Next menu</wje-menu-label>
          <wje-menu-item>
            Menu item
            <wje-menu slot="submenu">
              <wje-menu-item>Menu item</wje-menu-item>
              <wje-menu-item>
                Menu item
                <wje-menu slot="submenu">
                  <wje-menu-item>Menu item</wje-menu-item>
                  <wje-menu-item>Menu item</wje-menu-item>
                  <wje-menu-item>Menu item</wje-menu-item>
                </wje-menu>
              </wje-menu-item>
              <wje-menu-item>Menu item</wje-menu-item>
            </wje-menu>
          </wje-menu-item>
          <wje-menu-item>
            Menu item
            <wje-menu slot="submenu">
              <wje-menu-item>Menu item</wje-menu-item>
              <wje-menu-item>
                Menu item
                <wje-menu slot="submenu">
                  <wje-menu-item>Menu item</wje-menu-item>
                  <wje-menu-item>Menu item</wje-menu-item>
                  <wje-menu-item>Menu item</wje-menu-item>
                </wje-menu>
              </wje-menu-item>
              <wje-menu-item>Menu item</wje-menu-item>
            </wje-menu>
          </wje-menu-item>
        </wje-menu>    
      </div>
    </div>
    
    <!-- ACTIVE CLASS -->

    <h2>Active Class</h2>
    <p class="description">
      Trieda aktívnej položky sa dá prispôsobiť atribútom <span class="tok attr">active-class</span>
      (napr. <span class="tok attr">open</span>). Vhodné, keď chceš zjednotiť naming s tvojimi
      CSS triedami alebo existujúcim router „active“ stavom.
    </p>
    <div class="playground">
      <div class="content" style="display: block;">
        <wje-menu active style="max-width: 200px;">
          <wje-menu-item active-class="open">
            Menu item
            <wje-icon slot="start" name="home"></wje-icon>
          </wje-menu-item>
          <wje-menu-item active-class="open">
            Menu item
            <wje-icon slot="start" name="check"></wje-icon>
            <wje-icon slot="end" name="heart"></wje-icon>
          </wje-menu-item>
          <wje-divider style="--wje-divider-spacing: .5rem;"></wje-divider>
          <wje-menu-item active-class="open">
            Menu item
            <wje-icon slot="start" name="point"></wje-icon>
          </wje-menu-item>
          <wje-menu-item id="custom-event-menu-item" custom-event="single-spa-route" custom-event-userId="1" custom-event-departmentId="2"  active-class="open">Menu item CE</wje-menu-item>
          <wje-menu-item active-class="open">Menu item</wje-menu-item>
          <wje-divider style="--wje-divider-spacing: .5rem;"></wje-divider>
          <wje-menu-label>Next menu</wje-menu-label>
          <wje-menu-item active-class="open">
            Menu item
            <wje-menu slot="submenu">
              <wje-menu-item active-class="open">Menu item</wje-menu-item>
              <wje-menu-item active-class="open">
                Menu item
                <wje-menu slot="submenu">
                  <wje-menu-item active-class="open">Menu item</wje-menu-item>
                  <wje-menu-item active-class="open">Menu item</wje-menu-item>
                  <wje-menu-item active-class="open">Menu item</wje-menu-item>
                </wje-menu>
              </wje-menu-item>
              <wje-menu-item active-class="open">Menu item</wje-menu-item>
            </wje-menu>
          </wje-menu-item>
          <wje-menu-item active-class="open">
            Menu item
            <wje-menu slot="submenu">
              <wje-menu-item active-class="open">Menu item</wje-menu-item>
              <wje-menu-item active-class="open">
                Menu item
                <wje-menu slot="submenu">
                  <wje-menu-item active-class="open">Menu item</wje-menu-item>
                  <wje-menu-item active-class="open">Menu item</wje-menu-item>
                  <wje-menu-item active-class="open">Menu item</wje-menu-item>
                </wje-menu>
              </wje-menu-item>
              <wje-menu-item active-class="open">Menu item</wje-menu-item>
            </wje-menu>
          </wje-menu-item>
        </wje-menu>    
      </div>
    </div>

    <!-- INSET -->

    <h2>Inset</h2>
    <p class="description">
      Prispôsobenie vnútorného odsadenia menu cez CSS custom property
      <span class="tok css">--wje-menu-padding-inline</span> aplikovanú priamo na
      <span class="tok tag">&lt;wje-menu&gt;</span>. Ukážka obsahuje aj stav položky
      <span class="tok attr">checked</span> a submenu bez ďalšieho JavaScriptu.
    </p>
    <div class="playground">
      <div class="content" style="display: block;">
        <wje-menu active style="max-width: 200px; --wje-menu-padding-inline: 1rem;">
          <wje-menu-item>
            Menu item
            <wje-icon slot="start" name="home"></wje-icon>
          </wje-menu-item>
          <wje-menu-item>
            Menu item
            <wje-icon slot="end" name="heart"></wje-icon>
          </wje-menu-item>
          <wje-divider style="--wje-divider-spacing: .5rem;"></wje-divider>
          <wje-menu-item>Menu item</wje-menu-item>
          <wje-menu-item checked>Menu item</wje-menu-item>
          <wje-menu-item>Menu item</wje-menu-item>
          <wje-divider style="--wje-divider-spacing: .5rem;"></wje-divider>
          <wje-menu-item>
            Menu item
            <wje-menu slot="submenu">
              <wje-menu-item>Menu item</wje-menu-item>
              <wje-menu-item>
                Menu item
                <wje-menu slot="submenu">
                  <wje-menu-item>Menu item</wje-menu-item>
                  <wje-menu-item>Menu item</wje-menu-item>
                  <wje-menu-item>Menu item</wje-menu-item>
                </wje-menu>
              </wje-menu-item>
              <wje-menu-item>Menu item</wje-menu-item>
            </wje-menu>
          </wje-menu-item>
          <wje-menu-item id="transformations">
            Menu item
            <wje-menu slot="submenu">
              <wje-menu-item>Menu item</wje-menu-item>
              <wje-menu-item>Menu item</wje-menu-item>
              <wje-menu-item>Menu item</wje-menu-item>
            </wje-menu>
          </wje-menu-item>
        </wje-menu>    
      </div>
    </div>
  </div>`;

export default class DemoMenu extends WJElement {
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

  openModalFn() {
  }

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(this.context);

    this.querySelectorAll('wje-menu-item').forEach((item) => {
      item.addEventListener('wje-menu-item:click', () => {
        console.log('click menu item');
      });
    });

    this.context.querySelector('#custom-event-menu-item').addEventListener('single-spa-route', (e) => {
      console.log('klikol som custom event', e.detail);
    });
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-menu') || window.customElements.define('demo-menu', DemoMenu);
