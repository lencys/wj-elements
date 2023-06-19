import { default as WJElement } from "/templates/net/assets/js/components/wj-element.js";
import "/templates/net/assets/js/components/hub-dropdown.js?v=@@version@@";
import "./components/wj-filter-save/wj-filter-save.js?v=@@version@@";

const template = document.createElement("template");
template.innerHTML = `<style>
    @import "/templates/net/pages/css/themes/net-basic/buttons.css?v=@@version@@";
    @import "/templates/net/pages/css/themes/net-basic/form_elements.css?v=@@version@@";
    @import "/templates/net/pages/css/themes/net-basic/checkbox.css?v=@@version@@";
    @import "/templates/net/assets/plugins/font-awesome/css/fontawesome.css?v=@@version@@";
    @import "/templates/net/assets/plugins/font-awesome/css/light.min.css";
    
    :host {
        margin: 0 0 1rem auto;
        min-height: 28px;
        display: flex;
        align-items: center;
    }
    
    :host hub-dropdown {
        margin-left: 1rem;
    }
</style>`;

export default class TableOptions extends WJElement {
    constructor() {
        super(template);
    }

    draw(context, store, params) {
        let fragment = new DocumentFragment();

        fragment.appendChild(this.editableText());
        fragment.appendChild(this.btnVisibility());
        fragment.appendChild(this.btnExport());

        return fragment;
    }

    editableText() {
        let editableText = document.createElement("wj-filter-save");
        editableText.setAttribute("shadow", "open");
        editableText.setAttribute("endpoint", "/private/rest/hub/tabulator/filter");
        editableText.setAttribute("title", "Uložiť filter");
        editableText.table = this.table;

        return editableText;
    }

    btnVisibility() {
        let slot = document.createElement("span");
        slot.setAttribute("slot", "button");
        slot.innerHTML = '<i class="fa-light fa-gear"></i>';

        let visibility = document.createElement("hub-dropdown");
        visibility.setAttribute("slot-button", "true");
        visibility.setAttribute("position", "bottom-left");
        visibility.appendChild(slot);
        visibility.classList.add("mr-3", 'd-inline-block');
        // visibility.style.display = 'inline-block';
        visibility.appendChild(this.visibility(this.table.getColumns()));

        return visibility;
    }

    visibility(columns) {
        let visibility = document.createElement('div');
        visibility.classList.add('wrapper-visibility');

        for (let column of columns) {
            if (column.getDefinition().title != undefined) {
                let input = document.createElement('input');
                input.setAttribute('type', 'checkbox');
                input.id = 'checkbox-' + column.getDefinition().field;
                input.checked = column.isVisible();
                input.addEventListener('click', (e) => {
                    column.toggle();

                    if (column.isVisible()) {
                        this.checked = true;
                    } else {
                        this.checked = false;
                    }
                });
                let wrapper = document.createElement("div");
                wrapper.classList.add("form-check");

                let label = document.createElement('label');
                label.classList.add('m-0');
                label.textContent = column.getDefinition().title;
                label.setAttribute('for', 'checkbox-' + column.getDefinition().field);

                wrapper.appendChild(input);
                wrapper.appendChild(label);

                visibility.appendChild(wrapper);
            }
        }

        return visibility;
    }

    btnExport() {
        let slot = document.createElement("span");
        slot.setAttribute("slot", "button");
        slot.innerHTML = '<i class="fa-light fa-arrow-down-to-line"></i>';

        let visibility = document.createElement("hub-dropdown");
        visibility.setAttribute("slot-button", "true");
        visibility.setAttribute("position", "bottom-left");
        visibility.classList.add('d-inline-block');

        visibility.appendChild(slot);

        this.data.forEach(button => {
            visibility.appendChild(this.export(button));
        });

        return visibility;
    }

    export(button) {
        let item = document.createElement("div");
        item.classList.add("wj-dropdown-item");
        item.innerHTML = button.icon + button.title;
        item.addEventListener("click", (e) => {
            this.table.download(button.type, button.filename)
        });

        return item;
    }
}

let __esModule = "true";
export {__esModule};

customElements.get("wj-table-options") || customElements.define("wj-table-options", TableOptions);
