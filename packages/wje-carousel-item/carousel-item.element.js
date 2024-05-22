import { default as WJElement, event } from "../wje-element/element.js";

import styles from "./styles/styles.css?inline";

export default class CarouselItem extends WJElement {
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
        native.setAttribute("part", "native");

        let slot = document.createElement("slot");

        native.appendChild(slot);

        fragment.appendChild(native);

        return fragment;
    }

    afterDraw() {
        event.addListener(this, "click", "wje-carousel-item:click");
    }
}