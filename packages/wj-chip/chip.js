import { default as WJElement, event } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class Chip extends WJElement {
    constructor() {
        super();
    }

    className = "Chip";

    static get cssStyleSheet() {
        return styles;
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let native = document.createElement("div");
        native.classList.add("native-chip");

        let slot = document.createElement("slot");

        let remove = document.createElement("wj-button");
        remove.setAttribute("part", "remove");
        remove.setAttribute("variant", "link");
        remove.innerHTML = `<wj-icon name="x"></wj-icon>`;

        let active = document.createElement("wj-icon");
        active.setAttribute("name", "check");
        active.classList.add("check");

        if(this.color)
            this.classList.add("wj-color-" + this.color, "wj-color");

        if(this.disabled)
            this.classList.add("wj-disabled");

        if(this.outline)
            this.classList.add("wj-outline");

        native.appendChild(slot);
        native.appendChild(active);

        if(this.hasAttribute("removable"))
            native.appendChild(remove);

        fragment.appendChild(native);

        this.remove = remove;
        return fragment;
    }

    afterDraw() {
        event.addListener(this.remove, "click", "wj:chip-remove", null, { stopPropagation: true });
    }
}

customElements.get("wj-chip") || window.customElements.define("wj-chip", Chip);