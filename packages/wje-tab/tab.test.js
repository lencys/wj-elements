import '../../dist/wje-element.js';
import { expect, fixture, html } from '@open-wc/testing';
import '../../dist/wje-tab.js';

describe('<wje-tab>', () => {
    it('renders as custom element', async () => {
        const el = await fixture(html`<wje-tab>Tab</wje-tab>`);
        expect(el).to.be.instanceOf(HTMLElement);
    });
});
