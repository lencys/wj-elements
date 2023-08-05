import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

const template = document.createElement('template');

template.innerHTML = `<style>
	${styles}
</style>`;
export class Chip extends WJElement {
    constructor() {
        super(template);
    }

    set color(value) {
        this.setAttribute("color", value);
    }

    get color() {
        return this.getAttribute("color");
    }

    set active(value) {
        this.setAttribute("active", "");
    }

    get active() {
        return this.hasAttribute("active");
    }

    set disabled(value) {
        this.setAttribute("disabled", "");
    }

    get disabled() {
        return this.hasAttribute("disabled");
    }

    set outline(value) {
        this.setAttribute("outline", "");
    }

    get outline() {
        return this.hasAttribute("outline");
    }

    className = "Chip";
    static get observedAttributes() {
        return [];
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let element = document.createElement("slot");

        if(this.color)
            this.classList.add("wj-color-" + this.color, "wj-color");

        if(this.active) {
            this.classList.add("wj-active");
            let i = document.createElement("wj-icon");
            i.setAttribute("name", "check");

            this.appendChild(i);
        }

        if(this.disabled)
            this.classList.add("wj-disabled");

        if(this.outline)
            this.classList.add("wj-outline");

        fragment.appendChild(element);

        return fragment;
    }
}

customElements.get("wj-chip") || window.customElements.define("wj-chip", Chip);