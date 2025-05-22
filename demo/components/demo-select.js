import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `
  <h1>Select</h1>
  <div class="container">
    
    <!-- OPTIONS -->

    <h2>Options</h2>
    <div class="playground">
      <div class="content">
        <wje-select label="Label" variant="standard" placeholder="Select option">
          <wje-option value="option-1">Option 1</wje-option>
          <wje-option value="option-2">
            Option 2
            <wje-icon name="heart" slot="end"></wje-icon>
          </wje-option>
          <wje-option value="option-3">
            Option 3
            <wje-dropdown id="custom-dropdown" placement="right-start" offset="5" collapsible>
              <wje-avatar label="Petr Rahman" initials slot="trigger"></wje-avatar>
              <wje-menu class="custom-menu" active>
                <div>
                  <wje-avatar>
                    <wje-img src="/assets/img/avatar.svg"></wje-img>
                  </wje-avatar>
                  <h5>Petr Rahman</h5>
                </div>
                <wje-divider></wje-divider>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
                <wje-divider></wje-divider>
                <wje-menu-item>Link A <wje-icon name="check" slot="end"></wje-menu-item>
                <wje-menu-item>Link B</wje-menu-item>
              </wje-menu>
            </wje-dropdown>
          </wje-option>
          <wje-option value="option-4">Option 4</wje-option>
        </wje-select>
        
        <wje-select placeholder="Select options" variant="standard" max-options="1" variant="standard" max-height="200px" multiple clearable>
          <wje-options url="/api/options" item-value="value"item-text="text"  option-array-path="data"></wje-options>
        </wje-select>

        <div class="content" id="placeholder"></div>
      </div>
    </div>

    <!-- LAZY OPTIONS -->

    <h2>Lazy options</h2>
    <div class="playground">
      <div class="content">
        <wje-select lazy id="lazy-update" placeholder="Select options" variant="standard" max-options="2" variant="standard" max-height="200px" multiple clearable>
          <wje-options lazy url="/api/options" item-value="value" item-text="text" lazy-load-size="6" option-array-path="data"></wje-options>
        </wje-select>
      </div>
    </div>

    <!-- FIND -->

    <h2>Find</h2>
    <div class="playground">
      <div class="content" style="gap: .5rem;">
        <wje-select placeholder="Select options" max-options="1" variant="standard" max-height="200px" find multiple clearable>
          <wje-options url="/api/options" item-value="value"item-text="text"  option-array-path="data"></wje-options>
        </wje-select>
        
        <wje-select placeholder="Select options" variant="standard" max-height="200px" find clearable>
          <wje-options url="/api/options" item-value="value"item-text="text"  option-array-path="data"></wje-options>
        </wje-select>
        
        <wje-select label="Label" placeholder="Select options" max-options="1" max-height="200px" find multiple clearable>
          <wje-options url="/api/options" item-value="value"item-text="text"  option-array-path="data"></wje-options>
        </wje-select>
        
        <wje-select label="Label" placeholder="Select options" max-height="200px" find clearable>
          <wje-options url="/api/options" item-value="value"item-text="text"  option-array-path="data"></wje-options>
        </wje-select>
      </div>
    </div>

    <!-- AUTOCOMPLETE -->

    <h2>Autocomplete</h2>
    <div class="playground">
      <div class="content" style="gap: .5rem;">
        <wje-select lazy placeholder="Select options" max-options="1" variant="standard" max-height="200px" find multiple clearable>
          <wje-options lazy url="/api/options" item-value="value" item-text="text" lazy-load-size="6" option-array-path="data"></wje-options>
        </wje-select>
        
        <wje-select lazy placeholder="Select options" variant="standard" max-height="200px" find clearable>
          <wje-options lazy url="/api/options" item-value="value"item-text="text"  lazy-load-size="6" option-array-path="data"></wje-options>
        </wje-select>
        
        <wje-select lazy label="Label" placeholder="Select options" max-options="1" max-height="200px" find multiple clearable>
          <wje-options lazy url="/api/options" item-value="value"item-text="text"  lazy-load-size="6" option-array-path="data"></wje-options>
        </wje-select>
        
        <wje-select lazy label="Label" placeholder="Select options" max-height="200px" find clearable>
          <wje-options lazy url="/api/options" item-value="value"item-text="text"  lazy-load-size="6" option-array-path="data"></wje-options>
        </wje-select>
      </div>
    </div>
    
    <!-- DEFAULT -->

    <h2>Default</h2>
    <div class="playground">
      <div class="content">
        <wje-select label="Label" placeholder="Select option">
          <wje-option value="option-1">Option 1</wje-option>
          <wje-option value="option-2">
            Option 2
            <wje-icon name="heart" slot="end"></wje-icon>
          </wje-option>
          <wje-option value="option-3">Option 3</wje-option>
          <wje-option value="option-4">Option 4</wje-option>
        </wje-select>
      </div>
    </div>
    
    <!-- STANDARD -->

    <h2>Standard</h2>
    <div class="playground">
      <div class="content">
        <wje-select label="Label test" placeholder="Select option" variant="standard">
          <wje-option value="option-1">Option 1</wje-option>
          <wje-option value="option-2">
            Option 2
            <wje-icon name="heart" slot="end"></wje-icon>
          </wje-option>
          <wje-option value="option-3" selected>Option 3</wje-option>
          <wje-option value="option-4">Option 4</wje-option>
        </wje-select>
      </div>
    </div>
    
    <!-- STANDARD -->

    <h2>Standard</h2>
    <div class="playground" style="background: #ccc;">
      <div class="content">
        <wje-select label="Label test" placeholder="Select option" variant="standard">
          <wje-option value="option-1">Option 1</wje-option>
          <wje-option value="option-2">
            Option 2
            <wje-icon name="heart" slot="end"></wje-icon>
          </wje-option>
          <wje-option value="option-3" selected>Option 3</wje-option>
          <wje-option value="option-4">Option 4</wje-option>
        </wje-select>
      </div>
    </div>
    
    <!-- CLEARABLE -->

    <h2>Clearable</h2>
    <div class="playground">
      <div class="content">
        <wje-select label="Label" placeholder="Select option" clearable>
          <wje-option value="option-1">Option 1</wje-option>
          <wje-option value="option-2">Option 2</wje-option>
          <wje-option value="option-3">Option 3</wje-option>
          <wje-option value="option-4">Option 4</wje-option>
        </wje-select>
      </div>
    </div>
    
    <!--  DISABLED-->

    <h2>Disabled</h2>
    <div class="playground">
      <div class="content">
        <wje-select placeholder="Select option" label="Label" disabled style="margin-bottom: 1rem;">
          <wje-option value="option-1">Option 1</wje-option>
          <wje-option value="option-2" selected>Option 2</wje-option>
          <wje-option value="option-3">Option 3</wje-option>
          <wje-option value="option-4">Option 4</wje-option>
        </wje-select>

        <wje-select placeholder="Select option" variant="standard" disabled>
          <wje-option value="option-1">Option 1</wje-option>
          <wje-option value="option-2" selected>Option 2</wje-option>
          <wje-option value="option-3">Option 3</wje-option>
          <wje-option value="option-4">Option 4</wje-option>
        </wje-select>
      </div>
    </div>
    
    <!-- MULTIPLE -->

    <h2>Multiple</h2>
    <div class="playground">
      <div class="content">
        <wje-select placeholder="Select options" variant="standard" max-options="2" variant="standard" multiple clearable>
          <wje-option value="option-1">Option 1</wje-option>
          <wje-option value="option-2">
            Option 2
            <wje-icon name="heart" slot="end"></wje-icon>
          </wje-option>
          <wje-option value="option-3" selected>Option 3</wje-option>
          <wje-option value="option-4" selected>Option 4</wje-option>
          <wje-option value="option-5" selected>Option 5</wje-option>
          <wje-option value="option-6">Option 6</wje-option>
        </wje-select>
      </div>
    </div>
  </div>`;

export default class DemoSelect extends WJElement {
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
		const codeSnippet = new CodeSnippet();
		codeSnippet.generateSnippet(this.context);

		const lazySelect = document.querySelector('#lazy-update');

		lazySelect.addOptions([{ text: 'aeee', value: 'aeee' }, { text: 'beee', value: 'beee' }]);
		lazySelect.selectOptions(['aeee', 'beee'], false);
		lazySelect.querySelector('wje-options').htmlItem = user => {
			debugger
			const option = document.createElement('wje-option');
			option.setAttribute('value', user.id);
			option.innerHTML = user.firstName ? `${user.firstName} ${user.lastName}` : user.name;
			return option;
		}

		const select = document.createElement('wje-select');
		select.setAttribute('placeholder', 'Select options');
		select.setAttribute('variant', 'standard');
		select.setAttribute('max-height', '200px');
		select.setAttribute('max-options', '1');
		select.setAttribute('multiple', '');
		select.setAttribute('clearable', '');

		const options = document.createElement('wje-options');
		options.setAttribute('url', '/api/options');
		options.setAttribute('item-value', 'value');
		options.setAttribute('item-text', 'text');
		options.setAttribute('option-array-path', 'data');

		options.htmlItem = o => {
			const option = document.createElement('wje-option');
			option.setAttribute('value', o.value);
			option.innerHTML = true ? `<div><div> ${true ? `${o.id} ${o.text}` : o.label} </div> <div class="small-text">${o.label ? o.label : "chyba popis moznosti"}</div></div>` : `${true ? `${o.id} ${o.text}` : o.label}`;
			return option;
		}

		select.addOptions([
			{ text: 'aaaa', value: 'aeee' },
			{ text: 'bbbb', value: 'beee' },
			{ text: 'cccc', value: 'ceee' },
			{ text: 'dddd', value: 'deee' },
			{ text: 'eeee', value: 'eeee' },
			{ text: 'ffff', value: 'feee' },
			{ text: 'gggg', value: 'geee' },
			{ text: 'hhhh', value: 'heee' },
			{ text: 'iiii', value: 'ieee' },
			{ text: 'jjjj', value: 'jeee' },
			{ text: 'kkkk', value: 'keee' },
			{ text: 'llll', value: 'leee' },
			{ text: 'mmmm', value: 'meee' },
			{ text: 'nnnn', value: 'neee' },
			{ text: 'oooo', value: 'oeee' },
			{ text: 'pppp', value: 'peee' },
			{ text: 'qqqq', value: 'qeee' },
			{ text: 'rrrr', value: 'reee' },
			{ text: 'ssss', value: 'seee' },
			{ text: 'tttt', value: 'teee' },
			{ text: 'uuuu', value: 'ueee' },
			{ text: 'vvvv', value: 'veee' },
			{ text: 'wwww', value: 'weee' },
			{ text: 'xxxx', value: 'xeee' },
			{ text: 'yyyy', value: 'yeee' },
			{ text: 'zzzz', value: 'zeee' },
		]);
		select.selectOptions(['aeee', 'beee'], false);
		select.value = ['aeee', 'beee'];

		select.appendChild(options);

		this.querySelector('#placeholder').appendChild(select);
	}
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-select') || window.customElements.define('demo-select', DemoSelect);
