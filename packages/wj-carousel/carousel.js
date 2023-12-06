import { default as WJElement, event } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class Carousel extends WJElement {
    constructor() {
        super();
    }

    className = "Carousel";

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

        let native = document.createElement("div");
        native.classList.add("native-carousel");

        let slides = document.createElement("div");
        slides.classList.add("carousel-slides");

        let slot = document.createElement("slot");

        let previous = document.createElement("button");
        previous.classList.add("carousel-previous");
        previous.innerHTML = "<";

        let next = document.createElement("button");
        next.classList.add("carousel-next");
        next.innerHTML = ">";

        slides.appendChild(slot);
        native.appendChild(slides);
        native.appendChild(previous);
        native.appendChild(next);

        fragment.appendChild(native);

        return fragment;
    }

    goToSlide(slide) {
        this.querySelector(".native-carousel").scrollTo({
            left: slide.offsetLeft,
            behavior: "smooth"
        })
    }

    nextSlide() {
        let slide = this.querySelector(".native-carousel").children[0];
        this.goToSlide(slide);
    }

    previousSlide() {
        let slide = this.querySelector(".native-carousel").children[1];
        this.goToSlide(slide);
    }

    getCount() {
        return this.querySelector(".native-carousel").children.length;
    }

    getCurrentSlide() {
        return this.querySelector(".native-carousel").children[0];
    }

    getSlides() {
        return this.querySelector(".native-carousel").children;
    }

    canGoNext() {
        return this.querySelector(".native-carousel").scrollLeft < this.querySelector(".native-carousel").scrollWidth;
    }

    canGoPrevious() {
        return this.querySelector(".native-carousel").scrollLeft > 0;
    }
}

customElements.get("wj-carousel") || window.customElements.define("wj-carousel", Carousel);