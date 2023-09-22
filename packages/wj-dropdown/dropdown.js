import { default as WJElement, event } from "../wj-element/wj-element.js";

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
        return ["active"];
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        this.classList.add("wj-placement", "wj-" + this.placement || "wj-start");

        let native = document.createElement("div");
        native.classList.add("native-dropdown");

        // native.innerHTML = `<wj-popup placement="${this.placement}" offset="${this.offset}">
        //     <slot name="trigger" slot="anchor"></slot>
        //     <slot></slot>
        // </wj-popup>`;

        let popup = document.createElement("wj-popup");
        popup.setAttribute("placement", this.placement);
        popup.setAttribute("offset", this.offset);
        popup.setAttribute("manual", "");
        popup.innerHTML = `<slot name="trigger" slot="anchor"></slot>
            <slot></slot>`;

        native.appendChild(popup);



        fragment.appendChild(native);

        return fragment;
    }
}

customElements.get("wj-dropdown") || window.customElements.define("wj-dropdown", Dropdown);