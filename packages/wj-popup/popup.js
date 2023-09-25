import { default as WJElement, event } from "../wj-element/wj-element.js";
import { computePosition, autoUpdate, offset, flip, arrow } from '@floating-ui/dom';

import styles from "./scss/styles.scss?inline";

export class Popup extends WJElement {
    constructor() {
        super();
    }

    set manual(value) {
        this.setAttribute("manual", value);
    }

    get manual() {
        console.log(this);
        return this.hasAttribute("manual");
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

        let slotArrow = document.createElement("slot");
        slotArrow.setAttribute("name", "arrow");

        let native = document.createElement("div");
        native.classList.add("native-popup");

        let slot = document.createElement("slot");

        native.appendChild(slot);
        native.appendChild(slotArrow);

        fragment.appendChild(slotAnchor);
        fragment.appendChild(native);

        this.slotAnchor = slotAnchor;
        this.slotArrow = slotArrow;
        this.native = native;

        return fragment;
    }

    afterDraw(context, store, params) {
        // document.addEventListener("mousemove",(e) => {
        //     let clickToHost = e.composedPath().some((el) => el.nodeName === "WJ-POPUP");
        //     console.log(clickToHost, this.hasAttribute("active"), e.composedPath());
        //     if(clickToHost && this.hasAttribute("active"))
        //         this.manual = true;
        //     else
        //         this.manual = false;
        // });
        this.setAnchor();
    }

    setAnchor() {
        if (this.slotAnchor && typeof this.anchor === 'string') {
            const root = this.getRootNode();
            this.anchorEl = root.getElementById(this.anchor);
        } else if (this.slotAnchor instanceof HTMLSlotElement) {
            this.anchorEl = this.slotAnchor.assignedElements({ flatten: true })[0];
        }

        if (this.manual) {
            event.addListener(this.anchorEl, "click", null, (e) => {
                this.showHide();
            });
        }

        event.addListener(this.anchorEl, "mouseover", null,(e) => {
            if(this.manual) return;
            this.showHide();
        });

        event.addListener(this.anchorEl, "mouseout", null,(e) => {
            if(this.manual) return;
            this.showHide();
        });

        document.addEventListener("click",(e) => {
            let clickToHost = e.composedPath().some((el) => el === this);

            if(!clickToHost) {
                if(this.hasAttribute("active"))
                    this.removeAttribute("active");
            }
        });
    }

    showHide() {
        if(this.hasAttribute("active"))
            this.removeAttribute("active");
        else
            this.setAttribute("active", "");
    }

    reposition() {

        const middleware = [];

        if (this.slotArrow instanceof HTMLSlotElement) {
            this.arrow = this.slotArrow.assignedElements({ flatten: true })[0];

            if(this.arrow) {
                middleware.push(
                  arrow({
                      element: this.arrow,
                  })
                );

                if(this.offset)
                    this.offset = Math.sqrt(2 * this.arrow.offsetWidth ** 2) / 2;
            }
        }

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
        }).then(({ x, y, middlewareData, placement, strategy }) => {
            this.native.style.setProperty("--wj-popup-left", x + "px");
            this.native.style.setProperty("--wj-popup-top", y + "px");

            this.native.style.position = strategy;

            if(this.arrow) {
                const side = this.placement.split("-")[0];

                const staticSide = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                }[side];

                if (middlewareData.arrow) {
                    const {x, y} = middlewareData.arrow;

                    Object.assign(this.arrow.style, {
                        left: x != null ? `${x}px` : "",
                        top: y != null ? `${y}px` : "",
                        [staticSide]: `${-this.arrow.offsetWidth / 2}px`,

                    });
                }
            }
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

    disconnectedCallback() {
        event.removeElement(this.anchorEl)
    }
}

customElements.get("wj-popup") || window.customElements.define("wj-popup", Popup);