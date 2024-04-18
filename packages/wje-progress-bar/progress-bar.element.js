import { default as WJElement, WjElementUtils } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * `ProgressBar` is a custom web component that represents a progress bar.
 * @summary This element represents a progress bar.
 * @documentation https://elements.webjet.sk/components/progress-bar
 * @status stable
 *
 * @extends {WJElement}
 *
 * @slot - The default slot for the progress bar.
 * @slot start - The start slot of the progress bar.
 * @slot end - The end slot of the progress bar.
 *
 * @cssprop [--wje-progress-bar-color=var(--wje-color-contrast-6)]- The color of the progress bar.
 * @cssprop [--wje-progress-bar-text-size=.75rem] - The size of the text in the progress bar.
 * @cssprop [--wje-progress-bar-text-color=var(--wje-color)] - The color of the text in the progress bar.
 *
 * @tag wje-progress-bar
 */
export default class ProgressBar extends WJElement {
    /**
     * Creates an instance of ProgressBar.
     *
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Sets the radius of the progress bar.
     *
     * @param {number} value - The value to set.
     */
    set radius(value) {
        this.setAttribute("radius", value);
    }

    /**
     * Gets the radius of the progress bar.
     *
     * @returns {number} The value of the radius.
     */
    get radius() {
        return +this.getAttribute("radius") || 70;
    }

    /**
     * Gets the diameter of the progress bar.
     *
     * @returns {number} The value of the diameter.
     */
    get diameter() {
        return this.radius * 2 + this.stroke;
    }

    /**
     * Sets the stroke of the progress bar.
     *
     * @param {number} value - The value to set.
     */
    set stroke(value) {
        this.setAttribute("stroke", value);
    }

    /**
     * Gets the stroke of the progress bar.
     *
     * @returns {number} The value of the stroke.
     */
    get stroke() {
        return +this.getAttribute("stroke") || 6;
    }

    /**
     * Gets the linecap of the progress bar.
     *
     * @returns {string} The value of the linecap.
     */
    get linecap() {
        return this.getAttribute("linecap") || "square";
    }

    className = "ProgressBar";

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
        return ["progress"];
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
        let xy = (this.radius + this.stroke/2);

        let fragment = document.createDocumentFragment();

        if(params.color)
            this.classList.add("wje-color-" + params.color, "wje-color");

        let element = document.createElement("div");
        element.classList.add("progress");

        let slot = document.createElement("slot");

        let slotWrapper = document.createElement("div");
        slotWrapper.classList.add("slot-wrapper");

        let slotStart = document.createElement("slot");
        slotStart.setAttribute("name", "start");

        let slotEnd = document.createElement("slot");
        slotEnd.setAttribute("name", "end");

        let svg = document.createElementNS("http://www.w3.org/2000/svg","svg");

        let background;
        let bar;

        if(this?.type === "circle") {
            svg.setAttribute("width", this.diameter);
            svg.setAttribute("height", this.diameter);
            svg.setAttribute("viewBox", `0 0 ${this.diameter} ${this.diameter}`);
            svg.setAttribute("style", "transform: rotate(-90deg)");

            background = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            background.setAttribute("r", this.radius);
            background.setAttribute("cx", xy);
            background.setAttribute("cy", xy);
            background.setAttribute("fill", "transparent");

            bar = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            bar.setAttribute("r", this.radius);
            bar.setAttribute("cx", xy);
            bar.setAttribute("cy", xy);
            bar.setAttribute("fill", "transparent");
            bar.setAttribute("stroke-dasharray", "0");
            bar.setAttribute("stroke-dashoffset", "0");

            let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("x", "50%");
            text.setAttribute("y", "50%");
            text.innerHTML = this.progress + "%";

            svg.appendChild(text);
        } else {
            svg.setAttribute("width", "100%");
            svg.setAttribute("height", this.stroke);
            svg.setAttribute("preserveAspectRatio", "none");

            background = document.createElementNS("http://www.w3.org/2000/svg", "line");
            background.setAttribute("x1", 0);
            background.setAttribute("y1", this.stroke / 2);
            background.setAttribute("x2", "100%");
            background.setAttribute("y2", this.stroke / 2);


            bar = document.createElementNS("http://www.w3.org/2000/svg", "line");
            bar.setAttribute("x1", 0);
            bar.setAttribute("y1", this.stroke / 2);
            bar.setAttribute("x2", this.progress + "%");
            bar.setAttribute("y2", this.stroke / 2);
        }

        // background.setAttribute("stroke", "#e0e0e0");
        background.setAttribute("stroke-linecap", this.linecap);
        background.setAttribute("stroke-width", this.stroke + "px");

        bar.setAttribute("stroke-linecap", this.linecap);
        bar.setAttribute("stroke-width", this.stroke + "px");
        bar.setAttribute("id", "bar");

        svg.appendChild(background);
        svg.appendChild(bar);

        slotWrapper.appendChild(slot);

        element.appendChild(slotStart);
        element.appendChild(slotWrapper);
        element.appendChild(svg);
        element.appendChild(slotEnd);

        fragment.appendChild(element);

        this.background = background;
        this.bar = bar;

        return fragment;
    }

    /**
     * Adds event listeners after the component is drawn.
     */
    afterDraw(context, store, params) {
        if(this.type === "circle") {
            this.background.setAttribute("stroke-dasharray", this.getCircleDashoffset(100) + "px");
            this.background.setAttribute("stroke-dashoffset", "0px");
            this.bar.setAttribute("stroke-dasharray", this.getCircleDasharray(this.radius) + "px");
            this.bar.setAttribute("stroke-dashoffset", this.getCircleDashoffset(params.progress, this.radius) + "px");
        }
    }

    /**
     * Returns the dasharray for a circle with the given radius.
     *
     * @param {number} radius - The radius of the circle.
     * @returns {number} The dasharray value.
     */
    getCircleDasharray(radius = 70) {
        return 2 * Math.PI * radius;
    }

    /**
     * Returns the dashoffset for a circle with the given progress and radius.
     *
     * @param {number} progress - The progress of the circle.
     * @param {number} radius - The radius of the circle.
     * @returns {number} The dashoffset value.
     */
    getCircleDashoffset(progress = 0, radius) {
        return this.getCircleDasharray(radius) * ((100 - progress)/100);
    }
}