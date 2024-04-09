import WJElement from "../../dist/wje-element.js";

const template = document.createElement('template');

template.innerHTML = `
    <h2>Default</h2>
    <div class="playground">
        <div class="content">
            <wje-reorder>
                <wje-reorder-item>Item 1</wje-reorder-item>
                <wje-reorder-item>Item 2</wje-reorder-item>
                <wje-reorder-item>Item 3</wje-reorder-item>
                <wje-reorder-item>Item 4</wje-reorder-item>
            </wje-reorder>
        </div>
    </div>
`;

export default class DemoReorder extends WJElement {
    constructor() {
        super(template);
    }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-reorder") || window.customElements.define("demo-reorder", DemoReorder);