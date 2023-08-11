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

    className = "ProgressBar";

    static get observedAttributes() {
        return [];
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let element = document.createElement("slot");

        if(params.color)
            this.classList.add("wj-color-" + this.color, "wj-color");

        let div = document.createElement("div");
        div.classList.add("base-timer");
        div.innerHTML = `<svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g class="base-timer__circle">
              <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
              <path
                id="base-timer-path-remaining"
                stroke-dasharray="0"
                class="base-timer__path-remaining red"
                d="
                  M 50, 50
                  m -45, 0
                  a 45,45 0 1,0 90,0
                  a 45,45 0 1,0 -90,0
                "
              ></path>
            </g>
          </svg>`;
        this.shadowRoot.appendChild(div);
        // <span id="base-timer-label" class="base-timer__label">${this.formatTime(timeLeft)}</span>

        fragment.appendChild(element);

        return fragment;
    }

    afterDraw() {
        this.startTimer();
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