import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class Aside extends WJElement {
    constructor() {
        super();
    }

    className = "Aside";

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

        if(this.width)
            this.style.setProperty("--wj-aside-width", this.width);

        if(this.top && this.hasAttribute("fixed"))
            this.style.setProperty("--wj-aside-top", this.top);

        let element = document.createElement("slot");

        fragment.appendChild(element);

        return fragment;
    }
}

customElements.get("wj-aside") || window.customElements.define("wj-aside", Aside);