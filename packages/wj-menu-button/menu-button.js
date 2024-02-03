import { default as WJElement, event } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class MenuButton extends WJElement {
    constructor() {
        super();
    }

    className = "MenuButton";

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

        let slot = document.createElement("slot");

        fragment.appendChild(slot);

        return fragment;
    }

    afterDraw() {
        event.addListener(this, "click", null, (e) => {
            document.querySelector(`#${this.contentId}`).classList.toggle("open");
        });
    }
}

customElements.get("wj-menu-button") || window.customElements.define("wj-menu-button", MenuButton);