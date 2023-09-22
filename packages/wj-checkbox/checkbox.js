import { default as WJElement, event } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class Checkbox extends WJElement {
    constructor() {
        super();

        this._checked = false;
    }

    set checked(value) {
        this._checked = value;

        if(value)
            this.setAttribute("checked", "");
        else
            this.removeAttribute("checked");
    }

    get checked() {
        return this._checked;
    }

    className = "Checkbox";

    static get cssStyleSheet() {
        return styles;
    }

    static get observedAttributes() {
        return ["checked"];
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let native = document.createElement("div");
        native.classList.add("native-checkbox");

        if(this.variant === "circle")
            native.classList.add("checkbox-circle");

        if(this.color)
            native.classList.add(this.color);

        this.input = document.createElement("input");
        this.input.type = "checkbox";
        this.input.id = "checkbox";
        this.input.name = this.name = "checkbox";
        this.input.checked = this.hasAttribute("checked");
        this.input.disabled = this.hasAttribute("disabled");
        this.input.indeterminate = this.hasAttribute("indeterminate");

        let label = document.createElement("label");
        label.htmlFor = "checkbox";
        label.innerHTML = "<slot></slot>";

        native.appendChild(this.input);
        native.appendChild(label);

        fragment.appendChild(native);

        return fragment;
    }

    afterDraw() {
        event.addListener(this, "click", "wj:checkbox:change");
        event.addListener(this, "click", "wj:checkbox:input");

        // event.addListener(this, "click", null, () => {
        //     alert(0)
        // }, true);
    }

    inputEvent = (e) => {
        this.checked = e.target.checked;
    }

    disconnectedCallback() {
        event.removeElement(this);
    }
}

customElements.get("wj-checkbox") || window.customElements.define("wj-checkbox", Checkbox);