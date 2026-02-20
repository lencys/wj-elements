import '../../dist/wje-element.js';
import { expect, fixture, html } from '@open-wc/testing';
import '../../dist/wje-badge.js';

describe('Badge Component', () => {
    it('renders Badge component', async () => {
        const el = await fixture(html`<wje-badge></wje-badge>`);
        expect(el).to.exist;
    });

    it('applies default color class when no color attribute is provided', async () => {
        const el = await fixture(html`<wje-badge></wje-badge>`);
        expect(el.shadowRoot.querySelector('.wje-color-default')).to.exist;
    });

    it('applies correct color class when color attribute is provided', async () => {
        const el = await fixture(html`<wje-badge color="primary"></wje-badge>`);
        expect(el.shadowRoot.querySelector('.wje-color-primary')).to.exist;
    });

    it('renders slot content', async () => {
        const el = await fixture(html`<wje-badge>Test Content</wje-badge>`);
        expect(el.textContent.trim()).to.equal('Test Content');
    });

    it('draws the badge element with correct structure', async () => {
        const el = await fixture(html`<wje-badge></wje-badge>`);
        const fragment = el.draw();
        const native = fragment.querySelector('.native-badge');
        expect(native).to.exist;
        expect(native.querySelector('slot')).to.exist;
    });

    it('sets ARIA role on host', async () => {
        const el = await fixture(html`<wje-badge>New</wje-badge>`);
        await el.updateComplete;
        expect(el.getAttribute('role')).to.equal('status');
    });
});

['primary', 'success', 'neutral', 'warning', 'danger', 'info', 'default'].forEach((color) => {
    describe('when passed a color attribute ${color}', () => {
        it(`applies ${color} color class`, async () => {
            const el = await fixture(html`<wje-badge color="${color}"></wje-badge>`);
            const fragment = el.draw();
            const native = fragment.querySelector('.native-badge');
            expect(native).to.have.class(`wje-color-${color}`);
        });
    });
});
