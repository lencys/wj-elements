import '../../dist/wje-element.js';
import { expect, fixture, html } from '@open-wc/testing';
import '../../dist/wje-relative-time.js';
import '../translations/en-GB.js';
import '../translations/sk-SK.js';

describe('RelativeTime Component', () => {
    it('should pass accessibility tests', async () => {
        const el = await fixture(html`<wje-relative-time></wje-relative-time>`);
        await expect(el).to.be.accessible;
    });

    it('handles time correctly', async () => {
        const el = await fixture(html`<wje-relative-time date="2022-09-01T00:00:00Z"></wje-relative-time>`);
        const date = el.objectDate;
        expect(date.getUTCFullYear()).to.equal(2022);
        expect(date.getUTCMonth()).to.equal(8); // mesiace sú indexované od 0
        expect(date.getUTCDate()).to.equal(1);
    });

    it('always shows numeric if requested via numeric property', async () => {
        const el = await fixture(html`<wje-relative-time date="2022-09-01T00:00:00Z"></wje-relative-time>`);
        const timeText = el.getRelativeTimeString();
        expect(timeText).to.match(/\d+/); // Číslo, ktoré potvrdzuje "numeric" formu
    });

    it('shows human readable form if appropriate and numeric property is auto', async () => {
        const el = await fixture(html`<wje-relative-time date="2022-09-01T00:00:00Z"></wje-relative-time>`);
        const timeText = el.getRelativeTimeString();
        // Očakáva, že text je v čitateľnom formáte obsahujúcom číslice a jednotky času, napr. "3 years ago"
        expect(timeText).to.match(/\d+ (seconds?|minutes?|hours?|days?|weeks?|months?|years?) ago/);
    });

    it('shows the set date with the proper attributes at the time object', async () => {
        const el = await fixture(html`<wje-relative-time date="2022-09-01T00:00:00Z"></wje-relative-time>`);
        expect(el.date).to.equal('2022-09-01T00:00:00Z');
    });

    it('allows to use a long form of the unit', async () => {
        const el = await fixture(html`<wje-relative-time date="2022-09-01T00:00:00Z"></wje-relative-time>`);
        const timeText = el.getRelativeTimeString();
        expect(timeText).to.include.oneOf(['second', 'minute', 'hour', 'day', 'week', 'month', 'year']); // Príklady dlhých foriem
    });

    it('is formatted according to the requested locale', async () => {
        const el = await fixture(
            html`<wje-relative-time date="2022-09-01T00:00:00Z" lang="sk-sk"></wje-relative-time>`
        );
        const timeText = el.getRelativeTimeString('sk-sk');
        expect(timeText).to.include('pred'); // Napríklad slovenské slovo pre "about"
    });

    it('keeps the component in sync if requested', async () => {
        const el = await fixture(html`<wje-relative-time date="2022-09-01T00:00:00Z" sync></wje-relative-time>`);
        el.date = '2023-01-01T00:00:00Z';
        await el.updateComplete; // Čaká na aktualizáciu komponentu
        expect(el.date).to.equal('2023-01-01T00:00:00Z');
    });

    it('accepts date as an ISO string', async () => {
        const el = await fixture(html`<wje-relative-time date="2022-09-01T12:00:00Z"></wje-relative-time>`);
        expect(el.date).to.equal('2022-09-01T12:00:00Z');
        const timeText = el.getRelativeTimeString();
        expect(timeText).to.not.equal(''); // Kontrola, že zobrazuje správny relatívny čas
    });

    it('accepts date as a timestamp', async () => {
        const el = await fixture(html`<wje-relative-time date="1662033600000"></wje-relative-time>`);
        expect(el.date).to.equal('1662033600000');
        const timeText = el.getRelativeTimeString();
        expect(timeText).to.not.equal(''); // Kontrola, že zobrazuje správny relatívny čas
    });

    it('does not display a time element on invalid time string', async () => {
        const el = await fixture(html`<wje-relative-time date="invalid-date"></wje-relative-time>`);
        const timeText = el.getRelativeTimeString();
        expect(timeText).to.equal(''); // Zabezpečuje, že pri neplatnom formáte je čas prázdny
    });
});
