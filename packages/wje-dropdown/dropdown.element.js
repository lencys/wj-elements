import { default as WJElement, event } from "../wje-element/element.js";
import Popup from "../wje-popup/popup.element.js";

/**
 * `Dropdown` is a custom element that displays a dropdown menu.
 * @summary This element represents a dropdown menu.
 * @documentation https://elements.webjet.sk/components/dropdown
 * @status stable
 *
 * @extends {WJElement}
 *
 * @csspart native - The native part of the dropdown.
 *
 * @slot trigger - The slot for the trigger of the dropdown.
 * @slot - The default slot for the dropdown.
 *
 * @fires wje-dropdown:open - Event fired when the dropdown is opened.
 * @fires wje-dropdown:close - Event fired when the dropdown is closed.
 *
 * @tag wje-dropdown
 *
 * */
export default class Dropdown extends WJElement {
    /**
     * Creates an instance of Dropdown.
     *
     * @constructor
     * */
    constructor() {
        super();
    }

    dependencies = {
        "wje-popup": Popup
    }

    set trigger(value) {
        this.setAttribute("trigger", value);
    }

    get trigger() {
        return this.getAttribute("trigger") || "click";
    }

    className = "Dropdown";

    static get observedAttributes() {
        return ["active"];
    }

    /**
     * Callback function to handle other dropdowns being opened. Close the dropdown if it is not the target and collapse is enabled.
     *
     * @param {Event} e - The event object.
     */
    otherDropdownOpennedCallback = (e) => {
        if (e.detail.detail.target !== this) {
            this.classList.remove("active");
            this.popup.hide();
        }
    };

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    beforeDraw() {
        this.popup?.remove()
        this.popup = null;
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        this.classList.add(
            "wje-placement",
            "wje-" + this.placement || "wje-start"
        );

        let native = document.createElement("div");
        native.setAttribute("part", "native");
        native.classList.add("native-dropdown");

        let tooltip = document.createElement("wje-tooltip");
        tooltip.setAttribute("content", this.tooltip);

        let anchorSlot = document.createElement("slot");
        anchorSlot.setAttribute("name", "trigger");
        anchorSlot.setAttribute("slot", "anchor");

        let slot = document.createElement("slot");

        let popup = document.createElement("wje-popup");
        popup.setAttribute("placement", this.placement);
        popup.setAttribute("offset", this.offset);

        popup.appendChild(anchorSlot);
        popup.appendChild(slot);

        // if(this.trigger === "click")
        popup.setAttribute("manual", "");

        native.appendChild(popup);

        fragment.appendChild(native);

        this.popup = popup;
        this.anchorSlot = anchorSlot;

        return fragment;
    }

    afterDisconnect() {
        event.removeListener(this, "mouseenter", null, this.onOpen);
        event.removeListener(this, "mouseleave", null, this.onClose);
        event.removeListener(this.anchorSlot, "click", null, this.toggleCallback, { capture: true });
    }

    afterDraw() {
        event.addListener(this, "wje-popup:hide", null, () => {
            this.classList.remove("active");
        });

        if (this.trigger != "click") {
            event.addListener(this, "mouseenter", null, this.onOpen);
            event.addListener(this, "mouseleave", null, this.onClose);
        } else {
            event.addListener(this.anchorSlot, "click", null, this.toggleCallback, { capture: true });
        }

        if (this.hasAttribute("collapsible")) {
            event.addListener(Array.from(this.querySelectorAll("wje-menu-item")), "click", "wje-menu-item:click", this.onClose);
        }
    }

    /**
     * @summary Returns the content to be displayed before showing the dropdown.
     * @returns {any} The content to be displayed.
     */
    beforeShow() {
        return this.content;
    }

    /**
     * This method is called after the dropdown is shown.
     */
    afterShow() { }

    /**
     * @summary Toggles the dropdown element between active and inactive states.
     * Calls the `onOpen` method if the element is currently inactive,
     * and calls the `onClose` method if the element is currently active.
     *
     * @param {Event} e - The event object.
     */
    toggleCallback = (e) => {
        e.stopPropagation();
        if (this.classList.contains("active")) {
            this.onClose(e);
        } else {
            this.onOpen(e);
        }
    };

    /**
     * @summary Open the popup
     * @param e
     */
    onOpen = async (e) => {
        e.stopPropagation();

        this.classList.add("active");
        Promise.resolve(this.beforeShow(this))
            .then((res) => {
                if (!this.classList.contains("active")) {
                    throw new Error(
                        "beforeShow method returned false or not string"
                    );
                }

                this.popup.show(); // Show tooltip

                event.dispatchCustomEvent(this, "wje-dropdown:open", {
                    bubbles: true,
                    detail: { target: this },
                });

                Promise.resolve(this.afterShow(this));
            })
            .catch((error) => {
                // ak je nejaka chyba tak to len zatvorime
                this.classList.remove("active");
                this.popup.hide();
            });
    };

    /**
     * @summary Close the popup
     * @param e
     */
    onClose = async (e) => {

        this.classList.remove("active");
        this.popup.hide(); // Now close the popup

        event.dispatchCustomEvent(this, "wje-dropdown:close", {
            bubbles: true,
            detail: { target: this },
        });
    };
}
