import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";
import { getName, getUrl, getSvgContent, iconContent } from "./service/service.js";

import styles from "./scss/styles.scss?inline";

export class Icon extends WJElement {
    constructor() {
        super();
    }

    className = "Icon";

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
        element.classList.add("icon-inner");
        let url = getUrl(this);

        getSvgContent(url).then((svgContent) => {
            element.innerHTML = iconContent.get(url);
        });

        if(this.color)
            this.classList.add("wj-color-" + this.color, "wj-color");

        if(this.size)
            this.classList.add("wj-size", "wj-size-" + this.size);

        fragment.appendChild(element);

        return fragment;
    }
}

customElements.get("wj-icon") || window.customElements.define("wj-icon", Icon);