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
        return ["name"];
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        this.classList.add("lazy-loaded-image", "lazy");

        this.element = document.createElement("div");
        this.element.classList.add("icon-inner");

        this.url = getUrl(this);

        this.classList.add("wj-size");
        if(this.color)
            this.classList.add("wj-color-" + this.color, "wj-color");

        if(this.size)
            this.classList.add("wj-size-" + this.size);

        fragment.appendChild(this.element);

        return fragment;
    }

    afterDraw() {
        let lazyImageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    getSvgContent(this.url).then((svgContent) => {
                        this.element.innerHTML = iconContent.get(this.url);
                        this.element.querySelector("svg").setAttribute("part", "svg");
                    });

                    this.classList.remove("lazy");
                    lazyImageObserver.unobserve(entry.target);
                }
            });
        });

        lazyImageObserver.observe(this.element);
    }
}

customElements.get("wj-icon") || window.customElements.define("wj-icon", Icon);