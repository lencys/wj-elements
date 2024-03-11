import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export default class Container extends WJElement {
    constructor() {
        super();
    }

    className = "Container";

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

        if(this.indent)
            this.style.setProperty("--wj-container-indent", this.indent);

        let element = document.createElement("slot");

        fragment.appendChild(element);

        return fragment;
    }
}