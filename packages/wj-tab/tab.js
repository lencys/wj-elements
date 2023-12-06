import { default as WJElement, event } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class Tab extends WJElement {
    constructor() {
        super();

        this.last = false;
    }

    className = "Tab";

    static get cssStyleSheet() {
        return styles;
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let a = document.createElement("a");
        a.setAttribute("href", "#" + this.panel);
        a.innerHTML = this.innerHTML;

        fragment.appendChild(a);

        return fragment;
    }

    afterDraw() {
        event.addListener(this, "click", "wj:tab-change");
    }
}

customElements.get("wj-tab") || window.customElements.define("wj-tab", Tab);