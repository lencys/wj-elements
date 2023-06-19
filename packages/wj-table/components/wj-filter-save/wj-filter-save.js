import { default as WJElement} from "/templates/net/assets/js/components/wj-element.js?v=@@version@@";
import { Table } from '../../service/table.js?v=@@version@@';
import "/templates/net/assets/js/components/wj-table/wj-table.js?v=@@version@@";

const template = document.createElement("template");
template.innerHTML = `
<style>
    @import "/templates/net/assets/plugins/bootstrap/css/bootstrap.css?v=@@version@@";
    @import "/templates/net/pages/css/themes/net-basic.css?v=@@version@@";
    /*@import "/templates/net/pages/css/themes/net-basic/var.css?v=@@version@@";*/
    @import "/templates/net/assets/plugins/font-awesome/css/fontawesome.css?v=@@version@@";
    @import "/templates/net/assets/plugins/font-awesome/css/light.min.css?v=@@version@@";
    @import "/templates/net/assets/js/components/wj-table/components/wj-filter-save/css/styles.css?v=@@version@@";
</style>`;

export default class FilterSave extends WJElement {
    constructor() {
        super(template);
    }

    static get observedAttributes(){
        return ['title','url'];
    }

    get title(){
        return this.getAttribute('title')
    }

    set title(title){
        return this.setAttribute('title', title)
    }

    get endpoint(){
        return this.getAttribute("endpoint")
    }

    set endpoint(endpoint){
        return this.setAttribute("endpoint", endpoint)
    }

    get url(){
        return this.getAttribute('url')
    }

    set url(url){
        return this.setAttribute('url', url)
    }

    get value(){
        return this.context.querySelector('[type="text"]').value
    }

    draw(context, store, params) {
        let element = document.createElement('template');
        element.innerHTML = `<div class="heading">
            <button class="btn btn-success btn-sm">${this.title}</button>
        </div>

        <form class="input">
            <div class="input-group">
                <div class="form-input-group">
                    <input type="text" placeholder="Názov filtra" class="form-control" maxlength="24" />
                </div>
                <div class="input-group-append buttons">
                    <button class="btn btn-success btn-save" role="button" type="button"><i class="fa-light fa-plus"></i></button>
                </div>
            </div>
        </form>`;
        return element.content.cloneNode(true);
    }

    afterDraw(context) {
        this.form = context.querySelector("form");
        this.heading = context.querySelector(".heading");
        this.btnSave = context.querySelector(".btn-save");

        context.querySelector(".heading").addEventListener('click', (e) => {
            e.preventDefault()
            e.stopImmediatePropagation()
            e.stopPropagation();

            this.form.classList.add("open");
            this.form.classList.add("fade-in");

            this.heading.classList.remove('fade-in');
            this.heading.classList.add("fade-out");
        });

        this.btnSave.addEventListener('click', e =>{
            console.log("SAVE")
            this.save({
                filter: Table.btoa_utf8(JSON.stringify([])),
                url: this.table.options.ajaxURL,
                sort: "",
                tab: context.querySelector('[type="text"]').value
            });
        });
    }

    save(data){
        return fetch(this.endpoint, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res =>{
            if(res.ok){
                return res.json();
            } else {
                return res.text;
            }
        }).then(res =>{
            this.title = res.tab
            this.refresh()

            $('body').pgNotification({
                message: res.message,
                timeout: 4000,
                type: 'success'
            }).show();

            this.dispatchEvent(new CustomEvent('saved-data-response', {
                bubbles:true,
                detail: res
            }))
        }).catch(reason => {
            $('body').pgNotification({
                message: reason,
                timeout: 4000,
                type: 'danger'
            }).show();

            this.dispatchEvent(new CustomEvent('saved-data-error-response', {
                bubbles:true,
                detail: reason
            }))
        })
    }
}

let __esModule = 'true';
export {__esModule};

customElements.get("wj-filter-save") || customElements.define("wj-filter-save", FilterSave);