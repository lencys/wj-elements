import '../../dist/wje-element.js';
import { expect, fixture, html } from '@open-wc/testing';
import '../../dist/wje-checkbox.js';

describe('<wje-checkbox>', () => {
  it('sets role checkbox and aria-checked false by default', async () => {
    const el = await fixture(html`<wje-checkbox>Label</wje-checkbox>`);
    await el.updateComplete;
    expect(el.getAttribute('role')).to.equal('checkbox');
    expect(el.getAttribute('aria-checked')).to.equal('false');
  });

  it('sets aria-checked true when checked', async () => {
    const el = await fixture(html`<wje-checkbox checked>Label</wje-checkbox>`);
    await el.updateComplete;
    expect(el.getAttribute('aria-checked')).to.equal('true');
  });

  it('sets aria-checked mixed when indeterminate', async () => {
    const el = await fixture(html`<wje-checkbox indeterminate>Label</wje-checkbox>`);
    await el.updateComplete;
    expect(el.getAttribute('aria-checked')).to.equal('mixed');
  });

  it('sets aria-disabled when disabled', async () => {
    const el = await fixture(html`<wje-checkbox disabled>Label</wje-checkbox>`);
    await el.updateComplete;
    expect(el.getAttribute('aria-disabled')).to.equal('true');
  });

  it('sets aria-invalid when required and unchecked, clears after checking', async () => {
    const el = await fixture(html`<wje-checkbox required>Label</wje-checkbox>`);
    await el.updateComplete;
    expect(el.getAttribute('aria-invalid')).to.equal('true');

    el.checked = true;
    await el.updateComplete;
    expect(el.getAttribute('aria-invalid')).to.equal('false');
  });

  it('sets aria-label from label attribute', async () => {
    const el = await fixture(html`<wje-checkbox label="Agree">Label</wje-checkbox>`);
    await el.updateComplete;
    expect(el.getAttribute('aria-label')).to.equal('Agree');
  });
});
