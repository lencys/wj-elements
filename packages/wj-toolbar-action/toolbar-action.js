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

        // let native = document.createElement("div");
        // native.classList.add("native-toolbar");
        //
        // let start = document.createElement("slot");
        // start.setAttribute("name", "start");
        //
        //
        // let end = document.createElement("slot");
        // end.setAttribute("name", "end");
        //
        // native.appendChild(start);
        // native.appendChild(end);
        var element = document.createElement("slot");
        fragment.appendChild(element);

        return fragment;
    }
}

customElements.get("wj-toolbar-action") || window.customElements.define("wj-toolbar-action", ToolbarAction);