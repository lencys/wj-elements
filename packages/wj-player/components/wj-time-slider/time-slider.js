import { default as WJElement } from "/templates/net/assets/js/components/wj-element.js?v=@@version@@";
import { Service } from "../../Service/Service.js?v=@@version@@";
import "/templates/net/assets/js/components/wj-slider/slider.js?v=@@version@@";

const template = document.createElement('template');

template.innerHTML = `<style>
    @import "/templates/net/assets/js/components/wj-player/components/wj-time-slider/css/styles.css?v=@@version@@";
</style>`;

class TimeSlider extends WJElement {
    constructor() {
        super(template);
    }

    set value(value) {
        this.setAttribute("value", value);
    }

    get value() {
        return this.getAttribute("value");
    }

    draw(context, store, params) {
        let time = this.toHoursAndMinutes(this.value);

        let fragment = document.createDocumentFragment();

        let div = document.createElement("div");
        div.classList.add("d-flex");

        let separator = document.createElement("span");
        separator.innerText = ":";

        let textH = document.createElement("span");
        textH.innerText = "h";

        let textM = document.createElement("span");
        textM.innerText = "m";

        let textS = document.createElement("span");
        textS.innerText = "s";

        let hours = document.createElement("input");
        hours.type = "text";
        hours.value = Service.addZeroBefore(time.h);

        let minutes = document.createElement("input");
        minutes.type = "text";
        minutes.value = Service.addZeroBefore(time.m);

        let seconds = document.createElement("input");
        seconds.type = "text";
        seconds.value = Service.addZeroBefore(time.s);

        let slider = document.createElement("wj-slider");
        slider.type = "range";
        slider.min = this.getAttribute("min");
        slider.max = this.getAttribute("max");
        slider.step = 1;
        slider.setAttribute("bubble", "");
        slider.setAttribute("value", this.value);
        slider.setAttribute("shadow", "open");

        slider.addEventListener("wj-slider-move", (e) => {
            // nastavime cas
            let timeMinusPointTime = this.toHoursAndMinutes(+e.detail.value - +this.getAttribute("min"), true);
            // vypiseme cas do tooltipu
            e.detail.output.innerHTML = timeMinusPointTime.h + ":" + timeMinusPointTime.m + ":" + timeMinusPointTime.s;
            //nastavime cas
            time = this.toHoursAndMinutes(+e.detail.value, true);
            //vlozime do inputov
            hours.value = time.h;
            minutes.value = time.m;
            seconds.value = time.s;
            //zmenime value na elemente
            this.value = e.detail.value;
        });

        slider.addEventListener("wj-slider-init", (e) => {
            time = this.toHoursAndMinutes(+e.detail.value - +this.getAttribute("min"), true);
            e.detail.output.innerHTML = time.h + ":" + time.m + ":" + time.s;
            this.value = e.detail.value;
        });

        div.appendChild(hours);
        div.appendChild(textH);
        div.appendChild(separator);
        div.appendChild(minutes);
        div.appendChild(textM);
        div.appendChild(separator.cloneNode(true));
        div.appendChild(seconds);
        div.appendChild(textS);

        fragment.appendChild(div);
        fragment.appendChild(slider);

        return fragment;
    }

    toHoursAndMinutes(totalSeconds, zero = false) {
        const totalMinutes = Math.floor(totalSeconds / 60);

        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        const seconds = totalSeconds % 60;

        if(zero) {
            return {h: Service.addZeroBefore(hours), m: Service.addZeroBefore(minutes), s: Service.addZeroBefore(seconds)};
        } else {
            return {h: hours, m: minutes, s: seconds};
        }
    }
}

customElements.get("wj-time-slider") ||  window.customElements.define("wj-time-slider", TimeSlider);