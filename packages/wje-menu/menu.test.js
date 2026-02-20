import '../../dist/wje-element.js';
import { expect, fixture, html } from '@open-wc/testing';
import '../../dist/wje-menu.js';

describe('<wje-menu>', () => {
  it('sets role menu on host', async () => {
    const el = await fixture(html`<wje-menu></wje-menu>`);
    await el.updateComplete;
    expect(el.getAttribute('role')).to.equal('menu');
  });

  it('adds collapse class when collapse attribute is set', async () => {
    const el = await fixture(html`<wje-menu collapse></wje-menu>`);
    await el.updateComplete;
    expect(el.classList.contains('wje-menu-collapse')).to.equal(true);
  });

  it('removes collapse class when collapse attribute is not set', async () => {
    const el = await fixture(html`<wje-menu></wje-menu>`);
    await el.updateComplete;
    expect(el.classList.contains('wje-menu-collapse')).to.equal(false);
  });

  it('calls refresh on child custom elements after draw', async () => {
    const el = await fixture(html`<wje-menu></wje-menu>`);
    const child = document.createElement('x-test-child');
    child.refresh = () => {
      child.refreshed = true;
    };
    el.appendChild(child);
    await el.updateComplete;
    el.afterDraw();
    expect(child.refreshed).to.equal(true);
  });
});
