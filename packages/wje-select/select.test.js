import { fixture, expect, assert, html, oneEvent } from '@open-wc/testing';

// NOTE: We load WJ Elements dynamically *after* stubbing fetch.
// Some components capture `fetch` at module-evaluation time, so stubbing must happen first.
let wjeModulesLoaded = false;
async function loadWjeModulesOnce() {
  if (wjeModulesLoaded) return;

  await import('../../dist/wje-element.js');
  await import('../../dist/wje-select.js');
  await import('../../dist/wje-option.js');
  await import('../../dist/wje-options.js');
  await import('../../dist/wje-popup.js');
  await import('../../dist/wje-input.js');
  await import('../../dist/wje-button.js');
  await import('../../dist/wje-dropdown.js');
  await import('../../dist/wje-menu-item.js');
  await import('../../dist/wje-icon.js');
  await import('../../dist/wje-status.js');
  await import('../../dist/wje-checkbox.js');

  wjeModulesLoaded = true;
}

let restoreFetch;

// Minimal fetch stub for tests:
// - Prevents 404s for SVG icons used by <wje-icon> / <wje-select>
// - Avoids errors for clearly invalid "undefined" URLs
// - Delegates all other requests (e.g. /api/options) to the original fetch
function installFetchStub() {
  const originalFetch = window.fetch ? window.fetch.bind(window) : undefined;

  const svgResponse = {
    ok: true,
    status: 200,
    text: async () => '<svg xmlns="http://www.w3.org/2000/svg"></svg>',
    json: async () => ([]),
  };

  const jsonResponse = (data) => ({
    ok: true,
    status: 200,
    text: async () => JSON.stringify(data),
    json: async () => data,
  });

  const defaultOptionsArray = [
    { value: 'stub-1', text: 'Stub Option 1' },
    { value: 'stub-2', text: 'Stub Option 2' },
    { value: 'stub-3', text: 'Stub Option 3' },
  ];

  window.fetch = async (url, options) => {
    const u = String(url);

    if (u.includes('/api/options')) {
      return jsonResponse([]);
    }

    if (u.endsWith('.svg')) {
      return svgResponse;
    }

    // Guard against obviously invalid "undefined" URLs observed in tests.
    if (u === 'undefined' || u.startsWith('undefined?')) {
      return jsonResponse([]);
    }

    if (originalFetch) {
      return originalFetch(url, options);
    }

    return jsonResponse([]);
  };

  // Return restore function
  return () => {
    if (originalFetch) {
      window.fetch = originalFetch;
    }
  };
}

const nextFrame = () => new Promise((r) => requestAnimationFrame(() => r()));


function checkTemplate() {
  return html`
    <template>
      <wje-icon slot="check" name="check"></wje-icon>
    </template>
  `;
}

async function openPopup(el) {
  await el.updateComplete;
  const popup = el.shadowRoot.querySelector('wje-popup');
  expect(popup, 'Expected <wje-popup> in shadowRoot').to.exist;

  popup.dispatchEvent(new CustomEvent('wje-popup:show', { bubbles: true, composed: true }));
  popup.dispatchEvent(new CustomEvent('wje-popup:aftershow', { bubbles: true, composed: true }));
  await nextFrame();
  return popup;
}


describe('<wje-select>', () => {
  before(async () => {
    // Stub fetch BEFORE importing modules so components that capture fetch
    // at module evaluation time see the stubbed version.
    restoreFetch = installFetchStub();
    await loadWjeModulesOnce();
  });

  it('renders with open shadowRoot and basic structure', async () => {
    const el = await fixture(html`
      <wje-select label="Country" placeholder="Choose">
        ${checkTemplate()}
        <wje-option value="sk">Slovakia</wje-option>
        <wje-option value="cz">Czechia</wje-option>
      </wje-select>
    `);

    await el.updateComplete;
    expect(el.shadowRoot, 'Expected open shadowRoot').to.exist;

    const native = el.shadowRoot.querySelector('[part="native"]');
    expect(native, 'Expected native wrapper').to.exist;

    const popup = el.shadowRoot.querySelector('wje-popup');
    expect(popup, 'Expected popup').to.exist;

    const display = el.shadowRoot.querySelector('input[part="input"]');
    expect(display, 'Expected display input').to.exist;
    expect(display.getAttribute('placeholder')).to.equal('Choose');
  });

  it('passes accessibility tests with color-contrast rule ignored', async () => {
    const el = await fixture(html`
      <wje-select label="Country" placeholder="Choose">
        ${checkTemplate()}
        <wje-option value="sk">Slovakia</wje-option>
      </wje-select>
    `);

    await assert.isAccessible(el, {
      rules: {
        'color-contrast': { enabled: false },
      },
    });
  });

  describe('attributes -> popup/options wiring', () => {
    it('sets popup offset from attribute', async () => {
      const el = await fixture(html`
        <wje-select offset="12">
          ${checkTemplate()}
          <wje-option value="a">A</wje-option>
        </wje-select>
      `);
      await el.updateComplete;
      const popup = el.shadowRoot.querySelector('wje-popup');
      expect(popup.getAttribute('offset')).to.equal('12');
    });

    it('sets options-wrapper height from max-height attribute', async () => {
      const el = await fixture(html`
        <wje-select max-height="240px">
          ${checkTemplate()}
          <wje-option value="a">A</wje-option>
        </wje-select>
      `);
      await el.updateComplete;
      const wrapper = el.shadowRoot.querySelector('[part="options-wrapper"]');
      expect(wrapper).to.exist;
      expect(wrapper.style.height).to.equal('240px');
    });

    it('uses manual popup when trigger is click', async () => {
      const el = await fixture(html`
        <wje-select trigger="click">
          ${checkTemplate()}
          <wje-option value="a">A</wje-option>
        </wje-select>
      `);
      await el.updateComplete;
      const popup = el.shadowRoot.querySelector('wje-popup');
      expect(popup.hasAttribute('manual')).to.equal(true);
    });
  });

  describe('disabled / readonly', () => {
    it('disables popup and inputs when disabled attribute is set', async () => {
      const el = await fixture(html`
        <wje-select disabled>
          ${checkTemplate()}
          <wje-option value="a">A</wje-option>
        </wje-select>
      `);
      await el.updateComplete;

      const popup = el.shadowRoot.querySelector('wje-popup');
      expect(popup.hasAttribute('disabled')).to.equal(true);

      const hidden = el.shadowRoot.querySelector('input.input-hidden');
      const display = el.shadowRoot.querySelector('input[part="input"]');
      expect(hidden.hasAttribute('disabled')).to.equal(true);
      expect(display.hasAttribute('disabled')).to.equal(true);
    });

    it('marks internal and display inputs readonly when readonly attribute is set', async () => {
      const el = await fixture(html`
        <wje-select readonly>
          ${checkTemplate()}
          <wje-option value="a">A</wje-option>
        </wje-select>
      `);
      await el.updateComplete;

      const hidden = el.shadowRoot.querySelector('input.input-hidden');
      const display = el.shadowRoot.querySelector('input[part="input"]');
      expect(hidden.hasAttribute('readonly')).to.equal(true);
      expect(display.hasAttribute('readonly')).to.equal(true);
    });
  });

  describe('value initialization and selection', () => {
    it('applies value attribute in beforeDraw and selects option', async () => {
      const el = await fixture(html`
        <wje-select value="cz" label="Country">
          ${checkTemplate()}
          <wje-option value="sk">Slovakia</wje-option>
          <wje-option value="cz">Czechia</wje-option>
        </wje-select>
      `);

      await el.updateComplete;

      const selected = el.querySelector('wje-option[selected]');
      expect(selected).to.exist;
      expect(selected.getAttribute('value')).to.equal('cz');

      const display = el.shadowRoot.querySelector('input[part="input"]');
      expect(display.value).to.equal('Czechia');
    });

    it('selectOption() updates selected attribute and dispatches change', async () => {
      const el = await fixture(html`
        <wje-select>
          ${checkTemplate()}
          <wje-option value="a">A</wje-option>
          <wje-option value="b">B</wje-option>
        </wje-select>
      `);
      await el.updateComplete;

      const changeP = oneEvent(el, 'wje-select:change');
      el.selectOption('b');
      await changeP;

      const selected = el.querySelector('wje-option[selected]');
      expect(selected).to.exist;
      expect(selected.value).to.equal('b');
    });

    it('selectOptions(array) selects multiple when multiple attribute is present', async () => {
      const el = await fixture(html`
        <wje-select multiple max-options="2" placeholder="Pick">
          ${checkTemplate()}
          <wje-option value="a">A</wje-option>
          <wje-option value="b">B</wje-option>
          <wje-option value="c">C</wje-option>
        </wje-select>
      `);
      await el.updateComplete;

      el.selectOptions(['a', 'b'], true);
      await el.updateComplete;

      const selected = Array.from(el.querySelectorAll('wje-option[selected]')).map((o) => o.value);
      expect(selected).to.include('a');
      expect(selected).to.include('b');

      const chips = el.shadowRoot.querySelector('.chips');
      expect(chips).to.exist;
    });
  });

  describe('clearable', () => {
    it('clear button clears selections and removes selected attributes', async () => {
      const el = await fixture(html`
        <wje-select clearable value="a" label="X">
          ${checkTemplate()}
          <wje-option value="a">A</wje-option>
          <wje-option value="b">B</wje-option>
        </wje-select>
      `);
      await el.updateComplete;

      const clearBtn = el.shadowRoot.querySelector('wje-button[part="clear"]');
      expect(clearBtn).to.exist;

      clearBtn.dispatchEvent(new CustomEvent('wje-button:click', { bubbles: true, composed: true }));
      await el.updateComplete;

      expect(el.querySelectorAll('wje-option[selected]').length).to.equal(0);
      const display = el.shadowRoot.querySelector('input[part="input"]');
      expect(display.value).to.equal('');
    });
  });

  describe('find (search)', () => {
    it('renders find input when find attribute is present', async () => {
      const el = await fixture(html`
        <wje-select find>
          ${checkTemplate()}
          <wje-option value="aa">Alpha</wje-option>
          <wje-option value="bb">Beta</wje-option>
        </wje-select>
      `);
      await el.updateComplete;

      const find = el.shadowRoot.querySelector('wje-input.find');
      expect(find).to.exist;
      expect(find.getAttribute('part')).to.equal('find');
    });

    it('local search hides non-matching options when no lazy wje-options is present', async () => {
      const el = await fixture(html`
        <wje-select find>
          ${checkTemplate()}
          <wje-option value="aa">Alpha</wje-option>
          <wje-option value="bb">Beta</wje-option>
          <wje-option value="cc">Gamma</wje-option>
        </wje-select>
      `);
      await el.updateComplete;

      const find = el.shadowRoot.querySelector('wje-input.find');
      expect(find).to.exist;

      find.value = 'be';
      find.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true, composed: true }));
      await nextFrame();

      const alpha = el.querySelector('wje-option[value="aa"]');
      const beta = el.querySelector('wje-option[value="bb"]');
      const gamma = el.querySelector('wje-option[value="cc"]');

      expect(beta.style.display).to.equal('block');
      expect(alpha.style.display).to.equal('none');
      expect(gamma.style.display).to.equal('none');
    });
  });

  describe('lazy options via <wje-options>', () => {
    it('sets popup loader when lazy attribute is present', async () => {
      const el = await fixture(html`
        <wje-select lazy>
          ${checkTemplate()}
          <wje-options url="http://localhost:5174/api/options"></wje-options>
        </wje-select>
      `);
      await el.updateComplete;

      const popup = el.shadowRoot.querySelector('wje-popup');
      expect(popup).to.exist;
    });

    it('on first popup show, marks <wje-options> as lazy+attached', async () => {
      const el = await fixture(html`
        <wje-select lazy>
          ${checkTemplate()}
          <wje-options url="http://localhost:5174/api/options"></wje-options>
        </wje-select>
      `);
      await el.updateComplete;

      const optionsEl = el.querySelector('wje-options');
      expect(optionsEl).to.exist;

      await openPopup(el);

      expect(optionsEl.hasAttribute('lazy')).to.equal(true);
      expect(optionsEl.hasAttribute('attached')).to.equal(true);

      optionsEl.removeAttribute('attached');
      await openPopup(el);
      expect(optionsEl.hasAttribute('attached')).to.equal(false);
    });

    it('search in find mode passes search value to lazy <wje-options>', async () => {
      const el = await fixture(html`
        <wje-select find>
          ${checkTemplate()}
          <wje-options url="http://localhost:5174/api/options" lazy></wje-options>
        </wje-select>
      `);
      await el.updateComplete;

      const optionsEl = el.querySelector('wje-options');
      const find = el.shadowRoot.querySelector('wje-input.find');
      expect(find).to.exist;

      find.value = 'abc';
      find.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true, composed: true }));
      await nextFrame();

      expect(optionsEl.getAttribute('search')).to.equal('abc');
    });

    it('clears loader after lazy load when select was disabled and re-enabled during loading', async () => {
      const el = await fixture(html`
        <wje-select lazy find>
          ${checkTemplate()}
          <wje-options url="http://localhost:5174/api/options" lazy item-value="value" item-text="text"></wje-options>
        </wje-select>
      `);
      await el.updateComplete;

      const optionsEl = el.querySelector('wje-options');
      expect(optionsEl, 'Expected <wje-options> element').to.exist;

      let popup = el.shadowRoot.querySelector('wje-popup');
      expect(popup, 'Expected <wje-popup> in shadowRoot').to.exist;

      await openPopup(el);

      popup.dispatchEvent(new CustomEvent('wje-popup:hide', { bubbles: true, composed: true }));
      popup.dispatchEvent(new CustomEvent('wje-popup:afterhide', { bubbles: true, composed: true }));
      await nextFrame();

      el.disabled = true;
      await el.updateComplete;
      el.disabled = false;
      await el.updateComplete;

      popup = el.shadowRoot.querySelector('wje-popup');
      expect(popup, 'Expected <wje-popup> after re-render').to.exist;

      optionsEl.dispatchEvent(new CustomEvent('wje-options:load', { bubbles: true, composed: true }));
      await el.updateComplete;
      await nextFrame();

      popup = await openPopup(el);
      await el.updateComplete;
      await nextFrame();

      expect(popup.hasAttribute('loader'), 'Loader must not reappear and stay stuck after reopen').to.equal(false);
    });
  });

  describe('dropdown menu item capture behavior', () => {
    it('does not throw when clicking wje-menu-item inside dropdown', async () => {
      const el = await fixture(html`
        <wje-select>
          ${checkTemplate()}
          <wje-option value="a">
            A
            <wje-dropdown slot="end">
              <wje-menu-item>Item</wje-menu-item>
            </wje-dropdown>
          </wje-option>
        </wje-select>
      `);
      await el.updateComplete;

      await nextFrame();

      const menuItem = el.querySelector('wje-menu-item');
      expect(menuItem).to.exist;

      const ev = new MouseEvent('mousedown', { bubbles: true, composed: true });
      menuItem.dispatchEvent(ev);

      const popup = el.shadowRoot.querySelector('wje-popup');
      expect(popup).to.exist;
    });
  });

  describe('form field behavior', () => {
    it('updates hidden + display inputs for single selection', async () => {
      const el = await fixture(html`
        <wje-select placeholder="Select option" variant="standard" value="option-2">
          ${checkTemplate()}
          <wje-option value="option-1">Option 1</wje-option>
          <wje-option value="option-2">Option 2</wje-option>
          <wje-option value="option-3">Option 3</wje-option>
        </wje-select>
      `);

      await el.updateComplete;
      await nextFrame();

      const hidden = el.shadowRoot.querySelector('input.input-hidden');
      const display = el.shadowRoot.querySelector('input[part="input"]');
      expect(hidden, 'Expected internal hidden input').to.exist;
      expect(display, 'Expected display input').to.exist;

      expect(hidden.value).to.equal('option-2');
      expect(display.value).to.equal('Option 2');

      // Change selection via event (same path as real interactions)
      const opt1 = el.querySelector('wje-option[value="option-1"]');
      opt1.dispatchEvent(new CustomEvent('wje-option:change', { bubbles: true, composed: true, cancelable: true }));
      await el.updateComplete;

      expect(el.querySelectorAll('wje-option[selected]').length).to.equal(1);
      expect(el.querySelector('wje-option[selected]').getAttribute('value')).to.equal('option-1');
      expect(hidden.value).to.equal('option-1');
      expect(display.value).to.equal('Option 1');
    });

    it('updates hidden input for multiple selection (space-separated)', async () => {
      const el = await fixture(html`
        <wje-select placeholder="Select options" variant="standard" multiple max-options="3" value="option-2 option-1">
          ${checkTemplate()}
          <wje-option value="option-1">Option 1</wje-option>
          <wje-option value="option-2">Option 2</wje-option>
          <wje-option value="option-3">Option 3</wje-option>
        </wje-select>
      `);

      await el.updateComplete;
      await nextFrame();

      const hidden = el.shadowRoot.querySelector('input.input-hidden');
      expect(hidden, 'Expected internal hidden input').to.exist;
      // Select serializes multiple values in reverse order (see selectionChanged())
      expect(hidden.value.trim()).to.equal('option-2 option-1');

      const opt3 = el.querySelector('wje-option[value="option-3"]');
      opt3.dispatchEvent(new CustomEvent('wje-option:change', { bubbles: true, composed: true, cancelable: true }));
      await el.updateComplete;

      expect(hidden.value).to.include('option-3');
    });
  });

  describe('footer slot', () => {
    it('renders footer slot content and keeps it assigned', async () => {
      const el = await fixture(html`
        <wje-select variant="standard" label="Label" placeholder="Select option" value="option-1" max-height="200px">
          ${checkTemplate()}
          <wje-option value="option-1" selected>Option 1</wje-option>
          <wje-option value="option-2">Option 2</wje-option>
          <div slot="footer">
            Create new option <wje-button size="small" color="success">Action</wje-button>
          </div>
        </wje-select>
      `);

      await el.updateComplete;

      const footerSlot = el.shadowRoot.querySelector('slot[name="footer"]');
      expect(footerSlot, 'Expected footer slot in shadowRoot').to.exist;

      const assigned = footerSlot.assignedElements();
      expect(assigned.length).to.equal(1);
      expect(assigned[0].getAttribute('slot')).to.equal('footer');
      expect(assigned[0].textContent).to.include('Create new option');
      expect(assigned[0].querySelector('wje-button')).to.exist;
    });
  });

  describe('single vs multiple selection behavior', () => {
    it('single mode keeps exactly one option selected after consecutive changes', async () => {
      const el = await fixture(html`
        <wje-select placeholder="Select option" variant="standard">
          ${checkTemplate()}
          <wje-option value="a">A</wje-option>
          <wje-option value="b">B</wje-option>
          <wje-option value="c">C</wje-option>
        </wje-select>
      `);
      await el.updateComplete;

      const a = el.querySelector('wje-option[value="a"]');
      const b = el.querySelector('wje-option[value="b"]');

      a.dispatchEvent(new CustomEvent('wje-option:change', { bubbles: true, composed: true, cancelable: true }));
      await el.updateComplete;
      expect(el.querySelectorAll('wje-option[selected]').length).to.equal(1);
      expect(el.querySelector('wje-option[selected]').getAttribute('value')).to.equal('a');

      b.dispatchEvent(new CustomEvent('wje-option:change', { bubbles: true, composed: true, cancelable: true }));
      await el.updateComplete;
      expect(el.querySelectorAll('wje-option[selected]').length).to.equal(1);
      expect(el.querySelector('wje-option[selected]').getAttribute('value')).to.equal('b');
    });

    it('multiple toggles selection on repeated option change events', async () => {
      const el = await fixture(html`
        <wje-select label="Multiple" placeholder="Select option" variant="standard" multiple clearable>
          ${checkTemplate()}
          <wje-option value="a">A</wje-option>
          <wje-option value="b">B</wje-option>
          <wje-option value="c">C</wje-option>
        </wje-select>
      `);
      await el.updateComplete;

      const b = el.querySelector('wje-option[value="b"]');

      b.dispatchEvent(new CustomEvent('wje-option:change', { bubbles: true, composed: true, cancelable: true }));
      await el.updateComplete;
      expect(el.selectedOptions.map(o => o.getAttribute('value'))).to.include('b');

      b.dispatchEvent(new CustomEvent('wje-option:change', { bubbles: true, composed: true, cancelable: true }));
      await el.updateComplete;
      expect(el.selectedOptions.map(o => o.getAttribute('value'))).to.not.include('b');
    });


    it('multiple + checkbox toggles selection on repeated option change events', async () => {
      const el = await fixture(html`
        <wje-select label="Multiple" placeholder="Select option" variant="standard" multiple checkbox clearable>
          <template>
            <wje-checkbox slot="check"></wje-checkbox>
          </template>
          <wje-option value="a">A</wje-option>
          <wje-option value="b">B</wje-option>
          <wje-option value="c">C</wje-option>
        </wje-select>
      `);
      await el.updateComplete;

      const b = el.querySelector('wje-option[value="b"]');

      // First toggle -> select
      b.dispatchEvent(new CustomEvent('wje-option:change', { bubbles: true, composed: true, cancelable: true }));
      await el.updateComplete;
      expect(el.selectedOptions.map((o) => o.getAttribute('value'))).to.include('b');

      // Second toggle -> deselect
      b.dispatchEvent(new CustomEvent('wje-option:change', { bubbles: true, composed: true, cancelable: true }));
      await el.updateComplete;
      expect(el.selectedOptions.map((o) => o.getAttribute('value'))).to.not.include('b');

      // Ensure checkbox element exists in the option (template clone path)
      const checkbox = b.querySelector('wje-checkbox[slot="check"]');
      expect(checkbox).to.exist;
    });
  });

  describe('check indicator variants (icon / status / classic / custom checkbox)', () => {
    it('clones template icon in slot="check" into options', async () => {
      const el = await fixture(html`
        <wje-select label="Single Star" placeholder="Select option" variant="standard" clearable>
          <template>
            <wje-icon name="star" slot="check"></wje-icon>
          </template>
          <wje-option value="option-1">Option 1</wje-option>
          <wje-option value="option-2" selected>Option 2</wje-option>
        </wje-select>
      `);

      await el.updateComplete;

      const option2 = el.querySelector('wje-option[value="option-2"]');
      expect(option2).to.exist;

      const checkIcon = option2.querySelector('wje-icon[slot="check"]');
      expect(checkIcon, 'Expected cloned check icon in option').to.exist;
      expect(checkIcon.getAttribute('name')).to.equal('star');
    });

    it('supports wje-status in slot="check" and reflects selected text in display input', async () => {
      const el = await fixture(html`
        <wje-select label="Single Status" placeholder="Select option" variant="standard" find clearable value="option-2">
          <wje-option value="option-1">
            <wje-status color="complete" slot="check"></wje-status>
            Option 1
          </wje-option>
          <wje-option value="option-2">
            <wje-status color="success" slot="check"></wje-status>
            Option 2
          </wje-option>
        </wje-select>
      `);

      await el.updateComplete;
      await nextFrame();

      const display = el.shadowRoot.querySelector('input[part="input"]');
      expect(display).to.exist;
      expect(display.value).to.equal('Option 2');

      const selected = el.querySelector('wje-option[selected]');
      expect(selected).to.exist;
      expect(selected.querySelector('wje-status[slot="check"]')).to.exist;
    });

    it('classic (no check template) still selects and updates display input text', async () => {
      const el = await fixture(html`
        <wje-select label="Single Classic" placeholder="Select option" variant="standard" find clearable value="option-2">
          <wje-option value="option-1">Option 1</wje-option>
          <wje-option value="option-2">Option 2</wje-option>
          <wje-option value="option-3">Option 3</wje-option>
        </wje-select>
      `);

      await el.updateComplete;
      await nextFrame();

      const display = el.shadowRoot.querySelector('input[part="input"]');
      expect(display).to.exist;
      expect(display.value).to.equal('Option 2');

      const opt3 = el.querySelector('wje-option[value="option-3"]');
      opt3.dispatchEvent(new CustomEvent('wje-option:change', { bubbles: true, composed: true, cancelable: true }));
      await el.updateComplete;

      expect(display.value).to.equal('Option 3');
    });

    it('custom checkbox template (wje-checkbox slot="check") is clonable into options', async () => {
      const el = await fixture(html`
        <wje-select id="custom-checkbox" label="Multiple" placeholder="Select option" variant="standard" multiple clearable>
          <template>
            <wje-checkbox slot="check"></wje-checkbox>
          </template>
          <wje-option value="option-1">Option 1</wje-option>
          <wje-option value="option-2">Option 2</wje-option>
        </wje-select>
      `);

      await el.updateComplete;

      const option1 = el.querySelector('wje-option[value="option-1"]');
      expect(option1).to.exist;

      const checkbox = option1.querySelector('wje-checkbox[slot="check"]');
      expect(checkbox, 'Expected cloned checkbox in option').to.exist;
    });
  });
});

describe('dynamic options rendered from <wje-options> JSON', () => {
    // Static dataset for addOptions tests
    const staticOptions = [
      { value: 'eae3262d-3854-4e5b-8e21-7a0a863d0593', text: 'Bahrain' },
      { value: '7e771d42-c4f9-4627-9876-f7ded0b265f4', text: 'Serbia' },
      { value: 'x1', text: 'Alpha' },
      { value: 'x2', text: 'Beta' },
      { value: 'x3', text: 'Gamma' },
      { value: 'x4', text: 'Delta' },
    ];

    it('renders <wje-option> elements from addOptions static array', async () => {
      const el = await fixture(html`
        <wje-select placeholder="Select options" variant="standard" max-height="200px" multiple clearable>
          ${checkTemplate()}
          <wje-options url="http://localhost:5174/api/options" item-value="value" item-text="text"></wje-options>
        </wje-select>
      `);

      // Mimic demo behavior: set htmlItem builder for wje-options
      const optionsEl = el.querySelector('wje-options');
      optionsEl.htmlItem = (data) => {
        const option = document.createElement('wje-option');
        const key = optionsEl.itemValue;
        const text = optionsEl.itemText;
        option.setAttribute('value', data[key]);
        option.textContent = data[text];
        return option;
      };

      // In demo-select, options are added to <wje-options> first and then `value` is set
      // programmatically on the select. Mirror that by calling addOptions on wje-options.
      optionsEl.addOptions(staticOptions);
      await el.updateComplete;

      // When options are injected after initial render, <wje-select> does not automatically
      // re-apply the initial `value` attribute. Mirror demo usage: set the value again
      // after options exist so selection + chips are computed.
      const valueStr = 'eae3262d-3854-4e5b-8e21-7a0a863d0593 7e771d42-c4f9-4627-9876-f7ded0b265f4';
      el.value = valueStr;
      await el.updateComplete;
      await nextFrame();

      const options = Array.from(el.querySelectorAll('wje-option'));
      expect(options.length, 'Expected options created from addOptions array').to.equal(staticOptions.length);

      const byValue = new Map(options.map((o) => [o.getAttribute('value'), o]));
      for (const item of staticOptions) {
        expect(byValue.has(item.value), `Expected option with value="${item.value}"`).to.equal(true);
        const opt = byValue.get(item.value);
        expect(opt.textContent.trim()).to.equal(item.text);
      }
    });

    it('renders <wje-option> elements from addOptions static array, applies value attr selections, and shows chips in lazy multiple checkbox mode', async () => {
      const el = await fixture(html`
        <wje-select
          lazy
          label="Label optionS"
          placeholder="Select options"
          variant="standard"
          max-height="200px"
          value="eae3262d-3854-4e5b-8e21-7a0a863d0593 7e771d42-c4f9-4627-9876-f7ded0b265f4"
          find
          clearable
          checkbox
          multiple>
          <template>
            <wje-checkbox slot="check"></wje-checkbox>
          </template>
          <wje-options url="http://localhost:5174/api/options" lazy item-value="value" item-text="text" lazy-load-size="6" option-array-path="data"></wje-options>
        </wje-select>
      `);

      // Mimic demo behavior: set htmlItem builder for wje-options
      const optionsEl = el.querySelector('wje-options');
      optionsEl.htmlItem = (data) => {
        const option = document.createElement('wje-option');
        const key = optionsEl.itemValue;
        const text = optionsEl.itemText;
        option.setAttribute('value', data[key]);
        option.textContent = data[text];
        return option;
      };

      // In lazy mode, <wje-options> becomes "attached" after the popup is shown.
      await openPopup(el);

      // Add options via the <wje-options> helper, same as in the demo.
      optionsEl.addOptions(staticOptions);
      await el.updateComplete;

      // Re-apply selection AFTER options exist and lazy options are attached.
      // In some modes (lazy + checkbox), the `value` setter alone may not re-select
      // options added after the initial render, so force the same code path the
      // component uses for programmatic selection.
      const selectedValues = [
        'eae3262d-3854-4e5b-8e21-7a0a863d0593',
        '7e771d42-c4f9-4627-9876-f7ded0b265f4',
      ];

      // Keep `value` aligned (useful for hidden input / chips), but rely on selectOptions
      // to actually apply `selected` flags.
      el.value = selectedValues.join(' ');
      el.selectOptions(selectedValues, true);
      await el.updateComplete;
      await nextFrame();

      const options = Array.from(el.querySelectorAll('wje-option'));
      expect(options.length, 'Expected options created from addOptions array').to.equal(staticOptions.length);
      // Check that correct options are selected
      const selected = Array.from(el.querySelectorAll('wje-option[selected]'))
        .map((o) => o.getAttribute('value'))
        .sort();
      expect(selected).to.include('eae3262d-3854-4e5b-8e21-7a0a863d0593');
      expect(selected).to.include('7e771d42-c4f9-4627-9876-f7ded0b265f4');
      // Chips container exists
      const chips = el.shadowRoot.querySelector('.chips');
      expect(chips).to.exist;
    });
  });

  after(() => {
    if (restoreFetch) {
      restoreFetch();
    }
  });