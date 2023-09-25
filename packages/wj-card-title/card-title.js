import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class CardTitle extends WJElement {
    constructor() {
        super();
    }

    className = "CardTitle";

    static get cssStyleSheet() {
        return styles;
    }

    static get observedAttributes() {
        return [];
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

customElements.get("wj-card-title") || window.customElements.define("wj-card-title", CardTitle);