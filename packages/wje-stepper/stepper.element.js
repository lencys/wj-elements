import { Localizer } from '../utils/localize.js';
import { default as WJElement, event } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * `Stepper` is a custom web component that represents a stepper.
 * @summary This element represents a stepper.
 * @documentation https://elements.webjet.sk/components/stepper
 * @status stable
 * @augments WJElement
 * @attribute {string} active - The active color for the stepper.
 * @attribute {string} done - The done color for the stepper.
 * @slot - The default slot for the stepper.
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
		this.headerSteps = [];

	}

	/**
	 * Sets the start index for an operation or a process. This method assigns
	 * the provided value to the attribute 'start-index'.
	 * @param {number|string} value The value to set for the 'start-index' attribute.
	 */
	set startIndex(value) {
		this.setAttribute('start-index', value);
	}

	/**
	 * Retrieves the starting index value stored as an attribute.
	 * If the attribute 'start-index' exists and is not null, it parses the value as an integer and returns it.
	 * If the attribute does not exist, it returns the default value of 0.
	 * @returns {number} The starting index as an integer, or 0 if the attribute is not present.
	 */
	get startIndex() {
		const index = this.getAttribute('start-index');
		return index !== null ? +index : 0;
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

		steps?.forEach((step, index) => {
			if (step.nodeName === 'WJE-STEP') {
				this.headerSteps.push(this.processStep(index, step, header, steps));
			}
		});

		let slot = document.createElement('slot');

		const navButtons = document.createElement('div');
		navButtons.className = 'nav-buttons';

		const prevButton = document.createElement('wje-button');
		prevButton.setAttribute('label', this.localizer.translate('wj.stepper.button.previous'));
		prevButton.innerHTML = this.localizer.translate('wj.stepper.button.previous');

		let nextButton = document.createElement('wje-button');
		nextButton.setAttribute('label', this.localizer.translate('wj.stepper.button.next'));
		nextButton.innerHTML = this.localizer.translate('wj.stepper.button.next');

		let finishButton = document.createElement('wje-button');
		finishButton.setAttribute('label', this.localizer.translate('wj.stepper.button.next'));
		finishButton.innerHTML = this.localizer.translate('wj.stepper.button.finish');
		finishButton.setAttribute('color', 'primary');

		const navButtonPrevSlot = document.createElement('slot');
		navButtonPrevSlot.setAttribute('name', 'prev');
		navButtonPrevSlot.appendChild(prevButton);
		navButtonPrevSlot.hidden = this.currentStep === 0;

		const navButtonNextSlot = document.createElement('slot');
		navButtonNextSlot.setAttribute('name', 'next');
		navButtonNextSlot.appendChild(nextButton);
		navButtonNextSlot.hidden = this.currentStep === this.steps.length - 1;

		const navButtonFinishSlot = document.createElement('slot');
		navButtonFinishSlot.setAttribute('name', 'finish');
		navButtonFinishSlot.appendChild(nextButton);
		navButtonFinishSlot.hidden = this.currentStep !== this.steps.length - 1;

		const isNextLocked = this.headerSteps[this.currentStep + 1]?.hasAttribute('locked');
		navButtonNextSlot.toggleAttribute('disabled', !!isNextLocked);
		navButtonFinishSlot.toggleAttribute('disabled', !!isNextLocked);

		if (steps.length > 1) {
			navButtonPrevSlot.appendChild(prevButton);
			navButtonNextSlot.appendChild(nextButton);
			navButtonFinishSlot.appendChild(finishButton);
			navButtonFinishSlot.style.display = 'none';

		} else {
			navButtonPrevSlot.hidden = true;
			navButtonNextSlot.hidden = true;
			navButtonPrevSlot.appendChild(prevButton);
			navButtonNextSlot.appendChild(nextButton);
			navButtonFinishSlot.appendChild(finishButton);
		}

		content.appendChild(slot);

		native.appendChild(header);
		native.appendChild(content);
		native.appendChild(navButtons);

		navButtons.appendChild(navButtonPrevSlot);
		navButtons.appendChild(navButtonNextSlot);
		navButtons.appendChild(navButtonFinishSlot);

		fragment.appendChild(native);

		this.header = header;
		this.prev = navButtonPrevSlot;
		this.next = navButtonNextSlot;
		this.finish = navButtonFinishSlot;

		return fragment;
	}

	processStep(index, step, header, steps) {
		const nav = document.createElement('div');
		nav.className = 'step-header';
		nav.addEventListener('click', (e) => {
			this.goToStep(index)
		});

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
			this.setStepLocked(nav, badge);
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

		return nav
	}

	/**
	 * Sets up the attributes for the component.
	 */
	afterDraw() {
		if (this.steps.length <= 1) {
			this.prev.hidden = true;
		}

		event.addListener(this.prev, 'click', '', () => this.navigate(-1));
		event.addListener(this.next, 'click', '', () => this.navigate(1));
		event.addListener(this.finish, 'click', '', () => this.navigate(1));

		requestAnimationFrame(() => {
			this.goToStep(this.startIndex);
		});
	}

	/**
	 * Navigates to a different step in a multi-step process based on the provided direction.
	 * @param {number} direction The navigation direction.
	 * Use a positive value to move forward or a negative value to move backward.
	 */
	navigate(direction) {
		this.goToStep(this.currentStep + direction);
	}

	/**
	 * Navigates to a specific step in a workflow or process.
	 * Executes a set of operations before and after the step transition.
	 * @param {number} stepIndex The index of the step to navigate to.
	 * @returns {void} This method does not return a value.
	 */
	goToStep(stepIndex) {
		Promise.resolve(this.beforeOpen(stepIndex, this.currentStep)).then((res) => {
			this._executeGoToStep(stepIndex);

			Promise.resolve(this.afterOpen(stepIndex, this.currentStep));
		})
		.catch(console.error);
	}

	_executeGoToStep(stepIndex = 0) {
		if (stepIndex >= 0 && stepIndex < this.steps.length) {
			if (this.headerSteps[stepIndex].hasAttribute('disabled')) {
				return;
			}

			if (stepIndex > this.currentStep) {
				this.dispatchEvent(
					new CustomEvent('stepper:next', { detail: { stepIndex }, bubbles: true, composed: true })
				);
			} else {
				this.dispatchEvent(
					new CustomEvent('stepper:prev', { detail: { stepIndex }, bubbles: true, composed: true })
				);
			}

			this.headerSteps.forEach((step, index) => {
				let badge = step.querySelector('wje-badge');

				this.setStepDefault(step, badge, index);
				if (index < stepIndex) this.setStepDone(step, badge);
				if (index > stepIndex && step.hasAttribute('disabled')) this.setStepLocked(step, badge, index);
			});

			this.setStepActive(this.headerSteps[stepIndex], null, stepIndex);
			this.setContentActive(stepIndex);

			this.currentStep = stepIndex;
			this.prev.hidden = this.currentStep === 0;

			const isNextLocked = this.headerSteps[this.currentStep + 1]?.hasAttribute('locked');
			this.next.toggleAttribute('disabled', !!isNextLocked);
			this.finish.toggleAttribute('disabled', !!isNextLocked);

			if (this.currentStep === this.steps.length - 1) {
				this.next.hidden = true;
				this.finish.hidden = false;
				this.finish.style.display = 'block';
			} else {
				this.next.hidden = false;
				this.finish.hidden = true;
				this.finish.style.display = 'none';
			}
		} else if (stepIndex === this.steps.length) {
			this.dispatchEvent(
				new CustomEvent('stepper:finish', { detail: { stepIndex }, bubbles: true, composed: true })
			);
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
	 * Returns the DOM element of a step by index.
	 * @param {number} stepIndex
	 * @returns {HTMLElement}
	 */
	getStepElement(stepIndex) {
		return this.steps?.[stepIndex];
	}

	/**
	 * Appends or replaces content inside the step container.
	 * @param {number} stepIndex
	 * @param {Node|string|Node[]} content DOM node(s) or HTML string to insert.
	 * @param {{ replace?: boolean }} [options]
	 */
	renderStepContent(stepIndex, content, options = {}) {
		const stepEl = this.getStepElement(stepIndex);
		if (!stepEl) return;

		const { replace = false } = options;

		let frag = document.createDocumentFragment();
		if (typeof content === 'string') {
			const tpl = document.createElement('template');
			tpl.innerHTML = content;
			frag.append(tpl.content);
		} else if (Array.isArray(content)) {
			content.forEach(node => {
				if (node instanceof Node) frag.appendChild(node);
			});
		} else if (content instanceof Node) {
			frag.append(content);
		}

		if (replace) {
			stepEl.replaceChildren(frag);
		} else {
			stepEl.append(frag);
		}
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

	setStepLocked(nav, badge = null) {
		nav.setAttribute('disabled', '');
		nav.setAttribute('locked', '');

		const lockIcon = document.createElement('wje-icon');
		lockIcon.setAttribute('name', 'lock');
		lockIcon.setAttribute('color', "danger");
		lockIcon.setAttribute('size', 'medium');

		if (!badge) {
			badge = nav.querySelector('wje-badge');
		}
		badge.innerHTML = '';
		badge.removeAttribute('color');
		badge.classList.add('disabled');
		badge.appendChild(lockIcon);
	}

	/**
	 * A callback function that is executed before opening a step in a process.
	 * This allows for custom behavior or logic to be applied before the step is displayed.
	 * @callback beforeOpen
	 * @param {number} stepIndex The index of the step that is about to be opened.
	 * @param {object} currentStep The current step data or configuration object before opening the new step.
	 */
	beforeOpen = (stepIndex, currentStep) => {
		// Override to add custom behavior before opening a step.
	}

	/**
	 * Callback function executed after a step is opened.
	 * This function can be overridden to implement custom behavior
	 * that should take place immediately after a step is opened.
	 * @function afterOpen
	 * @param {number} stepIndex The index of the step that has been opened.
	 * @param {object} currentStep The object representing the current step that has been opened.
	 */
	afterOpen = (stepIndex, currentStep) => {
		// Override to add custom behavior after opening a step.
	}
}
