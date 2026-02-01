import { UniversalService } from '../utils/universal-service.js';
import { Permissions } from '../utils/permissions.js';
import { WjElementUtils } from '../utils/element-utils.js';
import { event } from '../utils/event.js';
import { defaultStoreActions, store } from '../wje-store/store.js';

const template = document.createElement('template');
template.innerHTML = ``;

export default class WJElement extends HTMLElement {
	#drawingStatus;
	#isAttached;
	#isRendering;
	#originalVisibility;
	#pristine;

	/**
	 * Initializes a new instance of the WJElement class.
	 */

	constructor() {
		super();

		this.#isAttached = false;
		this.service = new UniversalService({
			store: store,
		});

		// definujeme vsetky zavislosti.
		// Do zavislosti patria len komponenty, ktore su zavisle od ktoreho je zavisly tento komponent
		this.defineDependencies();

		this.#isRendering = false;
		this._dependencies = {};

		/**
		 * @typedef {object} DrawingStatuses
		 * @property {number} CREATED - The component has been created.
		 * @property {number} ATTACHED - The component has been attached to the DOM.
		 * @property {number} BEGINING - The component is beginning to draw.
		 * @property {number} START - The component has started drawing.
		 * @property {number} DRAWING - The component is drawing.
		 * @property {number} DONE - The component has finished drawing.
		 * @property {number} DISCONNECTED - The component has been disconnected from the DOM.
		 */

		/**
		 * WJElement is a base class for custom web components with managed lifecycle, attribute/property sync,
		 * permission-based visibility, and extensibility hooks.
		 * @property {boolean} isAttached - True if the component is currently attached to the DOM.
		 * @property {DrawingStatuses} drawingStatuses - Enum of possible drawing states.
		 * @property {number} drawingStatus - Current drawing status (see drawingStatuses).
		 * @property {boolean} _pristine - True if the component has not been updated since last render.
		 * @property {boolean} isRendering - True if a render is currently in progress.
		 * @property {number|null} rafId - ID of the scheduled animation frame for rendering, or null.
		 * @property {string|null} originalVisibility - Stores the original CSS visibility before rendering.
		 * @property {object} params - Stores the current attributes/properties for rendering.
		 * @property {Promise<void>} updateComplete - Promise resolved when the current update/render is complete.
		 * @property {string[]} permission - List of required permissions (from 'permission' attribute).
		 * @property {boolean} isPermissionCheck - Whether permission checking is enabled (from 'permission-check' attribute).
		 * @property {boolean} noShow - Whether the element should be hidden (from 'no-show' attribute).
		 * @property {string|undefined} isShadowRoot - Value of the 'shadow' attribute, if present.
		 * @property {boolean} hasShadowRoot - True if the 'shadow' attribute is present.
		 * @property {string} shadowType - Type of shadow root ('open' by default).
		 * @property {object} store - Reference to the global store instance.
		 * @property {object} defaultStoreActions - Default store actions for arrays and objects.
		 * @property {string[]|undefined} removeClassAfterConnect - Classes to remove after connect (from 'remove-class-after-connect' attribute).
		 * @property {object} dependencies - Registered component dependencies.
		 * @property {HTMLElement|ShadowRoot} context - The rendering context (shadow root or element itself).
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

		this.#drawingStatus = this.drawingStatuses.CREATED;

		this.#pristine = true;
		this.#isRendering = false;
		this.rafId = null;
		this.#originalVisibility = null;
		this.params = {};

		this.updateComplete = new Promise((resolve, reject) => {
			this.finisPromise = resolve;
			this.rejectPromise = reject;
		});
	}

	get drawingStatus() {
		return this.#drawingStatus;
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
		if (this.dependencies) {
			Object.entries(this.dependencies).forEach(([name, component]) => WJElement.define(name, component));
		}
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
	 * Optional hook: return skeleton markup used while async draw is in progress.
	 * Prefer declarative skeleton via `<div slot="skeleton">...</div>`.
	 * Return: string | Node | DocumentFragment | null | Promise of those.
	 */
	renderSkeleton(params) {
		return null;
	}

	/**
	 * Retrieves the delay duration for the skeleton display, determining the value based on a hierarchy of overrides and defaults.
	 * The method prioritizes in the following order:
	 * 1. A finite number set as the `_wjSkeletonDelayOverride` property.
	 * 2. A valid numeric value from the `skeleton-delay` attribute.
	 * 3. The `skeletonDelayMs` property, if defined with a finite number.
	 * 4. A default value of 150 if none of the above are set.
	 * @returns {number} The delay in milliseconds before the skeleton is displayed.
	 */
	get skeletonDelay() {
		if (Number.isFinite(this._wjSkeletonDelayOverride)) return this._wjSkeletonDelayOverride;

		const v = this.getAttribute('skeleton-delay');
		const n = (v === null || v === undefined) ? NaN : Number(v);
		if (Number.isFinite(n)) return n;

		if (Number.isFinite(this.skeletonDelayMs)) return this.skeletonDelayMs;

		return 150;
	}

	/**
	 * Retrieves the minimum duration for the skeleton animation.
	 * The method checks for an internally stored finite value. If unavailable,
	 * it retrieves the value from the 'skeleton-min-duration' attribute,
	 * converts it to a number if possible, and uses it. If neither is valid,
	 * a default duration of 300 is returned.
	 * @returns {number} The minimum duration for the skeleton animation in milliseconds.
	 */
	get skeletonMinDuration() {
		if (Number.isFinite(this._wjSkeletonMinDurationOverride)) return this._wjSkeletonMinDurationOverride;

		const v = this.getAttribute('skeleton-min-duration');
		const n = (v === null || v === undefined) ? NaN : Number(v);
		if (Number.isFinite(n)) return n;

		return 300;
	}

	/**
	 * Sets the minimum duration for the skeleton state. If the provided value is null, undefined, or an empty string,
	 * the override for the minimum duration is removed.
	 * @param {string|number|null|undefined} value The minimum duration to be set for the skeleton state. It can be a numeric value, string representation of a number, or null/undefined to reset the value.
	 */
	set skeletonMinDuration(value) {
		if (value === null || value === undefined || value === '') {
			delete this._wjSkeletonMinDurationOverride;
			this.removeAttribute('skeleton-min-duration');
			return;
		}
		const n = Number(value);
		if (Number.isFinite(n)) {
			this._wjSkeletonMinDurationOverride = n;
			this.setAttribute('skeleton-min-duration', String(n));
		}
	}

	/**
	 * Sets or removes the 'skeleton' attribute based on the provided value.
	 * @param {boolean} value A boolean value indicating whether to set ('true') or remove ('false') the 'skeleton' attribute.
	 */
	set skeleton(value) {
		if (value) this.setAttribute('skeleton', '');
		else this.removeAttribute('skeleton');
	}

	/**
	 * Checks if the 'skeleton' attribute is present on the element.
	 * @returns {boolean} True if the 'skeleton' attribute exists, false otherwise.
	 */
	get skeleton() {
		return this.hasAttribute('skeleton');
	}

	/**
	 * Sets the delay for the skeleton loading indicator.
	 * @param {string|number|null|undefined} value The delay value to be set. Accepts a numerical value,
	 * a string that can be converted to a number, null, or undefined.
	 * If null or undefined is provided, the skeleton delay will be cleared.
	 */
	set skeletonDelay(value) {
		if (value === null || value === undefined || value === '') {
			delete this._wjSkeletonDelayOverride;
			this.removeAttribute('skeleton-delay');
			return;
		}
		const n = Number(value);
		if (Number.isFinite(n)) {
			this._wjSkeletonDelayOverride = n;
			this.setAttribute('skeleton-delay', String(n));
		}
	}

	/**
	 * Retrieves the delay value used for skeleton loading.
	 * @returns {number} The delay value for the skeleton loader.
	 */
	get skeletonDelayValue() {
		return this.skeletonDelay;
	}

	/**
	 * Lifecycle method invoked when the component is connected to the DOM.
	 */
	connectedCallback() {
		if (!this.#isRendering) {
			this.#originalVisibility = this.#originalVisibility ?? this.style.visibility;
			this.style.visibility = 'hidden';

			this.setupAttributes?.();
			this.setUpAccessors();

			this.#drawingStatus = this.drawingStatuses.ATTACHED;
			this.#pristine = false;
			this.#enqueueUpdate();
		}
	}

	/**
	 * Initializes the component, setting up attributes and rendering.
	 * @param [force] Whether to force initialization.
	 * @returns A promise that resolves when initialization is complete.
	 */
	initWjElement = (force = false) => {
		return new Promise(async (resolve, reject) => {
			this.#drawingStatus = this.drawingStatuses.BEGINING;

			this.setupAttributes?.();
			if (this.hasShadowRoot) {
				if (!this.shadowRoot) this.attachShadow({ mode: this.shadowType || 'open', delegatesFocus: true });
			}
			this.setUpAccessors();

			this.#drawingStatus = this.drawingStatuses.START;

			// Adopt component + skeleton styles BEFORE display, so skeleton is visible in Shadow DOM.
			const sheet = new CSSStyleSheet();
			sheet.replaceSync(this.constructor.cssStyleSheet);

			if (this.shadowRoot) {
				const existing = this.shadowRoot.adoptedStyleSheets || [];
				const next = [...existing];

				if (!next.includes(sheet)) next.push(sheet);

				this.shadowRoot.adoptedStyleSheets = next;
			}

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
		if (this.#isAttached) {
			this.beforeDisconnect?.();
			this.context.innerHTML = '';
			this.afterDisconnect?.();
			this.#isAttached = false;
			this.style.visibility = this.#originalVisibility;
			this.#originalVisibility = null;
		}

		if (this.#isRendering) {
			this.stopRenderLoop();
		}

		this.#drawingStatus = this.drawingStatuses.DISCONNECTED;

		this.componentCleanup();
	}

	/**
	 * Enqueues an update for the component.
	 * This method processes the current render promise and then refreshes the component.
	 */
	#enqueueUpdate() {
		if (!this.#isRendering) {
			this.rafId = requestAnimationFrame(() => this.#refresh());
		}
	}

	/**
	 * Lifecycle method invoked when an observed attribute changes.
	 * @param name The name of the attribute that changed.
	 * @param old The old value of the attribute.
	 * @param newName The new value of the attribute.
	 */
	attributeChangedCallback(name, old, newName) {
		if (old !== newName) {
			this.#pristine = false;
			this.#enqueueUpdate();
		}
	}

	/**
	 * Triggers a refresh operation by initializing the update lifecycle and setting up promises
	 * to track its completion or failure status. Marks the instance as not pristine and queues
	 * an update.
	 * @returns {void} Does not return a value.
	 */
	refresh() {
		this.updateComplete = new Promise((resolve, reject) => {
			this.finisPromise = resolve;
			this.rejectPromise = reject;
		});

		this.#pristine = false;
		this.#enqueueUpdate();
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
	 */
	async #refresh() {
		if (this.#isRendering) {
			this.rafId = requestAnimationFrame(() => this.#refresh());
			return; // Skip if async render is still processing
		}

		if (!this.#pristine) {
			this.#pristine = true;
			this.#isRendering = true;

			if (this.#isAttached) {
				this.beforeRedraw?.();
				this.beforeDisconnect?.();
				this.afterDisconnect?.();
			} else {
				this.stopRenderLoop();
			}

			try {
				await this.initWjElement(true);
			} catch (error) {
				console.error('Render error:', error);
			} finally {
				this.#isRendering = false;

				if (!this.#pristine) {
					this.#pristine = false;
					this.#enqueueUpdate();
				} else {
					this.finisPromise();
					this.style.visibility = this.#originalVisibility;
				}
			}
		}
	}

	/**
	 * Stops the current render loop if it is running by canceling the requestAnimationFrame.
	 * @returns {void} This method does not return a value.
	 */
	stopRenderLoop() {
		if (this.rafId) {
			cancelAnimationFrame(this.rafId);
			this.rafId = null;
		}
	}

	/**
	 * Displays the component's content, optionally forcing a re-render.
	 * @param [force] Whether to force a re-render.
	 * @returns A promise that resolves when the display is complete.
	 */
	display(force = false) {
		this.template = this.constructor.customTemplate || document.createElement('template');

		// Build the next context offscreen
		const nextContext = document.createDocumentFragment();
		nextContext.append(this.template.content.cloneNode(true));

		// Check permission/noShow before DOM swap
		if (this.noShow || (this.isPermissionCheck && !Permissions.isPermissionFulfilled(this.permission))) {
			this.remove();
			return Promise.resolve();
		}

		let skeletonTimer = null;
		let renderFinished = false;
		let skeletonShownAt = null;

		const clearSkeletonTimer = () => {
			if (skeletonTimer) {
				clearTimeout(skeletonTimer);
				skeletonTimer = null;
			}
		};

		const buildSkeletonFragment = async () => {
			const slotted = this.querySelector('[slot="skeleton"]');

			if (slotted) {
				if (this.hasShadowRoot) {
					const frag = document.createDocumentFragment();
					const slot = document.createElement('slot');
					slot.name = 'skeleton';
					frag.append(slot);
					return frag;
				}

				const frag = document.createDocumentFragment();
				frag.append(slotted.cloneNode(true));
				return frag;
			}

			const frag = document.createDocumentFragment();

			let skel = this.renderSkeleton?.(WjElementUtils.getAttributes(this));

			if (skel instanceof Promise || skel?.constructor?.name === 'Promise') {
				skel = await skel;
			}

			if (skel === null || skel === undefined) return null;

			let node;

			if (skel instanceof HTMLElement || skel instanceof DocumentFragment) {
				node = skel;
			} else {
				const t = document.createElement('template');
				t.innerHTML = skel;
				node = t.content.cloneNode(true);
			}
			frag.append(node);
			return frag;
		};

		const showSkeleton = async () => {
			if (renderFinished) return;
			if (!this.hasAttribute('skeleton')) return;

			const frag = await buildSkeletonFragment();
			if (!frag) return;

			try {
				const cs = getComputedStyle(this);
				if (cs.display === 'inline') this.style.display = 'block';
				if (cs.width === '0px') this.style.width = '100%';
			} catch (e) {
				// ignore
			}

			// REPLACE mode only
			if (this.hasShadowRoot) {
				this.shadowRoot.replaceChildren(frag);
			} else {
				this.replaceChildren(frag);
			}

			skeletonShownAt = performance.now();

			this.dispatchEvent(new CustomEvent('wj:skeleton:show', {
				detail: { delay: this.skeletonDelay },
				bubbles: true,
				composed: true,
			}));
			if (this.hasAttribute('debug-skeleton')) {
				debugger;
			}
		};

		if (this.hasAttribute('skeleton') && this.style.visibility === 'hidden') {
			this.style.visibility = this.#originalVisibility ?? 'visible';
		}

		let skeletonPlannedAt;

		if (this.hasAttribute('skeleton')) {
			skeletonPlannedAt = performance.now();
			skeletonTimer = setTimeout(() => {
				showSkeleton();
			}, this.skeletonDelay);
		}

		return this.#resolveRender(nextContext, { skipAfterDraw: true })
			.then(async () => {
				renderFinished = true;
				clearSkeletonTimer();

				if (skeletonShownAt === null) {
					const elapsed = skeletonPlannedAt ? (performance.now() - skeletonPlannedAt) : 0;
					this.dispatchEvent(new CustomEvent('wj:skeleton:skip', {
						detail: { reason: 'render-finished-fast', elapsedMs: elapsed, delay: this.skeletonDelay },
						bubbles: true,
						composed: true,
					}));
				} else {
					// Skeleton was shown: enforce minimum visible duration to avoid flashing
					const now = performance.now();
					const visibleFor = now - skeletonShownAt;
					const remaining = this.skeletonMinDuration - visibleFor;
					if (remaining > 0) {
						await new Promise((r) => setTimeout(r, remaining));
					}
				}

				if (this.hasShadowRoot) {
					this.shadowRoot.replaceChildren(nextContext);
				} else {
					this.replaceChildren(nextContext);
				}

				if (skeletonShownAt !== null) {
					this.dispatchEvent(new CustomEvent('wj:skeleton:hide', {
						detail: {
							reason: 'render-finished',
							visibleMs: Math.max(this.skeletonMinDuration, performance.now() - skeletonShownAt),
							delay: this.skeletonDelay,
							minDuration: this.skeletonMinDuration,
						},
						bubbles: true,
						composed: true,
					}));
				}

				const liveContext = this.hasShadowRoot ? this.shadowRoot : this;
				const _afterDraw = this.afterDraw?.(liveContext, this.store, WjElementUtils.getAttributes(this));
				if (_afterDraw instanceof Promise || _afterDraw?.constructor.name === 'Promise') {
					await _afterDraw;
				}
			})
			.finally(() => {
				renderFinished = true;
				clearSkeletonTimer();
				if (!this.#isRendering) {
					this.dispatchEvent(new CustomEvent('wj:skeleton:hide', {
						detail: { reason: 'finally' },
						bubbles: true,
						composed: true,
					}));
				}
			});
	}

	/**
	 * Renders the content into the provided target context.
	 * This method handles asynchronous rendering, processes the output from the `draw` method,
	 * and appends the resulting content to the specified target context.
	 * @returns {Promise<void>} A promise that resolves once the render operation is complete and the content is appended to the target context.
	 * @param targetContext
	 */
	async render(targetContext = this.context) {
		this.#drawingStatus = this.drawingStatuses.DRAWING;

		let _draw = this.draw(targetContext, this.store, WjElementUtils.getAttributes(this));

		if (_draw instanceof Promise || _draw?.constructor.name === 'Promise') {
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

		targetContext.appendChild(rendered);
	}

	/**
	 * Sanitizes a given name by converting it from kebab-case to camelCase.
	 * @param {string} name The name in kebab-case format (e.g., "example-name").
	 * @returns {string} The sanitized name in camelCase format (e.g., "exampleName").
	 * @example
	 * sanitizeName('example-name');
	 * @example
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
	 * checkGetterSetter(obj, 'name');
	 * @example
	 * const obj = { prop: 42 };
	 * checkGetterSetter(obj, 'prop');
	 */
	checkGetterSetter(obj, property) {
		let descriptor = Object.getOwnPropertyDescriptor(obj, property);

		if (descriptor) {
			return {
				hasGetter: typeof descriptor.get === 'function' ? descriptor.get : null,
				hasSetter: typeof descriptor.set === 'function' ? descriptor.set : null,
			};
		}

		let proto = Object.getPrototypeOf(obj);
		if (proto) {
			return this.checkGetterSetter(proto, property);
		}

		return { hasGetter: null, hasSetter: null };
	}

	/**
	 * Sets up accessors (getter and setter) for all attributes of the current object.
	 * This method retrieves the attribute names, sanitizes them, and dynamically defines
	 * property accessors for each attribute using `Object.defineProperty`.
	 * @returns {void} This method does not return any value.
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
	 * Resolves the rendering process of the component, using the given target context.
	 * @param {HTMLElement|ShadowRoot|DocumentFragment} targetContext Target for rendering (defaults to this.context)
	 * @returns A promise that resolves when rendering is complete.
	 * @private
	 */
	#resolveRender(targetContext = this.context, { skipAfterDraw = false } = {}) {
		this.params = WjElementUtils.getAttributes(this);

		return new Promise(async (resolve, reject) => {
			const _beforeDraw = this.beforeDraw(targetContext, this.store, WjElementUtils.getAttributes(this));

			if (_beforeDraw instanceof Promise || _beforeDraw?.constructor.name === 'Promise') {
				await _beforeDraw;
			}

			await this.render(targetContext);

			if (!skipAfterDraw) {
				const _afterDraw = this.afterDraw?.(targetContext, this.store, WjElementUtils.getAttributes(this));

				if (_afterDraw instanceof Promise || _afterDraw?.constructor.name === 'Promise') {
					await _afterDraw;
				}
			}

			// RHR toto je bicykel pre slickRouter  pretože routovanie nieje vykonané pokiaľ sa nezavolá updateComplete promise,
			// toto bude treba rozšíriť aby sme lepšie vedeli kontrolovať vykreslovanie elementov, a flow hookov.
			this.#isRendering = false;
			this.#isAttached = true;

			if (this.removeClassAfterConnect) {
				this.classList.remove(...this.removeClassAfterConnect);
			}

			this.#drawingStatus = this.drawingStatuses.DONE;

			resolve();
		}).catch((e) => {
			console.error(e);
		});
	}
}

let __esModule = 'true';
export { __esModule, Permissions, WjElementUtils, event };
