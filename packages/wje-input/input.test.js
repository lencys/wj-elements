import '../../dist/wje-element.js';
import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import '../../dist/wje-button.js';
import '../../dist/wje-icon.js';
import '../../dist/wje-input.js';

describe('<wje-input>', () => {
  it('sets role textbox and aria-required when required', async () => {
    const el = await fixture(html`<wje-input required></wje-input>`);
    await el.updateComplete;
    expect(el.getAttribute('role')).to.equal('textbox');
    expect(el.getAttribute('aria-required')).to.equal('true');
  });

  it('sets aria-invalid when required and empty, clears when value set', async () => {
    const el = await fixture(html`<wje-input required></wje-input>`);
    await el.updateComplete;
    expect(el.getAttribute('aria-invalid')).to.equal('true');

    el.value = 'hello';
    await el.updateComplete;
    expect(el.getAttribute('aria-invalid')).to.equal('false');
  });

  it('sets aria-disabled when disabled', async () => {
    const el = await fixture(html`<wje-input disabled></wje-input>`);
    await el.updateComplete;
    expect(el.getAttribute('aria-disabled')).to.equal('true');
  });

  it('sets aria-readonly when readonly', async () => {
    const el = await fixture(html`<wje-input readonly></wje-input>`);
    await el.updateComplete;
    expect(el.getAttribute('aria-readonly')).to.equal('true');
  });

  it('sets aria-label from label attribute', async () => {
    const el = await fixture(html`<wje-input label="Email"></wje-input>`);
    await el.updateComplete;
    expect(el.getAttribute('aria-label')).to.equal('Email');
  });

  it('sets aria-describedby to the error slot id', async () => {
    const el = await fixture(html`<wje-input></wje-input>`);
    await el.updateComplete;
    const describedBy = el.getAttribute('aria-describedby');
    expect(describedBy).to.match(/^wje-input-\d+-error$/);
  });

  it('keeps label element only when label is provided', async () => {
    const noLabel = await fixture(html`<wje-input></wje-input>`);
    await noLabel.updateComplete;
    const noLabelEl = noLabel.context.querySelector('[part=\"label\"]');
    expect(noLabelEl).to.equal(null);

    const withLabel = await fixture(html`<wje-input label="Name"></wje-input>`);
    await withLabel.updateComplete;
    const labelEl = withLabel.context.querySelector('[part=\"label\"]');
    expect(labelEl).to.not.equal(null);
    expect(labelEl.textContent).to.equal('Name');
  });

  it('adds fade class to label when value is prefilled', async () => {
    const el = await fixture(html`<wje-input label="Name" value="John"></wje-input>`);
    await el.updateComplete;
    const labelEl = el.context.querySelector('[part=\"label\"]');
    expect(labelEl.classList.contains('fade')).to.equal(true);
  });

  it('syncs placeholder on attribute change', async () => {
    const el = await fixture(html`<wje-input></wje-input>`);
    await el.updateComplete;
    el.setAttribute('placeholder', 'Type here');
    await el.updateComplete;
    expect(el.input.placeholder).to.equal('Type here');
  });

  it('syncs type on attribute change', async () => {
    const el = await fixture(html`<wje-input></wje-input>`);
    await el.updateComplete;
    el.setAttribute('type', 'password');
    await el.updateComplete;
    expect(el.input.type).to.equal('password');
  });

  it('syncs name on attribute change', async () => {
    const el = await fixture(html`<wje-input></wje-input>`);
    await el.updateComplete;
    el.setAttribute('name', 'username');
    await el.updateComplete;
    expect(el.input.name).to.equal('username');
  });

  it('syncs disabled on attribute change', async () => {
    const el = await fixture(html`<wje-input></wje-input>`);
    await el.updateComplete;
    el.setAttribute('disabled', '');
    await el.updateComplete;
    expect(el.input.disabled).to.equal(true);
    expect(el.getAttribute('aria-disabled')).to.equal('true');
  });

  it('reflects value attribute to native input after render', async () => {
    const el = await fixture(html`<wje-input value="Initial"></wje-input>`);
    await el.updateComplete;
    expect(el.input.value).to.equal('Initial');
  });

  it('clears value and dispatches clear event when clear button is clicked', async () => {
    const el = await fixture(html`<wje-input clearable value="Hello"></wje-input>`);
    await el.updateComplete;
    const clearBtn = el.context.querySelector('wje-button.clear');
    expect(clearBtn).to.not.equal(null);
    const evPromise = oneEvent(clearBtn, 'wje-input:clear');
    clearBtn.dispatchEvent(new CustomEvent('wje-button:click', { bubbles: true, composed: true }));
    await evPromise;
    expect(el.input.value).to.equal('');
    expect(el.value).to.equal('');
  });
});
