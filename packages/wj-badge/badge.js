import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

const template = document.createElement('template');

template.innerHTML = `<style>
	${styles}
</style>`;
export class Badge extends WJElement {
    constructor() {
        super(template);
    }

    className = "Badge";

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let element = document.createElement("slot");

        if(this.color)
            this.classList.add("wj-color-" + this.color, "wj-color");


        fragment.appendChild(element);

        return fragment;
    }
}

customElements.get("wj-badge") || window.customElements.define("wj-badge", Badge);