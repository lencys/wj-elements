import '../../dist/wje-element.js';
import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import '../../dist/wje-radio.js';
import '../../dist/wje-radio-group.js';

describe('<wje-radio-group>', () => {
  it('sets role radiogroup and required aria', async () => {
    const el = await fixture(html`
      <wje-radio-group required>
        <wje-radio value="a">A</wje-radio>
        <wje-radio value="b">B</wje-radio>
      </wje-radio-group>
    `);
    await el.updateComplete;
    expect(el.getAttribute('role')).to.equal('radiogroup');
    expect(el.getAttribute('aria-required')).to.equal('true');
  });

  it('sets aria-disabled when disabled and aria-label from label', async () => {
    const el = await fixture(html`
      <wje-radio-group disabled label="Preferences">
        <wje-radio value="a">A</wje-radio>
        <wje-radio value="b">B</wje-radio>
      </wje-radio-group>
    `);
    await el.updateComplete;
    expect(el.getAttribute('aria-disabled')).to.equal('true');
    expect(el.getAttribute('aria-label')).to.equal('Preferences');
  });

  it('checks radio by value and updates group value', async () => {
    const el = await fixture(html`
      <wje-radio-group>
        <wje-radio value="a">A</wje-radio>
        <wje-radio value="b">B</wje-radio>
      </wje-radio-group>
    `);
    const radioB = el.querySelector('wje-radio[value="b"]');
    await radioB.updateComplete;

    el.checkRadio(radioB);
    expect(el.value).to.equal('b');
    expect(radioB.checked).to.equal(true);
  });

  it('updates selection on wje-radio:change', async () => {
    const el = await fixture(html`
      <wje-radio-group>
        <wje-radio value="a">A</wje-radio>
        <wje-radio value="b">B</wje-radio>
      </wje-radio-group>
    `);
    const radioA = el.querySelector('wje-radio[value="a"]');
    await radioA.updateComplete;

    const evPromise = oneEvent(el, 'wje-radio-group:change');
    radioA.dispatchEvent(new CustomEvent('wje-radio:change', { bubbles: true, composed: true }));
    await evPromise;
    expect(el.value).to.equal('a');
  });

  it('updates aria-invalid when invalid changes', async () => {
    const el = await fixture(html`
      <wje-radio-group>
        <wje-radio value="a">A</wje-radio>
      </wje-radio-group>
    `);
    await el.updateComplete;
    el.setAttribute('invalid', '');
    await el.updateComplete;
    expect(el.getAttribute('aria-invalid')).to.equal('true');
  });

  it('sets aria-invalid when required and empty, clears after selection', async () => {
    const el = await fixture(html`
      <wje-radio-group required>
        <wje-radio value="a">A</wje-radio>
        <wje-radio value="b">B</wje-radio>
      </wje-radio-group>
    `);
    await el.updateComplete;
    expect(el.getAttribute('aria-invalid')).to.equal('true');

    const radioB = el.querySelector('wje-radio[value="b"]');
    el.checkRadio(radioB);
    await el.updateComplete;
    expect(el.getAttribute('aria-invalid')).to.equal('false');
  });
});
