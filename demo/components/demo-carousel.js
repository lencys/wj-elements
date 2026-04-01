import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `
  <h1>Carousel</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <p class="description">
      Základná ukážka <span class="tok tag">&lt;wje-carousel&gt;</span> so zapnutou pagináciou (<span class="tok attr">pagination</span>),
      nekonečným cyklom (<span class="tok attr">loop</span>) a navigačnými šípkami (<span class="tok attr">navigation</span>).
      Každý slide je <span class="tok tag">&lt;wje-carousel-item&gt;</span> s obsahom (tu <span class="tok tag">&lt;wje-img&gt;</span>).
    </p>
    <div class="playground" style="padding-inline: 2rem;">
      <div class="content">
        <wje-carousel pagination loop navigation>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=1"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=2"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=3"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=4"></wje-img>
          </wje-carousel-item>
        </wje-carousel>
      </div>
    </div>

    <!-- CUSTOM BUTTON -->

    <h2>Custom Button</h2>
    <p class="description">
      Rovnaká konfigurácia ako <strong>Basic</strong>, ale navigačné šípky sú definované priamo v light DOMe
      cez sloty <span class="tok attr">slot="prev"</span> a <span class="tok attr">slot="next"</span>.
      <span class="tok tag">&lt;wje-carousel&gt;</span> automaticky použije tieto vlastné tlačidlá namiesto
      defaultných, pričom zachová plnú funkcionalitu navigácie
      (<span class="tok attr">navigation</span>).
      Tento prístup umožňuje úplnú kontrolu nad vzhľadom, ikonami a správaním navigačných prvkov bez potreby
      zásahu do vnútornej implementácie komponentu.
    </p>
    <div class="playground" style="padding-inline: 2rem;">
      <div class="content">
        <wje-carousel pagination navigation>
          <wje-button part="previous-button" fill="solid" slot="prev" class="prev"><wje-icon name="chevron-left" size="large"></wje-icon></wje-button>
          <wje-button part="next-button" fill="solid" slot="next" class="next"><wje-icon name="chevron-right" size="large"></wje-icon></wje-button>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=1"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=2"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=3"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=4"></wje-img>
          </wje-carousel-item>
        </wje-carousel>
      </div>
    </div>
    
    <!-- NO LOOP -->

    <h2>No Loop</h2>
    <p class="description">
      Rovnaká konfigurácia ako Basic, ale bez atribútu <span class="tok attr">loop</span> – carousel sa na konci nezacyklí a zastaví na poslednom slide.
      Paginácia (<span class="tok attr">pagination</span>) a navigácia (<span class="tok attr">navigation</span>) ostávajú aktívne.
    </p>
    <div class="playground" style="padding-inline: 2rem;">
      <div class="content">
        <wje-carousel pagination navigation>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=1"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=2"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=3"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=4"></wje-img>
          </wje-carousel-item>
        </wje-carousel>
      </div>
    </div>
    
    <!-- DIALOG -->

    <h2>Dialog</h2>
    <p class="description">
      Carousel vložený do <span class="tok tag">&lt;wje-dialog&gt;</span>. Otváranie dialógu je prepojené cez <span class="tok tag">&lt;wje-button&gt;</span> s atribútom
      <span class="tok attr">dialog="open-modal"</span> a <span class="tok attr">trigger="open-modal"</span>.
      V JavaScripte sa pri evente <span class="tok event">wje-dialog:opened</span> resetuje carousel na prvý slide cez
      <span class="tok method">goToSlide(0, "auto")</span>, aby sa vždy otvoril v konzistentnom stave.
    </p>
    <div class="playground" style="padding-inline: 2rem;">
      <div class="content">
        <wje-button dialog="open-modal">Open</wje-button>
        <wje-dialog trigger="open-modal" title="Title" size="large">
          <wje-carousel pagination loop>
            <wje-carousel-item>
              <wje-img src="https://picsum.photos/500/375?i=1"></wje-img>
            </wje-carousel-item>
            <wje-carousel-item>
              <wje-img src="https://picsum.photos/500/375?i=2"></wje-img>
            </wje-carousel-item>
            <wje-carousel-item>
              <wje-img src="https://picsum.photos/500/375?i=3"></wje-img>
            </wje-carousel-item>
            <wje-carousel-item>
              <wje-img src="https://picsum.photos/500/375?i=4"></wje-img>
            </wje-carousel-item>
          </wje-carousel>
        </wje-dialog>
      </div>
    </div>
    
    <!-- PAGINATION -->
    
    <h2>Pagination</h2>
    <p class="description">
      Ukážka samotnej paginácie cez boolean atribút <span class="tok attr">pagination</span> bez navigačných šípok a bez loopovania.
      Vhodné, keď chceš jednoduchý „pager“ indikátor bez ďalších ovládacích prvkov.
    </p>
    <div class="playground" style="padding-inline: 2rem;">
      <div class="content">
        <wje-carousel pagination>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=1"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=2"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=3"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=4"></wje-img>
          </wje-carousel-item>
        </wje-carousel>
      </div>
    </div>

    <!-- THUMBNAIL -->

    <h2>Thumbnail</h2>
    <p class="description">
      Náhľady (thumbnails) cez boolean atribút <span class="tok attr">thumbnails</span>, doplnené o <span class="tok attr">loop</span> a <span class="tok attr">navigation</span>.
      Tento variant pridá sekundárnu navigáciu s náhľadmi jednotlivých slide-ov.
    </p>
    <div class="playground" style="padding-inline: 2rem;">
      <div class="content">
        <wje-carousel thumbnails loop navigation>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=1"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=2"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=3"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=4"></wje-img>
          </wje-carousel-item>
        </wje-carousel>
      </div>
    </div>

    <!-- SPACING -->
    
    <h2>Spacing</h2>
    <p class="description">
      Prispôsobenie medzier medzi slide-ami cez CSS custom property <span class="tok css">--wje-spacing-inline</span> aplikovanú na carousel (<span class="tok attr">.example-spacing</span>).
      Bez potreby JavaScriptu – ide o čistý CSS override.
    </p>
    <div class="playground" style="padding-inline: 2rem;">
      <div class="content">
        <wje-carousel pagination loop navigation class="example-spacing">
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=1"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=2"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=3"></wje-img>
          </wje-carousel-item>
          <wje-carousel-item>
            <wje-img src="https://picsum.photos/500/375?i=4"></wje-img>
          </wje-carousel-item>
        </wje-carousel>
        <style>
          .example-spacing {
            --wje-spacing-inline: 3rem;
          }
        </style>
      </div>
    </div>

    <!-- FIVE PER PAGE -->

    <h2>Five Per Page</h2>
    <p class="description">
      Režim <span class="tok attr">slide-per-page="5"</span> zobrazuje na jednom viewporte presne päť sibling
      <span class="tok tag">&lt;wje-carousel-item&gt;</span> elementov. Šírka itemov sa počíta aj s gapom, takže
      päť kariet spolu vyplní celý carousel bez pretekania. Pri klasickom <span class="tok attr">loop</span> sa po
      poslednom plnom view (<code>6 7 8 9 10</code>) carousel vráti späť na začiatok.
    </p>
    <div class="playground" style="padding-inline: 2rem;">
      <div class="content">
        <wje-carousel pagination loop navigation slide-per-page="5" class="example-five-per-page">
          <wje-carousel-item><article class="demo-tile">1</article></wje-carousel-item>
          <wje-carousel-item><article class="demo-tile">2</article></wje-carousel-item>
          <wje-carousel-item><article class="demo-tile">3</article></wje-carousel-item>
          <wje-carousel-item><article class="demo-tile">4</article></wje-carousel-item>
          <wje-carousel-item><article class="demo-tile">5</article></wje-carousel-item>
          <wje-carousel-item><article class="demo-tile">6</article></wje-carousel-item>
          <wje-carousel-item><article class="demo-tile">7</article></wje-carousel-item>
          <wje-carousel-item><article class="demo-tile">8</article></wje-carousel-item>
          <wje-carousel-item><article class="demo-tile">9</article></wje-carousel-item>
          <wje-carousel-item><article class="demo-tile">10</article></wje-carousel-item>
        </wje-carousel>
        <style>
          .example-five-per-page {
            --wje-carousel-height: 180px;
            --wje-carousel-gap: 1rem;
          }

          .example-five-per-page .demo-tile {
            width: 100%;
            height: 100%;
            display: grid;
            place-items: center;
            border-radius: 0.75rem;
            background: linear-gradient(135deg, #1b4965, #4f86c6);
            color: #fff;
            font-size: 1.5rem;
            font-weight: 700;
          }
        </style>
      </div>
    </div>

    <!-- CONTINUOUS LOOP -->

    <h2>Continuous Loop</h2>
    <p class="description">
      Atribút <span class="tok attr">continuous-loop</span> rozšíri klasický <span class="tok attr">loop</span> o
      kontinuálny pás. Na hrane carouselu tak za <code>10</code> pokračujú <code>1 2 3 4</code>, takže
      viac-itemový carousel pôsobí ako nekonečná páska.
    </p>
    <div class="playground" style="padding-inline: 2rem;">
      <div class="content">
        <wje-carousel pagination loop continuous-loop navigation slide-per-page="5" class="example-five-per-page">
          <wje-carousel-item><article class="demo-tile">1</article></wje-carousel-item>
          <wje-carousel-item><article class="demo-tile">2</article></wje-carousel-item>
          <wje-carousel-item><article class="demo-tile">3</article></wje-carousel-item>
          <wje-carousel-item><article class="demo-tile">4</article></wje-carousel-item>
          <wje-carousel-item><article class="demo-tile">5</article></wje-carousel-item>
          <wje-carousel-item><article class="demo-tile">6</article></wje-carousel-item>
          <wje-carousel-item><article class="demo-tile">7</article></wje-carousel-item>
          <wje-carousel-item><article class="demo-tile">8</article></wje-carousel-item>
          <wje-carousel-item><article class="demo-tile">9</article></wje-carousel-item>
          <wje-carousel-item><article class="demo-tile">10</article></wje-carousel-item>
        </wje-carousel>
      </div>
    </div>

    <!-- SINGLE SLIDE LAYOUT -->

    <h2>Single Slide Layout</h2>
    <p class="description">
      Režim <span class="tok attr">slide-per-page="1"</span> ponechá jeden slide na stránku, ale obsah slide-u môže
      byť vlastný wrapper s viacerými kartami. Wrapper sa roztiahne na plnú šírku itemu bez potreby nastavovať
      fixnú šírku carouselu alebo pomocné width hacky v appke.
    </p>
    <div class="playground" style="padding-inline: 2rem;">
      <div class="content">
        <wje-carousel pagination navigation slide-per-page="1" class="example-single-layout">
          <wje-carousel-item>
            <div class="cards-grid">
              <article class="promo-card">1</article>
              <article class="promo-card">2</article>
              <article class="promo-card">3</article>
              <article class="promo-card">4</article>
              <article class="promo-card">5</article>
            </div>
          </wje-carousel-item>
          <wje-carousel-item>
            <div class="cards-grid">
              <article class="promo-card">6</article>
              <article class="promo-card">7</article>
              <article class="promo-card">8</article>
              <article class="promo-card">9</article>
              <article class="promo-card">10</article>
            </div>
          </wje-carousel-item>
        </wje-carousel>
        <style>
          .example-single-layout {
            --wje-carousel-height: 180px;
            --wje-carousel-gap: 1rem;
          }

          .example-single-layout .cards-grid {
            display: grid;
            grid-template-columns: repeat(5, minmax(0, 1fr));
            gap: 1rem;
            height: 100%;
          }

          .example-single-layout .promo-card {
            width: 100%;
            height: 100%;
            display: grid;
            place-items: center;
            border-radius: 0.75rem;
            background: linear-gradient(135deg, #1b4965, #4f86c6);
            color: #fff;
            font-size: 1.5rem;
            font-weight: 700;
          }
        </style>
      </div>
    </div>

    <!-- SPLIT -->
    
    <h2>Split</h2>
    <p class="description">
      Príklad custom obsahu v slide: namiesto obrázka obsahuje <span class="tok tag">&lt;wje-carousel-item&gt;</span> dva bloky (A/B, C/D, …).
      Šírka carouselu je upravená cez CSS custom property <span class="tok css">--wje-carousel-width</span> a layout vnútri slide rieši lokálne CSS.
      V JavaScripte sa navyše odchytáva klik na každý slide cez event <span class="tok event">wje-carousel-item:click</span> (logovanie do konzoly).
    </p>
    <div class="playground" style="padding-inline: 2rem;">
      <div class="content">
        <wje-carousel pagination class="example-content">
          <wje-carousel-item>
            <div>A</div>
            <div>B</div>
          </wje-carousel-item>
          <wje-carousel-item>
            <div>C</div>
            <div>D</div>
          </wje-carousel-item>
          <wje-carousel-item>
            <div>E</div>
            <div>F</div>
          </wje-carousel-item>
          <wje-carousel-item>
            <div>G</div>
            <div>H</div>
          </wje-carousel-item>
        </wje-carousel>
        <style>
          .example-content {
            --wje-carousel-width: 400px;
          }
          .example-content div {
            width: 200px;
            height: 300px;
            display: flex;
          }
          
          .example-content div:first-child {
            background-color: #f00;
          }
          
          .example-content div:last-child {
            background-color: #00f;
          }
        </style>
      </div>
    </div>
  </div>`;

export default class DemoCarousel extends WJElement {
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

  fetchCarousel = () => {
    return `<wje-carousel pagination loop>
      <wje-carousel-item>
        <wje-img src="https://picsum.photos/500/375?i=1"></wje-img>
      </wje-carousel-item>
      <wje-carousel-item>
        <wje-img src="https://picsum.photos/500/375?i=2"></wje-img>
      </wje-carousel-item>
      <wje-carousel-item>
        <wje-img src="https://picsum.photos/500/375?i=3"></wje-img>
      </wje-carousel-item>
      <wje-carousel-item>
        <wje-img src="https://picsum.photos/500/375?i=4"></wje-img>
      </wje-carousel-item>
    </wje-carousel>`;
  };
  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(this.context);

    this.querySelectorAll('wje-carousel-item').forEach((carousel) => {
      carousel.addEventListener('wje-carousel-item:click', (event) => {
        console.log('Clicked', event.target);
      });
    });

    this.querySelector('wje-dialog').addEventListener('wje-dialog:opened', (e) => {
      e.target.querySelector('wje-carousel').goToSlide(0, 'auto');
    });
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-carousel') || window.customElements.define('demo-carousel', DemoCarousel);
