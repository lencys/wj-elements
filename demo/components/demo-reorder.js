import WJElement from "../../dist/wje-element.js";

const template = document.createElement('template');

template.innerHTML = `
    <h1>We here!</h1>
`;

export default class DemoReorder extends WJElement {
    constructor() {
        super(template);
    }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-reorder") || window.customElements.define("demo-reorder", DemoReorder);