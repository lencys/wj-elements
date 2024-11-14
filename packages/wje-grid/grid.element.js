import { default as WJElement, WjElementUtils } from "../wje-element/element.js";

import styles from "./scss/styles.scss?inline";

export default class Grid extends WJElement {
    constructor() {
        super();
    }

    className = "Grid";

    static get cssStyleSheet() {
        return styles;
    }

    static get observedAttributes() {
        return [];
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw() {
        let fragment = document.createDocumentFragment();

        let element = document.createElement("slot");

        if(this.color)
            this.classList.add("wje-color-" + this.color, "wje-color");

        fragment.appendChild(element);

        return fragment;
    }
}