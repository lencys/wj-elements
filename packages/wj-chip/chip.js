import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class Chip extends WJElement {
    constructor() {
        super();
    }

    className = "Chip";

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

        if(this.disabled)
            this.classList.add("wj-disabled");

        if(this.outline)
            this.classList.add("wj-outline");

        fragment.appendChild(element);

        return fragment;
    }

    afterDraw() {
        if(this.hasAttribute("active")) {
            this.classList.add("wj-active");

            let i = document.createElement("wj-icon");
            i.setAttribute("name", "check");
            i.classList.add("check");

            this.context.appendChild(i);
        }
    }
}

customElements.get("wj-chip") || window.customElements.define("wj-chip", Chip);