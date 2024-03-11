import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export default class Badge extends WJElement {
    constructor() {
        super();
    }

    className = "Badge";

    static get cssStyleSheet() {
        return styles;
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let element = document.createElement("slot");

        if(this.color)
            this.classList.add("wj-color-" + this.color, "wj-color");


        fragment.appendChild(element);

        return fragment;
    }
}