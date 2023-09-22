import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class MenuLabel extends WJElement {
    constructor() {
        super();

        this.hasSubmenu =  WjElementUtils.hasSlot(this, "submenu");
    }

    className = "MenuLabel";

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

        // SLOT
        let slot = document.createElement("slot");
        slot.setAttribute("part", "base");
        slot.classList.add("native-menu-label");

        fragment.appendChild(slot);

        return fragment;
    }
}

customElements.get("wj-menu-label") || window.customElements.define("wj-menu-label", MenuLabel);