import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";
// import styles from './scss/styles.scss';

import styles from "./scss/styles.scss?inline";

const template = document.createElement('template');

template.innerHTML = `<style>
	${styles}
</style>`;

export class CardContent extends WJElement {
    constructor() {
        super(template);
    }

    className = "CardContent";

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let element = document.createElement("slot");

        fragment.appendChild(element);

        return fragment;
    }
}

customElements.get("wj-card-content") || window.customElements.define("wj-card-content", CardContent);