import { default as WJElement } from "../wj-element/wj-element.js";
import { Localizer } from "../utils/localize.js";

import styles from "./scss/styles.scss?inline";

export class FormatDigital extends WJElement {
    constructor() {
        super();
        this.localizer = new Localizer(this);
    }

    get unit() {
        return this.hasAttribute("unit") ? this.getAttribute("unit") : "byte";
    }

    className = "FormatDigital";

    static get cssStyleSheet() {
        return styles;
    }

    static get observedAttributes() {
        return ["value"];
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    beforeDraw() {
        if(this.value < 0) return;
        const bitPrefixes = ['', 'kilo', 'mega', 'giga', 'tera'];
        const bytePrefixes = ['', 'kilo', 'mega', 'giga', 'tera', 'peta'];
        const prefix = this.unit === 'bit' ? bitPrefixes : bytePrefixes;
        const index = Math.max(0, Math.min(Math.floor(Math.log10(this.value) / 3), prefix.length - 1));
        const unit = prefix[index] + this.unit;
        const value = parseFloat((this.value / Math.pow(1000, index)).toPrecision(3));

        this.formattedValue = this.localizer.formatNumber(value, {
            style: "unit",
            unit: unit,
            unitDisplay: this.unitDisplay || "short"
        });
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let element = document.createElement("div");
        element.setAttribute("part", "native");
        element.classList.add("native-format-digital");

        let formatted = document.createElement("span");
        formatted.setAttribute("part", "formatted");
        formatted.innerText = this.formattedValue;

        let start = document.createElement("slot");
        start.setAttribute("name", "start");

        let end = document.createElement("slot");
        end.setAttribute("name", "end");

        element.appendChild(start);
        element.appendChild(formatted);
        element.appendChild(end);

        fragment.appendChild(element);

        return fragment;
    }
}

customElements.get("wj-format-digital") || window.customElements.define("wj-format-digital", FormatDigital);