import { WJElement } from "../../website/static/wj-elements/wj-main.js";

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