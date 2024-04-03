import { default as WJElement, event } from "../wje-element/element.js";
import styles from "./scss/styles.scss?inline";

export default class Checkbox extends WJElement {
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
        if(this.hasAttribute("checked"))
            this._checked = true;

        return this._checked;
    }

    className = "Checkbox";

    static get cssStyleSheet() {
        return styles;
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

        let input = document.createElement("input");
        input.type = "checkbox";
        input.id = "checkbox";
        input.name = this.name = "checkbox";
        input.checked = this.hasAttribute("checked");
        input.disabled = this.hasAttribute("disabled");
        input.indeterminate = this.hasAttribute("indeterminate");

        let label = document.createElement("label");
        label.htmlFor = "checkbox";
        label.innerHTML = "<slot></slot>";

        native.appendChild(input);
        native.appendChild(label);

        this.input = input;

        fragment.appendChild(native);

        return fragment;
    }

    afterDraw() {
        event.addListener(this.input, "input", null, this.inputEvent);
    }

    inputEvent = (e) => {
        this.checked = this.input.checked;
        event.dispatchCustomEvent(this, "wje-checkbox:change");
    }

    disconnectedCallback() {
        event.removeElement(this.input);
    }
}