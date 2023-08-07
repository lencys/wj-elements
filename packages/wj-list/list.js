import WJElement from "../wj-element/wj-element.js";
import styles from "./scss/styles.scss?inline";

const template = document.createElement("template");
template.innerHTML = `<style>${styles}</style>`;

export class List extends WJElement {
    constructor() {
        super(template);
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
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();
        let element = document.createElement("slot");

        this.classList.toggle("wj-lines-" + this.lines, this.hasAttribute("lines"));
        this.classList.toggle("wj-inset", this.inset);

        fragment.appendChild(element);

        return fragment;
    }

    afterDraw() {
        this.classList.toggle("wj-lines-" + this.lines, this.hasAttribute("lines"));
        this.classList.toggle("wj-inset", this.inset);
    }
}

customElements.get("wj-list") || window.customElements.define("wj-list", List);
