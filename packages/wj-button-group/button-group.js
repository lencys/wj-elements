import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

const template = document.createElement('template');

template.innerHTML = `<style>
	${styles}
</style>`;
export class ButtonGroup extends WJElement {
    constructor() {
        super(template);
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

        let element = document.createElement("div");
        element.classList.add("native-button-group");
        element.setAttribute("part", "native");

        this.slotElement = document.createElement("slot");
        console.log("SLOT:", this.slotElement);
        element.appendChild(this.slotElement);

        fragment.appendChild(element);

        return fragment;
    }

    afterDraw(context, store, params) {
        console.log(this.slotElement);
        const slottedElements = [...this.slotElement.assignedElements({ flatten: true })];
        console.log("SLOTTED ELEMENTS:", slottedElements);
        //
        slottedElements.forEach(el => {
            let index = slottedElements.indexOf(el);
            let button = this.findButton(el);
            console.log("BUTTON:", button);
            if (button) {
                button.classList.add('wj-button-group-button');
                button.classList.toggle('wj-button-group-first', index === 0);
                button.classList.toggle('wj-button-group-inner', index > 0 && index < slottedElements.length - 1);
                button.classList.toggle('wj-button-group-last', index === slottedElements.length - 1);
            }
        });
    }

    findButton(el) {
        const selector = 'wj-button';

        return el.closest(selector) ?? el.querySelector(selector);
    }
}

customElements.get("wj-button-group") || window.customElements.define("wj-button-group", ButtonGroup);