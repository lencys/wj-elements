import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";
import { drag } from "./service/service.js";

import styles from "./scss/styles.scss?inline";

export class ImgComparer extends WJElement {
    constructor() {
        super();
    }

    className = "ImgComparer";

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

        let native = document.createElement("div");
        native.classList.add("native-split-view");

        let beforeElement = document.createElement("div");
        beforeElement.classList.add("wj-before");

        let before = document.createElement("slot");
        before.setAttribute("name", "before");

        let afterElement = document.createElement("div");
        afterElement.classList.add("wj-after");

        let after = document.createElement("slot");
        after.setAttribute("name", "after");

        let icon = document.createElement("wj-icon");
        icon.setAttribute("name", "arrows-left-right");

        let dividerElement = document.createElement("div");
        dividerElement.classList.add("wj-divider");
        dividerElement.setAttribute("part", "divider");
        dividerElement.addEventListener("mousedown", this.handleDrag, false);

        beforeElement.appendChild(before);
        afterElement.appendChild(after);
        dividerElement.appendChild(icon);

        native.appendChild(beforeElement);
        native.appendChild(afterElement);
        native.appendChild(dividerElement);

        fragment.appendChild(native);

        this.native = native;

        return fragment;
    }

    handleDrag = (e) => {
        const { width } = this.native.getBoundingClientRect();

        drag(this, {
            onMove: (x) => {
                let value = (x / width) * 100;
                this.position = parseFloat(this.clamp(value, 0, 100).toFixed(2));
                this.native.style.setProperty("--wj-img-compare-divider-left", this.position + "%");
                this.native.style.setProperty("--wj-img-compare-clip-path", `inset(0 ${100 - this.position}% 0 0)`);
            },
            initialEvent: e
        });
    }

    clamp = (num, min, max) => Math.min(Math.max(num, min), max);
}

customElements.get("wj-img-comparer") || window.customElements.define("wj-img-comparer", ImgComparer);