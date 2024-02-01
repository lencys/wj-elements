import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";
import { fetchAndParseCSS } from "../utils/animations.js";

import styles from "../wj-avatar/scss/styles.scss?inline";

export class Animation extends WJElement {
    constructor() {
        super();
    }

    className = "Animation";

    static get cssStyleSheet() {
        return styles;
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let slot = document.createElement("slot");

        fragment.appendChild(slot);

        this.slotEl = slot;

        return fragment;
    }

    async afterDraw() {

        const cssUrl = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';

        this.animations = await fetchAndParseCSS(cssUrl);
        const selected = this.animations.find(k => k.name === this.name);

        const element = this.slotEl.assignedElements()[0];

        this.animation = element.animate(selected.keyframes , {
            delay: +this.delay || 0, // zdrzanie pred zacatim animacie
            endDelay: +this.endDelay || 0, // zdrzanie po skoncení animacie
            fill: this.fill || 'auto', // vyplnenie animace (pred a po animacii)
            duration: +this.duration || 1000, // doba trvania animacie v milisekundách
            iterationStart: +this.iterationStart || 0, // počet opakování animacie
            iterations: this.iterations || Infinity, // počet opakování animacie
            direction: this.direction || 'normal', // smer animaciee (zpat a dopredu)
            easing: this.easing || 'linear' // typ spomalenia (rychlost zmen v čase)
        });

        this.animation.play();
    }


}

customElements.get("wj-animation") || window.customElements.define("wj-animation", Animation);