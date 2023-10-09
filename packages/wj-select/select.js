import { default as WJElement, event } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class Select extends WJElement {
    constructor() {
        super();
    }

    set trigger(value) {
        this.setAttribute("trigger", value);
    }

    get trigger() {
        return this.getAttribute("trigger") || "click";
    }

    className = "Select";

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

        this.classList.add("wj-placement", "wj-" + this.placement || "wj-start");

        let native = document.createElement("div");
        native.setAttribute("part", "native");
        native.classList.add("native-dropdown");

        let input = document.createElement("input");
        input.setAttribute("part", "input");
        input.setAttribute("readonly", "");
        input.setAttribute("placeholder", this.placeholder || "");
        // input.setAttribute("value", this.label || "");
        input.setAttribute("slot", "anchor");

        let slot = document.createElement("slot");

        let popup = document.createElement("wj-popup");
        popup.setAttribute("placement", "bottom-start");
        popup.setAttribute("manual", "");

        popup.appendChild(input);
        popup.appendChild(slot);

        if(this.trigger === "click")
            popup.setAttribute("manual", "");

        native.appendChild(popup);

        fragment.appendChild(native);

        return fragment;
    }
}

customElements.get("wj-select") || window.customElements.define("wj-select", Select);