import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class Dropdown extends WJElement {
    constructor() {
        super();
    }

    className = "Dropdown";

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

        this.classList.add("wj-placement", "wj-" + this.placement || "wj-start");

        let native = document.createElement("div");
        native.classList.add("native-dropdown");

        native.innerHTML = `<wj-popup placement="${this.placement}" offset="${this.offset}">
            <slot name="trigger" slot="anchor"></slot>
            <slot></slot>
        </wj-popup>`;

        // let popup = document.createElement("wj-popup");
        // popup.setAttribute("placement", this.placement);
        // popup.setAttribute("offset", this.offset);
        // popup.innerHTML = `<slot name="trigger" slot="anchor"></slot>
        //     <slot></slot>`;

        native.querySelector("wj-popup").addEventListener("click", (e) => {
            if(e.target.assignedSlot.parentElement.hasAttribute("active"))
                e.target.assignedSlot.parentElement.removeAttribute("active");
            else
                e.target.assignedSlot.parentElement.setAttribute("active", "");
        });

        fragment.appendChild(native);

        return fragment;
    }
}

customElements.get("wj-dropdown") || window.customElements.define("wj-dropdown", Dropdown);