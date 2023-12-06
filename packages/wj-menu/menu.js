import { default as WJElement, event } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class Menu extends WJElement {
    constructor() {
        super();
    }

    className = "Menu";

    static get cssStyleSheet() {
        return styles;
    }

    static get observedAttributes() {
        return ["active", "collapse"];
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        console.log("TRALALA", this.hasAttribute("collapse"));
        let fragment = document.createDocumentFragment();

        this.classList.remove("wj-menu-collapse");

        if(this.hasAttribute("collapse"))
            this.classList.add("wj-menu-collapse");

        let native = document.createElement("div");
        native.classList.add("native-menu");

        let slot = document.createElement("slot");

        native.appendChild(slot);
        fragment.appendChild(native);

        return fragment;
    }
}

customElements.get("wj-menu") || window.customElements.define("wj-menu", Menu);