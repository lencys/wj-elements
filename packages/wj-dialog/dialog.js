import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";
// import styles from './scss/styles.scss';

import styles from "./scss/styles.scss?inline";

const template = document.createElement('template');

template.innerHTML = `<style>
	${styles}
</style>`;
export class Dialog extends WJElement {
    constructor() {
        super(template);
    }

    set placement(value) {
        this.setAttribute("placement", value);
    }

    get placement() {
        return this.getAttribute("placement") || "slide-up";
    }

    className = "Dialog";
    static get observedAttributes() {
        return [];
    }

    setupAttributes() {
        this.isShadowRoot = "open";
        // or
        WjElementUtils.setAttributesToElement(this, {
            "test": "test"
        });
    }

    beforeDraw(context, store, params) {
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        this.classList.add("modal", "fade", this.placement, params.size);

        let slot = document.createElement("slot");
        let dialog = document.createElement("dialog");
        dialog.classList.add("modal-dialog");

        let icon = document.createElement("wj-icon");
        icon.setAttribute("name", "xmark");
        icon.setAttribute("slot", "icon-only");

        let close = document.createElement("wj-button");
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
        header.innerHTML = `<span>${this.title}</span>`;
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



        // dialog.appendChild(close);
        fragment.appendChild(dialog);

        this.dialog = dialog;
        return fragment;
    }

    afterDraw(context, store, params) {
        if(params.trigger) {
            document.addEventListener(params.trigger, () => {
                this.dialog.showModal();
                // this.classList.add("show");
            });
        }
    }
}

customElements.get("wj-dialog") || window.customElements.define("wj-dialog", Dialog);