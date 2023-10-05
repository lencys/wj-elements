import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class ToolbarAction extends WJElement {
    constructor() {
        super();
    }

    className = "ToolbarAction";

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

        let maxItems = +this.maxItems || 0;
        let actions = this.getActions();

        let slot = document.createElement("slot");

        let element = document.createElement("div");
        element.classList.add("native-toolbar-action");

        const shouldCollapse = maxItems !== 0 && actions.length > maxItems;
        if (shouldCollapse) {
            element = document.createElement("wj-dropdown");
        }

        element.appendChild(slot);

        fragment.appendChild(element);

        return fragment;
    }

    getActions() {
        return Array.from(this.querySelectorAll('wj-button'));
    }
}

customElements.get("wj-toolbar-action") || window.customElements.define("wj-toolbar-action", ToolbarAction);