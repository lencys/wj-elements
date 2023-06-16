import { service } from "../service/service.js?v=@@version@@";

const template = document.createElement("template");
template.innerHTML = `<style>
	@import "/templates/net/assets/js/components/wj-player/css/styles.css?v=@@version@@";
</style>
<div class="content-wrapper">
Tralala TEXT
</div>`;

class Text extends HTMLElement{
	constructor() {
		super();

		this.attachShadow({ mode: "open"});
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}

    static get observedAttributes(){
        return ["edit"];
    }

	connectedCallback() {
        this.init();
	}

    attributeChangedCallback(name, oldValue, newValue) {
        if(name == "edit")
            this.edit();
    }

    init() {
        let item = service.findItemById(this.id);
        this.shadowRoot.querySelector(".content-wrapper").innerHTML = item.content.text;
    }

    edit() {
        this.shadowRoot.querySelector(".content-wrapper").setAttribute("contenteditable", true);
    }
}

window.customElements.define("data-text", Text);