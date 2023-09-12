import WJElement from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class List extends WJElement {
    constructor() {
        super();
    }

    className = "List";

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

    afterDraw() {
        this.classList.toggle("wj-lines-" + this.lines, this.hasAttribute("lines"));
        this.classList.toggle("wj-inset", this.hasAttribute("inset"));
    }
}

customElements.get("wj-list") || window.customElements.define("wj-list", List);
