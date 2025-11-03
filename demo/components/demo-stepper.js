import WJElement from '../../dist/wje-element.js';

const template = document.createElement('template');

template.innerHTML = `
<h1>Stepper</h1>
<div class="container">

	<!-- BASIC -->
	<h2>Basic</h2>
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
	
	<!-- LOAD -->
	
	<h2>Load</h2>
	<div class="playground">
			<div class="content">
					<wje-stepper start-index="1" active="primary" done="success" id="example-load" >
							<wje-step load="step1" active>
									Content 1
							</wje-step>
							<wje-step label="Step 2" load="step2">
									Content 2
							</wje-step>
							<wje-step label="Step 3" load="step3">
									Content 3
							</wje-step>
					</wje-stepper>
			</div>
	</div>

	<!-- DISABLED -->
	
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

	<!-- CUSTOM BUTTONS -->
	
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

		const step1 = (next, prev) => {
			const html = document.createElement('div');
			html.textContent = 'Loading Step 1...';

			stepper.renderStepContent(next, html, { replace: true })
		}

		const step2 = (next, prev) => {
			const html = document.createElement('div');
			html.textContent = 'Loading Step 2...';

			stepper.renderStepContent(next, html, { replace: true })
		}

		const step3 = (next, prev) => {
			const html = document.createElement('div');
			html.textContent = 'Loading Step 3...';

			stepper.renderStepContent(next, html, { replace: true })
		}

		const stepper = document.querySelector('#example-load');

		const loadMap = {
			step1: step1,
			step2: step2,
			step3: step3,
		};

		stepper.beforeOpen = async (next, prev) => {
			const steps = stepper.steps;
			if (!Array.isArray(steps) || !steps[next]) return;

			const key = steps[next].getAttribute("load");
			if (key && loadMap[key]) {
				await loadMap[key](next, prev);
			}
		}

		this.context.querySelectorAll('wje-stepper').forEach((s) => {
			s.addEventListener('stepper:finish', (e) => {
				alert('Stepper finished');
			});
		});
	}
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-stepper') || window.customElements.define('demo-stepper', DemoStepper);
