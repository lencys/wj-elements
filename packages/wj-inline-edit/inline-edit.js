import { default as WJElement, WjElementUtils } from "/templates/net/assets/js/components/wj-element.js?v=@@version@@";

const template = document.createElement('template');

template.innerHTML = `<style>
	@import "/templates/net/assets/plugins/bootstrap/css/bootstrap.css?v=@@version@@";
	@import "/templates/net/pages/css/themes/net-basic/form_elements.css?v=@@version@@";
	@import "/templates/net/pages/css/themes/net-basic/buttons.css?v=@@version@@";
	@import "/templates/net/assets/plugins/font-awesome/css/fontawesome.css?v=@@version@@";
    @import "/templates/net/assets/plugins/font-awesome/css/light.min.css";
	@import "/templates/net/assets/js/components/wj-inline-edit/css/styles.css?v=@@version@@";
</style>`;

class InlineEdit extends WJElement {
    constructor() {
        super(template);
    }

    get title(){
        return this.getAttribute("title");
    }

    set title(value){
        return this.setAttribute("title", value);
    }

    get notEditable(){
        return this.hasAttribute("not-editable");
    }

    set notEditable(value){
        return this.setAttribute("not-editable", "");
    }

    get endpoint(){
        return this.getAttribute("endpoint");
    }

    set endpoint(value){
        return this.setAttribute("endpoint", value);
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        console.log("Draw", this.notEditable, !this.notEditable)
        let fragment = document.createDocumentFragment();

        // Heading
        this.heading = document.createElement("div");
        this.heading.classList.add("heading");

        // H5
        this.h5 = document.createElement("h5");
        this.h5.innerHTML = this.title;

        this.heading.appendChild(this.h5);

        // Append heading to fragment
        fragment.appendChild(this.heading);

        if(!this.notEditable) {
            console.log("VOJDEM TU")
            // Span
            this.span = document.createElement("span");
            this.span.classList.add("edit", "text-primary");
            this.span.innerHTML = "Upraviť";

            // Form
            this.form = document.createElement("form");
            this.form.classList.add("fade-out");

            // Input
            this.input = this.inputElement();

            // Buttons
            this.buttons = document.createElement("div");
            this.buttons.classList.add("buttons", "btn-group");

            // Button SAVE
            this.buttonSave = document.createElement("button");
            this.buttonSave.classList.add("btn", "btn-primary");
            this.buttonSave.setAttribute("type", "button");
            this.buttonSave.innerHTML = "<i class=\"fa-light fa-check\"></i>";

            // Button CLOSE
            this.buttonClose = document.createElement("button");
            this.buttonClose.classList.add("btn", "btn-default", "btn-close");
            this.buttonClose.setAttribute("type", "button");
            this.buttonClose.innerHTML = "<i class=\"fa-light fa-xmark\"></i>";

            // Append heading to span
            this.heading.appendChild(this.span);

            // Append buttons to div
            this.buttons.appendChild(this.buttonSave);
            this.buttons.appendChild(this.buttonClose);

            // Append input and buttons to form
            this.form.appendChild(this.input);
            this.form.appendChild(this.buttons);

            // Append heading and form to fragment
            fragment.appendChild(this.form);
        }

        return fragment;
    }

    afterDraw(context, store, params) {
        if(!this.notEditable) {
            this.heading.addEventListener("click", (e) => {
                this.form.classList.add("open", "fade-in");

                this.heading.classList.remove('fade-in');
                this.heading.classList.add("fade-out");
            })

            this.buttonClose.addEventListener("click", (e) => {
                e.preventDefault()
                e.stopImmediatePropagation()
                e.stopPropagation();

                this.form.classList.remove("open", "fade-in");

                this.heading.classList.remove("fade-out");
                this.heading.classList.add('fade-in');
            })

            this.buttonSave.addEventListener("click", e => {
                if (this.endpoint === null) {
                    this.dispatchEdit(this.input.value);
                } else {
                    this.save(this.input.value);
                }
            });
        }
    }

    inputElement(){
        let input = document.createElement("input");
        input.type = "text";
        input.placeholder = this.title;
        input.value = this.title;
        input.classList.add("form-control", "input-sm");

        return input;
    }

    save(data){
        return fetch(this.endpoint, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        }).then(res =>{
            if(res.ok){
                return res.json();
            } else {
                return res.text;
            }
        }).then(res =>{
            this.title = res.data
            this.refresh();

            intranet.notification(res);

            this.dispatchResponse(res.data);
        }).catch(res => {
            intranet.notification(res);

            this.dispatchError(res);
        })
    }

    dispatchEdit(value){
        document.dispatchEvent(
            new CustomEvent("wj-inline-edit-save", {
                bubbles: true,
                detail: {
                    value: value,
                    element: this
                }
            })
        );
    }

    dispatchResponse(value){
        document.dispatchEvent(
            new CustomEvent("wj-inline-edit-response", {
                bubbles: true,
                detail: {
                    value: value,
                    element: this
                }
            })
        );
    }

    dispatchError(value){
        document.dispatchEvent(
            new CustomEvent("wj-inline-edit-error", {
                bubbles: true,
                detail: {
                    value: value,
                    element: this
                }
            })
        );
    }
}

window.customElements.define("wj-inline-edit", InlineEdit);