import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";
import { computePosition, autoUpdate, offset, flip } from '@floating-ui/dom';

import styles from "./scss/styles.scss?inline";

export class Popup extends WJElement {
    constructor() {
        super();
    }

    className = "Popup";

    static get cssStyleSheet() {
        return styles;
    }

    static get observedAttributes() {
        return ["active"];
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    attributeChangedCallback(name, old, newName) {
        if(name === "active") {
            if(this.hasAttribute(name)) {
                this.show();
            } else {
                this.hide();
            }
        }
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let slotAnchor = document.createElement("slot");
        slotAnchor.setAttribute("name", "anchor");

        this.native = document.createElement("div");
        this.native.classList.add("native-popup");

        let slot = document.createElement("slot");

        this.setAnchor();
        // await this.reposition();

        this.native.appendChild(slot);

        fragment.appendChild(slotAnchor);
        fragment.appendChild(this.native);

        return fragment;
    }

    isVirtualElement(e) {
        return e !== null && typeof e === "object" && "getBoundingClientRect" in e
    }

    setAnchor() {
        if (this.anchor && typeof this.anchor === 'string') {
            const root = this.getRootNode();
            this.anchorEl = root.getElementById(this.anchor);
        } else if (this.anchor instanceof Element || this.isVirtualElement(this.anchor)) {
            this.anchorEl = this.anchor;
        } else {
            this.anchorEl = this.querySelector('[slot="anchor"]');
        }

        if (this.anchorEl instanceof HTMLSlotElement) {
            this.anchorEl = this.anchorEl.assignedElements({ flatten: true })[0];
        }
    }
    reposition() {
        const middleware = [];

        middleware.push(
          offset(+this.offset || 0)
        );

        middleware.push(
          flip()
        );

        computePosition(this.anchorEl, this.native, {
            placement: this.placement || "bottom",
            strategy: 'fixed',
            middleware: middleware,
        }).then((position) => {
            // debugger;
            this.native.style.setProperty("--wj-popup-top", position.y + "px");
            this.native.style.setProperty("--wj-popup-left", position.x + "px");

            this.native.style.position = position.strategy;
        });
    }

    show() {
        this.native.classList.add("popup-active");

        this.cleanup = autoUpdate(this.anchorEl, this.native, () => {
            this.reposition();
        });
    }

    hide() {
        this.native.classList.remove("popup-active");
        this.cleanup();
        this.cleanup = undefined;
    }
}

customElements.get("wj-popup") || window.customElements.define("wj-popup", Popup);