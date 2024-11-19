import '../../dist/wje-element.js';
import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import sinon from 'sinon';
import '../../dist/wje-toast.js';

// Funkcia na získanie hlavného kontajnera toastu (overenie existencie)
const getToastContainer = (toast) => {
  const container = toast.shadowRoot?.querySelector('[part="native"]');
  if (!container) throw new Error("Element with part='base' not found in toast component");
  return container;
};

// Očakáva, že toast bude viditeľný
const expectToastToBeVisible = (toast) => {
  const toastContainer = getToastContainer(toast);
  const style = window.getComputedStyle(toastContainer);
  expect(style.display).not.to.equal('none');
  expect(style.visibility).not.to.equal('hidden');
};

// Očakáva, že toast bude neviditeľný
const expectToastToBeInvisible = (toast) => {
  const toastContainer = getToastContainer(toast);
  const style = window.getComputedStyle(toast);
  console.log(toast);
  expect(style.display).to.equal('none');
};

describe('<wje-toast>', () => {
  let clock = null;

  afterEach(() => {
    if (clock) {
      clock.restore();
    }
  });

  it('renders', async () => {
    const toast = await fixture(html`<wje-toast open>Test toast</wje-toast>`);
    expectToastToBeVisible(toast);
  });

  it('is accessible', async () => {
    const toast = await fixture(html`<wje-toast open>Test toast</wje-toast>`);
    await expect(toast).to.be.accessible();
  });

  describe('toast visibility', () => {
    it('should be visible with the open attribute', async () => {
      const toast = await fixture(html`<wje-toast open>Test toast</wje-toast>`);
      expectToastToBeVisible(toast);
    });

    it('should not be visible without the open attribute', async () => {
      const toast = await fixture(html`<wje-toast>Test toast</wje-toast>`);
      expectToastToBeInvisible(toast);
    });

    it('should emit show and after-show events when calling show()', async () => {
      const toast = await fixture(html`<wje-toast>Test toast</wje-toast>`);
      expectToastToBeInvisible(toast);

      const showEventPromise = oneEvent(toast, 'wje-toast:after-show');
      toast.show();
      await showEventPromise;

      expectToastToBeVisible(toast);
    });

    it('should emit hide and after-hide events when calling hide()', async () => {
      const toast = await fixture(html`<wje-toast open>Test toast</wje-toast>`);
      const hideEventPromise = oneEvent(toast, 'wje-toast:after-hide');
      toast.hide();
      await hideEventPromise;

      expectToastToBeInvisible(toast);
    });
  });

  describe('close button', () => {
    it('shows a close button if the toast has the closable attribute', async () => {
      const toast = await fixture(html`<wje-toast open closable>Test toast</wje-toast>`);
      const closeButton = toast.shadowRoot?.querySelector('wje-button.close');
      expect(closeButton).to.exist;
    });

    // it('clicking the close button closes the toast', async () => {
    //   const toast = await fixture(html`<wje-toast open closable>Test toast</wje-toast>`);
    //   const closeButton = toast.shadowRoot?.querySelector('wje-button.close');
    //   console.log("CLOSE BUTTON:", closeButton, expect(closeButton).to.exist);
    //   // expect(closeButton).to.exist;
    //
    //   const hideEventPromise = oneEvent(toast, 'wje-toast:after-hide');
    //   closeButton.click();
    //   await hideEventPromise;
    //   console.log("TOAST:", "4");
    //
    //   expectToastToBeInvisible(toast);
    // });
  });

  describe('timer controlled closing', () => {
    it('closes after a predefined amount of time', async () => {
      clock = sinon.useFakeTimers();
      const toast = await fixture(html`<wje-toast open duration="3000">Test toast</wje-toast>`);

      expectToastToBeVisible(toast);

      clock.tick(3000); // Simulujeme uplynutie času
      expectToastToBeInvisible(toast);
    });

    it('resets the closing timer after mouse-over', async () => {
      clock = sinon.useFakeTimers();
      const toast = await fixture(html`<wje-toast open duration="3000">Test toast</wje-toast>`);

      expectToastToBeVisible(toast);

      clock.tick(1000); // Simulujeme uplynutie 1 sekundy
      toast.dispatchEvent(new Event('mouseenter')); // Simulujeme pohyb myši nad toastom

      clock.tick(3000); // Po ďalších 3 sekundách toast by mal byť stále viditeľný
      expectToastToBeVisible(toast);

      toast.dispatchEvent(new Event('mouseleave')); // Simulujeme opustenie myši z toastu
      clock.tick(3000); // Simulujeme ďalšie 3 sekundy na automatické zatvorenie
      expectToastToBeInvisible(toast);
    });
  });

  // Upravený test na kontrolu variantov
  describe('toast variants', () => {
    const variants = ['primary', 'success', 'neutral', 'warning', 'danger'];

    variants.forEach((variant) => {
      it(`adapts to the variant: ${variant}`, async () => {
        const toast = await fixture(html`<wje-toast variant="${variant}" open>Test toast</wje-toast>`);
        const toastContainer = getToastContainer(toast);
        console.log('VARIANT:', toast, toast.getAttribute('variant') === variant);
        expect(toast.getAttribute('variant') === variant).to.be.true;
      });
    });
  });
});
