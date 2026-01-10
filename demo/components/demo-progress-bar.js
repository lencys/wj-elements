import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `<h1>Progress bar</h1>
  <div class="container">

    <!--  BASIC-->

    <h2>Default</h2>
    <p class="description">
      Základné použitie komponentu <span class="tok tag">&lt;wje-progress-bar&gt;</span>
      s hodnotou definovanou atribútom <span class="tok attr">progress</span> (0–100).
      Bez ďalších atribútov sa vykreslí lineárny progress bar.
    </p>
    <div class="playground">
      <div class="content">
        <wje-progress-bar progress="60"></wje-progress-bar>
      </div>
    </div>

    <!-- TYPE -->

    <h2>Type</h2>
    <p class="description">
      Prepnutie typu zobrazenia pomocou atribútu <span class="tok attr">type</span>.
      Default je lineárny bar, hodnota <span class="tok attr">type="circle"</span>
      vykreslí kruhový progress bar, ktorého veľkosť ovplyvňuje <span class="tok attr">radius</span>.
    </p>
    <div class="playground">
      <div class="content" style="flex-direction: column;">
        <wje-progress-bar progress="60"></wje-progress-bar>
        <wje-progress-bar progress="60" type="circle" radius="30"></wje-progress-bar>
      </div>
    </div>

    <!-- LINECAP -->

    <h2>Linecap</h2>
    <p class="description">
      Tvar zakončenia progressu pomocou atribútu <span class="tok attr">linecap</span>
      (napr. <span class="tok attr">round</span>). Platí pre lineárny aj kruhový variant.
    </p>
    <div class="playground">      
      <div class="content" style="flex-direction: column;">
        <wje-progress-bar progress="60" linecap="round"></wje-progress-bar>
        <wje-progress-bar progress="60" type="circle" radius="30" linecap="round"></wje-progress-bar>
      </div>
    </div>
    
    <!-- LABEL -->

    <h2>Label</h2>
    <p class="description">
      Vlastný obsah cez sloty <span class="tok attr">start</span> a
      <span class="tok attr">end</span>. Do progress baru je možné vložiť
      <span class="tok tag">&lt;wje-label&gt;</span> alebo iné elementy.
    </p>
    <div class="playground">
      <div class="content">
        <wje-progress-bar progress="60" type="circle" radius="30">
          <wje-label slot="start">Slot Start</wje-label>
          <wje-label slot="end">Slot End</wje-label>
        </wje-progress-bar>
      </div>
    </div>

    <!-- RADIUS-->

    <h2>Radius</h2>
    <p class="description">
      Polomer kruhového progress baru cez atribút <span class="tok attr">radius</span>.
      Používa sa iba pri <span class="tok attr">type="circle"</span>.
    </p>
    <div class="playground">
      <div class="content">
        <wje-progress-bar progress="60" radius="70" type="circle"></wje-progress-bar>
      </div>
    </div>

    <!--  STROKE-->

    <h2>Stroke</h2>
    <p class="description">
      Hrúbka čiary progressu pomocou atribútu <span class="tok attr">stroke</span>.
      Hodnota ovplyvňuje šírku línie pri lineárnom aj kruhovom zobrazení.
    </p>
    <div class="playground">
      <div class="content" style="flex-direction: column;">
        <wje-progress-bar progress="60" stroke="1"></wje-progress-bar>
        <wje-progress-bar progress="60" type="circle" radius="30" stroke="1"></wje-progress-bar>
      </div>
    </div>

    <!--  IMAGE-->

    <h2>Progress bar with image</h2>
    <p class="description">
      Kombinácia kruhového progress baru s obsahom vnútri:
      do komponentu je vložený <span class="tok tag">&lt;wje-thumbnail&gt;</span> s obrázkom.
      Lokálne CSS upravuje rozmery thumbnailu a text cez CSS premenné
      <span class="tok css">--wje-progress-bar-text-color</span>.
    </p>
    <div class="playground">
      <div class="content">
        <wje-progress-bar progress="60" radius="20" stroke="3" color="danger" type="circle" class="example">
          <wje-thumbnail circle>
            <img alt="Silhouette of mountains" src="/assets/img/thumbnail.svg" />
          </wje-thumbnail>
          <style>
            wje-thumbnail {
              --wje-border-radius: 50%;
              --wje-thumbnail-width: 38px;
              --wje-thumbnail-height: 38px;
            }
            
            wje-progress-bar.example {
              --wje-progress-bar-text-color: #fff !important;
              font-weight: bold;
            }
          </style>
        </wje-progress-bar>
      </div>
    </div>

    <!--  COLORS-->

    <h2>Colors</h2>
    <p class="description">
      Farebné varianty progress baru pomocou atribútu <span class="tok attr">color</span>
      (napr. <span class="tok attr">primary</span>, <span class="tok attr">success</span>,
      <span class="tok attr">warning</span>, <span class="tok attr">danger</span>, <span class="tok attr">info</span>).
      Platí pre lineárny aj kruhový typ.
    </p>
    <div class="playground">
      <div class="content" style="flex-direction: column;">
        <wje-progress-bar progress="60"></wje-progress-bar>
        <wje-progress-bar progress="60" type="circle" radius="30"></wje-progress-bar>
        <!-- PRIMARY -->
        <wje-progress-bar progress="60" color="primary"></wje-progress-bar>
        <wje-progress-bar progress="60" color="primary" type="circle" radius="30"></wje-progress-bar>
        <!-- SECONDARY -->
        <wje-progress-bar progress="60" color="complete"></wje-progress-bar>
        <wje-progress-bar progress="60" color="complete" type="circle" radius="30"></wje-progress-bar>
        <!-- SUCCESS -->
        <wje-progress-bar progress="60" color="success"></wje-progress-bar>
        <wje-progress-bar progress="60" color="success" type="circle" radius="30"></wje-progress-bar>
        <!-- WARNING -->
        <wje-progress-bar progress="60" color="warning"></wje-progress-bar>
        <wje-progress-bar progress="60" color="warning" type="circle" radius="30"></wje-progress-bar>
        <!-- DANGER -->
        <wje-progress-bar progress="60" color="danger"></wje-progress-bar>
        <wje-progress-bar progress="60" color="danger" type="circle" radius="30"></wje-progress-bar>
        <!-- INFO -->
        <wje-progress-bar progress="60" color="info"></wje-progress-bar>
        <wje-progress-bar progress="60" color="info" type="circle" radius="30"></wje-progress-bar>
      </div>
    </div>
  </div>`;

export default class DemoProgressBar extends WJElement {
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

    let currentNumber = 0;
    const totalTime = 20000; // Celkový čas v milisekundách (20s)
    const intervalTime = totalTime / 100; // Časový interval pre každé číslo

    this.interval = setInterval(() => {
      currentNumber++;

      this.querySelector('.example').setAttribute('progress', currentNumber);
      if (currentNumber >= 100) {
        clearInterval(this.interval);
      }
    }, intervalTime);
  }

  beforeDisconnect() {
    clearInterval(this.interval);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-progress-bar') || window.customElements.define('demo-progress-bar', DemoProgressBar);
