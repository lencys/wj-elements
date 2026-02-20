import '../../dist/wje-element.js';
import { expect, fixture, html } from '@open-wc/testing';
import '../../dist/wje-img.js';

describe('<wje-img>', () => {
  let lastObserver = null;

  class TestIntersectionObserver {
    constructor(cb) {
      this.cb = cb;
      lastObserver = this;
    }
    observe(target) {
      this.target = target;
    }
    unobserve() {}
    disconnect() {}
  }

  const OriginalIntersectionObserver = window.IntersectionObserver;

  beforeEach(() => {
    window.IntersectionObserver = TestIntersectionObserver;
    lastObserver = null;
  });

  afterEach(() => {
    window.IntersectionObserver = OriginalIntersectionObserver;
    lastObserver = null;
  });

  it('renders native img element', async () => {
    const el = await fixture(html`<wje-img src="test.png" alt="Test"></wje-img>`);
    const native = el.context.querySelector('img');
    expect(native).to.exist;
    expect(native.getAttribute('alt')).to.equal('Test');
  });

  it('sets role img and aria-label on host from alt', async () => {
    const el = await fixture(html`<wje-img src="test.png" alt="Sample"></wje-img>`);
    await el.updateComplete;
    expect(el.getAttribute('role')).to.equal('img');
    expect(el.getAttribute('aria-label')).to.equal('Sample');
  });

  it('updates native alt and aria-label when alt changes', async () => {
    const el = await fixture(html`<wje-img src="test.png" alt="Old"></wje-img>`);
    await el.updateComplete;

    el.alt = 'New';
    await new Promise((resolve) => setTimeout(resolve, 0));

    const native = el.context.querySelector('img');
    expect(native.getAttribute('alt')).to.equal('New');
    expect(el.getAttribute('aria-label')).to.equal('New');
  });

  it('keeps loader src until image enters viewport', async () => {
    const el = await fixture(
      html`<wje-img src="test.png" loader="loader.png" alt="Test"></wje-img>`
    );
    const native = el.context.querySelector('img');
    expect(native).to.exist;

    // Not intersecting -> still loader
    lastObserver.cb([{ isIntersecting: false, target: native }], lastObserver);
    expect(native.getAttribute('src')).to.equal('loader.png');

    // Intersecting -> swap to real src
    lastObserver.cb([{ isIntersecting: true, target: native }], lastObserver);
    expect(native.getAttribute('src')).to.equal('test.png');
  });
});
