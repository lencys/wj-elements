import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class CardContent extends WJElement {
    constructor() {
        super();
    }

    className = "CardContent";

    static get cssStyleSheet() {
        return styles;
    }

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