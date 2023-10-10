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

        // zakladny obalovac
        let native = document.createElement("div");
        native.setAttribute("part", "native");
        native.classList.add("native-dropdown");

        // obalovac pre input
        let inputWrapper = document.createElement("div");
        inputWrapper.classList.add("input-wrapper");
        inputWrapper.setAttribute("slot", "anchor");

        let input = document.createElement("input");
        input.setAttribute("readonly", "");
        input.setAttribute("placeholder", this.placeholder || "");

        // obalovac pre option
        let optionWrapper = document.createElement("div");
        optionWrapper.classList.add("option-wrapper");

        let slot = document.createElement("slot");

        // vytvorime popup
        let popup = document.createElement("wj-popup");
        popup.setAttribute("placement", "bottom-start");
        popup.setAttribute("manual", "");

        inputWrapper.appendChild(input);
        optionWrapper.appendChild(slot);

        popup.appendChild(inputWrapper);
        popup.appendChild(optionWrapper);

        if(this.trigger === "click")
            popup.setAttribute("manual", "");

        native.appendChild(popup);

        fragment.appendChild(native);

        return fragment;
    }
}

customElements.get("wj-select") || window.customElements.define("wj-select", Select);