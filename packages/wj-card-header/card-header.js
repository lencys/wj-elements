import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class CardHeader extends WJElement {
    constructor() {
        super();
    }

    className = "CardHeader";

    static get cssStyleSheet() {
        return styles;
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let element = document.createElement("slot");

        if(this.hasAttribute("separator"))
            this.classList.add("wj-separator");

        fragment.appendChild(element);

        return fragment;
    }
}

customElements.get("wj-card-header") || window.customElements.define("wj-card-header", CardHeader);