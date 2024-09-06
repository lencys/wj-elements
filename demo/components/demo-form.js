import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "../assets/js/code-snippet-builder.js";

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

        <form name="test-form" id="test-form">
           <wje-input name="default" label="Default input"></wje-input>
           <wje-input name="icon" variant="standard" label="Default input" class="example-icon" clearable>
                <wje-icon-picker slot="start"></wje-icon-picker>
            </wje-input>

            <wje-select name="countries" placeholder="Select options" max-options="1" variant="standard" max-height="200px" find multiple clearable>
                <wje-options url="/api/options" item-value="tralala" item-text="label"></wje-options>
            </wje-select>

            <wje-select name="country" placeholder="Select options" max-options="1" variant="standard" max-height="200px" find clearable>
                <wje-options url="/api/options" item-value="tralala" item-text="label"></wje-options>
            </wje-select>

            <wje-checkbox name="isPosible">Default primary indeterminate</wje-checkbox>

          <wje-button type="reset">Reset</wje-button>
          <wje-button type="submit" color="primary">Submit</wje-button>
        </form>
      </div>
    </div>
  </div>`;

export default class DemoForm extends WJElement {
    constructor() {
        super(template);
    }

    afterDraw() {
        const codeSnippet = new CodeSnippet();
        codeSnippet.generateSnippet(template, this.context);

        this.addEventListener('wje-icon-picker:select', (e) => {
            e.target.closest("wje-input").value = e.detail.name;
            e.target.onClose();
        });

        let form = this.context.querySelector('#test-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault()

            const formData = new FormData(form);
            let data = {
            };

            for (let [key, value] of formData.entries()) {
                try {
                    data[key] = JSON.parse(value)
                } catch (e) {
                    data[key] = value;
                }
            }

            console.log(data);

        })

        this.context.querySelector('#test-form').addEventListener('reset', (e) => {
            console.log('klikol som form reset', e)
        });
    }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-form") || window.customElements.define("demo-form", DemoForm);