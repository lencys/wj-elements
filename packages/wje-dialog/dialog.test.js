import '../../dist/wje-element.js';
import { aTimeout, expect, fixture, html } from '@open-wc/testing';
import '../../dist/wje-dialog.js';

describe('<wje-dialog>', () => {
  it('sets role dialog and aria-describedby on native dialog only', async () => {
    const el = await fixture(html`<wje-dialog headline="Title"></wje-dialog>`);
    await el.updateComplete;
    el.htmlDialogBody(el.dialog);
    expect(el.hasAttribute('role')).to.equal(false);
    expect(el.hasAttribute('aria-describedby')).to.equal(false);

    const describedBy = el.dialog.getAttribute('aria-describedby');
    expect(el.dialog.getAttribute('role')).to.equal('dialog');
    expect(describedBy).to.match(/^wje-dialog-\d+-body$/);
  });

  it('sets aria-labelledby on native dialog when header is visible', async () => {
    const el = await fixture(html`<wje-dialog headline="Title"></wje-dialog>`);
    await el.updateComplete;
    el.htmlDialogBody(el.dialog);
    expect(el.hasAttribute('aria-labelledby')).to.equal(false);
    const labelledBy = el.dialog.getAttribute('aria-labelledby');
    expect(labelledBy).to.match(/^wje-dialog-\d+-header$/);
  });

  it('uses aria-label on native dialog when header is hidden', async () => {
    const el = await fixture(html`<wje-dialog headline="Title" hidden-header></wje-dialog>`);
    await el.updateComplete;
    el.htmlDialogBody(el.dialog);
    expect(el.hasAttribute('aria-labelledby')).to.equal(false);
    expect(el.hasAttribute('aria-label')).to.equal(false);
    expect(el.dialog.getAttribute('aria-labelledby')).to.equal(null);
    expect(el.dialog.getAttribute('aria-label')).to.equal('Title');
  });

  it('sets aria-label on close button', async () => {
    const el = await fixture(html`<wje-dialog headline="Title"></wje-dialog>`);
    await el.updateComplete;
    el.htmlDialogBody(el.dialog);
    const closeBtn = el.shadowRoot.querySelector('[part="close"]');
    expect(closeBtn).to.exist;
    expect(closeBtn.getAttribute('aria-label')).to.equal('Close dialog');
  });

  it('hides footer when no footer slot content', async () => {
    const el = await fixture(html`<wje-dialog headline="Title"></wje-dialog>`);
    await el.updateComplete;
    el.htmlDialogBody(el.dialog);
    el.updateHasFooter();
    const footerEl = el.shadowRoot.querySelector('.dialog-footer');
    expect(footerEl.hasAttribute('hidden')).to.equal(true);
    expect(el.hasAttribute('has-footer')).to.equal(false);
  });

  it('shows footer when footer slot has content', async () => {
    const el = await fixture(html`
      <wje-dialog headline="Title">
        <div slot="footer">Actions</div>
      </wje-dialog>
    `);
    await el.updateComplete;
    el.htmlDialogBody(el.dialog);
    el.updateHasFooter();
    const footerEl = el.shadowRoot.querySelector('.dialog-footer');
    expect(footerEl.hasAttribute('hidden')).to.equal(false);
    expect(el.hasAttribute('has-footer')).to.equal(true);
  });

  it('keeps footer hidden when hidden-footer is set', async () => {
    const el = await fixture(html`<wje-dialog headline="Title" hidden-footer></wje-dialog>`);
    await el.updateComplete;
    el.htmlDialogBody(el.dialog);
    el.updateHasFooter();
    const footerEl = el.shadowRoot.querySelector('.dialog-footer');
    expect(footerEl).to.equal(null);
    expect(el.hasAttribute('has-footer')).to.equal(false);
  });

  it('mirrors dialog open state to host open attribute', async () => {
    const el = await fixture(html`<wje-dialog headline="Title"></wje-dialog>`);
    await el.updateComplete;

    el.onOpen();
    await aTimeout(0);

    expect(el.dialog.open).to.equal(true);
    expect(el.dialog.getAttribute('aria-modal')).to.equal('true');
    expect(el.hasAttribute('open')).to.equal(true);

    el.close();
    await aTimeout(0);

    expect(el.dialog.open).to.equal(false);
    expect(el.dialog.hasAttribute('aria-modal')).to.equal(false);
    expect(el.hasAttribute('open')).to.equal(false);
  });

  it('removes host open attribute when dialog close event is fired', async () => {
    const el = await fixture(html`<wje-dialog headline="Title"></wje-dialog>`);
    await el.updateComplete;

    el.onOpen();
    await aTimeout(0);

    expect(el.hasAttribute('open')).to.equal(true);
    el.dialog.dispatchEvent(new Event('close'));
    expect(el.hasAttribute('open')).to.equal(false);
  });

  it('ignores close when native dialog is missing', async () => {
    const el = await fixture(html`<wje-dialog headline="Title"></wje-dialog>`);
    await el.updateComplete;

    el.dialog = undefined;
    expect(() => el.close()).to.not.throw();
    await aTimeout(0);
  });

  it('ignores open when native dialog is missing', async () => {
    const el = await fixture(html`<wje-dialog headline="Title"></wje-dialog>`);
    await el.updateComplete;

    el.dialog = undefined;
    expect(() => el.onOpen()).to.not.throw();
    await aTimeout(0);
  });
});
