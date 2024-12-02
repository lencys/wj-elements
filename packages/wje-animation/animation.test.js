import { expect, fixture, aTimeout, oneEvent } from '@open-wc/testing';
import '../../dist/wje-animation.js';

describe('<wje-animation>', () => {
  const boxToAnimate = '<div style="width: 10px; height: 10px; background: black;" data-testid="animated-box"></div>';

  it('renders the animation component', async () => {
    const animationContainer = await fixture(
      `<wje-animation>${boxToAnimate}</wje-animation>`
    );
    expect(animationContainer).to.exist;
    expect(animationContainer.shadowRoot).to.exist;
  });

  it('is accessible', async () => {
    const animationContainer = await fixture(
      `<wje-animation>${boxToAnimate}</wje-animation>`
    );
    await expect(animationContainer).to.be.accessible();
  });

  describe('animation lifecycle', () => {
    // it('starts animation when play() is called', async () => {
    //   const animationContainer = await fixture(
    //     `<wje-animation name="heartBeat" duration="500">${boxToAnimate}</wje-animation>`
    //   );
    //   console.log(animationContainer);
    //   const box = animationContainer.querySelector('[data-testid="animated-box"]');
    //   expect(box).to.exist;
    //
    //   const startEvent = oneEvent(box, 'animationstart');
    //   animationContainer.play();
    //   console.log("EVENT:", startEvent);
    //   await startEvent;
    //   console.log("AAA:", animationContainer.animation);
    //   expect(animationContainer.animation).to.exist;
    // });

    // it('emits the correct event on animation end', async () => {
    //   const animationContainer = await fixture(
    //     `<wje-animation name="fade-in" duration="1">${boxToAnimate}</wje-animation>`
    //   );
    //
    //   const endEvent = oneEvent(animationContainer, 'animationend');
    //   animationContainer.play();
    //   await endEvent;
    //
    //   expect(animationContainer.animation.playState).to.equal('finished');
    // });
    //
    // it('can be cancelled mid-animation', async () => {
    //   const animationContainer = await fixture(
    //     `<wje-animation name="fade-in" duration="1000">${boxToAnimate}</wje-animation>`
    //   );
    //
    //   let animationFinished = false;
    //   oneEvent(animationContainer, 'animationend').then(() => (animationFinished = true));
    //
    //   const cancelEvent = oneEvent(animationContainer, 'animationcancel');
    //   animationContainer.play();
    //   await aTimeout(10); // Allow the animation to start
    //
    //   animationContainer.cancel();
    //   await cancelEvent;
    //
    //   expect(animationFinished).to.be.false;
    // });
    //
    // it('respects delay and duration attributes', async () => {
    //   const animationContainer = await fixture(
    //     `<wje-animation name="fade-in" duration="2000" delay="1000">${boxToAnimate}</wje-animation>`
    //   );
    //
    //   expect(animationContainer.duration).to.equal(2000);
    //   expect(animationContainer.delay).to.equal(1000);
    // });
    //
    // it('uses default values for missing attributes', async () => {
    //   const animationContainer = await fixture(
    //     `<wje-animation>${boxToAnimate}</wje-animation>`
    //   );
    //
    //   expect(animationContainer.duration).to.equal(1000); // Default duration
    //   expect(animationContainer.delay).to.equal(0); // Default delay
    // });
  });
});