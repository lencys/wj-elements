import WJElement from '../../dist/wje-element.js';

const template = document.createElement('template');

template.innerHTML = `
<h1>Stepper</h1>
<div class="container">

	<!-- BASIC -->
	<h2>Default</h2>
	<p class="description">
		Základné použitie komponentu <span class="tok tag">&lt;wje-stepper&gt;</span> s troma krokmi
		(<span class="tok tag">&lt;wje-step&gt;</span>). Atribúty
		<span class="tok attr">active</span> a <span class="tok attr">done</span>
		definujú farby aktuálneho a dokončeného kroku.
	</p>
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
	<p class="description">
		Dynamické načítanie obsahu krokov. Atribút
		<span class="tok attr">start-index</span> nastavuje, ktorý krok je aktívny pri štarte,
		atribút <span class="tok attr">load</span> na jednotlivých
		<span class="tok tag">&lt;wje-step&gt;</span> nesie kľúč (napr. <span class="tok attr">"step1"</span>).
		V metóde <span class="tok method">beforeOpen</span> sa podľa tohto kľúča volá príslušná
		funkcia a nový obsah sa vloží cez
		<span class="tok method">renderStepContent(next, html, { replace: true })</span>.
	</p>
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
	<p class="description">
		Ukážka kroku v stave <span class="tok attr">disabled</span>. Takýto krok
		(<span class="tok tag">&lt;wje-step disabled&gt;</span>) nie je možné aktivovať,
		ale zostáva vizuálne v sekvencii.
	</p>
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
	<p class="description">
		Vlastné navigačné tlačidlá pridávané cez sloty
		<span class="tok attr">prev</span>, <span class="tok attr">next</span> a
		<span class="tok attr">finish</span> na <span class="tok tag">&lt;wje-stepper&gt;</span>.
		Použité sú <span class="tok tag">&lt;wje-button&gt;</span> s ikonami
		(<span class="tok tag">&lt;wje-icon&gt;</span>) v obsahu. Po dokončení všetkých krokov
		stepper emituje event <span class="tok event">stepper:finish</span>, ktorý sa
		v <span class="tok method">afterDraw()</span> odchytáva a zobrazí napr. alert.
	</p>
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
