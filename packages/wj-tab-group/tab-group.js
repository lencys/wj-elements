import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class TabGroup extends WJElement {
    constructor() {
        super();
    }

    className = "TabGroup";

    static get cssStyleSheet() {
        return styles;
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let native = document.createElement("div");
        native.classList.add("native-tab-group");

        let header = document.createElement("header");
        header.classList.add("scroll-snap-x");

        let nav = document.createElement("nav");
        nav.addEventListener("wj-tab:change", (e) => {
            console.log(e);
            alert(1)
        });

        let snap = document.createElement("span");
        snap.classList.add("snap-indicator");

        let section = document.createElement("section");
        section.classList.add("scroll-snap-x");

        let slot = document.createElement("slot");

        let slotNav = document.createElement("slot");
        slotNav.setAttribute("name", "nav");

        header.appendChild(nav);
        header.appendChild(snap);
        nav.appendChild(slotNav);
        section.appendChild(slot);

        native.appendChild(header);
        native.appendChild(section);

        fragment.appendChild(native);

        return fragment;
    }

    afterDraw() {
        console.log(this.getNavAll());
    }

    getNavAll() {
        return this.context.querySelector('[name="nav"]').assignedElements();
    }

    getPanelAll() {
        return this.context.querySelector("slot").assignedElements();
    }
}

customElements.get("wj-tab-group") || window.customElements.define("wj-tab-group", TabGroup);