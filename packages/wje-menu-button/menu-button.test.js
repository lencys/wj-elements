import '../../dist/wje-element.js';
import { expect, fixture, html } from '@open-wc/testing';
import '../../dist/wje-menu-button.js';

describe('<wje-menu-button>', () => {
  it('renders slot and sets role button on host', async () => {
    const el = await fixture(html`<wje-menu-button>Menu</wje-menu-button>`);
    await el.updateComplete;
    expect(el.getAttribute('role')).to.equal('button');
    const slot = el.context.querySelector('slot');
    expect(slot).to.exist;
  });
});
