import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class Card extends WJElement {
    constructor() {
        super();
    }

    className = "Card";

    static get cssStyleSheet() {
        return styles;
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let element = document.createElement("slot");

        if(params.color)
            this.classList.add("wj-color-" + params.color, "wj-color");

        fragment.appendChild(element);

        return fragment;
    }
}

customElements.get("wj-card") || window.customElements.define("wj-card", Card);