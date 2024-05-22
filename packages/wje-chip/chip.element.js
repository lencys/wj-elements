import { default as WJElement, event } from "../wje-element/element.js";

import styles from "./styles/styles.css?inline";

export default class Chip extends WJElement {
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

        let remove = document.createElement("wje-button");
        remove.setAttribute("part", "remove");
        remove.setAttribute("fill", "link");
        remove.innerHTML = `<wje-icon name="x"></wje-icon>`;

        let active = document.createElement("wje-icon");
        active.setAttribute("name", "check");
        active.classList.add("check");

        if(this.color)
            native.classList.add("wje-color-" + this.color, "wje-color");

        if(this.disabled)
            this.classList.add("wje-disabled");

        if(this.outline)
            this.classList.add("wje-outline");

        native.appendChild(slot);
        native.appendChild(active);

        if(this.hasAttribute("removable"))
            native.appendChild(remove);

        fragment.appendChild(native);

        this.remove = remove;
        return fragment;
    }

    afterDraw() {
        event.addListener(this.remove, "click", "wje:chip-remove", null, { stopPropagation: true });
    }
}