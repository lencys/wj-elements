import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `
  <h1>Select</h1>
  <div class="container">
    
    <!-- Default -->

    <h2>Default</h2>
    <p class="description">
      Základné použitie <span class="tok tag">&lt;wje-select&gt;</span> s dátami z API cez
      <span class="tok tag">&lt;wje-options&gt;</span>. Kľúčové atribúty:
      <ul>
        <li><span class="tok attr">url</span> – endpoint pre načítanie dát</li>
        <li><span class="tok attr">item-value</span> – názov poľa pre hodnotu</li>
        <li><span class="tok attr">item-text</span> – názov poľa pre text</li>
        <li><span class="tok attr">option-array-path</span> – cesta k poľu možností v JSON</li>
        <li><span class="tok attr">max-options</span> – limit počtu vybraných možností</li>
        <li><span class="tok attr">multiple</span> – povolenie multi‑výberu</li>
        <li><span class="tok attr">clearable</span> – pridá tlačidlo na vymazanie výberu</li>
        <li><span class="tok attr">find</span> – aktivuje vyhľadávanie v možnostiach</li>
        <li><span class="tok attr">checkbox</span> – zobrazí checkbox pri každej možnosti</li>
        <li><span class="tok attr">lazy</span> – postupné načítavanie možností</li>
        <li><span class="tok attr">max-height</span> – výška dropdownu</li>
      </ul>
    </p>
    <div class="playground">
      <div class="content">
      	<wje-select placeholder="Select options" variant="standard" max-options="1" variant="standard" max-height="200px" find multiple clearable>
          <wje-options url="/api/options" item-value="value" item-text="text" option-array-path="data"></wje-options>
        </wje-select>
        
      	<wje-select lazy label="Label optionS" placeholder="Select options" variant="standard" max-height="200px" value="eae3262d-3854-4e5b-8e21-7a0a863d0593 7e771d42-c4f9-4627-9876-f7ded0b265f4" find clearable checkbox multiple>
          <wje-options lazy url="/api/options" item-value="value" item-text="text"  lazy-load-size="6" option-array-path="data"></wje-options>
        </wje-select>
      </div>
    </div>
    
    <!-- FOOTER -->

    <h2>Footer</h2>
    <p class="description">
      Ukážka vlastného footeru pomocou slotu <span class="tok attr">footer</span>. 
      Každá možnosť môže mať vlastné kontextové menu cez 
      <span class="tok tag">&lt;wje-dropdown&gt;</span> v slote <span class="tok attr">end</span>.
    </p>
    <div class="playground">
      <div class="content">
        <wje-select variant="standard" label="Label" placeholder="Select option" value="option-1" max-height="200px" class="example-footer">
          <wje-option value="option-1">Option 1
          	<wje-dropdown slot="end" placement="bottom-start" offset="5" collapsible portaled>
							<wje-button fill="link" slot="trigger" only-icon><wje-icon name="dots-vertical"></wje-icon></wje-button>
						</wje-dropdown>
          </wje-option>
          <wje-option value="option-2">Option 2
          	<wje-dropdown slot="end" placement="bottom-start" offset="5" collapsible portaled>
							<wje-button fill="link" slot="trigger" only-icon><wje-icon name="dots-vertical"></wje-icon></wje-button>
						</wje-dropdown>
          </wje-option>
          <wje-option value="option-3">Option 3</wje-option>
          <wje-option value="option-4">Option 4</wje-option>
          <wje-option value="option-5">Option 5</wje-option>
          <wje-option value="option-6">Option 6<wje-icon name="heart" slot="end"></wje-icon></wje-option>
          <wje-option value="option-7">Option 7</wje-option>
          <wje-option value="option-8">Option 8</wje-option>
          <div slot="footer">
          	Create new option <wje-button size="small" color="success">Action</wje-button>
         	</div>
        </wje-select>
        <style>
        	.example-footer {
        		[slot="footer"] {
        			display: flex;
							align-items: center;
							gap: var(--wje-spacing-x-small);
        			padding: var(--wje-spacing-x-small);
							border-top: 1px solid var(--wje-border-color);
							background: var(--wje-color-contrast-2);
        		}
					}	
				</style>
      </div>
    </div>
    
    <!-- STANDARD --> 

    <h2>Standard</h2>
    <p class="description">
      Štandardný variant selectu cez <span class="tok attr">variant="standard"</span> 
      s labelom, predvolenou hodnotou a ikonou v slote 
      <span class="tok attr">end</span>.
    </p>
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
    
    <!-- OFFSET --> 

    <h2>Offset</h2>
    <p class="description">
      Umiestnenie dropdownu ovplyvňuje atribút <span class="tok attr">offset</span>. 
      Ukážka tiež mení zaoblenie pomocou CSS premenných 
      <span class="tok css">--wje-select-border-radius</span> a 
      <span class="tok css">--wje-select-options-border-radius</span>.
    </p>
    <div class="playground">
      <div class="content">
        <wje-select id="offset" placeholder="Select option" variant="standard" offset="5">
          <wje-option value="option-1">Option 1</wje-option>
          <wje-option value="option-2">
            Option 2
            <wje-icon name="heart" slot="end"></wje-icon>
          </wje-option>
          <wje-option value="option-3" selected>Option 3</wje-option>
          <wje-option value="option-4">Option 4</wje-option>
        </wje-select>
        
        <style>
        	#offset {
        		--wje-select-border-radius: var(--wje-border-radius-large);
        		--wje-select-options-border-radius: var(--wje-border-radius-large);
        	}
        </style>
      </div>
    </div>
    
    <!-- OPTIONS -->

    <h2>Options</h2>
    <p class="description">
      Kombinácia deklaratívneho načítania možností cez 
      <span class="tok tag">&lt;wje-options&gt;</span> a programatívne vytváraného 
      selectu v <span class="tok method">afterDraw()</span> do kontajnera 
      <span class="tok attr">#placeholder</span>.
    </p>
    <div class="playground">
      <div class="content">
        <wje-select placeholder="Select options" variant="standard" max-options="1" variant="standard" max-height="200px" multiple clearable>
          <wje-options url="/api/options" item-value="value" item-text="text" option-array-path="data"></wje-options>
        </wje-select>

        <div class="content" id="placeholder"></div>
      </div>
    </div>

    <!-- LAZY OPTIONS -->

    <h2>Lazy options</h2>
    <p class="description">
      Lazy načítavanie možností cez atribút <span class="tok attr">lazy</span> na 
      <span class="tok tag">&lt;wje-select&gt;</span> aj 
      <span class="tok tag">&lt;wje-options&gt;</span>. 
      <span class="tok attr">lazy-load-size</span> určuje, koľko možností sa načíta naraz.
    </p>
    <div class="playground">
      <div class="content">
        <wje-select name="lazy-update" placeholder="Select options" variant="standard" max-options="2" variant="standard" max-height="200px" multiple clearable lazy>
          <wje-options url="/api/options" item-value="value" item-text="text" lazy-load-size="6" option-array-path="data" lazy></wje-options>
        </wje-select>
      </div>
    </div>

    <!-- FIND -->

    <h2>Find</h2>
    <p class="description">
      Vyhľadávanie v možnostiach. Dôležité atribúty:
      <ul>
        <li><span class="tok attr">find</span> – aktivuje vyhľadávanie v možnostiach</li>
        <li><span class="tok attr">checkbox</span> – zobrazí checkbox pri každej možnosti</li>
        <li><span class="tok attr">multiple</span> – povolí multi‑výber</li>
        <li><span class="tok attr">label</span> – textový popis selectu</li>
        <li><span class="tok attr">max-options</span> – limit maximálneho počtu vybraných možností</li>
      </ul>
    </p>
    <div class="playground">
      <div class="content" style="gap: .5rem;">
        <wje-select placeholder="Select options" max-options="1" variant="standard" max-height="200px" find multiple clearable>
          <wje-options url="/api/options" item-value="value"item-text="text"  option-array-path="data"></wje-options>
        </wje-select>
        
        <wje-select placeholder="Select options" max-options="1" variant="standard" max-height="200px" find multiple checkbox clearable>
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
    <p class="description">
      Autocomplete scenáre s lazy načítavaním a vyhľadávaním. Kľúčové atribúty:
      <ul>
        <li><span class="tok attr">lazy</span> – postupné načítavanie možností zo zdroja</li>
        <li><span class="tok attr">find</span> – filtrovanie možností podľa textu</li>
        <li><span class="tok attr">no-size</span> – odstráni šírku viazanú na počet možností, správa sa viac ako textový input so suggestions</li>
      </ul>
    </p>
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
    <p class="description">
      Práca s vizuálnym "check" obsahom a stavom vybranej položky:
      <ul>
        <li><span class="tok tag">&lt;template&gt;</span> – vkladá sa do <span class="tok tag">&lt;wje-select&gt;</span> a jeho obsah ide do slotu <span class="tok attr">check</span></li>
        <li><span class="tok attr">slot="check"</span> – vlastný obsah (ikonka, <span class="tok tag">&lt;wje-status&gt;</span>, checkbox) pre zobrazenie stavu</li>
        <li>CSS pre <span class="tok attr">#status</span> – zvýrazňuje vybranú možnosť (background) a medzery okolo <span class="tok tag">&lt;wje-status&gt;</span></li>
        <li>CSS pre <span class="tok attr">#classic</span> – upravuje padding možností a schováva default check ikonku cez <span class="tok css">&amp;::part(check)</span></li>
      </ul>
    </p>
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
          <wje-option value="option-2" selected>
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
    <p class="description">
      Vlastné spracovanie checkboxu: cez <span class="tok tag">&lt;template&gt;</span> 
      sa vkladá <span class="tok tag">&lt;wje-checkbox&gt;</span> do slotu 
      <span class="tok attr">check</span>. 
      V <span class="tok method">afterDraw()</span> sa stav checkboxu ručne synchronizuje pomocou 
      eventu <span class="tok event">wje-option:change</span>.
    </p>
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
    <p class="description">
      Atribút <span class="tok attr">clearable</span> pridá tlačidlo na rýchle zmazanie 
      aktuálnej hodnoty selectu.
    </p>
    <div class="playground">
      <div class="content">
        <wje-select label="Label" placeholder="Select option" clearable>
          <wje-option value="option-1">Option 1</wje-option>
          <wje-option value="option-2">Option 2</wje-option>
          <wje-option value="option-3">Option 3</wje-option>
          <wje-option value="option-4">Option 4</wje-option>
        </wje-select>
        
        <wje-select placeholder="Select option" variant="standard" clearable>
          <wje-option value="option-1">Option 1</wje-option>
          <wje-option value="option-2" selected>Option 2</wje-option>
          <wje-option value="option-3">Option 3</wje-option>
          <wje-option value="option-4">Option 4</wje-option>
        </wje-select>
      </div>
    </div>
    
    <!-- READONLY -->

    <h2>Readonly</h2>
    <p class="description">
      Režim len na čítanie cez <span class="tok attr">readonly</span>. 
      Hodnota sa dá zobraziť, ale nie zmeniť.
    </p>
    <div class="playground">
      <div class="content">
        <wje-select placeholder="Select option" label="Label" readonly style="margin-bottom: 1rem;">
          <wje-option value="option-1">Option 1</wje-option>
          <wje-option value="option-2" selected>Option 2</wje-option>
          <wje-option value="option-3">Option 3</wje-option>
          <wje-option value="option-4">Option 4</wje-option>
        </wje-select>

        <wje-select placeholder="Select option" variant="standard" readonly>
          <wje-option value="option-1">Option 1</wje-option>
          <wje-option value="option-2" selected>Option 2</wje-option>
          <wje-option value="option-3">Option 3</wje-option>
          <wje-option value="option-4">Option 4</wje-option>
        </wje-select>
      </div>
    </div>
    
    <!-- DISABLED -->

    <h2>Disabled</h2>
    <p class="description">
      Vypnutý stav komponentu pomocou <span class="tok attr">disabled</span>, 
      ktorý zablokuje interakciu a zmení vizuálny vzhľad selectu.
    </p>
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
    <p class="description">
      Multi‑výber s obmedzením počtu zvolených možností:
      <ul>
        <li><span class="tok attr">multiple</span> – povolí výber viacerých položiek</li>
        <li><span class="tok attr">value</span> – obsahuje hodnoty oddelené medzerou (napr. <span class="tok attr">"option-1 option-2"</span>)</li>
        <li><span class="tok attr">max-options</span> – nastaví horný limit počtu zvolených možností</li>
      </ul>
    </p>
    <div class="playground">
      <div class="content">
        <wje-select placeholder="Select options" variant="standard" max-options="2" variant="standard" value="option-1 option-2" multiple clearable >
          <wje-option value="option-1">Option 1</wje-option>
          <wje-option value="option-2">Option 2<wje-icon name="heart" slot="end"></wje-icon></wje-option>
          <wje-option value="option-3">Option 3</wje-option>
          <wje-option value="option-4">Option 4</wje-option>
          <wje-option value="option-5">Option 5</wje-option>
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

		const lazySelect = document.querySelector('[name=lazy-update]');
		lazySelect.addOptions([
			{ text: 'Bahrain', value: '5e13d6f2-698c-48de-962b-6594d7f72033'},
			{ text: 'Serbia', value: '018f3e77-c18b-40a9-93d1-904616b092f3'},
		]);
		lazySelect.value = '5e13d6f2-698c-48de-962b-6594d7f72033 018f3e77-c18b-40a9-93d1-904616b092f3';

		const lazySelectOptions = lazySelect.querySelector('wje-options');
		lazySelectOptions.htmlItem = (data) => {
			const option = document.createElement('wje-option');
			const key = lazySelectOptions.itemValue;
			const text = lazySelectOptions.itemText;

			option.setAttribute('value', data[key]);
			option.innerHTML = data[text];

			return option;
		}

		const select = document.createElement('wje-select');
		select.setAttribute('placeholder', 'Select options');
		select.setAttribute('variant', 'standard');
		select.setAttribute('max-height', '200px');
		select.setAttribute('max-options', '1');
		select.setAttribute('multiple', '');
		select.setAttribute('clearable', '');
		select.setAttribute('value', 'aeee beee');

		const options = document.createElement('wje-options');
		options.setAttribute('url', '/api/options');
		options.setAttribute('item-value', 'value');
		options.setAttribute('item-text', 'text');

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

		select.append(options);

		this.querySelector('#placeholder').appendChild(select);

		// Custom checkbox handling
		this.querySelectorAll("#custom-checkbox wje-option").forEach(option => {
			option.addEventListener('wje-option:change', (e) => {
				e.detail.option.querySelector('wje-checkbox').checked = !e.detail.option.selected;
			});
		});

		// Footer action and dropdown
		// this.querySelectorAll(".example-footer wje-button").forEach(button => {
		// 	button.addEventListener('click', (e) => {
		// 		e.stopPropagation();
		// 		alert('Create new option action');
		// 	});
		// });

		const dropdownOptions = [
			{ value: 'sk', label: 'Slovensky' },
			{ value: 'en', label: 'English' },
			{ value: 'es', label: 'Español' }
		];

		this.querySelectorAll(".example-footer wje-dropdown").forEach(dropdown => {
			dropdown.beforeShow = (el) => {
				if (el._built) return; // už vyrobené, nerob znova

				const fragment = document.createDocumentFragment();
				const menu = document.createElement('wje-menu');
				menu.setAttribute('variant', 'context');

				dropdownOptions.forEach(opt => {
					const item = document.createElement('wje-menu-item');
					item.setAttribute('value', opt.value);
					item.setAttribute('route', 'accordion')
					item.textContent = opt.label;
					// item.addEventListener('wje-menu-item:click', (e) => {
					// 	console.log("click on", e);
					// });

					fragment.append(item);
				});

				menu.append(fragment);
				el.append(menu);

				el._built = true;
			}
		});
	}
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-select') || window.customElements.define('demo-select', DemoSelect);
