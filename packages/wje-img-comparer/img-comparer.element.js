import { default as WJElement } from "../wje-element/element.js";
import Icon from "../wje-icon/icon.js";
import { drag } from "./service/service.js";
import styles from "./styles/styles.css?inline";

/**
 * @summary This element allows users to compare two images. `ImgComparer` is a custom web component that represents an image comparer.
 * It extends from `WJElement` and uses the `Icon` component.
 * @documentation https://elements.webjet.sk/components/img-comparer
 * @status stable
 * @augments {WJElement}
 * @slot before - The before image slot.
 * @slot after - The after image slot.
 * @csspart divider - The divider part.
 * @cssproperty [--wje-img-compare-divider-area=12px] - The area of the divider. This is the size of the divider. Accepts any valid CSS size.
 * @cssproperty [--wje-img-compare-divider-background=white] - Sets the background color of the divider in the image comparison component. Accepts any valid CSS color value (e.g., `red`, `#ff0000`, `rgba(255, 255, 255, 0.5)`). The default value is `white`, which ensures high contrast in most designs.
 * @cssproperty [--wje-img-compare-divider-size=2px] - The size of the divider. This is the thickness of the divider. Accepts any valid CSS size.
 * @cssproperty [--wje-img-compare-divider-left=50%] - The left position of the divider. This is the initial position of the divider.
 * @cssproperty [--wje-img-compare-position=50%] - The position of the divider. This is the position of the divider.
 * @cssproperty [--wje-img-compare-clip-path=inset(0 calc(100% - var(--wje-img-compare-position)) 0 0)] - The clip path of the divider. This is the clip path of the divider.
 * @tag wje-img-comparer
 */
export default class ImgComparer extends WJElement {

    /**
     * Creates an instance of ImgComparer.
     * @class
     */
    constructor() {
        super();
    }

    /**
     * Dependencies of the ImgComparer component.
     * @property {object} dependencies
     */
    dependencies = {
        "wje-icon": Icon
    }

    className = "ImgComparer";

    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Returns the list of attributes to observe for changes.
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes() {
        return [];
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Draws the component.
     * @returns {DocumentFragment}
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement("div");
        native.classList.add("native-split-view");

        let beforeElement = document.createElement("div");
        beforeElement.classList.add("wje-before");

        let before = document.createElement("slot");
        before.setAttribute("name", "before");

        let afterElement = document.createElement("div");
        afterElement.classList.add("wje-after");

        let after = document.createElement("slot");
        after.setAttribute("name", "after");

        let icon = document.createElement("wje-icon");
        icon.setAttribute("name", "arrow-bar-both");

        let dividerElement = document.createElement("div");
        dividerElement.classList.add("wje-divider");
        dividerElement.setAttribute("part", "divider");
        dividerElement.addEventListener("mousedown", this.handleDrag, false);

        beforeElement.appendChild(before);
        afterElement.appendChild(after);
        dividerElement.appendChild(icon);

        native.appendChild(beforeElement);
        native.appendChild(afterElement);
        native.appendChild(dividerElement);

        fragment.appendChild(native);

        this.native = native;

        return fragment;
    }

    /**
     * Handles the drag event.
     * @param {Event} e The event.
     */
    handleDrag = (e) => {
        const { width } = this.native.getBoundingClientRect();

        drag(this, {
            onMove: (x) => {
                let value = (x / width) * 100;
                this.position = parseFloat(this.clamp(value, 0, 100).toFixed(2));
                this.native.style.setProperty("--wje-img-compare-divider-left", this.position + "%");
                this.native.style.setProperty("--wje-img-compare-clip-path", `inset(0 ${100 - this.position}% 0 0)`);
            },
            initialEvent: e
        });
    }

    /**
     * Clamps a number between a minimum and maximum value.
     * @param {number} num The number to clamp.
     * @param {number} min The minimum value.
     * @param {number} max The maximum value.
     * @returns {number} The clamped number.
     */
    clamp = (num, min, max) => Math.min(Math.max(num, min), max);
}