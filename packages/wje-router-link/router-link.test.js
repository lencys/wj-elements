import '../../dist/wje-element.js';
import { expect, fixture, html } from '@open-wc/testing';
import '../../dist/wje-router-link.js';

describe('<wje-router-link>', () => {
    it('renders as custom element', async () => {
        const el = await fixture(html`<wje-router-link>Link</wje-router-link>`);
        expect(el).to.be.instanceOf(HTMLElement);
    });
});
