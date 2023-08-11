import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

const template = document.createElement('template');

template.innerHTML = `<style>
	${styles}
</style>`;

export class Col extends WJElement {
    constructor() {
        super(template);
    }

    className = "Col";

    static get observedAttributes() {
        return [];
    }

    setupAttributes() {
        this.isShadowRoot = "open";
        // or
        WjElementUtils.setAttributesToElement(this, {
            "test": "test"
        });
    }

    beforeDraw(context, store, params) {
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let element = document.createElement("slot");
        console.log(this.size, this.sizeSm, params);

        if(this.order)
        this.classList.add("order-" + this.order);

        if(this.size)
            this.classList.add("wj-col-" + this.size);

        if(this.sizeSm)
            this.classList.add("wj-col-sm-" + this.sizeSm);

        if(this.sizeMd)
            this.classList.add("wj-col-md-" + this.sizeMd);

        if(this.offset)
            this.classList.add("wj-offset-" + this.offset);

        if(this.offsetSm)
            this.classList.add("wj-offset-sm-" + this.offsetSm);

        fragment.appendChild(element);

        return fragment;
    }

    afterDraw(context, store, params) {
        console.log("afterDraw", this.params);
    }
}

customElements.get("wj-col") || window.customElements.define("wj-col", Col);