import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

const template = document.createElement('template');

template.innerHTML = `<style>
	${styles}
</style>`;

export class Img extends WJElement {
    constructor() {
        super(template);
    }

    className = "Img";

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let img = document.createElement("img");
        img.setAttribute("src", "./demo/assets/img/image-loader.gif");
        img.classList.add("lazy-loaded-image", "lazy");
        img.setAttribute("alt", this.alt || "");

        this.img = img;
        fragment.appendChild(img);

        return fragment;
    }

    afterDraw(context, store, params) {
        let lazyImageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.src = this.src;
                    this.classList.remove("lazy");
                    lazyImageObserver.unobserve(entry.target);
                }
            });
        });

        lazyImageObserver.observe(this.img);
    }
}

customElements.get("wj-img") || window.customElements.define("wj-img", Img);