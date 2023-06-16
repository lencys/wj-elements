import { default as WJElement, WjElementUtils } from "/templates/net/assets/js/components/wj-element.js?v=@@version@@";

const template = document.createElement('template');

template.innerHTML = `<style>
	@import "/templates/net/assets/js/components/wj-example-element/css/styles.css?v=@@version@@";
</style>`;

class ExampleElement extends WJElement{s
    constructor() {
        super(template);
    }

    static get observedAttributes() {
        return [];
    }

    setupAttributes() {
        this.isShadowRoot = "open";
        // or
        WjElementUtils.setAttributesToElement(this, {
            "test": "test"
        });
    }

    beforeDraw(context, store, params) {
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let element = document.createElement("div");
        element.innerHTML = "Hello World";

        fragment.appendChild(element);

        return fragment;
    }

    afterDraw(context, store, params) {
        console.log("afterDraw", this.params);
    }
}

window.customElements.define("wj-example-element", ExampleElement);