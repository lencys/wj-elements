import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

export default class Stepper extends WJElement {
    constructor() {
        super();
        this.currentStep = 0;
        this.completedSteps = [];
    }

    className = "Stepper";

    static get cssStyleSheet() {
        return styles;
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw() {
        let fragment = document.createDocumentFragment();

        const stepperContainer = document.createElement('div');
        stepperContainer.className = 'stepper-container';

        const stepHeaders = document.createElement('div');
        stepHeaders.className = 'step-headers';

        const stepsContent = document.createElement('div');
        stepsContent.className = 'steps-content';

        const steps = Array.from(this.children);
        this.steps = steps.map((step, index) => {
            if (step.classList.contains("step")) {
                const stepHeader = document.createElement('div');
                stepHeader.className = 'step-header';
    
                const badge = document.createElement('wje-badge');
                badge.className = 'step-badge';
                badge.setAttribute('label', (index + 1).toString());
                badge.innerHTML = '12';
                
                const headerLabel = document.createElement('span');
                headerLabel.innerText = step.getAttribute('label') || `Step ${index + 1}`;
    
                if (index === this.currentStep) {
                    stepHeader.classList.add('active');
                    badge.setAttribute('color', 'primary');
                }

                if (!step.hasAttribute('disabled')){
                    stepHeader.addEventListener('click', () => this.gotoStep(index));
                    stepHeader.classList.add("pointer");
                } 
    
                stepHeader.appendChild(badge);
                stepHeader.appendChild(headerLabel);
    
                stepHeaders.appendChild(stepHeader);
    
                if (index < steps.length - 1) {
                    const arrowIcon = document.createElement('wje-icon');
                    arrowIcon.setAttribute('name', 'chevron-right');
                    arrowIcon.classList.add('arrow-icon');
                    arrowIcon.setAttribute('size', 'small');
                    stepHeaders.appendChild(arrowIcon);
                }
    
                step.classList.add('step');
                if (index !== this.currentStep) {
                    step.style.display = 'none';
                }
                return step;
            }
        });

        this.steps.forEach(step => stepsContent.appendChild(step));

        const navButtons = document.createElement('div');
        navButtons.className = 'nav-buttons';

        const prevButton = document.createElement('wje-button');
        prevButton.setAttribute('label', 'Previous');
        prevButton.disabled = this.currentStep === 0;
        prevButton.addEventListener('click', () => this.navigate(-1));
        prevButton.innerHTML = 'Prev';

        const nextButton = document.createElement('wje-button');
        nextButton.setAttribute('label', 'Next');
        nextButton.disabled = this.currentStep === this.steps.length - 1;
        nextButton.addEventListener('click', () => this.navigate(1));
        nextButton.innerHTML = 'Next';

        navButtons.appendChild(prevButton);
        navButtons.appendChild(nextButton);

        stepperContainer.appendChild(stepHeaders);
        stepperContainer.appendChild(stepsContent);
        stepperContainer.appendChild(navButtons);

        fragment.appendChild(stepperContainer);

        return fragment;
    }

    navigate(direction) {
        this.gotoStep(this.currentStep + direction);
    }

    gotoStep(stepIndex) {
        if (stepIndex >= 0 && stepIndex < this.steps.length) {
            if (stepIndex > this.currentStep) {
                this.completedSteps[this.currentStep] = true;
            }

            this.steps[this.currentStep].style.display = 'none';
            this.steps[stepIndex].style.display = 'block';

            const headers = this.shadowRoot.querySelectorAll('.step-header');
            headers[this.currentStep].classList.remove('active');
            headers[this.currentStep].classList.add('done');
            headers[stepIndex].classList.add('active');

            const badges = this.shadowRoot.querySelectorAll('wje-badge');
            
            badges[this.currentStep].shadowRoot.querySelector("div").classList.remove("wje-color-primary");
            this.currentStep = stepIndex;
            badges[this.currentStep].shadowRoot.querySelector("div").classList.add("wje-color-primary");
            
            const buttons = this.shadowRoot.querySelectorAll('wje-button');
            buttons[0].disabled = this.currentStep === 0;
            buttons[1].disabled = this.currentStep === this.steps.length - 1;

            this.updateBadges();
        }
    }

    updateBadges() {
        const headers = this.shadowRoot.querySelectorAll('.step-header');
        headers.forEach((header, index) => {
            const badge = header.querySelector('wje-badge');
            if (this.completedSteps[index]) {
                if (!badge.querySelector('wje-status')) {
                    badge.innerHTML = '';
                    const checkIcon = document.createElement('wje-icon');
                    checkIcon.setAttribute('name', 'check');
                    checkIcon.setAttribute('color', 'success');
                    checkIcon.setAttribute('size', 'medium');
                    badge.shadowRoot.querySelector("div").classList.add("wje-color-success");
                    badge.appendChild(checkIcon);
                }
            } else {
                badge.innerHTML = '12';
            }
        });
    }
}