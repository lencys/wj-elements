import { default as WJElement, event } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export default class Menu extends WJElement {
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

    afterDraw() {
        Array.from(this.children).forEach((child) => {
            child.refresh();
        });
    }

    beforeDisconnect() {
        this.context.innerHTML = "";
    }
}