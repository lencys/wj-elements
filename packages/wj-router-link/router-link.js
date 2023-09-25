import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class RouterLink extends WJElement {
    constructor() {
        super();
    }

    className = "RouterLink";

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

customElements.get("wj-router-link") || window.customElements.define("wj-router-link", RouterLink);