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

        let wrapper = document.createElement("div");
        wrapper.classList.add("item");
        wrapper.setAttribute("part", "native");

        let element = document.createElement("slot");
        element.classList.add("name");

        let start = document.createElement("slot");
        start.setAttribute("name", "start");
        start.classList.add("start");

        wrapper.appendChild(start);
        wrapper.appendChild(element);

        fragment.appendChild(wrapper);

        return fragment;
    }

    onShow() {
        console.log("www");
    }
}

