import '../../dist/wje-element.js';
import { expect, fixture, html } from '@open-wc/testing';
import '../../dist/wje-img-comparer.js';

describe('<wje-img-comparer>', () => {
  it('renders native structure and divider', async () => {
    const el = await fixture(html`
      <wje-img-comparer>
        <wje-img slot="before" src="before.png" alt="Before"></wje-img>
        <wje-img slot="after" src="after.png" alt="After"></wje-img>
      </wje-img-comparer>
    `);

    const native = el.context.querySelector('.native-split-view');
    expect(native).to.exist;
    const divider = el.context.querySelector('[part="divider"]');
    expect(divider).to.exist;
  });

  it('sets role on host and separator role on divider', async () => {
    const el = await fixture(html`<wje-img-comparer></wje-img-comparer>`);
    await el.updateComplete;
    const divider = el.context.querySelector('[part="divider"]');
    expect(el.getAttribute('role')).to.equal('group');
    expect(divider.getAttribute('role')).to.equal('separator');
    expect(divider.getAttribute('tabindex')).to.equal('0');
    expect(divider.getAttribute('aria-orientation')).to.equal('horizontal');
  });
});
