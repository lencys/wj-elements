import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

export default class Step extends WJElement {
    constructor() {
        super();
    }

    className = "Step";

    static get cssStyleSheet() {
        return styles;
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement('div');
        native.className = 'step-native';
        native.setAttribute('part', 'native');
        
        const slot = document.createElement('slot');

        native.appendChild(slot);

        fragment.appendChild(native);

        return fragment;
    }
}