import { default as WJElement } from "../wje-element/element.js";
import styles from "./scss/styles.scss?inline";

export default class Form extends WJElement {
    constructor() {
        super();
    }

    className = "Form";

    static get cssStyleSheet() {
        return styles;
    }

    static get observedAttributes() {
        return [];
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw() {
        let fragment = document.createDocumentFragment();

        let element = document.createElement("slot");

        fragment.appendChild(element);

        return fragment;
    }
}