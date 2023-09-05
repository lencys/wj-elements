import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class Toolbar extends WJElement {
    constructor() {
        super();
    }

    className = "Toolbar";

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
        native.classList.add("native-toolbar");

        // if(this.breadcrumb) {
        //     let breadcrumbs = document.createElement("wj-breadcrumbs");
        //
        //     let breadcrumb = document.createElement("wj-breadcrumb");
        // }

        let start = document.createElement("slot");
        start.setAttribute("name", "start");


        let end = document.createElement("slot");
        end.setAttribute("name", "end");

        native.appendChild(start);
        native.appendChild(end);
        fragment.appendChild(native);

        return fragment;
    }
}

customElements.get("wj-toolbar") || window.customElements.define("wj-toolbar", Toolbar);