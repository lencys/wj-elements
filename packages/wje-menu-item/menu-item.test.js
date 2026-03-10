import '../../dist/wje-element.js';
import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import '../../dist/wje-menu.js';
import '../../dist/wje-menu-item.js';
import '../../dist/wje-popup.js';
import '../../dist/wje-tooltip.js';

describe('<wje-menu-item>', () => {
  it('sets role menuitem and aria-disabled when disabled', async () => {
    const el = await fixture(html`<wje-menu-item disabled>Item</wje-menu-item>`);
    await el.updateComplete;
    expect(el.getAttribute('role')).to.equal('menuitem');
    expect(el.getAttribute('aria-disabled')).to.equal('true');
  });

  it('does not set aria-haspopup or aria-expanded when no submenu', async () => {
    const el = await fixture(html`<wje-menu-item>Item</wje-menu-item>`);
    await el.updateComplete;
    el.syncAria();
    expect(el.getAttribute('aria-haspopup')).to.equal(null);
    expect(el.getAttribute('aria-expanded')).to.equal(null);
  });

  it('sets aria-haspopup and aria-expanded when submenu exists', async () => {
    const el = await fixture(html`
      <wje-menu-item>
        Item
        <wje-menu slot="submenu">
          <wje-menu-item>Child</wje-menu-item>
        </wje-menu>
      </wje-menu-item>
    `);
    await el.updateComplete;
    el.syncAria();
    expect(el.getAttribute('aria-haspopup')).to.equal('menu');
    expect(el.getAttribute('aria-expanded')).to.equal('false');

    el.showSubmenu();
    expect(el.getAttribute('aria-expanded')).to.equal('true');

    el.hideSubmenu();
    expect(el.getAttribute('aria-expanded')).to.equal('false');
  });

  it('adds expanded classes on showSubmenu and removes on hideSubmenu', async () => {
    const el = await fixture(html`
      <wje-menu-item>
        Item
        <wje-menu slot="submenu"></wje-menu>
      </wje-menu-item>
    `);
    await el.updateComplete;
    el.showSubmenu();
    expect(el.classList.contains('expanded-submenu')).to.equal(true);
    expect(el.native.classList.contains('expanded-submenu')).to.equal(true);
    el.hideSubmenu();
    expect(el.classList.contains('expanded-submenu')).to.equal(false);
    expect(el.native.classList.contains('expanded-submenu')).to.equal(false);
  });

  it('toggles active attribute on submenu via submenuToggle', async () => {
    const el = await fixture(html`
      <wje-menu-item>
        Item
        <wje-menu slot="submenu"></wje-menu>
      </wje-menu-item>
    `);
    await el.updateComplete;
    const submenu = el.submenu.assignedElements({ flatten: true })[0];
    el.submenuToggle({ target: el });
    expect(submenu.hasAttribute('active')).to.equal(true);
    el.submenuToggle({ target: el });
    expect(submenu.hasAttribute('active')).to.equal(false);
  });

  it('activates and deactivates submenu', async () => {
    const el = await fixture(html`
      <wje-menu-item>
        Item
        <wje-menu slot="submenu"></wje-menu>
      </wje-menu-item>
    `);
    await el.updateComplete;
    const submenu = el.submenu.assignedElements({ flatten: true })[0];
    el.activateSubmenu();
    expect(submenu.hasAttribute('active')).to.equal(true);
    el.deactivateSubmenu();
    expect(submenu.hasAttribute('active')).to.equal(false);
  });

  it('renders submenu in popup when context variant is used', async () => {
    const el = await fixture(html`
      <wje-menu-item>
        Item
        <wje-menu slot="submenu" variant="context"></wje-menu>
      </wje-menu-item>
    `);
    await el.updateComplete;
    expect(el.popup).to.exist;
  });

  it('dispatches wje-menu-item:click on leaf item click', async () => {
    const el = await fixture(html`<wje-menu-item>Item</wje-menu-item>`);
    await el.updateComplete;
    const evPromise = oneEvent(el, 'wje-menu-item:click');
    el.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }));
    await evPromise;
  });

  it('does not dispatch click event when disabled', async () => {
    const el = await fixture(html`<wje-menu-item disabled>Item</wje-menu-item>`);
    await el.updateComplete;
    let fired = false;
    el.addEventListener('wje-menu-item:click', () => {
      fired = true;
    });
    el.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }));
    expect(fired).to.equal(false);
  });

  it('renders tooltip when in collapsed menu without submenu', async () => {
    const el = await fixture(html`
      <wje-menu collapse>
        <wje-menu-item>Item</wje-menu-item>
      </wje-menu>
    `);
    await el.updateComplete;
    const item = el.querySelector('wje-menu-item');
    await item.updateComplete;
    const tooltip = item.shadowRoot.querySelector('wje-tooltip');
    expect(tooltip).to.exist;
  });

  it('adds variant class based on context variant', async () => {
    const el = await fixture(html`
      <wje-menu-item>
        Item
        <wje-menu slot="submenu" variant="context"></wje-menu>
      </wje-menu-item>
    `);
    await el.updateComplete;
    expect(el.classList.contains('wje-menu-variant-context')).to.equal(true);
  });

  it('applies active-class to target and ancestors on click', async () => {
    const el = await fixture(html`
      <wje-menu>
        <wje-menu-item active-class="active-item">
          Parent
          <wje-menu slot="submenu">
            <wje-menu-item active-class="active-item">Child</wje-menu-item>
          </wje-menu>
        </wje-menu-item>
      </wje-menu>
    `);
    await el.updateComplete;
    const child = el.querySelectorAll('wje-menu-item')[1];
    child.handleActiveClick({ target: child, composedPath: () => [] });
    expect(child.classList.contains('active-item')).to.equal(true);
    const parent = el.querySelectorAll('wje-menu-item')[0];
    expect(parent.classList.contains('active-item')).to.equal(true);
  });

  it('renders start and end slots in shadow', async () => {
    const el = await fixture(html`
      <wje-menu-item>
        <span slot="start">S</span>
        Item
        <span slot="end">E</span>
      </wje-menu-item>
    `);
    await el.updateComplete;
    const startSlot = el.shadowRoot.querySelector('slot[name="start"]');
    const endSlot = el.shadowRoot.querySelector('slot[name="end"]');
    expect(startSlot).to.exist;
    expect(endSlot).to.exist;
  });
});
