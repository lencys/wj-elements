import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";
import "../wj-icon/icon.js";
import "../wj-popup/popup.js";

import styles from "./scss/styles.scss?inline";

export class MenuItem extends WJElement {
    constructor() {
        super();

        this.hasSubmenu =  WjElementUtils.hasSlot(this, "submenu");
    }

    className = "MenuItem";

    static get cssStyleSheet() {
        return styles;
    }

    static get observedAttributes() {
        return [];
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    beforeDraw(context, store, params) {
        // this.tabIndex = "-1";
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let native = document.createElement("div");
        native.classList.add("native-menu-item");
        native.setAttribute("id", "anchor");

        if(this.hasSubmenu)
            native.innerHTML = `<wj-popup anchor="anchor" placement="right-start"><slot name="submenu"></slot></wj-popup>`;

        let checkedIcon = document.createElement("span");
        checkedIcon.classList.add("check-icon");
        checkedIcon.innerHTML = `<wj-icon name="check"></wj-icon>`;

        let start = document.createElement("slot");
        start.name = "start";

        let slot = document.createElement("slot");
        slot.classList.add("label");

        let end = document.createElement("slot");
        end.name = "end";

        let submenutIcon = document.createElement("span");
        submenutIcon.classList.add("submenu-icon");
        submenutIcon.innerHTML = `<wj-icon name="chevron-right"></wj-icon>`;

        this.hasSubmenu ? native.classList.add("has-submenu") : native.classList.remove("has-submenu");

        native.appendChild(checkedIcon);
        native.appendChild(start);
        native.appendChild(slot);
        native.appendChild(end);
        native.appendChild(submenutIcon);

        this.native = native;

        fragment.appendChild(native);

        return fragment;
    }

    afterDraw() {
        if (this.hasSubmenu) {
            this.addEventListener("mouseover", (e) => {
                this.tabIndex = "-1";
                this.focus();
                this.native.querySelector("wj-popup").setAttribute("active", "true");
                this.native.classList.add("expanded-submenu");
            });

            this.addEventListener("mouseout", (e) => {
                this.tabIndex = "0";
                this.native.querySelector("wj-popup").removeAttribute("active");
                this.native.classList.remove("expanded-submenu");
            });
        }
    }

    disabledPopup = () => {
        this.querySelector("wj-popup").removeAttribute("active");
    }
}

customElements.get("wj-menu-item") || window.customElements.define("wj-menu-item", MenuItem);