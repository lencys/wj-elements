import { default as WJElement, WjElementUtils } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * @summary This element represents an image. `Img` is a custom web component that represents an image. It extends from `WJElement`.
 * @documentation https://elements.webjet.sk/components/img
 * @status stable
 *
 * @extends {WJElement}
 *
 * @cssprop --img-width - The width of the image
 * @cssprop --img-height - The height of the image
 *
 * @tag wje-img
 */
export default class Img extends WJElement {
    /**
     * Creates an instance of Img.
     *
     * @constructor
     */
    constructor() {
        super();
    }

    className = "Img";

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
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = "open";
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

        let img = document.createElement("img");
        img.setAttribute("src", "./assets/img/image-loader.gif");
        img.classList.add("lazy-loaded-image", "lazy");
        img.setAttribute("alt", this.alt || "");

        this.img = img;
        fragment.appendChild(img);

        return fragment;
    }

    /**
     * Called after the component has been drawn.
     */
    afterDraw(context, store, params) {
        let lazyImageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.src = this.src;
                    this.classList.remove("lazy");
                    lazyImageObserver.unobserve(entry.target);
                }
            });
        });

        lazyImageObserver.observe(this.img);
    }
}