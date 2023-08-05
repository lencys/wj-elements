import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";
import styles from "./scss/styles.scss?inline";

const template = document.createElement('template');

template.innerHTML = `<style>
	${styles}
</style>`;

export class CardHeader extends WJElement {
    constructor() {
        super(template);
    }

    get separator() {
        return this.hasAttribute("separator");
    }

    set separator(value) {
        if(value)
            this.setAttribute("separator", "");
    }

    className = "CardHeader";

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
        console.log("separator", this.separator);
        if(this.separator)
            this.classList.add("wj-separator");

        fragment.appendChild(element);

        return fragment;
    }
}

customElements.get("wj-card-header") || window.customElements.define("wj-card-header", CardHeader);