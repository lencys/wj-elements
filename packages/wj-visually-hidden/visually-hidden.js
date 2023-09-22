import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class VisuallyHidden extends WJElement {
    constructor() {
        super();
    }

    className = "VisuallyHidden";

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

        let slot = document.createElement("slot");

        fragment.appendChild(slot);

        return fragment;
    }
}

customElements.get("wj-visually-hidden") || window.customElements.define("wj-visually-hidden", VisuallyHidden);