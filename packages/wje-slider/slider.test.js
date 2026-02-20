import '../../dist/wje-element.js';
import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import '../../dist/wje-slider.js';

describe('<wje-slider>', () => {
  it('renders range input and sets role slider on host', async () => {
    const el = await fixture(html`<wje-slider></wje-slider>`);
    await el.updateComplete;

    const input = el.context.querySelector('input[type="range"]');
    expect(input).to.exist;
    expect(el.getAttribute('role')).to.equal('slider');
  });

  it('uses default min/max/step/value and aria values', async () => {
    const el = await fixture(html`<wje-slider></wje-slider>`);
    await el.updateComplete;
    expect(el.getAttribute('aria-valuemin')).to.equal('0');
    expect(el.getAttribute('aria-valuemax')).to.equal('100');
    expect(el.getAttribute('aria-valuenow')).to.equal('0');
  });

  it('syncs aria-valuenow when value changes', async () => {
    const el = await fixture(html`<wje-slider min="0" max="10" value="2"></wje-slider>`);
    await el.updateComplete;

    expect(el.getAttribute('aria-valuenow')).to.equal('2');
    el.value = 7;
    await el.updateComplete;
    expect(el.getAttribute('aria-valuenow')).to.equal('7');
  });

  it('sets aria-valuemin and aria-valuemax from attributes', async () => {
    const el = await fixture(html`<wje-slider min="5" max="15"></wje-slider>`);
    await el.updateComplete;
    expect(el.getAttribute('aria-valuemin')).to.equal('5');
    expect(el.getAttribute('aria-valuemax')).to.equal('15');
  });

  it('propagates min/max/step to the input element', async () => {
    const el = await fixture(html`<wje-slider min="2" max="8" step="2"></wje-slider>`);
    await el.updateComplete;
    const input = el.context.querySelector('input[type="range"]');
    expect(input.min).to.equal('2');
    expect(input.max).to.equal('8');
    expect(input.step).to.equal('2');
  });

  it('updates input value and background on value change', async () => {
    const el = await fixture(html`<wje-slider min="0" max="10" value="0"></wje-slider>`);
    await el.updateComplete;
    const input = el.context.querySelector('input[type="range"]');

    el.value = 5;
    await el.updateComplete;
    expect(input.value).to.equal('5');
    expect(input.style.backgroundSize).to.equal('50% 100%');
  });

  it('honors disabled attribute and aria-disabled', async () => {
    const el = await fixture(html`<wje-slider disabled></wje-slider>`);
    await el.updateComplete;
    const input = el.context.querySelector('input[type="range"]');
    expect(input.disabled).to.be.true;
    expect(el.getAttribute('aria-disabled')).to.equal('true');
  });

  it('shows bubble output when bubble is set and updates value', async () => {
    const el = await fixture(html`<wje-slider bubble value="3"></wje-slider>`);
    await el.updateComplete;
    const output = el.context.querySelector('output');
    expect(output.hasAttribute('hidden')).to.equal(false);
    expect(output.textContent.trim()).to.equal('3');

    el.value = 4;
    await el.updateComplete;
    expect(output.textContent.trim()).to.equal('4');
  });

  it('fires init, move, and change events from input', async () => {
    const el = await fixture(html`<wje-slider value="1"></wje-slider>`);
    await el.updateComplete;
    const input = el.context.querySelector('input[type="range"]');

    const initPromise = oneEvent(input, 'wje-slider:init');
    el.afterDraw();
    const initEvent = await initPromise;
    expect(initEvent.detail.value).to.equal('1');

    input.value = '2';
    const moveEventPromise = oneEvent(input, 'wje-slider:move');
    input.dispatchEvent(new Event('input', { bubbles: true }));
    const moveEvent = await moveEventPromise;
    expect(moveEvent.detail.value).to.equal('2');

    const changeEventPromise = oneEvent(input, 'wje-slider:change');
    input.dispatchEvent(new Event('change', { bubbles: true }));
    const changeEvent = await changeEventPromise;
    expect(changeEvent.detail.value).to.equal('2');
  });
});
