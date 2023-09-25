import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";
import styles from "./scss/styles.scss?inline";

export class CardControls extends WJElement {
    constructor() {
        super();
    }

    className = "CardControls";

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
}

customElements.get("wj-card-controls") || window.customElements.define("wj-card-controls", CardControls);