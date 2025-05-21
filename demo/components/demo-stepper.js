import WJElement from '../../dist/wje-element.js';

const template = document.createElement('template');

template.innerHTML = /*html */ `
<h1>Stepper</h1>
<div class="container">

	<h2>Default navigation buttons</h2>
	<div class="playground">
			<div class="content">
					<wje-stepper active="primary" done="success">
							<wje-step active>
									Content 1
							</wje-step>
							<wje-step label="Step 2">
									Content 2
							</wje-step>
							<wje-step label="Step 3">
									Content 3
							</wje-step>
					</wje-stepper>
			</div>
	</div>

	<h2>Disabled steps</h2>
	<div class="playground">
			<div class="content">
					<wje-stepper active="primary" done="success">
							<wje-step active>
									Content 1
							</wje-step>
							<wje-step label="Step 2">
									Content 2
							</wje-step>
							<wje-step label="Step 3" disabled>
									Content 3
							</wje-step>
					</wje-stepper>
			</div>
	</div>

	<h2>Custom navigation buttons</h2>
	<div class="playground">
			<div class="content">
					<wje-stepper active="primary" done="success">
						<wje-step active>
								Content 1
						</wje-step>
						<wje-step label="Step 2">
								Content 2
						</wje-step>
						<wje-step label="Step 3">
								Content 3
						</wje-step>

						<wje-button slot="prev"  label="Prev" color="primary">
							<wje-icon name="chevron-left"></wje-icon>Previous AA
						</wje-button>
						<wje-button slot="next" label="Next" color="primary">
							Next<wje-icon name="chevron-right"></wje-icon>
						</wje-button>
						<wje-button slot="finish" label="Finish" color="primary">
							Finish<wje-icon name="chevron-right"></wje-icon>
						</wje-button>
					</wje-stepper>
				</div>
		</div>
</div>
`;

export default class DemoStepper extends WJElement {
	constructor() {
		super();
	}

	/**
	 * Returns the template for the component.
	 * @static
	 * @returns {HTMLElement} The template element
	 */
	static get customTemplate() {
		return template;
	}

	afterDraw() {
		this.context.querySelectorAll('wje-stepper').forEach((stepper) => {
			stepper.addEventListener('stepper:finish', (e) => {
				alert('Stepper finished');
			});
		});
	}
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-stepper') || window.customElements.define('demo-stepper', DemoStepper);
