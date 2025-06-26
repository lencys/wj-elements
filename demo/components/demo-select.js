import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `
  <h1>Select</h1>
  <div class="container">
    
<!--    &lt;!&ndash; Default &ndash;&gt;-->

<!--    <h2>Default</h2>-->
<!--    <div class="playground">-->
<!--      <div class="content">-->
<!--        <wje-select label="Label" placeholder="Select option">-->
<!--          <wje-option value="option-1">Option 1</wje-option>-->
<!--          <wje-option value="option-2">-->
<!--            Option 2-->
<!--            <wje-icon name="heart" slot="end"></wje-icon>-->
<!--          </wje-option>-->
<!--          <wje-option value="option-3">Option 3</wje-option>-->
<!--          <wje-option value="option-4">Option 4</wje-option>-->
<!--        </wje-select>-->
<!--      </div>-->
<!--    </div>-->
<!--    -->
<!--    &lt;!&ndash; STANDARD &ndash;&gt; -->

<!--    <h2>Standard</h2>-->
<!--    <div class="playground">-->
<!--      <div class="content">-->
<!--        <wje-select label="Label test" placeholder="Select option" variant="standard">-->
<!--          <wje-option value="option-1">Option 1</wje-option>-->
<!--          <wje-option value="option-2">-->
<!--            Option 2-->
<!--            <wje-icon name="heart" slot="end"></wje-icon>-->
<!--          </wje-option>-->
<!--          <wje-option value="option-3" selected>Option 3</wje-option>-->
<!--          <wje-option value="option-4">Option 4</wje-option>-->
<!--        </wje-select>-->
<!--      </div>-->
<!--    </div>-->
<!--    -->
<!--    &lt;!&ndash; OFFSET &ndash;&gt; -->

<!--    <h2>Offset</h2>-->
<!--    <div class="playground">-->
<!--      <div class="content">-->
<!--        <wje-select id="offset" placeholder="Select option" variant="standard" offset="5">-->
<!--          <wje-option value="option-1">Option 1</wje-option>-->
<!--          <wje-option value="option-2">-->
<!--            Option 2-->
<!--            <wje-icon name="heart" slot="end"></wje-icon>-->
<!--          </wje-option>-->
<!--          <wje-option value="option-3" selected>Option 3</wje-option>-->
<!--          <wje-option value="option-4">Option 4</wje-option>-->
<!--        </wje-select>-->
<!--        -->
<!--        <style>-->
<!--        	#offset {-->
<!--        		&#45;&#45;wje-select-border-radius: var(&#45;&#45;wje-border-radius-large);-->
<!--        		&#45;&#45;wje-select-options-border-radius: var(&#45;&#45;wje-border-radius-large);-->
<!--        	}-->
<!--        </style>-->
<!--      </div>-->
<!--    </div>-->
<!--    -->
<!--    &lt;!&ndash; OPTIONS &ndash;&gt;-->

<!--    <h2>Options</h2>-->
<!--    <div class="playground">-->
<!--      <div class="content">-->
<!--        <wje-select label="Label" variant="standard" placeholder="Select option">-->
<!--          <wje-option value="option-1">Option 1</wje-option>-->
<!--          <wje-option value="option-2">Option 2<wje-icon name="heart" slot="end"></wje-icon></wje-option>-->
<!--          <wje-option value="option-3">Option 3</wje-option>-->
<!--          <wje-option value="option-4">Option 4</wje-option>-->
<!--        </wje-select>-->
<!--        -->
<!--        <wje-select placeholder="Select options" variant="standard" max-options="1" variant="standard" max-height="200px" multiple clearable>-->
<!--          <wje-options url="/api/options" item-value="value" item-text="text" option-array-path="data"></wje-options>-->
<!--        </wje-select>-->

<!--        <div class="content" id="placeholder"></div>-->
<!--      </div>-->
<!--    </div>-->

<!--    &lt;!&ndash; LAZY OPTIONS &ndash;&gt;-->

<!--    <h2>Lazy options</h2>-->
<!--    <div class="playground">-->
<!--      <div class="content">-->
<!--        <wje-select name="lazy-update" placeholder="Select options" variant="standard" max-options="2" variant="standard" max-height="200px" multiple clearable lazy>-->
<!--          <wje-options url="/api/options" item-value="value" item-text="text" lazy-load-size="6" option-array-path="data" lazy></wje-options>-->
<!--        </wje-select>-->
<!--      </div>-->
<!--    </div>-->

<!--    &lt;!&ndash; FIND &ndash;&gt;-->

<!--    <h2>Find</h2>-->
<!--    <div class="playground">-->
<!--      <div class="content" style="gap: .5rem;">-->
<!--        <wje-select placeholder="Select options" max-options="1" variant="standard" max-height="200px" find multiple clearable>-->
<!--          <wje-options url="/api/options" item-value="value"item-text="text"  option-array-path="data"></wje-options>-->
<!--        </wje-select>-->
<!--        -->
<!--        <wje-select placeholder="Select options" max-options="1" variant="standard" max-height="200px" find multiple checkbox clearable>-->
<!--          <wje-options url="/api/options" item-value="value"item-text="text"  option-array-path="data"></wje-options>-->
<!--        </wje-select>-->
<!--        -->
<!--        <wje-select placeholder="Select options" variant="standard" max-height="200px" find clearable>-->
<!--          <wje-options url="/api/options" item-value="value"item-text="text"  option-array-path="data"></wje-options>-->
<!--        </wje-select>-->
<!--        -->
<!--        <wje-select label="Label" placeholder="Select options" max-options="1" max-height="200px" find multiple clearable>-->
<!--          <wje-options url="/api/options" item-value="value"item-text="text"  option-array-path="data"></wje-options>-->
<!--        </wje-select>-->
<!--        -->
<!--        <wje-select label="Label" placeholder="Select options" max-height="200px" find clearable>-->
<!--          <wje-options url="/api/options" item-value="value"item-text="text"  option-array-path="data"></wje-options>-->
<!--        </wje-select>-->
<!--      </div>-->
<!--    </div>-->

    <!-- AUTOCOMPLETE -->

    <h2>Autocomplete</h2>
    <div class="playground">
      <div class="content" style="gap: .5rem;">
        <wje-select placeholder="Select options" max-options="1" variant="standard" max-height="200px" find multiple clearable lazy no-size>
          <wje-options url="/api/options" item-value="value" item-text="text" lazy-load-size="6" option-array-path="data" lazy></wje-options>
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
    
    <!-- CHECKBOX -->

    <h2>Checkbox</h2>
    <div class="playground">
      <div class="content">
      	<wje-select label="Single Star" placeholder="Select option" variant="standard" clearable>
        	<template>
        		<wje-icon name="star" slot="check"></wje-icon>
					</template>
          <wje-option value="option-1">Option 1</wje-option>
          <wje-option value="option-2">
            Option 2
            <wje-icon name="heart" slot="end"></wje-icon>
          </wje-option>
          <wje-option value="option-3">Option 3</wje-option>
          <wje-option value="option-4">Option 4</wje-option>
        </wje-select>
        
        <wje-select label="Single" placeholder="Select option" variant="standard" clearable>
          <wje-option value="option-1">Option 1</wje-option>
          <wje-option value="option-2">
            Option 2
            <wje-icon name="heart" slot="end"></wje-icon>
          </wje-option>
          <wje-option value="option-3">Option 3</wje-option>
          <wje-option value="option-4">Option 4</wje-option>
        </wje-select>
        
        <wje-select id="status" label="Single Status" placeholder="Select option" variant="standard" find clearable>
        	<wje-option value="option-1">
        		<wje-status color="complete" slot="check"></wje-status>
        		Option 1
					</wje-option>
          <wje-option value="option-2">
          	<wje-status color="success" slot="check"></wje-status>
          	Option 2
          </wje-option>
          <wje-option value="option-3">
          	<wje-status color="warning" slot="check"></wje-status>
            Option 3
            <wje-icon name="heart" slot="end"></wje-icon>
          </wje-option>
          <wje-option value="option-4">
        		<wje-status color="danger" slot="check"></wje-status>
          	Option 4
          </wje-option>
          <wje-option value="option-5">
         		<wje-status color="contrast" slot="check"></wje-status>
          	Option 5
          </wje-option>
          <wje-option value="option-6">
          	<wje-status color="primary" slot="check"></wje-status>
          	Option 6
					</wje-option>
        </wje-select>
        
        <wje-select id="classic" label="Single Classic" placeholder="Select option" variant="standard" find clearable>
        	<wje-option value="option-1">Option 1</wje-option>
          <wje-option value="option-2">Option 2</wje-option>
          <wje-option value="option-3">Option 3</wje-option>
        </wje-select>
        
        <wje-select label="Multiple" placeholder="Select option" variant="standard" multiple clearable checkbox>
          <wje-option value="option-1">Option 1</wje-option>
          <wje-option value="option-2">
            Option 2
            <wje-icon name="heart" slot="end"></wje-icon>
          </wje-option>
          <wje-option value="option-3">Option 3</wje-option>
          <wje-option value="option-4">Option 4</wje-option>
        </wje-select>
        
        <wje-select lazy label="Label optionS" placeholder="Select options" variant="standard" max-height="200px" find clearable checkbox multiple>
          <wje-options lazy url="/api/options" item-value="value" item-text="text"  lazy-load-size="6" option-array-path="data"></wje-options>
        </wje-select>
        
        <style>
        	#status {
        		wje-option[selected] {
        			background: var(--wje-option-highlighted);
        		}
        		wje-status {
							margin: 0 var(--wje-spacing-x-small);
						}
        	}
        	
        	#classic {
        		wje-option {
        			&::part(native) {
        				padding-inline: var(--wje-spacing-x-small);
        			}
        			&[selected]{
        				background: var(--wje-option-highlighted);
        			}
        		}
        		wje-option::part(check) {
        			display: none;
        		}
        	}
        </style>
      </div>
    </div>
    
    <!-- CUSTOM CHECKBOX HANDLING -->

    <h2>Custom checkbox handling</h2>
    <div class="playground">
      <div class="content">
        <wje-select id="custom-checkbox" label="Multiple" placeholder="Select option" variant="standard" multiple clearable>
        	<template>
        		<wje-checkbox slot="check"></wje-checkbox>
					</template>
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

		// const lazySelect = document.querySelector('[name=lazy-update]');
		// lazySelect.value = '5e13d6f2-698c-48de-962b-6594d7f72033 018f3e77-c18b-40a9-93d1-904616b092f3';
		// lazySelect.addOptions([
		// 	{ text: 'Bahrain', value: '5e13d6f2-698c-48de-962b-6594d7f72033'},
		// 	{ text: 'Serbia', value: '018f3e77-c18b-40a9-93d1-904616b092f3'},
		// ]);
		// // lazySelect.selectOptions([ "06a3d2a9-ccf0-4294-bb4a-d43be4ca792f", "018f3e77-c18b-40a9-93d1-904616b092f3", "5e13d6f2-698c-48de-962b-6594d7f72033" ]);
		//
		// const lazySelectOptions = lazySelect.querySelector('wje-options');
		// lazySelectOptions.htmlItem = (data) => {
		// 	const option = document.createElement('wje-option');
		// 	const key = lazySelectOptions.itemValue || 'ttt';
		// 	const text = lazySelectOptions.itemText || 'ddd';
		//
		// 	option.setAttribute('value', data[key]);
		// 	option.innerHTML = data[text];
		//
		// 	return option;
		// }

		// const select = document.createElement('wje-select');
		// select.setAttribute('placeholder', 'Select options');
		// select.setAttribute('variant', 'standard');
		// select.setAttribute('max-height', '200px');
		// select.setAttribute('max-options', '1');
		// select.setAttribute('multiple', '');
		// select.setAttribute('clearable', '');
		//
		// const options = document.createElement('wje-options');
		// options.setAttribute('url', '/api/options');
		// options.setAttribute('item-value', 'value');
		// options.setAttribute('item-text', 'text');
		//
		// options.htmlItem = o => {
		// 	const option = document.createElement('wje-option');
		// 	option.setAttribute('value', o.value);
		// 	option.innerHTML = true ? `<div><div> ${true ? `${o.id} ${o.text}` : o.label} </div> <div class="small-text">${o.label ? o.label : "chyba popis moznosti"}</div></div>` : `${true ? `${o.id} ${o.text}` : o.label}`;
		// 	return option;
		// }
		//
		// select.addOptions([
		// 	{ text: 'aaaa', value: 'aeee' },
		// 	{ text: 'bbbb', value: 'beee' },
		// 	{ text: 'cccc', value: 'ceee' },
		// 	{ text: 'dddd', value: 'deee' },
		// 	{ text: 'eeee', value: 'eeee' },
		// 	{ text: 'ffff', value: 'feee' },
		// 	{ text: 'gggg', value: 'geee' },
		// 	{ text: 'hhhh', value: 'heee' },
		// 	{ text: 'iiii', value: 'ieee' },
		// 	{ text: 'jjjj', value: 'jeee' },
		// 	{ text: 'kkkk', value: 'keee' },
		// 	{ text: 'llll', value: 'leee' },
		// 	{ text: 'mmmm', value: 'meee' },
		// 	{ text: 'nnnn', value: 'neee' },
		// 	{ text: 'oooo', value: 'oeee' },
		// 	{ text: 'pppp', value: 'peee' },
		// 	{ text: 'qqqq', value: 'qeee' },
		// 	{ text: 'rrrr', value: 'reee' },
		// 	{ text: 'ssss', value: 'seee' },
		// 	{ text: 'tttt', value: 'teee' },
		// 	{ text: 'uuuu', value: 'ueee' },
		// 	{ text: 'vvvv', value: 'veee' },
		// 	{ text: 'wwww', value: 'weee' },
		// 	{ text: 'xxxx', value: 'xeee' },
		// 	{ text: 'yyyy', value: 'yeee' },
		// 	{ text: 'zzzz', value: 'zeee' },
		// ]);
		// select.selectOptions(['aeee', 'beee'], false);
		// select.value = ['aeee', 'beee'];
		//
		// select.append(options);
		//
		// this.querySelector('#placeholder').appendChild(select);

		// Custom checkbox handling
		this.querySelectorAll("#custom-checkbox wje-option").forEach(option => {
			option.addEventListener('wje-option:change', (e) => {
				e.detail.option.querySelector('wje-checkbox').checked = !e.detail.option.selected;
			});
		})
	}
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-select') || window.customElements.define('demo-select', DemoSelect);
