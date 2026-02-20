import '../../dist/wje-element.js';
import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import '../../dist/wje-input-file.js';

describe('<wje-input-file>', () => {
  it('renders native structure', async () => {
    const el = await fixture(html`<wje-input-file></wje-input-file>`);

    const native = el.context.querySelector('[part="native"]');
    expect(native).to.exist;
    const fileInput = native.querySelector('input[type="file"]');
    expect(fileInput).to.exist;
    expect(fileInput.getAttribute('aria-hidden')).to.equal('true');
  });

  it('sets role group on host', async () => {
    const el = await fixture(html`<wje-input-file></wje-input-file>`);
    await el.updateComplete;
    expect(el.getAttribute('role')).to.equal('group');
  });

  it('dispatches change event and updates display value', async () => {
    const el = await fixture(html`<wje-input-file></wje-input-file>`);

    const native = el.context.querySelector('[part="native"]');
    const fileInput = native.querySelector('input[type="file"]');
    const input = native.querySelector('wje-input');

    const f1 = new File(['a'], 'a.txt', { type: 'text/plain' });
    const f2 = new File(['b'], 'b.txt', { type: 'text/plain' });

    Object.defineProperty(fileInput, 'files', {
      value: [f1, f2],
      configurable: true,
    });

    const evPromise = oneEvent(el, 'wje-input-file:change');
    fileInput.dispatchEvent(new Event('change'));
    const ev = await evPromise;

    expect(ev.detail.files).to.have.length(2);
    expect(input.value).to.equal('a.txt, b.txt');
  });
});
