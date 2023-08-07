import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

const template = document.createElement('template');

template.innerHTML = `<style>
	${styles}
</style>`;
export class List extends WJElement {
    constructor() {
        super();
    }

    set lines(value) {
        this.setAttribute("lines", value);
    }

    get lines() {
        return this.getAttribute("lines");
    }

    set inset(value) {
        this.setAttribute("inset", "");
    }

    get inset() {
        return this.hasAttribute("inset");
    }

    className = "List";

    setupAttributes() {
        // this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        // let fragment = document.createDocumentFragment();
        //
        // // let element = document.createElement("slot");
        //
        // if(this.hasAttribute("lines"))
        //     this.classList.add("wj-lines-" + this.lines);
        //
        // if(this.inset)
        //     this.classList.add("wj-inset");
        //
        // // fragment.appendChild(element);
        //
        // return fragment;
    }

    afterDraw() {
        if(this.hasAttribute("lines"))
            this.classList.add("wj-lines-" + this.lines);

        if(this.inset)
            this.classList.add("wj-inset");
    }
}

customElements.get("wj-list") || window.customElements.define("wj-list", List);