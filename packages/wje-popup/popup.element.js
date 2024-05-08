import { default as WJElement, event } from "../wje-element/element.js";
import { computePosition, autoUpdate, offset, flip, arrow, size } from '@floating-ui/dom';
import styles from "./styles/styles.css?inline";

/**
 * `Popup` is a custom web component that represents a popup.
 * @summary This element represents a popup.
 * @documentation https://elements.webjet.sk/components/popup
 * @status stable
 *
 * @extends {WJElement}
 *
 * @csspart native - The native part of the popup.
 *
 * @slot anchor - The slot for the anchor of the popup.
 * @slot arrow - The slot for the arrow of the popup.
 * @slot - The default slot for the popup.
 *
 * @fires wje-popup:reposition - Event fired when the popup is repositioned.
 * @fires wje-popup:show - Event fired when the popup is shown.
 * @fires wje-popup:hide - Event fired when the popup is hidden.
 *
 * @tag wje-popup
 */
export default class Popup extends WJElement {
    /**
     * Creates an instance of Popup.
     *
     * @constructor
     */
    constructor() {
        super();
        this._manual = false;
    }

    /**
     * Sets the manual property of the popup.
     *
     * @param {boolean} value - The value to set.
     */
    set manual(value) {
        this._manual = value;
    }

    /**
     * Gets the manual property of the popup.
     *
     * @returns {boolean} The value of the manual property.
     */
    get manual() {
        if(this.hasAttribute("manual"))
            this._manual = true;

        return this._manual;
    }

    className = "Popup";

    /**
     * Returns the CSS styles for the component.
     *
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Returns the list of attributes to observe for changes.
     *
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes() {
        return ["active"];
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Called when an attribute changes.
     *
     * @param {string} name - The name of the attribute.
     * @param {string} old - The old value of the attribute.
     * @param {string} newName - The new value of the attribute.
     */
    attributeChangedCallback(name, old, newName) {
        if(name === "active") {
            if(this.hasAttribute(name)) {
                this.show();
            } else {
                this.hide();
            }
        }
    }

    /**
     * Draws the component.
     *
     * @param {Object} context - The context for drawing.
     * @param {Object} store - The store for drawing.
     * @param {Object} params - The parameters for drawing.
     * @returns {DocumentFragment}
     */
    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let slotAnchor = document.createElement("slot");
        slotAnchor.setAttribute("name", "anchor");

        let slotArrow = document.createElement("slot");
        slotArrow.setAttribute("name", "arrow");

        let native = document.createElement("div");
        native.setAttribute("part", "native");
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

    /**
     * Sets the anchor for the popup.
     * Adds a click event listener to the anchor element.
     */
    setAnchor() {
        if (this.slotAnchor && typeof this.anchor === 'string') {
            const root = this.getRootNode();
            this.anchorEl = root.getElementById(this.anchor);
        } else if (this.slotAnchor instanceof HTMLSlotElement) {
            this.anchorEl = this.slotAnchor.assignedElements({ flatten: true })[0];
        }

        if(!this.manual) {
            event.addListener(this.anchorEl, "click", null, (e) => {
                if(this.hasAttribute("disabled")) return;

                this.showHide();
            }, { stopPropagation: true });
        }

        document.addEventListener("click",(e) => {
            let clickToHost = e.composedPath().some((el) => el === this);

            console.log(clickToHost);
            if(!clickToHost) {
                console.log("click outside", this.hasAttribute("active"));
                if(this.hasAttribute("active"))
                    this.removeAttribute("active");
            }
        });
    }

    /**
     * Toggles the active attribute of the popup.
     */
    showHide() {
        if(this.hasAttribute("active")) {
            this.removeAttribute("active");
        } else {
            this.setAttribute("active", "");
        }
    }

    /**
     * Repositions the popup.
     * Uses the floating-ui library to compute the position.
     */
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

            this.native.style.setProperty("--wje-popup-left", x + "px");
            this.native.style.setProperty("--wje-popup-top", y + "px");

            this.native.style.position = strategy;

            if(this.arrow) {
                const staticSide = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                }[placement];

                if (middlewareData.arrow) {
                    const { width, height } = this.native.getBoundingClientRect();
                    const {x, y} = middlewareData.arrow;

                    Object.assign(this.arrow.style, {
                        left: x != null ? `${width / 2 - this.arrow.offsetWidth / 2}px` : "",
                        top: y != null ? `${height / 2 - this.arrow.offsetHeight / 2}px` : "",
                        [staticSide]: `${ - this.arrow.offsetHeight / 2}px`,
                    });
                }
            }
        });

        event.dispatchCustomEvent(this,"wje-popup:reposition", {
            data: { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
            context: this,
            event: this
        });
    }

    /**
     * Shows the popup.
     * Adds the popup-active class to the native element.
     * Sets up auto update for repositioning.
     */
    show() {
        event.dispatchCustomEvent(this,"wje-popup:show");

        this.native.classList.add("popup-active");

        this.cleanup = autoUpdate(this.anchorEl, this.native, () => {
            this.reposition();
        });

        if(!this.hasAttribute("active"))
            this.setAttribute("active", "");
    }

    /**
     * Hides the popup.
     * Removes the popup-active class from the native element.
     * Cleans up the auto update for repositioning.
     */
    hide() {
        event.dispatchCustomEvent(this,"wje-popup:hide");
        this.native.classList.remove("popup-active");
        this.removeAttribute("active");
        this.cleanup;
        this.cleanup = undefined;
    }

    /**
     * Removes the active attribute when the popup is hidden.
     */
    onHide() {
        this.removeAttribute("active");
    }

    /**
     * Adds event listeners after the component is drawn.
     */
    disconnectedCallback() {
        event.removeElement(this.anchorEl)
    }
}