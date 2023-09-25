import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class Label extends WJElement {
    constructor() {
        super();
    }

    className = "Label";

    static get cssStyleSheet() {
        return styles;
    }

    static get observedAttributes() {
        return [];
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    beforeDraw(context, store, params) {
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        if(this.color)
            this.classList.add("wj-color-" + params.color, "wj-color");

        let element = document.createElement("slot");

        fragment.appendChild(element);

        return fragment;
    }
}

customElements.get("wj-label") || window.customElements.define("wj-label", Label);