import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

export default class Timeline extends WJElement {
    constructor() {
        super();
    }

    className = "Timeline";

    static get cssStyleSheet() {
        return styles;
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        const timelineContainer = document.createElement('div');
        timelineContainer.classList.add('timeline-container');

        const verticalLine = document.createElement('div');
        verticalLine.classList.add('vertical-line');

        const slot = document.createElement('slot');
        timelineContainer.appendChild(verticalLine);
        timelineContainer.appendChild(slot);

        fragment.appendChild(timelineContainer);

        return fragment;
    }
}
