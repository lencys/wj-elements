import '../../dist/wje-element.js';
import { aTimeout, expect, fixture, html, oneEvent } from '@open-wc/testing';
import sinon from 'sinon';
import '../../dist/wje-color-picker.js';

// Príklad testov pre <wje-color-picker>.
describe('<wje-color-picker>', () => {
    describe('when the value changes', () => {
        it('should not emit change or input event when the value is set programmatically', async () => {
            const el = await fixture(html` <wje-color-picker></wje-color-picker> `);
            const color = 'rgb(255, 204, 0)';

            el.addEventListener('change', () => expect.fail('change should not be emitted'));
            el.addEventListener('input', () => expect.fail('input should not be emitted'));

            el.value = color;
            await el.updateComplete;
        });

        it('should emit change and input event when interacting with the color grid', async () => {
            const el = await fixture(html` <wje-color-picker></wje-color-picker> `);
            const grid = el.shadowRoot.querySelector('[part~="grid"]');
            const changeHandler = sinon.spy();
            const inputHandler = sinon.spy();

            el.addEventListener('change', changeHandler);
            el.addEventListener('input', inputHandler);

            // Simulácia pohybu cez grid
            grid.dispatchEvent(new Event('input'));
            grid.dispatchEvent(new Event('change'));

            await el.updateComplete;

            expect(inputHandler).to.have.been.calledOnce;
            expect(changeHandler).to.have.been.calledOnce;
        });

        it('should render correctly with predefined swatches', async () => {
            const el = await fixture(html`
        <wje-color-picker swatches="red; #008000; rgb(0,0,255);"></wje-color-picker>
      `);
            const swatches = el.shadowRoot.querySelectorAll('[part~="swatch"] > div');

            expect(swatches.length).to.equal(3);
            expect(getComputedStyle(swatches[0]).backgroundColor).to.equal('rgb(255, 0, 0)');
            expect(getComputedStyle(swatches[1]).backgroundColor).to.equal('rgb(0, 128, 0)');
            expect(getComputedStyle(swatches[2]).backgroundColor).to.equal('rgb(0, 0, 255)');
        });
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

    describe('when used in a form', () => {
        it('should serialize its name and value with FormData', async () => {
            const form = await fixture(html`
        <form>
          <wje-color-picker name="color" value="#ffcc00"></wje-color-picker>
        </form>
      `);
            const formData = new FormData(form);
            expect(formData.get('color')).to.equal('#ffcc00');
        });

        it('should reset to its initial value when the form is reset', async () => {
            const form = await fixture(html`
        <form>
          <wje-color-picker name="color" value="#ffffff"></wje-color-picker>
          <button type="reset">Reset</button>
        </form>
      `);
            const colorPicker = form.querySelector('wje-color-picker');
            colorPicker.value = '#000000';

            // Reset the form
            form.reset();
            await oneEvent(form, 'reset');
            await colorPicker.updateComplete;

            expect(colorPicker.value).to.equal('#ffffff');
        });
    });

    describe('when using validation', () => {
        it('should be valid by default', async () => {
            const el = await fixture(html` <wje-color-picker></wje-color-picker> `);
            expect(el.checkValidity()).to.be.true;
        });

        it('should be invalid when required but empty', async () => {
            const el = await fixture(html` <wje-color-picker required></wje-color-picker> `);
            expect(el.checkValidity()).to.be.false;
        });
    });
});
