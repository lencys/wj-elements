import '../../dist/wje-element.js';
import { expect, fixture, html } from '@open-wc/testing';
import '../../dist/wje-textarea.js';

describe('<wje-textarea>', () => {
  it('sets role textbox and aria-required when required', async () => {
    const el = await fixture(html`<wje-textarea required></wje-textarea>`);
    await el.updateComplete;
    expect(el.getAttribute('role')).to.equal('textbox');
    expect(el.getAttribute('aria-required')).to.equal('true');
  });

  it('sets aria-invalid when required and empty, clears when value set', async () => {
    const el = await fixture(html`<wje-textarea required></wje-textarea>`);
    await el.updateComplete;
    expect(el.getAttribute('aria-invalid')).to.equal('true');

    el.value = 'hello';
    await el.updateComplete;
    expect(el.getAttribute('aria-invalid')).to.equal('false');
  });

  it('sets aria-disabled when disabled', async () => {
    const el = await fixture(html`<wje-textarea disabled></wje-textarea>`);
    await el.updateComplete;
    expect(el.getAttribute('aria-disabled')).to.equal('true');
  });

  it('sets aria-readonly when readonly', async () => {
    const el = await fixture(html`<wje-textarea readonly></wje-textarea>`);
    await el.updateComplete;
    expect(el.getAttribute('aria-readonly')).to.equal('true');
  });

  it('sets aria-label from label attribute', async () => {
    const el = await fixture(html`<wje-textarea label="Notes"></wje-textarea>`);
    await el.updateComplete;
    expect(el.getAttribute('aria-label')).to.equal('Notes');
  });

  it('sets aria-describedby to the error slot id', async () => {
    const el = await fixture(html`<wje-textarea></wje-textarea>`);
    await el.updateComplete;
    const describedBy = el.getAttribute('aria-describedby');
    expect(describedBy).to.match(/^wje-textarea-\d+-error$/);
  });

  it('keeps label element only when label is provided', async () => {
    const noLabel = await fixture(html`<wje-textarea></wje-textarea>`);
    await noLabel.updateComplete;
    const noLabelEl = noLabel.context.querySelector('[part=\"label\"]');
    expect(noLabelEl).to.equal(null);

    const withLabel = await fixture(html`<wje-textarea label="Message"></wje-textarea>`);
    await withLabel.updateComplete;
    const labelEl = withLabel.context.querySelector('[part=\"label\"]');
    expect(labelEl).to.not.equal(null);
    expect(labelEl.textContent).to.equal('Message');
  });

  it('syncs placeholder on attribute change', async () => {
    const el = await fixture(html`<wje-textarea></wje-textarea>`);
    await el.updateComplete;
    el.setAttribute('placeholder', 'Type here');
    await el.updateComplete;
    expect(el.input.placeholder).to.equal('Type here');
  });

  it('syncs name on attribute change', async () => {
    const el = await fixture(html`<wje-textarea></wje-textarea>`);
    await el.updateComplete;
    el.setAttribute('name', 'bio');
    await el.updateComplete;
    expect(el.input.name).to.equal('bio');
  });

  it('reflects value attribute to native textarea after render', async () => {
    const el = await fixture(html`<wje-textarea value="Initial"></wje-textarea>`);
    await el.updateComplete;
    expect(el.input.value).to.equal('Initial');
  });

  it('syncs rows on attribute change', async () => {
    const el = await fixture(html`<wje-textarea></wje-textarea>`);
    await el.updateComplete;
    el.setAttribute('rows', '5');
    await el.updateComplete;
    expect(el.input.getAttribute('rows')).to.equal('5');
  });
});
