import '../../dist/wje-element.js';
import { expect, fixture, html } from '@open-wc/testing';
import '../../dist/wje-popup.js';
import '../../dist/wje-tooltip.js';

describe('<wje-tooltip>', () => {
  it('sets role tooltip on host and aria-describedby on anchor', async () => {
    const el = await fixture(html`
      <wje-tooltip content="Help">
        <button slot="anchor">Hover</button>
      </wje-tooltip>
    `);
    await el.updateComplete;
    const anchor = el.querySelector('[slot="anchor"]');
    expect(el.getAttribute('role')).to.equal('tooltip');
    expect(anchor.getAttribute('aria-describedby')).to.equal(el.id);
  });

  it('uses existing id when provided', async () => {
    const el = await fixture(html`
      <wje-tooltip id="custom-tooltip" content="Help">
        <button slot="anchor">Hover</button>
      </wje-tooltip>
    `);
    await el.updateComplete;
    const anchor = el.querySelector('[slot="anchor"]');
    expect(anchor.getAttribute('aria-describedby')).to.equal('custom-tooltip');
  });

  it('uses default slot as anchor when no slot is provided', async () => {
    const el = await fixture(html`
      <wje-tooltip content="Help">
        <button>Hover</button>
      </wje-tooltip>
    `);
    await el.updateComplete;
    const anchor = el.querySelector('button');
    expect(anchor.getAttribute('slot')).to.equal('anchor');
    expect(anchor.getAttribute('aria-describedby')).to.equal(el.id);
  });
});
