import { default as WJElement, event } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class Select extends WJElement {
    constructor() {
        super();

        this._selected = [];
    }

    set selected(value) {
        console.log("SET", value);
        this._selected = value;
    }

    get selected() {
        return this.getSelected();
    }

    set trigger(value) {
        this.setAttribute("trigger", value);
    }

    get trigger() {
        return this.getAttribute("trigger") || "click";
    }

    className = "Select";

    static get cssStyleSheet() {
        return styles;
    }

    static get observedAttributes() {
        return ["active", "value"];
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        this.classList.add("wj-placement", "wj-" + this.placement || "wj-start");

        // zakladny obalovac
        let native = document.createElement("div");
        native.setAttribute("part", "native");
        native.classList.add("native-dropdown");

        // label
        let label = document.createElement("wj-label");
        label.innerText = this.label || "";

        // obalovac pre input
        let inputWrapper = document.createElement("div");
        inputWrapper.classList.add("input-wrapper");
        inputWrapper.setAttribute("slot", "anchor");

        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("part", "input");
        input.setAttribute("autocomplete", "off");
        input.setAttribute("readonly", "");
        input.setAttribute("placeholder", this.placeholder || "");

        let arrow = document.createElement("wj-icon");
        arrow.setAttribute("name", "arrow-down");
        arrow.setAttribute("slot", "arrow");

        let chips = document.createElement("div");
        chips.classList.add("chips");
        chips.innerText = this.placeholder || "";

        // obalovac pre option
        let optionWrapper = document.createElement("div");
        optionWrapper.classList.add("option-wrapper");

        let slot = document.createElement("slot");

        // vytvorime popup
        let popup = document.createElement("wj-popup");
        popup.setAttribute("placement", "bottom-start");
        popup.setAttribute("manual", "");
        if(this.hasAttribute("disabled"))
            popup.setAttribute("disabled", "");

        if(this.hasAttribute("label"))
            native.appendChild(label);

        inputWrapper.appendChild(input);
        if(this.hasAttribute("multiple"))
            inputWrapper.appendChild(chips);

        inputWrapper.appendChild(arrow);

        optionWrapper.appendChild(slot);

        // if(!this.hasAttribute("disabled"))
        popup.appendChild(inputWrapper);
        popup.appendChild(optionWrapper);

        if(this.trigger === "click")
            popup.setAttribute("manual", "");

        native.appendChild(popup);

        this.popup = popup;
        this.input = input;
        this.chips = chips;

        fragment.appendChild(native);

        return fragment;
    }

    afterDraw(context, store, params) {
        this.addEventListener("wj:option-change", this.optionChange);
    }

    optionChange = (e) => {
        let allOptions = this.getAllOptions();

        if(!this.hasAttribute("multiple")) {
            allOptions.forEach((option) => {
                option.selected = false;
            });
            this.popup.removeAttribute("active");
        }

        e.target.selected = e.target.hasAttribute("selected") ? false : true;

        this.selectionChanged();
    }

    getAllOptions() {
        return this.querySelectorAll("wj-option");
    }

    getSelectedOptions() {
        return this.querySelectorAll("wj-option[selected]");
    }

    getSelected(option) {
        let selectedOptions = this.getSelectedOptions();

        selectedOptions = Array.isArray(selectedOptions) ? selectedOptions : Array.from(selectedOptions);

        selectedOptions = selectedOptions.map((option) => {
            return {
                value: option.value,
                text: option.textContent.trim()
            };
        });

        return selectedOptions;
    }

    selectionChanged() {
        let options = this.getSelectedOptions();

        this.selectedOptions = Array.isArray(options) ? options : Array.from(options);

        if (this.hasAttribute("multiple")) {
            this.value = this.selectedOptions.map(el => el).reverse();
            if (this.placeholder && this.value.length === 0) {
                this.chips.innerHTML = this.placeholder;
                this.input.value = '';
            } else {
                this.chips.innerHTML = "";
                this.value.forEach(el => {
                    this.chips.appendChild(this.getChip(el));
                });

                this.input.value = this.selectedOptions.length;
            }
        } else {
            let value = this.selectedOptions[0]?.textContent.trim() || "";
            this.value = value;
            this.input.value = value;
        }
    }

    getChip(option) {
        let chip = document.createElement("wj-chip");
        chip.setAttribute("removable", "");
        chip.option = option;
        chip.addEventListener("wj:chip-remove", this.removeChip);

        let label = document.createElement("wj-label");
        label.innerText = option.textContent.trim();

        chip.appendChild(label);

        return chip;
    }

    removeChip = (e) => {
        e.target.option.selected = false;
        e.target.parentNode.removeChild(e.target);
        if (this.placeholder && this.value.length === 0) {
            this.chips.innerHTML = this.placeholder;
            this.input.value = '';
        }

        this.setSelected(e.target.option);
    }
}

customElements.get("wj-select") || window.customElements.define("wj-select", Select);