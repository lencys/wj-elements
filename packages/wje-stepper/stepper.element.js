import { default as WJElement, event } from "../wje-element/element.js";
import { Localizer } from "../utils/localize.js";

import styles from "./styles/styles.css?inline";
import { he } from "@faker-js/faker";

export default class Stepper extends WJElement {
    constructor() {
        super();
        this.currentStep = 0;

        this.localizer = new Localizer(this);
        this.steps = [];
    }

    get active() {
        if (this.hasAttribute('active'))
            return this.getAttribute('active');

        return "primary";
    }

    get done() {
        if (this.hasAttribute('done'))
            return this.getAttribute('done');

        return "success";
    }

    className = "Stepper";

    static get cssStyleSheet() {
        return styles;
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Draws the component.
     * @param {Object} context - The context for drawing.
     * @param {Object} store - The store for drawing.
     * @param {Object} params - The parameters for drawing.
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
                label.innerText = step.getAttribute('label') || `${this.localizer.translate("wj.stepper.step")} ${index + 1}`; // default label

                // set active step
                if (index === this.currentStep || step.hasAttribute('active')) {
                    this.setStepActive(nav, badge);
                }

                if (step.hasAttribute('disabled')) {
                    nav.setAttribute('disabled', '');
                } else {
                    nav.classList.add("pointer");
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
        prevButton.setAttribute('label', this.localizer.translate("wj.stepper.button.previous"));
        prevButton.disabled = this.currentStep === 0;
        prevButton.innerHTML = 'Prev';

        const nextButton = document.createElement('wje-button');
        nextButton.setAttribute('label', this.localizer.translate("wj.stepper.button.next"));
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
     * @param {Object} context - The context for drawing.
     * @param {Object} store - The store for drawing.
     * @param {Object} params - The parameters for drawing.
     */
    afterDraw() {
        event.addListener(this.prev, 'click', '', () => this.navigate(-1));
        event.addListener(this.next, 'click', '', () => this.navigate(1));
    }

    /**
     * Navigates to the next or previous step
     * @param direction
     */
    navigate(direction) {
        this.goToStep(this.currentStep + direction, direction);
    }

    /**
     * Go to the specified step
     * @param stepIndex
     * @param direction
     */
    goToStep(stepIndex, direction) {
        if (stepIndex >= 0 && stepIndex < this.steps.length) {
            if (direction > 0) {
                this.dispatchEvent(new CustomEvent('stepper:next', { detail: { stepIndex }, bubbles: true, composed: true }));
            } else {
                this.dispatchEvent(new CustomEvent('stepper:prev', { detail: { stepIndex }, bubbles: true, composed: true }));
            }

            if (this.headerSteps[stepIndex].hasAttribute('disabled'))
                stepIndex += direction;

            this.headerSteps.forEach((step, index) => {
                let badge = step.querySelector('wje-badge');

                this.setStepDefault(step, badge, index);
                if (index < stepIndex)
                    this.setStepDone(step, badge);
            });

            this.setStepActive(this.headerSteps[stepIndex], null, stepIndex);
            this.setContentActive(stepIndex);

            this.currentStep = stepIndex;

            this.prev.disabled = this.currentStep === 0;
            if (this.currentStep === this.steps.length - 1) {
                this.next.innerHTML = this.localizer.translate("wj.stepper.button.finish");
                this.next.setAttribute('color', 'primary');
                this.next.refresh()


            } else {
                this.next.innerHTML = this.localizer.translate("wj.stepper.button.next");
                this.next.removeAttribute('color');
                this.next.refresh()

            }

        } else if (stepIndex === this.steps.length) {
            this.dispatchEvent(new CustomEvent('stepper:finish', { detail: { stepIndex }, bubbles: true, composed: true }));
        }
    }

    /**
     * Sets the step to the default state
     * @param nav
     * @param badge
     * @param stepIndex
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
     * Sets the step to the active state
     * @param nav
     * @param badge
     * @param stepIndex
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
     * Sets the content to the active state
     * @param stepIndex
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
     * Sets the step to the done state
     * @param nav
     * @param badge
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