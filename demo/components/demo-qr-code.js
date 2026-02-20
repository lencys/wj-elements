import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `
    <h1>QR Code Generator</h1>
    <div class="container">
        <h2>Default</h2>
        <div class="description">
          Základná ukážka komponentu <span class="tok tag">&lt;wje-qr-code&gt;</span>, ktorý generuje QR kód
          podľa zadaných parametrov. Používané atribúty:
          <ul>
            <li><span class="tok attr">value</span> – text alebo URL, ktoré sa zakóduje do QR kódu.</li>
            <li><span class="tok attr">size</span> – celková veľkosť QR kódu v pixeloch.</li>
            <li><span class="tok attr">padding</span> – vnútorné odsadenie okolo QR kódu.</li>
            <li><span class="tok attr">foreground</span> – farba „čiar“ QR kódu.</li>
            <li><span class="tok attr">foregroundAlpha</span> – priesvitnosť popredia (0–1).</li>
            <li><span class="tok attr">background</span> – farba pozadia QR kódu.</li>
            <li><span class="tok attr">backgroundAlpha</span> – priesvitnosť pozadia (0–1).</li>
            <li><span class="tok attr">level</span> – úroveň korekcie chýb (<span class="tok attr">L</span>, <span class="tok attr">M</span>, <span class="tok attr">Q</span>, <span class="tok attr">H</span>).</li>
          </ul>
          Nad a pod QR kód je možné vložiť vlastný obsah cez sloty
          <span class="tok attr">top</span> a <span class="tok attr">bottom</span>.
          Hodnoty sa v tejto ukážke menia interaktívne cez
          <span class="tok tag">&lt;wje-input&gt;</span>,
          <span class="tok tag">&lt;wje-color-picker&gt;</span> a
          <span class="tok tag">&lt;wje-select&gt;</span> v metóde
          <span class="tok method">afterDraw()</span>.
        </div>
        <div class="playground">
            <div class="content">
                <wje-qr-code value="https://www.mcdonalds.sk/" size="200" padding="25" foreground="#000000" foreground-alpha="1" background="#ffffff" background-alpha="1" level="L">
                    <h3 slot="top">
                        Name on top of QR code
                    </h3>
                    <h3 slot="bottom">
                        Name on bottom of QR code
                    </h3>
                </wje-qr-code>

                <wje-input variant="standard" changeValue label="Change value" type="text" value="https://www.mcdonalds.sk/"></wje-input>
                <wje-input variant="standard" changeSize label="Change size" type="text" value="200"></wje-input>
                <wje-input variant="standard" changePadding label="Change padding" type="text" value="25"></wje-input>
                <div style="display: flex; flex-direction: row;">
                    <wje-input variant="standard" changeForeground label="Foreground color" class="example-color" clearable value="#000000">
                        <wje-dropdown slot="start" class="example-color-dropdown" placement="bottom-start" offset="5" collapsible portaled>
                            <div slot="trigger" class="color-trigger color-trigger-foreground"></div>
                            <wje-color-picker colorSelectForeground color="#000000"></wje-color-picker>
                        </wje-dropdown>
                    </wje-input>

                    <wje-input variant="standard" changeForegroundAlpha label="Change foreground alpha" type="text" value="1" style="margin-left: 10px;">
                    </wje-input>
                </div>

                <div style="display: flex; flex-direction: row;">
                    <wje-input variant="standard" changeBackground label="Background color" class="example-color" clearable value="#ffffff">
                        <wje-dropdown slot="start" class="example-color-dropdown" placement="bottom-start" offset="5" collapsible portaled>
                            <div slot="trigger" class="color-trigger color-trigger-background"></div>
                            <wje-color-picker colorSelectBackground color="#ffffff"></wje-color-picker>
                        </wje-dropdown>
                    </wje-input>

                    <wje-input variant="standard" changeBackgroundAlpha label="Change background alpha" type="text" value="1" style="margin-left: 10px;">
                    </wje-input>
                </div>

                <wje-select variant="standard" levelSelect label="Level" placeholder="select level" max-options="1">
                </wje-select>

                <style>
                    .example-color {
                        --wje-input-slot-padding-inline: .25rem !important;
                    }

                    .example-color-dropdown {
                        display: flex;
                        align-items: center;
                    }

                    .color-trigger {
                        width: 1.25rem;
                        height: 1.25rem;
                        border-radius: 50%;
                        border: 1px solid var(--wje-border-color);
                    }

                    .color-trigger-foreground {
                        background: #000000;
                    }

                    .color-trigger-background {
                        background: #ffffff;
                    }
                </style>
            </div>
        </div>
    </div>
`;

export default class DemoQrCode extends WJElement {
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

    const qr = this.querySelector('wje-qr-code');
    if (!qr) return;
    const levels = ['L', 'M', 'Q', 'H'];
    const foregroundInput = this.querySelector('[changeForeground]');
    const backgroundInput = this.querySelector('[changeBackground]');
    const foregroundTrigger = this.querySelector('.color-trigger-foreground');
    const backgroundTrigger = this.querySelector('.color-trigger-background');

    function populateOptions(selectElement, options) {
      if (!selectElement) return;

      options.forEach((option) => {
        const optionElement = Object.assign(document.createElement('wje-option'), {
          text: option,
          value: option,
          label: option,
        });
        selectElement.appendChild(optionElement);
      });
    }

    function getEventValue(e) {
      if (e?.detail?.context?.value !== undefined) {
        return e.detail.context.value;
      }

      if (e?.detail?.value?.hex8 !== undefined) {
        return e.detail.value.hex8;
      }

      if (e?.detail?.hex8 !== undefined) {
        return e.detail.hex8;
      }

      if (e?.detail?.value !== undefined) {
        return e.detail.value;
      }

      return null;
    }

    const handleInputOrSelectChange = (selector, eventType, attribute) => {
      const element = this.querySelector(selector);
      if (!element) return;

      element.addEventListener(eventType, (e) => {
        const value = getEventValue(e);
        if (value === null || value === undefined || value === '') return;

        qr.setAttribute(attribute, String(value));
      });
    };

    const colorSelectF = this.querySelector('[colorSelectForeground]');
    const colorSelectB = this.querySelector('[colorSelectBackground]');
    const levelSelect = this.querySelector('[levelSelect]');

    populateOptions(levelSelect, levels);

    colorSelectF?.addEventListener('wje-color-picker:select', (e) => {
      const color = getEventValue(e);
      if (!color) return;

      if (foregroundInput) foregroundInput.value = color;
      if (foregroundTrigger) foregroundTrigger.style.backgroundColor = color;
      qr.setAttribute('foreground', color);
    });

    colorSelectB?.addEventListener('wje-color-picker:select', (e) => {
      const color = getEventValue(e);
      if (!color) return;

      if (backgroundInput) backgroundInput.value = color;
      if (backgroundTrigger) backgroundTrigger.style.backgroundColor = color;
      qr.setAttribute('background', color);
    });

    const elements = [
      { selector: '[changeValue]', eventType: 'wje-input:input', attribute: 'value' },
      { selector: '[changeSize]', eventType: 'wje-input:input', attribute: 'size' },
      { selector: '[changePadding]', eventType: 'wje-input:input', attribute: 'padding' },
      { selector: '[changeForeground]', eventType: 'wje-input:input', attribute: 'foreground' },
      { selector: '[changeForegroundAlpha]', eventType: 'wje-input:input', attribute: 'foreground-alpha' },
      { selector: '[changeBackground]', eventType: 'wje-input:input', attribute: 'background' },
      { selector: '[changeBackgroundAlpha]', eventType: 'wje-input:input', attribute: 'background-alpha' },
      { selector: '[levelSelect]', eventType: 'wje-option:change', attribute: 'level' },
    ];

    elements.forEach(({ selector, eventType, attribute }) => {
      handleInputOrSelectChange(selector, eventType, attribute);
    });
  }
}

let __esModule = 'true';
export { __esModule };

if (!customElements.get('demo-qr-code')) {
  window.customElements.define('demo-qr-code', DemoQrCode);
}
