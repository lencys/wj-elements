import '../../dist/wje-element.js';
import { expect, fixture, html } from '@open-wc/testing';
import '../../dist/wje-status.js';

describe('<wje-status>', () => {
  it('renders native structure and slots', async () => {
    const el = await fixture(html`
      <wje-status>
        <span slot="start">Start</span>
        Status
        <span slot="end">End</span>
      </wje-status>
    `);

    const native = el.context.querySelector('[part="native"]');
    expect(native).to.exist;
    expect(el.context.querySelector('[part="bullet"]')).to.exist;
    expect(el.context.querySelector('slot[name="start"]')).to.exist;
    expect(el.context.querySelector('slot[name="end"]')).to.exist;
  });

  it('sets role status on host', async () => {
    const el = await fixture(html`<wje-status>Online</wje-status>`);
    await el.updateComplete;
    expect(el.getAttribute('role')).to.equal('status');
  });
});
