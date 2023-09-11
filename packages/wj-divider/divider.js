import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class Divider extends WJElement {
    constructor() {
        super();
    }

    className = "Divider";

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

        let native = document.createElement("div");
        let slot = document.createElement("slot");

        native.appendChild(slot);
        fragment.appendChild(native);

        return fragment;
    }
}

customElements.get("wj-divider") || window.customElements.define("wj-divider", Divider);