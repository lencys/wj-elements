import '../../dist/wje-element.js';
import { aTimeout, expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import '../../dist/wje-color-picker.js';

describe('<wje-color-picker>', () => {
    it('renders current structure in shadow DOM', async () => {
        const el = await fixture(html`<wje-color-picker></wje-color-picker>`);
        await el.updateComplete;
        await aTimeout(10);

        expect(el.shadowRoot.querySelector('.native-color-picker')).to.exist;
        expect(el.shadowRoot.querySelector('.picker')).to.exist;
        expect(el.shadowRoot.querySelector('.color-area')).to.exist;
        expect(el.shadowRoot.querySelector('.marker')).to.exist;
        expect(el.shadowRoot.querySelector('.hue')).to.exist;
        expect(el.shadowRoot.querySelector('.alpha')).to.exist;
        expect(el.shadowRoot.querySelector('wje-input.input')).to.exist;
    });

    it('dispatches wje-color-picker:select when swatch is clicked', async () => {
        const el = await fixture(html`
            <wje-color-picker swatches="red; #008000"></wje-color-picker>
        `);
        await el.updateComplete;
        await aTimeout(10);

        const spy = sinon.spy();
        el.addEventListener('wje-color-picker:select', spy);

        const swatch = el.shadowRoot.querySelector('.swatch');
        swatch.click();

        expect(spy.calledOnce).to.be.true;
        expect(spy.firstCall.args[0].detail.value.hex).to.equal('#ff0000');
    });

    it('parses semicolon swatches and filters invalid colors', async () => {
        const el = await fixture(html`
            <wje-color-picker swatches="red; not-a-color; #008000"></wje-color-picker>
        `);
        await el.updateComplete;
        await aTimeout(10);

        const swatches = Array.from(el.shadowRoot.querySelectorAll('.swatch'));
        expect(swatches.length).to.equal(2);
        expect(swatches[0].style.getPropertyValue('--wje-color-picker-swatch')).to.equal('red');
        expect(swatches[1].style.getPropertyValue('--wje-color-picker-swatch')).to.equal('#008000');
    });

    it('hides optional sections when no-color-area, no-controls and no-swatches are set', async () => {
        const el = await fixture(html`
            <wje-color-picker no-color-area no-controls no-swatches></wje-color-picker>
        `);
        await el.updateComplete;
        await aTimeout(10);

        expect(el.shadowRoot.querySelector('.color-area')).to.equal(null);
        expect(el.shadowRoot.querySelector('.hue')).to.equal(null);
        expect(el.shadowRoot.querySelector('.alpha')).to.equal(null);
        expect(el.shadowRoot.querySelector('.swatches')).to.equal(null);
        expect(el.shadowRoot.querySelector('wje-input.input')).to.exist;
    });

    it('allows manual typing when input-editable is set', async () => {
        const el = await fixture(html`
            <wje-color-picker color="#00b4d8" input-editable></wje-color-picker>
        `);
        await el.updateComplete;
        await aTimeout(10);

        const input = el.shadowRoot.querySelector('wje-input.input');
        expect(input.hasAttribute('readonly')).to.be.false;
    });

    it('syncs hue slider when color is typed via input', async () => {
        const el = await fixture(html`
            <wje-color-picker color="#00b4d8" input-editable></wje-color-picker>
        `);
        await el.updateComplete;
        await aTimeout(10);

        const input = el.shadowRoot.querySelector('wje-input.input');
        input.value = '#4a4a4aff';
        input.dispatchEvent(new CustomEvent('wje-input:input', {
            bubbles: true,
            composed: true,
            detail: { value: '#4a4a4aff' },
        }));

        expect(el.value.hex8).to.equal('#4a4a4aff');
        expect(Number(el.hueSlider.value)).to.equal(0);
        expect(el.colorArea.style.getPropertyValue('--wje-color-picker-area')).to.equal('#ff0000');
    });

    it('does not update color for partial hex input shorter than 6 chars', async () => {
        const el = await fixture(html`
            <wje-color-picker color="#00b4d8" input-editable></wje-color-picker>
        `);
        await el.updateComplete;
        await aTimeout(10);

        const input = el.shadowRoot.querySelector('wje-input.input');
        const before = el.value.hex8;

        input.value = 'a4';
        input.dispatchEvent(new CustomEvent('wje-input:input', {
            bubbles: true,
            composed: true,
            detail: { value: 'a4' },
        }));

        expect(input.value).to.equal('a4');
        expect(el.value.hex8).to.equal(before);
    });

    it('updates color when 6 hex chars are typed without #', async () => {
        const el = await fixture(html`
            <wje-color-picker color="#00b4d8" input-editable></wje-color-picker>
        `);
        await el.updateComplete;
        await aTimeout(10);

        const input = el.shadowRoot.querySelector('wje-input.input');
        input.value = '4a4a4a';
        input.dispatchEvent(new CustomEvent('wje-input:input', {
            bubbles: true,
            composed: true,
            detail: { value: '4a4a4a' },
        }));

        expect(el.value.hex8).to.equal('#4a4a4aff');
        expect(input.value).to.equal('4a4a4a');
    });

    it('truncates overly long hex input', async () => {
        const el = await fixture(html`
            <wje-color-picker color="#00b4d8" input-editable></wje-color-picker>
        `);
        await el.updateComplete;
        await aTimeout(10);

        const input = el.shadowRoot.querySelector('wje-input.input');
        input.value = '123456789';
        input.dispatchEvent(new CustomEvent('wje-input:input', {
            bubbles: true,
            composed: true,
            detail: { value: '123456789' },
        }));

        expect(input.value).to.equal('12345678');
    });

    it('does not re-append alpha when editing from 8 to 6 hex chars', async () => {
        const el = await fixture(html`
            <wje-color-picker color="#00b4d8" input-editable></wje-color-picker>
        `);
        await el.updateComplete;
        await aTimeout(10);

        const input = el.shadowRoot.querySelector('wje-input.input');

        input.value = 'a4a4a4ff';
        input.dispatchEvent(new CustomEvent('wje-input:input', {
            bubbles: true,
            composed: true,
            detail: { value: 'a4a4a4ff' },
        }));
        expect(input.value).to.equal('a4a4a4ff');

        input.value = 'a4a4a4f';
        input.dispatchEvent(new CustomEvent('wje-input:input', {
            bubbles: true,
            composed: true,
            detail: { value: 'a4a4a4f' },
        }));
        expect(input.value).to.equal('a4a4a4f');

        input.value = 'a4a4a4';
        input.dispatchEvent(new CustomEvent('wje-input:input', {
            bubbles: true,
            composed: true,
            detail: { value: 'a4a4a4' },
        }));
        expect(input.value).to.equal('a4a4a4');
        expect(el.value.hex8).to.equal('#a4a4a4ff');
    });

    it('sets maxlength on color input', async () => {
        const el = await fixture(html`<wje-color-picker></wje-color-picker>`);
        await el.updateComplete;
        await aTimeout(10);

        const input = el.shadowRoot.querySelector('wje-input.input');
        expect(input.getAttribute('maxlength')).to.equal('9');
    });

    it('clamps marker position to color area bounds', async () => {
        const el = await fixture(html`<wje-color-picker></wje-color-picker>`);
        await el.updateComplete;
        await aTimeout(10);

        el.colorAreaDimension = { width: 100, height: 80, x: 0, y: 0 };
        el.setMarkerPosition(150, -20);

        expect(el.markerPosition.x).to.equal(100);
        expect(el.markerPosition.y).to.equal(0);
        expect(el.marker.style.left).to.equal('100px');
        expect(el.marker.style.top).to.equal('0px');
    });

    it('uses alpha slider value when marker moves', async () => {
        const el = await fixture(html`<wje-color-picker></wje-color-picker>`);
        await el.updateComplete;
        await aTimeout(10);

        el.dimension = () => ({ width: 100, height: 100, x: 0, y: 0 });
        el.alphaSlider.value = 25;

        el.moveMarker({ clientX: 50, clientY: 50 });

        expect(el.value).to.exist;
        expect(el.value.hex8).to.match(/^#[0-9a-f]{6}40$/i);
        expect(el.markerPosition.x).to.equal(50);
        expect(el.markerPosition.y).to.equal(50);
    });

    it('should correctly handle focus and blur events', async () => {
        const el = await fixture(html` <wje-color-picker></wje-color-picker> `);
        const focusHandler = sinon.spy();
        const blurHandler = sinon.spy();

        el.addEventListener('focus', focusHandler);
        el.addEventListener('blur', blurHandler);

        // Focus
        el.focus();
        await el.updateComplete;

        expect(document.activeElement).to.equal(el);
        expect(focusHandler).to.have.been.calledOnce;

        // Blur
        el.blur();
        await el.updateComplete;

        expect(document.activeElement).to.not.equal(el);
        expect(blurHandler).to.have.been.calledOnce;
    });
});
