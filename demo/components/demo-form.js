import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `<h1>form</h1>
  <div class="container">

    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <style>
          .example-icon wje-icon-picker {
            --wje-icon-picker-border-width: 0 !important;
            --wje-icon-picker-padding: .15rem !important;
            --wje-input-slot-padding-inline: .25rem !important;
          }
          
          .example-color wje-color-picker::part(anchor) {
            /*border-radius: 3px 0 0 3px !important;*/
            border-radius: 50%;
          }
        </style>

        <form name="test-form" id="test-form" method="GET">
            <wje-input name="default" label="Default input" required></wje-input>
            <wje-input type="number" name="number" label="Number" required></wje-input>
            <wje-input type="email" name="email" label="Email" required></wje-input>
            <wje-input type="password" name="password" label="Password" required></wje-input>
            <wje-input type="url" name="url" label="URL" required></wje-input>
            <wje-input type="tel" name="tel" label="Tel" required></wje-input>
            <wje-input type="date" name="date" label="Date" required></wje-input>
            <wje-input type="datetime-local" name="datetime-local" label="Datetime-local" required></wje-input>
            <wje-input type="time" name="time" label="Time" required></wje-input>
            <wje-input type="week" name="week" label="Week" required></wje-input>
            <wje-input type="month" name="month" label="Month" required></wje-input>
            


           <wje-input name="icon" variant="standard" label="Default input" class="example-icon" clearable required>
                <wje-icon-picker slot="start"></wje-icon-picker>
            </wje-input>

            <wje-select id="country-select" lazy name="countries" placeholder="Select options" max-options="1" variant="standard" max-height="200px" find multiple clearable>
                <wje-options lazy url="/api/options" item-value="id" item-text="label" option-array-path="data"></wje-options>
            </wje-select>

            <wje-select name="country" placeholder="Select options" max-options="1" variant="standard" max-height="200px" find clearable>
                <wje-options url="/api/options" item-value="id" item-text="label" option-array-path="data"></wje-options>
            </wje-select>

            <wje-checkbox name="isPosible">Default primary indeterminate</wje-checkbox>

            <wje-radio-group value="dog" name="animal" label="Animal">
              <wje-radio value="cat">Cat</wje-radio>
              <wje-radio value="elephant" disabled="">Elephant</wje-radio>
              <wje-radio indeterminate value="rabbit" >Rabbit</wje-radio>
              <wje-radio value="dog">Dog</wje-radio>

            </wje-radio-group>

            <wje-textarea label="aaaaaa" name="textArea" placeholder="textarea" required>aaaaaaaaa</wje-textarea>

          <wje-button type="reset">Reset</wje-button>
          <wje-button type="submit" color="primary">Submit</wje-button>
        </form>
      </div>
    </div>
  </div>`;

function serialize(formData) {
	const result = {};

	for (const [rawKey, value] of formData.entries()) {
		const keys = rawKey.split('.');
		let current = result;

		keys.forEach((key, index) => {
			const isLast = index === keys.length - 1;

			if (isLast) {
				if (current[key] !== undefined) {
					// If key already exists, convert to array if needed and push
					if (!Array.isArray(current[key])) {
						current[key] = [current[key]];
					}
					current[key].push(value);
				} else {
					current[key] = value;
				}
			} else {
				// If path doesn't exist, create nested object
				if (typeof current[key] !== 'object' || current[key] === null) {
					current[key] = {};
				}
				current = current[key];
			}
		});
	}

	return result;
}
export default class DemoForm extends WJElement {
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
		const select = document.querySelector('#country-select');

		select.addOptions([
			{ id: '1', label: 'Slovakia' },
			{ id: '2', label: 'Czech Republic' },
			{ id: '3', label: 'Hungary' },
			{ id: '4', label: 'Poland' },
			{ id: '5', label: 'Austria' },
			{ id: '6', label: 'Germany' },
			{ id: '7', label: 'Italy' },
			{ id: '8', label: 'France' },
			{ id: '9', label: 'Spain' },
			{ id: '10', label: 'Portugal' },
			{ id: '11', label: 'Belgium' },
			{ id: '12', label: 'Netherlands' },
			{ id: '13', label: 'Switzerland' },
			{ id: '14', label: 'Denmark' },
			{ id: '15', label: 'Norway' },
			{ id: '16', label: 'Finland' },
			{ id: '17', label: 'Sweden' },
			{ id: '18', label: 'Iceland' },
		])

		select.selectOptions([1, 2, 3]);

		document.querySelector(`[name="animal"]`).value = 'rabbit';

		const codeSnippet = new CodeSnippet();
		codeSnippet.generateSnippet(this.context);

		this.addEventListener('wje-icon-picker:select', (e) => {
			e.target.closest('wje-input').value = e.detail.name;
			e.target.onClose();
		});

		let form = this.context.querySelector('#test-form');
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			e.stopPropagation();
			e.stopImmediatePropagation();

			const formData = new FormData(form);
			let data = {};

			const newData = serialize(formData);
			console.log(newData);

			for (let [key, value] of formData.entries()) {
				try {
					data[key] = JSON.parse(value);
				} catch (error) {
					data[key] = value;
				}
			}

			console.log(data);
		});

		form.addEventListener('reset', (e) => {
			console.log('klikol som form reset', e);
		});

		const randomInput = document.createElement('wje-input');
		randomInput.setAttribute('name', 'random');
		randomInput.setAttribute('label', 'Random input');

		randomInput.value = 'nenene';
		form.append(randomInput);
	}
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-form') || window.customElements.define('demo-form', DemoForm);
