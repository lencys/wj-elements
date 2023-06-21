import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";
import styles from "./scss/styles.scss?inline";

const template = document.createElement('template');

template.innerHTML = `<style>
	${styles}
</style>`;

export class Slider extends WJElement {
    constructor() {
        super(template)
    }

    set value(value) {
        this.setAttribute("value", value);

        if(this.input) {
            this.input.value = value;
            this.setHandlePosition();
        }
    }

    get value() {
        return this.getAttribute("value") || 0;
    }

    set min(value) {
        this.setAttribute("min", value);
    }

    get min() {
        return this.getAttribute("min") || 0;
    }

    set max(value) {
        this.setAttribute("max", value);
    }

    get max() {
        return this.getAttribute("max") || 100;
    }

    static get observedAttributes(){
        return ["max"];
    }

    draw() {
        let fragment = document.createDocumentFragment();

        let output = document.createElement("output");
        output.setAttribute("for", "slider");
        output.id = "output";
        output.setAttribute("hidden", "");

        let input = document.createElement("input");
        input.type = "range";
        input.min = this.min;
        input.max = this.max;
        input.step = this.step || 1;
        input.value = this.value;
        input.id = "slider";
        input.name = "slider";
        input.part = "slider";
        input.setAttribute("autocomplete", "off");
        input.setAttribute("color", this.color || "primary");
        input.addEventListener("input", (e) => {
            this.setHandlePosition(e.target);
        });

        fragment.appendChild(input);

        if(this.hasAttribute("bubble")) {
            fragment.appendChild(output);
        }

        this.input = input;
        this.output = output;

        return fragment;
    }

    afterDraw() {
        this.setHandlePosition();

        if(this.hasAttribute("bubble")) {
            this.output.innerHTML = this.input.value;
            this.output.removeAttribute("hidden");

            setTimeout(this.setBubble, 50);
        }

        this.dispatchInit(this.input.value);

        this.input.addEventListener("input", (e) => {
            this.value = e.target.value;
            this.dispatchMove(this.value);
            if(this.hasAttribute("bubble")) {
                this.setBubble();
            }
        });

        this.input.addEventListener("change", (e) => {
            this.dispatchChange(e.target.value);
        });
    }

    dispatchInit(value) {
        this.dispatchEvent(
            new CustomEvent("wj-slider-init", {
                bubbles: true,
                detail: {
                    value: value,
                    output: this.output
                },
            })
        );
    }

    dispatchMove(value) {
        this.dispatchEvent(
            new CustomEvent("wj-slider-move", {
                bubbles: true,
                detail: {
                    value: value,
                    output: this.output
                },
            })
        );
    }

    dispatchChange(value) {
        this.dispatchEvent(
            new CustomEvent("wj-slider-change", {
                bubbles: true,
                detail: {
                    value: value,
                    output: this.output
                },
            })
        );
    }

    setHandlePosition = () => {
        // console.log(this.input);
        this.input.style.backgroundSize = this.getPercentage(this.input.value, this.input.min, this.input.max) + '% 100%';
    }

    setBubble = () => {
        let newValue = this.getPercentage(this.input.value, this.input.min, this.input.max);

        this.output.style.left = `calc(${newValue}% + (${8 - newValue * 0.15}px) - ${this.output.offsetWidth/2}px)`;
    }

    getPercentage(value = 0, min, max) {
        console.log(value, min, max)
        return Number((value - min) * 100 / (max - min)) || 0;
    }
}

customElements.get("wj-slider") || customElements.define("wj-slider", Slider);