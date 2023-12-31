import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class ExampleElement extends WJElement {
    constructor() {
        super();
    }

    className = "ExampleElement";

    static get cssStyleSheet() {
        return styles;
    }

    static get observedAttributes() {
        return [];
    }

    setupAttributes() {
        this.isShadowRoot = "open";
        // or
        WjElementUtils.setAttributesToElement(this, {
            "test": "test"
        });
    }

    beforeDraw(context, store, params) {
    }

    draw(context, store, params) {
        console.log(context, store, params)
        let fragment = document.createDocumentFragment();

        let element = document.createElement("div");
        element.innerHTML = params.text;

        fragment.appendChild(element);

        return fragment;
    }

    afterDraw(context, store, params) {
        console.log("afterDraw", this.params);
    }
}

customElements.get("wj-example-element") || window.customElements.define("wj-example-element", ExampleElement);