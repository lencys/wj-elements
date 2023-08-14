import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

const template = document.createElement('template');

template.innerHTML = `<style>
	${styles}
</style>`;
export class ProgressBar extends WJElement {
    constructor() {
        super(template);

        this.timerInterval = null;
        this.timeLimit = 60;
    }

    set radius(value) {
        this.setAttribute("radius", value);
    }

    get radius() {
        return +this.getAttribute("radius") || 70;
    }

    get diameter() {
        return this.radius * 2 + this.stroke;
    }

    set stroke(value) {
        this.setAttribute("stroke", value);
    }

    get stroke() {
        return +this.getAttribute("stroke") || 12;
    }

    className = "ProgressBar";

    static get observedAttributes() {
        return ["progress"];
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        let xy = (this.radius + this.stroke/2);

        let fragment = document.createDocumentFragment();

        if(params.color)
            this.classList.add("wj-color-" + params.color, "wj-color");

        let element = document.createElement("div");
        element.classList.add("progress");

        let slot = document.createElement("slot");

        let slotWrapper = document.createElement("div");
        slotWrapper.classList.add("slot-wrapper");

        let svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
        svg.setAttribute("width", this.diameter);
        svg.setAttribute("height", this.diameter);
        svg.setAttribute("viewBox", `0 0 ${this.diameter} ${this.diameter}`);
        svg.setAttribute("style", "transform: rotate(-90deg)");
        svg.setAttribute("id", "mask");

        let circleBg = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circleBg.setAttribute("r", this.radius);
        circleBg.setAttribute("cx", xy);
        circleBg.setAttribute("cy", xy);
        circleBg.setAttribute("fill", "transparent");
        circleBg.setAttribute("stroke", "#e0e0e0");
        circleBg.setAttribute("stroke-width", this.stroke + "px");

        let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("r", this.radius);
        circle.setAttribute("cx", xy);
        circle.setAttribute("cy", xy);
        circle.setAttribute("fill", "transparent");
        // circle.setAttribute("stroke", "var(--wj-color-primary)");
        circle.setAttribute("stroke-linecap", "round");
        circle.setAttribute("stroke-width", this.stroke + "px");
        circle.setAttribute("stroke-dasharray", "0");
        circle.setAttribute("stroke-dashoffset", "0");
        circle.setAttribute("id", "bar");

        svg.appendChild(circleBg);
        svg.appendChild(circle);

        slotWrapper.appendChild(slot);

        element.appendChild(slotWrapper);
        element.appendChild(svg);

        fragment.appendChild(element);

        this.circleBg = circleBg;
        this.circle = circle;

        return fragment;
    }

    afterDraw(context, store, params) {
        console.log(params);
        this.circleBg.setAttribute("stroke-dasharray", this.getCircleDashoffset(100) + "px");
        this.circleBg.setAttribute("stroke-dashoffset", "0px");
        this.circle.setAttribute("stroke-dasharray", this.getCircleDasharray(this.radius) + "px");
        this.circle.setAttribute("stroke-dashoffset", this.getCircleDashoffset(params.progress, this.radius) + "px");
        // this.startTimer();
    }

    getCircleDasharray(radius = 70) {
        return 2 * Math.PI * radius;
    }

    getCircleDashoffset(progress = 0, radius) {
        return this.getCircleDasharray(radius) * ((100 - progress)/100);
    }

    startTimer() {
        this.timePassed = 0;
        this.timerInterval = setInterval(() => {
            this.timePassed = this.timePassed += 1;
            console.log(this.timePassed,"/", 360/this.timeLimit, "/", this.timePassed * (360/this.timeLimit));

            // timeLeft = timePassed - actualTime;
            this.innerHTML = this.formatTime(this.timePassed);
            this.setCircleDasharray(this.timePassed * (100/this.timeLimit));
            // this.setRemainingPathColor(this.timePassed);

            if (this.timePassed >= this.timeLimit) {
                this.onTimesUp();
            }
        }, 1000);
    }

    formatTime(time) {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        return `${minutes}:${seconds}`;
    }

    onTimesUp() {
        clearInterval(this.timerInterval);
    }

    calculateTimeFraction() {
        const rawTimeFraction = this.timePassed / this.timeLimit;
        return rawTimeFraction - (1 / this.timePassed) * (1 - rawTimeFraction);
    }

    setCircleDasharray(angle) {
        const FULL_DASH_ARRAY = 283;
        const circleDasharray = `${angle} 20000`;
        console.log(circleDasharray);
        this
          .shadowRoot
          .getElementById("base-timer-path-remaining")
          .setAttribute("stroke-dasharray", circleDasharray);
    }
}

customElements.get("wj-progress-bar") || window.customElements.define("wj-progress-bar", ProgressBar);