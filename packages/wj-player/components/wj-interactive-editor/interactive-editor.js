import { default as WJElement, WjElementUtils } from "/templates/net/assets/js/components/wj-element.js?v=@@version@@";
// import { this.playerService } from "../../this.playerService/this.playerService.js?v=@@version@@";
import "../wj-time-slider/time-slider.js?v=@@version@@";

const template = document.createElement('template');

template.innerHTML = `<style>
	@import "/templates/net/assets/plugins/bootstrap/css/bootstrap.css?v=@@version@@";
	@import "/templates/net/pages/css/themes/net-basic/typography.css?v=@@version@@";
	@import "/templates/net/pages/css/themes/net-basic/buttons.css?v=@@version@@";
	@import "/templates/net/pages/css/themes/net-basic/checkbox.css?v=@@version@@";
	@import "/templates/net/pages/css/themes/net-basic/form_elements.css?v=@@version@@";
	@import "/templates/net/assets/plugins/font-awesome/css/fontawesome.css?v=@@version@@";
    @import "/templates/net/assets/plugins/font-awesome/css/light.min.css?v=@@version@@";
	@import "/templates/net/assets/js/components/wj-player/components/wj-interactive-editor/css/styles.css?v=@@version@@";
</style>`;

class Editor extends WJElement{
    constructor() {
        super(template);
    }

    static get observedAttributes(){
        return ["item-id"];
    }

    beforeDraw(context, store, params) {
        if(this.params.itemId) {
            this.video = this.store.getState().video.textJson;
        }
    }

    draw(context, store, params) {
        if(!this.params.itemId)
            return;

        let item = this.playerService.findItemById(this.params.itemId);//this.video.items.find(item => item?.id === +this.params.itemId);

        /* HEADER */

        let circle = document.createElement("div");
        circle.classList.add("item");
        circle.setAttribute("order", item.order);

        let headline = document.createElement("h5");
        headline.innerText = "Bod prerušenia";

        let header = document.createElement("div");
        header.classList.add("header");

        header.appendChild(circle);
        header.appendChild(headline)

        /* CONTENT */

        let scrollable = document.createElement("scrollable-component");
        scrollable.innerHTML = this.getHtml(item, document.querySelector("wj-player").media.duration);

        // ak je Povinne dokonci aktivuje sa Zastavenie videa
        scrollable.querySelector("#check-required").addEventListener("change", (e) => {
            if(e.target.checked)
                scrollable.querySelector("#check-pause").checked = true;
        });

        scrollable.querySelector("#check-pause").addEventListener("change", (e) => {
            if(!e.target.checked)
                scrollable.querySelector("#check-required").checked = false;
        });

        /* FOOTER */

        let submit = document.createElement("button");
        submit.classList.add("btn", "btn-primary", "mr-3");
        submit.innerText = "Odoslať";
        submit.addEventListener("click", (e) => {
            item.pause = this.shadowRoot.querySelector("#check-pause").checked;
            item.required = this.shadowRoot.querySelector("#check-required").checked;
            item.content.text = this.shadowRoot.querySelector(".contenteditable").innerText;
            item.delay = (this.shadowRoot.querySelector("wj-time-slider").value * 1000) - item.pointTime;
            item.title = this.shadowRoot.querySelector("h5").innerText;

            this.playerService.put(item).then((res) => {
                this.playerService.updateItem(res.data);
                this.playerService.drawPoints();

                intranet.notification(res);

                this.close();
            });
        });

        let cancel = document.createElement("button");
        cancel.classList.add("btn", "btn-link");
        cancel.innerText = "Zrušiť";
        cancel.addEventListener("click", (e) => {
            this.close();
        })

        let footer = document.createElement("div");
        footer.classList.add("footer");

        footer.appendChild(submit);
        footer.appendChild(cancel);

        /* INTERACTIVE EDITOR */

        let interactiveEditor = document.createElement("div");
        interactiveEditor.classList.add("interactive-editor");

        interactiveEditor.appendChild(header);
        interactiveEditor.appendChild(scrollable);
        interactiveEditor.appendChild(footer);

        return interactiveEditor;
    }

    getHtml(item, duration) {
        let { content, required, order, pause, delay, pointTime } = item;
        duration = Math.round(duration);

        return `<div class="interactive-wrapper">
            <div class="contenteditable form-group" contenteditable="true" data-placeholder="Sem začnnite písať ...">
                ${content.text}
            </div>
            <hr class="my-3">
            <div class="form-check primary mb-0">
                <input type="checkbox" id="check-required" ${required ? "checked" : ""}>
                <label for="check-required">Povinné dokončiť</label>
            </div>
            <div class="form-check primary mb-0">
                <input type="checkbox" id="check-pause" ${pause ? "checked" : ""}>
                <label for="check-pause">Zastaviť video pri zobrazení</label>
            </div>
            
            <wj-time-slider value="${(delay+pointTime)/1000}" min="${pointTime/1000}" max="${duration}" shadow="open"></wj-time-slider>
        </div>`;
    }

    put(item) {
        return this.service.put(`/private/rest/lms/course/content/526/video/item/save/${item.id}`, item, null, false);
    }

    close() {
        this.classList.remove("fade-in");
    }
}

customElements.get("wj-player-editor") ||  window.customElements.define("wj-player-editor", Editor);