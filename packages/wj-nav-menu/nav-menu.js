import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class NavMenu extends WJElement {
    constructor() {
        super();
    }

    className = "ButtonGroup";

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

        let element = document.createElement("div");
        element.classList.add("native-button-group");
        element.setAttribute("part", "native");

        this.slotElement = document.createElement("slot");

        element.appendChild(this.slotElement);

        fragment.appendChild(element);

        return fragment;
    }
}

customElements.get("wj-button-group") || window.customElements.define("wj-button-group", NavMenu);