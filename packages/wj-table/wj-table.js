import { defaultStoreActions, store } from '/templates/net/assets/js/store/store.js?v=@@version@@';
import { Table } from './service/table.js?v=@@version@@';
import { TabulatorFull } from './plugins/tabulator/js/tabulator_esm.js?v=@@version@@';
import * as luxon from 'https://moment.github.io/luxon/es6/luxon.min.js?v=@@version@@';
import 'https://oss.sheetjs.com/sheetjs/xlsx.full.min.js?v=@@version@@';
import 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js?v=@@version@@';
import 'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.20/jspdf.plugin.autotable.min.js?v=@@version@@';
import '/templates/net/assets/js/components/wj-table/wj-table-search.js?v=@@version@@';
import '/templates/net/assets/js/components/wj-table/wj-table-filter-advanced.js?v=@@version@@';
import '/templates/net/assets/js/components/wj-table/wj-table-filter-simple.js?v=@@version@@';
import '/templates/net/assets/js/components/wj-table/wj-table-options.js?v=@@version@@';
import '/templates/net/assets/plugins/flatpickr/flatpickr.js?v=@@version@@';
import '/templates/net/assets/plugins/flatpickr/l10n/sk.js?v=@@version@@';
import '/templates/net/assets/plugins/flatpickr/plugins/monthSelectPlugin.js?v=@@version@@';

import { default as Popup} from "./components/wj-table-modules/wj-table-modules.js";

intranet.loadCSS('/templates/net/assets/plugins/flatpickr/themes/net-basic.css?v=@@version@@');

const template = document.createElement('template');
template.innerHTML = `<style>
    @import "/templates/net/assets/plugins/bootstrap/css/bootstrap.css?v=@@version@@";
    @import "/templates/net/pages/css/themes/net-basic.css?v=@@version@@";
    @import "/templates/net/assets/js/components/wj-table/plugins/tabulator/css/themes/webjet/tabulator_webjet.css?v=@@version@@";
    @import "/templates/net/assets/plugins/font-awesome/css/fontawesome.css?v=@@version@@";
    @import "/templates/net/assets/plugins/font-awesome/css/light.min.css?v=@@version@@";
    @import "/templates/net/pages/css/themes/net-basic/var.css?v=@@version@@";
    
    .filtered {
        color: black;
        font-weight: bold;
    }
    
    .table {
        width: 100%;
        max-width: 100%;
    }
    
    .controls {
        display: grid;
        grid-template-columns: 1fr auto;
    }
    
    .nav-tabs > li > a {
      min-width: auto;
      
      line-height: 1rem;
    }
    
    .nav-tabs li:first-child a {
        font-size: 1rem;
    }
</style>

<div class="controls">
    <div class="d-flex align-items-center">
        <slot name="filter"></slot>
    </div>
    <div class="d-flex align-items-center ml-3">
        <slot></slot>
    </div>
</div>

<div class="card card-default mb-0" routerlinks>
    <div class="table position-relative"></div>
</div>`;

export default class WjTable extends Table {
    static instances = new Map();

    constructor() {
        super();
        window.luxon = luxon;

        // RHR - zaregistrovanie nášho popup modulu
        TabulatorFull.registerModule(Popup);
    }

    get layout() {
        return this.getAttribute("layout");
    }

    set layout(value) {
        return this.setAttribute("layout", value);
    }

    get infinity() {
        return this.hasAttribute("infinity");
    }

    set infinity(value) {
        return this.setAttribute("infinity", value);
    }

    get filterable() {
        return this.getAttribute("filterable").toUpperCase();
    }

    set filterable(value) {
        return this.setAttribute("filterable", value.toUpperCase());
    }

    get export() {
        if(this.hasAttribute("export"))
            return this.getAttribute("export").split(",");

        return [];
    }

    set export(value) {
        return this.setAttribute("filterable", value);
    }

    static getInstance(instanceId) {
        return WjTable.instances.get(instanceId)
    }

    static addInstance(instanceId, instance) {
        WjTable.instances.set(instanceId, instance);
    }

    static deleteInstance(instanceId) {
        WjTable.instances.delete(instanceId);
    }

    static get observedAttributes() {
        return ['refresh'];
    }

    get bulkCell() {
        return {
            field: "bulk",
            width: 50,
            formatter: "wj-row-selection",
            titleFormatter: "wj-row-selection",
            hozAlign: "center",
            headerSort: false,
            cellClick: this.cellClick,
            resizable: false,
            rowRange : "active"
        };
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.table.replaceData();
    }

    disconnectedCallback() {
        WjTable.deleteInstance(this.tableId);
    }

    async connectedCallback() {
        WjTable.addInstance(this.tableId, this)

        let tabs = await this.createTabs();

        if(tabs)
            this.shadowRoot.insertBefore(tabs, this.shadowRoot.querySelector(".controls"));

        store.define('columnOptions-' + this.tableId, {}, null);
        store.define('filterObj-' + this.tableId, {}, null);

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.tableElement = this.shadowRoot.querySelector(".table");
        this.tableElement.id = this.tableId;

        this.draw();
    }

    draw() {
        this.bulk = this.hasAttribute("bulk");
        this.initialized = false;
        this.resizable = this.getAttribute("resizable");
        this.sortable = this.filterable == 'ADVANCED' || this.hasAttribute("sortable");

        // ADVANCED filter
        this.filterAdvanced();

        // SIMPLE filter
        this.filterSimple();

        // CUSTOM filter
        this.customFilter();

        if(this.sortable && this.filterable != "ADVANCED")
            this.tableElement.setAttribute("sortable", "");

        this.tableElement.classList.add(this.filterable.toLowerCase())

        this.table = new TabulatorFull(this.tableElement, {
            ajaxURL: this.getAttribute("dataUrl"),
            ajaxURLGenerator: this.ajaxURLGenerator,
            ajaxResponse: this.ajaxResponse,
            dataReceiveParams: {
                last_page: "lastPage",
                total_items: "totalItems",
                data: "content",
            },
            layout: this.layout || "fitDataFill",
            tooltips: true,
            history: true,
            clipboard: false,
            clipboardPasteAction: "replace",
            paginationMode: "remote",
            filterMode: "remote",
            sortMode: this.sortable ? "remote" : false,
            locale: "sk-sk",
            movableColumns: true,
            selectable: "highlight",
            progressiveLoad: this.infinity ? "scroll" : false,
            pagination: this.infinity ? false : true,
            progressiveLoadScrollMargin: 30,
            paginationSize: 6,
            paginationSizeSelector: [6, 10, 25, 50, 100, 500],
            paginationCounter: (pageSize, currentRow, currentPage, totalRows, totalPages) => {
                return 'Záznamov ' + totalRows;
            },
            // popupContainer: this,
            resizableColumnFit: false,
            placeholder: "Nie sú k dispozícii žiadne dáta",
            maxHeight: this.getAttribute("max-height") || false,
        });
    }

    async createTabs() {
        let objTabs = await this.service.get(`/private/rest/hub/tabulator/filter/${btoa(this.getAttribute("dataurl"))}`, null, false);

        if(objTabs.length < 1)
            return false;

        let fragment = document.createDocumentFragment();
        let tabs = document.createElement("div");
        tabs.classList.add("tabs");

        let ul = document.createElement("ul");
        ul.classList.add("nav", "nav-tabs", "nav-tabs-simple", "mb-3");

        let li = this.getDOMList();
        let a = this.getDOMAnchor();
        a.innerHTML = '<i class="fa-light fa-house"></i>';
        a.data = {
            filter: Table.btoa_utf8(JSON.stringify([]))
        };
        a.addEventListener("click", this.eventClickTab);

        li.appendChild(a);
        ul.appendChild(li);

        objTabs.forEach((t) => {
            let li = this.getDOMList();
            let a = this.getDOMAnchor();
            a.innerText = t.tab;
            a.data = t;
            a.addEventListener("click", this.eventClickTab);

            li.appendChild(a);
            ul.appendChild(li)
        });

        tabs.appendChild(ul);
        fragment.appendChild(tabs);

        return fragment;
    }

    getDOMList() {
        let li = document.createElement("li");
        li.classList.add("nav-item");

        return li;
    }

    getDOMAnchor() {
        let a = document.createElement("a");
        a.classList.add("nav-tabs-primary");
        a.setAttribute("href", "javascript:void(0);");
        a.dataset.toggle = "tab";

        return a;
    }

    getAllTabs() {
        this.service.get(`/private/rest/hub/tabulator/filter/${encodeURI(this.getAttribute("dataurl"))}`)
    }

    eventClickTab = (e) => {
        let filterArray = []
        if(e.target.tagName == "A")
            filterArray = JSON.parse(Table.atob_utf8(e.target.data.filter))



        store.dispatch(defaultStoreActions.addAction("filterObj-" + this.tableId)({
            "filter": filterArray,
            "table": this.tableId
        }));
    }

    ajaxURLGenerator = (url, config, params) => {
        let filter = '';
        let sort = '';

        if (params.filter.length == 0 && params?.sort?.length == 0) {
            return `${url}?page=${params.page - 1}&size=${params.size}&initialized=${this.initialized}&filterable=${
                this.filterable
            }&sortable=${this.sortable}&resizable=${this.resizable}`;
        }

        // kontrola existencie SORT param
        if (params?.sort?.length > 0) {
            let sortParams = this.columns.filter((f) => f.field == params?.sort[0].field)[0];

            sort = `&sort=${sortParams.sortField},${params?.sort[0].dir}`;
        }

        // kontrola existencie FILTER param
        if (params?.filter?.length > 0) {
            filter = `&tabfilter=${btoa(JSON.stringify(params.filter))}`;

            if (this.filterable.toUpperCase() == 'SIMPLE') {
                filter = '&tabfilter=' + params.filter[0].value;
            }

            if (this.filterable.toUpperCase() == 'CUSTOM') {
                filter = '&' + params.filter[0].value;
            }
        }

        return `${url}?page=${params.page - 1}&size=${params.size}&initialized=${this.initialized}&filterable=${this.filterable}&sortable=${this.sortable}&resizable=${this.resizable}${sort}${filter}`;
    }

    ajaxResponse = (url, params, response) => {
        if (!this.initialized) {
            let columns = response.columns;

            if (this.filterable.toUpperCase() == 'ADVANCED') {
                columns = response.columns.map((c) => {
                    return { ...c, ...{headerFilterFunc: () => {}}};
                });
            }
            // vlozime zatial takto bulk-y
            if (this.bulk) columns.splice(1, 0, this.bulkCell);

            store.dispatch(
                defaultStoreActions.updateAction('columnOptions-' + this.tableId)(response.columnOptions)
            );

            columns = columns.map((c) => {
                c = { ...c, accessorDownload: this.myPrintFormatter };
                if (c.filterable && this.filterable.toUpperCase() == 'ADVANCED')
                    return { ...c, headerPopup: this.headerPopupFormatter };

                return c;
            });

            if(this.filterable == "SIMPLE" || this.filterable == "ADVANCED") {
                this.append(this.getOptionsElement());
            }

            this.table.setColumns(columns);
            this.initialized = true;

            // ulozime si columns ktory prisiel zo servera
            this.columns = response.columns;
        }

        return response;
    }


    headerPopupFormatter = (e, column, onRendered, a) => {
        e.stopPropagation();

        let container = document.createElement('div');

        // SEARCH
        container.appendChild(this.filter(column));

        // SORT
        container.appendChild(this.sort(column));

        return container;
    }

    getOptionsElement() {
        let options = document.createElement("wj-table-options");
        options.setAttribute("shadow", "open");
        options.table = this.table;
        options.data = this.export.map(e => this.exportType().filter(ex => ex.type == e)[0]);

        return options;
    }

    filter(column) {
        let params = this.columns.filter((f) => f.field == column.getField())[0];

        let search = document.createElement('wj-table-search-element');
        search.setAttribute('type', params?.headerFilterFuncParams?.type);
        search.setAttribute('title', params?.title);
        search.setAttribute('field', params?.filterField);
        search.column = column;

        let wrapperSearch = document.createElement('div');
        wrapperSearch.classList.add('wrapper-filter');
        wrapperSearch.appendChild(search);

        return wrapperSearch;
    }

    sort(column) {
        let fragment = new DocumentFragment();
        let params = this.columns.filter((f) => f.field == column.getField())[0];

        // let sort = document.createElement('div');
        // sort.classList.add('wrapper-sort');

        let title = document.createElement('div');
        title.classList.add('dropdown-title');
        title.innerText = 'Zoradiť položky';

        let asc = document.createElement('div');
        asc.classList.add('wj-dropdown-item');
        asc.innerHTML = '<i class="fa-solid fa-arrow-down-short-wide menu-icon"></i> Zostupne';
        asc.addEventListener('click', (e) => {
            this.table.setSort([{ column: params?.sortField, dir: 'asc' }]);
        });

        let desc = document.createElement('div');
        desc.classList.add('wj-dropdown-item');
        desc.innerHTML = '<i class="fa-solid fa-arrow-up-wide-short menu-icon"></i> Vzostupne';
        desc.addEventListener('click', (e) => {
            this.table.setSort([{ column: params?.sortField, dir: 'desc' }]);
        });
        fragment.appendChild(title);
        fragment.appendChild(asc);
        fragment.appendChild(desc);

        return fragment;
    }

    // ADVANCED filter
    filterAdvanced() {
        if (this.filterable.toUpperCase() == 'ADVANCED') {
            let filter = document.createElement('wj-table-filter-advanced');
            filter.setAttribute("slot", "filter");
            filter.setAttribute('hidden', '');
            filter.classList.add("mb-3");
            filter.id = this.tableId;
            this.appendChild(filter);
        }
    }

    // Simple filter
    filterSimple() {
        if (this.filterable.toUpperCase() == 'SIMPLE') {
            let filter = document.createElement("wj-table-filter-simple");
            filter.setAttribute("slot", "filter");
            filter.setAttribute("shadow", "open");
            filter.classList.add("mb-3");
            filter.tableId = this.tableId;

            this.append(filter);
        }
    }

    customFilter() {
        if (this.filterable.toUpperCase() == 'CUSTOM') {
            this.shadowRoot.querySelector('slot[name="filter"]')?.assignedElements?.().forEach((el) => {
                el.id = this.tableId;
            });
        }
    }

    getInstanceTabulator = () => {
        return this.table;
    }

    cellClick = (e, cell) => {
        cell.getRow().toggleSelect();
    }

    myPrintFormatter = (value, data, type, params, column) => {
        let definition = column.getDefinition();
        let printField = definition.formatterParams?.printField;

        if(definition.field == "_actions_" || definition.field == "bulk" || !value)
            return "";

        if(definition.formatter == "wj-date")
            return this.date(value);

        if(definition.formatter == "wj-datetime")
            return this.datetime(value);

        if(printField)
            return value[printField];

        return value;
    }

    exportType = () => {
        return [{
            "title": "Stiahnuť Excel",
            "type": "xlsx",
            "filename": "data.xlsx",
            "icon": "<i class=\"fa-light fa-file-excel\"></i>"
        }, {
            "title": "Stiahnuť PDF",
            "type": "pdf",
            "filename": "data.pdf",
            "icon": "<i class=\"fa-light fa-file-pdf\"></i>"
        }, {
            "title": "Stiahnuť CSV",
            "type": "csv",
            "filename": "data.csv",
            "icon": "<i class=\"fa-light fa-file-csv\"></i>"
        }]
    }
}

let __esModule = 'true';
export {__esModule};

customElements.get("wj-table") || customElements.define("wj-table", WjTable);
