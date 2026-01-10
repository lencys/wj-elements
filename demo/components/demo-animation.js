import WJElement from '../../dist/wje-element.js';

const template = document.createElement('template');

template.innerHTML = `
  <style>
    .description {
      margin: 0 0 .5rem;
      max-width: 72ch;
      opacity: .8;
    }
  </style>
  <h1>Animation</h1>
  <div class="container">

    <!-- BASIC -->

    <h3>Basic</h3>
    <p class="description">
      Základná ukážka komponentu <code>&lt;wje-animation&gt;</code> s riadením animácie cez atribúty
      <code>name</code>, <code>delay</code> a <code>duration</code>. JavaScript v <code>afterDraw()</code>
      dynamicky načítava dostupné animácie pomocou <code>getAnimationsArray()</code>, plní nimi
      <code>&lt;wje-select&gt;</code> a umožňuje ich prepínať za behu. Tlačidlá demonštrujú
      imperatívne ovládanie animácie cez metódy <code>play()</code> a <code>cancel()</code>.
    </p>
    <div class="playground">
      <div class="content" style="flex-direction: column;">
      
        <wje-animation name="heartBeat" delay="1000" duration="1000">
          <wje-avatar>
            <wje-img src="/assets/img/avatar.svg"></wje-img>
          </wje-avatar>
        </wje-animation>
        
        <div style="margin-top: 1rem">
          <wje-button id="stop">Stop</wje-button>
          <wje-button id="play">Play</wje-button>
        </div>
        
        <wje-select placeholder="Select options" variant="standard" max-options="1" variant="standard" max-height="200px"></wje-select>
      </div>
    </div>
  </div>`;

export default class DemoAnimation extends WJElement {
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

  beforeRouteEnter(transition) {
    this.breadcrumbs = transition.breadcrumbs;
  }

  async afterDraw() {
    // let keyframes = await fetchAndParseCSS();
    const animationElement = this.querySelector('wje-animation');
    const select = this.querySelector('wje-select');
    let keyframes = await animationElement.getAnimationsArray();
    keyframes.forEach((obj) => {
      const option = Object.assign(document.createElement('wje-option'), {
        text: obj.name,
        value: obj.name,
        label: obj.name,
      });
      select.appendChild(option);
    });

    select.addEventListener('wje-option:change', (e) => {
      animationElement.setAttribute('name', e.detail.value);
      animationElement.refresh();
    });

    this.querySelector('#stop').addEventListener('click', (e) => {
      animationElement.cancel();
    });

    this.querySelector('#play').addEventListener('click', (e) => {
      animationElement.play();
    });
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-animation') || window.customElements.define('demo-animation', DemoAnimation);
