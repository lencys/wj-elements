import { default as WJElement, event } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class Option extends WJElement {
    constructor() {
        super();
    }

    set selected(value) {
        console.log(value);
        return (value) ? this.setAttribute("selected", "") : this.removeAttribute("selected");
    }

    className = "Option";

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

        let element = document.createElement("div");
        element.classList.add("native-option");
        element.setAttribute("part", "native");

        let icon = document.createElement("wj-icon");
        icon.setAttribute("name", "check");

        let start = document.createElement("slot");
        start.setAttribute("name", "start");

        let slot = document.createElement("slot");

        let end = document.createElement("slot");
        end.setAttribute("name", "end");

        element.appendChild(icon);
        element.appendChild(start);
        element.appendChild(slot);
        element.appendChild(end);

        fragment.appendChild(element);

        return fragment;
    }

    afterDraw() {
        event.addListener(this, "click", "wj:option-change");
    }
}

customElements.get("wj-option") || window.customElements.define("wj-option", Option);