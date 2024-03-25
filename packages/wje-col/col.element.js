import { default as WJElement, WjElementUtils } from "../wje-element/element.js";

import styles from "./scss/styles.scss?inline";

export default class Col extends WJElement {
    constructor() {
        super();
    }

    className = "Col";

    static get cssStyleSheet() {
        return styles;
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    beforeDraw(context, store, params) {
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let element = document.createElement("slot");

        if(this.order)
        this.classList.add("order-" + this.order);

        if(this.size)
            this.classList.add("wje-col-" + this.size);

        if(this.sizeSm)
            this.classList.add("wje-col-sm-" + this.sizeSm);

        if(this.sizeMd)
            this.classList.add("wje-col-md-" + this.sizeMd);

        if(this.offset)
            this.classList.add("wje-offset-" + this.offset);

        if(this.offsetSm)
            this.classList.add("wje-offset-sm-" + this.offsetSm);

        fragment.appendChild(element);

        return fragment;
    }
}