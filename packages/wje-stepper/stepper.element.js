import { Localizer } from '../utils/localize.js';
import { default as WJElement, event } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * `Stepper` is a custom web component that represents a stepper.
 * @summary This element represents a stepper.
 * @documentation https://elements.webjet.sk/components/stepper
 * @status stable
 * @augments WJElement
 * @slot - The default slot for the stepper.
 * @attr {string} active - The active color for the stepper.
 * @attr {string} done - The done color for the stepper.
 * @csspart native - The native part of the stepper.
 * @csspart header - The header part of the stepper.
 * @csspart content - The content part of the stepper.
 * @tag wje-stepper
 */
export default class Stepper extends WJElement {
  constructor() {
    super();
    this.currentStep = 0;

    this.localizer = new Localizer(this);
    this.steps = [];
  }

  get active() {
    if (this.hasAttribute('active')) return this.getAttribute('active');

    return 'primary';
  }

  get done() {
    if (this.hasAttribute('done')) return this.getAttribute('done');

    return 'success';
  }

  className = 'Stepper';

  static get cssStyleSheet() {
    return styles;
  }

  setupAttributes() {
    this.isShadowRoot = 'open';
  }

  /**
   * Draws the component for the stepper.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();

    const native = document.createElement('div');
    native.setAttribute('part', 'native');
    native.className = 'native-stepper';

    const header = document.createElement('div');
    header.setAttribute('part', 'header');
    header.className = 'header';

    const content = document.createElement('div');
    content.setAttribute('part', 'content');
    content.className = 'content';

    const steps = Array.from(this.children);

    steps.forEach((step, index) => {
      if (step.nodeName === 'WJE-STEP') {
        const nav = document.createElement('div');
        nav.className = 'step-header';
        nav.addEventListener('click', () => this.goToStep(index));

        const badge = document.createElement('wje-badge');
        badge.setAttribute('label', (index + 1).toString());
        badge.className = 'step-badge';
        badge.innerHTML = index + 1;

        const label = document.createElement('span');
        label.innerText = step.getAttribute('label') || `${this.localizer.translate('wj.stepper.step')} ${index + 1}`; // default label

        // set active step
        if (index === this.currentStep || step.hasAttribute('active')) {
          this.setStepActive(nav, badge);
        }

        if (step.hasAttribute('disabled')) {
          nav.setAttribute('disabled', '');
        } else {
          nav.classList.add('pointer');
        }

        nav.appendChild(badge);
        nav.appendChild(label);

        header.appendChild(nav);

        if (index < steps.length - 1) {
          const arrowIcon = document.createElement('wje-icon');
          arrowIcon.setAttribute('name', 'chevron-right');
          arrowIcon.classList.add('arrow-icon');
          arrowIcon.setAttribute('size', 'small');

          header.appendChild(arrowIcon);
        }

        step.classList.add('step');
        if (index !== this.currentStep) {
          step.style.display = 'none';
        }

        this.steps.push(step);
      }
    });

    let slot = document.createElement('slot');

    const navButtons = document.createElement('div');
    navButtons.className = 'nav-buttons';

    const prevButton = document.createElement('wje-button');
    prevButton.setAttribute('label', this.localizer.translate('wj.stepper.button.previous'));
    prevButton.disabled = this.currentStep === 0;
    prevButton.innerHTML = 'Prev';

    const nextButton = document.createElement('wje-button');
    nextButton.setAttribute('label', this.localizer.translate('wj.stepper.button.next'));
    nextButton.disabled = this.currentStep === this.steps.length - 1;
    nextButton.innerHTML = 'Next';

    navButtons.appendChild(prevButton);
    navButtons.appendChild(nextButton);

    content.appendChild(slot);

    native.appendChild(header);
    native.appendChild(content);
    native.appendChild(navButtons);

    fragment.appendChild(native);

    this.header = header;
    this.headerSteps = header.querySelectorAll('.step-header');
    this.prev = prevButton;
    this.next = nextButton;

    return fragment;
  }

  /**
   * Sets up the attributes for the component.
   */
  afterDraw() {
    event.addListener(this.prev, 'click', '', () => this.navigate(-1));
    event.addListener(this.next, 'click', '', () => this.navigate(1));
  }

  /**
   * Navigates to a different step in a multi-step process based on the provided direction.
   * @param {number} direction The navigation direction.
   * Use a positive value to move forward or a negative value to move backward.
   */
  navigate(direction) {
    this.goToStep(this.currentStep + direction, direction);
  }

  /**
   * Navigates to a specific step in a multi-step process and updates the stepper UI accordingly.
   * @param {number} stepIndex The index of the step to navigate to.
   * @param {number} direction The navigation direction. A positive value indicates forward navigation, and a negative value indicates backward navigation.
   * //@fires stepper:next Dispatched when navigating to the next step.
   * //@fires stepper:prev Dispatched when navigating to the previous step.
   * //@fires stepper:finish Dispatched when the final step is completed.
   */
  goToStep(stepIndex, direction) {
    if (stepIndex >= 0 && stepIndex < this.steps.length) {
      if (direction > 0) {
        this.dispatchEvent(new CustomEvent('stepper:next', { detail: { stepIndex }, bubbles: true, composed: true }));
      } else {
        this.dispatchEvent(new CustomEvent('stepper:prev', { detail: { stepIndex }, bubbles: true, composed: true }));
      }

      if (this.headerSteps[stepIndex].hasAttribute('disabled')) stepIndex += direction;

      this.headerSteps.forEach((step, index) => {
        let badge = step.querySelector('wje-badge');

        this.setStepDefault(step, badge, index);
        if (index < stepIndex) this.setStepDone(step, badge);
      });

      this.setStepActive(this.headerSteps[stepIndex], null, stepIndex);
      this.setContentActive(stepIndex);

      this.currentStep = stepIndex;

      this.prev.disabled = this.currentStep === 0;
      if (this.currentStep === this.steps.length - 1) {
        this.next.innerHTML = this.localizer.translate('wj.stepper.button.finish');
        this.next.setAttribute('color', 'primary');
        this.next.refresh();
      } else {
        this.next.innerHTML = this.localizer.translate('wj.stepper.button.next');
        this.next.removeAttribute('color');
        this.next.refresh();
      }
    } else if (stepIndex === this.steps.length) {
      this.dispatchEvent(new CustomEvent('stepper:finish', { detail: { stepIndex }, bubbles: true, composed: true }));
    }
  }

  /**
   * Resets a step to its default state by clearing its active and done attributes.
   * Updates the step's badge to show its index and removes any color styling.
   * @param {HTMLElement} nav The navigation element representing the step.
   * @param {HTMLElement|null} [badge] The badge element within the step. If not provided, it will be selected from the `nav` element.
   * @param {number} [stepIndex] The index of the step, used to set the badge content.
   */
  setStepDefault(nav, badge = null, stepIndex = 0) {
    nav.removeAttribute('active');
    nav.removeAttribute('done');

    if (!badge) {
      badge = nav.querySelector('wje-badge');
    }
    badge.innerHTML = stepIndex + 1;
    badge.removeAttribute('color');
  }

  /**
   * Sets a step as active by adding the `active` attribute and updating the step's badge.
   * @param {HTMLElement} nav The navigation element representing the step to activate.
   * @param {HTMLElement|null} [badge] The badge element within the step. If not provided, it will be selected from the `nav` element.
   * @param {number|null} [stepIndex] The index of the step, used to set the badge content. Defaults to `null` if not provided.
   */
  setStepActive(nav, badge = null, stepIndex = null) {
    nav.setAttribute('active', '');

    if (!badge) {
      badge = nav.querySelector('wje-badge');
    }
    badge.innerHTML = stepIndex + 1;
    badge.setAttribute('color', this.active);
  }

  /**
   * Activates the content of a specific step by displaying it and hiding all others.
   * @param {number} stepIndex The index of the step whose content should be displayed.
   */
  setContentActive(stepIndex) {
    this.steps?.forEach((step, index) => {
      if (index === stepIndex) {
        step.style.display = 'block';
      } else {
        step.style.display = 'none';
      }
    });
  }

  /**
   * Marks a step as completed by setting the `done` attribute and updating its badge with a check icon.
   * @param {HTMLElement} nav The navigation element representing the completed step.
   * @param {HTMLElement|null} [badge] The badge element within the step. If not provided, it will be selected from the `nav` element.
   */
  setStepDone(nav, badge = null) {
    nav.setAttribute('done', '');

    const checkIcon = document.createElement('wje-icon');
    checkIcon.setAttribute('name', 'check');
    checkIcon.setAttribute('color', this.done);
    checkIcon.setAttribute('size', 'medium');

    if (!badge) {
      badge = nav.querySelector('wje-badge');
    }

    badge.setAttribute('color', this.done);
    badge.innerHTML = '';
    badge.appendChild(checkIcon);
  }
}
