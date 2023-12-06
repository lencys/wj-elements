import { WJElement } from "../../dist/wj-master.js";

class Application extends WJElement {
    constructor() {
        super();
    }

    draw() {
        let fragment = document.createDocumentFragment();

        let element = document.createElement("slot");

        fragment.appendChild(element);

        return fragment;
    }
}

customElements.define('wj-application', Application)