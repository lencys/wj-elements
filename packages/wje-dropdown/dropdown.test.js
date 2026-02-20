import '../../dist/wje-element.js';
import { expect, fixture, html } from '@open-wc/testing';
import '../../dist/wje-button.js';
import '../../dist/wje-dropdown.js';
import '../../dist/wje-menu.js';
import '../../dist/wje-menu-item.js';
import '../../dist/wje-popup.js';

describe('<wje-dropdown>', () => {
  it('sets aria-haspopup="menu" when menu is present', async () => {
    const el = await fixture(html`
      <wje-dropdown>
        <wje-button slot="trigger">Open</wje-button>
        <wje-menu>
          <wje-menu-item>Item</wje-menu-item>
        </wje-menu>
      </wje-dropdown>
    `);
    await el.updateComplete;
    el.syncAria();
    const trigger = el.querySelector('[slot="trigger"]');
    expect(trigger.getAttribute('aria-haspopup')).to.equal('menu');
  });

  it('sets aria-haspopup="dialog" when no menu is present', async () => {
    const el = await fixture(html`
      <wje-dropdown>
        <wje-button slot="trigger">Open</wje-button>
        <div>Content</div>
      </wje-dropdown>
    `);
    await el.updateComplete;
    el.syncAria();
    const trigger = el.querySelector('[slot="trigger"]');
    expect(trigger.getAttribute('aria-haspopup')).to.equal('dialog');
  });

  it('sets aria-expanded and aria-controls on trigger', async () => {
    const el = await fixture(html`
      <wje-dropdown>
        <wje-button slot="trigger">Open</wje-button>
        <div>Content</div>
      </wje-dropdown>
    `);
    await el.updateComplete;
    el.classList.add('active');
    el.syncAria();
    const trigger = el.querySelector('[slot="trigger"]');
    const controls = trigger.getAttribute('aria-controls');
    expect(trigger.getAttribute('aria-expanded')).to.equal('true');
    expect(controls).to.match(/^wje-dropdown-popup-\d+$/);

    el.classList.remove('active');
    el.syncAria();
    expect(trigger.getAttribute('aria-expanded')).to.equal('false');
  });
});
