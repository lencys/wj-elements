import WJElement from "../../dist/wje-element.js";

const template = document.createElement("template");

template.innerHTML = `

<h1>Stepper</h1>
<div class="container">
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