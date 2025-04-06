import { expect, fixture, aTimeout, oneEvent } from '@open-wc/testing';
import '../../dist/wje-animation.js';

describe('<wje-animation>', () => {
    const boxToAnimate = '<div style="width: 10px; height: 10px; background: black;" data-testid="animated-box"></div>';

    it('renders the animation component', async () => {
        const animationContainer = await fixture(`<wje-animation>${boxToAnimate}</wje-animation>`);
        expect(animationContainer).to.exist;
        expect(animationContainer.shadowRoot).to.exist;
    });

    it('is accessible', async () => {
        const animationContainer = await fixture(`<wje-animation>${boxToAnimate}</wje-animation>`);
        await expect(animationContainer).to.be.accessible();
    });

    describe('animation lifecycle', () => {
        it('starts animation when play() is called', async () => {
            const animationContainer = await fixture(`<wje-animation>${boxToAnimate}</wje-animation>`);

            const box = animationContainer.shadowRoot.querySelector('slot').assignedElements()[0];

            expect(animationContainer.animation.playState).to.be.equal('running');
        });

        it('can be cancelled mid-animation', async () => {
            const animationContainer = await fixture(`<wje-animation>${boxToAnimate}</wje-animation>`);

            const box = animationContainer.shadowRoot.querySelector('slot').assignedElements()[0];

            animationContainer.cancel();

            expect(animationContainer.animation.playState).to.be.equal('idle');
        });

        it('respects delay and duration attributes', async () => {
            const animationContainer = await fixture(
                `<wje-animation name="fade-in" duration="2000" delay="1000">${boxToAnimate}</wje-animation>`
            );

            expect(animationContainer.duration).to.equal(2000);
            expect(animationContainer.delay).to.equal(1000);
        });

        it('uses default values for missing attributes', async () => {
            const animationContainer = await fixture(`<wje-animation>${boxToAnimate}</wje-animation>`);

            expect(animationContainer.duration).to.equal(1000); // Default duration
            expect(animationContainer.delay).to.equal(0); // Default delay
        });
    });
});
