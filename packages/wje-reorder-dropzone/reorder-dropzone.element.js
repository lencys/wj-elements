import {default as WJElement} from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

export default class ReorderDropzone extends WJElement {
    constructor() {
        super();
    }

    className = "ReorderDropzone";

    static get cssStyleSheet() {
        return styles;
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(content, store, params) {
        let fragment = document.createDocumentFragment();

        let dropzone = document.createElement("div");
        dropzone.classList.add("dropzone");

        let slot = document.createElement("slot");
        
        dropzone.appendChild(slot);

        fragment.appendChild(dropzone);

        return fragment;
    }
}