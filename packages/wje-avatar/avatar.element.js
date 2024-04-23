import { default as WJElement, WjElementUtils } from "../wje-element/element.js";
import { getHsl, getInitials } from "./service/service.js";
import styles from "./styles/styles.css?inline";

/**
 * @summary This class represents an Avatar element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/avatar
 * @status stable
 *
 * @extends WJElement
 *
 * @slot - The avatar main content.
 *
 * @csspart native - The component's native wrapper.
 *
 * @cssproperty --wje-avatar-width;
 * @cssproperty --wje-avatar-height;
 * @cssproperty --wje-avatar-font-size;
 * @cssproperty --wje-avatar-font-weight;
 * @cssproperty --wje-avatar-color;
 * @cssproperty --wje-avatar-background-color;
 * @cssproperty --wje-avatar-border-radius;
 * @cssproperty --wje-avatar-border-color;
 * @cssproperty --wje-avatar-border-width;
 * @cssproperty --wje-avatar-border-style;
 *
 * @tag wje-avatar
 */
export default class Avatar extends WJElement {
    /**
     * Avatar class constructor
     */
    constructor() {
        super();
    }

    /**
     * Class name
     */
    className = "Avatar";

    /**
     * Getter for cssStyleSheet
     * @returns {string} styles
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Method to setup attributes
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Method to draw the avatar
     * @param {object} context - The context
     * @param {object} store - The store
     * @param {object} params - The parameters
     * @returns {object} fragment - The document fragment
     */
    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let element = document.createElement("div");
        element.setAttribute("part", "native");
        element.classList.add("native-avatar");

        if(this.size)
            this.classList.add("wje-avatar-" + this.size);

        // if(this.isImage()) {
            let slot = document.createElement("slot");

            element.appendChild(slot);
        // } else {
            if(this.hasAttribute("initials")) {
                let initials = getInitials(this.label);

                this.setAttribute("style", `--wje-avatar-background-color: ${getHsl(initials)}`);
                element.innerText = initials;
            } else {
                let slotIcon = document.createElement("slot");
                slotIcon.setAttribute("name", "icon");

                element.appendChild(slotIcon);
            }
        // }

        let status = document.createElement("slot");
        status.setAttribute("name", "status");
        status.setAttribute("part", "status");

        let secondary = document.createElement("slot");
        secondary.setAttribute("name", "secondary");
        secondary.setAttribute("part", "secondary");

        element.appendChild(status);
        element.appendChild(secondary);

        fragment.appendChild(element)

        return fragment;
    }

    /**
     * Method to check if the avatar is an image
     * @returns {boolean} - True if the avatar is an image, false otherwise
     */
    isImage(){
        return this.getElementsByTagName("wje-img").length > 0;
    }
}