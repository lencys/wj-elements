import '../../dist/wje-element.js';
import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import '../../dist/wje-radio.js';

describe('<wje-radio>', () => {
  it('renders native input and syncs checked', async () => {
    const el = await fixture(html`<wje-radio value="a"></wje-radio>`);
    await el.updateComplete;

    const input = el.context.querySelector('input[type="radio"]');
    expect(input).to.exist;
    expect(input.checked).to.equal(false);

    el.checked = true;
    await el.updateComplete;
    expect(input.checked).to.equal(true);
  });

  it('sets role radio and aria state on host', async () => {
    const el = await fixture(html`<wje-radio value="a" checked disabled></wje-radio>`);
    await el.updateComplete;
    expect(el.getAttribute('role')).to.equal('radio');
    expect(el.getAttribute('aria-checked')).to.equal('true');
    expect(el.getAttribute('aria-disabled')).to.equal('true');
  });

  it('sets input id/name based on value and updates on change', async () => {
    const el = await fixture(html`<wje-radio value="x"></wje-radio>`);
    await el.updateComplete;
    const input = el.context.querySelector('input[type="radio"]');
    expect(input.id).to.equal('x-radio');
    expect(input.name).to.equal('x-radio');

    el.value = 'y';
    await el.updateComplete;
    expect(input.id).to.equal('y-radio');
    expect(input.name).to.equal('y-radio');
  });

  it('updates input.disabled when disabled attribute changes', async () => {
    const el = await fixture(html`<wje-radio value="a"></wje-radio>`);
    await el.updateComplete;
    const input = el.context.querySelector('input[type="radio"]');
    expect(input.disabled).to.equal(false);

    el.disabled = true;
    await el.updateComplete;
    expect(input.disabled).to.equal(true);
  });

  it('dispatches wje-radio:change on input event', async () => {
    const el = await fixture(html`<wje-radio value="a"></wje-radio>`);
    await el.updateComplete;
    const input = el.context.querySelector('input[type="radio"]');

    const evPromise = oneEvent(el, 'wje-radio:change');
    input.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
    const ev = await evPromise;
    expect(ev.type).to.equal('wje-radio:change');
  });
});
