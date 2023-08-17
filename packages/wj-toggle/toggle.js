import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

const template = document.createElement('template');

template.innerHTML = `<style>
	${styles}
</style>`;
export class Toggle extends WJElement {
    constructor() {
        super(template);
    }

    get disabled() {
        return this.hasAttribute("disabled");
    }

    get checked() {
        return this.hasAttribute("checked");
    }

    className = "Chip";

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let element = document.createElement("input");
        element.setAttribute("type", "checkbox");
        element.setAttribute("name", this.name);
        element.setAttribute("id", "input");

        let label = document.createElement("label");
        label.setAttribute("for", "input");

        let textWrapper = document.createElement("div");
        textWrapper.classList.add("text");

        let slot = document.createElement("slot");

        if(this.color)
            this.classList.add("wj-color-" + this.color, "wj-color");

        if(this.checked)
            element.checked = this.checked;

        if(this.disabled)
            element.disabled = this.disabled;

        textWrapper.appendChild(slot);
        label.appendChild(textWrapper);

        fragment.appendChild(element)
        fragment.appendChild(label);

        return fragment;
    }
}

customElements.get("wj-toggle") || window.customElements.define("wj-toggle", Toggle);