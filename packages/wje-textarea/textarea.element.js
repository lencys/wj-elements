import { default as WJElement, event } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * `Textarea` is a custom web component that represents a textarea input.
 * @summary This element represents a textarea input.
 * @documentation https://elements.webjet.sk/components/textarea
 * @status stable
 *
 * @extends {WJElement}
 *
 * @csspart native - The native textarea wrapper.
 * @csspart input - The textarea input.
 *
 * @cssproperty [--wje-textarea-font-family=var(--wje-font-family)] - The font family of the textarea.
 * @cssproperty [--wje-textarea-background-color=var(--wje-background)] - The background color of the textarea.
 * @cssproperty [--wje-textarea-color=var(--wje-color)] - The color of the textarea.
 * @cssproperty [--wje-textarea-color-invalid=var(--wje-color-danger)] - The color of the textarea when invalid.
 * @cssproperty [--wje-textarea-border-width=1px] - The border width of the textarea.
 * @cssproperty [--wje-textarea-border-style=solid] - The border style of the textarea.
 * @cssproperty [--wje-textarea-border-color=var(--wje-border-color)] - The border color of the textarea.
 * @cssproperty [--wje-textarea-border-color-focus=var(--wje-color-primary)] - The border color of the textarea when focused.
 * @cssproperty [--wje-textarea-border-radius=4px] - The border radius of the textarea.
 * @cssproperty [--wje-textarea-margin-bottom=.5rem] - The margin bottom of the textarea.
 * @cssproperty [--wje-textarea-line-height=20px] - The line height of the textarea.
 * @cssproperty [--wje-textarea-padding=0.5rem] - The padding of the textarea.
 *
 * @tag wje-textarea
 */
export default class Textarea extends WJElement {
    /**
     * Creates an instance of Textarea.
     *
     * @constructor
     */
    constructor() {
        super();
    }

    className = "Textarea";

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
        return [];
    }

    set placeholder(value) {
        this.setAttribute("placeholder", value);
    }

    get placeholder() {
        return this.getAttribute("placeholder");
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

        let native = document.createElement("div");
        native.classList.add("native-textarea", this.variant || "default");
        native.setAttribute("part", "native")

        if (this.hasAttribute("invalid"))
            native.classList.add("has-error");

        let wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");

        let inputWrapper = document.createElement("div");
        inputWrapper.classList.add("input-wrapper");

        let label = document.createElement("label");
        label.htmlFor = "textarea";
        label.innerHTML = this.label || "";

        let input = document.createElement("textarea");
        input.id = "textarea";
        input.name = this.name;
        input.disabled = this.hasAttribute("disabled");
        input.innerText = this.innerHTML;
        input.placeholder = this.placeholder || "";
        input.classList.add("form-control");
        input.setAttribute("part", "input");
        input.setAttribute("rows", this.rows || 3);
        input.setAttribute("spellcheck", false);

        if (this.resize === "auto")
            input.addEventListener("input", this.setTextareaHeight);

        if (this.variant === "standard") {
            if (this.label)
                native.appendChild(label);
        } else {
            inputWrapper.appendChild(label);
        }

        inputWrapper.appendChild(input);

        wrapper.appendChild(inputWrapper);

        native.appendChild(wrapper);

        fragment.appendChild(native);

        if (this.hasAttribute("counter")) {
            input.maxLength = this.maxLength || 1000;
            input.addEventListener("input", this.counter);

            let counter = document.createElement("div");
            counter.classList.add("counter");
            counter.innerText = `${input.value.length}/${input.maxLength}`;

            this.counterElement = counter;
            fragment.appendChild(counter);
        }

        this.native = native;
        this.labelElement = label;
        this.input = input;

        return fragment;
    }

    /**
     * Sets up the event listeners after the component is drawn.
     */
    afterDraw() {
        this.resizeObserver = new ResizeObserver(() => this.setTextareaHeight);

        if (!this.hasAttribute("disabled")) {
            event.addListener(this, "click", "wje:textarea:change");
            event.addListener(this, "click", "wje:textarea:input");
        }

        this.input.addEventListener("focus", (e) => {
            this.labelElement.classList.add("fade");
            this.native.classList.add("focused");
        });

        this.input.addEventListener("blur", (e) => {
            this.native.classList.remove("focused");
            if (!e.target.value)
                this.labelElement.classList.remove("fade")
        });
    }

    /**
     * Disconnects the component.
     */
    beforeDisconnect() {
        this.resizeObserver.unobserve(this.input);
    }

    /**
     * Sets the height of the textarea.
     */
    setTextareaHeight = () => {
        if (this.getAttribute("resize") === "auto") {
            this.input.style.height = 'auto';
            this.input.style.height = this.input.scrollHeight + "px";
        }
    }

    /**
     * Updates the counter for the textarea.
     *
     * @param {Event} e - The event object.
     */
    counter = (e) => {
        this.counterElement.innerText = e.target.value.length + "/" + this.input.maxLength;
    }
}