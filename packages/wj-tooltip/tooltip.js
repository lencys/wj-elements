import { default as WJElement, event } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class Tooltip extends WJElement {
    constructor() {
        super();
    }

    className = "Tooltip";

    static get cssStyleSheet() {
        return styles;
    }

    static get observedAttributes() {
        return ["active"];
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        // this.classList.add("wj-placement", "wj-" + this.placement || "wj-start");

        let popup = document.createElement("wj-popup");
        popup.setAttribute("placement", this.placement || "top");
        popup.setAttribute("offset", this.offset || "0");

        let slot = document.createElement("slot");
        slot.setAttribute("slot", "anchor");

        let arrow = document.createElement("div");
        arrow.classList.add("arrow");
        arrow.setAttribute("slot", "arrow");

        let native = document.createElement("div");
        native.classList.add("native-tooltip");
        native.innerHTML = this.content;

        popup.appendChild(slot);
        popup.appendChild(arrow);
        popup.appendChild(native);

        fragment.appendChild(popup);

        return fragment;
    }
}

customElements.get("wj-tooltip") || window.customElements.define("wj-tooltip", Tooltip);