import '../../dist/wje-element.js';
import { fixture, expect, assert, html } from '@open-wc/testing';
import '../../dist/wje-breadcrumb.js';
import '../../dist/wje-breadcrumbs.js';

describe('<wje-breadcrumbs>', () => {
    let el, itemsBeforeCollapse, indicator;

    describe('Standard <wje-breadcrumbs> list', () => {
        before(async () => {
            // Create a basic <wje-breadcrumbs> element with three breadcrumbs
            el = await fixture(html`
        <wje-breadcrumbs>
          <wje-breadcrumb>Home</wje-breadcrumb>
          <wje-breadcrumb>About</wje-breadcrumb>
          <wje-breadcrumb>Contact</wje-breadcrumb>
        </wje-breadcrumbs>
      `);
        });

        it('passes accessibility tests with color-contrast rule ignored', async () => {
            await assert.isAccessible(el, {
                rules: {
                    'color-contrast': { enabled: false }, // Ignore color contrast rule
                },
            });
        });

        it('checks if the last item has the "last" attribute', async () => {
            const lastBreadcrumb = el.querySelector('wje-breadcrumb:last-child');
            assert.isTrue(
                lastBreadcrumb.hasAttribute('last'),
                'The last breadcrumb item does not have the expected "last" attribute.'
            );
        });
    });

    describe('Special <wje-breadcrumbs> list with separator slot', () => {
        it('verifies the separator slot contains specified elements in the shadow DOM', async () => {
            const el = await fixture(`
        <wje-breadcrumb>
          <wje-breadcrumb-item>Home</wje-breadcrumb-item>
          <wje-breadcrumb-item><span slot="separator">/</span>About</wje-breadcrumb-item>
        </wje-breadcrumb>
      `);
            const separator = el.shadowRoot.querySelector('slot[name="separator"]');
            assert.exists(separator, 'The separator slot does not exist');
        });
    });

    describe('Special <wje-breadcrumbs> list with collapsing behavior', () => {
        beforeEach(async () => {
            el = await fixture(html`
        <wje-breadcrumbs max-items="4" items-before-collapse="2">
          <wje-breadcrumb>Home</wje-breadcrumb>
          <wje-breadcrumb>Electronics</wje-breadcrumb>
          <wje-breadcrumb>Photography</wje-breadcrumb>
          <wje-breadcrumb>Cameras</wje-breadcrumb>
          <wje-breadcrumb>Film</wje-breadcrumb>
          <wje-breadcrumb>35 mm</wje-breadcrumb>
          <wje-breadcrumb>A</wje-breadcrumb>
          <wje-breadcrumb>B</wje-breadcrumb>
          <wje-breadcrumb>C</wje-breadcrumb>
        </wje-breadcrumbs>
      `);
            // Wait until <wje-breadcrumbs> finishes rendering
            await el.updateComplete;

            itemsBeforeCollapse = +el.getAttribute('items-before-collapse');
            indicator = el.querySelectorAll('wje-breadcrumb')[itemsBeforeCollapse];

            // Wait until the indicator breadcrumb finishes rendering its shadow DOM
            await indicator.updateComplete;
        });

        it('checks if the item at index specified by items-before-collapse has the "show-collapsed-indicator" attribute', async () => {
            expect(indicator.hasAttribute('show-collapsed-indicator')).to.be.true;
        });

        it('checks if the item at the index specified by items-before-collapse contains a dropdown element in shadowRoot', async () => {
            // Ensure the indicator breadcrumb finished rendering
            await indicator.updateComplete;

            expect(indicator.shadowRoot, 'Expected indicator to have an open shadowRoot').to.exist;

            let button = indicator.shadowRoot.querySelector('button');
            expect(button).to.exist;
        });

        it('verifies items beyond items-before-collapse and before the last item have the "collapsed" attribute', async () => {
            el.querySelectorAll('wje-breadcrumb').forEach((breadcrumb, index) => {
                if (index > itemsBeforeCollapse && index < el.children.length - 1) {
                    expect(breadcrumb.hasAttribute('collapsed')).to.be.true;
                }
            });
        });
    });

    describe('Special <wje-breadcrumbs variant="dropdown"> list with collapsing behavior', () => {
        before(async () => {
            el = await fixture(html`
        <wje-breadcrumbs max-items="4" items-before-collapse="2" variant="dropdown">
          <wje-breadcrumb>Home</wje-breadcrumb>
          <wje-breadcrumb>Electronics</wje-breadcrumb>
          <wje-breadcrumb>Photography</wje-breadcrumb>
          <wje-breadcrumb>Cameras</wje-breadcrumb>
          <wje-breadcrumb>Film</wje-breadcrumb>
          <wje-breadcrumb>35 mm</wje-breadcrumb>
          <wje-breadcrumb>A</wje-breadcrumb>
          <wje-breadcrumb>B</wje-breadcrumb>
          <wje-breadcrumb>C</wje-breadcrumb>
        </wje-breadcrumbs>
      `);
            // Wait until <wje-breadcrumbs> finishes rendering
            await el.updateComplete;

            itemsBeforeCollapse = +el.getAttribute('items-before-collapse');
            indicator = el.querySelectorAll('wje-breadcrumb')[itemsBeforeCollapse];

            // Wait until the indicator breadcrumb finishes rendering its shadow DOM
            await indicator.updateComplete;
        });

        it('checks if the item at the index specified by items-before-collapse contains a dropdown element in shadowRoot', async () => {
            await indicator.updateComplete;
            let dropdown = indicator.shadowRoot.querySelector('wje-dropdown');
            expect(dropdown).to.exist;
        });
    });
});
