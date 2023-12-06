import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class Header extends WJElement {
    constructor() {
        super();
    }

    className = "Header";

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


        let element = document.createElement("header");
        element.classList.add("native-header");
        element.setAttribute("part", "native");

        let slot = document.createElement("slot");

        element.appendChild(slot);

        fragment.appendChild(element);

        return fragment;
    }
}

customElements.get("wj-header") || window.customElements.define("wj-header", Header);