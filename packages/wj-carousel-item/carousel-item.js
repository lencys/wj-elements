import { default as WJElement, event } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class CarouselItem extends WJElement {
    constructor() {
        super();
    }

    className = "CarouselItem";

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
        native.classList.add("native-carousel-item");

        let slot = document.createElement("slot");

        native.appendChild(slot);

        fragment.appendChild(native);

        return fragment;
    }
}

customElements.get("wj-carousel-item") || window.customElements.define("wj-carousel-item", CarouselItem);