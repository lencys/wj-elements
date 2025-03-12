import { UniversalService } from './service/universal-service.js';
import { defaultStoreActions, store } from '../wje-store/store.js';
import { WjePermissionsApi } from '../utils/permissions-api.js';
import { WjElementUtils } from '../utils/element-utils.js';
import { event } from '../utils/event.js';

const template = document.createElement('template');
template.innerHTML = ``;

export default class WJElement extends HTMLElement {
    /**
     * Initializes a new instance of the WJElement class.
     */

    constructor() {
        super();

        this.isAttached = false;
        this.service = new UniversalService({
            store: store,
        });

        // definujeme vsetky zavislosti.
        // Do zavislosti patria len komponenty, ktore su zavisle od ktoreho je zavisly tento komponent
        this.defineDependencies();

        this.rendering = false;
        this._dependencies = {};

        /**
         * @typedef {CREATED | ATTACHED | BEGINING | START | DRAWING | DONE | DISCONNECTED} DrawingStatus
         * @property {number} CREATED - The component has been created.
         * @property {number} ATTACHED - The component has been attached to the DOM.
         * @property {number} BEGINING - The component is beginning to draw.
         * @property {number} START - The component has started drawing.
         * @property {number} DRAWING - The component is drawing.
         * @property {number} DONE - The component has finished drawing.
         * @property {number} DISCONNECTED - The component has been disconnected from the DOM.
         */
        this.drawingStatuses = {
            CREATED: 0,
            ATTACHED: 1,
            BEGINING: 2,
            START: 3,
            DRAWING: 4,
            DONE: 5,
            DISCONNECTED: 6,
        };

        this.drawingStatus = this.drawingStatuses.CREATED;
    }

    /**
     * Sets the value of the 'permission' attribute.
     * @param {string[]} value The value to set for the 'permission' attribute.
     */
    set permission(value) {
        this.setAttribute('permission', value.join(','));
    }

    /**
     * Gets the value of the 'permission-check' attribute.
     * @returns {string[]} The value of the 'permission' attribute.
     */
    get permission() {
        return this.getAttribute('permission')?.split(',') || [];
    }

    /**
     * Sets the 'permission-check' attribute.
     * @param {boolean} value The value to set for the 'permission-check' attribute.
     */
    set isPermissionCheck(value) {
        if (value) this.setAttribute('permission-check', '');
        else this.removeAttribute('permission-check');
    }

    /**
     * Checks if the 'permission-check' attribute is present.
     * @returns {boolean} True if the 'permission-check' attribute is present.
     */
    get isPermissionCheck() {
        return this.hasAttribute('permission-check');
    }

    set noShow(value) {
        if (value) this.setAttribute('no-show', '');
        else this.removeAttribute('no-show');
    }

    /**
     * Checks if the 'show' attribute is present.
     * @returns {boolean} True if the 'show' attribute is present.
     */
    get noShow() {
        return this.hasAttribute('no-show');
    }

    /**
     * Sets the 'shadow' attribute.
     * @param {string} value The value to set for the 'shadow' attribute.
     */
    set isShadowRoot(value) {
        return this.setAttribute('shadow', value);
    }

    get isShadowRoot() {
        return this.getAttribute('shadow');
    }

    /**
     * Checks if the 'shadow' attribute is present.
     * @returns {boolean} True if the 'shadow' attribute is present.
     */
    get hasShadowRoot() {
        return this.hasAttribute('shadow');
    }

    /**
     * Gets the value of the 'shadow' attribute or 'open' if not set.
     * @returns {string} The value of the 'shadow' attribute or 'open'.
     */
    get shadowType() {
        return this.getAttribute('shadow') || 'open';
    }

    /**
     * Gets the rendering context, either the shadow root or the component itself.
     * @returns The rendering context.
     */
    get context() {
        if (this.hasShadowRoot) {
            return this.shadowRoot;
        } else {
            return this;
        }
    }

    /**
     * Gets the store instance.
     * @returns {object} The store instance.
     */
    get store() {
        return store;
    }

    /**
     * @typedef {object} ArrayActions
     * @property {Function} addAction - Adds an item to the array.
     * @property {Function} deleteAction - Deletes an item from the array.
     * @property {Function} loadAction - Loads an array.
     * @property {Function} updateAction - Updates an item in the array.
     * @property {Function} addManyAction - Adds many items to the array.
     */

    /**
     * @typedef {object} ObjectActions
     * @property {Function} addAction - Replace old object with new object
     * @property {Function} deleteAction - Delete item based on key
     * @property {Function} updateAction - Update item based on key
     */

    /**
     * Gets the default store actions.
     * @returns The default store actions for arrays and objects.
     */
    get defaultStoreActions() {
        return defaultStoreActions;
    }

    /**
     * Gets the classes to be removed after the component is connected.
     * @returns An array of class names to remove.
     */
    get removeClassAfterConnect() {
        return this.getAttribute('remove-class-after-connect')?.split(' ');
    }

    /**
     * Sets the component dependencies.
     * @param value The dependencies to set.
     */
    set dependencies(value) {
        this._dependencies = value;
    }

    /**
     * Gets the component dependencies.
     * @returns The component dependencies.
     */
    get dependencies() {
        return this._dependencies;
    }

    /**
     * Processes and combines two templates into one.
     * @param pTemplate The primary template.
     * @param inputTemplate The secondary template.
     * @returns The combined template.
     */
    static processTemplates = (pTemplate, inputTemplate) => {
        const newTemplate = document.createElement('template');
        newTemplate.innerHTML = [inputTemplate.innerHTML, pTemplate?.innerHTML || ''].join('');
        return newTemplate;
    };

    /**
     * Defines a custom element if not already defined.
     * @param name The name of the custom element.
     * @param [elementConstructor] The constructor for the custom element.
     * @param [options] Additional options for defining the element.
     */
    static define(name, elementConstructor = this, options = {}) {
        const definedElement = customElements.get(name);

        if (!definedElement) {
            customElements.define(name, elementConstructor, options);
        }
    }

    /**
     * Defines component dependencies by registering custom elements.
     */
    defineDependencies() {
        if (this.dependencies)
            Object.entries(this.dependencies).forEach((name, component) => WJElement.define(name, component));
    }

    /**
     * Hook for extending behavior before drawing the component.
     * @param context The rendering context, usually the element's shadow root or main DOM element.
     * @param appStoreObj The global application store for managing state.
     * @param params Additional parameters or attributes for rendering the component.
     */
    beforeDraw(context, appStoreObj, params) {
        // Hook for extending behavior before drawing
    }

    /**
     * Renders the component within the provided context.
     * @param context The rendering context, usually the element's shadow root or main DOM element.
     * @param appStoreObj
     * @param params Additional parameters or attributes for rendering the component.
     * @returns This implementation does not render anything and returns `null`.
     * @description
     * The `draw` method is responsible for rendering the component's content.
     * Override this method in subclasses to define custom rendering logic.
     * @example
     * class MyComponent extends WJElement {
     *   draw(context, appStoreObj, params) {
     *     const div = document.createElement('div');
     *     div.textContent = 'Hello, world!';
     *     context.appendChild(div);
     *   }
     * }
     */
    draw(context, appStoreObj, params) {
        return null;
    }

    /**
     * Hook for extending behavior after drawing the component.
     * @param context The rendering context, usually the element's shadow root or main DOM element.
     * @param appStoreObj The global application store for managing state.
     * @param params Additional parameters or attributes for rendering the component.
     */
    afterDraw(context, appStoreObj, params) {
        // Hook for extending behavior after drawing
    }

    /**
     * Refreshes the update promise for rendering lifecycle management.
     */
    refreshUpdatePromise() {
        if (this.updateComplete) {
            this.rejectPromise('Update cancelled');
        }

        this.updateComplete = new Promise((resolve, reject) => {
            this.finisPromise = resolve;
            this.rejectPromise = reject;
        }).catch((e) => {
            // console.log(e);
        })
    }

    /**
     * Lifecycle method invoked when the component is connected to the DOM.
     */
    connectedCallback() {
        this.drawingStatus = this.drawingStatuses.ATTACHED;

        // RHR toto sa tiež týka slick routeru pretože on začal routovanie ešte pred vykreslením wjelementu
        this.refreshUpdatePromise();

        this.renderPromise = this.initWjElement(true);
    }

    /**
     * Initializes the component, setting up attributes and rendering.
     * @param [force] Whether to force initialization.
     * @returns A promise that resolves when initialization is complete.
     */
    initWjElement = (force = false) => {
        return new Promise(async (resolve, reject) => {
            this.drawingStatus = this.drawingStatuses.BEGINING;

            this.setupAttributes?.();
            if (this.hasShadowRoot) {
                if (!this.shadowRoot) this.attachShadow({ mode: this.shadowType || 'open' });
            }

            this.setUpAccessors();

            this.drawingStatus = this.drawingStatuses.START;
            await this.display(force);

            resolve();
        });
    };

    /**
     * Sets up attributes and event listeners for the component.
     * This method retrieves all custom events defined for the component
     * and adds event listeners for each of them. When an event is triggered,
     * it calls the corresponding method on the host element.
     */
    setupAttributes() {
        // Keď neaký element si zadefinuje funkciu "setupAttributes" tak sa obsah tejto funkcie nezavolá

        let allEvents = WjElementUtils.getEvents(this);
        allEvents.forEach((customEvent, domEvent) => {
            this.addEventListener(domEvent, (e) => {
                this.getRootNode().host[customEvent]?.();
            });
        });
    }

    /**
     * Hook for extending behavior before disconnecting the component.
     */
    beforeDisconnect() {
        // Hook for extending behavior before disconnecting
    }

    /**
     * Hook for extending behavior after disconnecting the component.
     */
    afterDisconnect() {
        // Hook for extending behavior after disconnecting
    }

    /**
     * Hook for extending behavior before redrawing the component.
     */
    beforeRedraw() {
        // Hook for extending behavior before redrawing
    }

    /**
     * Cleans up resources and event listeners for the component.
     */
    componentCleanup() {
        // Hook for cleaning up the component
    }

    /**
     * Lifecycle method invoked when the component is disconnected from the DOM.
     */
    disconnectedCallback() {
        this.beforeDisconnect?.();

        if (this.isAttached) this.context.innerHTML = '';
        this.isAttached = false;

        this.afterDisconnect?.();

        this.drawingStatus = this.drawingStatuses.DISCONNECTED;

        this.componentCleanup();
    }


    async processCurrentRenderPromise() {
        try {
            if (this.renderPromise && (this.renderPromise instanceof Promise || this.renderPromise?.constructor.name === "Promise")) {
                await this.renderPromise;
            }
        } catch (e) {
            console.error('An error occurred:', e);
            Promise.reject(e);
        }
    }

    /**
     * Enqueues an update to the component.
     * @returns A promise that resolves when the update is complete.
     */
    async enqueueUpdate() {
        await this.processCurrentRenderPromise();

        const result = this._refresh();

        if (result !== null) {
            await result;
        }

        this.renderPromise = null;
    }

    /**
     * Lifecycle method invoked when an observed attribute changes.
     * @param name The name of the attribute that changed.
     * @param old The old value of the attribute.
     * @param newName The new value of the attribute.
     */
    attributeChangedCallback(name, old, newName) {
        if (old !== newName) {
            this.renderPromise = this.enqueueUpdate();
        }
    }

    refresh() {
        this.renderPromise = this.enqueueUpdate();
    }

    /**
     * Refreshes the component by reinitializing it if it is in a drawing state.
     * This method checks if the component's drawing status is at least in the START state.
     * If so, it performs the following steps:
     * 1. Calls the `beforeRedraw` hook if defined.
     * 2. Calls the `beforeDisconnect` hook if defined.
     * 3. Refreshes the update promise to manage the rendering lifecycle.
     * 4. Calls the `afterDisconnect` hook if defined.
     * 5. Reinitializes the component by calling `initWjElement` with `true` to force initialization.
     * If the component is not in a drawing state, it simply returns a resolved promise.
     * @returns {Promise<void>} A promise that resolves when the refresh is complete.
     */
    _refresh() {
        if (this.drawingStatus && this.drawingStatus >= this.drawingStatuses.START) {
            this.beforeRedraw?.();
            this.beforeDisconnect?.();
            this.refreshUpdatePromise();
            this.afterDisconnect?.();

            return this.initWjElement(true);
        }

        return Promise.resolve();
    }

    /**
     * Renders the component within the provided context.
     * @param context The rendering context, usually the element's shadow root or main DOM element.
     * @param appStore The global application store for managing state.
     * @param params Additional parameters or attributes for rendering the component.
     * @returns This implementation does not render anything and returns `null`.
     * @description
     * The `draw` method is responsible for rendering the component's content.
     * Override this method in subclasses to define custom rendering logic.
     * @example
     * class MyComponent extends WJElement {
     *   draw(context, appStore, params) {
     *     const div = document.createElement('div');
     *     div.textContent = 'Hello, world!';
     *     context.appendChild(div);
     *   }
     * }
     */
    draw(context, appStore, params) {
        return null;
    }

    /**
     * Displays the component's content, optionally forcing a re-render.
     * @param [force] Whether to force a re-render.
     * @returns A promise that resolves when the display is complete.
     */
    display(force = false) {
        this.template = this.constructor.customTemplate || document.createElement('template');

        if (force) {
            [...this.context.childNodes].forEach(this.context.removeChild.bind(this.context));
            this.isAttached = false;
        }

        this.context.append(this.template.content.cloneNode(true));

        if (this.noShow || (this.isPermissionCheck && !WjePermissionsApi.isPermissionFulfilled(this.permission))) {
            this.remove();
            return Promise.resolve();
        }

        return this._resolveRender();
    }

    /**
     * Renders the component's content.
     */
    async render() {
        this.drawingStatus = this.drawingStatuses.DRAWING;

        let _draw = this.draw(this.context, this.store, WjElementUtils.getAttributes(this));

        if (_draw instanceof Promise || _draw?.constructor.name === "Promise") {
            _draw = await _draw;
        }

        let rend = _draw;
        let element;

        if (rend instanceof HTMLElement || rend instanceof DocumentFragment) {
            element = rend;
        } else {
            let inputTemplate = document.createElement('template');
            inputTemplate.innerHTML = rend;
            element = inputTemplate.content.cloneNode(true);
        }

        let rendered = element;

        this.context.appendChild(rendered);
    }

    /**
     * Sanitizes a given name by converting it from kebab-case to camelCase.
     * @param {string} name The name in kebab-case format (e.g., "example-name").
     * @returns {string} The sanitized name in camelCase format (e.g., "exampleName").
     * @example
     * // Returns 'exampleName'
     * sanitizeName('example-name');
     * @example
     * // Returns 'myCustomComponent'
     * sanitizeName('my-custom-component');
     */
    sanitizeName(name) {
        let parts = name.split('-');
        return [parts.shift(), ...parts.map((n) => n[0].toUpperCase() + n.slice(1))].join('');
    }

    /**
     * Checks if a property on an object has a getter or setter method defined.
     * @param {object} obj The object on which the property is defined.
     * @param {string} property The name of the property to check.
     * @returns {object} An object indicating the presence of getter and setter methods.
     * @property {Function|null} hasGetter The getter function if it exists, otherwise `null`.
     * @property {Function|null} hasSetter The setter function if it exists, otherwise `null`.
     * @example
     * const obj = {
     *   get name() { return 'value'; },
     *   set name(val) { console.log(val); }
     * };
     * // Returns { hasGetter: [Function: get name], hasSetter: [Function: set name] }
     * checkGetterSetter(obj, 'name');
     * @example
     * const obj = { prop: 42 };
     * // Returns { hasGetter: null, hasSetter: null }
     * checkGetterSetter(obj, 'prop');
     */
    checkGetterSetter(obj, property) {
        let descriptor = Object.getOwnPropertyDescriptor(obj, property);

        // Check if the descriptor is found on the object itself
        if (descriptor) {
            return {
                hasGetter: typeof descriptor.get === 'function' ? descriptor.get : null,
                hasSetter: typeof descriptor.set === 'function' ? descriptor.set : null,
            };
        }

        // Otherwise, check the prototype chain
        let proto = Object.getPrototypeOf(obj);
        if (proto) {
            return this.checkGetterSetter(proto, property);
        }

        // If the property doesn't exist at all
        return { hasGetter: null, hasSetter: null };
    }

    /**
     * Sets up property accessors for the component's attributes.
     */
    setUpAccessors() {
        let attrs = this.getAttributeNames();
        attrs.forEach((name) => {
            const sanitizedName = this.sanitizeName(name);

            const { hasGetter, hasSetter } = this.checkGetterSetter(this, sanitizedName);

            Object.defineProperty(this, sanitizedName, {
                set: hasSetter ?? ((value) => this.setAttribute(name, value)),
                get: hasGetter ?? (() => this.getAttribute(name)),
            });
        });
    }

    /**
     * Resolves the rendering process of the component.
     * @returns A promise that resolves when rendering is complete.
     * @private
     */
    _resolveRender() {
        this.params = WjElementUtils.getAttributes(this);

        return new Promise(async (resolve, reject) => {
            const __beforeDraw = this.beforeDraw(this.context, this.store, WjElementUtils.getAttributes(this));

            if (__beforeDraw instanceof Promise || __beforeDraw?.constructor.name === "Promise") {
                await __beforeDraw;
            }

            // APPEND CSS HERE
            const sheet = new CSSStyleSheet();
            sheet.replaceSync(this.constructor.cssStyleSheet);

            this.context.adoptedStyleSheets = [sheet];

            await this.render();

            const __afterDraw = this.afterDraw?.(this.context, this.store, WjElementUtils.getAttributes(this));

            if (__afterDraw instanceof Promise || __afterDraw?.constructor.name === "Promise") {
                await __afterDraw;
            }

            // RHR toto je bicykel pre slickRouter  pretože routovanie nieje vykonané pokiaľ sa nezavolá updateComplete promise,
            // toto bude treba rozšíriť aby sme lepšie vedeli kontrolovať vykreslovanie elementov, a flow hookov.
            this.finisPromise();

            this.rendering = false;
            this.isAttached = true;

            if (this.removeClassAfterConnect) {
                this.classList.remove(...this.removeClassAfterConnect);
            }

            this.drawingStatus = this.drawingStatuses.DONE;

            resolve();
        }).catch((e) => {
            console.log(e);
        });
    }
}

let __esModule = 'true';
export { __esModule, WjePermissionsApi, WjElementUtils, event };
