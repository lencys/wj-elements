import { default as WJElement, event } from "../wj-element/wj-element.js";
import { computePosition, autoUpdate, offset, flip, arrow, size } from '@floating-ui/dom';

import styles from "./scss/styles.scss?inline";

export class Popup extends WJElement {
    constructor() {
        super();
        this._manual = false;
    }

    set manual(value) {
        this._manual = value;
    }

    get manual() {
        if(this.hasAttribute("manual"))
            this._manual = true;

        return this._manual;
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
        this.setAnchor();
    }

    setAnchor() {
        if (this.slotAnchor && typeof this.anchor === 'string') {
            const root = this.getRootNode();
            this.anchorEl = root.getElementById(this.anchor);
        } else if (this.slotAnchor instanceof HTMLSlotElement) {
            this.anchorEl = this.slotAnchor.assignedElements({ flatten: true })[0];
        }

        // if (this.manual) {
            event.addListener(this.anchorEl, "click", null, (e) => {
                console.log("som CLICK");
                if(this.hasAttribute("disabled")) return;
                this.showHide();
            }, {stopPropagation: true});
        // }

        // event.addListener(this, "mouseover", null,(e) => {
        //     if(this.manual) return;
        //     console.log("som MOUSEOVER");
        //     this.showHide();
        // });

        // event.addListener(this, "mouseout", null,(e) => {
            // let clickToHost = e.composedPath().some((el) => el === this);
            // console.log("som MOUSEOUT", e.relatedTarget.closest("wj-menu"), e.composedPath());
        //     if(true) return;
        //     console.log("som MOUSEOUT");
        //     this.showHide();
        // });

        document.addEventListener("click",(e) => {
            let clickToHost = e.composedPath().some((el) => el === this);

            if(!clickToHost) {
                if(this.hasAttribute("active"))
                    this.removeAttribute("active");
            }
        });
    }

    showHide() {
        if(this.hasAttribute("active")) {
            this.removeAttribute("active");
        } else {
            this.setAttribute("active", "");
            event.addListener(this, "click", "wj:popup-show");
        }
    }

    reposition() {
        const middleware = [];

        this.offsetCalc = +this.offset || 0;
        if (this.slotArrow instanceof HTMLSlotElement) {
            this.arrow = this.slotArrow.assignedElements({ flatten: true })[0];

            if(this.arrow) {
                middleware.push(
                  arrow({
                      element: this.arrow,
                  })
                );
                this.offsetCalc = (Math.sqrt(2 * this.arrow.offsetWidth ** 2) / 2) + +this.offset
            }
        }

        middleware.push(
          offset(this.offsetCalc)
        );

        middleware.push(
          flip()
        );

        if(this.hasAttribute("size")) {
            middleware.push(
                size({
                    apply({availableWidth, availableHeight, elements}) {
                        Object.assign(elements.floating.style, {
                            width: `${elements.reference.offsetWidth}px`
                        });
                    },
                })
            );
        }

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

        event.dispatchCustomEvent(this,"wj-popup:reposition", {
            data: { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
            context: this,
            event: this
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