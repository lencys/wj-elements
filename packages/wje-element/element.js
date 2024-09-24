import { UniversalService } from './service/universal-service.js';
import { defaultStoreActions, store } from '../wje-store/store.js';
import { WjePermissionsApi } from '../utils/permissions-api.js';
import { WjElementUtils } from '../utils/element-utils.js';
import { event } from '../utils/event.js';

const template = document.createElement('template');
template.innerHTML = ``;

export default class WJElement extends HTMLElement {
	constructor(componentTemplate) {
		super();

		this.template = componentTemplate || template;

		this.isAttached = false;
		this.service = new UniversalService({
			store: store,
		});

		// definujeme vsetky zavislosti.
		// Do zavislosti patria len komponenty, ktore su zavisle od ktoreho je zavisly tento komponent
		this.definedependencies();

		this.rendering = false;
		this._dependencies = {};

		this.drawingStatuses = {
			ATTACHED: 1,
			BEGINING: 2,
			START: 3,
			DRAWING: 4,
			DONE: 5,
			DISCONNECTED: 6
		}
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

	// addAction,
	// deleteAction,
	// loadAction,
	// updateAction,
	// addManyAction

	/**
	 * @typedef {Object} ArrayActions
	 * @property {function} addAction - Indicates whether the Courage component is present.
	 * @property {function} deleteAction - Indicates whether the Power component is present.
	 * @property {function} loadAction - Indicates whether the Wisdom component is present.
	 * @property {function} updateAction - Indicates whether the Wisdom component is present.
	 */

	/**
	 * @typedef {Object} ObjectActions
	 * @property {function} addAction - Indicates whether the Courage component is present.
	 * @property {function} deleteAction - Indicates whether the Power component is present.
	 * @property {function} updateAction - Indicates whether the Wisdom component is present.
	 */

	/**
	 * @return {ArrayActions, ObjectActions}
	 */
	get defaultStoreActions() {
		return defaultStoreActions;
	}

	get removeClassAfterConnect() {
		return this.getAttribute('remove-class-after-connect')?.split(' ');
	}

	get dependencies() {
		return this._dependencies;
	}

	set dependencies(value) {
		this._dependencies = value;
	};

	static processTemplates = (pTemplate, template) => {
		const newTemplate = document.createElement('template');
		newTemplate.innerHTML = [template.innerHTML, pTemplate?.innerHTML || ''].join('');
		return newTemplate;
	};

	static define(name, elementConstructor = this, options = {}) {
		const definedElement = customElements.get(name);

		if (!definedElement) {
			customElements.define(name, elementConstructor, options);
			return;
		}
	}

	definedependencies() {
		if (this.dependencies)
			Object.entries(dependencies).forEach((name, component) => WJElement.define(name, component))
	}

	beforeDraw() { }

	afterDraw() { }

	refreshUpdatePromise() {
		this.updateComplete = new Promise((resolve, reject) => {
			this.finisPromise = resolve;
			this.rejectPromise = reject;
		});
	}

	async connectedCallback() {
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

	initWjElement = async (force = false) => {
		return new Promise(async (resolve, reject) => {
			this.drawingStatus = this.drawingStatuses.BEGINING

			this.setupAttributes?.();
			if (this.isShadowRoot) {
				!this.shadowRoot && this.attachShadow({ mode: this.shadowType || 'open' });
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

	setupAttributes() {
		// Keď neaký element si zadefinuje funkciu "setupAttributes" tak sa obsah tejto funkcie nezavolá

		let allEvents = WjElementUtils.getEvents(this);
		let events = allEvents.forEach((customEvent, domEvent) => {
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

	beforeDisconnect() { }

	disconnectedCallback() {
		this.beforeDisconnect?.();

		if (this.isAttached) this.context.innerHTML = '';
		this.isAttached = false;

		this.afterDisconnect?.();

		this.drawingStatus = this.drawingStatuses.DISCONNECTED
	}

	async enqueueUpdate() {
		try {
			await this.renderPromise
		} catch (e) {
			Promise.reject(e);
		}
		const result = this.refresh();

		if (result != null) {
			await result;
		}

		this.renderPromise = null;
	}

	/**
	 * Lifecycle method, called whenever an observed property changes
	 */
	attributeChangedCallback(name, old, newName) {
		if (old !== newName) {
			this.renderPromise = this.enqueueUpdate();
		}
	}

	async refresh() {
		if (this.drawingStatus && this.drawingStatus >= this.drawingStatuses.START) {
			this.beforeDisconnect?.();
			this.refreshUpdatePromise();
			this.afterDisconnect?.();

			return this.initWjElement(true);
		}
	}

	/**
	 * To be implemented by the child class
	 */
	draw(context, store, params) {
		return null;
	}

	display(force = false, signal) {
		if (force) {
			[...this.context.childNodes].forEach(this.context.removeChild.bind(this.context));
			this.isAttached = false;
		}

		this.context.append(this.template.content.cloneNode(true));

		if (this.isPermissionCheck || this.isShow) {
			if (WjePermissionsApi.isPermissionFulfilled.bind(this)(this.permission)) {
				this.drawingStatus = this.drawingStatuses.DRAWING;
				return this._resolveRender(signal);
			} else {
				this.remove();
			}
		} else {
			return this._resolveRender(signal);
		}
	}

	async render() {
		this.drawingStatus = 'DRAWING';

		let _draw = this.draw(this.context, this.store, WjElementUtils.getAttributes(this))

		if (_draw instanceof Promise) {
			_draw = await _draw;
		}

		let rend = _draw;
		let element;

		if (rend instanceof HTMLElement || rend instanceof DocumentFragment) {
			element = rend;
		} else {
			let template = document.createElement('template');
			template.innerHTML = rend;
			element = template.content.cloneNode(true);
		}

		let rendered = element;

		this.context.appendChild(rendered);
	}

	/**
	 * Turns a string split with "-" into camel case notation
	 */
	sanitizeName(name) {
		let parts = name.split('-');
		return [parts.shift(), ...parts.map((n) => n[0].toUpperCase() + n.slice(1))].join('');
	}

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
	 * Creates one property on this class for every
	 * HTML property defined on the element
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

	async _resolveRender(signal) {
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

			this.removeClassAfterConnect && this.classList.remove(...this.removeClassAfterConnect);
			this.drawingStatus = this.drawingStatuses.DONE;

			resolve();
		}).catch((e) => {
			console.log(e);
		});
	}
}

let __esModule = 'true';
export { __esModule, WjePermissionsApi, WjElementUtils, event };