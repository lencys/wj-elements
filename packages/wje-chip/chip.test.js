import '../../dist/wje-element.js';
import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import '../../dist/wje-chip.js';

describe('<wje-chip>', () => {
  it('renders default chip with content and default color', async () => {
    const el = await fixture(html`<wje-chip>Default</wje-chip>`);
    await el.updateComplete;

    const native = el.context.querySelector('[part="native"]');

    expect(native).to.exist;
    expect(native.classList.contains('native-chip')).to.be.true;
    expect(native.classList.contains('wje-color-default')).to.be.true;
    expect(native.classList.contains('wje-color')).to.be.true;
    expect(el.textContent.trim()).to.equal('Default');
    expect(el.context.querySelector('[part="remove"]')).to.not.exist;
  });

  it('maps round property to round attribute', async () => {
    const el = await fixture(html`<wje-chip>Round</wje-chip>`);
    await el.updateComplete;

    expect(el.hasAttribute('round')).to.be.false;

    el.round = true;
    await el.updateComplete;
    expect(el.hasAttribute('round')).to.be.true;

    el.round = false;
    await el.updateComplete;
    expect(el.hasAttribute('round')).to.be.false;
  });

  it('renders remove button when removable is set', async () => {
    const el = await fixture(html`<wje-chip removable>Removable</wje-chip>`);
    await el.updateComplete;

    const removeBtn = el.context.querySelector('[part="remove"]');
    expect(removeBtn).to.exist;
    expect(removeBtn.getAttribute('fill')).to.equal('link');
    expect(removeBtn.getAttribute('color')).to.equal('default');
  });

  it('uses chip color on native and remove button', async () => {
    const el = await fixture(html`<wje-chip color="primary" removable>Colored</wje-chip>`);
    await el.updateComplete;

    const native = el.context.querySelector('[part="native"]');
    expect(native.classList.contains('wje-color-primary')).to.be.true;
    expect(native.classList.contains('wje-color')).to.be.true;

    const removeBtn = el.context.querySelector('[part="remove"]');
    expect(removeBtn.getAttribute('color')).to.equal('primary');
  });

  it('sets remove icon size according to chip size="small"', async () => {
    const el = await fixture(html`<wje-chip size="small" removable>Small</wje-chip>`);
    await el.updateComplete;

    const removeBtn = el.context.querySelector('[part="remove"]');
    const icon = removeBtn.querySelector('wje-icon');

    expect(icon).to.exist;
    expect(icon.getAttribute('size')).to.equal('small');
  });

  it('uses default icon size when size is not set', async () => {
    const el = await fixture(html`<wje-chip removable>Default size</wje-chip>`);
    await el.updateComplete;

    const removeBtn = el.context.querySelector('[part="remove"]');
    const icon = removeBtn.querySelector('wje-icon');

    expect(icon).to.exist;
    expect(icon.hasAttribute('size')).to.be.false;
  });

  it('marks end slot as having content when slot="end" is used', async () => {
    const el = await fixture(html`
      <wje-chip>
        Default
        <div slot="end">End content</div>
      </wje-chip>
    `);
    await el.updateComplete;

    const endSlot = el.context.querySelector('slot[name="end"]');
    expect(endSlot).to.exist;
    expect(endSlot.classList.contains('has-content')).to.be.true;
  });

  it('dispatches "wje:chip-remove" event when remove button is clicked', async () => {
    const el = await fixture(html`<wje-chip removable>Removable</wje-chip>`);
    await el.updateComplete;

    const removeBtn = el.context.querySelector('[part="remove"]');
    expect(removeBtn).to.exist;

    const eventPromise = new Promise(resolve =>
      el.addEventListener('wje:chip-remove', e => resolve(e))
    );
    removeBtn.click();

    const ev = await eventPromise;
    expect(ev).to.exist;
    expect(ev.type).to.equal('wje:chip-remove');
  });

  it('adds wje-disabled class when disabled', async () => {
    const el = await fixture(html`<wje-chip disabled>Disabled</wje-chip>`);
    await el.updateComplete;

    expect(el.classList.contains('wje-disabled')).to.be.true;
  });

  it('sets ARIA role on host and aria-label when label is provided', async () => {
    const el = await fixture(html`<wje-chip label="Filter">Filter</wje-chip>`);
    await el.updateComplete;

    expect(el.getAttribute('role')).to.equal('status');
    expect(el.getAttribute('aria-label')).to.equal('Filter');
  });

  it('sets ARIA role button and disabled state when removable', async () => {
    const el = await fixture(html`<wje-chip removable disabled>Removable</wje-chip>`);
    await el.updateComplete;

    expect(el.getAttribute('role')).to.equal('button');
    expect(el.getAttribute('aria-disabled')).to.equal('true');

    const removeBtn = el.context.querySelector('[part="remove"]');
    expect(removeBtn.getAttribute('aria-label')).to.equal('Remove');
  });
});
