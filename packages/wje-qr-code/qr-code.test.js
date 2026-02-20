import '../../dist/wje-element.js';
import { aTimeout, expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import '../../dist/wje-qr-code.js';

describe('<wje-qr-code>', () => {
  it('renders canvas and top/bottom slots', async () => {
    const el = await fixture(html`<wje-qr-code value="https://example.com"></wje-qr-code>`);
    await el.updateComplete;
    await aTimeout(20);

    expect(el.shadowRoot.querySelector('canvas')).to.exist;
    expect(el.shadowRoot.querySelector('slot[name="top"]')).to.exist;
    expect(el.shadowRoot.querySelector('slot[name="bottom"]')).to.exist;
  });

  it('updates canvas size when size attribute changes', async () => {
    const el = await fixture(html`<wje-qr-code value="https://example.com" size="120"></wje-qr-code>`);
    await el.updateComplete;
    await aTimeout(20);

    el.setAttribute('size', '220');
    await aTimeout(30);

    const canvas = el.shadowRoot.querySelector('canvas');
    expect(canvas.width).to.equal(220);
    expect(canvas.height).to.equal(220);
  });

  it('re-renders when camelCase alpha attribute is updated', async () => {
    const el = await fixture(html`<wje-qr-code value="https://example.com"></wje-qr-code>`);
    await el.updateComplete;
    await aTimeout(20);

    const spy = sinon.spy(el, 'afterDraw');
    el.setAttribute('backgroundAlpha', '0.35');
    await aTimeout(30);

    expect(spy.called).to.be.true;
    spy.restore();
  });

  it('re-renders when kebab-case alpha attribute is updated', async () => {
    const el = await fixture(html`<wje-qr-code value="https://example.com"></wje-qr-code>`);
    await el.updateComplete;
    await aTimeout(20);

    const spy = sinon.spy(el, 'afterDraw');
    el.setAttribute('foreground-alpha', '0.45');
    await aTimeout(30);

    expect(spy.called).to.be.true;
    spy.restore();
  });
});
