import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

export default class Reorder extends WJElement { 
    constructor() {
        super();
    }

    className = "Reorder";

    static get cssStyleSheet() {
        return styles;
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        return fragment;
    }
}