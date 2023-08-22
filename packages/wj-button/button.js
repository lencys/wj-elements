import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

const template = document.createElement('template');

template.innerHTML = `<style>
	${styles}
</style>`;
export class Button extends WJElement {
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

    set fill(value) {
        this.setAttribute("fill", value);
    }

    get fill() {
        return this.getAttribute("fill") || "solid";
    }

    set outline(value) {
        this.setAttribute("outline", "");
    }

    get outline() {
        return this.hasAttribute("outline");
    }

    set size(value) {
        this.setAttribute("size", value);
    }

    get size() {
        return this.getAttribute("size");
    }

    set round(value) {
        this.setAttribute("round", "");
    }

    get round() {
        return this.hasAttribute("round");
    }

    set dialog(value) {
        this.setAttribute("dialog", value);
    }

    get dialog() {
        return this.getAttribute("dialog");
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

        if(this.disabled)
            this.classList.add("wj-button-disabled");

        if(this.round)
            this.classList.add("wj-button-round")

        if(this.fill)
            this.classList.add("wj-button-" + this.fill);

        if(this.size)
            this.classList.add("wj-button-" + this.size);

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

        let element = document.createElement(this.hasAttribute('href') ? 'a': 'button');
        element.classList.add("button-native");
        element.setAttribute("part", "native");

        let  span = document.createElement("span");
        span.classList.add("button-inner");

        let slot = document.createElement("slot");
        slot.setAttribute("name", "icon-only");
        span.appendChild(slot);

        slot = document.createElement("slot");
        slot.setAttribute("name", "start");
        span.appendChild(slot);

        slot = document.createElement("slot");
        span.appendChild(slot);

        slot = document.createElement("slot");
        slot.setAttribute("name", "end");
        span.appendChild(slot);

        element.appendChild(span);
        fragment.appendChild(element);

        return fragment;
    }

    afterDraw() {
        this.addEventListener("click", this.eventDialogOpen);
    }

    beforeDisconnect() {
        this.removeEventListener("click", this.eventDialogOpen);
    }

    eventDialogOpen = (e) => {
        document.dispatchEvent(
            new CustomEvent(this.dialog, {
                bubbles: true
            }
        ));
    }
}

customElements.get("wj-button") || window.customElements.define("wj-button", Button);