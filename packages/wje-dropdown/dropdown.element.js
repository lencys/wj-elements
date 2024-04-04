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

        if(this.trigger === "click")
            popup.setAttribute("manual", "");

        native.appendChild(popup);

        fragment.appendChild(native);

        this.popup = popup;
        this.anchorSlot = anchorSlot;

        return fragment;
    }

    afterDraw() {
        if(this.trigger != "click") {
            event.addListener(this.anchorSlot, "mouseenter", null, this.onShow);
            event.addListener(this.anchorSlot, "mouseleave", null, this.onHide);
        }

        event.addListener(this.popup, "click", "wje-menu-item:click", this.onHide);
    }

    /**
     * @summary Show tooltip
     */
    onShow = () => {
        this.popup.show();
    }

    /**
     * @summary Hide tooltip
     */
    onHide = () => {
        this.popup.hide();
    }
}