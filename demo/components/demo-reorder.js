import WJElement from "../../dist/wje-element.js";

const template = document.createElement('template');

template.innerHTML = `
    <h2>Default</h2>
    <div class="playground">
        <div class="content">
            <wje-reorder>
                <wje-reorder-item>Reorder item 1</wje-reorder-item>
                <wje-reorder-item>Reorder item 2</wje-reorder-item>
                <wje-reorder-item>Reorder item 3</wje-reorder-item>
                <wje-reorder-item>Reorder item 4</wje-reorder-item>
                <wje-reorder-item>Reorder item 5</wje-reorder-item>
                <wje-reorder-item>Reorder item 6</wje-reorder-item>
                <wje-reorder-item>Reorder item 7</wje-reorder-item>
                <wje-reorder-item>Reorder item 8</wje-reorder-item>
            </wje-reorder>
        </div>
    </div>

    <h2>Disabled</h2>
    <div class="playground">
        <div class="content">
            <wje-reorder disabled>
                <wje-reorder-item>Reorder item 1</wje-reorder-item>
                <wje-reorder-item>Reorder item 2</wje-reorder-item>
                <wje-reorder-item>Reorder item 3</wje-reorder-item>
                <wje-reorder-item>Reorder item 4</wje-reorder-item>
                <wje-reorder-item>Reorder item 5</wje-reorder-item>
                <wje-reorder-item>Reorder item 6</wje-reorder-item>
                <wje-reorder-item>Reorder item 7</wje-reorder-item>
                <wje-reorder-item>Reorder item 8</wje-reorder-item>
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
