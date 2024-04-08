import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

export default class ReorderItem extends WJElement {
    constructor() {
        super();
    }

    className = "ReorderItem";

    static get cssStyleSheet() {
        return styles;
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(content, store, params) {
        let fragment = document.createDocumentFragment();

        return fragment;
    }
}

