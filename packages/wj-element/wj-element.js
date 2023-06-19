import { UniversalService } from './service/universal-service.js?v=@@version@@';
import { defaultStoreActions, store } from '../store/store.js?v=@@version@@';
import { WjPermissionsApi } from '../utils/wj-permissions-api.js?v=@@version@@';
import { WjElementUtils } from '../utils/wj-element-utils.js?v=@@version@@';

const template = document.createElement('template');
template.innerHTML = ``;

export default class WJElement extends HTMLElement {
    static processTemplates = (pTemplate, template) => {
        const newTemplate = document.createElement('template');
        newTemplate.innerHTML = [template.innerHTML, pTemplate?.innerHTML || ''].join('');
        return newTemplate;
    };

    constructor(componentTemplate) {
        super();

        this.template = componentTemplate || template;

        // TODO RHR- zatial nevyužívané
        this._attributes = {};
        this.isAttached = false;
        this.service = new UniversalService({
            store: store,
        });

        this.rendering = false;

        this.runtimeTimeout = null;
        this.generatedTooltips = [];
        this.count = 0;

        this.functionStack = [];


        this.scheludedRefresh = false;
    }

    get permission() {
        return this.getAttribute('permission-check');
    }

    get isPermissionCheck() {
        return this.hasAttribute('permission-check');
    }

    set isPermissionCheck(shadow) {
        return this.setAttribute('permission-check', 'permission-check');
    }

    get isShow() {
        return this.hasAttribute('show');
    }

    get isShadowRoot() {
        return this.hasAttribute('shadow');
    }

    set isShadowRoot(shadow) {
        return this.setAttribute('shadow', shadow);
    }

    get shadowType() {
        return this.getAttribute('shadow') || 'open';
    }

    get context() {
        if (this.isShadowRoot) {
            return this.shadowRoot;
        } else {
            return this;
        }
    }

    get store() {
        return store;
    }

    get defaultStoreActions() {
        return defaultStoreActions;
    }

    get removeClassAfterConnect() {
        return this.getAttribute('remove-class-after-connect')?.split(' ');
    }

    beforeDraw() {}

    afterDraw() {}

    makeRuntimeTimeout(callback = () => {}) {
        return setTimeout(() => {
            callback();
        }, 0);
    }

    refreshUpdatePromise() {
        this.updateComplete = new Promise((resolve, reject) => {
            this.finisPromise = resolve;
            this.rejectPromise = reject;
        });
    }

    async connectedCallback() {

        // RHR toto sa tiež týka slick routeru pretože on začal routovanie ešte pred vykreslením wjelementu
        this.finisPromise = (resolve) => {
            resolve();
        };
        this.rejectPromise = (reject) => {
            reject();
        };
        this.refreshUpdatePromise();


        await this.initWjElement(true);
        // TODO experiment�lne posielanie funkcii cez custom attributy
        // Object.defineProperty(this._attributes, sanitizedName, {
        //     set: (value) => this.setAttribute(name, value),
        //     get: _ => {
        //         return this.getAttribute(name)
        //     }
        // })
    }

    initWjElement = async (force = false) => {
        this.functionStack = [];

        const processId = Date.now();
        this.functionStack.push(processId);

        this.setupAttributes?.();
        if (this.isShadowRoot) {
            !this.shadowRoot && this.attachShadow({mode: this.shadowType || 'open'});
        }

        if (this.constructor.CSS) {
            let stylesToAdopt = this.constructor.CSS()
            if (Array.isArray(stylesToAdopt)) {

                await Promise.all(stylesToAdopt.map(path => {
                    return WjImport.call(this, path)
                })).then()

            } else {
                WjImport.call(this, stylesToAdopt)
            }
        }

        this.setUpAccessors();

        this.drawingStatus = 'BEGINING';

        this.display(force, processId);

        // RHR - zatial zakomentované pokiaľ by to pokazilo niečo iné
        // for (let i = 0; i < this.childNodes.length; i++) {
        //     let child = this.childNodes[i];
        //     this.append(child);
        // }
    };

    setupAttributes() {}

    beforeDisconnect() {}

    disconnectedCallback() {
        this.beforeDisconnect?.();

        if (this.isAttached) this.context.innerHTML = '';

        this.isAttached = false;

        // Odmazanie pôvodných tooltipov, dobré v prípade prekreslovania
        while (this.generatedTooltips.length) {
            let a = this.generatedTooltips.pop();
            a?.hide();
            a?.remove();
        }

        this.afterDisconnect?.();
    }

    /**
     * Lifecycle method, called whenever an observed property changes
     */
    attributeChangedCallback(name, old, newName) {
        // console.log(!this.isAttached,name, old, newName, old !== newName)
        if(!this.isAttached && old !== newName){
            this.scheludedRefresh = true;
            return;
        }

        if (old !== newName) {
            this.refresh();
        }
    }

    async refresh() {
        this.refreshUpdatePromise()
        if (this.drawingStatus != 'AFTER') {
            this.afterDisconnect?.();
            await this.initWjElement(true);
        } else {
            await this.initWjElement(true);
        }
        // if(!this.runtimeTimeout){
        //
        // } else {
        //     this.afterDisconnect?.()
        //     // clearTimeout(this.runtimeTimeout)
        //     // this.runtimeTimeout = this.makeRuntimeTimeout(()=>{
        //         // this.innerHTML = ''
        //         // this.context.innerHTML = ''
        //     // })
        // }
    }

    /**
     * To be implemented by the child class
     */
    draw(context, store, params) {
        return null;
    }

    display(force = false, processId) {
        if (this.isProcessingFlow(processId)) return;

        if (force) {
            [...this.context.children].forEach(this.context.removeChild.bind(this.context));
            this.isAttached = false;
        }
        if (this.isAttached) {
            console.log('Already rendered...', this);
            // return;
        }

        this.context.append(this.template.content.cloneNode(true));

        if (this.isPermissionCheck || this.isShow) {
            if (WjPermissionsApi.isPermissionFulfilled.bind(this)(this.permission)) {
                this._resolveRender(processId);
            } else {
                this.remove();
            }
        } else {
            this._resolveRender(processId);
        }

        // TODO experiment�lne posielanie funkcii cez custom attributy
        // this.context.querySelectorAll(`[event-click]`).forEach(el=>{
        //     el.addEventListener('click', this[el.getAttribute('event-click')])
        // })
    }

    render(processId) {
        this.drawingStatus = 'DRAWING';

        if (this.isProcessingFlow(processId)) return;
        let rend = this.draw(this.context, this.store, WjElementUtils.getAttributes(this)) || '';
        let element;

        if (rend instanceof HTMLElement || rend instanceof DocumentFragment) {
            element = rend;
        } else {
            let template = document.createElement('template');
            template.innerHTML = rend;
            element = template.content.cloneNode(true);
        }

        let rendered = element;
        // this.isAttached = true;

        if (this.isProcessingFlow(processId)) return;
        this.context.appendChild(rendered);
    }

    /**
     * Turns a string split with "-" into camel case notation
     */
    sanitizeName(name) {
        let parts = name.split('-');
        return [parts.shift(), ...parts.map((n) => n[0].toUpperCase() + n.slice(1))].join('');
    }

    /**
     * Creates one property on this class for every
     * HTML property defined on the element
     */
    setUpAccessors() {
        let attrs = this.getAttributeNames();
        attrs.forEach((name) => {
            const sanitizedName = this.sanitizeName(name);
            if (this[sanitizedName] == undefined) {
                Object.defineProperty(this, sanitizedName, {
                    set: (value) => this.setAttribute(name, value),
                    get: (_) => {
                        return this.getAttribute(name);
                    },
                });
            }
        });
    }

    isProcessingFlow(processId){
        return !this.functionStack.find((d) => d == processId)
    }

    _resolveRender(processId) {
        if (this.isProcessingFlow(processId)) return;

        this.params = WjElementUtils.getAttributes(this);

        Promise.resolve(this.beforeDraw(this.context, this.store, WjElementUtils.getAttributes(this))).then((res) => {
            this.drawingStatus = 'BEFORE';

            this.render(processId);

            if (this.isProcessingFlow(processId)) return;
            Promise.resolve(this.afterDraw?.(this.context, this.store, WjElementUtils.getAttributes(this))).then(
                (a, b, c) => {
                    this.drawingStatus = 'AFTER';

                    // RHR toto je bicykel pre slickRouter  pretože routovanie nieje vykonané pokiaľ sa nezavolá updateComplete promise,
                    // toto bude treba rozšíriť aby sme lepšie vedeli kontrolovať vykreslovanie elementov, a flow hookov.
                    this.finisPromise();

                    this.tooltip();
                    this.rendering = false;
                    this.isAttached = true;

                    this.removeClassAfterConnect && this.classList.remove(...this.removeClassAfterConnect);

                    // this.observer?.disconnect()
                    // const config = {
                    //     attributes: true,
                    //     childList: false,
                    //     subtree: false,
                    //     characterData: false,
                    //     characterDataOldValue: false,
                    // };
                    //
                    // this.observer = new MutationObserver(()=>{this.refresh()});
                    // this.observer.observe(this, config);


                    if(this.scheludedRefresh){
                        this.refresh()
                        this.scheludedRefresh = false;
                    }
                }
            );
        });
    }

    tooltip() {
        // Odmazanie pôvodných tooltipov, dobré v prípade prekreslovania
        while (this.generatedTooltips.length) {
            let a = this.generatedTooltips.pop();
            a?.hide();
            a?.remove();
        }

        this.context.querySelectorAll('[wj-tooltip]').forEach((el) => {
            // WjElementUtils.initTooltip(el).then((ret) => {
            //     this.generatedTooltips.push(ret);
            // });
        });
    }
}

let __esModule = 'true';
export {__esModule, WjPermissionsApi, WjElementUtils};

customElements.get("wj-element") || customElements.define("wj-element", WJElement);
