import { default as WJElement, event } from "../wje-element/element.js";
import '../wje-button/button.element.js';
import '../wje-icon/icon.element.js';

import styles from "./styles/styles.css?inline";

export default class Dialog extends WJElement {
    constructor() {
        super();
    }

    set placement(value) {
        this.setAttribute("placement", value);
    }

    get placement() {
        return this.getAttribute("placement") || "slide-up";
    }

    className = "Dialog";

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

        this.classList.add("fade", this.placement, params.size);

        let slot = document.createElement("slot");
        let dialog = document.createElement("dialog");
        dialog.classList.add("modal-dialog");

        let icon = document.createElement("wje-icon");
        icon.setAttribute("name", "x");
        icon.setAttribute("slot", "icon-only");

        let close = document.createElement("wje-button");
        close.setAttribute("fill", "link");
        close.setAttribute("size", "small");
        close.classList.add("close");
        close.addEventListener("click", () => {
            dialog.close();
        });
        close.appendChild(icon);

        let header = document.createElement("div");
        header.setAttribute("part", "header");
        header.classList.add("dialog-header");
        if(this.hasAttribute("headline"))
            header.innerHTML = `<span>${this.headline}</span>`;
        header.appendChild(close);

        let slotHeader = document.createElement("slot");
        slotHeader.setAttribute("name", "header");
        header.appendChild(slotHeader);

        let body = document.createElement("div");
        body.setAttribute("part", "body");
        body.classList.add("dialog-content");
        body.appendChild(slot);

        let footer = document.createElement("div");
        footer.setAttribute("part", "footer");
        footer.classList.add("dialog-footer");
        footer.innerHTML = "";

        let slotFooter = document.createElement("slot");
        slotFooter.setAttribute("name", "footer");

        footer.appendChild(slotFooter);

        dialog.appendChild(header);
        dialog.appendChild(body);
        dialog.appendChild(footer);

        fragment.appendChild(dialog);

        this.dialog = dialog;
        return fragment;
    }

    close() {
        this.dialog.close();
    }

    afterDraw(context, store, params) {
        if(params.trigger) {
            document.addEventListener(params.trigger, () => {
                event.dispatchCustomEvent(this.dialog,"wje-dialog:click");
                this.dialog.showModal();

                // dispatch event ak je to otvorene
                if(this.dialog.open) {
                    event.dispatchCustomEvent(this.dialog,"wje-dialog:open");
                }
            });
        }
    }
}