import { default as WJElement } from "/templates/net/assets/js/components/wj-element.js?v=@@version@@";

const template = document.createElement('template');

template.innerHTML = `<style>
    @import "/templates/net/assets/js/components/wj-player/components/wj-item/css/styles.css?v=@@version@@";
</style>`;

class Item extends WJElement {
    constructor() {
        super(template);
    }

    static get observedAttributes() {
        return ["open"];
    }

    beforeDraw(context, store, params) {
        this.hasEdit = this.hasAttribute("edit");
        this.hasOpen = this.hasAttribute("open");

        // this.open
        // this.open = document.createElement("button");
        // open.classList.add("open");
        //
        // this.appendChild(open);

        if(this.querySelectorAll("button").length == 0) {
            let open = document.createElement("button");
            open.classList.add("open");
            this.appendChild(open);
        }


        if(this.hasEdit) {
            this.draggable = true;
            // set custom event for EDIT
            this.addEventListener("click", () => {
                this.dispatchEvent(
                    new CustomEvent("edititem", {
                        bubbles: true,
                        detail: {
                            itemId: this.data.id,
                            data: this.data,
                            item: this
                        },
                    })
                );
            });

            let remove = document.createElement("button");
            remove.classList.add("remove");
            remove.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.dispatchEvent(
                    new CustomEvent("removeitem", {
                        bubbles: true,
                        detail: {
                            itemId: this.data.id,
                            data: this.data,
                            item: this
                        },
                    })
                );
            });

            this.shadowRoot.appendChild(remove);
        } else {
            // set custom event for SHOW
            this.addEventListener("click", () => {
                this.dispatchEvent(
                    new CustomEvent("showitem", {
                        bubbles: true,
                        detail: {
                            itemId: this.data.id,
                            data: this.data,
                            item: this
                        },
                    })
                );
            });
        }
    }

    draw(context, store, params) {
        // ak nie je item editovatelny tak to ukoncime
        if(this.hasEdit)
            return;

        let typeText = "Nepovinné";
        if(this.data.required)
            typeText = "Povinné dokončiť";

        let ic = document.createElement("div");
        ic.classList.add("ic");

        let wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");

        let header = document.createElement("div");
        header.classList.add("header");
        header.innerHTML = `<div class="hint-text">${typeText}</div><h5>${this.data.title}</h5>`;

        let content = document.createElement("div");
        content.classList.add("content");
        content.innerHTML = this.data.content.text;

        let button = document.createElement("button");
        button.classList.add("btn","btn-primary","btn-sm");
        button.innerText = "Hotovo!";
        button.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.dispatchEvent(
                new CustomEvent("playitem", {
                    bubbles: true,
                    detail: {
                        itemId: this.data.id,
                        data: this.data,
                        item: this
                    },
                })
            );
        });

        let footer = document.createElement("div");
        footer.classList.add("footer");
        footer.appendChild(button);

        wrapper.appendChild(header);
        wrapper.appendChild(content);
        wrapper.appendChild(footer);

        ic.appendChild(wrapper);

        this.ic = ic;
        return ic;
    }

    afterDraw(context, store, params) {
        let maxHeight = this.closest("#items-area").clientHeight;
        this.style.left = this.data.axisX + "%";
        this.style.top = this.data.axisY + "%";

        if(!this.hasEdit) {
            if(this.hasOpen) {
                this.ic.removeAttribute("hidden");
                let position = this.setItemsContentPosition();

                this.ic.style.left = `${position.left}px`;
                this.ic.style.top = `${position.top}px`;
            } else {
                this.ic.setAttribute("hidden", "");
            }
            this.ic.style.maxHeight = `${maxHeight}px`;
        }
    }

    setItemsContentPosition() {
        let contentWidth = 268;
        let gap = 16;
        let dropAreaRect = this.closest("#items-area").getBoundingClientRect();
        let itemRect = this.getBoundingClientRect();
        let contentRect = this.ic.getBoundingClientRect();
        let difItemTop =  itemRect.top - dropAreaRect.top; // vrch itemu od drop area
        let difItemLeft =  itemRect.left - dropAreaRect.left ; // left itemu od drop area

        let cTop =  0; // top content-u
        let cLeft = itemRect.width + gap; // left content-u

        // kontrola left
        if((difItemLeft + itemRect.width + contentWidth + gap) > dropAreaRect.width - gap) {
            cLeft = -contentWidth - gap;
        }

        if((dropAreaRect.height - difItemTop) < contentRect.height) {
            cTop = (dropAreaRect.height - difItemTop) - contentRect.height - gap;
        } else {
            if(difItemTop < gap)
                cTop = -difItemTop + gap
        }

        return {top: cTop, left: cLeft }
    }
}

customElements.get("wj-item") ||  window.customElements.define("wj-item", Item);