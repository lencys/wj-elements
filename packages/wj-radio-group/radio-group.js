import { default as WJElement, event } from "../wj-element/wj-element.js";
import { Radio } from "../wj-radio/radio.js";

import styles from "./scss/styles.scss?inline";

export class RadioGroup extends WJElement {
    constructor() {
        super();
    }

    className = "RadioGroup";

    static get cssStyleSheet() {
        return styles;
    }

    static get observedAttributes() {
        return [];
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let native = document.createElement("div");
        native.classList.add("native-radio-group", this.hasAttribute("inline") ? "wj-inline" : "ddd");

        let slot = document.createElement("slot");

        native.appendChild(slot);

        fragment.appendChild(native);

        return fragment;
    }

    afterDraw() {
        if(this.value) {
            this.setRadioToChekced(this.getRadioByValue(this.value));
        }

        this.addEventListener("wj:radio:input", (e) => {
            this.removeCheck();
            this.setRadioToChekced(e.detail.context);
        });
    }

    getRadioByValue(value) {
        return this.getAllElements().filter((el) => el instanceof Radio && el.value === value)[0];
    }

    removeCheck() {
        this.getAllElements().forEach((el) => {
            if(el instanceof Radio)
                el.checked = false;
        });
    }

    setRadioToChekced(radio) {
        if(radio instanceof Radio) {
            this.setAttribute("value", radio.value);
            radio.checked = true;
        }
    }

    getAllElements() {
        return Array.from(this.childNodes);
    }
}

customElements.get("wj-radio-group") || window.customElements.define("wj-radio-group", RadioGroup);