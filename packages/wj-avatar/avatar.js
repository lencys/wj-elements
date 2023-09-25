import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";
import { getHsl, getInitials } from "./service/service.js";

import styles from "./scss/styles.scss?inline";

export class Avatar extends WJElement {
    constructor() {
        super();
    }

    className = "Avatar";

    static get cssStyleSheet() {
        return styles;
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let element = document.createElement("div");
        element.setAttribute("part", "native");
        element.classList.add("native-avatar");

        if(this.size)
            this.classList.add("wj-avatar-" + this.size);

        if(this.isImage()) {
            let slot = document.createElement("slot");

            element.appendChild(slot);
        } else {
            if(this.hasAttribute("initials")) {
                let initials = getInitials(this.label);

                this.setAttribute("style", `--wj-avatar-background-color: ${getHsl(initials)}`);
                element.innerText = initials;
            } else {
                let slotIcon = document.createElement("slot");
                slotIcon.setAttribute("name", "icon");

                element.appendChild(slotIcon);
            }
        }

        fragment.appendChild(element)

        return fragment;
    }

    isImage(){
        return this.getElementsByTagName("wj-img").length > 0;
    }
}

customElements.get("wj-avatar") || window.customElements.define("wj-avatar", Avatar);