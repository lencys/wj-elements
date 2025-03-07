import { expect, fixture, html } from '@open-wc/testing';
import '../../dist/wje-format-digital.js';
import '../translations/en-gb.js';

describe('<wje-format-digital>', () => {
    describe('defaults', () => {
        it('should have default properties', async () => {
            const el = await fixture(html`<wje-format-digital></wje-format-digital>`);

            expect(el.unit).to.equal('byte');
            expect(el.value).to.equal(0);
            expect(el.unitDisplay).to.equal('short');
        });
    });

    describe('bytes formatting', () => {
        const results = [
            { value: 12, short: '12 byte', long: '12 bytes', narrow: '12B' },
            { value: 1200, short: '1.2 kB', long: '1.2 kilobytes', narrow: '1.2kB' },
            { value: 1200000, short: '1.2 MB', long: '1.2 megabytes', narrow: '1.2MB' },
            { value: 1200000000, short: '1.2 GB', long: '1.2 gigabytes', narrow: '1.2GB' },
        ];

        results.forEach(({ value, short, long, narrow }) => {
            it(`formats bytes for value ${value}`, async () => {
                const el = await fixture(html`<wje-format-digital value="${value}"></wje-format-digital>`);

                // Short display
                el.unitDisplay = 'short';
                await new Promise((resolve) => setTimeout(resolve, 0));
                expect(el.shadowRoot?.textContent.trim()).to.equal(short);

                // Long display
                el.unitDisplay = 'long';
                await new Promise((resolve) => setTimeout(resolve, 0));
                expect(el.shadowRoot?.textContent.trim()).to.equal(long);

                // Narrow display
                el.unitDisplay = 'narrow';
                await new Promise((resolve) => setTimeout(resolve, 0));
                expect(el.shadowRoot?.textContent.trim()).to.equal(narrow);
            });
        });
    });

    describe('bits formatting', () => {
        const results = [
            { value: 12, short: '12 bit', long: '12 bits', narrow: '12bit' },
            { value: 1200, short: '1.2 kb', long: '1.2 kilobits', narrow: '1.2kb' },
            { value: 1200000, short: '1.2 Mb', long: '1.2 megabits', narrow: '1.2Mb' },
            { value: 1200000000, short: '1.2 Gb', long: '1.2 gigabits', narrow: '1.2Gb' },
        ];

        results.forEach(({ value, short, long, narrow }) => {
            it(`formats bits for value ${value}`, async () => {
                const el = await fixture(html`<wje-format-digital value="${value}" unit="bit"></wje-format-digital>`);

                // Short display
                el.unitDisplay = 'short';
                await new Promise((resolve) => setTimeout(resolve, 0));
                expect(el.shadowRoot?.textContent.trim()).to.equal(short);

                // Long display
                el.unitDisplay = 'long';
                await new Promise((resolve) => setTimeout(resolve, 0));
                expect(el.shadowRoot?.textContent.trim()).to.equal(long);

                // Narrow display
                el.unitDisplay = 'narrow';
                await new Promise((resolve) => setTimeout(resolve, 0));
                expect(el.shadowRoot?.textContent.trim()).to.equal(narrow);
            });
        });
    });

    describe('slots', () => {
        it('renders start and end slots', async () => {
            const el = await fixture(html`
        <wje-format-digital value="900000">
          <span slot="start">Start text: </span>
          <span slot="end"> End text</span>
        </wje-format-digital>
      `);

            const startSlot = el.shadowRoot?.querySelector('slot[name="start"]');
            const endSlot = el.shadowRoot?.querySelector('slot[name="end"]');

            expect(startSlot).to.exist;
            expect(endSlot).to.exist;
        });
    });
});
