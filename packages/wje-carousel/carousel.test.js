import '../../dist/wje-element.js';
import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import '../../dist/wje-carousel.js';
import '../../dist/wje-carousel-item.js';

describe('<wje-carousel>', () => {
  let OriginalIntersectionObserver;
  let OriginalScrollTo;

  class TestIntersectionObserver {
    constructor(cb) {
      this.cb = cb;
    }

    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  }

  beforeEach(() => {
    OriginalIntersectionObserver = window.IntersectionObserver;
    OriginalScrollTo = Element.prototype.scrollTo;

    window.IntersectionObserver = TestIntersectionObserver;
    Element.prototype.scrollTo = function scrollTo(options = {}) {
      this._lastScrollTo = options;
      this.scrollLeft = options.left ?? this.scrollLeft ?? 0;
      this.scrollTop = options.top ?? this.scrollTop ?? 0;
    };
  });

  afterEach(() => {
    window.IntersectionObserver = OriginalIntersectionObserver;
    Element.prototype.scrollTo = OriginalScrollTo;
  });

  it('computes item basis from slide-per-page including visible gaps', async () => {
    const el = await fixture(html`
      <wje-carousel slide-per-page="5">
        <wje-carousel-item><div>1</div></wje-carousel-item>
        <wje-carousel-item><div>2</div></wje-carousel-item>
        <wje-carousel-item><div>3</div></wje-carousel-item>
        <wje-carousel-item><div>4</div></wje-carousel-item>
        <wje-carousel-item><div>5</div></wje-carousel-item>
      </wje-carousel>
    `);

    await el.updateComplete;

    expect(Number(el.slidePerPage)).to.equal(5);
    expect(el.style.getPropertyValue('--wje-carousel-visible-gap-count').trim()).to.equal('4');
    expect(el.style.getPropertyValue('--wje-carousel-size').trim()).to.equal(
      'calc((100% - (4 * var(--wje-carousel-gap, 0.5rem))) / 5)'
    );
    expect(el.style.getPropertyValue('--wje-carousel-item-basis').trim()).to.equal('var(--wje-carousel-size)');
  });

  it('creates only edge clones in classic loop mode', async () => {
    const el = await fixture(html`
      <wje-carousel loop slide-per-page="5">
        <wje-carousel-item><div>1</div></wje-carousel-item>
        <wje-carousel-item><div>2</div></wje-carousel-item>
        <wje-carousel-item><div>3</div></wje-carousel-item>
        <wje-carousel-item><div>4</div></wje-carousel-item>
        <wje-carousel-item><div>5</div></wje-carousel-item>
        <wje-carousel-item><div>6</div></wje-carousel-item>
        <wje-carousel-item><div>7</div></wje-carousel-item>
        <wje-carousel-item><div>8</div></wje-carousel-item>
        <wje-carousel-item><div>9</div></wje-carousel-item>
        <wje-carousel-item><div>10</div></wje-carousel-item>
      </wje-carousel>
    `);

    await el.updateComplete;

    expect(el.querySelectorAll('wje-carousel-item.clone').length).to.equal(2);
  });

  it('creates loop clones for every visible slide in continuous loop mode', async () => {
    const el = await fixture(html`
      <wje-carousel loop continuous-loop slide-per-page="5">
        <wje-carousel-item><div>1</div></wje-carousel-item>
        <wje-carousel-item><div>2</div></wje-carousel-item>
        <wje-carousel-item><div>3</div></wje-carousel-item>
        <wje-carousel-item><div>4</div></wje-carousel-item>
        <wje-carousel-item><div>5</div></wje-carousel-item>
        <wje-carousel-item><div>6</div></wje-carousel-item>
        <wje-carousel-item><div>7</div></wje-carousel-item>
        <wje-carousel-item><div>8</div></wje-carousel-item>
        <wje-carousel-item><div>9</div></wje-carousel-item>
        <wje-carousel-item><div>10</div></wje-carousel-item>
      </wje-carousel>
    `);

    await el.updateComplete;

    expect(el.querySelectorAll('wje-carousel-item.clone').length).to.equal(10);
  });

  it('strips transient hidden visibility from loop clones', async () => {
    const el = await fixture(html`
      <wje-carousel loop slide-per-page="5">
        <wje-carousel-item style="visibility: hidden;"><div>1</div></wje-carousel-item>
        <wje-carousel-item><div>2</div></wje-carousel-item>
        <wje-carousel-item><div>3</div></wje-carousel-item>
        <wje-carousel-item><div>4</div></wje-carousel-item>
        <wje-carousel-item><div>5</div></wje-carousel-item>
      </wje-carousel>
    `);

    await el.updateComplete;

    const clone = el.createLoopClone(el.getSlides()[0]);

    expect(clone.classList.contains('clone')).to.equal(true);
    expect(clone.style.visibility).to.equal('');
    expect(clone.getAttribute('style')).to.equal(null);
  });

  it('tracks the slide closest to the snap start when multiple items are visible', async () => {
    const el = await fixture(html`
      <wje-carousel slide-per-page="5">
        <wje-carousel-item><div>1</div></wje-carousel-item>
        <wje-carousel-item><div>2</div></wje-carousel-item>
        <wje-carousel-item><div>3</div></wje-carousel-item>
        <wje-carousel-item><div>4</div></wje-carousel-item>
        <wje-carousel-item><div>5</div></wje-carousel-item>
        <wje-carousel-item><div>6</div></wje-carousel-item>
        <wje-carousel-item><div>7</div></wje-carousel-item>
        <wje-carousel-item><div>8</div></wje-carousel-item>
        <wje-carousel-item><div>9</div></wje-carousel-item>
        <wje-carousel-item><div>10</div></wje-carousel-item>
      </wje-carousel>
    `);

    await el.updateComplete;

    el.slides.getBoundingClientRect = () => ({
      left: 0,
      top: 0,
      width: 500,
      height: 200,
      right: 500,
      bottom: 200,
    });

    el.getSlidesWithClones().forEach((slide, index) => {
      slide.getBoundingClientRect = () => ({
        left: index * 100,
        top: 0,
        width: 100,
        height: 200,
        right: (index + 1) * 100,
        bottom: 200,
      });
    });

    el.syncActiveToSnapStart();

    expect(el.activeSlide).to.equal(0);
  });

  it('subtracts scroll padding when scrolling to a slide', async () => {
    const el = await fixture(html`
      <wje-carousel slide-per-page="1" style="--wje-spacing-inline: 24px;">
        <wje-carousel-item><div>1</div></wje-carousel-item>
      </wje-carousel>
    `);

    await el.updateComplete;

    const [slide] = el.getSlides();
    el.getScrollPaddingInlineStart = () => 24;
    el.slides.scrollLeft = 0;
    el.slides.scrollTop = 0;
    el.slides.getBoundingClientRect = () => ({
      left: 0,
      top: 0,
      width: 300,
      height: 200,
      right: 300,
      bottom: 200,
    });
    slide.getBoundingClientRect = () => ({
      left: 24,
      top: 0,
      width: 300,
      height: 200,
      right: 324,
      bottom: 200,
    });

    el.goToSlide(0, 'auto');

    expect(el.slides._lastScrollTo.left).to.equal(0);
  });

  it('moves navigation by one slide even when multiple items are visible', async () => {
    const el = await fixture(html`
      <wje-carousel slide-per-page="5">
        <wje-carousel-item><div>1</div></wje-carousel-item>
        <wje-carousel-item><div>2</div></wje-carousel-item>
        <wje-carousel-item><div>3</div></wje-carousel-item>
        <wje-carousel-item><div>4</div></wje-carousel-item>
        <wje-carousel-item><div>5</div></wje-carousel-item>
        <wje-carousel-item><div>6</div></wje-carousel-item>
      </wje-carousel>
    `);

    await el.updateComplete;

    el.nextSlide();
    expect(el.activeSlide).to.equal(1);
    el.previousSlide();
    expect(el.activeSlide).to.equal(0);
  });

  it('uses instant control navigation for continuous multi-slide loops', async () => {
    const el = await fixture(html`
      <wje-carousel loop continuous-loop navigation pagination slide-per-page="5">
        <wje-carousel-item><div>1</div></wje-carousel-item>
        <wje-carousel-item><div>2</div></wje-carousel-item>
        <wje-carousel-item><div>3</div></wje-carousel-item>
        <wje-carousel-item><div>4</div></wje-carousel-item>
        <wje-carousel-item><div>5</div></wje-carousel-item>
        <wje-carousel-item><div>6</div></wje-carousel-item>
      </wje-carousel>
    `);

    await el.updateComplete;

    el.nextSlide();
    expect(el.slides._lastScrollTo.behavior).to.equal('auto');

    const paginationItems = el.shadowRoot.querySelectorAll('.pagination-item');
    paginationItems[2].click();
    expect(el.slides._lastScrollTo.behavior).to.equal('auto');
  });

  it('keeps the visual active slide in sync when pagination updates on navigation', async () => {
    const el = await fixture(html`
      <wje-carousel pagination slide-per-page="5">
        <wje-carousel-item><div>1</div></wje-carousel-item>
        <wje-carousel-item><div>2</div></wje-carousel-item>
        <wje-carousel-item><div>3</div></wje-carousel-item>
        <wje-carousel-item><div>4</div></wje-carousel-item>
        <wje-carousel-item><div>5</div></wje-carousel-item>
        <wje-carousel-item><div>6</div></wje-carousel-item>
      </wje-carousel>
    `);

    await el.updateComplete;

    el.nextSlide();

    const activeSlides = el
      .getSlidesWithClones()
      .filter((slide) => slide.classList.contains('active'))
      .map((slide) => slide.textContent.trim());

    expect(activeSlides).to.deep.equal(['2']);
  });

  it('binds default next button only once', async () => {
    const el = await fixture(html`
      <wje-carousel navigation>
        <wje-carousel-item><div>1</div></wje-carousel-item>
        <wje-carousel-item><div>2</div></wje-carousel-item>
      </wje-carousel>
    `);

    await el.updateComplete;

    const nextSpy = sinon.spy(el, 'nextSlide');
    el.nextButton.click();

    expect(nextSpy.callCount).to.equal(1);
  });

  it('wraps from the last full view back to the first full view in classic loop mode', async () => {
    Element.prototype.scrollTo = OriginalScrollTo;

    const el = await fixture(html`
      <div style="width: 900px;">
        <wje-carousel
          loop
          navigation
          slide-per-page="5"
          style="display:block;width:100%;--wje-carousel-height:180px;--wje-carousel-gap:16px;"
        >
          <wje-carousel-item><article style="display:grid;place-items:center;width:100%;height:100%;">1</article></wje-carousel-item>
          <wje-carousel-item><article style="display:grid;place-items:center;width:100%;height:100%;">2</article></wje-carousel-item>
          <wje-carousel-item><article style="display:grid;place-items:center;width:100%;height:100%;">3</article></wje-carousel-item>
          <wje-carousel-item><article style="display:grid;place-items:center;width:100%;height:100%;">4</article></wje-carousel-item>
          <wje-carousel-item><article style="display:grid;place-items:center;width:100%;height:100%;">5</article></wje-carousel-item>
          <wje-carousel-item><article style="display:grid;place-items:center;width:100%;height:100%;">6</article></wje-carousel-item>
          <wje-carousel-item><article style="display:grid;place-items:center;width:100%;height:100%;">7</article></wje-carousel-item>
          <wje-carousel-item><article style="display:grid;place-items:center;width:100%;height:100%;">8</article></wje-carousel-item>
          <wje-carousel-item><article style="display:grid;place-items:center;width:100%;height:100%;">9</article></wje-carousel-item>
          <wje-carousel-item><article style="display:grid;place-items:center;width:100%;height:100%;">10</article></wje-carousel-item>
        </wje-carousel>
      </div>
    `);

    await el.updateComplete;

    const carousel = el.querySelector('wje-carousel');
    const slidesEl = carousel.shadowRoot.querySelector('.carousel-slides');

    carousel.goToSlide(5, 'auto');
    await new Promise((resolve) => setTimeout(resolve, 50));
    carousel.goToSlide(6, 'auto');
    await new Promise((resolve) => setTimeout(resolve, 50));

    const viewport = slidesEl.getBoundingClientRect();
    const visibleTexts = Array.from(carousel.querySelectorAll('wje-carousel-item'))
      .map((item) => {
        const rect = item.getBoundingClientRect();
        return {
          text: item.textContent.trim(),
          left: rect.left,
          right: rect.right,
        };
      })
      .filter((item) => item.right > viewport.left && item.left < viewport.right)
      .map((item) => item.text);

    expect(carousel.activeSlide).to.equal(0);
    expect(visibleTexts.slice(0, 5)).to.deep.equal(['1', '2', '3', '4', '5']);
  });

  it('keeps five items visible when looping continuously from slide 10 to slide 1', async () => {
    Element.prototype.scrollTo = OriginalScrollTo;

    const el = await fixture(html`
      <div style="width: 900px;">
        <wje-carousel
          loop
          continuous-loop
          navigation
          slide-per-page="5"
          style="display:block;width:100%;--wje-carousel-height:180px;--wje-carousel-gap:16px;"
        >
          <wje-carousel-item><article style="display:grid;place-items:center;width:100%;height:100%;">1</article></wje-carousel-item>
          <wje-carousel-item><article style="display:grid;place-items:center;width:100%;height:100%;">2</article></wje-carousel-item>
          <wje-carousel-item><article style="display:grid;place-items:center;width:100%;height:100%;">3</article></wje-carousel-item>
          <wje-carousel-item><article style="display:grid;place-items:center;width:100%;height:100%;">4</article></wje-carousel-item>
          <wje-carousel-item><article style="display:grid;place-items:center;width:100%;height:100%;">5</article></wje-carousel-item>
          <wje-carousel-item><article style="display:grid;place-items:center;width:100%;height:100%;">6</article></wje-carousel-item>
          <wje-carousel-item><article style="display:grid;place-items:center;width:100%;height:100%;">7</article></wje-carousel-item>
          <wje-carousel-item><article style="display:grid;place-items:center;width:100%;height:100%;">8</article></wje-carousel-item>
          <wje-carousel-item><article style="display:grid;place-items:center;width:100%;height:100%;">9</article></wje-carousel-item>
          <wje-carousel-item><article style="display:grid;place-items:center;width:100%;height:100%;">10</article></wje-carousel-item>
        </wje-carousel>
      </div>
    `);

    await el.updateComplete;

    const carousel = el.querySelector('wje-carousel');
    const slidesEl = carousel.shadowRoot.querySelector('.carousel-slides');

    carousel.goToSlide(9, 'auto');
    await new Promise((resolve) => setTimeout(resolve, 50));

    const viewport = slidesEl.getBoundingClientRect();
    const visibleTexts = Array.from(carousel.querySelectorAll('wje-carousel-item'))
      .map((item) => {
        const rect = item.getBoundingClientRect();
        return {
          text: item.textContent.trim(),
          left: rect.left,
          right: rect.right,
        };
      })
      .filter((item) => item.right > viewport.left && item.left < viewport.right)
      .map((item) => item.text);

    expect(visibleTexts.slice(0, 5)).to.deep.equal(['10', '1', '2', '3', '4']);
  });
});

describe('<wje-carousel-item>', () => {
  it('marks single-wrapper content so custom layouts can stretch full width', async () => {
    const el = await fixture(html`
      <wje-carousel-item>
        <div class="cards-grid">
          <article>Alpha</article>
          <article>Beta</article>
        </div>
      </wje-carousel-item>
    `);

    await el.updateComplete;

    expect(el.hasAttribute('single-content')).to.equal(true);
    expect(getComputedStyle(el).scrollSnapAlign).to.equal('start');
  });

  it('keeps multi-node content in compatibility mode', async () => {
    const el = await fixture(html`
      <wje-carousel-item>
        <div>A</div>
        <div>B</div>
      </wje-carousel-item>
    `);

    await el.updateComplete;

    expect(el.hasAttribute('single-content')).to.equal(false);
  });
});
