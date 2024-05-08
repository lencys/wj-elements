import { default as WJElement, event } from "../wje-element/element.js";
import Popup from "../wje-popup/popup.element.js";

export default class Dropdown extends WJElement {
    constructor() {
        super();
    }

    depandencies = {
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

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        this.classList.add("wje-placement", "wje-" + this.placement || "wje-start");

        let native = document.createElement("div");
        native.setAttribute("part", "native");
        native.classList.add("native-dropdown");

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

    afterDraw() {
        if(this.trigger != "click") {
            event.addListener(this, "mouseenter", null, this.onOpen);
            event.addListener(this, "mouseleave", null, this.onClose);
        } else {
            event.addListener(this.anchorSlot, "click", null, this.onOpen);
        }

        if(this.hasAttribute("collapsible"))
            event.addListener(Array.from(this.querySelectorAll("wje-menu-item")), "click", "wje-menu-item:click", this.onClose);
    }

    beforeShow() {
        return this.content;
    }

    afterShow() {}


    /**
     * @summary Open the popup
     * @param e
     */
    onOpen = async (e) => {
        this.classList.add("active");
        Promise.resolve(this.beforeShow(this)).then((res) => {
            if (!this.classList.contains("active")) {
                throw new Error("beforeShow method returned false or not string");
            }

            this.popup.show(); // Show tooltip
            Promise.resolve(this.afterShow(this));
        }).catch((error) => {
            // ak je nejaka chyba tak to len zatvorime
            this.classList.remove("active");
            this.popup.hide();
        });
    }

    /*
      * @summary Close the popup
      * @param e
     */
    onClose = async (e) => {
        this.classList.remove("active");
        this.popup.hide(); // Now close the popup
    }
}