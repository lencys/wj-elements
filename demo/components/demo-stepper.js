import WJElement from "../../dist/wje-element.js";

const template = document.createElement("template");

template.innerHTML = `

<h1>Stepper</h1>
<div class="container">
    <div class="playground">
        <div class="content">
            <wje-stepper>
                <wje-step>
                    Content 1
                </wje-step>
                <wje-step label="disabled" disabled>
                    Content 2 is disabled to click on
                </wje-step>
                <wje-step label="krok 3">
                    <wje-checkbox id="test" disabled>Disabled</wje-checkbox>
                    <wje-checkbox checked="">Custom label for step header</wje-checkbox>
                </wje-step>
            </wje-stepper>
        </div>
    </div>
</div>
`;

export default class DemoStepper extends WJElement {
    constructor() {
        super(template);
    }
}

let __esModule = 'true';
export {__esModule};

customElements.get("demo-stepper") || window.customElements.define("demo-stepper", DemoStepper);