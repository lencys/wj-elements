import '../../dist/wje-element.js';
import { expect, fixture, html } from '@open-wc/testing';
import '../../dist/wje-dialog.js';

describe('<wje-dialog>', () => {
  it('sets role dialog, aria-modal and aria-describedby on host', async () => {
    const el = await fixture(html`<wje-dialog headline="Title"></wje-dialog>`);
    await el.updateComplete;
    el.htmlDialogBody(el.dialog);
    expect(el.getAttribute('role')).to.equal('dialog');
    expect(el.getAttribute('aria-modal')).to.equal('true');
    const describedBy = el.getAttribute('aria-describedby');
    expect(describedBy).to.match(/^wje-dialog-\d+-body$/);
  });

  it('sets aria-labelledby when header is visible', async () => {
    const el = await fixture(html`<wje-dialog headline="Title"></wje-dialog>`);
    await el.updateComplete;
    el.htmlDialogBody(el.dialog);
    const labelledBy = el.getAttribute('aria-labelledby');
    expect(labelledBy).to.match(/^wje-dialog-\d+-header$/);
  });

  it('uses aria-label when header is hidden', async () => {
    const el = await fixture(html`<wje-dialog headline="Title" hidden-header></wje-dialog>`);
    await el.updateComplete;
    el.htmlDialogBody(el.dialog);
    expect(el.getAttribute('aria-labelledby')).to.equal(null);
    expect(el.getAttribute('aria-label')).to.equal('Title');
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
});
