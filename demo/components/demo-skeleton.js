import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

class DemoSkeletonCounter extends WJElement {
  /**
   * Setup attributes for the Breadcrumbs element.
   */
  setupAttributes() {
    this.isShadowRoot = 'open';
  }

  /**
   * Get observed attributes for the Breadcrumb element.
   * @static
   * @returns {Array<string>} - The observed attributes array for the Breadcrumb element.
   */
  static get observedAttributes() {
    return ['count', 'async-delay'];
  }

  async draw() {
    const delay = Number(this.getAttribute('async-delay') ?? 300);
    if (Number.isFinite(delay) && delay > 0) {
      await new Promise((r) => setTimeout(r, delay));
    }

    const count = this.getAttribute('count') ?? '0';

    return `
      <style>
        .box { padding: 12px; border: 1px solid var(--wje-border-color, #ccc); border-radius: 8px; background: var(--wje-color-contrast-0, #fff); }
        .row { display: flex; align-items: center; gap: 8px; }
        .muted { margin-top: .5rem; }
      </style>
      <div class="box">
        <div class="row">
          <wje-button id="btn">Refresh</wje-button>
          <span id="val">count: ${count}</span>
        </div>
        <div class="muted">Simulates async draw (${delay}ms). </div>
      </div>
    `;
  }

  afterDraw() {
    const root = this.shadowRoot || this;
    const btn = root.querySelector('#btn');

    if (btn) {
      btn.addEventListener('wje-button:click', () => {
        const prev = this.getAttribute('count') ?? '0';
        const next = String(Number(prev) + 1);
        this.setAttribute('count', next);
      });
    }
  }
}

customElements.get('demo-skeleton-counter') || window.customElements.define('demo-skeleton-counter', DemoSkeletonCounter);

const template = document.createElement('template');
//debug-skeleton
template.innerHTML = `
  <h1>Skeleton</h1>
  <div class="container">

    <h2>Async refresh swap</h2>
    <div class="description">
      Ukážka asynchrónneho prekreslenia komponentu s kostrou (skeleton). Komponent
      <span class="tok tag">&lt;demo-skeleton-counter&gt;</span> používa tieto atribúty:
      <ul>
        <li><span class="tok attr">skeleton</span> – zapne alebo vypne skeleton režim.</li>
        <li><span class="tok attr">skeleton-delay</span> – čas (ms), po ktorom sa skeleton začne zobrazovať.</li>
        <li><span class="tok attr">skeleton-min-duration</span> – minimálna doba (ms), počas ktorej musí byť skeleton viditeľný.</li>
        <li><span class="tok attr">async-delay</span> – čas (ms) simulujúci dĺžku asynchrónneho renderu.</li>
        <li><span class="tok attr">debug-skeleton</span> – vynúti zobrazenie skeletonu aj bez oneskorenia (debug režim).</li>
      </ul>
      Táto ukážka zároveň demonštruje, ako komponent nebliká pri refreshoch alebo zmene atribútov,
      ktoré sú uvedené v <span class="tok method">observedAttributes</span>. Hodnoty sa menia cez vstupy <span class="tok tag">&lt;wje-input&gt;</span>
    </div>
    <div class="playground" style="display: block;">
      <div class="content" style="justify-content: start; width: 360px;">
        <div class="row" style="margin-bottom: 12px; gap: 12px; flex-wrap: wrap;">
          <wje-input label="Delay (ms)" variant="standard" id="input-delay" type="number" value="200" style="width: 110px;"></wje-input>
          <wje-input label="Min duration (ms)" variant="standard" id="input-duration" type="number" value="500" style="width: 140px;"></wje-input>
          <wje-input label="Async draw (ms)" variant="standard" id="input-async" type="number" value="300" style="width: 150px;"></wje-input>
          <wje-toggle id="toggle-skeleton" color="success" checked>Skeleton</wje-toggle>
        </div>
        <demo-skeleton-counter skeleton skeleton-delay="200" skeleton-min-duration="500" async-delay="300" count="0" style="width:100%;">
          <div class="wje-skeleton wje-skeleton-flex-column" slot="skeleton" style="padding: 12px; border: 1px solid var(--wje-border-color, #ccc); border-radius: 8px; height: 82.8px; box-sizing: border-box;">
            <div class="wje-skeleton-flex-row">
              <div class="wje-skeleton-circle"></div>
              <div class="wje-skeleton-flex-column w-85">
                <div class="wje-skeleton-line w-60"></div>
                <div class="wje-skeleton-line"></div>
                <div class="wje-skeleton-line w-80"></div>
              </div>
            </div>
            
          </div>
        </demo-skeleton-counter>
      </div>
    </div>

  </div>`;

class DemoSkeleton extends WJElement {
  static get customTemplate() {
    return template;
  }

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(this.context);

    const root = this.context || this;
    const toggle = root.querySelector('#toggle-skeleton');
    const inputDelay = root.querySelector('#input-delay');
    const inputDuration = root.querySelector('#input-duration');
    const inputAsync = root.querySelector('#input-async');
    const counter = root.querySelector('demo-skeleton-counter');

    const getNumber = (el, fallback) => {
      if (!el) return fallback;
      const v = el.value ?? el.getAttribute('value');
      const n = Number(v);
      return Number.isFinite(n) ? n : fallback;
    };

    const applyTiming = () => {
      if (!counter) return;
      const delay = getNumber(inputDelay, Number(counter.getAttribute('skeleton-delay') ?? 200));
      const minDuration = getNumber(inputDuration, Number(counter.getAttribute('skeleton-min-duration') ?? 500));
      const asyncDelay = getNumber(inputAsync, Number(counter.getAttribute('async-delay') ?? 300));

      counter.setAttribute('skeleton-delay', String(delay));
      counter.setAttribute('skeleton-min-duration', String(minDuration));
      counter.setAttribute('async-delay', String(asyncDelay));
      if (inputAsync) inputAsync.value = String(asyncDelay);
    };

    const applySkeletonEnabled = (enabled) => {
      if (!counter) return;
      if (enabled) counter.setAttribute('skeleton', '');
      else counter.removeAttribute('skeleton');
    };

    applyTiming();

    if (toggle) {
      const initial = toggle.hasAttribute('checked') || toggle.checked === true;
      applySkeletonEnabled(initial);

      const onToggle = (e) => {
        const enabled = (e?.detail?.checked ?? toggle.checked ?? toggle.hasAttribute('checked')) === true;
        if (enabled) toggle.setAttribute('checked', '');
        else toggle.removeAttribute('checked');
        applySkeletonEnabled(enabled);
      };

      toggle.addEventListener('wje-toggle:change', onToggle);
    }

    const onTimingChange = () => {
      applyTiming();
      if (counter && typeof counter.refresh === 'function') counter.refresh();
    };

    if (inputDelay) {
      inputDelay.addEventListener('wje-input:input', onTimingChange);
    }

    if (inputDuration) {
      inputDuration.addEventListener('wje-input:input', onTimingChange);
    }

    if (inputAsync) {
      inputAsync.addEventListener('wje-input:input', onTimingChange);
    }
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-skeleton') || window.customElements.define('demo-skeleton', DemoSkeleton);
export default DemoSkeleton;