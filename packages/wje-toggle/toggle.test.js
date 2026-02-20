import '../../dist/wje-element.js';
import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import '../../dist/wje-toggle.js';

describe('<wje-toggle>', () => {
  it('renders základnú štruktúru', async () => {
    const el = await fixture(html`<wje-toggle>Label</wje-toggle>`);
    await el.updateComplete;

    const native = el.shadowRoot.querySelector('.native-toggle');
    const input = el.shadowRoot.querySelector('input[type="checkbox"]');
    const label = el.shadowRoot.querySelector('label');

    expect(native).to.exist;
    expect(input).to.exist;
    expect(label).to.exist;

    expect(el.checked).to.be.false;
    expect(el.value).to.equal('on');
    expect(input.disabled).to.be.false;
    expect(input.required).to.be.false;
  });

  it('reaguje na checked, disabled a required atribúty', async () => {
    const el = await fixture(
      html`<wje-toggle checked disabled required>Label</wje-toggle>`
    );
    await el.updateComplete;

    const input = el.shadowRoot.querySelector('input[type="checkbox"]');

    expect(el.checked).to.be.true;
    expect(input.checked).to.be.true;
    expect(input.disabled).to.be.true;
    expect(input.required).to.be.true;
  });

  it('synchronizuje checked property a atribút', async () => {
    const el = await fixture(html`<wje-toggle>Label</wje-toggle>`);
    await el.updateComplete;

    const input = el.shadowRoot.querySelector('input[type="checkbox"]');

    el.checked = true;
    await el.updateComplete;
    expect(el.hasAttribute('checked')).to.be.true;
    expect(input.checked).to.be.true;

    el.checked = false;
    await el.updateComplete;
    expect(el.hasAttribute('checked')).to.be.false;
    expect(input.checked).to.be.false;
  });

  it('aktualizuje value a prenáša ju do input.value', async () => {
    const el = await fixture(html`<wje-toggle checked>Label</wje-toggle>`);
    await el.updateComplete;

    const input = el.shadowRoot.querySelector('input[type="checkbox"]');

    expect(el.value).to.equal('on');

    el.value = 'custom-value';
    await el.updateComplete;

    expect(el.value).to.equal('custom-value');
    expect(input.value).to.equal('custom-value');
  });

  it('odošle hodnotu do FormData iba ak je checked', async () => {
    const formChecked = await fixture(html`
      <form>
        <wje-toggle name="agree" value="yes" checked>Label</wje-toggle>
      </form>
    `);
    const fdChecked = new FormData(formChecked);
    expect(fdChecked.get('agree')).to.equal('yes');

    const formUnchecked = await fixture(html`
      <form>
        <wje-toggle name="agree" value="yes">Label</wje-toggle>
      </form>
    `);
    const fdUnchecked = new FormData(formUnchecked);
    expect(fdUnchecked.get('agree')).to.equal(null);
  });

  it('vyvolá wje-toggle:input pri input evente', async () => {
    const el = await fixture(html`<wje-toggle>Label</wje-toggle>`);
    await el.updateComplete;

    const spy = sinon.spy();
    el.addEventListener('wje-toggle:input', spy);

    const input = el.shadowRoot.querySelector('input[type="checkbox"]');
    input.checked = true;
    input.dispatchEvent(new Event('input', { bubbles: true, composed: true }));

    expect(spy.calledOnce).to.be.true;
    expect(el.checked).to.be.true;
  });

  it('vyvolá wje-toggle:change pri change evente', async () => {
    const el = await fixture(html`<wje-toggle>Label</wje-toggle>`);
    await el.updateComplete;

    const spy = sinon.spy();
    el.addEventListener('wje-toggle:change', spy);

    const input = el.shadowRoot.querySelector('input[type="checkbox"]');
    input.checked = true;
    input.dispatchEvent(new Event('change', { bubbles: true, composed: true }));

    expect(spy.calledOnce).to.be.true;
  });

  it('správne reaguje na placement="end"', async () => {
    const el = await fixture(
      html`<wje-toggle placement="end">Label</wje-toggle>`
    );
    await el.updateComplete;

    const native = el.shadowRoot.querySelector('.native-toggle');
    const label = el.shadowRoot.querySelector('label');

    expect(native.classList.contains('end')).to.be.true;

    const firstChild = label.firstElementChild;
    const secondChild = label.lastElementChild;

    expect(firstChild.classList.contains('text')).to.be.true;
    expect(secondChild.classList.contains('label-wrapper')).to.be.true;
  });

  it('customErrorDisplay a validateOnChange vrátia true, ak je atribút prítomný', async () => {
    const el = await fixture(
      html`<wje-toggle custom-error-display validate-on-change>
        Label
      </wje-toggle>`
    );
    await el.updateComplete;

    expect(el.customErrorDisplay).to.be.true;
    expect(el.validateOnChange).to.be.true;
  });

  it('nastaví ARIA atribúty na hoste', async () => {
    const el = await fixture(
      html`<wje-toggle checked disabled required>Label</wje-toggle>`
    );
    await el.updateComplete;

    expect(el.getAttribute('role')).to.equal('switch');
    expect(el.getAttribute('aria-checked')).to.equal('true');
    expect(el.getAttribute('aria-disabled')).to.equal('true');
    expect(el.getAttribute('aria-required')).to.equal('true');
  });

  it('disabled toggle nereaguje na input event a nemení checked', async () => {
    const el = await fixture(
      html`<wje-toggle disabled checked>Label</wje-toggle>`
    );
    await el.updateComplete;

    const input = el.shadowRoot.querySelector('input[type="checkbox"]');

    input.checked = false;
    input.dispatchEvent(new Event('input', { bubbles: true, composed: true }));

    expect(el.checked).to.be.true;
    expect(el.hasAttribute('checked')).to.be.true;
  });
});
