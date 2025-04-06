import { expect, fixture, html } from '@open-wc/testing';
import '../../dist/wje-avatar.js';
import { getHsl, getInitials } from './service/service.js';

describe('wje-avatar', () => {
    it('should be defined', async () => {
        const el = await fixture(html`<wje-avatar></wje-avatar>`);
        expect(el).to.exist;
        expect(el).to.be.an.instanceof(customElements.get('wje-avatar'));
    });

    it('should have default size set to "medium"', async () => {
        const el = await fixture(html`<wje-avatar></wje-avatar>`);
        expect(el.size).to.equal('medium');
    });

    it('should allow setting and getting label', async () => {
        const el = await fixture(html`<wje-avatar label="John Doe"></wje-avatar>`);
        expect(el.label).to.equal('John Doe');

        el.label = 'Jane Smith';
        expect(el.getAttribute('label')).to.equal('Jane Smith');
    });

    it('should generate initials correctly', async () => {
        const initials = getInitials('John Doe');
        expect(initials).to.equal('JD');

        const initialsSingle = getInitials('John');
        expect(initialsSingle).to.equal('J');
    });

    it('should generate correct HSL color for a label', async () => {
        const hslColor = getHsl('John Doe');
        expect(hslColor).to.match(/^hsl\(\d{1,3}, 40%, 65%\)$/);
    });

    it('should set initials attribute correctly', async () => {
        const el = await fixture(html`<wje-avatar label="John Doe" initials></wje-avatar>`);
        expect(el.hasAttribute('initials')).to.be.true;
        expect(el.getAttribute('style')).to.include('--wje-avatar-background-color: hsl');
    });

    it('should display initials if the initials attribute is set', async () => {
        const el = await fixture(html`<wje-avatar label="John Doe" initials></wje-avatar>`);
        await el.updateComplete;

        expect(el.shadowRoot.textContent).to.include('JD');
    });

    it('should append slots for icon, status, and secondary content', async () => {
        const el = await fixture(html`<wje-avatar></wje-avatar>`);
        await el.updateComplete;

        const statusSlot = el.shadowRoot.querySelector('slot[name="status"]');
        const secondarySlot = el.shadowRoot.querySelector('slot[name="secondary"]');
        const iconSlot = el.shadowRoot.querySelector('slot[name="icon"]');

        expect(statusSlot).to.exist;
        expect(secondarySlot).to.exist;
        expect(iconSlot).to.exist;
    });

    it('should detect if an avatar is an image', async () => {
        const el = await fixture(html`<wje-avatar><wje-img src="avatar.jpg"></wje-img></wje-avatar>`);
        expect(el.isImage()).to.be.true;
    });

    it('should not detect an image when it is missing', async () => {
        const el = await fixture(html`<wje-avatar></wje-avatar>`);
        expect(el.isImage()).to.be.false;
    });
});
