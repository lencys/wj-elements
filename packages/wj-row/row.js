import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

const template = document.createElement('template');

template.innerHTML = `<style>
	${styles}
</style>`;

export class Row extends WJElement {
    constructor() {
        super(template);
    }

    set color(value) {
        this.setAttribute("color", value);
    }

    get color() {
        return this.getAttribute("color");
    }

    className = "Row";

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
        let fragment = document.createDocumentFragment();

        let element = document.createElement("slot");

        if(this.color)
            this.classList.add("wj-color-" + this.color, "wj-color");

        fragment.appendChild(element);

        return fragment;
    }

    afterDraw(context, store, params) {
        console.log("afterDraw", this.params);
    }
}

customElements.get("wj-row") || window.customElements.define("wj-row", Row);