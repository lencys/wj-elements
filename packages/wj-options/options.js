import { default as WJElement, event } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class Options extends WJElement {
    constructor() {
        super();
    }

    className = "Options";

    static get cssStyleSheet() {
        return styles;
    }

    static get observedAttributes() {
        return [];
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    async beforeDraw() {
        this.response = await this.getPages();

        let fragment = document.createDocumentFragment();

        this.response.forEach((item, index) => {
            let option = document.createElement("wj-option");
            option.setAttribute("value", item[this.itemValue] || item.value); // ak je itemValue, tak ho pouzije, inak sa pouzije standardne properties value
            option.innerText = item[this.itemText] || item.text; // ak je itemText, tak ho pouzije, inak sa pouzije standardne properties text
            fragment.appendChild(option);
        });

        this.parentElement.appendChild(fragment);

        event.dispatchCustomEvent(this, "wj:options-load", {}); // nepomohlo to, v ff stale je scroll hore
    }

    async getPages(page){
        const response = await fetch(this.url);
        if (!response.ok) {
            throw new Error(`An error occurred: ${response.status}`);
        }
        return await response.json();
    }
}

customElements.get("wj-options") || window.customElements.define("wj-options", Options);