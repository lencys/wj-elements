import { expect, fixture, html } from '@open-wc/testing';
import '../../dist/wje-accordion.js';
import '../../dist/wje-accordion-item.js';

describe('<wje-accordion>', () => {
    it('sets role presentation on host', async () => {
        const el = await fixture(html`
      <wje-accordion>
        <wje-accordion-item>
          <span slot="headline">Title</span>
          <div slot="content">Content</div>
        </wje-accordion-item>
      </wje-accordion>
    `);
        await el.updateComplete;
        expect(el.getAttribute('role')).to.equal('presentation');
    });

    it('sets ARIA attributes on accordion item headline and content', async () => {
        const el = await fixture(html`
      <wje-accordion>
        <wje-accordion-item id="item-1">
          <span slot="headline">Title</span>
          <div slot="content">Content</div>
        </wje-accordion-item>
      </wje-accordion>
    `);
        const item = el.querySelector('wje-accordion-item');
        await item.updateComplete;

        const headline = item.shadowRoot.querySelector('[part="headline"]');
        const content = item.shadowRoot.querySelector('[part="content"]');

        expect(headline.getAttribute('role')).to.equal('button');
        expect(headline.getAttribute('tabindex')).to.equal('0');
        expect(headline.getAttribute('aria-controls')).to.equal(content.id);
        expect(headline.getAttribute('aria-expanded')).to.equal('false');
        expect(content.getAttribute('role')).to.equal('region');
        expect(content.getAttribute('aria-labelledby')).to.equal(headline.id);
    });

    it('updates aria-expanded when item expands and collapses', async () => {
        const el = await fixture(html`
      <wje-accordion>
        <wje-accordion-item>
          <span slot="headline">Title</span>
          <div slot="content">Content</div>
        </wje-accordion-item>
      </wje-accordion>
    `);
        const item = el.querySelector('wje-accordion-item');
        await item.updateComplete;

        const headline = item.shadowRoot.querySelector('[part="headline"]');

        headline.click();
        expect(headline.getAttribute('aria-expanded')).to.equal('true');

        headline.click();
        expect(headline.getAttribute('aria-expanded')).to.equal('false');
    });

    it('opens item by index on initial render', async () => {
        const el = await fixture(html`
      <wje-accordion index="1">
        <wje-accordion-item>
          <span slot="headline">First</span>
          <div slot="content">Content</div>
        </wje-accordion-item>
        <wje-accordion-item>
          <span slot="headline">Second</span>
          <div slot="content">Content</div>
        </wje-accordion-item>
      </wje-accordion>
    `);
        const items = el.querySelectorAll('wje-accordion-item');
        await items[0].updateComplete;
        await items[1].updateComplete;

        expect(items[1].classList.contains('expanded')).to.be.true;
    });

    it('keeps only one item open when multiple is not set', async () => {
        const el = await fixture(html`
      <wje-accordion>
        <wje-accordion-item>
          <span slot="headline">First</span>
          <div slot="content">Content</div>
        </wje-accordion-item>
        <wje-accordion-item>
          <span slot="headline">Second</span>
          <div slot="content">Content</div>
        </wje-accordion-item>
      </wje-accordion>
    `);
        const items = el.querySelectorAll('wje-accordion-item');
        await items[0].updateComplete;
        await items[1].updateComplete;

        const headline0 = items[0].shadowRoot.querySelector('[part="headline"]');
        const headline1 = items[1].shadowRoot.querySelector('[part="headline"]');

        headline0.click();
        headline1.click();

        expect(items[0].classList.contains('expanded')).to.be.false;
        expect(items[1].classList.contains('expanded')).to.be.true;
    });

    it('allows multiple items open when multiple is set', async () => {
        const el = await fixture(html`
      <wje-accordion multiple>
        <wje-accordion-item>
          <span slot="headline">First</span>
          <div slot="content">Content</div>
        </wje-accordion-item>
        <wje-accordion-item>
          <span slot="headline">Second</span>
          <div slot="content">Content</div>
        </wje-accordion-item>
      </wje-accordion>
    `);
        const items = el.querySelectorAll('wje-accordion-item');
        await items[0].updateComplete;
        await items[1].updateComplete;

        items[0].expand();
        items[1].expand();

        expect(items[0].classList.contains('expanded')).to.be.true;
        expect(items[1].classList.contains('expanded')).to.be.true;
    });

    it('toggles item on Enter/Space key', async () => {
        const el = await fixture(html`
      <wje-accordion>
        <wje-accordion-item>
          <span slot="headline">Title</span>
          <div slot="content">Content</div>
        </wje-accordion-item>
      </wje-accordion>
    `);
        const item = el.querySelector('wje-accordion-item');
        await item.updateComplete;

        const headline = item.shadowRoot.querySelector('[part="headline"]');
        headline.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
        expect(headline.getAttribute('aria-expanded')).to.equal('true');

        headline.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }));
        expect(headline.getAttribute('aria-expanded')).to.equal('false');
    });
});
