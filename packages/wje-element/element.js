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
	 *
	 * @param {HTMLTemplateElement} [componentTemplate] - The template to use for this component.
	 */
	constructor(componentTemplate) {
		super();

		this.template = componentTemplate || template;

		this.isAttached = false;
		this.service = new UniversalService({
			store: store,
		});

		// definujeme vsetky zavislosti.
		// Do zavislosti patria len komponenty, ktore su zavisle od ktoreho je zavisly tento komponent
		this.defineDependencies();

		this.rendering = false;
		this._dependencies = {};

		this.drawingStatuses = {
			CREATED: 0,
			ATTACHED: 1,
			BEGINING: 2,
			START: 3,
			DRAWING: 4,
			DONE: 5,
			DISCONNECTED: 6
		}

		this.drawingStatus = this.drawingStatuses.CREATED;
	}

	/**
	 * Gets the value of the 'permission-check' attribute.
	 *
	 * @return {string|null} The value of the 'permission-check' attribute or null if not set.
	 */
	get permission() {
		return this.getAttribute('permission-check');
	}

	/**
	 * Sets the 'permission-check' attribute.
	 *
	 * @param {string} shadow - The value to set for the 'permission-check' attribute.
	 */
	set isPermissionCheck(shadow) {
		return this.setAttribute('permission-check', 'permission-check');
	}

	/**
	 * Checks if the 'permission-check' attribute is present.
	 *
	 * @return {boolean} True if the 'permission-check' attribute is present.
	 */
	get isPermissionCheck() {
		return this.hasAttribute('permission-check');
	}

	/**
	 * Checks if the 'show' attribute is present.
	 *
	 * @return {boolean} True if the 'show' attribute is present.
	 */
	get isShow() {
		return this.hasAttribute('show');
	}

	/**
	 * Sets the 'shadow' attribute.
	 *
	 * @param {string} shadow - The value to set for the 'shadow' attribute.
	 */
	set isShadowRoot(value) {
		return this.setAttribute('shadow', value);
	}

	/**
	 * Checks if the 'shadow' attribute is present.
	 *
	 * @return {boolean} True if the 'shadow' attribute is present.
	 */
	get isShadowRoot() {
		return this.hasAttribute('shadow');
	}

	/**
	 * Gets the value of the 'shadow' attribute or 'open' if not set.
	 *
	 * @return {string} The value of the 'shadow' attribute or 'open'.
	 */
	get shadowType() {
		return this.getAttribute('shadow') || 'open';
	}

	/**
	 * Gets the rendering context, either the shadow root or the component itself.
	 *
	 * @return {HTMLElement|ShadowRoot} The rendering context.
	 */
	get context() {
		if (this.isShadowRoot) {
			return this.shadowRoot;
		} else {
			return this;
		}
	}

	/**
	 * Gets the store instance.
	 *
	 * @return {Object} The store instance.
	 */
	get store() {
		return store;
	}

	/**
	 * @typedef {Object} ArrayActions
	 * @property {function} addAction - Adds an item to the array.
	 * @property {function} deleteAction - Deletes an item from the array.
	 * @property {function} loadAction - Loads an array.
	 * @property {function} updateAction - Updates an item in the array.
	 * @property {function} addManyAction - Adds many items to the array.
	 */

	/**
	 * @typedef {Object} ObjectActions
	 * @property {function} addAction - Replace old object with new object
	 * @property {function} deleteAction - Delete item based on key
	 * @property {function} updateAction - Update item based on key
	 */

	/**
	 * Gets the default store actions.
	 *
	 * @return {ArrayActions|ObjectActions} The default store actions.
	 */
	get defaultStoreActions() {
		return defaultStoreActions;
	}

	/**
	 * Gets the classes to be removed after the component is connected.
	 *
	 * @return {Array<string>} An array of class names to remove.
	 */
	get removeClassAfterConnect() {
		return this.getAttribute('remove-class-after-connect')?.split(' ');
	}

	/**
	 * Sets the component dependencies.
	 *
	 * @param {Object} value - The dependencies to set.
	 */
	set dependencies(value) {
		this._dependencies = value;
	};

	/**
	 * Gets the component dependencies.
	 *
	 * @return {Object} The dependencies.
	 */
	get dependencies() {
		return this._dependencies;
	}

	/**
	 * Processes and combines two templates into one.
	 *
	 * @param {HTMLTemplateElement} pTemplate - The primary template.
	 * @param {HTMLTemplateElement|null} inputTemplate - The secondary template.
	 * @return {HTMLTemplateElement} The combined template.
	 */
	static processTemplates = (pTemplate, inputTemplate) => {
		const newTemplate = document.createElement('template');
		newTemplate.innerHTML = [inputTemplate.innerHTML, pTemplate?.innerHTML || ''].join('');
		return newTemplate;
	};

	/**
	 * Defines a custom element if not already defined.
	 *
	 * @param {string} name - The name of the custom element.
	 * @param {WJElement} [elementConstructor=this] - The element constructor.
	 * @param {Object} [options={}] - Additional options for defining the element.
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
			Object.entries(this.dependencies).forEach((name, component) => WJElement.define(name, component))
	}


	/**
	 * Hook for extending behavior before drawing the component.
	 *
	 * @param {HTMLElement} context - The rendering context.
	 * @param {Object} store - The store instance.
	 * @param {Object} attributes - The component attributes.
	 */
	beforeDraw(context, appStore, attributes) {
		// Hook for extending behavior before drawing
	}

	/**
	 * Hook for extending behavior after drawing the component.
	 *
	 * @param {HTMLElement} context - The rendering context.
	 * @param {Object} store - The store instance.
	 * @param {Object} attributes - The component attributes.
	 */
	afterDraw(context, appStore, attributes) {
		// Hook for extending behavior after drawing
	}

	/**
	 * Refreshes the update promise for rendering lifecycle management.
	 */
	refreshUpdatePromise() {
		this.updateComplete = new Promise((resolve, reject) => {
			this.finisPromise = resolve;
			this.rejectPromise = reject;
		});
	}

	/**
	 * Lifecycle method invoked when the component is connected to the DOM.
	 */
	connectedCallback() {
		this.drawingStatus = this.drawingStatuses.ATTACHED;

		// RHR toto sa tiež týka slick routeru pretože on začal routovanie ešte pred vykreslením wjelementu
		this.finisPromise = (resolve) => {
			resolve();
		};
		this.rejectPromise = (reject) => {
			reject();
		};
		this.refreshUpdatePromise();

		this.renderPromise = this.initWjElement(true)
	}

	/**
	 * Initializes the component, setting up attributes and rendering.
	 *
	 * @param {boolean} [force=false] - Whether to force initialization.
	 * @return {Promise<void>} A promise that resolves when initialization is complete.
	 */
	initWjElement = (force = false) => {
		return new Promise(async (resolve, reject) => {
			this.drawingStatus = this.drawingStatuses.BEGINING

			this.setupAttributes?.();
			if (this.isShadowRoot) {
				if (!this.shadowRoot)
					this.attachShadow({ mode: this.shadowType || 'open' });
			}

			this.setUpAccessors();

			this.drawingStatus = this.drawingStatuses.START;
			await this.display(force);

			const sheet = new CSSStyleSheet();
			sheet.replaceSync(this.constructor.cssStyleSheet);

			this.context.adoptedStyleSheets = [sheet];

			resolve();
		})
	};

	/**
	 * Sets up attributes and event listeners for the component.
	 */
	setupAttributes() {
		// Keď neaký element si zadefinuje funkciu "setupAttributes" tak sa obsah tejto funkcie nezavolá

		let allEvents = WjElementUtils.getEvents(this);
		allEvents.forEach((customEvent, domEvent) => {
			this.addEventListener(domEvent, (e) => {
				this.getRootNode().host[customEvent]?.()

				// this.dispatchEvent(new CustomEvent(`${customEvent}`, {
				//     detail: {
				//         originalEvent: e,
				//         context: this
				//     },
				//     bubbles: true
				// }));
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

		this.drawingStatus = this.drawingStatuses.DISCONNECTED

		this.componentCleanup();
	}

	/**
	 * Enqueues an update to the component.
	 *
	 * @return {Promise<void>} A promise that resolves when the update is complete.
	 */
	async enqueueUpdate() {
		try {
			if (this.renderPromise && this.renderPromise instanceof Promise) {
				await this.renderPromise;
			}
		} catch (e) {
			console.error("An error occurred:", e);
			Promise.reject(e);
		}
		const result = this.refresh();

		if (result !== null) {
			await result;
		}

		this.renderPromise = null;
	}

	/**
	 * Lifecycle method invoked when an observed attribute changes.
	 *
	 * @param {string} name - The attribute name.
	 * @param {string} old - The old value of the attribute.
	 * @param {string} newName - The new value of the attribute.
	 */
	attributeChangedCallback(name, old, newName) {
		if (old !== newName) {
			this.renderPromise = this.enqueueUpdate();
		}
	}

	/**
	 * Refreshes the component.
	 *
	 * @return {Promise<void>} A promise that resolves when the refresh is complete.
	 */
	refresh() {
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
	 * Draws the component's content.
	 *
	 * @param {HTMLElement} context - The rendering context.
	 * @param {Object} appStore - The store instance.
	 * @param {Object} params - Parameters for drawing.
	 * @return {DocumentFragment|HTMLElement|string|null} The rendered content.
	 */
	draw(context, appStore, params) {
		return null;
	}

	/**
	 * Displays the component's content, optionally forcing a re-render.
	 *
	 * @param {boolean} [force=false] - Whether to force a re-render.
	 * @return {Promise<void>} A promise that resolves when the display is complete.
	 */
	display(force = false) {
		if (force) {
			[...this.context.childNodes].forEach(this.context.removeChild.bind(this.context));
			this.isAttached = false;
		}

		this.context.append(this.template.content.cloneNode(true));

		if (this.isPermissionCheck || this.isShow) {
			if (WjePermissionsApi.isPermissionFulfilled.bind(this)(this.permission)) {
				this.drawingStatus = this.drawingStatuses.DRAWING;
				return this._resolveRender();
			} else {
				this.remove();
				return Promise.resolve();
			}
		} else {
			return this._resolveRender();
		}
	}

	/**
	 * Renders the component's content.
	 */
	async render() {
		this.drawingStatus = this.drawingStatuses.DRAWING;

		let _draw = this.draw(this.context, this.store, WjElementUtils.getAttributes(this))

		if (_draw instanceof Promise) {
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
	 * Converts a hyphenated string to camelCase.
	 *
	 * @param {string} name - The string to sanitize.
	 * @return {string} The camelCase version of the string.
	 */
	sanitizeName(name) {
		let parts = name.split('-');
		return [parts.shift(), ...parts.map((n) => n[0].toUpperCase() + n.slice(1))].join('');
	}

	/**
	 * Checks if an object property has a getter or setter.
	 *
	 * @param {Object} obj - The object to check.
	 * @param {string} property - The property name.
	 * @return {Object} An object containing references to the getter and setter, if they exist.
	 */
	checkGetterSetter(obj, property) {
		let descriptor = Object.getOwnPropertyDescriptor(obj, property);

		// Check if the descriptor is found on the object itself
		if (descriptor) {
			return {
				hasGetter: typeof descriptor.get === 'function' ? descriptor.get : null,
				hasSetter: typeof descriptor.set === 'function' ? descriptor.set : null
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
				get: hasGetter ?? (() => this.getAttribute(name))
			});
		});
	}

	/**
	 * Resolves the rendering process of the component.
	 *
	 * @return {Promise<void>} A promise that resolves when rendering is complete.
	 * @private
	 */
	_resolveRender() {
		this.params = WjElementUtils.getAttributes(this);

		return new Promise(async (resolve, reject) => {
			const __beforeDraw = this.beforeDraw(this.context, this.store, WjElementUtils.getAttributes(this));

			if (__beforeDraw instanceof Promise) {
				await __beforeDraw;
			}

			await this.render();

			const __afterDraw = this.afterDraw?.(this.context, this.store, WjElementUtils.getAttributes(this));

			if (__afterDraw instanceof Promise) {
				await __afterDraw;
			}

			// RHR toto je bicykel pre slickRouter  pretože routovanie nieje vykonané pokiaľ sa nezavolá updateComplete promise,
			// toto bude treba rozšíriť aby sme lepšie vedeli kontrolovať vykreslovanie elementov, a flow hookov.
			this.finisPromise();

			this.rendering = false;
			this.isAttached = true;

			if(this.removeClassAfterConnect)
				this.classList.remove(...this.removeClassAfterConnect);

			this.drawingStatus = this.drawingStatuses.DONE;

			resolve();
		}).catch((e) => {
			console.log(e);
		});
	}
}

let __esModule = 'true';
export { __esModule, WjePermissionsApi, WjElementUtils, event };