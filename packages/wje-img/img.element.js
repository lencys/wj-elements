import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * @summary This element represents an image. `Img` is a custom web component that represents an image. It extends from `WJElement`.
 * @documentation https://elements.webjet.sk/components/img
 * @status stable
 * @augments {WJElement}
 * @cssproperty --img-width - The width of the image
 * @cssproperty --img-height - The height of the image
 * @tag wje-img
 */
export default class Img extends WJElement {

    /**
     * Creates an instance of Img.
     * @class
     */
    constructor() {
        super();
    }

    set loader(value) {
        if (value) {
            this.setAttribute("loader", value);
        }
    }

    get loader() {
        return this.getAttribute("loader");
    }

    className = "Img";

    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Draws the component for the image.
     * @returns {DocumentFragment}
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement("img");
        native.setAttribute("part", "native");
        native.setAttribute("src", this.loader || "./assets/img/image-loader.gif");
        native.setAttribute("alt", this.alt || "");
        native.classList.add("lazy-loaded-image", "lazy");

        this.native = native;
        fragment.appendChild(native);

        return fragment;
    }

    /**
     * Called after the component has been drawn.
     */
    afterDraw() {
        let lazyImageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.src = this.src;
                    this.classList.remove("lazy");
                    lazyImageObserver.unobserve(entry.target);
                }
            });
        });

        lazyImageObserver.observe(this.native);
    }
}