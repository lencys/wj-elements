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

    set async(value) {
        this.setAttribute("async", "");
    }

    get async() {
        return this.hasAttribute("async");
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

        let dialog = document.createElement("dialog");
        dialog.classList.add("modal-dialog");

        fragment.appendChild(dialog);

        this.dialog = dialog;
        return fragment;
    }

    htmlDialogBody(dialog) {
        let icon = document.createElement("wje-icon");
        icon.setAttribute("name", "x");
        icon.setAttribute("slot", "icon-only");

        let close = document.createElement("wje-button");
        close.setAttribute("fill", "link");
        close.setAttribute("size", "small");
        close.addEventListener("click", (e) => {
            this.close(e);
        });
        close.appendChild(icon);

        let header = document.createElement("div");
        header.setAttribute("part", "header");
        header.classList.add("dialog-header");
        if (this.hasAttribute("headline"))
            header.innerHTML = `<span part="headline">${this.getAttribute('headline')}</span>`;

        let slotHeader = document.createElement("slot");
        slotHeader.setAttribute("name", "header");

        const headerActions = document.createElement("div");
        headerActions.classList.add("header-actions");
        headerActions.setAttribute("part", "header-actions");
        headerActions.appendChild(slotHeader);

        header.appendChild(headerActions);
        header.appendChild(close);

        let contentSlot = document.createElement("slot");

        let body = document.createElement("div");
        body.setAttribute("part", "body");
        body.classList.add("dialog-content");
        body.appendChild(contentSlot);

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
    }


    close(e) {
        this.onClose(e);
    }

    afterDraw(context, store, params) {
        // this.button = document.querySelector(`[dialog=${params.trigger}]`);
        if (params.trigger) {
            event.addListener(document, params.trigger, null, this.onOpen);
        }

        this.dialog.addEventListener("close", this.onClose);
    }

    beforeDisconnect() {
        if (this.params?.trigger) {
            event.removeListener(document, this.params?.trigger, null, this.onOpen);
        }

        this.dialog.removeEventListener("close", this.onClose);
    }

    beforeOpen() { }

    afterOpen() { }

    beforeClose() { }

    afterClose() { }

    onOpen = (e) => {
        this.dialog.innerHTML = "";

        Promise.resolve(this.beforeOpen(this, e)).then((res) => {
            this.htmlDialogBody(this.dialog)

            this.dialog.showModal();  // Now open the dialog

            if (this.dialog.open) {
                Promise.resolve(this.afterOpen(this, e));
            }
        });
    }

    onClose = (e) => {
        Promise.resolve(this.beforeClose(this, e)).then((res) => {
            this.dialog.close(); // Now close the dialog

            if (this.dialog.open) {
                Promise.resolve(this.afterClose(this, e));
            }
        });
    }

    disconnectedCallback() {
        event.removeElement(this.button);
        event.removeElement(this.dialog);
    }
}